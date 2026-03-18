/* ==========================================
   1. UNIVERSAL MERAJ KEYBOARD SYSTEM (MERAJ.CSS INTEGRATED)
   ========================================== */

window.initMerajKeyboard = function() {
    if (document.getElementById('globalMerajKeyboard')) return;

    let kbDiv = document.createElement('div');
    kbDiv.id = 'globalMerajKeyboard';
    kbDiv.innerHTML = `
        <style>
            /* 🏆 Container */
            .gkb-container { 
                display: none; position: fixed; bottom: 0; left: 0; width: 100%; 
                background: var(--bg-main); padding: 10px 5px 12px 5px; 
                z-index: 10000; box-sizing: border-box; box-shadow: 0 -10px 30px rgba(0,0,0,0.1); 
                animation: slideUpPro 0.25s cubic-bezier(0.1, 0.9, 0.2, 1); 
                border-radius: var(--br-xl) var(--br-xl) 0 0; 
                border-top: 1px solid var(--border-color);
            }
            @keyframes slideUpPro { from { transform: translateY(100%); } to { transform: translateY(0); } }
            
            /* Slim Rows & Gaps */
            .gkb-row { display: flex; justify-content: center; gap: 5px; margin-bottom: 6px; }
            
            /* 🔠 Alpha Keys */
            .gkb-key { 
                flex: 1; height: 42px; background: var(--bg-sec); border: none; 
                border-radius: var(--br-sm); font-size: 1.15rem; font-weight: 500; 
                color: var(--text-main); display: flex; justify-content: center; align-items: center; 
                cursor: pointer; transition: all 0.1s ease; text-transform: lowercase; 
            }
            .gkb-key:active { background: var(--border-color); transform: scale(0.92); }
            .gkb-key.action { background: var(--border-color); font-size: 1rem; }
            .gkb-key.space { flex: 4.5; font-size: 1rem; color: var(--text-muted); }
            .gkb-key.uppercase { text-transform: uppercase; }
            
            /* 🔢 Number Keys */
            .gnum-key { 
                height: 42px; display: flex; justify-content: center; align-items: center;
                font-size: 1.3rem; font-weight: 600; background: var(--bg-sec); 
                border: none; border-radius: var(--br-sm); color: var(--text-main); 
                cursor: pointer; transition: all 0.1s ease; 
            }
            .gnum-key:active { background: var(--border-color); transform: scale(0.92); }
            
            .meraj-input-active { 
                border-color: var(--primary) !important; 
                box-shadow: 0 0 0 3px var(--primary-light) !important; 
            }
        </style>

        <div class="gkb-container" id="gkbWrapper">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; padding: 0 5px;">
                <span id="gkbTitle" style="font-weight: 700; color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Number Pad</span>
                <button onclick="closeMerajKeyboard()" class="meraj-btn btn-primary" style="padding:5px 14px; width:auto; font-size:0.85rem; border-radius: var(--br-sm);">
                    Done <i class="fas fa-check" style="margin-left: 4px;"></i>
                </button>
            </div>
            
            <div id="gkbAlphaView">
                <div class="gkb-row">
                    <button class="gkb-key letter-key" onclick="gkbType('q')">q</button><button class="gkb-key letter-key" onclick="gkbType('w')">w</button><button class="gkb-key letter-key" onclick="gkbType('e')">e</button><button class="gkb-key letter-key" onclick="gkbType('r')">r</button><button class="gkb-key letter-key" onclick="gkbType('t')">t</button><button class="gkb-key letter-key" onclick="gkbType('y')">y</button><button class="gkb-key letter-key" onclick="gkbType('u')">u</button><button class="gkb-key letter-key" onclick="gkbType('i')">i</button><button class="gkb-key letter-key" onclick="gkbType('o')">o</button><button class="gkb-key letter-key" onclick="gkbType('p')">p</button>
                </div>
                <div class="gkb-row" style="padding: 0 10px;">
                    <button class="gkb-key letter-key" onclick="gkbType('a')">a</button><button class="gkb-key letter-key" onclick="gkbType('s')">s</button><button class="gkb-key letter-key" onclick="gkbType('d')">d</button><button class="gkb-key letter-key" onclick="gkbType('f')">f</button><button class="gkb-key letter-key" onclick="gkbType('g')">g</button><button class="gkb-key letter-key" onclick="gkbType('h')">h</button><button class="gkb-key letter-key" onclick="gkbType('j')">j</button><button class="gkb-key letter-key" onclick="gkbType('k')">k</button><button class="gkb-key letter-key" onclick="gkbType('l')">l</button>
                </div>
                <div class="gkb-row">
                    <button class="gkb-key action" onclick="gkbToggleCaps()" style="flex:1.5;"><i class="fas fa-arrow-up"></i></button>
                    <button class="gkb-key letter-key" onclick="gkbType('z')">z</button><button class="gkb-key letter-key" onclick="gkbType('x')">x</button><button class="gkb-key letter-key" onclick="gkbType('c')">c</button><button class="gkb-key letter-key" onclick="gkbType('v')">v</button><button class="gkb-key letter-key" onclick="gkbType('b')">b</button><button class="gkb-key letter-key" onclick="gkbType('n')">n</button><button class="gkb-key letter-key" onclick="gkbType('m')">m</button>
                    <button class="gkb-key action" onclick="gkbDelete()" style="flex:1.5;"><i class="fas fa-backspace"></i></button>
                </div>
                <div class="gkb-row" style="margin-bottom: 0;">
                    <button class="gkb-key action" onclick="switchGkbView('num')" style="flex:1.5; font-weight:bold;">?123</button>
                    <button class="gkb-key space" onclick="gkbType(' ')">space</button>
                    <button class="gkb-key action" onclick="gkbType('.')" style="flex:1; font-weight:bold;">.</button>
                    <button class="gkb-key action" onclick="closeMerajKeyboard()" style="flex:1.5; background:var(--primary); color:var(--text-inverse);"><i class="fas fa-keyboard"></i></button>
                </div>
            </div>

            <div id="gkbNumView" style="display:none;">
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; padding: 0 2px;">
                    <button class="gnum-key" onclick="gkbType('1')">1</button>
                    <button class="gnum-key" onclick="gkbType('2')">2</button>
                    <button class="gnum-key" onclick="gkbType('3')">3</button>
                    <button class="gnum-key" onclick="gkbDelete()" style="color: var(--primary); background: var(--primary-light);"><i class="fas fa-backspace"></i></button>
                    
                    <button class="gnum-key" onclick="gkbType('4')">4</button>
                    <button class="gnum-key" onclick="gkbType('5')">5</button>
                    <button class="gnum-key" onclick="gkbType('6')">6</button>
                    <button class="gnum-key" onclick="gkbClearInput()" style="color: var(--danger); background: var(--danger-light);">C</button>
                    
                    <button class="gnum-key" onclick="gkbType('7')">7</button>
                    <button class="gnum-key" onclick="gkbType('8')">8</button>
                    <button class="gnum-key" onclick="gkbType('9')">9</button>
                    <button class="gnum-key" onclick="switchGkbView('alpha')" style="background:var(--border-color); font-size:1rem; font-weight:700;">ABC</button>
                    
                    <button class="gnum-key" onclick="gkbType('00')">00</button>
                    <button class="gnum-key" onclick="gkbType('0')">0</button>
                    <button class="gnum-key" onclick="gkbType('.')" style="font-size:1.6rem;">.</button>
                    <button class="gnum-key" onclick="closeMerajKeyboard()" style="background:var(--primary); color:var(--text-inverse);"><i class="fas fa-keyboard"></i></button>
                </div>
            </div>
        </div>`;
    document.body.appendChild(kbDiv);
}

