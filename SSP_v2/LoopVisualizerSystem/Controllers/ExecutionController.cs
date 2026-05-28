using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Text.Json;
using System.IO;

namespace LoopVisualizerSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExecutionController : ControllerBase
    {
        [HttpPost("run")]
        public IActionResult ExecuteCode([FromBody] CodeRequest request)
        {
            if (string.IsNullOrEmpty(request.Code))
            {
                return BadRequest("Code workspace cannot be empty.");
            }

            // 1. 生成唯一的临时文件路径，规避 Windows 命令行转义死穴
            string tempInputFile = Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid()}_input.py");
            
            try
            {
                // 将学生输入的任何复杂 Python 代码安全地写入临时文件
                System.IO.File.WriteAllText(tempInputFile, request.Code);

                // 2. 跨语言安全调用本地 Python 引擎，直接把临时文件路径传过去
                ProcessStartInfo start = new ProcessStartInfo
                {
                    FileName = "python", 
                    Arguments = $"Engine/trace_engine.py \"{tempInputFile}\"",
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    CreateNoWindow = true
                };

                string jsonResult = "";
                using (Process process = Process.Start(start))
                {
                    using (StreamReader reader = process.StandardOutput)
                    {
                        jsonResult = reader.ReadToEnd();
                    }
                }

                // 3. 实时解析 Python 吐出来的结构化时序数据
                var rawSteps = JsonSerializer.Deserialize<List<TelemetryStep>>(jsonResult);
                var compiledSteps = GenerateExplanations(rawSteps);
                return Ok(compiledSteps);
            }
            catch (Exception ex)
            {
                // 如果发生错误，直接把底层最真实的堆栈喷给前端，一目了然
                return StatusCode(500, $"Engine parsing failed: {ex.Message} -> {ex.InnerException?.Message}");
            }
            finally
            {
                // 4. 无论执行成功或失败，物理层面销毁临时文件，保持系统无污染
                if (System.IO.File.Exists(tempInputFile))
                {
                    System.IO.File.Delete(tempInputFile);
                }
            }
        }

        private List<TelemetryStep> GenerateExplanations(List<TelemetryStep> steps)
        {
            if (steps == null || steps.Count == 0) return new List<TelemetryStep>();

            for (int i = 0; i < steps.Count; i++)
            {
                steps[i].StepNumber = i + 1;
                
                if (i == 0)
                {
                    steps[i].Explanation = "Virtual container initialized. Interpreter loaded the baseline instructions into memory stack.";
                    continue;
                }

                var prevVars = steps[i - 1].Variables;
                var currVars = steps[i].Variables;

                List<string> changes = new List<string>();
                foreach (var kvp in currVars)
                {
                    if (!prevVars.ContainsKey(kvp.Key))
                    {
                        changes.Add($"Variable `{kvp.Key}` was initialized and allocated to <span>\"{kvp.Value}\"</span>");
                    }
                    else if (prevVars[kvp.Key] != kvp.Value)
                    {
                        changes.Add($"Variable `{kvp.Key}` mutated from \"{prevVars[kvp.Key]}\" to <span>\"{kvp.Value}\"</span>");
                    }
                }

                if (changes.Count > 0)
                {
                    steps[i].Explanation = $"[Line {steps[i].Line}] Control flow executed. " + string.Join(", ", changes) + ".";
                }
                else
                {
                    steps[i].Explanation = $"[Line {steps[i].Line}] Pointer advanced forward. Internal variable state memory matrix remained stable.";
                }
            }
            return steps;
        }
    }

    public class CodeRequest { public string Code { get; set; } }
    
    public class TelemetryStep
    {
        public int StepNumber { get; set; }
        public int Line { get; set; }
        public Dictionary<string, string> Variables { get; set; } = new Dictionary<string, string>();
        public string Stdout { get; set; } = "";
        public string Explanation { get; set; } = "";
    }
}