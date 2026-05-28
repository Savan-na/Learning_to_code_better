(function () {
  function runUserCode(code, input, timeoutMs) {
    return new Promise((resolve) => {
      const workerSource = `
        self.onmessage = async function(event) {
          const code = event.data.code;
          const input = event.data.input;
          try {
            const runner = new Function(code + "\\n; return solve(arguments[0]);");
            const result = await runner(input);
            self.postMessage({ ok: true, result });
          } catch (error) {
            self.postMessage({ ok: false, error: error && error.message ? error.message : String(error) });
          }
        };
      `;

      const blob = new Blob([workerSource], { type: "application/javascript" });
      const workerUrl = URL.createObjectURL(blob);
      const worker = new Worker(workerUrl);
      let settled = false;

      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
        resolve({ ok: false, error: "代码运行超时，请检查是否出现无限循环。" });
      }, timeoutMs || 1800);

      worker.onmessage = (event) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
        resolve(event.data);
      };

      worker.onerror = (event) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
        resolve({ ok: false, error: event.message || "代码运行失败。" });
      };

      worker.postMessage({ code, input });
    });
  }

  window.MVP_CODE_RUNNER = {
    runUserCode
  };
})();