// 🧠 UNIVERSAL KEYBOARD LOGIC
window.gkbActiveInputId = null;
window.gkbIsCaps = false;
window.gkbCurrentType = 'alpha';

window.openMerajKeyboard = function(type, inputId) {
    if(document.getElementById('gkbWrapper')) document.getElementById('gkbWrapper').style.display = 'block';
    if(window.gkbActiveInputId) {
        let oldEl = document.getElementById(window.gkbActiveInputId);
        if(oldEl) oldEl.classList.remove('meraj-input-active');
    }
    window.gkbActiveInputId = inputId;
    let activeEl = document.getElementById(inputId);
    if(activeEl) activeEl.classList.add('meraj-input-active');
    switchGkbView(type);
}

window.closeMerajKeyboard = function() {
    if(document.getElementById('gkbWrapper')) document.getElementById('gkbWrapper').style.display = 'none';
    if(window.gkbActiveInputId) {
        let el = document.getElementById(window.gkbActiveInputId);
        if(el) el.classList.remove('meraj-input-active');
    }
    window.gkbActiveInputId = null;
}

window.switchGkbView = function(type) {
    window.gkbCurrentType = type;
    if(type === 'alpha') {
        document.getElementById('gkbAlphaView').style.display = 'block';
        document.getElementById('gkbNumView').style.display = 'none';
        document.getElementById('gkbTitle').innerText = "Alphabet Board";
    } else {
        document.getElementById('gkbAlphaView').style.display = 'none';
        document.getElementById('gkbNumView').style.display = 'block';
        document.getElementById('gkbTitle').innerText = "Number Pad";
    }
}

window.gkbType = function(val) {
    if(!window.gkbActiveInputId) return;
    if(navigator.vibrate) navigator.vibrate(15);
    let input = document.getElementById(window.gkbActiveInputId);
    if(window.gkbActiveInputId.startsWith('note_') && input.value.length >= 4) return;
    if(window.gkbCurrentType === 'num') {
        if(val !== '.' && val !== '00' && isNaN(val.replace('00','0'))) return;
        if(val === '.') {
            /* Only check last number token, not entire expression */
            const parts = input.value.split(/[\+\-\*\/]/);
            const lastPart = parts[parts.length - 1];
            if(lastPart.includes('.')) return;
        }
    }
    input.value += window.gkbIsCaps ? val.toUpperCase() : val;
    input.dispatchEvent(new Event('input', { bubbles: true })); 
    if(window.gkbIsCaps && val !== ' ' && val !== '.') gkbToggleCaps();
}

window.gkbDelete = function() {
    if(!window.gkbActiveInputId) return;
    if(navigator.vibrate) navigator.vibrate(25);
    let input = document.getElementById(window.gkbActiveInputId);
    input.value = input.value.slice(0, -1);
    input.dispatchEvent(new Event('input', { bubbles: true })); 
}

window.gkbClearInput = function() {
    if(!window.gkbActiveInputId) return;
    if(navigator.vibrate) navigator.vibrate([20, 30, 20]);
    let input = document.getElementById(window.gkbActiveInputId);
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
}

window.gkbToggleCaps = function() {
    if(navigator.vibrate) navigator.vibrate(15);
    window.gkbIsCaps = !window.gkbIsCaps;
    let keys = document.querySelectorAll('.letter-key');
    keys.forEach(k => window.gkbIsCaps ? k.classList.add('uppercase') : k.classList.remove('uppercase'));
}

document.addEventListener('click', function(e) {
    if(e.target.closest('.tool-back-btn') || e.target.closest('.bmi-light-header button')) {
        if(typeof closeMerajKeyboard === 'function') closeMerajKeyboard();
    }
});
document.addEventListener('DOMContentLoaded', initMerajKeyboard);
setTimeout(initMerajKeyboard, 300);

/* ==========================================
   2. SMART NAVIGATION
   ========================================== */

if(!document.getElementById('meraj-tab-animations')) {
    const animStyle = document.createElement('style');
    animStyle.id = 'meraj-tab-animations';
    animStyle.innerHTML = `
        @keyframes quickFadeIn { 0% { opacity: 0; transform: scale(0.97); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes quickPopOut { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0.95); } }
        .anim-fade-in { animation: quickFadeIn 0.2s ease-out forwards !important; }
        .anim-pop-out { animation: quickPopOut 0.15s ease-in forwards !important; }
    `;
    document.head.appendChild(animStyle);
}

window.currentActiveTab = 'calc'; 

window.showDailyTools = function() {
    if(typeof closeMerajKeyboard === 'function') closeMerajKeyboard();
    let tp = document.getElementById('toolsPage'); if(tp) tp.style.display = 'none';
    if(typeof openHomeGrid === 'function') openHomeGrid();
    let hp = document.getElementById('homeGridPage');
    if(hp) { hp.style.display = 'block'; hp.classList.remove('anim-fade-in', 'anim-pop-out'); void hp.offsetWidth; hp.classList.add('anim-fade-in'); }
    if(typeof updateActiveBtn === 'function') updateActiveBtn('btn-home');
    window.currentActiveTab = 'home';
}

window.showAllTools = function() {
    if(typeof closeMerajKeyboard === 'function') closeMerajKeyboard();
    let hp = document.getElementById('homeGridPage'); if(hp) hp.style.display = 'none';
    let tp = document.getElementById('toolsPage');
    if(tp) { tp.style.display = 'block'; tp.classList.remove('anim-fade-in', 'anim-pop-out'); void tp.offsetWidth; tp.classList.add('anim-fade-in'); }
    if(typeof updateActiveBtn === 'function') updateActiveBtn('btn-grid');
    window.currentActiveTab = 'grid';
}

