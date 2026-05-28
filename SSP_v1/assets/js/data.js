(function () {
  const commonDebug = {
    zh: [
      "先用一个很小的输入手工算出答案，再和程序输出对比。",
      "如果结果对不上，检查输入形状、循环范围、条件顺序和返回值名称。",
      "让 AI 修改代码前，先指出具体失败的测试，而不是只说“代码错了”。"
    ],
    en: [
      "First calculate the answer manually for a tiny input, then compare it with the program output.",
      "If the result differs, inspect the input shape, loop range, condition order, and return-value names.",
      "Before asking AI to revise code, point to the exact failed test instead of only saying “the code is wrong”."
    ]
  };

  const commonReflection = {
    zh: [
      "这个题目的输入、输出和边界情况分别是什么？",
      "如果这是闭卷考试题，你会怎样不用 AI 解释算法？",
      "下一轮 prompt 应该补充哪一个失败测试或限制？"
    ],
    en: [
      "What are the inputs, outputs, and edge cases in this task?",
      "If this were a closed-book exam question, how would you explain the algorithm without AI?",
      "Which failed test or constraint should the next prompt add?"
    ]
  };

  function challenge(config) {
    return {
      id: config.id,
      category: config.category,
      image: config.image,
      title: config.title,
      tag: config.tag,
      difficulty: config.difficulty,
      scenario: config.scenario,
      users: config.users,
      concepts: config.concepts,
      starter: config.starter,
      rules: config.rules,
      steps: config.steps,
      sampleCode: config.sampleCode,
      tests: config.tests,
      debugTips: config.debugTips || commonDebug,
      reflectionQuestions: config.reflectionQuestions || commonReflection
    };
  }

  window.MVP_DATA = {
    sources: [
      {
        label: "UQ CSSE1001 Course Profile",
        url: "https://course-profiles.uq.edu.au/course-profiles/CSSE1001-21206-7620"
      },
      {
        label: "CSSE1001 public notes",
        url: "https://csse1001.uqcloud.net/"
      },
      {
        label: "UQ Library past exam papers guide",
        url: "https://web.library.uq.edu.au/study-and-learning-support/coursework/past-exam-papers"
      },
      {
        label: "StudentVIP CSSE1001 reviews",
        url: "https://studentvip.com.au/uq/subjects/csse1001"
      }
    ],
    categories: [
      {
        id: "variables",
        title: { zh: "变量与表达式", en: "Variables and Expressions" },
        description: {
          zh: "练习赋值、数值计算、布尔表达式和基础输入输出。",
          en: "Practise assignment, numeric calculation, Boolean expressions, and basic input/output."
        }
      },
      {
        id: "functions",
        title: { zh: "函数与分解", en: "Functions and Decomposition" },
        description: {
          zh: "把重复逻辑拆成小函数，并清楚说明参数、返回值和测试。",
          en: "Break repeated logic into small functions and explain parameters, return values, and tests."
        }
      },
      {
        id: "loops",
        title: { zh: "循环与代码追踪", en: "Loops and Code Tracing" },
        description: {
          zh: "训练 for/while 循环、累加器、哨兵值和纸笔追踪能力。",
          en: "Train for/while loops, accumulators, sentinel values, and paper-style tracing."
        }
      },
      {
        id: "collections",
        title: { zh: "列表、元组与字典", en: "Lists, Tuples, and Dictionaries" },
        description: {
          zh: "处理结构化数据，练习查找、统计、排序和嵌套数据。",
          en: "Work with structured data through lookup, counting, sorting, and nested data."
        }
      },
      {
        id: "oop",
        title: { zh: "面向对象设计", en: "Object-Oriented Design" },
        description: {
          zh: "练习类、实例、方法、对象状态和职责边界。",
          en: "Practise classes, instances, methods, object state, and responsibility boundaries."
        }
      }
    ],
    challenges: [
      challenge({
        id: "variables-weighted-mark",
        category: "variables",
        image: "assets/images/study-time.svg",
        title: { zh: "加权成绩计算器", en: "Weighted Mark Calculator" },
        tag: { zh: "变量", en: "Variables" },
        difficulty: { zh: "入门", en: "Beginner" },
        scenario: {
          zh: "学生需要把作业、期中和期末的得分按权重合成总评。这个题目训练变量命名、算术表达式和四舍五入。",
          en: "A student combines assignment, mid-semester, and final scores using weights. This trains variable naming, arithmetic expressions, and rounding."
        },
        users: { zh: ["初学者", "复习小组"], en: ["Beginners", "Study groups"] },
        concepts: { zh: ["变量", "算术表达式", "四舍五入"], en: ["Variables", "Arithmetic", "Rounding"] },
        starter: {
          zh: {
            problem: "根据 components 中每项的 score 和 weight，计算总评百分比。",
            success: "能正确把 score * weight 累加，并把最终结果保留 1 位小数。",
            input: "components: 列表，每项包含 score 和 weight。weight 用小数表示，例如 0.4。",
            output: "totalMark: 总评百分比；componentCount: 项目数量。",
            constraints: "不要假设只有 3 项；权重可能来自任意数量的 assessment components。"
          },
          en: {
            problem: "Compute the overall percentage from component score and weight values.",
            success: "Correctly accumulates score * weight and rounds the final result to one decimal place.",
            input: "components: a list where each item has score and weight. weight is a decimal such as 0.4.",
            output: "totalMark and componentCount.",
            constraints: "Do not assume exactly three components; weights may come from any number of assessment components."
          }
        },
        rules: {
          zh: ["初始化 total 为 0。", "遍历 components。", "把 score * weight 加到 total。", "返回保留 1 位小数的 totalMark。"],
          en: ["Initialise total to 0.", "Loop through components.", "Add score * weight to total.", "Return totalMark rounded to one decimal place."]
        },
        steps: {
          zh: ["读取 components。", "用变量 total 保存累计结果。", "逐项计算贡献值。", "返回 totalMark 和 componentCount。"],
          en: ["Read components.", "Use total to store the running sum.", "Compute each contribution.", "Return totalMark and componentCount."]
        },
        sampleCode: `function solve(input) {
  let total = 0;
  for (const component of input.components) {
    total += component.score * component.weight;
  }
  return {
    totalMark: Number(total.toFixed(1)),
    componentCount: input.components.length
  };
}`,
        tests: [
          {
            name: { zh: "能计算三项加权成绩", en: "Computes three weighted components" },
            input: { components: [{ score: 80, weight: 0.2 }, { score: 70, weight: 0.3 }, { score: 90, weight: 0.5 }] },
            expect: { zh: "totalMark 应为 82。", en: "totalMark should be 82." },
            check: (result) => result.totalMark === 82 && result.componentCount === 3
          },
          {
            name: { zh: "支持任意数量项目", en: "Supports any number of components" },
            input: { components: [{ score: 50, weight: 0.5 }, { score: 100, weight: 0.25 }, { score: 60, weight: 0.25 }] },
            expect: { zh: "totalMark 应为 65。", en: "totalMark should be 65." },
            check: (result) => result.totalMark === 65
          }
        ]
      }),
      challenge({
        id: "variables-hurdle-check",
        category: "variables",
        image: "assets/images/budget.svg",
        title: { zh: "Hurdle 条件判断器", en: "Hurdle Condition Checker" },
        tag: { zh: "布尔表达式", en: "Boolean expressions" },
        difficulty: { zh: "入门", en: "Beginner" },
        scenario: {
          zh: "很多课程有总分和 hurdle 条件。这个练习不对应真实评分政策，只训练把多个条件组合成布尔表达式。",
          en: "Many courses have total marks and hurdle conditions. This exercise is not a real grading policy; it trains combining conditions into Boolean expressions."
        },
        users: { zh: ["初学者"], en: ["Beginners"] },
        concepts: { zh: ["变量", "比较运算", "and/or"], en: ["Variables", "Comparison", "and/or"] },
        starter: {
          zh: {
            problem: "根据 total、exam 和 submitted 判断学生是否满足练习条件。",
            success: "total 至少 50、exam 至少 40、submitted 为 true 时 eligible 才为 true。",
            input: "total、exam、submitted。",
            output: "eligible 和 reasons。",
            constraints: "返回 reasons 说明没有满足哪些条件。"
          },
          en: {
            problem: "Determine whether a student satisfies practice eligibility conditions from total, exam, and submitted.",
            success: "eligible is true only when total >= 50, exam >= 40, and submitted is true.",
            input: "total, exam, submitted.",
            output: "eligible and reasons.",
            constraints: "Return reasons explaining which conditions were not satisfied."
          }
        },
        rules: {
          zh: ["total >= 50。", "exam >= 40。", "submitted 必须为 true。", "三个条件都满足才 eligible。"],
          en: ["total >= 50.", "exam >= 40.", "submitted must be true.", "eligible is true only when all conditions hold."]
        },
        steps: {
          zh: ["创建 reasons 空列表。", "逐个检查条件。", "失败条件加入 reasons。", "reasons 为空时 eligible 为 true。"],
          en: ["Create an empty reasons list.", "Check each condition.", "Add failed conditions to reasons.", "eligible is true when reasons is empty."]
        },
        sampleCode: `function solve(input) {
  const reasons = [];
  if (input.total < 50) reasons.push("total below 50");
  if (input.exam < 40) reasons.push("exam below 40");
  if (!input.submitted) reasons.push("submission missing");
  return {
    eligible: reasons.length === 0,
    reasons
  };
}`,
        tests: [
          {
            name: { zh: "三个条件都满足", en: "All conditions satisfied" },
            input: { total: 67, exam: 52, submitted: true },
            expect: { zh: "eligible 为 true。", en: "eligible is true." },
            check: (result) => result.eligible === true && result.reasons.length === 0
          },
          {
            name: { zh: "能列出多个失败原因", en: "Lists multiple failed reasons" },
            input: { total: 48, exam: 30, submitted: false },
            expect: { zh: "eligible 为 false，reasons 有 3 项。", en: "eligible is false and reasons has 3 items." },
            check: (result) => result.eligible === false && result.reasons.length === 3
          }
        ]
      }),
      challenge({
        id: "variables-time-plan",
        category: "variables",
        image: "assets/images/lost-found.svg",
        title: { zh: "每周学习时间估算器", en: "Weekly Study-Time Estimator" },
        tag: { zh: "表达式", en: "Expressions" },
        difficulty: { zh: "入门", en: "Beginner" },
        scenario: {
          zh: "学生反馈常说 CSSE1001 对零基础学生很耗时。这个任务用变量估算每周学习总小时数和剩余空余时间。",
          en: "Student feedback often says CSSE1001 is time-consuming for beginners. This task estimates weekly study hours and remaining free time."
        },
        users: { zh: ["时间管理学生"], en: ["Time-management students"] },
        concepts: { zh: ["变量", "乘法", "减法", "边界检查"], en: ["Variables", "Multiplication", "Subtraction", "Bounds"] },
        starter: {
          zh: {
            problem: "根据 lecture、tutorial、practice 和 assignment 的小时数估算一周学习负担。",
            success: "能计算 totalHours、remainingHours，并在超出 availableHours 时标记 overload。",
            input: "lectureHours、tutorialHours、practiceHours、assignmentHours、availableHours。",
            output: "totalHours、remainingHours、overload。",
            constraints: "remainingHours 可以为负数；不要把负数强行改成 0。"
          },
          en: {
            problem: "Estimate weekly workload from lecture, tutorial, practice, and assignment hours.",
            success: "Computes totalHours, remainingHours, and overload when total exceeds availableHours.",
            input: "lectureHours, tutorialHours, practiceHours, assignmentHours, availableHours.",
            output: "totalHours, remainingHours, overload.",
            constraints: "remainingHours may be negative; do not clamp it to 0."
          }
        },
        rules: {
          zh: ["totalHours 是四类学习时间之和。", "remainingHours 是 availableHours - totalHours。", "remainingHours 小于 0 时 overload 为 true。"],
          en: ["totalHours is the sum of four study-hour categories.", "remainingHours is availableHours - totalHours.", "overload is true when remainingHours is below 0."]
        },
        steps: {
          zh: ["读取各类小时数。", "计算 totalHours。", "计算 remainingHours。", "判断 overload。"],
          en: ["Read hour values.", "Compute totalHours.", "Compute remainingHours.", "Determine overload."]
        },
        sampleCode: `function solve(input) {
  const totalHours = input.lectureHours + input.tutorialHours + input.practiceHours + input.assignmentHours;
  const remainingHours = input.availableHours - totalHours;
  return {
    totalHours,
    remainingHours,
    overload: remainingHours < 0
  };
}`,
        tests: [
          {
            name: { zh: "普通一周有剩余时间", en: "Normal week has remaining time" },
            input: { lectureHours: 3, tutorialHours: 2, practiceHours: 5, assignmentHours: 4, availableHours: 18 },
            expect: { zh: "totalHours 为 14，remainingHours 为 4。", en: "totalHours is 14 and remainingHours is 4." },
            check: (result) => result.totalHours === 14 && result.remainingHours === 4 && result.overload === false
          },
          {
            name: { zh: "超时周保留负数", en: "Overloaded week keeps negative value" },
            input: { lectureHours: 3, tutorialHours: 2, practiceHours: 8, assignmentHours: 10, availableHours: 20 },
            expect: { zh: "remainingHours 为 -3，overload 为 true。", en: "remainingHours is -3 and overload is true." },
            check: (result) => result.remainingHours === -3 && result.overload === true
          }
        ]
      }),
      challenge({
        id: "functions-normalise-name",
        category: "functions",
        image: "assets/images/study-time.svg",
        title: { zh: "函数：规范化提交者姓名", en: "Function: Normalise Submitter Names" },
        tag: { zh: "函数", en: "Functions" },
        difficulty: { zh: "入门", en: "Beginner" },
        scenario: {
          zh: "自动检查提交记录时，经常要把大小写和空格不一致的姓名整理成统一格式。",
          en: "When checking submission records, names with inconsistent casing and spacing often need normalisation."
        },
        users: { zh: ["作业学生", "助教"], en: ["Assignment students", "Tutors"] },
        concepts: { zh: ["函数参数", "返回值", "字符串"], en: ["Parameters", "Return values", "Strings"] },
        starter: {
          zh: {
            problem: "写一个 normalizeName 逻辑，把姓名首尾空格去掉，并转换成每个单词首字母大写。",
            success: "能处理多余空格和大小写不一致。",
            input: "names: 字符串列表。",
            output: "normalised: 规范化后的字符串列表。",
            constraints: "空字符串应被忽略。"
          },
          en: {
            problem: "Write normalizeName logic that trims names and title-cases each word.",
            success: "Handles extra spaces and inconsistent casing.",
            input: "names: a list of strings.",
            output: "normalised: a list of normalised strings.",
            constraints: "Empty strings should be ignored."
          }
        },
        rules: {
          zh: ["去掉首尾空格。", "忽略空字符串。", "每个单词首字母大写，其余小写。"],
          en: ["Trim leading and trailing spaces.", "Ignore empty strings.", "Capitalise the first letter of each word and lowercase the rest."]
        },
        steps: {
          zh: ["定义 normalizeName。", "遍历 names。", "过滤空字符串。", "返回规范化列表。"],
          en: ["Define normalizeName.", "Loop through names.", "Filter empty strings.", "Return the normalised list."]
        },
        sampleCode: `function solve(input) {
  function normalizeName(name) {
    return name
      .trim()
      .split(/\\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  const normalised = [];
  for (const name of input.names) {
    if (name.trim()) normalised.push(normalizeName(name));
  }
  return { normalised };
}`,
        tests: [
          {
            name: { zh: "能处理大小写和空格", en: "Handles casing and spaces" },
            input: { names: ["  ada LOVELACE ", "grace   hopper"] },
            expect: { zh: "返回 Ada Lovelace 和 Grace Hopper。", en: "Returns Ada Lovelace and Grace Hopper." },
            check: (result) => result.normalised.join("|") === "Ada Lovelace|Grace Hopper"
          },
          {
            name: { zh: "忽略空字符串", en: "Ignores empty strings" },
            input: { names: ["", "   ", "alan turing"] },
            expect: { zh: "只返回 Alan Turing。", en: "Only returns Alan Turing." },
            check: (result) => result.normalised.length === 1 && result.normalised[0] === "Alan Turing"
          }
        ]
      }),
      challenge({
        id: "functions-mark-band",
        category: "functions",
        image: "assets/images/budget.svg",
        title: { zh: "函数：成绩等级标签", en: "Function: Mark Band Labels" },
        tag: { zh: "函数", en: "Functions" },
        difficulty: { zh: "入门", en: "Beginner" },
        scenario: {
          zh: "把成绩转换成标签可以帮助学生快速识别复习优先级。",
          en: "Converting marks into labels helps students quickly identify revision priorities."
        },
        users: { zh: ["复习学生"], en: ["Revision students"] },
        concepts: { zh: ["函数", "if/elif/else", "返回值"], en: ["Functions", "if/elif/else", "Return values"] },
        starter: {
          zh: {
            problem: "根据 mark 返回 high、medium 或 review。",
            success: "mark >= 75 为 high，>= 50 为 medium，否则为 review。",
            input: "marks: 数字列表。",
            output: "bands: 标签列表；reviewCount: 需要复习的数量。",
            constraints: "边界值 75 和 50 必须正确。"
          },
          en: {
            problem: "Return high, medium, or review for each mark.",
            success: "mark >= 75 is high, >= 50 is medium, otherwise review.",
            input: "marks: a list of numbers.",
            output: "bands and reviewCount.",
            constraints: "Boundary values 75 and 50 must be correct."
          }
        },
        rules: {
          zh: ["写一个 bandForMark 辅助函数。", "先检查 >= 75。", "再检查 >= 50。", "否则返回 review。"],
          en: ["Write a bandForMark helper.", "Check >= 75 first.", "Then check >= 50.", "Otherwise return review."]
        },
        steps: {
          zh: ["定义辅助函数。", "遍历 marks。", "收集 bands。", "统计 review 数量。"],
          en: ["Define the helper function.", "Loop through marks.", "Collect bands.", "Count review labels."]
        },
        sampleCode: `function solve(input) {
  function bandForMark(mark) {
    if (mark >= 75) return "high";
    if (mark >= 50) return "medium";
    return "review";
  }

  const bands = input.marks.map(bandForMark);
  return {
    bands,
    reviewCount: bands.filter((band) => band === "review").length
  };
}`,
        tests: [
          {
            name: { zh: "边界值正确", en: "Boundary values are correct" },
            input: { marks: [75, 50, 49] },
            expect: { zh: "bands 为 high, medium, review。", en: "bands are high, medium, review." },
            check: (result) => result.bands.join(",") === "high,medium,review"
          },
          {
            name: { zh: "能统计复习数量", en: "Counts review items" },
            input: { marks: [10, 55, 35, 90] },
            expect: { zh: "reviewCount 为 2。", en: "reviewCount is 2." },
            check: (result) => result.reviewCount === 2
          }
        ]
      }),
      challenge({
        id: "functions-test-message",
        category: "functions",
        image: "assets/images/lost-found.svg",
        title: { zh: "函数：测试反馈信息", en: "Function: Test Feedback Message" },
        tag: { zh: "函数分解", en: "Function decomposition" },
        difficulty: { zh: "中级", en: "Intermediate" },
        scenario: {
          zh: "调试时，清晰的测试反馈比单纯 true/false 更有用。",
          en: "During debugging, a clear test message is more useful than a bare true/false."
        },
        users: { zh: ["调试学生"], en: ["Debugging students"] },
        concepts: { zh: ["函数", "字符串格式化", "测试"], en: ["Functions", "String formatting", "Testing"] },
        starter: {
          zh: {
            problem: "为每个测试生成 passed/failed 信息。",
            success: "每个结果都包含测试名、状态和简短 message。",
            input: "checks: 每项包含 name、expected、actual。",
            output: "messages 和 failedCount。",
            constraints: "expected 与 actual 严格相等才通过。"
          },
          en: {
            problem: "Generate passed/failed messages for tests.",
            success: "Each result includes test name, status, and a short message.",
            input: "checks: each item has name, expected, actual.",
            output: "messages and failedCount.",
            constraints: "A check passes only when expected and actual are strictly equal."
          }
        },
        rules: {
          zh: ["写 formatCheck 函数。", "expected === actual 时 passed 为 true。", "失败时 message 应包含 expected 和 actual。"],
          en: ["Write a formatCheck function.", "passed is true when expected === actual.", "Failed messages include expected and actual."]
        },
        steps: {
          zh: ["定义 formatCheck。", "遍历 checks。", "生成 messages。", "统计失败数量。"],
          en: ["Define formatCheck.", "Loop through checks.", "Generate messages.", "Count failures."]
        },
        sampleCode: `function solve(input) {
  function formatCheck(check) {
    const passed = check.expected === check.actual;
    return {
      name: check.name,
      passed,
      message: passed
        ? check.name + " passed"
        : check.name + " failed: expected " + check.expected + ", got " + check.actual
    };
  }

  const messages = input.checks.map(formatCheck);
  return {
    messages,
    failedCount: messages.filter((message) => !message.passed).length
  };
}`,
        tests: [
          {
            name: { zh: "通过和失败都能格式化", en: "Formats both pass and fail" },
            input: { checks: [{ name: "basic", expected: 4, actual: 4 }, { name: "edge", expected: 0, actual: 1 }] },
            expect: { zh: "failedCount 为 1，第二条 message 包含 expected。", en: "failedCount is 1 and the second message includes expected." },
            check: (result) => result.failedCount === 1 && result.messages[1].message.includes("expected")
          },
          {
            name: { zh: "严格相等", en: "Uses strict equality" },
            input: { checks: [{ name: "type", expected: 4, actual: "4" }] },
            expect: { zh: "数字 4 和字符串 '4' 不应通过。", en: "number 4 and string '4' should not pass." },
            check: (result) => result.messages[0].passed === false
          }
        ]
      }),
      challenge({
        id: "loops-code-trace",
        category: "loops",
        image: "assets/images/study-time.svg",
        title: { zh: "闭卷考试代码追踪训练", en: "Closed-Book Code Tracing Drill" },
        tag: { zh: "循环", en: "Loops" },
        difficulty: { zh: "中级", en: "Intermediate" },
        scenario: {
          zh: "闭卷纸笔考试要求学生在没有 AI 的情况下追踪循环和变量变化。",
          en: "Closed-book paper exams require students to trace loops and variable changes without AI."
        },
        users: { zh: ["复习学生"], en: ["Revision students"] },
        concepts: { zh: ["for 循环", "累加器", "trace table"], en: ["for loops", "Accumulators", "Trace tables"] },
        starter: {
          zh: {
            problem: "模拟循环：偶数加入 selected 并累加；大于 threshold 的奇数让 total 减 1。",
            success: "返回每一步 trace，能显示 index、value、branch、totalAfterStep 和 selectedSnapshot。",
            input: "values 和 threshold。",
            output: "finalTotal、selected、trace。",
            constraints: "selectedSnapshot 必须是当时的副本。"
          },
          en: {
            problem: "Simulate a loop: even numbers are appended and added; odd numbers above threshold subtract 1 from total.",
            success: "Returns a trace for every step with index, value, branch, totalAfterStep, and selectedSnapshot.",
            input: "values and threshold.",
            output: "finalTotal, selected, trace.",
            constraints: "selectedSnapshot must be a copy at that moment."
          }
        },
        rules: {
          zh: ["从左到右遍历。", "偶数累加并加入列表。", "大奇数让 total 减 1。", "每轮记录 trace。"],
          en: ["Iterate left to right.", "Even numbers are added and appended.", "Large odd numbers subtract 1.", "Record trace every iteration."]
        },
        steps: {
          zh: ["初始化 total、selected、trace。", "遍历 values。", "判断分支并更新变量。", "追加 trace 行。"],
          en: ["Initialise total, selected, and trace.", "Loop through values.", "Choose branch and update variables.", "Append a trace row."]
        },
        sampleCode: `function solve(input) {
  let total = 0;
  const selected = [];
  const trace = [];
  for (let index = 0; index < input.values.length; index += 1) {
    const value = input.values[index];
    let branch = "ignored";
    if (value % 2 === 0) {
      total += value;
      selected.push(value);
      branch = "even";
    } else if (value > input.threshold) {
      total -= 1;
      branch = "large odd";
    }
    trace.push({ index, value, branch, totalAfterStep: total, selectedSnapshot: [...selected] });
  }
  return { finalTotal: total, selected, trace };
}`,
        tests: [
          {
            name: { zh: "能正确追踪每轮循环", en: "Traces each iteration" },
            input: { values: [2, 5, 8, 3], threshold: 4 },
            expect: { zh: "finalTotal 为 9，trace 长度为 4。", en: "finalTotal is 9 and trace length is 4." },
            check: (result) => result.finalTotal === 9 && result.trace.length === 4
          },
          {
            name: { zh: "snapshot 不被后续污染", en: "Snapshots are not mutated later" },
            input: { values: [4, 6], threshold: 10 },
            expect: { zh: "第一行 snapshot 为 [4]。", en: "First snapshot is [4]." },
            check: (result) => result.trace[0].selectedSnapshot.join(",") === "4"
          }
        ]
      }),
      challenge({
        id: "loops-first-invalid",
        category: "loops",
        image: "assets/images/budget.svg",
        title: { zh: "循环：找出第一个无效输入", en: "Loop: Find First Invalid Input" },
        tag: { zh: "循环", en: "Loops" },
        difficulty: { zh: "入门", en: "Beginner" },
        scenario: {
          zh: "处理用户输入时，程序常需要找到第一个不合法值并停止检查。",
          en: "When processing user input, a program often needs to find the first invalid value and stop checking."
        },
        users: { zh: ["调试学生"], en: ["Debugging students"] },
        concepts: { zh: ["循环", "break 思维", "边界值"], en: ["Loops", "break-style thinking", "Boundaries"] },
        starter: {
          zh: {
            problem: "在 marks 中找出第一个不在 0 到 100 之间的分数。",
            success: "返回 firstInvalidIndex 和 firstInvalidValue；如果都有效，index 为 -1。",
            input: "marks: 数字列表。",
            output: "firstInvalidIndex、firstInvalidValue、allValid。",
            constraints: "0 和 100 是有效边界。"
          },
          en: {
            problem: "Find the first mark outside the range 0 to 100.",
            success: "Return firstInvalidIndex and firstInvalidValue; if all are valid, index is -1.",
            input: "marks: a list of numbers.",
            output: "firstInvalidIndex, firstInvalidValue, allValid.",
            constraints: "0 and 100 are valid boundaries."
          }
        },
        rules: {
          zh: ["从 index 0 开始。", "小于 0 或大于 100 无效。", "找到第一个无效值后停止。"],
          en: ["Start at index 0.", "Values below 0 or above 100 are invalid.", "Stop after finding the first invalid value."]
        },
        steps: {
          zh: ["设置默认 index 为 -1。", "遍历 marks。", "检查边界。", "找到后返回。"],
          en: ["Set default index to -1.", "Loop through marks.", "Check bounds.", "Return after finding invalid input."]
        },
        sampleCode: `function solve(input) {
  for (let index = 0; index < input.marks.length; index += 1) {
    const value = input.marks[index];
    if (value < 0 || value > 100) {
      return { firstInvalidIndex: index, firstInvalidValue: value, allValid: false };
    }
  }
  return { firstInvalidIndex: -1, firstInvalidValue: null, allValid: true };
}`,
        tests: [
          {
            name: { zh: "找到第一个无效值", en: "Finds first invalid value" },
            input: { marks: [20, 101, -5] },
            expect: { zh: "index 为 1，value 为 101。", en: "index is 1 and value is 101." },
            check: (result) => result.firstInvalidIndex === 1 && result.firstInvalidValue === 101
          },
          {
            name: { zh: "边界值有效", en: "Boundary values are valid" },
            input: { marks: [0, 50, 100] },
            expect: { zh: "allValid 为 true。", en: "allValid is true." },
            check: (result) => result.allValid === true && result.firstInvalidIndex === -1
          }
        ]
      }),
      challenge({
        id: "loops-running-total",
        category: "loops",
        image: "assets/images/lost-found.svg",
        title: { zh: "循环：运行累计表", en: "Loop: Running Total Table" },
        tag: { zh: "累加器", en: "Accumulator" },
        difficulty: { zh: "入门", en: "Beginner" },
        scenario: {
          zh: "理解 accumulator 是很多 CSSE1001 题目的基础。这个任务要求输出每一步累计值。",
          en: "Understanding accumulators is foundational in many CSSE1001 tasks. This task outputs each running total."
        },
        users: { zh: ["初学者"], en: ["Beginners"] },
        concepts: { zh: ["循环", "累加器", "列表"], en: ["Loops", "Accumulator", "Lists"] },
        starter: {
          zh: {
            problem: "给定 deltas，返回每一步累计后的 runningTotals。",
            success: "能处理正数、负数和空列表。",
            input: "deltas: 数字列表。",
            output: "finalTotal 和 runningTotals。",
            constraints: "空列表 finalTotal 为 0。"
          },
          en: {
            problem: "Given deltas, return runningTotals after each step.",
            success: "Handles positive numbers, negative numbers, and an empty list.",
            input: "deltas: a list of numbers.",
            output: "finalTotal and runningTotals.",
            constraints: "For an empty list, finalTotal is 0."
          }
        },
        rules: {
          zh: ["total 从 0 开始。", "每个 delta 加到 total。", "每次更新后记录 total。"],
          en: ["total starts at 0.", "Add each delta to total.", "Record total after every update."]
        },
        steps: {
          zh: ["初始化 total 和 runningTotals。", "遍历 deltas。", "更新 total。", "追加到 runningTotals。"],
          en: ["Initialise total and runningTotals.", "Loop through deltas.", "Update total.", "Append to runningTotals."]
        },
        sampleCode: `function solve(input) {
  let total = 0;
  const runningTotals = [];
  for (const delta of input.deltas) {
    total += delta;
    runningTotals.push(total);
  }
  return { finalTotal: total, runningTotals };
}`,
        tests: [
          {
            name: { zh: "能处理正负数", en: "Handles positive and negative values" },
            input: { deltas: [3, -1, 4] },
            expect: { zh: "runningTotals 为 [3,2,6]。", en: "runningTotals is [3,2,6]." },
            check: (result) => result.runningTotals.join(",") === "3,2,6" && result.finalTotal === 6
          },
          {
            name: { zh: "空列表", en: "Empty list" },
            input: { deltas: [] },
            expect: { zh: "finalTotal 为 0。", en: "finalTotal is 0." },
            check: (result) => result.finalTotal === 0 && result.runningTotals.length === 0
          }
        ]
      }),
      challenge({
        id: "collections-gradescope",
        category: "collections",
        image: "assets/images/budget.svg",
        title: { zh: "Gradescope 反馈诊断器", en: "Gradescope Feedback Triage" },
        tag: { zh: "字典统计", en: "Dictionary counting" },
        difficulty: { zh: "中级", en: "Intermediate" },
        scenario: {
          zh: "自动测试反馈只有在你能分类失败原因时才真正有用。",
          en: "Autograder feedback becomes useful when you can categorise the failure reasons."
        },
        users: { zh: ["作业学生"], en: ["Assignment students"] },
        concepts: { zh: ["字典", "列表遍历", "排序"], en: ["Dictionaries", "List traversal", "Sorting"] },
        starter: {
          zh: {
            problem: "统计失败测试的 topic，并找出失败最多的 topic。",
            success: "能返回 failedChecks、failedTopics、weakestTopic 和 passRate。",
            input: "checks: 每项包含 name、topic、passed。",
            output: "passRate、failedChecks、failedTopics、weakestTopic。",
            constraints: "只统计 passed 为 false 的测试。"
          },
          en: {
            problem: "Count failed test topics and find the topic with the most failures.",
            success: "Returns failedChecks, failedTopics, weakestTopic, and passRate.",
            input: "checks: each item has name, topic, passed.",
            output: "passRate, failedChecks, failedTopics, weakestTopic.",
            constraints: "Only count tests where passed is false."
          }
        },
        rules: {
          zh: ["遍历 checks。", "失败测试加入 failedChecks。", "用字典累计 topic。", "按失败次数找 weakestTopic。"],
          en: ["Loop through checks.", "Add failed tests to failedChecks.", "Count topics with a dictionary/object.", "Find weakestTopic by failure count."]
        },
        steps: {
          zh: ["初始化字典和列表。", "处理失败测试。", "计算通过率。", "返回诊断结果。"],
          en: ["Initialise dictionary and list.", "Process failed tests.", "Compute pass rate.", "Return triage results."]
        },
        sampleCode: `function solve(input) {
  const failedTopics = {};
  const failedChecks = [];
  for (const check of input.checks) {
    if (!check.passed) {
      failedChecks.push(check.name);
      failedTopics[check.topic] = (failedTopics[check.topic] || 0) + 1;
    }
  }
  const sortedTopics = Object.entries(failedTopics).sort((a, b) => b[1] - a[1]);
  return {
    passRate: Number(((input.checks.length - failedChecks.length) / input.checks.length * 100).toFixed(1)),
    failedChecks,
    failedTopics,
    weakestTopic: sortedTopics.length ? sortedTopics[0][0] : null
  };
}`,
        tests: [
          {
            name: { zh: "能找出失败最多主题", en: "Finds most failed topic" },
            input: { checks: [{ name: "empty", topic: "edge", passed: false }, { name: "basic", topic: "loops", passed: true }, { name: "none", topic: "edge", passed: false }] },
            expect: { zh: "weakestTopic 为 edge。", en: "weakestTopic is edge." },
            check: (result) => result.weakestTopic === "edge" && result.failedChecks.length === 2
          },
          {
            name: { zh: "全部通过", en: "All checks pass" },
            input: { checks: [{ name: "a", topic: "functions", passed: true }, { name: "b", topic: "loops", passed: true }] },
            expect: { zh: "passRate 为 100，weakestTopic 为 null。", en: "passRate is 100 and weakestTopic is null." },
            check: (result) => result.passRate === 100 && result.weakestTopic === null
          }
        ]
      }),
      challenge({
        id: "collections-frequency",
        category: "collections",
        image: "assets/images/study-time.svg",
        title: { zh: "字典：主题频率表", en: "Dictionary: Topic Frequency Table" },
        tag: { zh: "字典", en: "Dictionaries" },
        difficulty: { zh: "入门", en: "Beginner" },
        scenario: {
          zh: "复习记录里会反复出现不同 topic。频率表能帮助你看出最常练习的内容。",
          en: "Revision logs repeat topics. A frequency table helps identify what you practise most."
        },
        users: { zh: ["复习学生"], en: ["Revision students"] },
        concepts: { zh: ["字典", "计数", "列表"], en: ["Dictionaries", "Counting", "Lists"] },
        starter: {
          zh: {
            problem: "统计 topics 中每个主题出现次数。",
            success: "能返回 counts 和 mostCommon。",
            input: "topics: 字符串列表。",
            output: "counts、mostCommon。",
            constraints: "空列表时 mostCommon 为 null。"
          },
          en: {
            problem: "Count how often each topic appears.",
            success: "Returns counts and mostCommon.",
            input: "topics: a list of strings.",
            output: "counts, mostCommon.",
            constraints: "For an empty list, mostCommon is null."
          }
        },
        rules: {
          zh: ["创建 counts 字典。", "每遇到一个 topic 加 1。", "出现次数最多的是 mostCommon。"],
          en: ["Create a counts object.", "Add 1 for each topic.", "The highest count is mostCommon."]
        },
        steps: {
          zh: ["遍历 topics。", "更新 counts。", "排序或比较最大值。", "返回结果。"],
          en: ["Loop through topics.", "Update counts.", "Sort or compare max count.", "Return result."]
        },
        sampleCode: `function solve(input) {
  const counts = {};
  for (const topic of input.topics) {
    counts[topic] = (counts[topic] || 0) + 1;
  }
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return {
    counts,
    mostCommon: entries.length ? entries[0][0] : null
  };
}`,
        tests: [
          {
            name: { zh: "能统计频率", en: "Counts frequencies" },
            input: { topics: ["loops", "functions", "loops"] },
            expect: { zh: "loops 为 2，mostCommon 为 loops。", en: "loops is 2 and mostCommon is loops." },
            check: (result) => result.counts.loops === 2 && result.mostCommon === "loops"
          },
          {
            name: { zh: "空列表", en: "Empty list" },
            input: { topics: [] },
            expect: { zh: "mostCommon 为 null。", en: "mostCommon is null." },
            check: (result) => result.mostCommon === null && Object.keys(result.counts).length === 0
          }
        ]
      }),
      challenge({
        id: "collections-nested-records",
        category: "collections",
        image: "assets/images/lost-found.svg",
        title: { zh: "嵌套数据：筛选复习题", en: "Nested Data: Filter Revision Questions" },
        tag: { zh: "嵌套结构", en: "Nested data" },
        difficulty: { zh: "中级", en: "Intermediate" },
        scenario: {
          zh: "真实数据常常是列表里套字典。这个任务要求按 topic 和 confidence 筛选题目。",
          en: "Real data often appears as lists of dictionaries/objects. This task filters questions by topic and confidence."
        },
        users: { zh: ["复习学生"], en: ["Revision students"] },
        concepts: { zh: ["列表", "字典", "筛选"], en: ["Lists", "Dictionaries", "Filtering"] },
        starter: {
          zh: {
            problem: "从 questions 中找出指定 topic 且 confidence 低于 3 的题目 id。",
            success: "能返回 reviewIds 和 reviewCount。",
            input: "topic、questions。每道题有 id、topic、confidence。",
            output: "reviewIds、reviewCount。",
            constraints: "confidence 等于 3 不需要复习。"
          },
          en: {
            problem: "Find question ids for a given topic where confidence is below 3.",
            success: "Returns reviewIds and reviewCount.",
            input: "topic, questions. Each question has id, topic, confidence.",
            output: "reviewIds, reviewCount.",
            constraints: "confidence equal to 3 does not need review."
          }
        },
        rules: {
          zh: ["只保留 topic 匹配的题。", "只保留 confidence < 3 的题。", "返回 id 列表。"],
          en: ["Keep only matching topic.", "Keep only confidence < 3.", "Return id list."]
        },
        steps: {
          zh: ["创建 reviewIds。", "遍历 questions。", "检查两个条件。", "追加 id。"],
          en: ["Create reviewIds.", "Loop through questions.", "Check both conditions.", "Append id."]
        },
        sampleCode: `function solve(input) {
  const reviewIds = [];
  for (const question of input.questions) {
    if (question.topic === input.topic && question.confidence < 3) {
      reviewIds.push(question.id);
    }
  }
  return {
    reviewIds,
    reviewCount: reviewIds.length
  };
}`,
        tests: [
          {
            name: { zh: "能按两个条件筛选", en: "Filters by two conditions" },
            input: { topic: "OOP", questions: [{ id: "q1", topic: "OOP", confidence: 2 }, { id: "q2", topic: "loops", confidence: 1 }, { id: "q3", topic: "OOP", confidence: 3 }] },
            expect: { zh: "只返回 q1。", en: "Only returns q1." },
            check: (result) => result.reviewIds.join(",") === "q1" && result.reviewCount === 1
          },
          {
            name: { zh: "没有匹配项", en: "No matches" },
            input: { topic: "functions", questions: [{ id: "q1", topic: "functions", confidence: 4 }] },
            expect: { zh: "reviewCount 为 0。", en: "reviewCount is 0." },
            check: (result) => result.reviewCount === 0
          }
        ]
      }),
      challenge({
        id: "oop-revision-plan",
        category: "oop",
        image: "assets/images/lost-found.svg",
        title: { zh: "OOP：复习计划类设计", en: "OOP: Revision Plan Class Design" },
        tag: { zh: "类", en: "Classes" },
        difficulty: { zh: "进阶", en: "Advanced" },
        scenario: {
          zh: "后半段课程会进入类、实例、方法和对象状态。这个题目训练职责划分。",
          en: "The later course moves into classes, instances, methods, and object state. This trains responsibility design."
        },
        users: { zh: ["OOP 复习学生"], en: ["OOP revision students"] },
        concepts: { zh: ["类", "实例", "方法"], en: ["Classes", "Instances", "Methods"] },
        starter: {
          zh: {
            problem: "用类表示复习题和复习计划，找出最应该复习的 topic。",
            success: "RevisionQuestion 有 needsReview；RevisionPlan 能统计 weakTopics 和 nextTopic。",
            input: "questions: 每项有 topic、marks、attempted、confidence。",
            output: "weakTopics、nextTopic、reviewCount。",
            constraints: "未尝试或 confidence < 3 需要复习。"
          },
          en: {
            problem: "Use classes to represent revision questions and a revision plan, then find the topic to revise first.",
            success: "RevisionQuestion has needsReview; RevisionPlan computes weakTopics and nextTopic.",
            input: "questions: each has topic, marks, attempted, confidence.",
            output: "weakTopics, nextTopic, reviewCount.",
            constraints: "Unattempted questions or confidence < 3 require review."
          }
        },
        rules: {
          zh: ["一个类负责单题状态。", "一个类负责计划统计。", "按 marks 累加薄弱 topic。"],
          en: ["One class handles single-question state.", "One class handles plan statistics.", "Weak topics are weighted by marks."]
        },
        steps: {
          zh: ["定义 RevisionQuestion。", "实现 needsReview。", "定义 RevisionPlan。", "统计并选择 topic。"],
          en: ["Define RevisionQuestion.", "Implement needsReview.", "Define RevisionPlan.", "Count and choose topic."]
        },
        sampleCode: `class RevisionQuestion {
  constructor(topic, marks, attempted, confidence) {
    this.topic = topic;
    this.marks = marks;
    this.attempted = attempted;
    this.confidence = confidence;
  }
  needsReview() {
    return !this.attempted || this.confidence < 3;
  }
}

class RevisionPlan {
  constructor(questions) {
    this.questions = questions;
  }
  weakTopics() {
    const topics = {};
    for (const question of this.questions) {
      if (question.needsReview()) {
        topics[question.topic] = (topics[question.topic] || 0) + question.marks;
      }
    }
    return topics;
  }
  nextTopic() {
    const entries = Object.entries(this.weakTopics()).sort((a, b) => b[1] - a[1]);
    return entries.length ? entries[0][0] : "explain completed solutions";
  }
}

function solve(input) {
  const questions = input.questions.map((item) => new RevisionQuestion(item.topic, item.marks, item.attempted, item.confidence));
  const plan = new RevisionPlan(questions);
  return { weakTopics: plan.weakTopics(), nextTopic: plan.nextTopic(), reviewCount: questions.filter((q) => q.needsReview()).length };
}`,
        tests: [
          {
            name: { zh: "按 marks 选择 topic", en: "Chooses topic by marks" },
            input: { questions: [{ topic: "loops", marks: 4, attempted: true, confidence: 2 }, { topic: "OOP", marks: 8, attempted: false, confidence: 1 }] },
            expect: { zh: "nextTopic 为 OOP。", en: "nextTopic is OOP." },
            check: (result) => result.nextTopic === "OOP" && result.reviewCount === 2
          },
          {
            name: { zh: "没有薄弱题目", en: "No weak questions" },
            input: { questions: [{ topic: "functions", marks: 5, attempted: true, confidence: 4 }] },
            expect: { zh: "nextTopic 为 explain completed solutions。", en: "nextTopic is explain completed solutions." },
            check: (result) => result.nextTopic === "explain completed solutions"
          }
        ]
      }),
      challenge({
        id: "oop-flashcard",
        category: "oop",
        image: "assets/images/study-time.svg",
        title: { zh: "OOP：Flashcard 状态", en: "OOP: Flashcard State" },
        tag: { zh: "对象状态", en: "Object state" },
        difficulty: { zh: "中级", en: "Intermediate" },
        scenario: {
          zh: "复习卡片可以记录是否答对以及练习次数。这个任务训练方法如何改变对象状态。",
          en: "Flashcards can record correctness and attempts. This task trains how methods change object state."
        },
        users: { zh: ["OOP 初学者"], en: ["OOP beginners"] },
        concepts: { zh: ["类", "状态", "方法"], en: ["Classes", "State", "Methods"] },
        starter: {
          zh: {
            problem: "设计 Flashcard 类，记录 prompt、answer、attempts 和 correctCount。",
            success: "调用 checkAnswer 后 attempts 增加；答对时 correctCount 增加。",
            input: "cards 和 attempts。attempt 指定 cardIndex 和 answer。",
            output: "stats: 每张卡的 attempts、correctCount、mastered。",
            constraints: "忽略大小写和首尾空格比较答案。"
          },
          en: {
            problem: "Design a Flashcard class storing prompt, answer, attempts, and correctCount.",
            success: "After checkAnswer, attempts increases; correctCount increases only when correct.",
            input: "cards and attempts. Each attempt has cardIndex and answer.",
            output: "stats for each card: attempts, correctCount, mastered.",
            constraints: "Compare answers case-insensitively after trimming spaces."
          }
        },
        rules: {
          zh: ["每次回答 attempts 加 1。", "答案正确时 correctCount 加 1。", "correctCount >= 2 时 mastered。"],
          en: ["Every answer increments attempts.", "Correct answers increment correctCount.", "mastered is true when correctCount >= 2."]
        },
        steps: {
          zh: ["定义 Flashcard。", "实现 checkAnswer。", "处理 attempts。", "返回 stats。"],
          en: ["Define Flashcard.", "Implement checkAnswer.", "Process attempts.", "Return stats."]
        },
        sampleCode: `class Flashcard {
  constructor(prompt, answer) {
    this.prompt = prompt;
    this.answer = answer;
    this.attempts = 0;
    this.correctCount = 0;
  }
  checkAnswer(answer) {
    this.attempts += 1;
    const correct = answer.trim().toLowerCase() === this.answer.trim().toLowerCase();
    if (correct) this.correctCount += 1;
    return correct;
  }
  mastered() {
    return this.correctCount >= 2;
  }
}

function solve(input) {
  const cards = input.cards.map((card) => new Flashcard(card.prompt, card.answer));
  for (const attempt of input.attempts) {
    cards[attempt.cardIndex].checkAnswer(attempt.answer);
  }
  return {
    stats: cards.map((card) => ({ attempts: card.attempts, correctCount: card.correctCount, mastered: card.mastered() }))
  };
}`,
        tests: [
          {
            name: { zh: "能更新对象状态", en: "Updates object state" },
            input: { cards: [{ prompt: "keyword", answer: "return" }], attempts: [{ cardIndex: 0, answer: " Return " }, { cardIndex: 0, answer: "return" }] },
            expect: { zh: "attempts 为 2，mastered 为 true。", en: "attempts is 2 and mastered is true." },
            check: (result) => result.stats[0].attempts === 2 && result.stats[0].mastered === true
          },
          {
            name: { zh: "错误答案不增加 correctCount", en: "Wrong answer does not increase correctCount" },
            input: { cards: [{ prompt: "loop", answer: "for" }], attempts: [{ cardIndex: 0, answer: "while" }] },
            expect: { zh: "correctCount 为 0。", en: "correctCount is 0." },
            check: (result) => result.stats[0].correctCount === 0
          }
        ]
      }),
      challenge({
        id: "oop-task-tracker",
        category: "oop",
        image: "assets/images/budget.svg",
        title: { zh: "OOP：作业任务追踪器", en: "OOP: Assignment Task Tracker" },
        tag: { zh: "类设计", en: "Class design" },
        difficulty: { zh: "进阶", en: "Advanced" },
        scenario: {
          zh: "大作业通常由多个小任务组成。这个任务训练如何用对象表示任务状态。",
          en: "Large assignments are often made of smaller tasks. This trains representing task state with objects."
        },
        users: { zh: ["作业学生"], en: ["Assignment students"] },
        concepts: { zh: ["类", "封装", "状态更新"], en: ["Classes", "Encapsulation", "State updates"] },
        starter: {
          zh: {
            problem: "设计 AssignmentTask 类，支持 markDone 和 isBlocked。",
            success: "blocked 为 true 且 done 为 false 时任务阻塞；markDone 后 done 为 true。",
            input: "tasks 和 completedIds。",
            output: "doneCount、blockedOpenCount、openIds。",
            constraints: "completedIds 中不存在的 id 应忽略。"
          },
          en: {
            problem: "Design an AssignmentTask class supporting markDone and isBlocked.",
            success: "A task is blocked when blocked is true and done is false; markDone sets done true.",
            input: "tasks and completedIds.",
            output: "doneCount, blockedOpenCount, openIds.",
            constraints: "Unknown ids in completedIds should be ignored."
          }
        },
        rules: {
          zh: ["每个任务有 id、done、blocked。", "markDone 修改 done。", "isBlocked 只在未完成且 blocked 时为 true。"],
          en: ["Each task has id, done, blocked.", "markDone changes done.", "isBlocked is true only when not done and blocked."]
        },
        steps: {
          zh: ["创建任务对象。", "根据 completedIds 标记完成。", "统计完成和阻塞。", "返回未完成 id。"],
          en: ["Create task objects.", "Mark completed ids.", "Count done and blocked tasks.", "Return open ids."]
        },
        sampleCode: `class AssignmentTask {
  constructor(id, blocked) {
    this.id = id;
    this.blocked = blocked;
    this.done = false;
  }
  markDone() {
    this.done = true;
  }
  isBlocked() {
    return this.blocked && !this.done;
  }
}

function solve(input) {
  const tasks = input.tasks.map((task) => new AssignmentTask(task.id, task.blocked));
  for (const id of input.completedIds) {
    const task = tasks.find((item) => item.id === id);
    if (task) task.markDone();
  }
  return {
    doneCount: tasks.filter((task) => task.done).length,
    blockedOpenCount: tasks.filter((task) => task.isBlocked()).length,
    openIds: tasks.filter((task) => !task.done).map((task) => task.id)
  };
}`,
        tests: [
          {
            name: { zh: "能统计完成和阻塞", en: "Counts done and blocked tasks" },
            input: { tasks: [{ id: "a", blocked: false }, { id: "b", blocked: true }, { id: "c", blocked: true }], completedIds: ["a", "c"] },
            expect: { zh: "doneCount 为 2，blockedOpenCount 为 1。", en: "doneCount is 2 and blockedOpenCount is 1." },
            check: (result) => result.doneCount === 2 && result.blockedOpenCount === 1 && result.openIds.join(",") === "b"
          },
          {
            name: { zh: "忽略不存在 id", en: "Ignores unknown ids" },
            input: { tasks: [{ id: "x", blocked: false }], completedIds: ["missing"] },
            expect: { zh: "doneCount 为 0，openIds 包含 x。", en: "doneCount is 0 and openIds contains x." },
            check: (result) => result.doneCount === 0 && result.openIds[0] === "x"
          }
        ]
      })
    ]
  };
})();
