# SSP v4: Python Trace Practice Board

SSP v4 是一个本地运行的 Python 编程学习工具。它的核心目标不是让学生“背语法”，而是让学生看见程序真实执行过程：哪一行正在运行、变量如何变化、错误为什么发生、代码是否真的达成了任务目标。

当前版本已经从“多个学习模式让学生自己选择”调整为更清晰的学生路径：

```text
选择 Practice Topic -> 按 Level 1 到 Level 5 顺序练习 -> Compile & Run -> 看 Run Timeline 和反馈 -> 到 Dashboard 看成长
```

学生不需要选择 `Mission / Level`、`Prediction Game`、`Debug Detective` 这些内部设计概念。系统会根据题目阶段自动安排练习形式。

## Run The App

在 PowerShell 里进入主项目目录：

```powershell
cd D:\Desktop\test-SSP\SSP_v4\LoopVisualizerSystem
dotnet run --urls http://127.0.0.1:5057
```

然后在 Edge 里打开：

```text
http://127.0.0.1:5057/
```

如果页面没有更新，按 `Ctrl + F5` 强制刷新。

不要使用 `5061` 端口打开页面，Edge 可能会拦截并显示 `ERR_UNSAFE_PORT`。

## Requirements

- .NET SDK 9
- Python 3，并且 PowerShell 中至少有一个命令可用：

```powershell
python --version
py --version
```

如果 Python 不可用，网页可以打开，但 `Compile & Run` 无法生成代码执行轨迹。

## If The App Is Locked

如果运行或编译时出现类似：

```text
LoopVisualizerSystem.exe because it is being used by another process
```

说明旧的后端进程还在运行。可以先查找并停止旧进程：

```powershell
Get-Process LoopVisualizerSystem -ErrorAction SilentlyContinue
Get-Process LoopVisualizerSystem -ErrorAction SilentlyContinue | Stop-Process -Force
```

然后重新运行：

```powershell
dotnet run --urls http://127.0.0.1:5057
```

## Current Student Flow

1. 学生选择 `Practice Topic`，例如 `For Loop`、`Accumulator Pattern`、`Recursion Intro`。
2. 系统自动载入这个 Topic 的当前 Level。
3. 学生阅读 `Practice Path` 中的当前任务目标。
4. 学生修改 `Code`。
5. 点击 `Compile & Run`。
6. 如果程序顺利运行，`Run Timeline` 会显示每一步执行过程。
7. `Variables` 会显示变量最终和中间状态。
8. `Code` 中出现的变量名会被赋予不同颜色，并和 `Variables` 面板保持一致。
9. `Practice Path` 会自动判断本关是否通过。
10. 通过后，下一个 Level 自动解锁。
11. 学生可以切换到 `Dashboard` 查看进度、技能云和每个 Topic 的下一步。

## Practice Topic And Levels

每个 Topic 现在统一组织成 5 个 Level：

| Level | 学习阶段 | 目标 |
| --- | --- | --- |
| Level 1 | Fill a small blank | 完成一个很小的代码改动 |
| Level 2 | Complete one missing line | 补全关键的一行代码 |
| Level 3 | Complete the key block | 补全核心逻辑块 |
| Level 4 | Write the program logic | 写出主要程序逻辑 |
| Level 5 | Debug Detective | 找出问题代码、解释原因、修复并运行通过 |

当前 Topic 包括：

- Variable Assignment
- If / Else
- For Loop
- While Loop
- List Traversal
- Accumulator Pattern
- Nested Loop
- Function Call
- Recursion Intro
- Complex

## Main UI Areas

### Practice

`Practice` 是默认页面。学生主要在这里完成题目。

- `Practice Topic`: 选择想练习的编程主题。
- `Practice Path`: 显示当前 Level、任务目标、运行反馈和 Level 卡片。
- `Code`: 学生编辑 Python 代码的位置。
- `Compile & Run`: 调用后端执行代码并生成 trace。
- `Run Timeline`: 用滑块查看每一步执行。
- `Variables`: 显示当前步骤中的变量和值。
- `Step Explanation`: 用自然语言解释当前执行步骤。

### Dashboard

`Dashboard` 是成长页面，不是练习页面。

它会显示：