window.showMainCalculator = function() {
    if(typeof closeMerajKeyboard === 'function') closeMerajKeyboard();
    let hp = document.getElementById('homeGridPage'); if(hp) hp.style.display = 'none';
    let tp = document.getElementById('toolsPage'); if(tp) tp.style.display = 'none';
    if(typeof updateActiveBtn === 'function') updateActiveBtn('btn-calc');

    let displayArea = document.querySelector('.display-area');
    let keypadArea = document.querySelector('.keypad-wrapper');
    if(displayArea && keypadArea && window.currentActiveTab !== 'calc') {
        displayArea.classList.remove('anim-fade-in'); keypadArea.classList.remove('anim-fade-in');
        void displayArea.offsetWidth; void keypadArea.offsetWidth;
        displayArea.classList.add('anim-fade-in'); keypadArea.classList.add('anim-fade-in');
    }
    window.currentActiveTab = 'calc';
}

function bindTabsAggressively() {
    const homeBtn = document.getElementById('btn-home'); if (homeBtn) { homeBtn.setAttribute('onclick', 'showDailyTools()'); }
    const gridBtn = document.getElementById('btn-grid'); if (gridBtn) { gridBtn.setAttribute('onclick', 'showAllTools()'); }
    const calcBtn = document.getElementById('btn-calc'); if (calcBtn) { calcBtn.setAttribute('onclick', 'showMainCalculator()'); }
}

window.closeToolPage = function(toolId) {
    if(typeof closeMerajKeyboard === 'function') closeMerajKeyboard();
    let toolElement = document.getElementById(toolId);
    let isDailyTool = false;
    if(typeof dailyToolsList !== 'undefined') { isDailyTool = dailyToolsList.some(t => t.action && t.action.includes(toolId.replace('home', '').replace('Tool', ''))); }

    if(['homeCashTool', 'homeShopTool', 'homeFormulaTool', 'homeBillTool'].includes(toolId) || isDailyTool) { showDailyTools(); } else { showAllTools(); }
    if(toolElement) {
        toolElement.classList.add('anim-pop-out');
        setTimeout(() => { toolElement.style.display = 'none'; toolElement.classList.remove('anim-pop-out'); }, 150);
    }
};

document.addEventListener('DOMContentLoaded', bindTabsAggressively);
setTimeout(bindTabsAggressively, 300);
/* Bug #7 Fix — setInterval(2000) hataya — battery waste tha, DOMContentLoaded kaafi hai */

/* ==========================================
   3. DAILY TOOLS GRID
   ========================================== */
const dailyToolsList = [
    { name: "Cash", icon: "fas fa-wallet", color: "var(--success)", action: "openHomeTool_Cash()" },
    { name: "Shopping", icon: "fas fa-shopping-cart", color: "var(--info)", action: "openHomeTool_Shop()" },
    { name: "Formulas", icon: "fas fa-book", color: "var(--primary)", action: "openHomeTool_Formula()" },
    { name: "Split Bill", icon: "fas fa-pizza-slice", color: "var(--danger)", action: "openHomeTool_BillSplitter()" },
    { name: "Profit", icon: "fas fa-chart-pie", color: "var(--primary-dark)", action: "openHomeTool_Profit()" }
];

window.openHomeGrid = function() {
    let homePage = document.getElementById('homeGridPage');
    let originalToolsPage = document.getElementById('toolsPage');

    if (!homePage) {
        homePage = document.createElement('div');
        homePage.id = 'homeGridPage';
        homePage.className = originalToolsPage ? originalToolsPage.className : 'tools-page'; 
        homePage.style.width = '100%';
        homePage.style.boxSizing = 'border-box';
        homePage.style.padding = '5px 15px 80px 15px'; 

        let boxesHtml = '';
        dailyToolsList.forEach(tool => {
            boxesHtml += `
                <div class="feature-box meraj-card" onclick="${tool.action}" style="padding:15px 5px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color); cursor:pointer;">
                    <div style="color: ${tool.color}; font-size: 2rem;"><i class="${tool.icon}"></i></div>
                    <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-main); margin-top: 5px;">${tool.name}</span>
                </div>
            `;
        });

        homePage.innerHTML = `
            <div class="tools-header" style="margin-bottom: 10px; padding: 0px 5px 10px 5px;">
                <h2 style="margin: 0; font-size: 1.4rem; font-weight: 800; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 12px; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-home" style="color:var(--primary);"></i> Daily Tools
                </h2>
            </div>
            <div class="features-grid" style="margin-bottom: 0;">
                ${boxesHtml}
            </div>
        `;
        
        if (originalToolsPage && originalToolsPage.parentNode) { originalToolsPage.parentNode.appendChild(homePage); } 
        else { document.body.appendChild(homePage); }
    }
    
    if(originalToolsPage) originalToolsPage.style.display = 'none'; 
    homePage.style.display = 'block';
    if(typeof closeMerajKeyboard === 'function') closeMerajKeyboard();
}

/* ==========================================
   4. CASH COUNTER (FIXED OVERLAP & UNDO STYLE)
   ========================================== */

