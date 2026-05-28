# CSSE1001 Problem-Solving Lab MVP

中文说明见下方。

## English

This is a bilingual static MVP for students preparing for UQ CSSE1001. It includes the past-exam PDF questions supplied by the user, grouped by knowledge area, plus short coding practice tasks.

The study flow is deliberately simple:

1. Pick a topic.
2. Open a past exam question or a coding task.
3. Match keywords to technical actions.
4. Answer in the format required by the question type.
5. Save the answer and your reason.

### Why CSSE1001-specific

Public sources indicate that CSSE1001 uses Python and focuses on variables, selection, iteration, functions, lists, tuples, dictionaries, OOP, testing, debugging, code reading, and algorithm design. The 2026 course profile lists two programming assignments, an in-semester closed-book paper exam, and an end-of-semester closed-book paper exam with hurdle requirements. The profile also states that assignments may involve limited AI/MT support, but students must demonstrate independent understanding of their submissions; exams do not permit AI.

Student feedback commonly says the course is possible for beginners but time-consuming, and that progress comes from typing code, failing, debugging, starting assignments early, and asking for help.

### How to run

Open:

```text
index.html
```

No server, database, or package installation is required. Progress is saved in browser `localStorage`.

### Files

```text
index.html                Page structure
assets/css/styles.css     Visual design and responsive layout
assets/js/i18n.js         Chinese and English interface copy
assets/js/data.js         CSSE1001-aligned practice tasks and built-in tests
assets/js/examBank.js     Extracted past-exam questions from the supplied PDFs
assets/js/storage.js      Local progress storage
assets/js/prompt.js       AI study prompt generation
assets/js/codeRunner.js   Browser Web Worker sandbox for JavaScript solve(input)
assets/js/app.js          Main app logic
assets/images/*.svg       Task illustrations
```

### Current practice categories

Each category contains 3 coding tasks plus imported past-exam questions:

- Variables and Expressions
- Functions and Decomposition
- Loops and Code Tracing
- Lists, Tuples, and Dictionaries
- Object-Oriented Design

### Sources consulted

- UQ CSSE1001 Course Profile: https://course-profiles.uq.edu.au/course-profiles/CSSE1001-21206-7620
- CSSE1001 public notes: https://csse1001.uqcloud.net/
- UQ Library past exam papers guide: https://web.library.uq.edu.au/study-and-learning-support/coursework/past-exam-papers
- CSSE1001 assignment records: https://csse1001.github.io/records/
- StudentVIP CSSE1001 reviews: https://studentvip.com.au/uq/subjects/csse1001
- Selected public Reddit discussions about CSSE1001 workload and study experience.

## 中文

这是一个面向昆士兰大学 UQ CSSE1001 学生的中英文双语静态 MVP。它已经导入你提供的往年考试 PDF 题目，并按知识点分类，同时保留小编程练习。

学习流程很直接：

1. 选择知识点。
2. 打开往年考试题或编程练习。
3. 把题目关键词对应到技术操作。
4. 按题型作答。
5. 保存答案和理由。

### 为什么改成 CSSE1001 版本

公开资料显示，CSSE1001 使用 Python，重点包括变量、选择、循环、函数、列表、元组、字典、面向对象、测试、调试、读代码和算法设计。2026 课程档案列出两次编程作业、一次学期中闭卷纸笔考试和一次期末闭卷纸笔考试，其中期末考试有 hurdle 要求。课程档案也说明，作业中 AI/机器翻译工具只能提供有限支持，学生必须能独立解释提交内容；考试不允许使用 AI。

学生反馈中反复出现的主题是：零基础可以学，但很耗时；真正的进步来自亲手输入代码、失败、调试、尽早开始作业，以及主动寻求帮助。

### 如何运行

直接打开：

```text
index.html
```

不需要服务器、数据库或安装依赖。学习进度保存在浏览器 `localStorage` 中。

### 文件说明

```text
index.html                页面结构
assets/css/styles.css     视觉样式与响应式布局
assets/js/i18n.js         中英文界面文案
assets/js/data.js         CSSE1001 对齐的训练任务和内置测试
assets/js/examBank.js     从你提供的 PDF 中提取的往年考试题
assets/js/storage.js      本地进度保存与读取
assets/js/prompt.js       AI 学习 prompt 生成
assets/js/codeRunner.js   使用 Web Worker 沙盒运行 JavaScript solve(input)
assets/js/app.js          主应用交互逻辑
assets/images/*.svg       任务插图
```

### 当前训练分类

每个分类包含 3 个编程练习，并补充导入的往年考试题：

- 变量与表达式
- 函数与分解
- 循环与代码追踪
- 列表、元组与字典
- 面向对象设计

### 注意

当前 MVP 的代码实验室使用 JavaScript 沙盒运行示例 `solve(input)`，因为它无需安装环境即可在浏览器运行。Prompt 生成器默认面向 CSSE1001 的 Python。正式版可以加入 Pyodide，让 Python 也在浏览器端运行。
