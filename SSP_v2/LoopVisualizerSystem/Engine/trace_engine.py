import sys
import json
import io

class TraceEngine:
    def __init__(self):
        self.steps = []
        self.stdout_buffer = io.StringIO()

    def trace_lines(self, frame, event, arg):
        if event == 'line':
            # 过滤内置对象，仅捕获用户变量快照
            local_vars = {k: str(v) for k, v in frame.f_locals.items() if not k.startswith('__')}
            current_stdout = self.stdout_buffer.getvalue()
            
            self.steps.append({
                "line": frame.f_lineno,
                "variables": local_vars,
                "stdout": current_stdout
            })
        return self.trace_lines

    def execute(self, code_string):
        old_stdout = sys.stdout
        sys.stdout = self.stdout_buffer
        sys.settrace(self.trace_lines)
        
        try:
            global_space = {}
            exec(code_string, global_space, global_space)
        except Exception as e:
            print(f"Runtime Error: {str(e)}")
        finally:
            sys.settrace(None)
            sys.stdout = old_stdout

        return self.steps

if __name__ == "__main__":
    if len(sys.argv) > 1:
        target_file_path = sys.argv[1]
        
        # 从临时文件中安全安全读出全量代码字符串，完美避开命令行转义劫持
        with open(target_file_path, "r", encoding="utf-8") as f:
            student_code = f.read()
            
        engine = TraceEngine()
        trace_result = engine.execute(student_code)
        print(json.dumps(trace_result))