window.openHomeTool_Cash = function() {
    let draft = JSON.parse(localStorage.getItem('meraj_cash_draft')) || {};

    let currencyData = [
        { val: 500, type: 'note', color: 'linear-gradient(135deg, #8b938f, #6e7571)' }, 
        { val: 200, type: 'note', color: 'linear-gradient(135deg, #f29f05, #d68a04)' }, 
        { val: 100, type: 'note', color: 'linear-gradient(135deg, #887ab0, #6c608f)' }, 
        { val: 50,  type: 'note', color: 'linear-gradient(135deg, #48b3d6, #3694b5)' }, 
        { val: 20,  type: 'note', color: 'linear-gradient(135deg, #b5c942, #99ab35)' }, 
        { val: 10,  type: 'note', color: 'linear-gradient(135deg, #8a644f, #6e4e3d)' }, 
        { val: 5,   type: 'coin', color: 'radial-gradient(circle at 30% 30%, #ffdf73, #d4af37, #997a00)' }, 
        { val: 2,   type: 'coin', color: 'radial-gradient(circle at 30% 30%, #ffffff, #b0c4de, #7a8b9e)' }, 
        { val: 1,   type: 'coin', color: 'radial-gradient(circle at 30% 30%, #ffffff, #b0c4de, #7a8b9e)' }  
    ];

    let rowsHtml = '';
    currencyData.forEach(curr => {
        let item = curr.val;
        let countVal = draft[item] ? draft[item] : ''; 
        
        let visualHtml = curr.type === 'note' ? `
            <div style="width: 65px; height: 36px; background: ${curr.color}; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 1rem; box-shadow: inset 0 0 10px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.15); position: relative; overflow: hidden; border: 1px solid rgba(0,0,0,0.2);">
                <div style="position: absolute; left: 12px; top: 0; bottom: 0; width: 4px; background: repeating-linear-gradient(to bottom, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 4px, transparent 4px, transparent 8px);"></div>
                <div style="position: absolute; right: -5px; font-size: 2rem; color: rgba(255,255,255,0.15); font-weight: 900; line-height: 1;">₹</div>
                <span style="z-index: 2; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">₹${item}</span>
            </div>` : `
            <div style="width: 36px; height: 36px; background: ${curr.color}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2c3e50; font-weight: 900; font-size: 1rem; box-shadow: inset 0 0 5px rgba(255,255,255,0.5), 0 3px 6px rgba(0,0,0,0.2); border: 2px solid rgba(255,255,255,0.3);">₹${item}</div>`;

        rowsHtml += `
            <div id="row_wrap_${item}" class="meraj-card" style="display:flex; align-items:center; justify-content:space-between; padding:12px 15px; margin-bottom:12px; transition: all 0.3s ease;">
                <div style="flex: 0 0 70px; display: flex; align-items: center; justify-content: flex-start;">${visualHtml}</div>
                <div style="color:var(--text-muted); font-weight:bold; font-size:1.2rem; margin: 0 5px;">×</div>
                <input type="text" id="note_${item}" class="meraj-input" onclick="openMerajKeyboard('num', this.id)" oninput="calcCashTotal()" value="${countVal}" placeholder="0" readonly style="width: 70px; text-align:center; font-size:1.4rem; padding:8px 5px; cursor: pointer;">
                <div style="display: flex; align-items: center; gap: 8px; flex: 1; justify-content: flex-end;">
                    <div style="color:var(--text-muted); font-weight:bold; font-size:1.2rem;">=</div>
                    <div id="tot_${item}" style="font-size:1.25rem; font-weight:800; color:var(--text-muted); width: 85px; text-align:right;">₹ 0</div>
                </div>
            </div>`;
    });

    let html = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; background: var(--bg-main); box-sizing: border-box; position: relative; overflow: hidden;">
            
            <style>
                @keyframes smoothClearBounce { 0% { transform: scale(1); } 50% { transform: scale(0.9); } 100% { transform: scale(1); } }
                .input-cleared-anim { animation: smoothClearBounce 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
                @keyframes historySlideUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
                .history-card-anim { animation: historySlideUp 0.4s forwards; opacity: 0; }
            </style>

            <div id="cashSaveToast" style="display:none; position:absolute; top:40px; left:50%; transform:translateX(-50%); background:var(--primary); color:#fff; padding:12px 24px; border-radius:30px; font-weight:700; z-index:999999; align-items:center; gap:10px; animation: popIn 0.3s;">
                <i class="fas fa-check-circle"></i> Saved to History!
            </div>

            <div id="proConfirmModal" class="custom-modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 999999; background: rgba(0,0,0,0.5); display: none; align-items: center; justify-content: center;">
                <div class="custom-modal-box" style="background: #fff; border-radius: 20px; padding: 25px; width: 90%; max-width: 340px; text-align: center;">
                    <div id="proModalIconWrap" style="width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px auto; background: rgba(255, 59, 48, 0.1);">
                        <i id="proModalIcon" class="fas fa-save" style="font-size:2rem; color: #ff3b30;"></i>
                    </div>
                    <h3 id="proModalTitle" style="color:var(--text-main); margin: 0 0 10px 0;">Save & Clear?</h3>
                    <p id="proModalDesc" style="color:var(--text-muted); margin: 0 0 20px 0;">This will securely save your calculation to History.</p>
                    <div style="display:flex; gap:12px;">
                        <button onclick="document.getElementById('proConfirmModal').style.display='none';" class="meraj-btn btn-secondary" style="flex:1; border: none; padding: 12px; border-radius: 12px; background: #f1f3f4; font-weight: bold;">Cancel</button>
                        <button id="proModalConfirmBtn" class="meraj-undo-btn" style="flex:1; justify-content: center; border: none; padding: 12px; border-radius: 12px; font-weight: bold;">Proceed</button>
                    </div>
                </div>
            </div>

            <div id="cashAnimWrap" style="flex: 1; overflow-y: auto; padding: 0 15px; box-sizing: border-box; display: flex; flex-direction: column; min-height: 0;">
                
                <div style="position: sticky; top: 0; z-index: 20; background: var(--bg-main); padding-top: 15px; padding-bottom: 15px; margin-bottom: 5px;">
                    <div class="meraj-card" style="text-align:center; position: relative; margin: 0; box-shadow: 0 8px 25px rgba(0,0,0,0.08);">
                        <button onclick="openCashHistory()" class="icon-btn" style="position: absolute; top: 15px; right: 15px; background: var(--primary-light); color: var(--primary);"><i class="fas fa-history"></i></button>
                        <div style="color: var(--primary); font-size:0.85rem; margin-bottom:5px; text-transform: uppercase; font-weight: 800; letter-spacing: 1.5px;">Grand Total</div>
                        <div id="cashGrandTotal" style="font-size:2.8rem; font-weight:900; color:var(--text-main); line-height:1; letter-spacing: -1px;">₹ 0</div>
                        <div id="cashWords" style="color: var(--text-muted); font-size:0.95rem; margin-top:8px; font-weight:600; min-height:20px; font-style: italic;"></div>
                    </div>
                </div>

                ${rowsHtml}
                
                <div style="min-height: 20px;"></div>
            </div>

            <div style="padding: 15px 20px calc(15px + env(safe-area-inset-bottom, 15px)) 20px; border-top: 1px solid var(--border-color); background: var(--bg-main); width: 100%; box-sizing: border-box; flex-shrink: 0; z-index: 50;">
                <button class="meraj-undo-btn" onclick="triggerClearCashCounter()" style="width: 100%; padding: 16px; font-size: 1.15rem; justify-content: center; gap: 10px; font-weight:800;">
                    <i class="fas fa-save"></i> Save & Clear
                </button>
            </div>

            <div id="cashHistoryPage" style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; background:var(--bg-main); z-index:99999; flex-direction:column; box-sizing: border-box;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 15px 20px; border-bottom: 1px solid var(--border-color); background: var(--bg-main);">
                    <button onclick="closeCashHistory()" class="icon-btn" style="color:var(--text-main);"><i class="fas fa-arrow-left"></i></button>
                    <span style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">History</span>
                    <button onclick="shareCashHistory()" class="icon-btn" style="color:var(--primary);"><i class="fas fa-share-alt"></i></button>
                </div>
                <div id="cashHistoryList" style="flex: 1; overflow-y: auto; padding: 15px; padding-bottom: 20px;"></div>
                <div style="padding: 15px 20px calc(15px + env(safe-area-inset-bottom)) 20px; border-top: 1px solid var(--border-color); background: var(--bg-main); flex-shrink: 0;">
                    <button onclick="clearAllCashHistory()" class="meraj-undo-btn" style="width: 100%; padding: 16px; font-size: 1.1rem; justify-content: center; gap: 10px;">
                        <i class="fas fa-trash-alt"></i> Clear All History
                    </button>
                </div>
            </div>
        </div>`;
    
    openGenericTool('homeCashTool', 'Cash Counter', html);
    setTimeout(window.calcCashTotal, 50);
}

// 🧠 CALCULATION & LIVE AUTO-SAVE
window.calcCashTotal = function() {
    let items = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let grandTotal = 0; let draft = {}; 

    items.forEach(item => {
        let el = document.getElementById('note_'+item);
        if(!el) return; 
        let count = parseInt(el.value) || 0;
        let total = item * count;
        
        let totElement = document.getElementById('tot_'+item);
        totElement.innerText = '₹ ' + total.toLocaleString('en-IN');
        
        if(total > 0) { 
            totElement.style.color = "var(--text-main)"; 
            el.style.borderColor = "var(--primary)";
        } else { 
            totElement.style.color = "var(--text-muted)"; 
            el.style.borderColor = "var(--border-color)";
        }
        
        grandTotal += total;
        if(count > 0) draft[item] = count; 
    });

    let gtEl = document.getElementById('cashGrandTotal');
    gtEl.innerText = '₹ ' + grandTotal.toLocaleString('en-IN');
    gtEl.style.transform = 'scale(1.05)';
    setTimeout(() => { gtEl.style.transform = 'scale(1)'; }, 150);

    if (typeof numberToWordsIndian !== "undefined") {
        document.getElementById('cashWords').innerText = grandTotal > 0 ? numberToWordsIndian(grandTotal) : '';
    }
    localStorage.setItem('meraj_cash_draft', JSON.stringify(draft));
}

window.triggerClearCashCounter = function() {
    let totalText = document.getElementById('cashGrandTotal').innerText;
    if(totalText === '₹ 0' || totalText === '') return; 
    if(typeof closeMerajKeyboard === 'function') closeMerajKeyboard();
    if(navigator.vibrate) navigator.vibrate(20);
    
    // Popup ka Red Theme
    document.getElementById('proModalIcon').className = "fas fa-save";
    document.getElementById('proModalIcon').style.color = "#ff3b30"; 
    document.getElementById('proModalIconWrap').style.background = "rgba(255, 59, 48, 0.1)"; 
    document.getElementById('proModalTitle').innerText = "Save & Clear?";
    document.getElementById('proModalDesc').innerText = "This will securely save your calculation to History and reset the board.";
    
    let btn = document.getElementById('proModalConfirmBtn');
    btn.innerText = "Save & Clear";
    btn.className = "meraj-undo-btn"; // Red button class
    btn.onclick = executeClearCashCounter;
    
    document.getElementById('proConfirmModal').style.display = 'flex'; 
}

window.executeClearCashCounter = function() {
    document.getElementById('proConfirmModal').style.display = 'none'; 
    if(navigator.vibrate) navigator.vibrate([30, 50]); 
    
    let items = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let grandTotal = 0; let details = [];
    
    items.forEach(item => {
        let count = parseInt(document.getElementById('note_'+item).value) || 0;
        if(count > 0) {
            details.push({ note: item, count: count });
            grandTotal += (item * count);
        }
    });

    if(grandTotal > 0) {
        let history = JSON.parse(localStorage.getItem('meraj_cash_history')) || [];
        let dateStr = new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
        history.unshift({ id: Date.now(), date: dateStr, total: grandTotal, details: details });
        localStorage.setItem('meraj_cash_history', JSON.stringify(history));
        
        let toast = document.getElementById('cashSaveToast');
        toast.style.display = 'flex';
        setTimeout(() => { toast.style.display = 'none'; }, 2500);
    }

    let delay = 0;
    items.forEach((item) => {
        let inputEl = document.getElementById('note_'+item);
        if(inputEl && inputEl.value !== '') {
            setTimeout(() => {
                inputEl.classList.add('input-cleared-anim');
                inputEl.value = '';
                inputEl.dispatchEvent(new Event('input')); 
                setTimeout(() => { inputEl.classList.remove('input-cleared-anim'); }, 400); 
            }, delay);
            delay += 50; 
        }
    });
    localStorage.removeItem('meraj_cash_draft');
}

window.openCashHistory = function() {
    if(typeof closeMerajKeyboard === 'function') closeMerajKeyboard();
    document.getElementById('cashHistoryPage').style.display = 'flex';
    let mainHeader = document.querySelector('#homeCashTool .tool-ui-header');
    if(mainHeader) mainHeader.style.display = 'none';
    renderCashHistory();
}

window.closeCashHistory = function() {
    document.getElementById('cashHistoryPage').style.display = 'none';
    let mainHeader = document.querySelector('#homeCashTool .tool-ui-header');
    if(mainHeader) mainHeader.style.display = 'flex';
}

window.renderCashHistory = function() {
    let history = JSON.parse(localStorage.getItem('meraj_cash_history')) || [];
    let container = document.getElementById('cashHistoryList');
    
    if(history.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:var(--text-muted); margin-top:100px;"><i class="fas fa-receipt" style="font-size:3rem; opacity: 0.5;"></i><br><span style="font-weight:700; font-size: 1.2rem;">No Saved Records</span></div>';
        return;
    }

    let html = '';
    history.forEach((entry, index) => {
        let detailsHtml = entry.details.map(d => `<span style="background:var(--bg-main); border: 1px solid var(--border-color); padding:6px 12px; border-radius:10px; font-size:0.9rem; font-weight:700; color:var(--text-main); margin-right:8px; margin-bottom:8px; display:inline-block;">₹${d.note} <span style="color:var(--text-muted); font-weight: 500;">×</span> ${d.count}</span>`).join('');

        html += `
            <div class="history-card-anim meraj-card" style="animation-delay: ${index * 0.05}s; margin-bottom:15px; position: relative;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
                    <div>
                        <div style="color:var(--text-muted); padding:4px 10px; border-radius:20px; font-size:0.8rem; font-weight:600; margin-bottom:8px;"><i class="far fa-clock" style="margin-right:4px;"></i>${entry.date}</div>
                        <div style="font-size:2rem; font-weight:900; color:var(--text-main); letter-spacing:-0.5px;">₹ ${entry.total.toLocaleString('en-IN')}</div>
                    </div>
                    <button class="icon-btn" onclick="deleteCashHistoryItem(${entry.id})" style="color:var(--danger); box-shadow: 0 2px 6px rgba(239,68,68,0.1);"><i class="fas fa-trash-alt"></i></button>
                </div>
                <div style="border-top:1px dashed var(--border-color); padding-top:15px;">
                    ${detailsHtml}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

window.shareCashHistory = function() {
    let history = JSON.parse(localStorage.getItem('meraj_cash_history')) || [];
    if(history.length === 0) return alert("No history available to share!");
    
    let text = "*Cash Counter History*\n\n";
    history.forEach(entry => {
        text += `Date: ${entry.date}\nTotal: ₹${entry.total.toLocaleString('en-IN')}\n`;
        let detailsStr = entry.details.map(d => `₹${d.note} x ${d.count}`).join(', ');
        text += `Details: ${detailsStr}\n\n`;
    });
    
    if (navigator.share) { navigator.share({ title: 'Cash History', text: text }); } 
    else { alert("Sharing ready! Manually copy the screen."); }
}

window.deleteCashHistoryItem = function(id) {
    document.getElementById('proModalIcon').className = "fas fa-exclamation-circle";
    document.getElementById('proModalIcon').style.color = "var(--danger)";
    document.getElementById('proModalIconWrap').style.background = "rgba(239, 68, 68, 0.1)";
    document.getElementById('proModalTitle').innerText = "Delete Record?";
    document.getElementById('proModalDesc').innerText = "This saved calculation will be permanently removed.";
    
    let btn = document.getElementById('proModalConfirmBtn');
    btn.innerText = "Delete";
    btn.className = "meraj-btn btn-danger";
    btn.onclick = function() {
        document.getElementById('proConfirmModal').style.display = 'none';
        let history = JSON.parse(localStorage.getItem('meraj_cash_history')) || [];
        history = history.filter(h => h.id !== id);
        localStorage.setItem('meraj_cash_history', JSON.stringify(history));
        renderCashHistory(); 
    };
    document.getElementById('proConfirmModal').style.display = 'flex';
}

window.clearAllCashHistory = function() {
    let history = JSON.parse(localStorage.getItem('meraj_cash_history')) || [];
    if(history.length === 0) return;
    
    document.getElementById('proModalIcon').className = "fas fa-trash-alt";
    document.getElementById('proModalIcon').style.color = "var(--danger)";
    document.getElementById('proModalIconWrap').style.background = "rgba(239, 68, 68, 0.1)";
    document.getElementById('proModalTitle').innerText = "Clear All History?";
    document.getElementById('proModalDesc').innerText = "Warning: This action cannot be undone. All records will be erased.";
    
    let btn = document.getElementById('proModalConfirmBtn');
    btn.innerText = "Clear All";
    btn.className = "meraj-btn btn-danger";
    btn.onclick = function() {
        document.getElementById('proConfirmModal').style.display = 'none';
        localStorage.removeItem('meraj_cash_history');
        renderCashHistory();
    };
    document.getElementById('proConfirmModal').style.display = 'flex';
}

/* ==========================================
   5. SHOPPING LIST (PERFECT FIXED LAYOUT)
   ========================================== */

let shoppingList = JSON.parse(localStorage.getItem('meraj_shopping_list')) || [];

window.openHomeTool_Shop = function() {
    let html = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; background: var(--bg-main); box-sizing: border-box; position: relative; overflow: hidden;">
            
            <style>
                @keyframes shopSlideUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
                .shop-item-anim { animation: shopSlideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
            </style>

            <div id="shopConfirmModal" class="custom-modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 999999; background: rgba(0,0,0,0.5); display: none; align-items: center; justify-content: center;">
                <div class="custom-modal-box" style="background: #fff; border-radius: 20px; padding: 25px; width: 90%; max-width: 340px; text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">
                    <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(255, 59, 48, 0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 15px auto;">
                        <i class="fas fa-trash-alt" style="font-size:2rem; color:#ff3b30;"></i>
                    </div>
                    <h3 style="color:var(--text-main); margin: 0 0 10px 0; font-size: 1.3rem;">Clear List?</h3>
                    <p style="color:var(--text-muted); margin: 0 0 25px 0;">Are you sure you want to delete all items?</p>
                    <div style="display:flex; gap:12px;">
                        <button onclick="document.getElementById('shopConfirmModal').style.display='none';" style="flex:1; border: none; padding: 14px; border-radius: 14px; background: #f1f3f4; font-weight: bold; font-size: 1.05rem; color: #333;">Cancel</button>
                        <button onclick="merajExecuteClearShopping()" class="m-btn-danger" style="flex:1; padding: 14px; border-radius: 14px; justify-content: center; font-size: 1.05rem;">Delete All</button>
                    </div>
                </div>
            </div>

            <div style="padding: 15px; background: var(--bg-main); z-index: 10; flex-shrink: 0; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                <div class="meraj-card" style="background: var(--primary, #007bff); color: #fff; margin-bottom: 15px; padding: 20px; text-align: left; border-radius: 20px; box-shadow: 0 10px 20px rgba(0,123,255,0.2);">
                    <div style="font-size:0.85rem; margin-bottom:5px; text-transform: uppercase; font-weight: 800; letter-spacing: 1.5px; opacity: 0.9;">Estimated Bill</div>
                    <div id="shopGrandTotal" style="font-size:3.2rem; font-weight:900; line-height:1; letter-spacing: -1px; transition: transform 0.2s;">₹ 0</div>
                </div>
                
                <div style="display:flex; gap:10px; align-items: stretch;">
                    <div style="flex: 1.5; position: relative;">
                        <i class="fas fa-shopping-bag" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #888;"></i>
                        <input type="text" id="shopItemName" onclick="openMerajKeyboard('alpha', this.id)" class="meraj-input" placeholder="Item Name" readonly style="padding: 14px 14px 14px 40px; width: 100%; border-radius: 14px; font-weight: 600; font-size: 1.05rem;">
                    </div>
                    <div style="flex: 1; position: relative;">
                        <i class="fas fa-rupee-sign" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #888;"></i>
                        <input type="text" id="shopItemPrice" onclick="openMerajKeyboard('num', this.id)" class="meraj-input" placeholder="Price" readonly style="padding: 14px 14px 14px 35px; width: 100%; border-radius: 14px; font-weight: 700; font-size: 1.1rem; color: var(--primary);">
                    </div>
                    <button onclick="addShoppingItem()" style="background: var(--primary, #007bff); color: #fff; width: 52px; border: none; border-radius: 14px; font-size: 1.2rem; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(0,123,255,0.3);"><i class="fas fa-plus"></i></button>
                </div>
            </div>

            <div id="shopAnimWrap" style="flex: 1; overflow-y: auto; padding: 5px 15px 20px 15px; box-sizing: border-box; display: flex; flex-direction: column; min-height: 0;">
                <div id="shopListContainer"></div>
            </div>
            
            <div style="padding: 15px 20px calc(15px + env(safe-area-inset-bottom, 15px)) 20px; background: var(--bg-main); display: flex; gap: 12px; border-top: 1px solid var(--border-color); flex-shrink: 0; z-index: 50;">
                <button onclick="merajTriggerClearShopping()" class="m-btn-danger" style="flex:1; padding: 16px; font-size: 1.15rem; border-radius: 16px; gap: 8px;">
                    <i class="fas fa-trash-alt"></i> Clear
                </button>
                <button onclick="shareShoppingList()" style="flex:1; padding: 16px; font-size: 1.15rem; font-weight: 800; background: #10b981; color: #fff; border: none; border-radius: 16px; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);">
                    <i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i> Share Bill
                </button>
            </div>
        </div>`;
    
    openGenericTool('homeShopTool', 'Shopping List', html);
    setTimeout(renderShoppingList, 50);
}

window.addShoppingItem = function() {
    let name = document.getElementById('shopItemName').value.trim();
    let price = parseFloat(document.getElementById('shopItemPrice').value);
    
    if(!name) { name = "Item " + (shoppingList.length + 1); }
    if(isNaN(price) || price <= 0) { 
        if(navigator.vibrate) navigator.vibrate([30, 30]);
        let priceInput = document.getElementById('shopItemPrice');
        priceInput.style.borderColor = "#ff3b30";
        setTimeout(() => { priceInput.style.borderColor = "var(--border-color)"; }, 800);
        return; 
    }
    
    if(navigator.vibrate) navigator.vibrate(20);
    shoppingList.unshift({ name: name, price: price });
    localStorage.setItem('meraj_shopping_list', JSON.stringify(shoppingList));
    
    document.getElementById('shopItemName').value = '';
    document.getElementById('shopItemPrice').value = '';
    document.getElementById('shopItemName').dispatchEvent(new Event('input')); // Reset cross icon logic if any
    document.getElementById('shopItemPrice').dispatchEvent(new Event('input'));
    
    if(typeof closeMerajKeyboard === 'function') closeMerajKeyboard(); 
    renderShoppingList();
}

window.deleteShoppingItem = function(index) {
    if(navigator.vibrate) navigator.vibrate(25); // Delete feedback
    shoppingList.splice(index, 1);
    localStorage.setItem('meraj_shopping_list', JSON.stringify(shoppingList));
    renderShoppingList();
}

window.merajTriggerClearShopping = function() {
    if(shoppingList.length === 0) return;
    if(typeof closeMerajKeyboard === 'function') closeMerajKeyboard();
    if(navigator.vibrate) navigator.vibrate(20);
    document.getElementById('shopConfirmModal').style.display = 'flex'; 
}

window.merajExecuteClearShopping = function() {
    document.getElementById('shopConfirmModal').style.display = 'none'; 
    let wrap = document.getElementById('shopListContainer');
    
    if(navigator.vibrate) navigator.vibrate([30, 50]);
    wrap.style.opacity = '0'; wrap.style.transition = 'opacity 0.2s ease';

    setTimeout(() => {
        shoppingList = [];
        localStorage.setItem('meraj_shopping_list', JSON.stringify(shoppingList));
        renderShoppingList();
        wrap.style.opacity = '1';
    }, 250);
}

window.renderShoppingList = function() {
    let container = document.getElementById('shopListContainer');
    let total = 0; let html = '';
    
    if(shoppingList.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; color:var(--text-muted); margin-top:80px; padding: 20px;">
                <i class="fas fa-shopping-basket" style="font-size:3.5rem; opacity: 0.3; color: var(--primary); margin-bottom: 15px;"></i>
                <div style="font-weight:800; font-size: 1.3rem; color: var(--text-main);">Cart is Empty</div>
                <div style="font-size: 0.95rem; margin-top: 5px;">Add items to see your estimated bill</div>
            </div>`;
    } else {
        shoppingList.forEach((item, index) => {
            total += item.price;
            html += `
                <div class="shop-item-anim meraj-card" style="display:flex; justify-content:space-between; align-items:center; padding:16px 20px; margin-bottom:12px; border-left: 4px solid var(--primary, #007bff); border-radius: 16px;">
                    <div style="flex: 1; padding-right: 15px;">
                        <div style="font-size:1.1rem; color:var(--text-main); font-weight:800;">${item.name}</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:15px; flex-shrink: 0;">
                        <div style="font-size:1.3rem; font-weight:900; color:var(--text-main); letter-spacing: -0.5px;">₹ ${item.price.toLocaleString('en-IN')}</div>
                        <button class="icon-btn-danger" onclick="deleteShoppingItem(${index})" style="width: 38px; height: 38px;">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>`;
        });
        container.innerHTML = html;
    }
    
    let gtEl = document.getElementById('shopGrandTotal');
    gtEl.innerText = '₹ ' + total.toLocaleString('en-IN');
    gtEl.style.transform = 'scale(1.05)';
    setTimeout(() => { gtEl.style.transform = 'scale(1)'; }, 150);
}

window.shareShoppingList = function() {
    if(shoppingList.length === 0) return alert("Your list is empty!");
    let text = "🛒 *My Shopping Bill*\n\n";
    let total = 0;
    shoppingList.forEach((item) => { text += `▪ ${item.name} - ₹${item.price.toLocaleString('en-IN')}\n`; total += item.price; });
    text += `\n💰 *Grand Total: ₹${total.toLocaleString('en-IN')}*\n`;
    if (navigator.share) { navigator.share({ title: 'Shopping Bill', text: text }); } 
    else { alert("Sharing ready! Manually copy the screen."); }
}

/* ==========================================
   6. BILL SPLITTER & TIP CALCULATOR
   ========================================== */

window.openHomeTool_BillSplitter = function() {
    let html = `
        <style>#homeBillTool > .tool-ui-header { display: none !important; }</style>
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; background: var(--bg-main); box-sizing: border-box; position: relative;">
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 15px 20px; border-bottom: 1px solid var(--border-color); z-index: 10;">
                <button class="icon-btn" onclick="closeToolPage('homeBillTool')"><i class="fas fa-arrow-left"></i></button>
                <span style="font-size: 1.3rem; font-weight: 800; color: var(--text-main);">Bill Splitter</span>
                <div style="width: 40px;"></div>
            </div>

            <div style="flex: 1; overflow-y: auto; padding: 20px; padding-bottom: 30px;">
                <div class="meraj-card" style="margin-bottom: 20px;">
                    <div style="margin-bottom: 15px;">
                        <label style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600; margin-bottom: 8px; display: block;">Total Bill Amount (₹)</label>
                        <input type="text" id="billAmount" onclick="openMerajKeyboard('num', this.id)" readonly placeholder="e.g. 1500" class="meraj-input">
                    </div>
                    <div style="display: flex; gap: 15px; margin-bottom: 5px;">
                        <div style="flex: 1;">
                            <label style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600; margin-bottom: 8px; display: block;">Tip (%)</label>
                            <input type="text" id="billTip" onclick="openMerajKeyboard('num', this.id)" readonly value="0" class="meraj-input">
                        </div>
                        <div style="flex: 1;">
                            <label style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600; margin-bottom: 8px; display: block;">Persons</label>
                            <input type="text" id="billPersons" onclick="openMerajKeyboard('num', this.id)" readonly value="2" class="meraj-input">
                        </div>
                    </div>
                </div>
                <button onclick="calculateBillSplit()" class="meraj-btn btn-primary">Split Bill</button>

                <div id="billResultCard" style="display: none; margin-top: 25px; background: var(--danger); border-radius: 16px; padding: 25px 20px; color: #fff; text-align: center; animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                    <div style="font-size: 0.95rem; font-weight: 600; text-transform: uppercase; margin-bottom: 5px;">Per Person</div>
                    <div id="resPerPerson" style="font-size: 3.5rem; font-weight: 900; line-height: 1; margin-bottom: 20px;">₹0</div>
                    <div style="background: rgba(255,255,255,0.15); padding: 15px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <span style="font-weight: 600;">Total Bill (inc. Tip)</span>
                        <span id="resTotalBill" style="font-weight: 800; font-size: 1.2rem;">₹0</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.15); padding: 15px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: 600;">Tip Amount</span>
                        <span id="resTipAmount" style="font-weight: 800; font-size: 1.2rem;">₹0</span>
                    </div>
                </div>
            </div>
        </div>`;
    openGenericTool('homeBillTool', 'Bill Splitter', html);
}

/* ==========================================
   7. PROFIT & MARGIN CALCULATOR
   ========================================== */

window.openHomeTool_Profit = function() {
    let html = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; background: var(--bg-main); box-sizing: border-box; padding: 15px; overflow-y: auto;">

            <div class="meraj-card" style="margin-bottom:15px; display: flex; justify-content: space-between; align-items: center; cursor:pointer;" onclick="openMerajKeyboard('num', 'profit_cost')">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 45px; height: 45px; background: var(--primary-light); border-radius: 14px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-box-open" style="color: var(--primary); font-size: 1.3rem;"></i>
                    </div>
                    <div>
                        <div style="color: var(--text-muted); font-size: 0.8rem; font-weight: 800; text-transform: uppercase;">Cost Price</div>
                        <div style="color: var(--text-main); font-size: 1.1rem; font-weight: 700;">Kharid Rate</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: flex-end;">
                    <span style="font-size: 1.8rem; font-weight: 800; color: var(--primary); margin-right: 5px;">₹</span>
                    <input type="text" id="profit_cost" value="1000" readonly style="background:transparent; border:none; text-align:right; font-size: 2.2rem; font-weight:900; color:var(--primary); width:100px; outline:none; cursor:pointer; padding:0;">
                </div>
            </div>

            <div class="meraj-card" style="margin-bottom:25px; display: flex; justify-content: space-between; align-items: center; cursor:pointer;" onclick="openMerajKeyboard('num', 'profit_margin')">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 45px; height: 45px; background: rgba(16, 185, 129, 0.1); border-radius: 14px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-chart-line" style="color: var(--success); font-size: 1.3rem;"></i>
                    </div>
                    <div>
                        <div style="color: var(--text-muted); font-size: 0.8rem; font-weight: 800; text-transform: uppercase;">Profit Margin</div>
                        <div style="color: var(--text-main); font-size: 1.1rem; font-weight: 700;">Munafa (%)</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: flex-end;">
                    <input type="text" id="profit_margin" value="20" readonly style="background:transparent; border:none; text-align:right; font-size: 2.2rem; font-weight:900; color:var(--success); width:80px; outline:none; cursor:pointer; padding:0;">
                    <span style="font-size: 1.8rem; font-weight: 800; color: var(--success); margin-left: 5px;">%</span>
                </div>
            </div>

            <div class="meraj-card" style="border:1px solid var(--primary); text-align:center; position: relative; overflow: hidden;">
                <div style="color:var(--primary); font-size:0.95rem; font-weight:900; letter-spacing:1.5px; text-transform:uppercase;">Selling Price</div>
                <div style="color:var(--text-muted); font-size: 1.05rem; font-weight: 600; margin-bottom: 15px;">Bechne Ka Rate</div>
                <div id="profit_sell_price" style="color:var(--text-main); font-size:3.8rem; font-weight:900; line-height: 1;">₹1,200</div>
            </div>

            <div class="meraj-card" style="margin-top: 20px; background: var(--bg-sec); display: flex; justify-content: space-between; align-items: center; border: 1px dashed var(--success);">
                <div style="color:var(--text-main); font-weight: 800; font-size: 1.2rem;">Net Profit</div>
                <div id="profit_amount" style="color:var(--success); font-size: 2rem; font-weight: 900;">+ ₹200</div>
            </div>
        </div>
    `;
    
    openGenericTool('homeProfitTool', 'Profit Calculator', html);
    setTimeout(calculateProfit, 100);
}

window.calculateProfit = function() {
    let cost = parseFloat(document.getElementById('profit_cost').value) || 0;
    let marginPercent = parseFloat(document.getElementById('profit_margin').value) || 0;
    
    if(cost === 0) {
        document.getElementById('profit_sell_price').innerText = '₹0';
        document.getElementById('profit_amount').innerText = '+ ₹0';
        return;
    }
    
    let profitAmount = cost * (marginPercent / 100);
    let sellPrice = cost + profitAmount;
    
    document.getElementById('profit_sell_price').innerText = '₹' + sellPrice.toLocaleString('en-IN', {maximumFractionDigits: 2});
    document.getElementById('profit_amount').innerText = '+ ₹' + profitAmount.toLocaleString('en-IN', {maximumFractionDigits: 2});
}