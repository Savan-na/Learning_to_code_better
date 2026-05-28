(function () {
  const COLORS = {
    bg: "#f8fbf7",
    grid: "rgba(18, 109, 101, 0.095)",
    cyan: "#126d65",
    cyanSoft: "rgba(18, 109, 101, 0.18)",
    magenta: "#4f8f7c",
    magentaSoft: "rgba(79, 143, 124, 0.2)",
    gold: "#1f493f",
    white: "#ffffff",
    muted: "#64756f",
    panel: "#ffffff"
  };

  const TEMPLATE_BY_CATEGORY = {
    variables: "scalarField",
    functions: "callOrbit",
    loops: "numberLine",
    collections: "gridSweep",
    oop: "objectOrbit"
  };

  function makeFrames(category, item, lang) {
    const itemId = item && item.id ? item.id : `${category}-practice`;
    const seed = hash(itemId);
    return {
      kind: "canvas-sandbox",
      category,
      itemId,
      seed,
      lang,
      template: TEMPLATE_BY_CATEGORY[category] || "scalarField",
      variant: seed % 7
    };
  }

  function render(container, config) {
    if (!container || !config) return;
    if (container.__canvasSandbox) container.__canvasSandbox.destroy();
    container.__canvasSandbox = new CanvasSandbox(container, config);
  }

  class CanvasSandbox {
    constructor(container, config) {
      this.container = container;
      this.config = config;
      this.ctx = null;
      this.canvas = null;
      this.program = [];
      this.index = 0;
      this.model = null;
      this.axis = { min: 0, max: 6 };
      this.isAnimating = false;
      this.isAutoRunning = false;
      this.hasStarted = false;
      this.frameId = 0;
      this.resizeObserver = null;
      this.currentCode = "for k in range(limit):";
      this.fx = {};
      this.draw = this.draw.bind(this);
      this.mount();
      this.reset();
    }

    mount() {
      this.container.innerHTML = `
        <div class="canvasviz-shell">
          <div class="canvasviz-canvas-wrap">
            <canvas class="canvasviz-canvas" aria-label="Interactive execution canvas"></canvas>
          </div>
          <div class="canvasviz-code" aria-live="polite"><code></code></div>
          <aside class="canvasviz-panel">
            <div class="canvasviz-fields">
              <label>
                <span>range_limit</span>
                <input class="canvasviz-range" type="number" step="1" value="3" min="0" max="12" />
              </label>
              <label>
                <span>initial_x</span>
                <input class="canvasviz-initial" type="number" step="1" value="0" min="-20" max="20" />
              </label>
            </div>
            <div class="canvasviz-stats">
              <div><span>k</span><strong data-stat="k">-</strong></div>
              <div><span>x</span><strong data-stat="x">0</strong></div>
            </div>
            <div class="canvasviz-buttons">
              <button type="button" data-action="step">Step Execute</button>
              <button type="button" data-action="auto">Auto Run</button>
              <button type="button" data-action="reset">Reset</button>
            </div>
          </aside>
        </div>
      `;

      this.canvas = this.container.querySelector(".canvasviz-canvas");
      this.ctx = this.canvas.getContext("2d");
      this.codeEl = this.container.querySelector(".canvasviz-code code");
      this.rangeInput = this.container.querySelector(".canvasviz-range");
      this.initialInput = this.container.querySelector(".canvasviz-initial");
      this.kStat = this.container.querySelector('[data-stat="k"]');
      this.xStat = this.container.querySelector('[data-stat="x"]');
      this.stepButton = this.container.querySelector('[data-action="step"]');
      this.autoButton = this.container.querySelector('[data-action="auto"]');
      this.resetButton = this.container.querySelector('[data-action="reset"]');

      this.stepButton.addEventListener("click", () => this.step());
      this.autoButton.addEventListener("click", () => this.autoRun());
      this.resetButton.addEventListener("click", () => this.reset());

      this.resizeObserver = new ResizeObserver(() => {
        this.resizeCanvas();
        this.draw();
      });
      this.resizeObserver.observe(this.canvas.parentElement);
      this.resizeCanvas();
      this.frameId = requestAnimationFrame(this.draw);
    }

    destroy() {
      cancelAnimationFrame(this.frameId);
      if (this.resizeObserver) this.resizeObserver.disconnect();
    }

    readParams() {
      return {
        rangeLimit: clampInt(this.rangeInput.value, 0, 12, 3),
        initialX: clampInt(this.initialInput.value, -20, 20, 0)
      };
    }

    reset() {
      const params = this.readParams();
      this.params = params;
      this.program = buildProgram(this.config.template, params);
      this.index = 0;
      this.hasStarted = false;
      this.isAnimating = false;
      this.isAutoRunning = false;
      this.axis = computeAxis(params, this.config.template);
      this.model = {
        k: null,
        x: params.initialX,
        displayK: 0,
        displayX: params.initialX,
        progress: 0,
        variant: this.config.variant
      };
      this.fx = {};
      this.currentCode = this.program[0] ? this.program[0].line : "for k in range(limit):";
      this.setInputsDisabled(false);
      this.setControlsDisabled(false);
      this.updateReadout();
      this.draw();
    }

    setInputsDisabled(disabled) {
      this.rangeInput.disabled = disabled;
      this.initialInput.disabled = disabled;
    }

    setControlsDisabled(disabled) {
      this.stepButton.disabled = disabled || this.isAutoRunning || this.index >= this.program.length;
      this.autoButton.disabled = disabled || this.isAutoRunning || this.index >= this.program.length;
    }

    updateReadout(xOverride) {
      this.kStat.textContent = this.model.k === null || this.model.k === undefined ? "-" : String(this.model.k);
      this.xStat.textContent = xOverride === undefined ? String(this.model.x) : String(xOverride);
      this.codeEl.textContent = this.currentCode;
    }

    async step() {
      if (this.isAnimating || this.index >= this.program.length) return;
      this.hasStarted = true;
      this.setInputsDisabled(true);
      this.setControlsDisabled(true);
      this.isAnimating = true;

      const statement = this.program[this.index];
      this.currentCode = statement.line;
      await this.execute(statement);
      this.index += 1;

      this.isAnimating = false;
      if (this.index >= this.program.length) this.setInputsDisabled(false);
      this.setControlsDisabled(false);
      this.updateReadout();
    }

    async autoRun() {
      if (this.isAnimating || this.isAutoRunning || this.index >= this.program.length) return;
      this.isAutoRunning = true;
      this.setInputsDisabled(true);
      this.setControlsDisabled(true);
      while (this.index < this.program.length && this.isAutoRunning) {
        await this.step();
        await wait(120);
      }
      this.isAutoRunning = false;
      this.setInputsDisabled(false);
      this.setControlsDisabled(false);
    }

    execute(statement) {
      if (statement.type === "loop") {
        const start = this.model.displayK;
        this.model.k = statement.k;
        this.updateReadout();
        return this.animate(460, (t) => {
          this.model.displayK = lerp(start, statement.k, easeInOut(t));
        });
      }

      if (statement.type === "assign") {
        this.model.k = statement.k;
        this.model.x = statement.x;
        this.updateReadout();
        return this.animate(340, (t) => {
          this.model.displayK = lerp(this.model.displayK, statement.k, easeInOut(t));
          this.model.displayX = statement.x;
          this.fx.collapse = 1 - Math.abs(t * 2 - 1);
        }, () => {
          this.fx.collapse = 0;
        });
      }

      if (statement.type === "add") {
        const start = this.model.x;
        const end = statement.x;
        const k = this.model.k || 0;
        this.fx.arc = { from: start, to: end, k, t: 0, ripple: 0 };
        return this.animate(k > 1 ? 760 : 560, (t) => {
          const e = easeInOut(t);
          this.fx.arc.t = e;
          this.model.displayX = lerp(start, end, e);
          if (t >= 0.98) {
            this.model.x = end;
            this.updateReadout(end);
          }
        }, () => {
          this.model.x = end;
          this.model.displayX = end;
          this.fx.arc = { from: start, to: end, k, t: 1, ripple: 1 };
          this.updateReadout();
          setTimeout(() => {
            this.fx.arc = null;
            this.draw();
          }, 420);
        });
      }

      if (statement.type === "project") {
        const start = this.model.x;
        this.model.k = statement.k;
        this.currentCode = statement.line;
        return this.animate(520, (t) => {
          const e = easeInOut(t);
          this.model.displayK = lerp(this.model.displayK, statement.k, e);
          this.model.displayX = lerp(start, statement.x, e);
          if (t >= 0.98) this.model.x = statement.x;
          this.updateReadout(t >= 0.98 ? statement.x : this.model.x);
        }, () => {
          this.model.x = statement.x;
          this.model.displayX = statement.x;
          this.updateReadout();
        });
      }

      return wait(80);
    }

    animate(duration, onUpdate, onDone) {
      return new Promise((resolve) => {
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          onUpdate(t);
          this.draw();
          if (t < 1) {
            requestAnimationFrame(tick);
          } else {
            if (onDone) onDone();
            this.draw();
            resolve();
          }
        };
        requestAnimationFrame(tick);
      });
    }

    resizeCanvas() {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = Math.max(360, Math.floor(rect.width));
      const height = Math.max(320, Math.floor(rect.height));
      this.canvas.width = Math.floor(width * dpr);
      this.canvas.height = Math.floor(height * dpr);
      this.canvas.style.width = `${width}px`;
      this.canvas.style.height = `${height}px`;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.width = width;
      this.height = height;
    }

    draw() {
      if (!this.ctx || !this.model) return;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);
      drawBackground(ctx, this.width, this.height, this.config.seed);

      if (this.config.template === "numberLine") drawNumberLine(ctx, this);
      if (this.config.template === "scalarField") drawScalarField(ctx, this);
      if (this.config.template === "callOrbit") drawCallOrbit(ctx, this);
      if (this.config.template === "gridSweep") drawGridSweep(ctx, this);
      if (this.config.template === "objectOrbit") drawObjectOrbit(ctx, this);
    }

    valueToX(value) {
      const pad = 56;
      const span = this.axis.max - this.axis.min || 1;
      return pad + ((value - this.axis.min) / span) * (this.width - pad * 2);
    }
  }

  function buildProgram(template, params) {
    if (template === "numberLine") {
      const steps = [];
      for (let k = 0; k < params.rangeLimit; k += 1) {
        steps.push({ line: "for k in range(limit):", type: "loop", k });
        steps.push({ line: "x = k", type: "assign", k, x: k });
        steps.push({ line: "x += k", type: "add", k, x: k + k });
      }
      return steps;
    }

    if (template === "scalarField") {
      return [
        { line: "x = initial_x", type: "project", k: 0, x: params.initialX },
        { line: "k = range_limit", type: "project", k: params.rangeLimit, x: params.initialX },
        { line: "x = x + k", type: "project", k: params.rangeLimit, x: params.initialX + params.rangeLimit }
      ];
    }

    if (template === "callOrbit") {
      return [
        { line: "def step(v):", type: "project", k: 0, x: params.initialX },
        { line: "k = step(x)", type: "project", k: params.rangeLimit, x: params.initialX },
        { line: "x = k", type: "project", k: params.rangeLimit, x: params.rangeLimit }
      ];
    }

    if (template === "gridSweep") {
      const steps = [];
      const limit = Math.max(1, params.rangeLimit);
      for (let k = 0; k < limit; k += 1) {
        steps.push({ line: "for k in range(limit):", type: "loop", k });
        steps.push({ line: "cell = grid[k]", type: "project", k, x: params.initialX + k });
      }
      return steps;
    }

    return [
      { line: "state.x = initial_x", type: "project", k: 0, x: params.initialX },
      { line: "state.step(k)", type: "project", k: params.rangeLimit, x: params.initialX + params.rangeLimit },
      { line: "x = state.x", type: "project", k: params.rangeLimit, x: params.initialX + params.rangeLimit }
    ];
  }

  function computeAxis(params, template) {
    const finalLoop = params.rangeLimit > 0 ? (params.rangeLimit - 1) * 2 : params.initialX;
    const max = Math.max(6, params.rangeLimit * 2, params.initialX + params.rangeLimit, finalLoop);
    const min = Math.min(0, params.initialX);
    if (template === "numberLine") return { min, max };
    return { min: Math.min(min, -1), max: Math.max(max, 6) };
  }

  function drawBackground(ctx, width, height, seed) {
    ctx.fillStyle = COLORS.bg;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.strokeStyle = COLORS.grid;
    ctx.lineWidth = 1;
    const offset = seed % 38;
    for (let x = -offset; x < width; x += 38) line(ctx, x, 0, x, height);
    for (let y = offset; y < height; y += 38) line(ctx, 0, y, width, y);
    ctx.restore();
  }

  function drawNumberLine(ctx, sandbox) {
    const { width, height, model } = sandbox;
    const axisY = height * 0.54;
    drawAxis(ctx, sandbox, axisY);

    const kx = sandbox.valueToX(model.displayK);
    drawKMarker(ctx, kx, axisY + 66, model.k);

    if (sandbox.fx.arc && sandbox.fx.arc.t < 1) {
      const start = sandbox.valueToX(sandbox.fx.arc.from);
      const end = sandbox.valueToX(sandbox.fx.arc.to);
      const mid = (start + end) / 2;
      const lift = sandbox.fx.arc.k > 1 ? 118 : 78;
      const t = sandbox.fx.arc.t;
      const px = quad(start, mid, end, t);
      const py = quad(axisY - 74, axisY - lift, axisY - 74, t);
      drawArcTrail(ctx, start, axisY - 74, mid, axisY - lift, end, axisY - 74, sandbox.fx.arc.k > 1);
      drawXParticle(ctx, px, py, model.x, sandbox.fx.arc.k > 1 ? COLORS.gold : COLORS.cyan);
      return;
    }

    const x = sandbox.valueToX(model.displayX);
    drawXParticle(ctx, x, axisY - 74, model.x, model.x === 4 ? COLORS.gold : COLORS.cyan, sandbox.fx.collapse || 0);
    if (sandbox.fx.arc && sandbox.fx.arc.ripple) drawRipple(ctx, x, axisY, COLORS.gold);
  }

  function drawScalarField(ctx, sandbox) {
    const { width, height, model } = sandbox;
    const cy = height * 0.52;
    drawAxis(ctx, sandbox, cy);
    const x = sandbox.valueToX(model.displayX);
    const kx = sandbox.valueToX(model.displayK);
    ctx.save();
    glowStroke(ctx, COLORS.magenta, 2, 18);
    ctx.beginPath();
    ctx.moveTo(kx, cy + 92);
    ctx.lineTo(x, cy - 82);
    ctx.stroke();
    ctx.restore();
    drawDiamond(ctx, kx, cy + 92, 18, COLORS.magenta);
    drawXParticle(ctx, x, cy - 82, model.x, COLORS.cyan);
    drawLens(ctx, (kx + x) / 2, cy, sandbox.config.variant);
  }

  function drawCallOrbit(ctx, sandbox) {
    const { width, height, model } = sandbox;
    const cx = width * 0.52;
    const cy = height * 0.52;
    const rings = 3 + (sandbox.config.variant % 2);
    for (let i = rings; i >= 1; i -= 1) {
      ctx.save();
      glowStroke(ctx, i % 2 ? COLORS.cyan : COLORS.magenta, 1.5, 10);
      ctx.globalAlpha = 0.22 + i * 0.08;
      circle(ctx, cx, cy, 34 + i * 34);
      ctx.restore();
    }
    const angle = -Math.PI / 2 + (model.displayK + 1) * 0.72;
    const radius = 92;
    drawKMarker(ctx, cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius, model.k);
    drawXParticle(ctx, cx, cy, model.x, COLORS.cyan);
  }

  function drawGridSweep(ctx, sandbox) {
    const { width, height, model, params } = sandbox;
    const cols = Math.max(3, Math.min(6, params.rangeLimit || 3));
    const size = Math.min(64, (width - 120) / cols);
    const startX = (width - cols * size) / 2;
    const y = height * 0.46;
    for (let i = 0; i < cols; i += 1) {
      const x = startX + i * size;
      ctx.save();
      ctx.fillStyle = i === model.k ? COLORS.cyanSoft : "rgba(18, 109, 101, 0.055)";
      ctx.strokeStyle = i === model.k ? COLORS.cyan : "rgba(18, 109, 101, 0.22)";
      ctx.lineWidth = 1.5;
      roundRect(ctx, x, y, size - 8, size - 8, 10);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = COLORS.white;
      ctx.font = "700 14px JetBrains Mono, monospace";
      ctx.textAlign = "center";
      ctx.fillText(String(i), x + size / 2 - 4, y + size / 2);
      ctx.restore();
    }
    const cellX = startX + (Math.max(0, model.displayK) % cols) * size + size / 2 - 4;
    drawKMarker(ctx, cellX, y + size + 42, model.k);
    drawXParticle(ctx, sandbox.valueToX(model.displayX), height * 0.25, model.x, COLORS.magenta);
  }

  function drawObjectOrbit(ctx, sandbox) {
    const { width, height, model } = sandbox;
    const cx = width * 0.5;
    const cy = height * 0.53;
    ctx.save();
    ctx.fillStyle = "rgba(18, 109, 101, 0.08)";
    ctx.strokeStyle = COLORS.cyan;
    ctx.shadowColor = COLORS.cyan;
    ctx.shadowBlur = 24;
    roundRect(ctx, cx - 110, cy - 78, 220, 156, 26);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    drawXParticle(ctx, cx, cy, model.x, COLORS.cyan);
    const angle = model.displayK * 0.55 + sandbox.config.variant;
    drawDiamond(ctx, cx + Math.cos(angle) * 142, cy + Math.sin(angle) * 104, 20, COLORS.magenta);
  }

  function drawAxis(ctx, sandbox, y) {
    const start = sandbox.valueToX(sandbox.axis.min);
    const end = sandbox.valueToX(sandbox.axis.max);
    ctx.save();
    glowStroke(ctx, COLORS.cyan, 2, 18);
    line(ctx, start, y, end, y);
    const tickStep = chooseTickStep(sandbox.axis.min, sandbox.axis.max);
    ctx.fillStyle = COLORS.muted;
    ctx.font = "700 12px JetBrains Mono, monospace";
    ctx.textAlign = "center";
    for (let value = Math.ceil(sandbox.axis.min / tickStep) * tickStep; value <= sandbox.axis.max; value += tickStep) {
      const x = sandbox.valueToX(value);
      line(ctx, x, y - 12, x, y + 12);
      ctx.fillText(String(value), x, y + 34);
    }
    ctx.restore();
  }

  function drawXParticle(ctx, x, y, value, color, collapse = 0) {
    const r = 18 + collapse * 8;
    ctx.save();
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 28 + collapse * 16;
    circle(ctx, x, y, r, true);
    ctx.fillStyle = color === COLORS.gold ? "#ffffff" : COLORS.bg;
    ctx.font = "900 14px JetBrains Mono, monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(value), x, y);
    ctx.restore();
  }

  function drawKMarker(ctx, x, y, value) {
    drawDiamond(ctx, x, y, 17, COLORS.magenta);
    ctx.save();
    ctx.fillStyle = COLORS.white;
    ctx.font = "900 12px JetBrains Mono, monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(value === null || value === undefined ? "k" : String(value), x, y);
    ctx.restore();
  }

  function drawDiamond(ctx, x, y, r, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.moveTo(x, y - r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x, y + r);
    ctx.lineTo(x - r, y);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawArcTrail(ctx, x1, y1, cx, cy, x2, y2, isFinal) {
    ctx.save();
    glowStroke(ctx, isFinal ? COLORS.gold : COLORS.magenta, isFinal ? 3 : 2, isFinal ? 24 : 16);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(cx, cy, x2, y2);
    ctx.stroke();
    ctx.restore();
  }

  function drawRipple(ctx, x, y, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 22;
    ctx.globalAlpha = 0.6;
    circle(ctx, x, y, 32);
    circle(ctx, x, y, 54);
    ctx.restore();
  }

  function drawLens(ctx, x, y, variant) {
    ctx.save();
    ctx.strokeStyle = variant % 2 ? COLORS.gold : COLORS.cyan;
    ctx.shadowColor = ctx.strokeStyle;
    ctx.shadowBlur = 18;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(x, y, 34, 70, 0.22, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function glowStroke(ctx, color, width, blur) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.shadowColor = color;
    ctx.shadowBlur = blur;
    ctx.lineCap = "round";
  }

  function circle(ctx, x, y, r, fill = false) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    if (fill) ctx.fill();
    else ctx.stroke();
  }

  function line(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function chooseTickStep(min, max) {
    const span = Math.max(1, max - min);
    if (span <= 8) return 1;
    if (span <= 16) return 2;
    return 4;
  }

  function clampInt(value, min, max, fallback) {
    const parsed = Number.parseInt(value, 10);
    if (Number.isNaN(parsed)) return fallback;
    return Math.max(min, Math.min(max, parsed));
  }

  function hash(value) {
    return String(value).split("").reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0) >>> 0;
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function quad(a, b, c, t) {
    return (1 - t) * (1 - t) * a + 2 * (1 - t) * t * b + t * t * c;
  }

  function easeInOut(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  window.MVP_VISUALIZER = {
    makeFrames,
    render
  };
})();