- 已完成 Level 数量
- 总体进度百分比
- 已训练技能数量
- Skill Cloud
- 每个 Topic 的完成度
- 每个 Topic 的下一步 Level

### Guide

`Guide` 会按真实学生流程引导操作：

1. 选择 Topic
2. 理解 Practice Path
3. 查看当前 Level
4. 编辑 Code
5. Compile & Run
6. 阅读反馈
7. 拖动 Timeline
8. 查看变量和步骤解释
9. 打开 Dashboard 查看成长

### Focus Mode

`Focus Mode` 会隐藏部分辅助区域，让学生更专注在当前题目、代码和运行轨迹上。

### Reset Progress

`Reset Progress` 会清除本地进度，并让当前 Topic 回到 Level 1。

进度保存在浏览器 `localStorage` 中，不依赖账号系统。

## Feedback And Anti-Shortcut Rules

系统会自动判断任务是否完成。

例如任务要求：

```text
Make total_sum finish as 60.
```

正确方向应该是通过循环和累加器得到 60，例如：

```python
total_sum = 0
numbers = [10, 20, 30]

for number in numbers:
    total_sum += number
```

系统会尽量阻止直接写最终答案的行为，例如：

```python
total_sum = 60
```

因为这没有训练学生理解循环和累加过程。

如果某个检查没有通过，`Practice Path` 会显示失败项，并提供 `Show fix` 按钮给出修复方向。

## Variable Color Behavior

当代码成功运行且没有 runtime error 时：

- `Variables` 面板中的每个变量会获得一个颜色。
- `Code` 中相同变量名会使用同一颜色。
- 学生拖动 Timeline 时，当前执行行仍会高亮。
- 学生一旦修改代码，颜色高亮会立即取消，直到下一次成功运行。

这样可以帮助学生把“代码里的变量名”和“运行时变量值”对应起来。

## Fill-In-The-Blank Tasks

部分复杂题目包含类似：

```python
___1___
___2___
```

这样的空位。只要空位还没替换完，`Compile & Run` 会显示 `Fill Blanks First`，并保持不可用。

## Project Structure

```text
SSP_v4/
  README.md
  LoopVisualizerSystem/
    LoopVisualizerSystem.csproj
    Program.cs
    Controllers/
      ExecutionController.cs
    Engine/
      trace_engine.py
    wwwroot/
      index.html
      app.js
```

## Backend Overview

`Program.cs`:

- 注册 controllers
- 提供 `wwwroot` 静态前端文件
- 给静态文件设置 no-cache header，方便开发时刷新 UI
- 映射 API 路由

`Controllers/ExecutionController.cs` 处理：

```text
POST /api/execution/run
```

它会：

- 接收前端发来的 Python 代码
- 写入临时 `.py` 文件
- 调用 `Engine/trace_engine.py`
- 读取 JSON trace 输出
- 返回执行行号、变量快照、变量变化、stdout、错误信息和步骤解释

`Engine/trace_engine.py`:

- 用 `compile()` 捕捉语法和缩进错误
- 用 `sys.settrace()` 捕捉逐行执行
- 记录 line、scope、variables、stdout 和 runtime error
- 用最大步数限制防止无限循环卡死

## Frontend Overview

`wwwroot/index.html` 定义页面结构：

- Practice / Dashboard 顶部切换
- Practice Topic 选择
- Code 编辑区
- Run Timeline
- Variables
- Step Explanation
- Practice Path
- Dashboard
- Guide overlay

`wwwroot/app.js` 负责交互逻辑：

- 管理 Topic 和 Level 路径
- 调用 `/api/execution/run`
- 渲染 trace timeline
- 高亮当前执行行
- 给变量分配颜色
- 渲染变量卡片和步骤解释
- 判断任务是否通过
- 解锁下一关
- 保存本地进度
- 渲染 Dashboard

## Quick Smoke Test

打开默认页面后，可以用 Accumulator 任务测试：

```python
total_sum = 0
numbers = [10, 20, 30]

for number in numbers:
    total_sum += number
```

预期行为：

- 点击 `Compile & Run` 后能看到 timeline。
- `total_sum` 最终为 `60`。
- `number` 和 `total_sum` 在 `Variables` 中有不同颜色。
- `Code` 里的 `number` 和 `total_sum` 也显示对应颜色。
- 当前 Level 显示通过。
- 下一 Level 自动解锁。

