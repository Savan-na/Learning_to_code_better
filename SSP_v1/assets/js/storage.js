(function () {
  const STORAGE_KEY = "ai-problem-solving-mvp:v1";

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { selectedId: null, selectedExamId: null, progress: {}, portfolio: [], examAnswers: {}, lang: "zh" };
      const parsed = JSON.parse(raw);
      return {
        selectedId: parsed.selectedId || null,
        selectedExamId: parsed.selectedExamId || null,
        progress: parsed.progress || {},
        portfolio: parsed.portfolio || [],
        examAnswers: parsed.examAnswers || {},
        lang: parsed.lang || "zh"
      };
    } catch (error) {
      console.warn("无法读取本地进度，已使用空状态。", error);
      return { selectedId: null, selectedExamId: null, progress: {}, portfolio: [], examAnswers: {}, lang: "zh" };
    }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function clearChallenge(state, challengeId) {
    delete state.progress[challengeId];
    state.portfolio = state.portfolio.filter((item) => item.challengeId !== challengeId);
    saveState(state);
  }

  window.MVP_STORAGE = {
    loadState,
    saveState,
    clearChallenge
  };
})();
