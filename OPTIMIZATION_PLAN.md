# SSP v4 系统优化方案（面向后续修改）

## 1. 当前问题总结

### 1.1 入口逻辑与学生认知不一致
- 现在页面默认入口是 Practice，而不是 Dashboard。
- 但文档和教学说明中，容易让人误以为 Dashboard 是系统起点。
- 结果是：学生会先看到“练习界面”，但教师/说明文档又在强调“Dashboard 作为主界面”。

### 1.2 模块命名不够直观
- Review Lab 对学生来说语义偏抽象。
- Quality Studio 对学生来说也不够直接。
- 两者的作用需要更明确地用“任务目标”来表达，而不是仅靠概念名。

### 1.3 结构层级需要澄清
- Practice、Review、Quality 之间的关系应当明确：
  - Practice：基础执行与 trace 训练；
  - Review：读代码/判断问题/修复；
  - Quality：比较与评判代码质量。
- Dashboard 更适合定位为“进度与证据总览”，而不是一个主训练入口。

---

## 2. 建议的总体结构

### 2.1 主入口层级
1. Practice（默认主入口）
2. Review（AI 代码审查）
3. Quality（代码质量判断）
4. Dashboard（进度总览）
5. Question Bank（题库）

### 2.2 关系说明
- Practice 是学生最先接触的核心任务区。
- Review 和 Quality 是与 Practice 并列的高阶任务区。
- Dashboard 是结果回顾与导航区。
- Question Bank 是题目管理与查看区。

---

## 3. 建议的命名方案

### 3.1 Review 模块建议名称
优先考虑以下命名：
- AI Code Review
- Find & Fix Bugs
- Code Review Practice
- Review & Repair

推荐：**AI Code Review**

原因：
- 更直观；
- 符合学生任务；
- 与“读 AI 代码并判断问题”一致。

### 3.2 Quality 模块建议名称
优先考虑以下命名：
- Code Quality Check
- Compare Code Quality
- Quality Judgment
- Better Code Choice

推荐：**Code Quality Check**

原因：
- 直接表达学生要做什么；
- 比“Studio”更容易理解；
- 适合学生快速判断自己是否应该进入该模块。

---

## 4. 页面逻辑建议

### 4.1 首次打开时的用户路径
建议将用户路径设计为：
1. 看到 Practice；
2. 明确自己在做“写代码 / 运行 / 观察 trace”；
3. 之后可选择进入 Review 或 Quality；
4. 最后通过 Dashboard 查看进展。

### 4.2 引导文案建议
页面顶部可以统一显示一句引导：
- “Start with Practice to build core tracing skills. Use Review to diagnose code problems and Quality to compare code choices.”

这样能够把三种任务模式的区别讲清楚。

---

## 5. 文档与界面文案一致性方案

### 5.1 文档中需要统一的表述
建议把 README 和页面文案改成统一结构：
- Practice：基础训练
- Review：问题诊断与修复
- Quality：代码质量判断
- Dashboard：进度总览
- Question Bank：题库查看

### 5.2 避免的表述
- 不要把 Dashboard 说成“主界面”
- 不要把 Quality Studio / Review Lab 说成“神秘实验室”
- 不要让学生误以为 Review / Quality 是 Practice 的子模块，而不是并列任务区

---

## 6. 后续代码修改优先级

### 第一阶段：结构与命名
1. 更新顶部导航标签；
2. 更新页面内相关标题与说明文字；
3. 统一入口描述。

### 第二阶段：引导语与流程说明
1. 让 Practice 成为默认主入口；
2. 在页面顶部增加简短任务说明；
3. 在 Review / Quality 页面增加“为什么要做这个”的介绍。

### 第三阶段：信息架构优化
1. Dashboard 更清楚地标注为进度与证据总览；
2. Question Bank 更明确地标注为题库查看；
3. 让学生知道什么时候该去哪里。

---

## 7. 推荐的最终表达方式

### 顶部导航（建议）
- Practice
- AI Code Review
- Code Quality Check
- Dashboard
- Question Bank

### 说明逻辑（建议）
- Practice：练习基础能力
- AI Code Review：判断并修复代码问题
- Code Quality Check：比较并判断代码质量
- Dashboard：查看进度与证据

---

## 8. 后续修改时的原则

1. 先改“学生能不能马上理解”
2. 再改“系统结构是不是合理”
3. 最后再优化视觉和细节

换句话说：
- 先保证认知正确；
- 再保证功能结构清楚；
- 最后再做精致化调整。
