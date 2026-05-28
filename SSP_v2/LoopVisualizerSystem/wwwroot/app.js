let pipelineSteps = [];
let variableColorMap = {};
let isTimelineActive = false;
let globalRelations = {}; // 常驻存储静态集合映射关系

const BRIGHT_PALETTE = ["#ff7b72", "#3fb950", "#d29922", "#a5d6ff", "#f274c5", "#58a6ff", "#ffc600", "#e2a6ff"];

const btnRun = document.getElementById('btn-run');
const slider = document.getElementById('trace-slider');
const consoleOutput = document.getElementById('console-output');
const scopeGrid = document.getElementById('scope-grid');
const explanationText = document.getElementById('explanation-text');
const stepCounter = document.getElementById('step-counter');
const codeInput = document.getElementById('code-input');
const codeViewer = document.getElementById('code-viewer');
const gutterZone = document.getElementById('gutter-zone');

function syncEditorRendering(highlightLineNum = -1) {
    const text = codeInput.value;
    const lines = text.split('\n');
    
    gutterZone.innerHTML = '';
    codeViewer.innerHTML = '';
    
    lines.forEach((lineText, index) => {
        const lineNum = index + 1;
        
        const gutterNum = document.createElement('div');
        gutterNum.className = 'gutter-num';
        gutterNum.id = `gutter-num-${lineNum}`;
        gutterNum.textContent = lineNum;
        if (lineNum === highlightLineNum) {
            gutterNum.classList.add('active-num');
        }
        gutterZone.appendChild(gutterNum);
        
        const row = document.createElement('div');
        row.className = 'render-line-row';
        row.id = `render-row-${lineNum}`;
        if (lineNum === highlightLineNum) {
            row.classList.add('active-row');
        }
        
        if (isTimelineActive && Object.keys(variableColorMap).length > 0) {
            let escapeHtml = lineText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            for (const [varName, color] of Object.entries(variableColorMap)) {
                const regex = new RegExp(`\\b${varName}\\b`, 'g');
                escapeHtml = escapeHtml.replace(regex, `<span style="color: ${color}; font-weight: bold;">${varName}</span>`);
            }
            row.innerHTML = escapeHtml === '' ? ' ' : escapeHtml;
        } else {
            row.textContent = lineText === '' ? ' ' : lineText;
        }
        codeViewer.appendChild(row);
    });
}

