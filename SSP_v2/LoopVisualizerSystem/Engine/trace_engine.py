import sys
import json
import io
import traceback
import ast

class LoopRelationAnalyzer:
    """分析代码，找出循环中变量与容器的集合隶属关系"""
    def __init__(self):
        self.relations = {}

    def analyze(self, code_string):
        try:
            root = ast.parse(code_string)
            for node in ast.walk(root):
                if isinstance(node, ast.For):
                    # 捕捉 for target in iter 结构
                    if isinstance(node.target, ast.Name) and isinstance(node.iter, ast.Name):
                        self.relations[node.target.id] = {
                            "container_name": node.iter.id,
                            "type": "loop_relationship"
                        }
        except:
            pass
        return self.relations

class TraceEngine:
    def __init__(self):
        self.steps = []
        self.stdout_buffer = io.StringIO()
        self.has_crashed = False

    def trace_lines(self, frame, event, arg):
        if self.has_crashed:
            return None
        if event == 'line':
            # 捕获局部变量真实的值，并尽量去解构列表内容
            local_vars = {}
            raw_locals = frame.f_locals.copy()
            
            for k, v in raw_locals.items():
                if k.startswith('__'): continue
                
                # 如果变量是列表，特殊打包其内部前三个元素供前端画小圆
                if isinstance(v, list):
                    local_vars[k] = {
                        "is_list": True,
                        "raw_str": str(v),
                        "elements": [str(x) for x in v[:3]] # 最多取3个元素
                    }
                else:
                    local_vars[k] = {
                        "is_list": False,
                        "raw_str": str(v),
                        "elements": []
                    }
                    
            current_stdout = self.stdout_buffer.getvalue()
            self.steps.append({
                "line": frame.f_lineno,
                "variables": local_vars,
                "stdout": current_stdout,
                "error": ""
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
            self.has_crashed = True
            sys.settrace(None)
            exc_type, exc_value, exc_tb = sys.exc_info()
            tb_details = traceback.extract_tb(exc_tb)
            error_line = tb_details[-1].lineno if tb_details else 0
            
            # 崩溃帧降级封装
            last_vars = {}
            if self.steps: last_vars = self.steps[-1]["variables"]
            
            self.steps.append({
                "line": error_line,
                "variables": last_vars,
                "stdout": self.stdout_buffer.getvalue(),
                "error": f"{exc_type.__name__}: {str(e)}"
            })
        finally:
            sys.settrace(None)
            sys.stdout = old_stdout

        return self.steps

if __name__ == "__main__":
    if len(sys.argv) > 1:
        target_file_path = sys.argv[1]
        with open(target_file_path, "r", encoding="utf-8") as f:
            student_code = f.read()
            
        engine = TraceEngine()
        trace_result = engine.execute(student_code)
        
        # 静态静态静态分析变量隶属结构
        analyzer = LoopRelationAnalyzer()
        meta_relations = analyzer.analyze(student_code)

        output_payload = {
            "steps": trace_result,
            "relations": meta_relations
        }
        print(json.dumps(output_payload))