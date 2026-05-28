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

            string tempInputFile = Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid()}_input.py");
            
            try
            {
                System.IO.File.WriteAllText(tempInputFile, request.Code);

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

                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                var payload = JsonSerializer.Deserialize<PythonResponsePayload>(jsonResult, options);
                
                if (payload != null && payload.Steps != null)
                {
                    payload.Steps = GenerateExplanations(payload.Steps);
                }
                
                return Ok(payload);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Engine parsing failed: {ex.Message} -> {ex.InnerException?.Message}");
            }
            finally
            {
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
                
                if (!string.IsNullOrEmpty(steps[i].Error))
                {
                    steps[i].Explanation = $"<span style='color: #f85149; font-weight: bold;'>[CRASH ALERT at Line {steps[i].Line}]</span> " +
                                           $"The execution engine safely intercepted a fatal runtime exception: <code>{steps[i].Error}</code>.";
                    continue;
                }

                if (i == 0)
                {
                    steps[i].Explanation = "Virtual container initialized. Interpreter loaded the baseline instructions into memory stack.";
                    continue;
                }

                // 统一降级提取变量纯文本字符串进行差值比对
                var prevVars = steps[i - 1].Variables;
                var currVars = steps[i].Variables;

                List<string> changes = new List<string>();
                foreach (var kvp in currVars)
                {
                    string currValueStr = kvp.Value.RawStr;
                    if (!prevVars.ContainsKey(kvp.Key))
                    {
                        changes.Add($"Variable `{kvp.Key}` was initialized and allocated to <span>\"{currValueStr}\"</span>");
                    }
                    else if (prevVars[kvp.Key].RawStr != currValueStr)
                    {
                        changes.Add($"Variable `{kvp.Key}` mutated to <span>\"{currValueStr}\"</span>");
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
    
    public class PythonResponsePayload
    {
        public List<TelemetryStep>? Steps { get; set; }
        // 传输集合拓扑关系字典
        public Dictionary<string, LoopRelationMeta>? Relations { get; set; }
    }

    public class LoopRelationMeta
    {
        public string ContainerName { get; set; } = "";
        public string Type { get; set; } = "";
    }
    
    public class TelemetryStep
    {
        public int StepNumber { get; set; }
        public int Line { get; set; }
        public Dictionary<string, VariableValuePack> Variables { get; set; } = new Dictionary<string, VariableValuePack>();
        public string Stdout { get; set; } = "";
        public string Explanation { get; set; } = "";
        public string Error { get; set; } = "";
    }

    public class VariableValuePack
    {
        public bool IsList { get; set; }
        public string RawStr { get; set; } = "";
        public List<string> Elements { get; set; } = new List<string>();
    }
}