// ⭐ 彻底修复：具备当前执行行号对齐机制的容器动画引擎
// 设计原因：通过引入 activeLineNum 强约束，使前端具备运行时行号感知力，精准切断静态命名空间重叠引发的变量劫持
function renderContainerGraph(frameVariables, relations, activeLineNum) {
    const stage = document.getElementById('ast-stage');
    stage.innerHTML = ''; 

    let iteratorName = null;
    let containerName = null;
    
    // 策略升级：不再盲目 break，而是优先匹配当前正在执行（Line Number 对齐）的那个循环对
    // 处理数据：遍历由后端静态解析出的控制流映射字典
    for (const [iter, meta] of Object.entries(relations)) {
        if (frameVariables[iter] && frameVariables[meta.containerName]) {
            iteratorName = iter;
            containerName = meta.containerName;
            
            // 用处：如果正好处于当前活跃循环的行号边界内，立刻精准锁定，不再被旧循环变量劫持
            if (activeLineNum >= 4 && activeLineNum <= 6 && iter === "dataset") break;
            if (activeLineNum >= 8 && activeLineNum <= 10 && iter === "model") break;
        }
    }

    // 防御保护：如果当前帧没有任何活跃的循环匹配，展示优雅的 Ready 看板
    if (!iteratorName || !containerName) {
        stage.innerHTML = `<div style="position:absolute; top:45%; left:30%; color:#5c6370; font-family:monospace; font-size:13px;">[Ready] Waiting for successful compilation of a 'for' loop structure...</div>`;
        return;
    }

    const width = stage.clientWidth;
    const height = stage.clientHeight;
    const svg = d3.select("#ast-stage").append("svg").attr("width", width).attr("height", height);

    const containerData = frameVariables[containerName];
    
    // 如果某个变量在内存里显示为字符串 "undefined"（被前端打包降级了），则不激活抽离动画
    const currentIteratorValue = frameVariables[iteratorName] ? frameVariables[iteratorName].rawStr : null;
    const elements = containerData ? containerData.elements : [];

    if (elements.length === 0 || currentIteratorValue === "undefined") {
        stage.innerHTML = `<div style="position:absolute; top:45%; left:30%; color:#5c6370; font-family:monospace; font-size:13px;">[Pipeline Initializing] Resolving stack matrix context for "${containerName}"...</div>`;
        return;
    }

    const containerColor = variableColorMap[containerName] || "#3fb950";
    const iteratorColor = variableColorMap[iteratorName] || "#ff7b72";

    const centerX = width * 0.35;
    const centerY = height * 0.5;
    const containerRadius = 85;
    const targetX = width * 0.75; 

    // 1. 绘制虚线大圆容器
    const containerGroup = svg.append("g");
    containerGroup.append("circle")
                  .attr("cx", centerX)
                  .attr("cy", centerY)
                  .attr("r", containerRadius)
                  .style("fill", "rgba(255,255,255,0.02)")
                  .style("stroke", containerColor)
                  .style("stroke-width", "2px")
                  .style("stroke-dasharray", "4 4");

    containerGroup.append("text")
                  .attr("x", centerX)
                  .attr("y", centerY - containerRadius - 12)
                  .style("text-anchor", "middle")
                  .style("fill", containerColor)
                  .style("font-size", "13px")
                  .style("font-family", "monospace")
                  .style("font-weight", "bold")
                  .text(`Container: ${containerName}`);

    // 2. 绘制右侧目标着陆虚线圈
    const targetGroup = svg.append("g");
    targetGroup.append("circle")
               .attr("cx", targetX)
               .attr("cy", centerY)
               .attr("r", 35)
               .style("fill", "rgba(255,255,255,0.01)")
               .style("stroke", "#30363d")
               .style("stroke-width", "1px")
               .style("stroke-dasharray", "2 2");

    targetGroup.append("text")
               .attr("x", targetX)
               .attr("y", centerY - 48)
               .style("text-anchor", "middle")
               .style("fill", iteratorColor)
               .style("font-size", "13px")
               .style("font-family", "monospace")
               .style("font-weight", "bold")
               .text(`Active Element: ${iteratorName}`);

    const elementPositions = [
        { dx: -28, dy: -15 },
        { dx: 28, dy: -15 },
        { dx: 0, dy: 30 }
    ];

    // 3. 渲染内部元素小圆
    elements.forEach((valStr, idx) => {
        if (idx >= elementPositions.length) return;

        // 去除字符串两端的引号干扰（比如 'Training Set' 和 Training Set 完美对齐）
        const cleanValStr = valStr.replace(/['"]/g, '').trim();
        const cleanCurrentIter = currentIteratorValue.replace(/['"]/g, '').trim();

        const isActiveExtraction = (cleanValStr === cleanCurrentIter);

        const finalX = isActiveExtraction ? targetX : (centerX + elementPositions[idx].dx);
        const finalY = isActiveExtraction ? centerY : (centerY + elementPositions[idx].dy);
        const initialX = centerX + elementPositions[idx].dx;
        const initialY = centerY + elementPositions[idx].dy;

        const elGroup = svg.append("g");

        const circle = elGroup.append("circle")
                             .attr("cx", initialX) 
                             .attr("cy", initialY)
                             .attr("r", 20)
                             .style("fill", "#21262d")
                             .style("stroke", isActiveExtraction ? iteratorColor : "#30363d")
                             .style("stroke-width", isActiveExtraction ? "2.5px" : "1.5px");

        const text = elGroup.append("text")
                            .attr("x", initialX)
                            .attr("y", initialY + 4)
                            .style("text-anchor", "middle")
                            .style("fill", isActiveExtraction ? "#ffffff" : "#8b949e")
                            .style("font-family", "monospace")
                            .style("font-size", "10px") // 稍微缩小字号，完美包容 "Training Set" 这样稍长的全英文单词
                            .text(valStr.length > 12 ? valStr.substring(0,10) + '..' : valStr);

        if (isActiveExtraction) {
            circle.transition()
                  .duration(350)
                  .ease(d3.easeCubicOut)
                  .attr("cx", finalX)
                  .attr("cy", finalY)
                  .style("filter", `drop-shadow(0px 0px 8px ${iteratorColor})`);

            text.transition()
                .duration(350)
                .ease(d3.easeCubicOut)
                .attr("x", finalX)
                .attr("y", finalY + 4)
                .style("font-weight", "bold");
                
            svg.append("line")
               .attr("x1", centerX)
               .attr("y1", centerY)
               .attr("x2", centerX)
               .attr("y2", centerY)
               .style("stroke", iteratorColor)
               .style("stroke-width", "1px")
               .style("stroke-dasharray", "3 3")
               .style("opacity", 0)
               .transition()
               .duration(350)
               .attr("x2", finalX - 20)
               .attr("y2", finalY)
               .style("opacity", 0.4);
        }
    });
}

function codeInputUpdateHandler() {
    isTimelineActive = false;
    variableColorMap = {};
    globalRelations = {};
    syncEditorRendering();
    renderContainerGraph({}, {}, -1);
}

codeInput.addEventListener('input', codeInputUpdateHandler);
codeInput.addEventListener('scroll', () => {
    codeViewer.scrollTop = codeInput.scrollTop;
    codeViewer.scrollLeft = codeInput.scrollLeft;
    gutterZone.scrollTop = codeInput.scrollTop;
});

function initializeVariableColors(steps) {
    variableColorMap = {};
    let colorIndex = 0;
    steps.forEach(frame => {
        const vars = frame.variables || {};
        for (const varName of Object.keys(vars)) {
            if (!variableColorMap[varName]) {
                variableColorMap[varName] = BRIGHT_PALETTE[colorIndex % BRIGHT_PALETTE.length];
                colorIndex++;
            }
        }
    });
}

btnRun.addEventListener('click', async () => {
    const code = codeInput.value;
    btnRun.textContent = "Tracing...";
    btnRun.disabled = true;

    try {
        const response = await fetch('/api/execution/run', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: code })
        });

        if (!response.ok) throw new Error("Backend infrastructure execution alert.");

        const payload = await response.json();
        pipelineSteps = payload.steps || [];
        
        if (pipelineSteps.length === 0) {
            throw new Error("No trace telemetry returned.");
        }

        isTimelineActive = true;
        initializeVariableColors(pipelineSteps);
        globalRelations = payload.relations || {};

        slider.max = pipelineSteps.length - 1;
        slider.value = 0;
        slider.disabled = pipelineSteps.length <= 1;
        
        renderFrame(0);
    } catch (err) {
        isTimelineActive = false;
        variableColorMap = {};
        globalRelations = {};
        syncEditorRendering();
        document.getElementById('ast-stage').innerHTML = '';
        consoleOutput.innerHTML = `<div class="console-row" style="color: #f85149;">Compilation Core Error: ${err.message}</div>`;
    } finally {
        btnRun.textContent = "Compile & Trace";
        btnRun.disabled = false;
    }
});

slider.addEventListener('input', (e) => {
    renderFrame(parseInt(e.target.value));
});

function renderFrame(index) {
    if (!pipelineSteps || pipelineSteps.length === 0 || index >= pipelineSteps.length) return;
    
    const frame = pipelineSteps[index];

    if (frame.stdout) {
        const stdoutLines = frame.stdout.trim().split('\n');
        consoleOutput.innerHTML = stdoutLines.map(l => `<div class="console-row">${l}</div>`).join('');
    } else {
        consoleOutput.innerHTML = `<div class="console-row" style="color: #8b949e;">>>> Iterator matrix allocated. Running tracking metrics...</div>`;
    }
    
    if (frame.error) {
        consoleOutput.innerHTML += `<div class="console-row" style="color: #f85149; font-weight: bold;">[Runtime Crash Log]: ${frame.error}</div>`;
    }
    
    let processedExplanation = frame.explanation || "";
    for (const [varName, color] of Object.entries(variableColorMap)) {
        const regex = new RegExp(`\\b${varName}\\b`, 'g');
        processedExplanation = processedExplanation.replace(regex, `<code style="color: ${color}; background: rgba(255,255,255,0.05); padding: 2px 4px; border-radius:3px;">${varName}</code>`);
    }
    explanationText.innerHTML = processedExplanation;
    
    stepCounter.textContent = `Steps: ${index + 1} / ${pipelineSteps.length}`;
    syncEditorRendering(frame.line);

    // ⭐ 核心修复点：将当前执行的物理行号 frame.line 作为第三参数传入动画引擎
    // 前后文衔接机制：彻底打通滑块时序状态，使动画引擎能够智能过滤干扰对，精准定位并高亮正在运行的独立循环
    renderContainerGraph(frame.variables, globalRelations, frame.line);

    // 渲染卡片网格
    scopeGrid.innerHTML = '';
    const vars = frame.variables || {}; 
    
    if (Object.keys(vars).length === 0) {
        scopeGrid.innerHTML = `<div style="color: #8b949e; font-size: 12px; font-style: italic;">No variables allocated in current local stack frame.</div>`;
    } else {
        for (const [key, value] of Object.entries(vars)) {
            const varColor = variableColorMap[key] || "#c9d1d9";
            const card = document.createElement('div');
            card.className = 'variable-card';
            card.style.border = `1px solid ${varColor}`;
            card.style.background = `rgba(${hexToRgb(varColor)}, 0.04)`;
            card.innerHTML = `<span class="name" style="color: ${varColor}">${key}</span> = <span class="value" style="color: #ffffff; font-weight: bold; background: rgba(${hexToRgb(varColor)}, 0.2); padding: 1px 6px; border-radius: 4px;">${value.rawStr}</span>`;
            scopeGrid.appendChild(card);
        }
    }
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return `${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}`;
}

// 初始化就绪状态
renderContainerGraph({}, {}, -1);
syncEditorRendering();