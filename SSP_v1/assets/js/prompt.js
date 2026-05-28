(function () {
  function text(value, lang) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[lang] || value.zh || value.en || "";
    }
    return value || "";
  }

  function listLines(items) {
    return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
  }

  function buildPrompt(challenge, progress, language, lang) {
    const title = text(challenge.title, lang);
    const isZh = lang === "zh";
    const target =
      language === "JavaScript"
        ? isZh
          ? "请写 JavaScript 代码，并提供一个 solve(input) 函数。这个 MVP 会调用 solve(input) 来运行测试。"
          : "Write JavaScript and provide a solve(input) function. This MVP will call solve(input) to run tests."
        : isZh
          ? "请写 Python 代码，并提供一个 solve(input_data) 函数。请把输入视为由 dict、list、str、int、bool 组成的数据。"
          : "Write Python and provide a solve(input_data) function. Treat the input as data made from dict, list, str, int, and bool values.";

    if (!isZh) {
      return `You are a CSSE1001 study coach. Help me design a solution, but do not replace my understanding.

TASK
${title}

PROBLEM
${progress.problem}

SUCCESS CRITERIA
${progress.success}

INPUTS
${progress.input}

OUTPUTS
${progress.output}

CONSTRAINTS
${progress.constraints}

RULES
${listLines(progress.rules)}

ALGORITHM STEPS
${listLines(progress.steps)}

CODE REQUIREMENTS
1. ${target}
2. Keep the code beginner-readable and use small helper functions or classes where appropriate.
3. Include comments that explain intent, not every obvious line.
4. Provide at least two tests, including one edge case.
5. Explain the input shape, output shape, key algorithm, likely mistakes, and time complexity.
6. Add a short "paper exam explanation" section that I could write without AI.

IMPORTANT
This is for CSSE1001 study. If AI assistance would hide my understanding, ask me to trace or explain the step instead of only giving final code.`;
    }

    return `你是一名 CSSE1001 学习导师。请帮助我设计解决方案，但不要替代我的理解。

【任务名称】
${title}

【问题描述】
${progress.problem}

【成功标准】
${progress.success}

【程序输入】
${progress.input}

【程序输出】
${progress.output}

【限制与注意事项】
${progress.constraints}

【判断规则】
${listLines(progress.rules)}

【算法步骤】
${listLines(progress.steps)}

【代码要求】
1. ${target}
2. 代码要适合初学者阅读，必要时拆成小函数或类。
3. 注释应解释意图，而不是逐行翻译代码。
4. 至少给出 2 个测试，其中 1 个必须是边界情况。
5. 解释输入形状、输出形状、核心算法、常见错误和时间复杂度。
6. 最后加一段“纸笔考试解释”，让我能在没有 AI 的情况下复述。

【特别提醒】
这是 CSSE1001 学习用途。如果 AI 的回答会掩盖我的理解，请要求我先追踪变量或解释步骤，而不是只给最终代码。`;
  }

  window.MVP_PROMPT = {
    buildPrompt
  };
})();
