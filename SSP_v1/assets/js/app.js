(function () {
  const { categories, challenges } = window.MVP_DATA;
  const examItems = (window.MVP_EXAM_BANK && window.MVP_EXAM_BANK.items) || [];
  const visualizer = window.MVP_VISUALIZER;
  const i18n = window.MVP_I18N;
  const storage = window.MVP_STORAGE;
  const promptTools = window.MVP_PROMPT;
  const codeRunner = window.MVP_CODE_RUNNER;

  const state = storage.loadState();
  const els = {};

  function $(id) {
    return document.getElementById(id);
  }

  function lang() {
    return state.lang === "en" ? "en" : "zh";
  }

  function copy() {
    return i18n[lang()];
  }

  function t(value) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[lang()] || value.zh || value.en || "";
    }
    return value || "";
  }

  function arr(value) {
    return t(value) || [];
  }

  function challengeById(id) {
    return challenges.find((challenge) => challenge.id === id) || challenges[0];
  }

  function examById(id) {
    return examItems.find((item) => item.id === id) || examItems[0];
  }

  function selectedCategoryId() {
    const exists = categories.some((category) => category.id === state.selectedCategory);
    if (!exists) state.selectedCategory = categories[0].id;
    return state.selectedCategory;
  }

  function categoryStats(categoryId) {
    const practice = challenges.filter((challenge) => challenge.category === categoryId);
    const exams = examItems.filter((item) => item.category === categoryId);
    const answered = exams.filter((item) => state.examAnswers && state.examAnswers[item.id]).length;
    const types = {};
    exams.forEach((item) => {
      types[item.type] = (types[item.type] || 0) + 1;
    });
    return {
      practiceCount: practice.length,
      examCount: exams.length,
      answered,
      total: practice.length + exams.length,
      types
    };
  }

  function allStats() {
    const answered = examItems.filter((item) => state.examAnswers && state.examAnswers[item.id]).length;
    return {
      categoryCount: categories.length,
      practiceCount: challenges.length,
      examCount: examItems.length,
      answered,
      total: challenges.length + examItems.length
    };
  }

  function progressKey(challengeId) {
    return `${challengeId}:${lang()}`;
  }

  function defaultProgress(challenge) {
    const currentLang = lang();
    const starter = challenge.starter[currentLang] || challenge.starter.zh;
    return {
      problem: starter.problem,
      success: starter.success,
      input: starter.input,
      output: starter.output,
      constraints: starter.constraints,
      rules: [...(challenge.rules[currentLang] || challenge.rules.zh)],
      steps: [...(challenge.steps[currentLang] || challenge.steps.zh)],
      language: "Python",
      prompt: "",
      code: challenge.sampleCode,
      testResults: [],
      diagnosisNotes: "",
      reflections: {},
      savedAt: null,
      updatedAt: new Date().toISOString()
    };
  }

  function ensureProgress(challengeId) {
    const challenge = challengeById(challengeId);
    const key = progressKey(challengeId);
    if (!state.progress[key]) {
      state.progress[key] = defaultProgress(challenge);
      storage.saveState(state);
    }
    return state.progress[key];
  }

  function currentChallenge() {
    return challengeById(state.selectedId || challenges[0].id);
  }

  function currentProgress() {
    return ensureProgress(currentChallenge().id);
  }

  function setText(id, value) {
    const element = $(id);
    if (element) element.textContent = value;
  }

  function applyStaticCopy() {
    const c = copy();
    document.documentElement.lang = lang() === "zh" ? "zh-CN" : "en";
    setText("brandTitle", c.brandTitle);
    setText("brandSubtitle", c.brandSubtitle);
    setText("navChallengesText", c.navChallenges);
    setText("navStudioText", c.navStudio);
    setText("navPortfolioText", c.navPortfolio);
    setText("languageToggleText", c.langToggle);
    setText("heroEyebrow", c.heroEyebrow);
    setText("hero-title", c.heroTitle);
    setText("heroBody", c.heroBody);
    c.cycle.forEach((item, index) => setText(`cycleStep${index}`, item));
    setText("researchEyebrow", c.researchEyebrow);
    setText("research-title", c.researchTitle);
    setText("researchBody", c.researchBody);
    setText("sourceTitle", c.sourceTitle);
    setText("challengeEyebrow", c.challengeEyebrow);
    setText("challenge-title", c.challengeTitle);
    setText("challengeBody", c.challengeBody);
    setText("backText", c.back);
    setText("studioEyebrow", c.studioEyebrow);
    setText("studio-title", c.studioTitle);
    setText("saveStatus", c.ready);
    setText("problemSectionTitle", c.problemSectionTitle);
    setText("problemSectionBody", c.problemSectionBody);
    setText("problemLabel", c.problemLabel);
    setText("successLabel", c.successLabel);
    setText("ioTitle", c.ioTitle);
    setText("ioBody", c.ioBody);
    setText("inputLabel", c.inputLabel);
    setText("outputLabel", c.outputLabel);
    setText("constraintsLabel", c.constraintsLabel);
    setText("rulesTitle", c.rulesTitle);
    setText("rulesBody", c.rulesBody);
    setText("ruleHeading", c.ruleHeading);
    setText("ruleHint", c.ruleHint);
    setText("stepHeading", c.stepHeading);
    setText("stepHint", c.stepHint);
    setText("promptTitle", c.promptTitle);
    setText("promptBody", c.promptBody);
    setText("languageLabel", c.languageLabel);
    setText("generatePromptBtn", c.generatePrompt);
    setText("copyPromptBtn", c.copyPrompt);
    setText("promptDraftLabel", c.promptDraft);
    setText("codeTitle", c.codeTitle);
    setText("codeBody", c.codeBody);
    setText("loadSampleCodeBtn", c.loadSample);
    setText("runTestsBtn", c.runTests);
    setText("codeEditorLabel", c.codeEditor);
    setText("reflectionTitle", c.reflectionTitle);
    setText("reflectionBody", c.reflectionBody);
    setText("diagnosisLabel", c.diagnosisLabel);
    setText("savePortfolioBtn", c.savePortfolio);
    setText("resetCurrentBtn", c.resetCurrent);
    setText("portfolioEyebrow", c.portfolioEyebrow);
    setText("portfolio-title", c.portfolioTitle);
    setText("portfolioBody", c.portfolioBody);

    const stepLabels =
      lang() === "zh"
        ? ["1. 定义问题", "2. 输入输出", "3. 规则步骤", "4. Prompt", "5. 代码测试", "6. 诊断反思"]
        : ["1. Define", "2. Inputs/outputs", "3. Rules/steps", "4. Prompt", "5. Test code", "6. Diagnose"];
    stepLabels.forEach((item, index) => setText(`stepNav${index}`, item));

    els.newRuleInput.placeholder = c.addRulePlaceholder;
    els.newStepInput.placeholder = c.addStepPlaceholder;
    if (els.researchItems) {
      els.researchItems.innerHTML = c.researchItems.map((item) => `<li>${item}</li>`).join("");
    }
  }

  function renderLearningDashboard() {
    const stats = allStats();
    const activeCategory = categories.find((category) => category.id === selectedCategoryId()) || categories[0];
    const percent = stats.examCount ? Math.round((stats.answered / stats.examCount) * 100) : 0;
    const label = lang() === "zh"
      ? {
          focus: "当前学习模块",
          progress: "知识点分布"
        }
      : {
          focus: "Current Module",
          progress: "Topic Distribution"
        };

    els.learningDashboard.innerHTML = `
      <div class="focus-panel">
        <div>
          <p class="eyebrow">${label.focus}</p>
          <h3>${escapeHtml(t(activeCategory.title))}</h3>
          <p>${escapeHtml(t(activeCategory.description))}</p>
        </div>
        <div class="progress-dial" style="--progress:${percent}">
          <span>${percent}%</span>
        </div>
      </div>
      <div class="mini-flow" aria-label="${label.progress}">
        ${categories
          .map((category) => {
            const stats = categoryStats(category.id);
            const width = Math.max(8, Math.round((stats.total / Math.max(1, allStats().total)) * 100));
            return `
              <button class="flow-node ${category.id === activeCategory.id ? "is-active" : ""}" type="button" data-category-jump="${category.id}">
                <span>${escapeHtml(t(category.title))}</span>
                <i style="width:${width}%"></i>
              </button>
            `;
          })
          .join("")}
      </div>
    `;

    els.learningDashboard.querySelectorAll("[data-category-jump]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedCategory = button.dataset.categoryJump;
        storage.saveState(state);
        showView("challenges");
      });
    });
  }

  function saveCurrent() {
    const challenge = currentChallenge();
    if (!challenge) return;
    const progress = ensureProgress(challenge.id);
    progress.problem = els.problemText.value.trim();
    progress.success = els.successText.value.trim();
    progress.input = els.inputText.value.trim();
    progress.output = els.outputText.value.trim();
    progress.constraints = els.constraintsText.value.trim();
    progress.language = els.languageSelect.value;
    progress.prompt = els.promptOutput.value;
    progress.code = els.codeEditor.value;
    progress.diagnosisNotes = els.diagnosisNotes.value.trim();

    arr(challenge.reflectionQuestions).forEach((question, index) => {
      const input = $(`reflection_${index}`);
      if (input) progress.reflections[question] = input.value.trim();
    });

    progress.updatedAt = new Date().toISOString();
    storage.saveState(state);
    setSaveStatus(copy().saved);
  }

  function setSaveStatus(text) {
    if (!els.saveStatus) return;
    els.saveStatus.textContent = text;
    clearTimeout(setSaveStatus.timer);
    setSaveStatus.timer = setTimeout(() => {
      els.saveStatus.textContent = copy().autoSaving;
    }, 1500);
  }

  function showView(name) {
    if (name === "challenges") selectedCategoryId();
    if (name === "challenges") renderChallenges();
    if (name === "studio") renderStudio();
    if (name === "portfolio") renderPortfolio();
    if (name === "exam") renderExam();

    document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
    document.querySelectorAll(".nav-button").forEach((button) => button.classList.remove("is-active"));

    const targetId = name === "challenges" ? "challengeView" : `${name}View`;
    const target = $(targetId);
    if (target) target.classList.add("is-active");

    document.querySelectorAll(`[data-view-link="${name}"]`).forEach((button) => {
      if (button.classList.contains("nav-button")) button.classList.add("is-active");
    });

    const top = name === "challenges" ? Math.max(0, $("challengeView").offsetTop - 86) : 0;
    window.scrollTo({ top, behavior: "smooth" });
  }

  function renderChallenges() {
    const c = copy();
    const activeCategoryId = selectedCategoryId();
    const activeCategory = categories.find((category) => category.id === activeCategoryId);
    const visibleChallenges = challenges.filter((challenge) => challenge.category === activeCategoryId);
    const visibleExams = examItems.filter((item) => item.category === activeCategoryId);
    renderLearningDashboard();

    els.categoryTabs.innerHTML = categories
      .map((category) => {
        const count =
          challenges.filter((challenge) => challenge.category === category.id).length +
          examItems.filter((item) => item.category === category.id).length;
        return `
          <button class="category-tab ${category.id === activeCategoryId ? "is-active" : ""}" type="button" data-category="${category.id}">
            <strong>${escapeHtml(t(category.title))}</strong>
            <span>${count} ${c.categoryCount}</span>
          </button>
        `;
      })
      .join("");

    els.categorySummary.innerHTML = `
      <div>
        <h3>${escapeHtml(t(activeCategory.title))}</h3>
        <p>${escapeHtml(t(activeCategory.description))}</p>
      </div>
      <span class="status-pill">${visibleChallenges.length + visibleExams.length} ${c.categoryCount}</span>
    `;

    els.categoryTabs.querySelectorAll("[data-category]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedCategory = button.dataset.category;
        storage.saveState(state);
        renderChallenges();
      });
    });

    const practiceCards = visibleChallenges
      .map((challenge) => {
        const progress = state.progress[progressKey(challenge.id)];
        const status = progress && progress.savedAt ? c.savedWork : progress ? c.started : c.notStarted;
        return `
          <article class="challenge-card">
            <img src="${challenge.image}" alt="${escapeHtml(t(challenge.title))}" />
            <div class="challenge-body">
              <div class="challenge-meta">
                <span>${escapeHtml(t(challenge.tag))}</span>
                <span>${escapeHtml(t(challenge.difficulty))}</span>
              </div>
              <h3>${escapeHtml(t(challenge.title))}</h3>
              <p>${escapeHtml(t(challenge.scenario))}</p>
              <div class="concept-list">
                ${arr(challenge.concepts).map((concept) => `<span>${escapeHtml(concept)}</span>`).join("")}
              </div>
              <div class="card-actions">
                <span class="status-pill">${status}</span>
                <button class="primary-button" type="button" data-start="${challenge.id}">${c.start}</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    const examCards = visibleExams
      .map((item) => {
        const saved = state.examAnswers && state.examAnswers[item.id];
        return `
          <article class="challenge-card exam-card">
            <div class="exam-card-top">
              <span class="status-pill">${escapeHtml(item.source)} · Q${item.questionNumber}</span>
              <span class="status-pill">${formatQuestionType(item.type)}</span>
            </div>
            <div class="challenge-body">
              <div class="challenge-meta">
                <span>${lang() === "zh" ? "往年考试题型" : "Past-exam item"}</span>
                <span>${item.options.length ? item.options.length + " options" : formatQuestionType(item.type)}</span>
              </div>
              <h3>${escapeHtml(item.source)} Q${item.questionNumber}</h3>
              <p>${escapeHtml(trimText(item.prompt, 180))}</p>
              <div class="concept-list">
                ${item.keywords.map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join("")}
              </div>
              <div class="card-actions">
                <span class="status-pill">${saved ? (lang() === "zh" ? "已提交答案" : "Response saved") : (lang() === "zh" ? "待作答" : "Pending response")}</span>
                <button class="primary-button" type="button" data-exam="${item.id}">${lang() === "zh" ? "进入题目" : "Open item"}</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    els.challengeGrid.innerHTML = practiceCards + examCards;

    els.challengeGrid.querySelectorAll("[data-start]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedId = button.dataset.start;
        ensureProgress(state.selectedId);
        storage.saveState(state);
        showView("studio");
      });
    });

    els.challengeGrid.querySelectorAll("[data-exam]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedExamId = button.dataset.exam;
        storage.saveState(state);
        showView("exam");
      });
    });
  }

  function renderStudio() {
    if (!state.selectedId) {
      state.selectedId = challenges[0].id;
      storage.saveState(state);
    }

    const challenge = currentChallenge();
    const progress = ensureProgress(challenge.id);

    els.currentChallengeSummary.innerHTML = `
      <img src="${challenge.image}" alt="${escapeHtml(t(challenge.title))}" />
      <p class="eyebrow">${escapeHtml(t(challenge.tag))} · ${escapeHtml(t(challenge.difficulty))}</p>
      <h3>${escapeHtml(t(challenge.title))}</h3>
      <p>${escapeHtml(t(challenge.scenario))}</p>
      <div class="user-list">${arr(challenge.users).map((user) => `<span>${escapeHtml(user)}</span>`).join("")}</div>
    `;

    els.problemText.value = progress.problem;
    els.successText.value = progress.success;
    els.inputText.value = progress.input;
    els.outputText.value = progress.output;
    els.constraintsText.value = progress.constraints;
    els.languageSelect.value = progress.language || "Python";
    els.promptOutput.value =
      progress.prompt || promptTools.buildPrompt(challenge, progress, progress.language || "Python", lang());
    els.codeEditor.value = progress.code || challenge.sampleCode;
    els.diagnosisNotes.value = progress.diagnosisNotes || "";

    renderEditableList("ruleList", progress.rules, "rules");
    renderEditableList("stepList", progress.steps, "steps");
    if (els.newRuleInput && els.newRuleInput.closest(".inline-input")) {
      els.newRuleInput.closest(".inline-input").style.display = "none";
    }
    if (els.newStepInput && els.newStepInput.closest(".inline-input")) {
      els.newStepInput.closest(".inline-input").style.display = "none";
    }
    renderReflectionQuestions(challenge, progress);
    renderDebugGuide(challenge, progress);
    renderTestResults(progress.testResults || [], challenge);
    renderVisualizer("studioVisualizer", challenge.category, {
      keywords: progress.rules,
      type: "practice"
    });
  }

  function renderExam() {
    const item = examById(state.selectedExamId);
    if (!item) {
      showView("challenges");
      return;
    }

    const answer = state.examAnswers[item.id] || {};
    setText("exam-title", `${item.source} Q${item.questionNumber}`);
    setText("examSource", item.pdfFile);
    setText("examQuestionTitle", `${item.source} · Question ${item.questionNumber}`);
    setText("examNotice", lang() === "zh" ? "本题来自你提供的 PDF。由于文件未包含官方答案，本页面仅保存你的作答与依据。" : "This question comes from your PDF. Because the file does not include an official answer, this page stores only your response and rationale.");
    setText("examKeywordTitle", lang() === "zh" ? "题目关键词 → 技术操作" : "Keywords → Technical Actions");
    setText("examKeywordBody", lang() === "zh" ? "识别关键词，并将解题动作排列成可检查的顺序。" : "Identify the keywords and arrange the solving actions into a checkable order.");
    setText("examAnswerTitle", lang() === "zh" ? "答案提交" : "Response");
    setText("examAnswerBody", lang() === "zh" ? "请选择答案，并写出简要作答依据。" : "Select a response and provide a concise rationale.");
    setText("examReasonLabel", lang() === "zh" ? "作答依据" : "Rationale");
    setText("saveExamAnswerBtn", lang() === "zh" ? "保存答案" : "Save response");
    setText("backFromExamText", copy().back);

    els.examMeta.innerHTML = `
      <span>${escapeHtml(formatQuestionType(item.type))}</span>
      <span>${escapeHtml(categoryTitle(item.category))}</span>
    `;
    els.examPrompt.textContent = item.prompt;
    els.examKeywords.innerHTML = item.keywords.map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join("");
    renderExamOperations(item, answer.operationOrder);
    renderExamAnswerArea(item, answer);
    els.examReason.value = answer.reason || "";
    renderVisualizer("examVisualizer", item.category, item);
  }

  function renderVisualizer(containerId, category, item) {
    const container = $(containerId);
    if (!container || !visualizer) return;
    const config = visualizer.makeFrames(category, item, lang());
    visualizer.render(container, { ...config, lang: lang() });
  }

  function categoryTitle(categoryId) {
    const category = categories.find((item) => item.id === categoryId);
    return category ? t(category.title) : categoryId;
  }

  function defaultOperations(item) {
    const base =
      lang() === "zh"
        ? ["阅读题干", "识别关键词", "手动追踪或计算", "排除不符合条件的选项", "写出作答依据"]
        : ["Read the question", "Identify keywords", "Trace or calculate manually", "Eliminate inconsistent options", "Write the rationale"];

    if (item.type === "trace_choice") {
      return lang() === "zh"
        ? ["确认初始变量", "逐行追踪代码", "记录最终状态", "对照备选项", "写出作答依据"]
        : ["Confirm initial variables", "Trace the code line by line", "Record the final state", "Compare with options", "Write the rationale"];
    }
    if (item.type === "code_choice") {
      return lang() === "zh"
        ? ["定位 #sub 或空缺位置", "判断缺失操作", "逐项代入验证", "检查语法或运行错误", "写出作答依据"]
        : ["Locate #sub or the blank", "Identify the missing action", "Substitute each option", "Check syntax or runtime errors", "Write the rationale"];
    }
    return base;
  }

  function renderExamOperations(item, order) {
    const operations = Array.isArray(order) && order.length ? order : defaultOperations(item);
    els.examOperationList.innerHTML = operations
      .map(
        (operation, index) => `
          <li>
            <b>${index + 1}</b>
            <span>${escapeHtml(operation)}</span>
            <div class="move-buttons">
              <button type="button" class="small-icon-button" data-exam-move="${index}" data-dir="-1" title="Move up">↑</button>
              <button type="button" class="small-icon-button" data-exam-move="${index}" data-dir="1" title="Move down">↓</button>
            </div>
          </li>
        `
      )
      .join("");

    els.examOperationList.querySelectorAll("[data-exam-move]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.examMove);
        const dir = Number(button.dataset.dir);
        const next = index + dir;
        if (next < 0 || next >= operations.length) return;
        const copyOps = [...operations];
        [copyOps[index], copyOps[next]] = [copyOps[next], copyOps[index]];
        const item = examById(state.selectedExamId);
        state.examAnswers[item.id] = {
          ...(state.examAnswers[item.id] || {}),
          operationOrder: copyOps
        };
        storage.saveState(state);
        renderExamOperations(item, copyOps);
      });
    });
  }

  function renderExamAnswerArea(item, answer) {
    if (item.options && item.options.length) {
      els.examOptions.innerHTML = item.options
        .map(
          (option) => `
            <label class="option-item">
              <input type="radio" name="examOption" value="${escapeHtml(option.label)}" ${answer.choice === option.label ? "checked" : ""} />
              <span class="option-label">${escapeHtml(option.label)}</span>
              <span>${escapeHtml(option.text)}</span>
            </label>
          `
        )
        .join("");
      els.examAnswerArea.innerHTML = `<p class="answer-note">${lang() === "zh" ? "选择一个选项。官方答案不在 PDF 中，所以这里不自动判分。" : "Choose one option. The official answer is not in the PDF, so this page does not auto-grade."}</p>`;
      els.examOptions.querySelectorAll("input[name='examOption']").forEach((input) => {
        input.addEventListener("change", () => {
          state.examAnswers[item.id] = {
            ...(state.examAnswers[item.id] || {}),
            choice: input.value
          };
          storage.saveState(state);
        });
      });
      return;
    }

    els.examOptions.innerHTML = "";
    els.examAnswerArea.innerHTML = `
      <label class="field">
        <span>${lang() === "zh" ? "我的答案" : "My answer"}</span>
        <input id="examBlankAnswer" type="text" value="${escapeHtml(answer.blank || "")}" />
      </label>
    `;
    const input = $("examBlankAnswer");
    if (input) {
      input.addEventListener("input", () => {
        state.examAnswers[item.id] = {
          ...(state.examAnswers[item.id] || {}),
          blank: input.value
        };
        storage.saveState(state);
      });
    }
  }

  function renderEditableList(elementId, items, key) {
    const list = $(elementId);
    if (key === "rules") {
      list.classList.add("keyword-chips");
      list.innerHTML = items.map((item) => `<li><span>${escapeHtml(item)}</span></li>`).join("");
      return;
    }
    list.classList.remove("keyword-chips");
    list.innerHTML = items
      .map(
        (item, index) => `
          <li>
            <span>${escapeHtml(item)}</span>
            <div class="move-buttons">
              <button type="button" class="small-icon-button" data-move="${key}" data-index="${index}" data-dir="-1" title="Move up">↑</button>
              <button type="button" class="small-icon-button" data-move="${key}" data-index="${index}" data-dir="1" title="Move down">↓</button>
            </div>
          </li>
        `
      )
      .join("");

    list.querySelectorAll("[data-move]").forEach((button) => {
      button.addEventListener("click", () => {
        const progress = currentProgress();
        const listKey = button.dataset.move;
        const index = Number(button.dataset.index);
        const next = index + Number(button.dataset.dir);
        if (next < 0 || next >= progress[listKey].length) return;
        [progress[listKey][index], progress[listKey][next]] = [progress[listKey][next], progress[listKey][index]];
        storage.saveState(state);
        renderStudio();
      });
    });
  }

  function renderReflectionQuestions(challenge, progress) {
    els.reflectionQuestions.innerHTML = arr(challenge.reflectionQuestions)
      .map(
        (question, index) => `
          <label class="field">
            <span>${escapeHtml(question)}</span>
            <textarea id="reflection_${index}" rows="3">${escapeHtml(progress.reflections[question] || "")}</textarea>
          </label>
        `
      )
      .join("");

    els.reflectionQuestions.querySelectorAll("textarea").forEach((textarea) => {
      textarea.addEventListener("input", saveCurrent);
    });
  }

  function renderDebugGuide(challenge, progress) {
    const failed = (progress.testResults || []).filter((result) => !result.passed);
    const intro =
      lang() === "zh"
        ? failed.length
          ? `${failed.length} 个测试未通过。请先判断失败来源：规格理解、步骤排序、Prompt 表达或代码实现。`
          : "运行测试后，系统会根据结果提示下一步诊断方向。"
        : failed.length
          ? `${failed.length} test(s) failed. First decide whether the issue is in the rules, steps, prompt, or implementation.`
          : "After running tests, this area will suggest the next debugging direction.";

    const nudge =
      lang() === "zh"
        ? ["下一轮 Prompt 可采用以下开头：", "当前程序在指定测试中失败。请只修正导致失败的规则或函数，并说明修改依据。"]
        : [
            "A next prompt could start with:",
            "The current program failed a specific test. Revise only the rule or function that caused the failure, and explain the reason."
          ];

    els.debugGuide.innerHTML = `
      <p>${intro}</p>
      <ul>
        ${arr(challenge.debugTips).map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}
      </ul>
      <div class="prompt-nudge">
        <strong>${nudge[0]}</strong>
        <span>${nudge[1]}</span>
      </div>
    `;
  }

  function renderTestResults(results, challenge) {
    const c = copy();
    if (!results.length) {
      els.testResults.innerHTML = `
        <div class="empty-state">
          <h4>${c.emptyTestsTitle}</h4>
          <p>${c.emptyTestsBody}</p>
        </div>
      `;
      return;
    }

    const passedCount = results.filter((item) => item.passed).length;
    els.testResults.innerHTML = `
      <div class="result-summary">
        <strong>${passedCount}/${challenge.tests.length} ${c.testsPassed}</strong>
        <span>${passedCount === challenge.tests.length ? c.allPassed : c.needsWork}</span>
      </div>
      ${results
        .map(
          (result) => `
            <article class="result-card ${result.passed ? "passed" : "failed"}">
              <div>
                <h4>${result.passed ? c.passed : c.failed}: ${escapeHtml(result.name)}</h4>
                <p><strong>${c.expected}:</strong> ${escapeHtml(result.expect)}</p>
                ${
                  result.error
                    ? `<pre>${escapeHtml(result.error)}</pre>`
                    : `<pre>${escapeHtml(JSON.stringify(result.output, null, 2))}</pre>`
                }
              </div>
            </article>
          `
        )
        .join("")}
    `;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function trimText(value, limit) {
    const text = String(value || "").replace(/\s+/g, " ").trim();
    if (text.length <= limit) return text;
    return `${text.slice(0, limit - 1)}…`;
  }

  function formatQuestionType(type) {
    const zh = {
      multiple_choice: "选择题",
      trace_choice: "代码追踪选择题",
      code_choice: "补代码选择题",
      fill_blank: "填空题",
      short_answer: "简答题"
    };
    const en = {
      multiple_choice: "Multiple choice",
      trace_choice: "Code-tracing MCQ",
      code_choice: "Code-completion MCQ",
      fill_blank: "Fill in the blank",
      short_answer: "Short answer"
    };
    return (lang() === "zh" ? zh : en)[type] || type;
  }

  function addListItem(key, inputEl) {
    const value = inputEl.value.trim();
    if (!value) return;
    const progress = currentProgress();
    progress[key].push(value);
    inputEl.value = "";
    storage.saveState(state);
    renderStudio();
  }

  async function runTests() {
    saveCurrent();
    const c = copy();
    const challenge = currentChallenge();
    const progress = currentProgress();
    els.testResults.innerHTML = `<div class="empty-state"><h4>${c.runningTestsTitle}</h4><p>${c.runningTestsBody}</p></div>`;

    const results = [];
    for (const test of challenge.tests) {
      const execution = await codeRunner.runUserCode(progress.code, test.input);
      if (!execution.ok) {
        results.push({
          name: t(test.name),
          expect: t(test.expect),
          passed: false,
          error: execution.error
        });
        continue;
      }

      let passed = false;
      try {
        passed = Boolean(test.check(execution.result));
      } catch (error) {
        results.push({
          name: t(test.name),
          expect: t(test.expect),
          passed: false,
          output: execution.result,
          error: error.message
        });
        continue;
      }

      results.push({
        name: t(test.name),
        expect: t(test.expect),
        passed,
        output: execution.result
      });
    }

    progress.testResults = results;
    storage.saveState(state);
    renderTestResults(results, challenge);
    renderDebugGuide(challenge, progress);
    setSaveStatus(lang() === "zh" ? "测试结果已保存" : "Test results saved");
  }

  function savePortfolio() {
    saveCurrent();
    const challenge = currentChallenge();
    const progress = currentProgress();
    const existingIndex = state.portfolio.findIndex((item) => item.challengeId === challenge.id && item.lang === lang());
    const passed = (progress.testResults || []).filter((item) => item.passed).length;

    const snapshot = {
      challengeId: challenge.id,
      lang: lang(),
      title: t(challenge.title),
      tag: t(challenge.tag),
      savedAt: new Date().toISOString(),
      passed,
      totalTests: challenge.tests.length,
      problem: progress.problem,
      prompt: progress.prompt,
      diagnosisNotes: progress.diagnosisNotes,
      reflections: progress.reflections
    };

    if (existingIndex >= 0) state.portfolio[existingIndex] = snapshot;
    else state.portfolio.unshift(snapshot);

    progress.savedAt = snapshot.savedAt;
    storage.saveState(state);
    setSaveStatus(copy().portfolioSaved);
    renderChallenges();
  }

  function renderPortfolio() {
    const c = copy();
    const items = state.portfolio.filter((item) => item.lang === lang());
    if (!items.length) {
      els.portfolioList.innerHTML = `
        <div class="empty-state large">
          <h3>${c.noPortfolioTitle}</h3>
          <p>${c.noPortfolioBody}</p>
        </div>
      `;
      return;
    }

    els.portfolioList.innerHTML = items
      .map((item) => {
        const challenge = challengeById(item.challengeId);
        const reflectionText = Object.entries(item.reflections || {})
          .filter((entry) => entry[1])
          .map(([question, answer]) => `<p><strong>${escapeHtml(question)}</strong><br />${escapeHtml(answer)}</p>`)
          .join("");

        return `
          <article class="portfolio-card">
            <img src="${challenge.image}" alt="${escapeHtml(item.title)}" />
            <div>
              <div class="challenge-meta">
                <span>${escapeHtml(item.tag)}</span>
                <span>${item.passed}/${item.totalTests} ${c.testsPassed}</span>
              </div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.problem)}</p>
              <details>
                <summary>${lang() === "zh" ? "查看 prompt 与反思" : "View prompt and reflection"}</summary>
                <h4>Prompt</h4>
                <pre>${escapeHtml(item.prompt || "No prompt yet")}</pre>
                <h4>${lang() === "zh" ? "诊断记录" : "Diagnosis notes"}</h4>
                <p>${escapeHtml(item.diagnosisNotes || (lang() === "zh" ? "尚未填写诊断记录" : "No diagnosis notes yet"))}</p>
                <h4>${lang() === "zh" ? "反思" : "Reflection"}</h4>
                ${reflectionText || `<p>${lang() === "zh" ? "尚未填写反思。" : "No reflection yet."}</p>`}
              </details>
              <div class="card-actions">
                <span class="status-pill">${new Date(item.savedAt).toLocaleString(lang() === "zh" ? "zh-CN" : "en-AU")}</span>
                <button class="secondary-button" type="button" data-open="${item.challengeId}">${c.continueEditing}</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    els.portfolioList.querySelectorAll("[data-open]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedId = button.dataset.open;
        storage.saveState(state);
        showView("studio");
      });
    });
  }

  function bindEvents() {
    document.querySelectorAll("[data-view-link]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const target = button.dataset.viewLink;
        if (target === "challenges") state.selectedCategory = categories[0].id;
        if (target === "studio" && !state.selectedId) state.selectedId = challenges[0].id;
        storage.saveState(state);
        showView(target);
      });
    });

    [
      "problemText",
      "successText",
      "inputText",
      "outputText",
      "constraintsText",
      "promptOutput",
      "codeEditor",
      "diagnosisNotes"
    ].forEach((id) => {
      $(id).addEventListener("input", saveCurrent);
    });

    els.languageSelect.addEventListener("change", () => {
      const progress = currentProgress();
      progress.language = els.languageSelect.value;
      els.promptOutput.value = promptTools.buildPrompt(currentChallenge(), progress, progress.language, lang());
      saveCurrent();
    });

    els.languageToggle.addEventListener("click", () => {
      saveCurrent();
      state.lang = lang() === "zh" ? "en" : "zh";
      storage.saveState(state);
      applyStaticCopy();
      renderChallenges();
      renderStudio();
      renderPortfolio();
      renderExam();
    });

    els.generatePromptBtn.addEventListener("click", () => {
      saveCurrent();
      const progress = currentProgress();
      els.promptOutput.value = promptTools.buildPrompt(currentChallenge(), progress, progress.language, lang());
      saveCurrent();
    });

    els.copyPromptBtn.addEventListener("click", async () => {
      saveCurrent();
      try {
        await navigator.clipboard.writeText(els.promptOutput.value);
        setSaveStatus(copy().promptCopied);
      } catch (error) {
        els.promptOutput.select();
        setSaveStatus(copy().manualCopy);
      }
    });

    els.addRuleBtn.addEventListener("click", () => addListItem("rules", els.newRuleInput));
    els.addStepBtn.addEventListener("click", () => addListItem("steps", els.newStepInput));

    els.newRuleInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") addListItem("rules", els.newRuleInput);
    });
    els.newStepInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") addListItem("steps", els.newStepInput);
    });

    els.loadSampleCodeBtn.addEventListener("click", () => {
      els.codeEditor.value = currentChallenge().sampleCode;
      saveCurrent();
    });

    els.runTestsBtn.addEventListener("click", runTests);
    els.savePortfolioBtn.addEventListener("click", savePortfolio);
    els.backToChallengesBtn.addEventListener("click", () => {
      state.selectedCategory = categories[0].id;
      storage.saveState(state);
      showView("challenges");
    });

    els.resetCurrentBtn.addEventListener("click", () => {
      const challenge = currentChallenge();
      const confirmed = window.confirm(`${copy().resetConfirmPrefix}「${t(challenge.title)}」${copy().resetConfirmSuffix}`);
      if (!confirmed) return;
      delete state.progress[progressKey(challenge.id)];
      state.portfolio = state.portfolio.filter((item) => !(item.challengeId === challenge.id && item.lang === lang()));
      state.progress[progressKey(challenge.id)] = defaultProgress(challenge);
      storage.saveState(state);
      renderStudio();
      renderChallenges();
    });

    els.backFromExamBtn.addEventListener("click", () => {
      state.selectedCategory = examById(state.selectedExamId).category;
      storage.saveState(state);
      showView("challenges");
    });

    els.saveExamAnswerBtn.addEventListener("click", () => {
      const item = examById(state.selectedExamId);
      const selected = document.querySelector("input[name='examOption']:checked");
      const blank = $("examBlankAnswer");
      state.examAnswers[item.id] = {
        ...(state.examAnswers[item.id] || {}),
        choice: selected ? selected.value : (state.examAnswers[item.id] || {}).choice || "",
        blank: blank ? blank.value : (state.examAnswers[item.id] || {}).blank || "",
        reason: els.examReason.value.trim(),
        savedAt: new Date().toISOString()
      };
      storage.saveState(state);
      setSaveStatus(lang() === "zh" ? "答案已保存" : "Response saved");
      renderChallenges();
    });
  }

  function cacheElements() {
    [
      "challengeGrid",
      "currentChallengeSummary",
      "saveStatus",
      "problemText",
      "successText",
      "inputText",
      "outputText",
      "constraintsText",
      "languageSelect",
      "promptOutput",
      "codeEditor",
      "diagnosisNotes",
      "reflectionQuestions",
      "debugGuide",
      "testResults",
      "generatePromptBtn",
      "copyPromptBtn",
      "addRuleBtn",
      "addStepBtn",
      "newRuleInput",
      "newStepInput",
      "loadSampleCodeBtn",
      "runTestsBtn",
      "savePortfolioBtn",
      "resetCurrentBtn",
      "backToChallengesBtn",
      "portfolioList",
      "learningDashboard",
      "categoryTabs",
      "categorySummary",
      "backFromExamBtn",
      "backFromExamText",
      "examSource",
      "examQuestionTitle",
      "examMeta",
      "examNotice",
      "examPrompt",
      "examOptions",
      "examKeywords",
      "examOperationList",
      "examAnswerArea",
      "examReason",
      "examKeywordTitle",
      "examKeywordBody",
      "examAnswerTitle",
      "examAnswerBody",
      "examReasonLabel",
      "saveExamAnswerBtn",
      "studioVisualizer",
      "examVisualizer",
      "languageToggle",
      "researchItems"
    ].forEach((id) => {
      els[id] = $(id);
    });
  }

  function init() {
    cacheElements();
    applyStaticCopy();
    renderChallenges();
    renderStudio();
    bindEvents();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
