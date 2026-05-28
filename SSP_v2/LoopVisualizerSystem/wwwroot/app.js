let pipelineSteps = [];

const btnRun = document.getElementById('btn-run');
const slider = document.getElementById('trace-slider');
const consoleOutput = document.getElementById('console-output');
const scopeGrid = document.getElementById('scope-grid');
const explanationText = document.getElementById('explanation-text');
const stepCounter = document.getElementById('step-counter');

btnRun.addEventListener('click', async () => {
    const code = document.getElementById('code-input').value;
    
    btnRun.textContent = "Tracing...";
    btnRun.disabled = true;

    try {
        const response = await fetch('/api/execution/run', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: code })
        });

        if (!response.ok) throw new Error("Backend infrastructure execution alert.");

        pipelineSteps = await response.json();
        
        // 重新初始化时间轴状态
        slider.max = pipelineSteps.length - 1;
        slider.value = 0;
        slider.disabled = pipelineSteps.length <= 1;
        
        renderFrame(0);
    } catch (err) {
        consoleOutput.innerHTML = `<span style="color: #f85149;">Compilation Core Error: ${err.message}</span>`;
    } finally {
        btnRun.textContent = "Compile & Trace";
        btnRun.disabled = false;
    }
});

slider.addEventListener('input', (e) => {
    renderFrame(parseInt(e.target.value));
});

function renderFrame(index) {
    if (!pipelineSteps || pipelineSteps.length === 0) return;
    
    const frame = pipelineSteps[index];

    // 1. 渲染控制台当前的标准输出
    consoleOutput.innerHTML = frame.Stdout ? frame.Stdout : `>>> Iterator matrix allocated. Running tracking metrics...`;
    
    // 2. 渲染当前步骤对应的确定性自然语言解说
    explanationText.innerHTML = frame.Explanation;
    
    // 3. 步数指示器更新
    stepCounter.textContent = `Steps: ${index + 1} / ${pipelineSteps.length}`;

    // 4. 动态渲染作用域内存卡片网格
    scopeGrid.innerHTML = '';
    const vars = frame.Variables;
    
    if (Object.keys(vars).length === 0) {
        scopeGrid.innerHTML = `<div style="color: #8b949e; font-size: 12px; font-style: italic;">No variables allocated in current local stack frame.</div>`;
    } else {
        for (const [key, value] of Object.entries(vars)) {
            const card = document.createElement('div');
            card.className = 'variable-card';
            card.innerHTML = `<span class="name">${key}</span> = <span class="value">${value}</span>`;
            scopeGrid.appendChild(card);
        }
    }
}