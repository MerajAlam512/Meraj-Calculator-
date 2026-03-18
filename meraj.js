/* ==========================================
   MERAJ.JS - THE ULTIMATE MASTER TOOL SET
   (Age, Date, BMI, EMI, GST, Discount & Shells)
   ========================================== */

// 1. AUTO-INJECT CSS (For ALL Tools)
if (!document.getElementById('meraj-auto-css')) {
    const style = document.createElement('style');
    style.id = 'meraj-auto-css';
    style.innerHTML = `
        .tool-ui-page { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: var(--bg-color, #ffffff); z-index: 1600; overflow-x: hidden; overflow-y: auto; box-sizing: border-box; animation: slideInRight 0.3s ease-out forwards; display: flex; flex-direction: column; }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .tool-ui-header { display: flex; align-items: center; padding: 15px 20px; background-color: #fff; border-bottom: 1px solid #eee; flex-shrink: 0;}
        .tool-back-btn { background: transparent; border: none; font-size: 1.4rem; color: #333; margin-right: 20px; cursor: pointer; padding: 5px 0; }
        .tool-ui-title { font-size: 1.2rem; font-weight: 500; color: #000; }
        
        /* General Tool Styles */
        .mi-input-group { background: #fff; padding: 15px 20px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;}
        .mi-input-label { font-size: 1.1rem; color: #555; font-weight: 500;}
        .mi-input-field { text-align: right; font-size: 1.3rem; border: none; outline: none; color: var(--primary); font-weight: bold; width: 50%; background: transparent;}
        .mi-input-field::placeholder { color: #ccc; font-weight: normal;}
        
        .date-selector-area { background: #fff; padding: 10px 20px; margin-bottom: 15px; }
        .date-row { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #f0f0f0; cursor: pointer; transition: 0.2s; }
        .date-row:active { background-color: #fdfdfd; }
        .date-row:last-child { border-bottom: none; }
        .date-label { font-size: 1.1rem; color: #555; }
        .date-value { font-size: 1.1rem; font-weight: bold; color: var(--primary); display: flex; align-items: center; gap: 5px; }
        .date-value.gray { color: #555; }
        .date-value i { font-size: 0.8rem; color: #aaa; }
        
        .mi-card { background: #fff; border: 1px solid #eaeaea; border-radius: 16px; margin: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.02); overflow: hidden; padding-bottom: 10px;}
        .mi-top-section { display: flex; padding: 25px 0; border-bottom: 1px solid #eaeaea; }
        .mi-half { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align:center;}
        .mi-divider { width: 1px; background-color: #eaeaea; }
        .mi-card-title { font-size: 2rem; font-weight: 300; color: #555; margin-bottom: 5px; }
        .mi-card-title.small { font-size: 1rem; color: var(--primary); font-weight: 500; margin-bottom: 15px; }
        .mi-age-main { font-size: 3.5rem; color: var(--primary); font-weight: 400; line-height: 1; display: flex; align-items: baseline; gap: 5px; justify-content:center;}
        .mi-age-main span { font-size: 1.2rem; color: #555; font-weight: 400; }
        .mi-age-sub { font-size: 0.85rem; color: #888; margin-top: 15px; text-align:center;}
        .mi-cake-icon { width: 45px; height: 45px; background-color: var(--primary); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 10px; }
        .mi-next-day { font-size: 1.1rem; color: #888; }
        .mi-summary-header { text-align: center; padding: 15px 0; font-size: 1.1rem; color: var(--primary); font-weight: 500; }
        .mi-summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px 5px; padding: 0 15px 15px 15px; }
        .mi-grid-item { display: flex; flex-direction: column; align-items: center; text-align:center;}
        .mi-grid-label { font-size: 0.85rem; color: #888; margin-bottom: 5px; }
        .mi-grid-val { font-size: 1.3rem; color: #333; font-weight: 400; }
        .mi-footer-text { text-align: center; font-size: 0.7rem; color: #ccc; padding: 10px 0; }
        
        .mi-bottom-bar { position: fixed; bottom: 0; left: 0; width: 100%; height: 65px; display: flex; background: #fff; box-shadow: 0 -2px 10px rgba(0,0,0,0.05); z-index: 1700; }
        .mi-btn { flex: 1; border: none; font-size: 1.1rem; font-weight: 500; cursor: pointer; transition: 0.2s; }
        .mi-btn-left { background: #fff; color: #555; }
        .mi-btn-left:active { background: #f0f0f0; }
        .mi-btn-right { background: var(--primary); color: #fff; font-weight: bold;}
        .mi-btn-right:active { background: var(--primary-dark); }
        .bmi-full-btn { width: 100%; background: var(--primary); color: white; padding: 18px; border: none; font-size: 1.1rem; font-weight: bold; cursor: pointer; }
        .bmi-full-btn:active { background: var(--primary-dark); }

        /* Generic Coming Soon Box */
        .soon-box { text-align: center; margin-top: 40px; padding: 30px; }
        .soon-icon { font-size: 4rem; color: var(--primary); margin-bottom: 20px; opacity: 0.8;}
        .soon-text { font-size: 1.2rem; color: #555; }

        /* Wheel Picker */
        .wheel-picker-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 20000; display: none; align-items: flex-end; justify-content: center; }
        .wheel-picker-container { width: 100%; background: #ffffff; border-radius: 24px 24px 0 0; padding: 20px 20px 30px 20px; box-shadow: 0 -5px 15px rgba(0,0,0,0.1); animation: slideUpModal 0.3s cubic-bezier(0.1, 0.9, 0.2, 1); }
        @keyframes slideUpModal { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .wp-title { text-align: left; font-size: 1.1rem; font-weight: bold; color: #000; margin-bottom: 20px; padding-left: 10px; }
        .wp-wheels { display: flex; position: relative; height: 150px; overflow: hidden; mask-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.2)); -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.2)); }
        .wp-highlight { position: absolute; top: 50px; left: 10px; right: 10px; height: 50px; background: var(--primary-a12); border-top: 2px solid var(--primary); border-bottom: 2px solid var(--primary); border-radius: 8px; pointer-events: none; z-index: 1; }
        .wp-col { flex: 1; height: 100%; overflow-y: scroll; scroll-snap-type: y mandatory; scrollbar-width: none; position: relative; z-index: 2; }
        .wp-col::-webkit-scrollbar { display: none; }
        .wp-spacer { height: 50px; }
        .wp-item { height: 50px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: #999; font-weight: 500; scroll-snap-align: center; transition: 0.1s ease; }
        .wp-actions { display: flex; justify-content: space-between; gap: 15px; margin-top: 25px; }
        .wp-btn { flex: 1; padding: 14px; border-radius: 30px; font-weight: bold; font-size: 1.05rem; border: none; cursor: pointer; transition: 0.2s; }
        .wp-btn-cancel { background: #f1f3f4; color: #555; }
        .wp-btn-ok { background: var(--primary); color: #ffffff; box-shadow: var(--shadow-primary); }
        
        /* BMI specific */
        .bmi-input-area { background: #fff; height: auto; padding: 20px 0; border-bottom: 1px solid #f0f0f0; display: flex; flex-direction: column; justify-content: space-evenly; flex-shrink: 0;}
        .bmi-row { display: flex; justify-content: space-between; align-items: center; padding: 15px 25px; cursor: pointer; transition: 0.2s; }
        .bmi-label { font-size: 1.2rem; color: #888; display: flex; align-items: center; gap: 8px; font-weight: 500;}
        .bmi-val-col { display: flex; flex-direction: column; align-items: flex-end; }
        .bmi-val { font-size: 3.5rem; color: #333; font-weight: 300; line-height: 1.1;}
        .bmi-row.active .bmi-label, .bmi-row.active .bmi-label i, .bmi-row.active .bmi-val { color: var(--primary); font-weight: bold; }
        .bmi-keypad { flex-grow: 1; background: #ffffff; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr); gap: 10px; padding: 20px; }
        .bmi-k-btn { border: none; background: transparent; font-size: 2rem; display: flex; justify-content: center; align-items: center; border-radius: 50px;}
        .bmi-k-action { background: #f6f6f6; border-radius: 35px; font-size: 1.3rem; color: var(--primary); font-weight: 500;}
        .bmi-go { grid-row: span 2; border-radius: 40px; font-size: 1.4rem; font-weight: bold; background: var(--primary); color: var(--text-inverse); }
        .bmi-result-area { display: none; padding: 30px 20px; text-align: center; background: #f7f7f7; flex-grow: 1;}
        .bmi-res-card { background: #fff; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); border: 1px solid #eaeaea; padding: 35px 20px 20px 20px; text-align: center;}
        .bmi-res-top { display: flex; justify-content: center; align-items: baseline; gap: 8px; margin-bottom: 20px; }
        .bmi-res-num { font-size: 4.5rem; color: var(--primary); line-height: 1; }
        .bmi-res-right { display: flex; flex-direction: column; align-items: flex-start; }
        .bmi-res-text { font-size: 1.6rem; color: #555; line-height: 1.2;}
        .bmi-res-status { font-size: 1rem; font-weight: 500;}
        .bmi-scale-wrap { padding: 0 10px; }
        .bmi-scale-labels { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 8px; font-weight: 500;}
        .bmi-scale-bar { display: flex; height: 5px; border-radius: 3px; overflow: hidden; margin-bottom: 8px; }
        .scale-blue { background: #4facfe; flex: 1; margin-right: 3px; } .scale-green { background: #4caf50; flex: 1.5; margin-right: 3px; } .scale-red { background: #ff5252; flex: 1; }
        .bmi-scale-vals { display: flex; justify-content: space-between; font-size: 0.9rem; color: #888; }
        .txt-blue { color: #4facfe; } .txt-green { color: #4caf50; } .txt-red { color: #ff5252; }
    `;
    document.head.appendChild(style);
}

// 2. Fix Home Button (Closes all pages)
setTimeout(() => {
    const homeBtn = document.getElementById('btn-home');
    if (homeBtn) {
        const oldClick = homeBtn.onclick;
        homeBtn.onclick = function(e) {
            document.querySelectorAll('.tool-ui-page').forEach(page => page.style.display = 'none');
            if (oldClick) oldClick.call(this, e);
        };
    }
}, 500);

function closeToolPage(pageId) { 
    const toolElement = document.getElementById(pageId);
    if (toolElement) toolElement.style.display = 'none';
    /* Bug #3 Fix — currentActiveTab check karke sahi page wapas lao */
    const activeTab = (typeof window.currentActiveTab !== 'undefined') ? window.currentActiveTab : 'grid';
    if (activeTab === 'home') {
        if (typeof window.showDailyTools === 'function') window.showDailyTools();
    } else if (activeTab === 'calc') {
        const toolsPage = document.getElementById('toolsPage');
        if (toolsPage) toolsPage.style.display = 'none';
    } else {
        const toolsPage = document.getElementById('toolsPage');
        if (toolsPage) toolsPage.style.display = 'block';
    }
}

/* ==========================================
   GENERIC PAGE BUILDER (FOR NEW TOOLS)
   ========================================== */
function openGenericTool(id, title, contentHtml) {
    /* Bug #2 Fix — toolsPage aur homeGridPage DONO hide karo */
    const toolsPage = document.getElementById('toolsPage');
    if (toolsPage) toolsPage.style.display = 'none';
    const homeGridPage = document.getElementById('homeGridPage');
    if (homeGridPage) homeGridPage.style.display = 'none';

    let p = document.getElementById(id);
    if (!p) {
        p = document.createElement('div'); p.id = id; p.className = 'tool-ui-page';
        p.innerHTML = `<div class="tool-ui-header"><button class="tool-back-btn" onclick="closeToolPage('${id}')"><i class="fas fa-arrow-left"></i></button><span class="tool-ui-title">${title}</span></div>` + contentHtml;
        document.body.appendChild(p);
    }
    p.style.display = 'block';
}

function openComingSoonMode(title) {
    const html = `<div class="soon-box"><i class="fas fa-tools soon-icon"></i><div class="soon-text"><b>${title}</b> is under construction.<br>Coming in the next update!</div></div>`;
    openGenericTool('soonToolPage', title, html);
    document.getElementById('soonToolPage').querySelector('.tool-ui-title').innerText = title;
}

/* ==========================================
   1. AGE & DATE CALCULATOR (MI-STYLE & SHARE)
   ========================================== */
let appDates = { ageDob: new Date(), ageToday: new Date(), dateFrom: new Date(), dateTo: new Date() };
appDates.ageDob.setFullYear(appDates.ageToday.getFullYear() - 15); // Default: 15 saal pehle
let currentPickerMode = 'ageDob';

function openAgeMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('ageToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Age Calculator</span>
                <div style="width: 40px;"></div>
            </div>

            <div class="bmi-input-area light" style="padding-top: 5px;">
                <div class="bmi-row light" onclick="openWheelPicker('ageDob', 'Date of birth')">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">Date of birth</span>
                    </div>
                    <div class="bmi-val-col light" style="flex-direction:row; align-items:center; gap:5px;">
                        <span class="bmi-val light" id="dobDisplay" style="font-size:1.4rem; color:var(--primary);">Select Date</span>
                        <i class="fas fa-caret-down" style="color:var(--primary);"></i>
                    </div>
                </div>
                <div class="bmi-row light" onclick="openWheelPicker('ageToday', 'Today')">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">Today</span>
                    </div>
                    <div class="bmi-val-col light" style="flex-direction:row; align-items:center; gap:5px;">
                        <span class="bmi-val light" id="todayDisplay" style="font-size:1.4rem; color:#333;">Select Date</span>
                        <i class="fas fa-caret-down" style="color:#ccc;"></i>
                    </div>
                </div>
            </div>

            <div id="ageResultArea" class="bmi-result-area light" style="display:flex;">
                <div class="bmi-res-card light" id="ageShareCard" style="padding: 20px; width:100%;">
                    
                    <div style="display:flex; justify-content:space-between; border-bottom:1px solid #eee; padding-bottom:20px; margin-bottom:20px;">
                        <div style="flex:1; text-align:center; border-right:1px solid #eee;">
                            <div style="color:#555; font-size:1.1rem; margin-bottom:10px;">Age</div>
                            <div style="display:flex; align-items:baseline; justify-content:center; gap:5px;">
                                <span id="miYears" style="font-size:3.5rem; color:var(--primary); line-height:1;">0</span>
                                <span style="font-size:1.2rem; color:#555;">years</span>
                            </div>
                            <div id="miAgeSub" style="color:#888; font-size:0.9rem; margin-top:10px;">0 months | 0 days</div>
                        </div>
                        <div style="flex:1; text-align:center;">
                            <div style="color:var(--primary); font-size:1.1rem; margin-bottom:10px; font-weight:500;">Next birthday</div>
                            <i class="fas fa-birthday-cake" style="font-size:1.8rem; color:var(--primary); margin-bottom:10px;"></i>
                            <div id="miNextDay" style="color:#333; font-size:1.1rem; font-weight:bold;">-</div>
                            <div id="miNextSub" style="color:#888; font-size:0.9rem; margin-top:5px;">0 months | 0 days</div>
                        </div>
                    </div>

                    <div style="color:var(--primary); font-size:1.1rem; font-weight:500; margin-bottom:15px;">Summary</div>
                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px; text-align:center;">
                        <div><div style="color:#888; font-size:0.85rem; margin-bottom:5px;">Years</div><div id="sumYears" style="font-size:1.2rem; color:#333; font-weight:bold;">0</div></div>
                        <div><div style="color:#888; font-size:0.85rem; margin-bottom:5px;">Months</div><div id="sumMonths" style="font-size:1.2rem; color:#333; font-weight:bold;">0</div></div>
                        <div><div style="color:#888; font-size:0.85rem; margin-bottom:5px;">Weeks</div><div id="sumWeeks" style="font-size:1.2rem; color:#333; font-weight:bold;">0</div></div>
                        <div><div style="color:#888; font-size:0.85rem; margin-bottom:5px;">Days</div><div id="sumDays" style="font-size:1.2rem; color:#333; font-weight:bold;">0</div></div>
                        <div><div style="color:#888; font-size:0.85rem; margin-bottom:5px;">Hours</div><div id="sumHours" style="font-size:1.2rem; color:#333; font-weight:bold;">0</div></div>
                        <div><div style="color:#888; font-size:0.85rem; margin-bottom:5px;">Minutes</div><div id="sumMinutes" style="font-size:1.2rem; color:#333; font-weight:bold;">0</div></div>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:25px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="ageBottomBar" class="bmi-bottom-bar" style="display: block;">
                <button class="bmi-share-btn-full" onclick="shareAgeCard()">Share</button>
            </div>
        </div>`;
    openGenericTool('ageToolPage', 'Age', html);
    ensureWheelPickerModal(); 
    runAgeCalc();
}

function runAgeCalc() {
    const D1 = appDates.ageDob; 
    const D2 = appDates.ageToday;
    
    let dobEl = document.getElementById('dobDisplay');
    if(dobEl) dobEl.innerText = D1.toLocaleDateString('en-GB');
    
    let todayEl = document.getElementById('todayDisplay');
    if(todayEl) todayEl.innerText = D2.toLocaleDateString('en-GB');
    
    if (D1 > D2) return;
    
    let y = D2.getFullYear() - D1.getFullYear(); 
    let m = D2.getMonth() - D1.getMonth(); 
    let d = D2.getDate() - D1.getDate();
    
    if (d < 0) { m--; d += new Date(D2.getFullYear(), D2.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    
    let nextBday = new Date(D1); 
    nextBday.setFullYear(D2.getFullYear());
    
    if (nextBday < D2 && (nextBday.getMonth() !== D2.getMonth() || nextBday.getDate() !== D2.getDate())) {
        nextBday.setFullYear(D2.getFullYear() + 1);
    }
    
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    document.getElementById('miNextDay').innerText = dayNames[nextBday.getDay()];
    
    let nx_m = nextBday.getMonth() - D2.getMonth(); 
    let nx_d = nextBday.getDate() - D2.getDate();
    if (nx_d < 0) { nx_m--; nx_d += new Date(nextBday.getFullYear(), nextBday.getMonth(), 0).getDate(); }
    if (nx_m < 0) nx_m += 12;
    
    const totalDays = Math.floor((Date.UTC(D2.getFullYear(), D2.getMonth(), D2.getDate()) - Date.UTC(D1.getFullYear(), D1.getMonth(), D1.getDate())) / 86400000);
    
    document.getElementById('miYears').innerText = y; 
    document.getElementById('miAgeSub').innerText = `${m} months | ${d} days`;
    document.getElementById('miNextSub').innerText = `${nx_m} months | ${nx_d} days`; 
    
    document.getElementById('sumYears').innerText = y; 
    document.getElementById('sumMonths').innerText = (y * 12) + m; 
    document.getElementById('sumWeeks').innerText = Math.floor(totalDays / 7); 
    document.getElementById('sumDays').innerText = totalDays; 
    document.getElementById('sumHours').innerText = totalDays * 24; 
    document.getElementById('sumMinutes').innerText = totalDays * 1440;
}

function shareAgeCard() {
    const card = document.getElementById('ageShareCard');
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Age.png", { type: "image/png" });
            const shareData = { title: 'My Age Details', text: 'Check out my age details from Meraj Calculator!', files: [file] };
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => { downloadImage(blob, "Meraj_Age.png"); });
            } else { downloadImage(blob, "Meraj_Age.png"); alert("Image Saved to Downloads!"); }
        });
    });
}

function openDateMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('dateToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Date Difference</span>
                <div style="width: 40px;"></div>
            </div>

            <div class="bmi-input-area light" style="padding-top: 5px;">
                <div class="bmi-row light" onclick="openWheelPicker('dateFrom', 'From Date')">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">From</span>
                    </div>
                    <div class="bmi-val-col light" style="flex-direction:row; align-items:center; gap:5px;">
                        <span class="bmi-val light" id="dateFromDisplay" style="font-size:1.4rem; color:var(--primary);">Select Date</span>
                        <i class="fas fa-caret-down" style="color:var(--primary);"></i>
                    </div>
                </div>
                <div class="bmi-row light" onclick="openWheelPicker('dateTo', 'To Date')">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">To</span>
                    </div>
                    <div class="bmi-val-col light" style="flex-direction:row; align-items:center; gap:5px;">
                        <span class="bmi-val light" id="dateToDisplay" style="font-size:1.4rem; color:#333;">Select Date</span>
                        <i class="fas fa-caret-down" style="color:#ccc;"></i>
                    </div>
                </div>
            </div>

            <div id="dateResultArea" class="bmi-result-area light" style="display:flex;">
                <div class="bmi-res-card light" id="dateShareCard" style="padding: 30px 20px; width:100%;">
                    
                    <div style="text-align:center; border-bottom:1px solid #eee; padding-bottom:20px; margin-bottom:20px;">
                        <div style="color:var(--primary); font-size:1.1rem; margin-bottom:10px; font-weight:500;">Total Difference</div>
                        <div style="display:flex; align-items:baseline; justify-content:center; gap:8px;">
                            <span id="dateDiffMain" style="font-size:3.8rem; color:#333; line-height:1;">0</span>
                            <span style="font-size:1.4rem; color:#555;">days</span>
                        </div>
                        <div id="dateDiffSub" style="color:#888; font-size:1.1rem; margin-top:15px;">0 years, 0 months, 0 days</div>
                    </div>

                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px; text-align:center;">
                        <div><div style="color:#888; font-size:0.85rem; margin-bottom:5px;">Total Weeks</div><div id="dateSumWeeks" style="font-size:1.2rem; color:#333; font-weight:bold;">0</div></div>
                        <div><div style="color:#888; font-size:0.85rem; margin-bottom:5px;">Total Hours</div><div id="dateSumHours" style="font-size:1.2rem; color:#333; font-weight:bold;">0</div></div>
                        <div><div style="color:#888; font-size:0.85rem; margin-bottom:5px;">Total Minutes</div><div id="dateSumMins" style="font-size:1.2rem; color:#333; font-weight:bold;">0</div></div>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:25px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="dateBottomBar" class="bmi-bottom-bar" style="display: block;">
                <button class="bmi-share-btn-full" onclick="shareDateCard()">Share</button>
            </div>
        </div>`;
    openGenericTool('dateToolPage', 'Date Difference', html);
    ensureWheelPickerModal(); 
    runDateCalc();
}

function runDateCalc() {
    let D1 = appDates.dateFrom; 
    let D2 = appDates.dateTo;
    
    let fromEl = document.getElementById('dateFromDisplay');
    if(fromEl) fromEl.innerText = D1.toLocaleDateString('en-GB');
    
    let toEl = document.getElementById('dateToDisplay');
    if(toEl) toEl.innerText = D2.toLocaleDateString('en-GB');
    
    if (D1 > D2) { let temp = D1; D1 = D2; D2 = temp; }
    
    let y = D2.getFullYear() - D1.getFullYear(); 
    let m = D2.getMonth() - D1.getMonth(); 
    let d = D2.getDate() - D1.getDate();
    
    if (d < 0) { m--; d += new Date(D2.getFullYear(), D2.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    
    const totalDays = Math.floor((Date.UTC(D2.getFullYear(), D2.getMonth(), D2.getDate()) - Date.UTC(D1.getFullYear(), D1.getMonth(), D1.getDate())) / 86400000);
    
    document.getElementById('dateDiffMain').innerText = totalDays; 
    
    let subText = [];
    if(y > 0) subText.push(`${y} years`); 
    if(m > 0) subText.push(`${m} months`); 
    if(d > 0 || subText.length === 0) subText.push(`${d} days`);
    document.getElementById('dateDiffSub').innerText = subText.join(", "); 
    
    document.getElementById('dateSumWeeks').innerText = Math.floor(totalDays / 7); 
    document.getElementById('dateSumHours').innerText = totalDays * 24; 
    document.getElementById('dateSumMins').innerText = totalDays * 1440;
}

function shareDateCard() {
    const card = document.getElementById('dateShareCard');
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Date.png", { type: "image/png" });
            const shareData = { title: 'Date Difference', text: 'Check out this Date calculation from Meraj Calculator!', files: [file] };
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => { downloadImage(blob, "Meraj_Date.png"); });
            } else { downloadImage(blob, "Meraj_Date.png"); alert("Image Saved to Downloads!"); }
        });
    });
}

/* --- Wheel Picker Logic (100% Cache Bypass & Bottom Sheet Fix) --- */
function ensureWheelPickerModal() {
    let oldModal = document.getElementById('wheelPickerModal');
    if (oldModal) oldModal.remove();

    let dpModal = document.createElement('div'); 
    dpModal.id = 'wheelPickerModal'; 
    dpModal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:99999; flex-direction:column; justify-content:flex-end; align-items:center; padding:0; margin:0;';

    dpModal.innerHTML = `
        <style>
            /* ✨ CURRENCY MODAL JAISA DESIGN YAHAN HAI ✨ */
            #wheelPickerModal .wheel-picker-container { 
                background: var(--bg-main, #ffffff); 
                width: 100%; 
                border-radius: 28px 28px 0 0; 
                /* Currency modal jaisi moti blue line upar */
                border-top: 6px solid var(--primary, #007bff); 
                padding: 24px 20px 30px 20px; 
                box-shadow: 0 -5px 25px rgba(0,0,0,0.15); 
                box-sizing: border-box; 
                animation: slideUp 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); 
                margin: 0; 
            }
            #wheelPickerModal .wp-title { text-align: center; font-size: 1.3rem; font-weight: 600; margin-bottom: 20px; color: var(--text-main, #222); }
            #wheelPickerModal .wp-wheels { display: flex; justify-content: space-between; height: 180px; position: relative; overflow: hidden; }
            
            #wheelPickerModal .wp-highlight { position: absolute; top: 65px; left: 0; width: 100%; height: 50px; border-top: 2px solid var(--primary, #007bff); border-bottom: 2px solid var(--primary, #007bff); background: rgba(0, 123, 255, 0.05); pointer-events: none; }
            
            #wheelPickerModal .wp-col { flex: 1; height: 100%; overflow-y: auto; scroll-snap-type: y mandatory; -ms-overflow-style: none; scrollbar-width: none; text-align: center; }
            #wheelPickerModal .wp-col::-webkit-scrollbar { display: none; }
            #wheelPickerModal .wp-item { height: 50px; line-height: 50px; font-size: 1.15rem; font-weight: 500; color: var(--text-muted, #999); scroll-snap-align: center; transition: all 0.2s; }
            #wheelPickerModal .wp-spacer { height: 65px; }
            
            /* Currency Modal jaise bade aur safe buttons */
            #wheelPickerModal .wp-actions { display: flex; gap: 15px; margin-top: 20px; }
            #wheelPickerModal .wp-btn { flex: 1; padding: 16px; border: none; border-radius: 16px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: transform 0.1s; }
            #wheelPickerModal .wp-btn-cancel { background: var(--bg-sec, #f1f3f4); color: var(--text-main, #333); }
            #wheelPickerModal .wp-btn-ok { background: var(--primary, #007bff); color: #ffffff; }
            #wheelPickerModal .wp-btn:active { transform: scale(0.96); }
            
            @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        </style>
        
        <div class="wheel-picker-container">
            <div class="wp-title" id="wpTitle">Select Date</div>
            <div class="wp-wheels">
                <div class="wp-highlight"></div>
                <div class="wp-col" id="wpDay" onscroll="onWheelScroll('wpDay')"></div>
                <div class="wp-col" id="wpMonth" onscroll="onWheelScroll('wpMonth')"></div>
                <div class="wp-col" id="wpYear" onscroll="onWheelScroll('wpYear')"></div>
            </div>
            <div class="wp-actions">
                <button class="wp-btn wp-btn-cancel" onclick="closeWheelPicker()">Cancel</button>
                <button class="wp-btn wp-btn-ok" onclick="saveWheelPicker()">OK</button>
            </div>
        </div>
    `;
    document.body.appendChild(dpModal);
    
    let yHtml = '<div class="wp-spacer"></div>'; 
    for(let i = 1900; i <= 2100; i++) yHtml += `<div class="wp-item" data-val="${i}">${i}</div>`; 
    yHtml += '<div class="wp-spacer"></div>'; 
    document.getElementById('wpYear').innerHTML = yHtml;
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
    let mHtml = '<div class="wp-spacer"></div>';
    months.forEach((m, idx) => mHtml += `<div class="wp-item" data-val="${idx}">${m}</div>`); 
    mHtml += '<div class="wp-spacer"></div>'; 
    document.getElementById('wpMonth').innerHTML = mHtml;
}

function populateWheelDays(year, month) {
    let daysInMonth = new Date(year, parseInt(month) + 1, 0).getDate(); 
    let dHtml = '<div class="wp-spacer"></div>';
    for(let i = 1; i <= daysInMonth; i++) { 
        let padD = i < 10 ? '0'+i : i; 
        dHtml += `<div class="wp-item" data-val="${i}">${padD}</div>`; 
    }
    dHtml += '<div class="wp-spacer"></div>'; 
    document.getElementById('wpDay').innerHTML = dHtml;
}

function populateWheelDays(year, month) {
    let daysInMonth = new Date(year, parseInt(month) + 1, 0).getDate(); 
    let dHtml = '<div class="wp-spacer" style="height:65px;"></div>';
    for(let i = 1; i <= daysInMonth; i++) { 
        let padD = i < 10 ? '0'+i : i; 
        dHtml += `<div class="wp-item" data-val="${i}">${padD}</div>`; 
    }
    dHtml += '<div class="wp-spacer" style="height:65px;"></div>'; 
    document.getElementById('wpDay').innerHTML = dHtml;
}

let dateScrollTimeouts = {}; 

function onWheelScroll(colId) {
    clearTimeout(dateScrollTimeouts[colId]);
    dateScrollTimeouts[colId] = setTimeout(() => {
        let col = document.getElementById(colId); 
        if(!col) return;
        
        let items = col.querySelectorAll('.wp-item'); 
        let index = Math.round(col.scrollTop / 50);
        
        items.forEach((item, i) => { 
            if (i === index) {
                // ✨ 100% BLUE COLOR FIX (Direct Hex Code)
                item.style.color = '#007bff'; 
                item.style.fontSize = '1.4rem'; 
                item.style.fontWeight = 'bold'; 
            } else {
                // Baaki halke grey numbers
                item.style.color = '#999999'; 
                item.style.fontSize = '1.15rem'; 
                item.style.fontWeight = '500'; 
            }
        });
        
        if(navigator.vibrate) navigator.vibrate(10); 
        
        if(colId === 'wpMonth' || colId === 'wpYear') { 
            let y = getWheelVal('wpYear'); 
            let m = getWheelVal('wpMonth'); 
            let currentDay = getWheelVal('wpDay'); 
            if(y !== null && m !== null) { 
                populateWheelDays(y, m); 
                setWheelVal('wpDay', currentDay || 1); 
            } 
        }
    }, 50);
}

function getWheelVal(colId) { 
    let col = document.getElementById(colId); 
    let items = col.querySelectorAll('.wp-item'); 
    let index = Math.round(col.scrollTop / 50); 
    return items[index] ? items[index].getAttribute('data-val') : null; 
}

function setWheelVal(colId, val) { 
    let col = document.getElementById(colId); 
    let items = col.querySelectorAll('.wp-item'); 
    for(let i = 0; i < items.length; i++) { 
        if(items[i].getAttribute('data-val') == val) { 
            col.scrollTop = i * 50; 
            onWheelScroll(colId); 
            break; 
        } 
    } 
}

function openWheelPicker(mode, title) { 
    currentPickerMode = mode; 
    document.getElementById('wpTitle').innerText = title; 
    let targetDate = appDates[mode]; 
    populateWheelDays(targetDate.getFullYear(), targetDate.getMonth()); 
    document.getElementById('wheelPickerModal').style.display = 'flex'; 
    setTimeout(() => { 
        setWheelVal('wpYear', targetDate.getFullYear()); 
        setWheelVal('wpMonth', targetDate.getMonth()); 
        setWheelVal('wpDay', targetDate.getDate()); 
    }, 10); 
}

function closeWheelPicker() { 
    document.getElementById('wheelPickerModal').style.display = 'none'; 
}

function saveWheelPicker() { 
    let d = getWheelVal('wpDay'); 
    let m = getWheelVal('wpMonth'); 
    let y = getWheelVal('wpYear'); 
    appDates[currentPickerMode] = new Date(y, m, d); 
    closeWheelPicker(); 
    runAgeCalc(); 
    runDateCalc(); 
}


/* ==========================================
   2. BMI CALCULATOR (MI-STYLE & SHARE)
   ========================================== */
let bmiState = { 
    activeField: 'weight', 
    weightVal: '0', 
    heightVal: '0',
    weightUnit: 'Kilograms',
    heightUnit: 'Centimeters'
};

function openBmiMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('bmiToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">BMI</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="bmiInputContainer" class="bmi-input-area light">
                <div class="bmi-row light active" id="bmiRowWeight" onclick="activateBmiInput('weight')">
                    <div class="bmi-label-wrap" onclick="openBmiUnitModal('weight', event)">
                        <span class="bmi-label light">Weight</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="bmiValWeight">0</span>
                        <span class="bmi-unit light" id="bmiUnitWeight">Kilograms</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="bmiRowHeight" onclick="activateBmiInput('height')">
                    <div class="bmi-label-wrap" onclick="openBmiUnitModal('height', event)">
                        <span class="bmi-label light">Height</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="bmiValHeight">0</span>
                        <span class="bmi-unit light" id="bmiUnitHeight">Centimeters</span>
                    </div>
                </div>
            </div>

            <div id="bmiKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="bmiType('7')">7</button>
                <button class="bmi-k-btn light" onclick="bmiType('8')">8</button>
                <button class="bmi-k-btn light" onclick="bmiType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="bmiClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="bmiType('4')">4</button>
                <button class="bmi-k-btn light" onclick="bmiType('5')">5</button>
                <button class="bmi-k-btn light" onclick="bmiType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="bmiBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="bmiType('1')">1</button>
                <button class="bmi-k-btn light" onclick="bmiType('2')">2</button>
                <button class="bmi-k-btn light" onclick="bmiType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateBmi()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="bmiType('0')">0</button>
                <button class="bmi-k-btn light" onclick="bmiType('.')">.</button>
            </div>

            <div id="bmiResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="bmiShareCard">
                    <div class="bmi-score-row">
                        <span class="bmi-res-num" id="finalBmiScore">0.0</span>
                        <div class="bmi-res-label-col">
                            <span class="bmi-text">BMI</span>
                            <span class="bmi-res-status" id="finalBmiCat">Normal</span>
                        </div>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div class="bmi-info-title">Information</div>
                    
                    <div class="bmi-scale-wrap">
                        <div class="bmi-scale-labels">
                            <span class="txt-blue">Underweight</span>
                            <span class="txt-green">Normal</span>
                            <span class="txt-red">Overweight</span>
                        </div>
                        <div class="bmi-scale-bar">
                            <div class="scale-blue"></div>
                            <div class="scale-green"></div>
                            <div class="scale-red"></div>
                        </div>
                        <div class="bmi-scale-vals">
                            <span>16.0</span><span>18.5</span><span>25.0</span><span>40.0</span>
                        </div>
                    </div>
                    
                    <div class="bmi-powered-text">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="bmiBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareBmiCard()">Share</button>
            </div>

            <div id="bmiUnitModal" class="bmi-modal-overlay">
                <div class="bmi-modal-content">
                    <div class="bmi-modal-title" id="bmiModalTitle">Height</div>
                    <div id="bmiModalOptionsList"></div>
                    <button class="bmi-modal-cancel" onclick="closeBmiUnitModal()">Cancel</button>
                </div>
            </div>

        </div>`;
    openGenericTool('bmiToolPage', 'BMI', html);
    activateBmiInput('weight');
}

/* --- Input & Keypad Logic --- */
function activateBmiInput(field) { 
    bmiState.activeField = field; 
    
    // Highlight Active Row
    document.getElementById('bmiRowWeight').classList.remove('active'); 
    document.getElementById('bmiRowHeight').classList.remove('active'); 
    if(field === 'weight') document.getElementById('bmiRowWeight').classList.add('active'); 
    else document.getElementById('bmiRowHeight').classList.add('active'); 
    
    // Switch to Keypad View if Result was showing
    document.getElementById('bmiResultArea').style.display = 'none'; 
    document.getElementById('bmiBottomBar').style.display = 'none'; 
    document.getElementById('bmiKeypad').style.display = 'grid'; 
}

function bmiType(val) { 
    let current = bmiState.activeField === 'weight' ? bmiState.weightVal : bmiState.heightVal; 
    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 4) return; 
        current += val; 
    } 
    if (bmiState.activeField === 'weight') bmiState.weightVal = current; 
    else bmiState.heightVal = current; 
    
    document.getElementById('bmiValWeight').innerText = bmiState.weightVal; 
    document.getElementById('bmiValHeight').innerText = bmiState.heightVal; 
}

function bmiBackspace() { 
    let current = bmiState.activeField === 'weight' ? bmiState.weightVal : bmiState.heightVal; 
    current = current.slice(0, -1); 
    if(current === '') current = '0'; 
    if (bmiState.activeField === 'weight') bmiState.weightVal = current; 
    else bmiState.heightVal = current; 
    
    document.getElementById('bmiValWeight').innerText = bmiState.weightVal; 
    document.getElementById('bmiValHeight').innerText = bmiState.heightVal; 
}

function bmiClear() { 
    bmiState.weightVal = '0'; 
    bmiState.heightVal = '0'; 
    document.getElementById('bmiValWeight').innerText = bmiState.weightVal; 
    document.getElementById('bmiValHeight').innerText = bmiState.heightVal; 
}

/* --- Unit Dropdown Logic --- */
function openBmiUnitModal(type, e) {
    e.stopPropagation(); // Prevents row click
    activateBmiInput(type);
    
    const title = document.getElementById('bmiModalTitle');
    const optionsList = document.getElementById('bmiModalOptionsList');
    let optionsHtml = '';

    if (type === 'weight') {
        title.innerText = 'Weight';
        optionsHtml += `<div class="bmi-modal-option" onclick="selectBmiUnit('weight', 'Kilograms')">Kilograms</div>`;
        optionsHtml += `<div class="bmi-modal-option" onclick="selectBmiUnit('weight', 'Pounds')">Pounds</div>`;
    } else {
        title.innerText = 'Height';
        optionsHtml += `<div class="bmi-modal-option" onclick="selectBmiUnit('height', 'Centimeters')">Centimeters</div>`;
        optionsHtml += `<div class="bmi-modal-option" onclick="selectBmiUnit('height', 'Meters')">Meters</div>`;
        optionsHtml += `<div class="bmi-modal-option" onclick="selectBmiUnit('height', 'Feet')">Feet</div>`;
        optionsHtml += `<div class="bmi-modal-option" onclick="selectBmiUnit('height', 'Inches')">Inches</div>`;
    }
    
    optionsList.innerHTML = optionsHtml;
    document.getElementById('bmiUnitModal').style.display = 'flex';
}

function selectBmiUnit(type, unit) {
    if (type === 'weight') {
        bmiState.weightUnit = unit;
        document.getElementById('bmiUnitWeight').innerText = unit;
    } else {
        bmiState.heightUnit = unit;
        document.getElementById('bmiUnitHeight').innerText = unit;
    }
    closeBmiUnitModal();
}

function closeBmiUnitModal() {
    document.getElementById('bmiUnitModal').style.display = 'none';
}

/* --- BMI Calculation Math (Triggered by 'GO') --- */
function calculateBmi() {
    let w = parseFloat(bmiState.weightVal); 
    let h = parseFloat(bmiState.heightVal);
    if(w === 0 || h === 0 || isNaN(w) || isNaN(h)) {
        alert("Please enter valid weight and height.");
        return;
    }

    // Convert Weight to KG
    let weightInKg = w;
    if (bmiState.weightUnit === 'Pounds') weightInKg = w * 0.453592;

    // Convert Height to Meters
    let heightInMeters = h;
    if (bmiState.heightUnit === 'Centimeters') heightInMeters = h / 100;
    else if (bmiState.heightUnit === 'Feet') heightInMeters = h * 0.3048; // Treats 5.2 as 5.2 feet
    else if (bmiState.heightUnit === 'Inches') heightInMeters = h * 0.0254;

    let bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
    
    let cat = ''; let catClass = '';
    if(bmi < 18.5) { cat = 'Underweight'; catClass = 'txt-blue'; } 
    else if(bmi >= 18.5 && bmi < 25) { cat = 'Normal'; catClass = 'txt-green'; } 
    else if(bmi >= 25 && bmi < 30) { cat = 'Overweight'; catClass = 'txt-red'; } 
    else { cat = 'Obese'; catClass = 'txt-red'; }

    // Update Card UI
    document.getElementById('finalBmiScore').innerText = bmi; 
    document.getElementById('finalBmiCat').innerText = cat; 
    document.getElementById('finalBmiCat').className = 'bmi-res-status ' + catClass;
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('bmiKeypad').style.display = 'none'; 
    document.getElementById('bmiResultArea').style.display = 'flex'; 
    document.getElementById('bmiBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareBmiCard() {
    const card = document.getElementById('bmiShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_BMI.png", { type: "image/png" });
            const shareData = { 
                title: 'My BMI Result', 
                text: 'Check out my BMI result from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_BMI.png");
                });
            } else {
                downloadImage(blob, "Meraj_BMI.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}


/* ==========================================
   3. EMI CALCULATOR (MI-STYLE, DUAL WHEEL PICKER & SHARE)
   ========================================== */
let emiState = { 
    activeField: 'principal', // 'principal', 'rate'
    principalVal: '0', 
    rateVal: '0',
    tenureYears: 1,  // Default 1 Year
    tenureMonths: 0  // Default 0 Months
};

function openEMIMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('emiToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">EMI Calculator</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="emiInputContainer" class="bmi-input-area light" style="padding: 10px 0;">
                
                <div class="bmi-row light active" id="emiRowPrincipal" onclick="activateEmiInput('principal')" style="padding: 10px 30px;">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">Principal Amount</span>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="emiValPrincipal" style="font-size:2.8rem;">0</span>
                        <span class="bmi-unit light">₹ (Rupees)</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="emiRowRate" onclick="activateEmiInput('rate')" style="padding: 10px 30px;">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">Interest Rate</span>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="emiValRate" style="font-size:2.8rem;">0</span>
                        <span class="bmi-unit light">% (Yearly)</span>
                    </div>
                </div>

                <div class="bmi-row light" id="emiRowTenure" onclick="openEmiDurationModal()" style="padding: 15px 30px; border-bottom: none;">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold; color:#333;">Duration</span>
                    </div>
                    <div class="bmi-val-col light" style="flex-direction: row; align-items: center; gap: 5px;">
                        <span id="emiDurationText" style="font-size: 1.1rem; color: var(--primary); font-weight: 500;">1 year and 0 month</span>
                        <i class="fas fa-chevron-right" style="color: #ccc; font-size: 0.9rem;"></i>
                    </div>
                </div>
            </div>

            <div id="emiKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="emiType('7')">7</button>
                <button class="bmi-k-btn light" onclick="emiType('8')">8</button>
                <button class="bmi-k-btn light" onclick="emiType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="emiClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="emiType('4')">4</button>
                <button class="bmi-k-btn light" onclick="emiType('5')">5</button>
                <button class="bmi-k-btn light" onclick="emiType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="emiBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="emiType('1')">1</button>
                <button class="bmi-k-btn light" onclick="emiType('2')">2</button>
                <button class="bmi-k-btn light" onclick="emiType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateEmi()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="emiType('0')">0</button>
                <button class="bmi-k-btn light" onclick="emiType('.')">.</button>
            </div>

            <div id="emiResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="emiShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-text" style="color:#555; font-size:1.2rem;">Monthly EMI</span>
                        <span class="bmi-res-num" id="finalEmiScore" style="font-size:3.5rem; word-break:break-all; text-align:center; color:var(--primary);">₹0</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem; color:#555;">
                        <span>Principal Amount:</span> <span id="resEmiPrin" style="font-weight:bold; color:#333;">₹0</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem; color:#555;">
                        <span>Total Interest:</span> <span id="resEmiInt" style="font-weight:bold; color:#f44336;">₹0</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:1.2rem; color:#333; font-weight:bold;">
                        <span>Total Payment:</span> <span id="resEmiTotal" style="color:#4caf50;">₹0</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:25px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="emiBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareEmiCard()">Share</button>
            </div>

            <div id="emiDurationModal" class="wheel-picker-overlay">
                <div class="wheel-picker-container" style="border-radius: 20px 20px 0 0; padding-bottom: 20px;">
                    <div class="wp-title" style="text-align: center; margin-bottom: 10px; font-size: 1.2rem;">Duration</div>
                    
                    <div style="display: flex; justify-content: space-around; color: #888; font-size: 0.9rem; margin-bottom: -10px; z-index: 10; position: relative;">
                        <span>Years</span>
                        <span>Months</span>
                    </div>

                    <div class="wp-wheels" style="height: 180px;">
                        <div class="wp-highlight" style="top: 65px; height: 50px;"></div>
                        <div class="wp-col" id="wpEmiYears" onscroll="onEmiWheelScroll('wpEmiYears')"></div>
                        <div class="wp-col" id="wpEmiMonths" onscroll="onEmiWheelScroll('wpEmiMonths')"></div>
                    </div>
                    
                    <div class="wp-actions" style="gap: 10px; margin-top: 15px;">
                        <button class="wp-btn wp-btn-cancel" style="background: #f1f3f4; color: #333;" onclick="closeEmiDurationModal()">Cancel</button>
                        <button class="wp-btn wp-btn-ok" style="background: var(--primary); color: #fff;" onclick="saveEmiDuration()">OK</button>
                    </div>
                </div>
            </div>

        </div>`;
    openGenericTool('emiToolPage', 'EMI Calculator', html);
    activateEmiInput('principal');
    initEmiDurationWheels();
}

/* --- Input & Keypad Logic --- */
function activateEmiInput(field) { 
    emiState.activeField = field; 
    
    document.getElementById('emiRowPrincipal').classList.remove('active'); 
    document.getElementById('emiRowRate').classList.remove('active'); 
    
    if(field === 'principal') document.getElementById('emiRowPrincipal').classList.add('active'); 
    else if(field === 'rate') document.getElementById('emiRowRate').classList.add('active'); 
    
    document.getElementById('emiResultArea').style.display = 'none'; 
    document.getElementById('emiBottomBar').style.display = 'none'; 
    document.getElementById('emiKeypad').style.display = 'grid'; 
}

function emiType(val) { 
    let current;
    if (emiState.activeField === 'principal') current = emiState.principalVal;
    else if (emiState.activeField === 'rate') current = emiState.rateVal;
    else return; // Don't type when tenure is clicked

    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 8) return; 
        current += val; 
    } 

    if (emiState.activeField === 'principal') { emiState.principalVal = current; document.getElementById('emiValPrincipal').innerText = current; }
    else if (emiState.activeField === 'rate') { emiState.rateVal = current; document.getElementById('emiValRate').innerText = current; }
}

function emiBackspace() { 
    let current;
    if (emiState.activeField === 'principal') current = emiState.principalVal;
    else if (emiState.activeField === 'rate') current = emiState.rateVal;
    else return;

    current = current.slice(0, -1); 
    if(current === '') current = '0'; 

    if (emiState.activeField === 'principal') { emiState.principalVal = current; document.getElementById('emiValPrincipal').innerText = current; }
    else if (emiState.activeField === 'rate') { emiState.rateVal = current; document.getElementById('emiValRate').innerText = current; }
}

function emiClear() { 
    emiState.principalVal = '0'; 
    emiState.rateVal = '0'; 
    document.getElementById('emiValPrincipal').innerText = '0'; 
    document.getElementById('emiValRate').innerText = '0'; 
}

/* ============================================================
   --- EMI Dual Wheel Picker Logic (Premium Bottom Sheet Fix) ---
   ============================================================ */

// 1. NAYA FUNCTION: Ye ekdum fresh aur blue theme wala dabba banayega
function ensureEmiDurationModal() {
    let oldModal = document.getElementById('emiDurationModal');
    if (oldModal) oldModal.remove(); // Purana latakta hua dabba hata do

    let emiModal = document.createElement('div');
    emiModal.id = 'emiDurationModal';
    emiModal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:99999; flex-direction:column; justify-content:flex-end; align-items:center; padding:0; margin:0;';

    emiModal.innerHTML = `
        <style>
            #emiDurationModal .wheel-picker-container { background: var(--bg-main, #ffffff); width: 100%; border-radius: 28px 28px 0 0; border-top: 6px solid var(--primary, #007bff); padding: 24px 20px 30px 20px; box-shadow: 0 -5px 25px rgba(0,0,0,0.15); box-sizing: border-box; animation: slideUp 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); margin: 0; }
            #emiDurationModal .wp-title { text-align: center; font-size: 1.3rem; font-weight: 600; margin-bottom: 15px; color: var(--text-main, #222); }
            #emiDurationModal .wp-labels { display: flex; justify-content: space-around; width: 100%; margin-bottom: 5px; color: var(--text-muted, #999); font-size: 0.95rem; font-weight: 600; }
            #emiDurationModal .wp-wheels { display: flex; justify-content: space-between; height: 180px; position: relative; overflow: hidden; }
            #emiDurationModal .wp-highlight { position: absolute; top: 65px; left: 0; width: 100%; height: 50px; border-top: 2px solid var(--primary, #007bff); border-bottom: 2px solid var(--primary, #007bff); background: rgba(0, 123, 255, 0.05); pointer-events: none; }
            #emiDurationModal .wp-col { flex: 1; height: 100%; overflow-y: auto; scroll-snap-type: y mandatory; -ms-overflow-style: none; scrollbar-width: none; text-align: center; }
            #emiDurationModal .wp-col::-webkit-scrollbar { display: none; }
            #emiDurationModal .wp-item { height: 50px; line-height: 50px; font-size: 1.15rem; font-weight: 500; color: var(--text-muted, #999); scroll-snap-align: center; transition: all 0.2s; }
            #emiDurationModal .wp-spacer { height: 65px; }
            #emiDurationModal .wp-actions { display: flex; gap: 15px; margin-top: 20px; }
            #emiDurationModal .wp-btn { flex: 1; padding: 16px; border: none; border-radius: 16px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: transform 0.1s; }
            #emiDurationModal .wp-btn-cancel { background: var(--bg-sec, #f1f3f4); color: var(--text-main, #333); }
            #emiDurationModal .wp-btn-ok { background: var(--primary, #007bff); color: #ffffff; }
            #emiDurationModal .wp-btn:active { transform: scale(0.96); }
            @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        </style>
        
        <div class="wheel-picker-container">
            <div class="wp-title">Duration</div>
            <div class="wp-labels">
                <span>Years</span>
                <span>Months</span>
            </div>
            <div class="wp-wheels">
                <div class="wp-highlight"></div>
                <div class="wp-col" id="wpEmiYears" onscroll="onEmiWheelScroll('wpEmiYears')"></div>
                <div class="wp-col" id="wpEmiMonths" onscroll="onEmiWheelScroll('wpEmiMonths')"></div>
            </div>
            <div class="wp-actions">
                <button class="wp-btn wp-btn-cancel" onclick="closeEmiDurationModal()">Cancel</button>
                <button class="wp-btn wp-btn-ok" onclick="saveEmiDuration()">OK</button>
            </div>
        </div>
    `;
    document.body.appendChild(emiModal);
    initEmiDurationWheels(); 
}

// 2. Wheel mein numbers bharna
function initEmiDurationWheels() {
    let yHtml = '<div class="wp-spacer"></div>'; 
    for(let i = 0; i <= 30; i++) yHtml += `<div class="wp-item" data-val="${i}">${i}</div>`; 
    yHtml += '<div class="wp-spacer"></div>'; 
    document.getElementById('wpEmiYears').innerHTML = yHtml;

    let mHtml = '<div class="wp-spacer"></div>'; 
    for(let i = 0; i <= 11; i++) mHtml += `<div class="wp-item" data-val="${i}">${i}</div>`; 
    mHtml += '<div class="wp-spacer"></div>'; 
    document.getElementById('wpEmiMonths').innerHTML = mHtml;
}

// 3. Wheel ghoomne ka effect aur Number Colour
let emiScrollTimeouts = {}; 

function onEmiWheelScroll(colId) {
    clearTimeout(emiScrollTimeouts[colId]);
    emiScrollTimeouts[colId] = setTimeout(() => {
        let col = document.getElementById(colId); 
        if(!col) return;

        let items = col.querySelectorAll('.wp-item'); 
        let index = Math.round(col.scrollTop / 50); 
        
        items.forEach((item, i) => { 
            if (i === index) {
                // ✨ 100% BLUE COLOR FIX (Direct Hex Code)
                item.style.color = '#007bff'; 
                item.style.fontSize = '1.4rem'; 
                item.style.fontWeight = 'bold'; 
            } else {
                // Baaki halke grey numbers
                item.style.color = '#999999'; 
                item.style.fontSize = '1.15rem'; 
                item.style.fontWeight = '500'; 
            }
        });
        
        if(navigator.vibrate) navigator.vibrate(10); 
    }, 50);
}

function getEmiWheelVal(colId) { 
    let col = document.getElementById(colId); 
    let items = col.querySelectorAll('.wp-item'); 
    let index = Math.round(col.scrollTop / 50); 
    return items[index] ? parseInt(items[index].getAttribute('data-val')) : 0; 
}

function setEmiWheelVal(colId, val) { 
    let col = document.getElementById(colId); 
    let items = col.querySelectorAll('.wp-item'); 
    for(let i = 0; i < items.length; i++) { 
        if(items[i].getAttribute('data-val') == val) { 
            col.scrollTop = i * 50; 
            onEmiWheelScroll(colId); 
            break; 
        } 
    } 
}

// 4. Modal Khona
function openEmiDurationModal() {
    ensureEmiDurationModal(); // Har baar fresh dabba banayega jisse koi design break na ho

    let rPrincipal = document.getElementById('emiRowPrincipal');
    if (rPrincipal) rPrincipal.classList.remove('active'); 
    
    let rRate = document.getElementById('emiRowRate');
    if (rRate) rRate.classList.remove('active'); 
    
    document.getElementById('emiDurationModal').style.display = 'flex';
    
    setTimeout(() => { 
        if (typeof emiState !== 'undefined') {
            setEmiWheelVal('wpEmiYears', emiState.tenureYears || 0); 
            setEmiWheelVal('wpEmiMonths', emiState.tenureMonths || 0); 
        }
    }, 10);
}

// 5. Modal Band karna
function closeEmiDurationModal() {
    let modal = document.getElementById('emiDurationModal');
    if(modal) modal.style.display = 'none';
}

// 6. Value Save karna
function saveEmiDuration() {
    let y = getEmiWheelVal('wpEmiYears');
    let m = getEmiWheelVal('wpEmiMonths');
    
    if (y === 0 && m === 0) {
        alert("Duration cannot be zero.");
        return;
    }

    if (typeof emiState !== 'undefined') {
        emiState.tenureYears = y;
        emiState.tenureMonths = m;
    }
    
    let yearText = y === 1 ? 'year' : 'years';
    let monthText = m === 1 ? 'month' : 'months';
    
    let textEl = document.getElementById('emiDurationText');
    if (textEl) textEl.innerText = `${y} ${yearText} and ${m} ${monthText}`;
    
    closeEmiDurationModal();
}

/* --- EMI Calculation Math (Triggered by 'GO') --- */
function calculateEmi() {
    let p = parseFloat(emiState.principalVal) || 0; 
    let r = parseFloat(emiState.rateVal) || 0;
    
    if (p === 0 || r === 0) return alert("Please enter Principal and Rate.");

    // Total months calculation
    let n = (emiState.tenureYears * 12) + emiState.tenureMonths;
    let rMon = r / 12 / 100;
    
    // EMI Formula
    let emi = p * rMon * (Math.pow(1 + rMon, n)) / (Math.pow(1 + rMon, n) - 1);
    let totPay = emi * n;
    let totInt = totPay - p;

    // Update Result Card UI
    document.getElementById('finalEmiScore').innerText = '₹' + Math.round(emi).toLocaleString('en-IN'); 
    document.getElementById('resEmiPrin').innerText = '₹' + Math.round(p).toLocaleString('en-IN');
    document.getElementById('resEmiInt').innerText = '₹' + Math.round(totInt).toLocaleString('en-IN');
    document.getElementById('resEmiTotal').innerText = '₹' + Math.round(totPay).toLocaleString('en-IN');
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('emiKeypad').style.display = 'none'; 
    document.getElementById('emiResultArea').style.display = 'flex'; 
    document.getElementById('emiBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareEmiCard() {
    const card = document.getElementById('emiShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_EMI.png", { type: "image/png" });
            const shareData = { 
                title: 'EMI Calculation', 
                text: 'Check out my EMI details from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_EMI.png");
                });
            } else {
                downloadImage(blob, "Meraj_EMI.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}


/* ==========================================
   4. DISCOUNT CALCULATOR (MI-STYLE & SHARE)
   ========================================== */
let discState = { 
    activeField: 'price', // 'price', 'perc'
    priceVal: '0', 
    percVal: '0' 
};

function openDiscountMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('discToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Discount</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="discInputContainer" class="bmi-input-area light" style="padding: 10px 0; border-bottom:none;">
                
                <div class="bmi-row light active" id="discRowPrice" onclick="activateDiscInput('price')" style="padding: 15px 30px;">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">Original Price</span>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="discValPrice" style="font-size:3.2rem;">0</span>
                        <span class="bmi-unit light">₹ (Rupees)</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="discRowPerc" onclick="activateDiscInput('perc')" style="padding: 15px 30px; border-bottom:none;">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">Discount Rate</span>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="discValPerc" style="font-size:3.2rem; color:#4caf50;">0</span>
                        <span class="bmi-unit light" style="color:#4caf50; font-weight:bold;">% (Percent)</span>
                    </div>
                </div>
            </div>

            <div id="discKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="discType('7')">7</button>
                <button class="bmi-k-btn light" onclick="discType('8')">8</button>
                <button class="bmi-k-btn light" onclick="discType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="discClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="discType('4')">4</button>
                <button class="bmi-k-btn light" onclick="discType('5')">5</button>
                <button class="bmi-k-btn light" onclick="discType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="discBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="discType('1')">1</button>
                <button class="bmi-k-btn light" onclick="discType('2')">2</button>
                <button class="bmi-k-btn light" onclick="discType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateDisc()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="discType('0')">0</button>
                <button class="bmi-k-btn light" onclick="discType('.')">.</button>
            </div>

            <div id="discResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="discShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-text" style="color:#555; font-size:1.2rem;">Final Price</span>
                        <span class="bmi-res-num" id="finalDiscScore" style="font-size:3.8rem; word-break:break-all; text-align:center; color:var(--primary);">₹0</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem; color:#555;">
                        <span>Original Price:</span> <span id="resDiscOrig" style="font-weight:bold; color:#333;">₹0</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem; color:#555;">
                        <span>Discount Applied:</span> <span id="resDiscRate" style="font-weight:bold; color:var(--primary);">0%</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:1.3rem; color:#4caf50; font-weight:bold; margin-top:10px;">
                        <span>You Saved:</span> <span id="resDiscSaved">₹0</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:25px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="discBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareDiscCard()">Share</button>
            </div>

        </div>`;
    openGenericTool('discToolPage', 'Discount', html);
    activateDiscInput('price');
}

/* --- Input & Keypad Logic --- */
function activateDiscInput(field) { 
    discState.activeField = field; 
    
    document.getElementById('discRowPrice').classList.remove('active'); 
    document.getElementById('discRowPerc').classList.remove('active'); 
    
    if(field === 'price') document.getElementById('discRowPrice').classList.add('active'); 
    else document.getElementById('discRowPerc').classList.add('active'); 
    
    document.getElementById('discResultArea').style.display = 'none'; 
    document.getElementById('discBottomBar').style.display = 'none'; 
    document.getElementById('discKeypad').style.display = 'grid'; 
}

function discType(val) { 
    let current;
    if (discState.activeField === 'price') current = discState.priceVal;
    else current = discState.percVal;

    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 9) return; 
        current += val; 
    } 

    if (discState.activeField === 'price') { 
        discState.priceVal = current; 
        document.getElementById('discValPrice').innerText = current; 
    } else { 
        // Logic to prevent percentage from going over 100
        if(parseFloat(current) > 100) current = '100';
        discState.percVal = current; 
        document.getElementById('discValPerc').innerText = current; 
    }
}

function discBackspace() { 
    let current;
    if (discState.activeField === 'price') current = discState.priceVal;
    else current = discState.percVal;

    current = current.slice(0, -1); 
    if(current === '') current = '0'; 

    if (discState.activeField === 'price') { 
        discState.priceVal = current; 
        document.getElementById('discValPrice').innerText = current; 
    } else { 
        discState.percVal = current; 
        document.getElementById('discValPerc').innerText = current; 
    }
}

function discClear() { 
    if (discState.activeField === 'price') {
        discState.priceVal = '0'; 
        document.getElementById('discValPrice').innerText = '0';
    } else {
        discState.percVal = '0'; 
        document.getElementById('discValPerc').innerText = '0';
    }
}

/* --- Discount Calculation Math (Triggered by 'GO') --- */
function calculateDisc() {
    let p = parseFloat(discState.priceVal) || 0; 
    let d = parseFloat(discState.percVal) || 0;
    
    if (p === 0) return alert("Please enter the Original Price.");

    let saved = (p * d) / 100;
    let final = p - saved;

    // Update Result Card UI
    document.getElementById('finalDiscScore').innerText = '₹' + final.toLocaleString('en-IN', {minimumFractionDigits: 0, maximumFractionDigits: 2}); 
    document.getElementById('resDiscOrig').innerText = '₹' + p.toLocaleString('en-IN', {minimumFractionDigits: 0, maximumFractionDigits: 2});
    document.getElementById('resDiscRate').innerText = d + '%';
    document.getElementById('resDiscSaved').innerText = '₹' + saved.toLocaleString('en-IN', {minimumFractionDigits: 0, maximumFractionDigits: 2});
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('discKeypad').style.display = 'none'; 
    document.getElementById('discResultArea').style.display = 'flex'; 
    document.getElementById('discBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareDiscCard() {
    const card = document.getElementById('discShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Discount.png", { type: "image/png" });
            const shareData = { 
                title: 'Discount Calculation', 
                text: 'Check out this Discount calculation from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_Discount.png");
                });
            } else {
                downloadImage(blob, "Meraj_Discount.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}


/* ==========================================
   5. GST CALCULATOR (MI-STYLE, TOGGLE & SHARE)
   ========================================== */
let gstState = { 
    activeField: 'amount', // 'amount', 'rate'
    amountVal: '0', 
    rateVal: '18', // Default India GST rate
    mode: 'add' // 'add' or 'sub'
};

function openGSTMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('gstToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">GST Calculator</span>
                <div style="width: 40px;"></div>
            </div>

            <div style="display: flex; background: #f0f0f0; border-radius: 30px; margin: 15px 30px 5px 30px; padding: 5px;">
                <div id="tabGstAdd" onclick="setGstMode('add')" style="flex: 1; text-align: center; padding: 10px; border-radius: 25px; background: var(--primary); color: #fff; font-weight: bold; transition: 0.3s; cursor: pointer;">+ Add GST</div>
                <div id="tabGstSub" onclick="setGstMode('sub')" style="flex: 1; text-align: center; padding: 10px; border-radius: 25px; background: transparent; color: #555; font-weight: bold; transition: 0.3s; cursor: pointer;">- Remove GST</div>
            </div>

            <div id="gstInputContainer" class="bmi-input-area light" style="padding: 10px 0; border-bottom:none;">
                
                <div class="bmi-row light active" id="gstRowAmount" onclick="activateGstInput('amount')" style="padding: 10px 30px;">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">Initial Amount</span>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="gstValAmount" style="font-size:2.8rem;">0</span>
                        <span class="bmi-unit light">₹ (Rupees)</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="gstRowRate" onclick="activateGstInput('rate')" style="padding: 10px 30px; border-bottom:none;">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">GST Rate</span>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="gstValRate" style="font-size:2.8rem;">18</span>
                        <span class="bmi-unit light">% (Percent)</span>
                    </div>
                </div>
            </div>

            <div id="gstKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="gstType('7')">7</button>
                <button class="bmi-k-btn light" onclick="gstType('8')">8</button>
                <button class="bmi-k-btn light" onclick="gstType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="gstClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="gstType('4')">4</button>
                <button class="bmi-k-btn light" onclick="gstType('5')">5</button>
                <button class="bmi-k-btn light" onclick="gstType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="gstBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="gstType('1')">1</button>
                <button class="bmi-k-btn light" onclick="gstType('2')">2</button>
                <button class="bmi-k-btn light" onclick="gstType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateGst()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="gstType('0')">0</button>
                <button class="bmi-k-btn light" onclick="gstType('.')">.</button>
            </div>

            <div id="gstResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="gstShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-text" style="color:#555; font-size:1.2rem;" id="gstNetLabel">Net Amount (Incl. GST)</span>
                        <span class="bmi-res-num" id="finalGstScore" style="font-size:3.5rem; word-break:break-all; text-align:center; color:var(--primary);">₹0</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem; color:#555;">
                        <span id="gstBaseLabel">Base Amount:</span> <span id="resGstBase" style="font-weight:bold; color:#333;">₹0</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem; color:#555;">
                        <span>GST Amount:</span> <span id="resGstTax" style="font-weight:bold; color:#f44336;">₹0</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:1.2rem; color:#333; font-weight:bold; margin-top:10px;">
                        <span>GST Rate:</span> <span id="resGstRateApplied" style="color:var(--primary);">0%</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:25px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="gstBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareGstCard()">Share</button>
            </div>

        </div>`;
    openGenericTool('gstToolPage', 'GST Calculator', html);
    activateGstInput('amount');
}

/* --- Toggle Mode (Add/Remove) Logic --- */
function setGstMode(mode) {
    gstState.mode = mode;
    let addTab = document.getElementById('tabGstAdd');
    let subTab = document.getElementById('tabGstSub');
    
    if(mode === 'add') {
        addTab.style.background = '#FF6600'; addTab.style.color = '#fff';
        subTab.style.background = 'transparent'; subTab.style.color = '#555';
    } else {
        subTab.style.background = '#FF6600'; subTab.style.color = '#fff';
        addTab.style.background = 'transparent'; addTab.style.color = '#555';
    }

    // Hide result and show keypad if user changes mode
    document.getElementById('gstResultArea').style.display = 'none'; 
    document.getElementById('gstBottomBar').style.display = 'none'; 
    document.getElementById('gstKeypad').style.display = 'grid';
}

/* --- Input & Keypad Logic --- */
function activateGstInput(field) { 
    gstState.activeField = field; 
    
    document.getElementById('gstRowAmount').classList.remove('active'); 
    document.getElementById('gstRowRate').classList.remove('active'); 
    
    if(field === 'amount') document.getElementById('gstRowAmount').classList.add('active'); 
    else document.getElementById('gstRowRate').classList.add('active'); 
    
    document.getElementById('gstResultArea').style.display = 'none'; 
    document.getElementById('gstBottomBar').style.display = 'none'; 
    document.getElementById('gstKeypad').style.display = 'grid'; 
}

function gstType(val) { 
    let current;
    if (gstState.activeField === 'amount') current = gstState.amountVal;
    else current = gstState.rateVal;

    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 9) return; // Prevent too long numbers
        current += val; 
    } 

    if (gstState.activeField === 'amount') { gstState.amountVal = current; document.getElementById('gstValAmount').innerText = current; }
    else { gstState.rateVal = current; document.getElementById('gstValRate').innerText = current; }
}

function gstBackspace() { 
    let current;
    if (gstState.activeField === 'amount') current = gstState.amountVal;
    else current = gstState.rateVal;

    current = current.slice(0, -1); 
    if(current === '') current = '0'; 

    if (gstState.activeField === 'amount') { gstState.amountVal = current; document.getElementById('gstValAmount').innerText = current; }
    else { gstState.rateVal = current; document.getElementById('gstValRate').innerText = current; }
}

function gstClear() { 
    if (gstState.activeField === 'amount') {
        gstState.amountVal = '0'; 
        document.getElementById('gstValAmount').innerText = '0';
    } else {
        gstState.rateVal = '0'; 
        document.getElementById('gstValRate').innerText = '0';
    }
}

/* --- GST Calculation Math (Triggered by 'GO') --- */
function calculateGst() {
    let amt = parseFloat(gstState.amountVal) || 0; 
    let rate = parseFloat(gstState.rateVal) || 0;
    
    if (amt === 0) return alert("Please enter an Initial Amount.");

    let tax = 0, net = 0, base = 0;
    
    if(gstState.mode === 'add') {
        // Adding GST to Base Amount
        tax = (amt * rate) / 100;
        net = amt + tax;
        base = amt;
        document.getElementById('gstNetLabel').innerText = "Net Amount (Incl. GST)";
        document.getElementById('gstBaseLabel').innerText = "Original Amount:";
    } else {
        // Removing GST from Net Amount
        base = amt / (1 + (rate / 100));
        tax = amt - base;
        net = amt;
        document.getElementById('gstNetLabel').innerText = "Original Amount (Excl. GST)";
        document.getElementById('gstBaseLabel').innerText = "Total Amount:";
    }

    // Update Result Card UI
    document.getElementById('finalGstScore').innerText = '₹' + net.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2}); 
    document.getElementById('resGstBase').innerText = '₹' + base.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('resGstTax').innerText = '₹' + tax.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('resGstRateApplied').innerText = rate + '%';
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('gstKeypad').style.display = 'none'; 
    document.getElementById('gstResultArea').style.display = 'flex'; 
    document.getElementById('gstBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareGstCard() {
    const card = document.getElementById('gstShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_GST.png", { type: "image/png" });
            const shareData = { 
                title: 'GST Calculation', 
                text: 'Check out my GST calculation from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_GST.png");
                });
            } else {
                downloadImage(blob, "Meraj_GST.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}

/* ==========================================
   6. LENGTH CONVERTER (MI-STYLE, REVERSE CALC & SHARE)
   ========================================== */
const lenRates = {
    "Millimeter": 0.001,
    "Centimeter": 0.01,
    "Meter": 1,
    "Kilometer": 1000,
    "Inch": 0.0254,
    "Foot": 0.3048,
    "Yard": 0.9144,
    "Mile": 1609.344
};

let lenState = { 
    activeField: 'from', 
    fromVal: '0', 
    toVal: '0',
    fromUnit: 'Meter',
    toUnit: 'Centimeter'
};

function openLengthMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('lenToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Length</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="lenInputContainer" class="bmi-input-area light" style="padding-top: 5px;">
                <div class="bmi-row light active" id="lenRowFrom" onclick="activateLenInput('from')">
                    <div class="bmi-label-wrap" onclick="openLenUnitModal('from', event)">
                        <span class="bmi-label light" id="lenLblFrom" style="font-weight:bold;">Meter</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="lenValFrom" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="lenRowTo" onclick="activateLenInput('to')">
                    <div class="bmi-label-wrap" onclick="openLenUnitModal('to', event)">
                        <span class="bmi-label light" id="lenLblTo" style="font-weight:bold;">Centimeter</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="lenValTo" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
            </div>

            <div id="lenKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="lenType('7')">7</button>
                <button class="bmi-k-btn light" onclick="lenType('8')">8</button>
                <button class="bmi-k-btn light" onclick="lenType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="lenClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="lenType('4')">4</button>
                <button class="bmi-k-btn light" onclick="lenType('5')">5</button>
                <button class="bmi-k-btn light" onclick="lenType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="lenBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="lenType('1')">1</button>
                <button class="bmi-k-btn light" onclick="lenType('2')">2</button>
                <button class="bmi-k-btn light" onclick="lenType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateLen()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="lenType('0')">0</button>
                <button class="bmi-k-btn light" onclick="lenType('.')">.</button>
            </div>

            <div id="lenResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="lenShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-res-num" id="finalLenScore" style="font-size:3.5rem; word-break:break-all; text-align:center; color:var(--primary);">0.00</span>
                        <span class="bmi-text" id="finalLenCode" style="color:#555; font-size:1.5rem;">Centimeter</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div class="bmi-info-title">Conversion Details</div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:1.1rem; color:#555;">
                        <span id="lenBaseText" style="font-weight:bold; color:#333;">0 Meter</span>
                    </div>
                    <div style="text-align:center; font-size:1.5rem; color:#ccc; margin: 10px 0;"><i class="fas fa-equals"></i></div>
                    <div style="display:flex; justify-content:space-between; font-size:1.1rem; color:#555;">
                        <span id="lenTargetText" style="font-weight:bold; color:var(--primary);">0 Centimeter</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:35px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="lenBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareLenCard()">Share</button>
            </div>

            <div id="lenUnitModal" class="bmi-modal-overlay">
                <div class="bmi-modal-content" style="background: #fff; border-radius: 24px 24px 0 0; padding: 20px; box-shadow: 0 -5px 15px rgba(0,0,0,0.1);">
                    <div class="bmi-modal-title" id="lenModalTitle" style="color: #333;">Select Unit</div>
                    <div id="lenModalOptionsList" style="max-height: 40vh; overflow-y: auto;"></div>
                    <button class="bmi-modal-cancel" style="background: #f1f3f4; color: #555;" onclick="closeLenUnitModal()">Cancel</button>
                </div>
            </div>

        </div>`;
    openGenericTool('lenToolPage', 'Length', html);
    activateLenInput('from');
}

/* --- Input & Keypad Logic --- */
function activateLenInput(field) { 
    lenState.activeField = field; 
    
    document.getElementById('lenRowFrom').classList.remove('active'); 
    document.getElementById('lenRowTo').classList.remove('active'); 
    if(field === 'from') document.getElementById('lenRowFrom').classList.add('active'); 
    else document.getElementById('lenRowTo').classList.add('active'); 
    
    document.getElementById('lenResultArea').style.display = 'none'; 
    document.getElementById('lenBottomBar').style.display = 'none'; 
    document.getElementById('lenKeypad').style.display = 'grid'; 
}

function lenType(val) { 
    let current = lenState.activeField === 'from' ? lenState.fromVal : lenState.toVal; 
    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 9) return; 
        current += val; 
    } 
    if (lenState.activeField === 'from') lenState.fromVal = current; 
    else lenState.toVal = current; 
    
    document.getElementById('lenValFrom').innerText = lenState.fromVal; 
    document.getElementById('lenValTo').innerText = lenState.toVal; 
}

function lenBackspace() { 
    let current = lenState.activeField === 'from' ? lenState.fromVal : lenState.toVal; 
    current = current.slice(0, -1); 
    if(current === '') current = '0'; 
    if (lenState.activeField === 'from') lenState.fromVal = current; 
    else lenState.toVal = current; 
    
    document.getElementById('lenValFrom').innerText = lenState.fromVal; 
    document.getElementById('lenValTo').innerText = lenState.toVal; 
}

function lenClear() { 
    lenState.fromVal = '0'; 
    lenState.toVal = '0'; 
    document.getElementById('lenValFrom').innerText = lenState.fromVal; 
    document.getElementById('lenValTo').innerText = lenState.toVal; 
}

/* --- Unit Dropdown Logic --- */
function openLenUnitModal(type, e) {
    e.stopPropagation(); 
    activateLenInput(type);
    
    const title = document.getElementById('lenModalTitle');
    const optionsList = document.getElementById('lenModalOptionsList');
    let optionsHtml = '';

    title.innerText = type === 'from' ? 'From Unit' : 'To Unit';
    
    for (const unit in lenRates) {
        optionsHtml += `<div class="bmi-modal-option" onclick="selectLenUnit('${type}', '${unit}')" style="color: #333; border-bottom: 1px solid #f0f0f0;">${unit}</div>`;
    }
    
    optionsList.innerHTML = optionsHtml;
    document.getElementById('lenUnitModal').style.display = 'flex';
}

function selectLenUnit(type, unit) {
    if (type === 'from') {
        lenState.fromUnit = unit;
        document.getElementById('lenLblFrom').innerText = unit;
    } else {
        lenState.toUnit = unit;
        document.getElementById('lenLblTo').innerText = unit;
    }
    closeLenUnitModal();
}

function closeLenUnitModal() {
    document.getElementById('lenUnitModal').style.display = 'none';
}

/* --- Length Calculation Math (Triggered by 'GO') --- */
function calculateLen() {
    let fromAmt = parseFloat(lenState.fromVal) || 0; 
    let toAmt = parseFloat(lenState.toVal) || 0;
    
    if (lenState.activeField === 'from' && fromAmt === 0) return alert("Please enter a value.");
    if (lenState.activeField === 'to' && toAmt === 0) return alert("Please enter a value.");

    let fromRate = lenRates[lenState.fromUnit];
    let toRate = lenRates[lenState.toUnit];
    let finalValue = 0;
    let resultCode = '';
    let baseText = '';
    let targetText = '';

    if (lenState.activeField === 'from') {
        // Convert to Meters first, then to target unit
        let inMeters = fromAmt * fromRate;
        finalValue = inMeters / toRate;
        
        // Format to remove unnecessary decimals
        finalValue = parseFloat(finalValue.toFixed(6));
        lenState.toVal = finalValue.toString();
        document.getElementById('lenValTo').innerText = lenState.toVal;
        
        resultCode = lenState.toUnit;
        baseText = `${fromAmt} ${lenState.fromUnit}`;
        targetText = `${finalValue} ${lenState.toUnit}`;
    } else {
        // Reverse Conversion
        let inMeters = toAmt * toRate;
        finalValue = inMeters / fromRate;
        
        finalValue = parseFloat(finalValue.toFixed(6));
        lenState.fromVal = finalValue.toString();
        document.getElementById('lenValFrom').innerText = lenState.fromVal;
        
        resultCode = lenState.fromUnit;
        baseText = `${toAmt} ${lenState.toUnit}`;
        targetText = `${finalValue} ${lenState.fromUnit}`;
    }

    // Update Result Card UI
    document.getElementById('finalLenScore').innerText = finalValue; 
    document.getElementById('finalLenCode').innerText = resultCode; 
    document.getElementById('lenBaseText').innerText = baseText;
    document.getElementById('lenTargetText').innerText = targetText;
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('lenKeypad').style.display = 'none'; 
    document.getElementById('lenResultArea').style.display = 'flex'; 
    document.getElementById('lenBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareLenCard() {
    const card = document.getElementById('lenShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Length.png", { type: "image/png" });
            const shareData = { 
                title: 'Length Conversion', 
                text: 'Check out this length conversion from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_Length.png");
                });
            } else {
                downloadImage(blob, "Meraj_Length.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}


/* ==========================================
   CURRENCY CONVERTER (LIVE RATES & SHARE)
   ========================================== */
// Default Fallback Rates (Offline mode ke liye, agar net band ho)
const currRates = {
    "USD": { name: "US Dollar", rate: 1.0 },
    "INR": { name: "Indian Rupee", rate: 83.50 },
    "EUR": { name: "Euro", rate: 0.92 },
    "GBP": { name: "British Pound", rate: 0.79 },
    "JPY": { name: "Japanese Yen", rate: 151.20 },
    "AUD": { name: "Australian Dollar", rate: 1.53 },
    "CAD": { name: "Canadian Dollar", rate: 1.36 },
    "AED": { name: "UAE Dirham", rate: 3.67 },
    "SAR": { name: "Saudi Riyal", rate: 3.75 },
    "PKR": { name: "Pakistani Rupee", rate: 278.50 },
    "BDT": { name: "Bangladeshi Taka", rate: 109.60 }
};

let currState = { 
    activeField: 'from', 
    fromVal: '0', 
    toVal: '0',
    fromUnit: 'USD',
    toUnit: 'INR'
};

function openCurrencyMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('currToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Currency</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="currInputContainer" class="bmi-input-area light" style="padding-top: 5px;">
                <div class="bmi-row light active" id="currRowFrom" onclick="activateCurrInput('from')">
                    <div class="bmi-label-wrap" onclick="openCurrUnitModal('from', event)">
                        <span class="bmi-label light" id="currLblFrom" style="font-weight:bold;">USD</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="currValFrom">0</span>
                        <span class="bmi-unit light" id="currNameFrom">US Dollar</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="currRowTo" onclick="activateCurrInput('to')">
                    <div class="bmi-label-wrap" onclick="openCurrUnitModal('to', event)">
                        <span class="bmi-label light" id="currLblTo" style="font-weight:bold;">INR</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="currValTo">0</span>
                        <span class="bmi-unit light" id="currNameTo">Indian Rupee</span>
                    </div>
                </div>
            </div>

            <div id="currKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="currType('7')">7</button>
                <button class="bmi-k-btn light" onclick="currType('8')">8</button>
                <button class="bmi-k-btn light" onclick="currType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="currClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="currType('4')">4</button>
                <button class="bmi-k-btn light" onclick="currType('5')">5</button>
                <button class="bmi-k-btn light" onclick="currType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="currBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="currType('1')">1</button>
                <button class="bmi-k-btn light" onclick="currType('2')">2</button>
                <button class="bmi-k-btn light" onclick="currType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateCurr()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="currType('0')">0</button>
                <button class="bmi-k-btn light" onclick="currType('.')">.</button>
            </div>

            <div id="currResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="currShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-res-num" id="finalCurrScore" style="font-size:4rem; word-break:break-all; text-align:center;">0.00</span>
                        <span class="bmi-text" id="finalCurrCode" style="color:var(--primary);">INR</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div class="bmi-info-title">Live Exchange Rate</div>
                    <div style="text-align:center; font-size:1.3rem; color:#333; font-weight:500;" id="currRateInfo">1 USD = 83.50 INR</div>
                    
                    <div class="bmi-powered-text" style="margin-top:35px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="currBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareCurrCard()">Share</button>
            </div>

            <div id="currUnitModal" class="bmi-modal-overlay">
                <div class="bmi-modal-content">
                    <div class="bmi-modal-title" id="currModalTitle">Select Currency</div>
                    <div id="currModalOptionsList" style="max-height: 50vh; overflow-y: auto;"></div>
                    <button class="bmi-modal-cancel" onclick="closeCurrUnitModal()">Cancel</button>
                </div>
            </div>

        </div>`;
    openGenericTool('currToolPage', 'Currency', html);
    activateCurrInput('from');
    fetchLiveRates(); // Yahan automatically Live Rates fetch honge
}

/* --- API Call for Live Rates --- */
async function fetchLiveRates() {
    try {
        // Free and reliable exchange API
        let response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        let data = await response.json();
        
        // Update our rates object with today's live data
        for (let code in currRates) {
            if (data.rates[code]) {
                currRates[code].rate = data.rates[code];
            }
        }
        
        // Show success indicator
        let statusEl = document.getElementById('currStatusText');
        if(statusEl) {
            statusEl.innerText = "Live Rates Active 🟢";
            statusEl.style.color = "#4caf50";
        }
    } catch (error) {
        // Fallback to offline rates if net is off
        console.log("Live rate fetch failed. Using offline rates.", error);
        let statusEl = document.getElementById('currStatusText');
        if(statusEl) {
            statusEl.innerText = "Offline Mode (Saved Rates) 🔴";
            statusEl.style.color = "#ff5252";
        }
    }
}

/* --- Input & Keypad Logic --- */
function activateCurrInput(field) { 
    currState.activeField = field; 
    
    document.getElementById('currRowFrom').classList.remove('active'); 
    document.getElementById('currRowTo').classList.remove('active'); 
    if(field === 'from') document.getElementById('currRowFrom').classList.add('active'); 
    else document.getElementById('currRowTo').classList.add('active'); 
    
    document.getElementById('currResultArea').style.display = 'none'; 
    document.getElementById('currBottomBar').style.display = 'none'; 
    document.getElementById('currKeypad').style.display = 'grid'; 
}

function currType(val) { 
    let current = currState.activeField === 'from' ? currState.fromVal : currState.toVal; 
    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 9) return; 
        current += val; 
    } 
    if (currState.activeField === 'from') currState.fromVal = current; 
    else currState.toVal = current; 
    
    document.getElementById('currValFrom').innerText = currState.fromVal; 
    document.getElementById('currValTo').innerText = currState.toVal; 
}

function currBackspace() { 
    let current = currState.activeField === 'from' ? currState.fromVal : currState.toVal; 
    current = current.slice(0, -1); 
    if(current === '') current = '0'; 
    if (currState.activeField === 'from') currState.fromVal = current; 
    else currState.toVal = current; 
    
    document.getElementById('currValFrom').innerText = currState.fromVal; 
    document.getElementById('currValTo').innerText = currState.toVal; 
}

function currClear() { 
    currState.fromVal = '0'; 
    currState.toVal = '0'; 
    document.getElementById('currValFrom').innerText = currState.fromVal; 
    document.getElementById('currValTo').innerText = currState.toVal; 
}

/* --- Unit Dropdown Logic --- */
function openCurrUnitModal(type, e) {
    e.stopPropagation(); 
    activateCurrInput(type);
    
    const title = document.getElementById('currModalTitle');
    const optionsList = document.getElementById('currModalOptionsList');
    let optionsHtml = '';

    title.innerText = type === 'from' ? 'From Currency' : 'To Currency';
    
    for (const code in currRates) {
        optionsHtml += `<div class="bmi-modal-option" onclick="selectCurrUnit('${type}', '${code}')" style="display:flex; justify-content:space-between;">
            <span style="font-weight:bold; color:var(--primary);">${code}</span>
            <span style="color:#aaa;">${currRates[code].name}</span>
        </div>`;
    }
    
    optionsList.innerHTML = optionsHtml;
    document.getElementById('currUnitModal').style.display = 'flex';
}

function selectCurrUnit(type, code) {
    if (type === 'from') {
        currState.fromUnit = code;
        document.getElementById('currLblFrom').innerText = code;
        document.getElementById('currNameFrom').innerText = currRates[code].name;
    } else {
        currState.toUnit = code;
        document.getElementById('currLblTo').innerText = code;
        document.getElementById('currNameTo').innerText = currRates[code].name;
    }
    closeCurrUnitModal();
}

function closeCurrUnitModal() {
    document.getElementById('currUnitModal').style.display = 'none';
}

/* --- Currency Calculation Math (Triggered by 'GO') --- */
function calculateCurr() {
    let fromAmt = parseFloat(currState.fromVal) || 0; 
    let toAmt = parseFloat(currState.toVal) || 0;
    
    if (currState.activeField === 'from' && fromAmt === 0) return alert("Please enter an amount.");
    if (currState.activeField === 'to' && toAmt === 0) return alert("Please enter an amount.");

    let fromRate = currRates[currState.fromUnit].rate;
    let toRate = currRates[currState.toUnit].rate;
    let finalValue = 0;
    let resultCode = '';

    if (currState.activeField === 'from') {
        let inUSD = fromAmt / fromRate;
        finalValue = inUSD * toRate;
        currState.toVal = finalValue.toFixed(2);
        document.getElementById('currValTo').innerText = currState.toVal;
        resultCode = currState.toUnit;
    } else {
        let inUSD = toAmt / toRate;
        finalValue = inUSD * fromRate;
        currState.fromVal = finalValue.toFixed(2);
        document.getElementById('currValFrom').innerText = currState.fromVal;
        resultCode = currState.fromUnit;
        finalValue = currState.fromVal;
    }

    document.getElementById('finalCurrScore').innerText = parseFloat(finalValue).toLocaleString('en-IN'); 
    document.getElementById('finalCurrCode').innerText = resultCode; 
    
    let exchangeStr = `1 ${currState.fromUnit} = ${(toRate / fromRate).toFixed(4)} ${currState.toUnit}`;
    document.getElementById('currRateInfo').innerText = exchangeStr;
    
    document.getElementById('currKeypad').style.display = 'none'; 
    document.getElementById('currResultArea').style.display = 'flex'; 
    document.getElementById('currBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareCurrCard() {
    const card = document.getElementById('currShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Currency.png", { type: "image/png" });
            const shareData = { 
                title: 'Currency Conversion', 
                text: 'Check out this live conversion from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_Currency.png");
                });
            } else {
                downloadImage(blob, "Meraj_Currency.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}

/* ==========================================
   7. AREA CONVERTER (MI-STYLE, REVERSE CALC & SHARE)
   ========================================== */
const areaRates = {
    "Square Meter": 1,
    "Square Kilometer": 1000000,
    "Square Centimeter": 0.0001,
    "Square Millimeter": 0.000001,
    "Square Inch": 0.00064516,
    "Square Foot": 0.092903,
    "Square Yard": 0.836127,
    "Acre": 4046.856422,
    "Hectare": 10000
};

let areaState = { 
    activeField: 'from', 
    fromVal: '0', 
    toVal: '0',
    fromUnit: 'Square Meter',
    toUnit: 'Square Foot'
};

function openAreaMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('areaToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Area</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="areaInputContainer" class="bmi-input-area light" style="padding-top: 5px;">
                <div class="bmi-row light active" id="areaRowFrom" onclick="activateAreaInput('from')">
                    <div class="bmi-label-wrap" onclick="openAreaUnitModal('from', event)">
                        <span class="bmi-label light" id="areaLblFrom" style="font-weight:bold;">Square Meter</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="areaValFrom" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="areaRowTo" onclick="activateAreaInput('to')">
                    <div class="bmi-label-wrap" onclick="openAreaUnitModal('to', event)">
                        <span class="bmi-label light" id="areaLblTo" style="font-weight:bold;">Square Foot</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="areaValTo" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
            </div>

            <div id="areaKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="areaType('7')">7</button>
                <button class="bmi-k-btn light" onclick="areaType('8')">8</button>
                <button class="bmi-k-btn light" onclick="areaType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="areaClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="areaType('4')">4</button>
                <button class="bmi-k-btn light" onclick="areaType('5')">5</button>
                <button class="bmi-k-btn light" onclick="areaType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="areaBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="areaType('1')">1</button>
                <button class="bmi-k-btn light" onclick="areaType('2')">2</button>
                <button class="bmi-k-btn light" onclick="areaType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateArea()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="areaType('0')">0</button>
                <button class="bmi-k-btn light" onclick="areaType('.')">.</button>
            </div>

            <div id="areaResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="areaShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-res-num" id="finalAreaScore" style="font-size:3.2rem; word-break:break-all; text-align:center; color:var(--primary);">0.00</span>
                        <span class="bmi-text" id="finalAreaCode" style="color:#555; font-size:1.3rem;">Square Foot</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div class="bmi-info-title">Conversion Details</div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:1.1rem; color:#555;">
                        <span id="areaBaseText" style="font-weight:bold; color:#333;">0 Square Meter</span>
                    </div>
                    <div style="text-align:center; font-size:1.5rem; color:#ccc; margin: 10px 0;"><i class="fas fa-equals"></i></div>
                    <div style="display:flex; justify-content:space-between; font-size:1.1rem; color:#555;">
                        <span id="areaTargetText" style="font-weight:bold; color:var(--primary);">0 Square Foot</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:35px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="areaBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareAreaCard()">Share</button>
            </div>

            <div id="areaUnitModal" class="bmi-modal-overlay">
                <div class="bmi-modal-content" style="background: #fff; border-radius: 24px 24px 0 0; padding: 20px; box-shadow: 0 -5px 15px rgba(0,0,0,0.1);">
                    <div class="bmi-modal-title" id="areaModalTitle" style="color: #333;">Select Unit</div>
                    <div id="areaModalOptionsList" style="max-height: 40vh; overflow-y: auto;"></div>
                    <button class="bmi-modal-cancel" style="background: #f1f3f4; color: #555;" onclick="closeAreaUnitModal()">Cancel</button>
                </div>
            </div>

        </div>`;
    openGenericTool('areaToolPage', 'Area', html);
    activateAreaInput('from');
}

/* --- Input & Keypad Logic --- */
function activateAreaInput(field) { 
    areaState.activeField = field; 
    
    document.getElementById('areaRowFrom').classList.remove('active'); 
    document.getElementById('areaRowTo').classList.remove('active'); 
    if(field === 'from') document.getElementById('areaRowFrom').classList.add('active'); 
    else document.getElementById('areaRowTo').classList.add('active'); 
    
    document.getElementById('areaResultArea').style.display = 'none'; 
    document.getElementById('areaBottomBar').style.display = 'none'; 
    document.getElementById('areaKeypad').style.display = 'grid'; 
}

function areaType(val) { 
    let current = areaState.activeField === 'from' ? areaState.fromVal : areaState.toVal; 
    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 9) return; 
        current += val; 
    } 
    if (areaState.activeField === 'from') areaState.fromVal = current; 
    else areaState.toVal = current; 
    
    document.getElementById('areaValFrom').innerText = areaState.fromVal; 
    document.getElementById('areaValTo').innerText = areaState.toVal; 
}

function areaBackspace() { 
    let current = areaState.activeField === 'from' ? areaState.fromVal : areaState.toVal; 
    current = current.slice(0, -1); 
    if(current === '') current = '0'; 
    if (areaState.activeField === 'from') areaState.fromVal = current; 
    else areaState.toVal = current; 
    
    document.getElementById('areaValFrom').innerText = areaState.fromVal; 
    document.getElementById('areaValTo').innerText = areaState.toVal; 
}

function areaClear() { 
    areaState.fromVal = '0'; 
    areaState.toVal = '0'; 
    document.getElementById('areaValFrom').innerText = areaState.fromVal; 
    document.getElementById('areaValTo').innerText = areaState.toVal; 
}

/* --- Unit Dropdown Logic --- */
function openAreaUnitModal(type, e) {
    e.stopPropagation(); 
    activateAreaInput(type);
    
    const title = document.getElementById('areaModalTitle');
    const optionsList = document.getElementById('areaModalOptionsList');
    let optionsHtml = '';

    title.innerText = type === 'from' ? 'From Unit' : 'To Unit';
    
    for (const unit in areaRates) {
        optionsHtml += `<div class="bmi-modal-option" onclick="selectAreaUnit('${type}', '${unit}')" style="color: #333; border-bottom: 1px solid #f0f0f0;">${unit}</div>`;
    }
    
    optionsList.innerHTML = optionsHtml;
    document.getElementById('areaUnitModal').style.display = 'flex';
}

function selectAreaUnit(type, unit) {
    if (type === 'from') {
        areaState.fromUnit = unit;
        document.getElementById('areaLblFrom').innerText = unit;
    } else {
        areaState.toUnit = unit;
        document.getElementById('areaLblTo').innerText = unit;
    }
    closeAreaUnitModal();
}

function closeAreaUnitModal() {
    document.getElementById('areaUnitModal').style.display = 'none';
}

/* --- Area Calculation Math (Triggered by 'GO') --- */
function calculateArea() {
    let fromAmt = parseFloat(areaState.fromVal) || 0; 
    let toAmt = parseFloat(areaState.toVal) || 0;
    
    if (areaState.activeField === 'from' && fromAmt === 0) return alert("Please enter a value.");
    if (areaState.activeField === 'to' && toAmt === 0) return alert("Please enter a value.");

    let fromRate = areaRates[areaState.fromUnit];
    let toRate = areaRates[areaState.toUnit];
    let finalValue = 0;
    let resultCode = '';
    let baseText = '';
    let targetText = '';

    if (areaState.activeField === 'from') {
        // Convert to Square Meters first, then to target unit
        let inSqMeters = fromAmt * fromRate;
        finalValue = inSqMeters / toRate;
        
        finalValue = parseFloat(finalValue.toFixed(6));
        areaState.toVal = finalValue.toString();
        document.getElementById('areaValTo').innerText = areaState.toVal;
        
        resultCode = areaState.toUnit;
        baseText = `${fromAmt} ${areaState.fromUnit}`;
        targetText = `${finalValue} ${areaState.toUnit}`;
    } else {
        // Reverse Conversion
        let inSqMeters = toAmt * toRate;
        finalValue = inSqMeters / fromRate;
        
        finalValue = parseFloat(finalValue.toFixed(6));
        areaState.fromVal = finalValue.toString();
        document.getElementById('areaValFrom').innerText = areaState.fromVal;
        
        resultCode = areaState.fromUnit;
        baseText = `${toAmt} ${areaState.toUnit}`;
        targetText = `${finalValue} ${areaState.fromUnit}`;
    }

    // Update Result Card UI
    document.getElementById('finalAreaScore').innerText = finalValue; 
    document.getElementById('finalAreaCode').innerText = resultCode; 
    document.getElementById('areaBaseText').innerText = baseText;
    document.getElementById('areaTargetText').innerText = targetText;
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('areaKeypad').style.display = 'none'; 
    document.getElementById('areaResultArea').style.display = 'flex'; 
    document.getElementById('areaBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareAreaCard() {
    const card = document.getElementById('areaShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Area.png", { type: "image/png" });
            const shareData = { 
                title: 'Area Conversion', 
                text: 'Check out this area conversion from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_Area.png");
                });
            } else {
                downloadImage(blob, "Meraj_Area.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}
/* ==========================================
   8. VOLUME CONVERTER (MI-STYLE, REVERSE CALC & SHARE)
   ========================================== */
const volRates = {
    "Liter": 1,
    "Milliliter": 1000,
    "Cubic Meter": 0.001,
    "Cubic Centimeter": 1000,
    "Gallon (US)": 0.264172,
    "Quart (US)": 1.056688,
    "Pint (US)": 2.113376,
    "Cup (US)": 4.22675,
    "Fluid Ounce (US)": 33.814
};

let volState = { 
    activeField: 'from', 
    fromVal: '0', 
    toVal: '0',
    fromUnit: 'Liter',
    toUnit: 'Milliliter'
};

function openVolumeMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('volToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Volume</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="volInputContainer" class="bmi-input-area light" style="padding-top: 5px;">
                <div class="bmi-row light active" id="volRowFrom" onclick="activateVolInput('from')">
                    <div class="bmi-label-wrap" onclick="openVolUnitModal('from', event)">
                        <span class="bmi-label light" id="volLblFrom" style="font-weight:bold;">Liter</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="volValFrom" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="volRowTo" onclick="activateVolInput('to')">
                    <div class="bmi-label-wrap" onclick="openVolUnitModal('to', event)">
                        <span class="bmi-label light" id="volLblTo" style="font-weight:bold;">Milliliter</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="volValTo" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
            </div>

            <div id="volKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="volType('7')">7</button>
                <button class="bmi-k-btn light" onclick="volType('8')">8</button>
                <button class="bmi-k-btn light" onclick="volType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="volClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="volType('4')">4</button>
                <button class="bmi-k-btn light" onclick="volType('5')">5</button>
                <button class="bmi-k-btn light" onclick="volType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="volBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="volType('1')">1</button>
                <button class="bmi-k-btn light" onclick="volType('2')">2</button>
                <button class="bmi-k-btn light" onclick="volType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateVol()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="volType('0')">0</button>
                <button class="bmi-k-btn light" onclick="volType('.')">.</button>
            </div>

            <div id="volResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="volShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-res-num" id="finalVolScore" style="font-size:3.2rem; word-break:break-all; text-align:center; color:var(--primary);">0.00</span>
                        <span class="bmi-text" id="finalVolCode" style="color:#555; font-size:1.3rem;">Milliliter</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div class="bmi-info-title">Conversion Details</div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:1.1rem; color:#555;">
                        <span id="volBaseText" style="font-weight:bold; color:#333;">0 Liter</span>
                    </div>
                    <div style="text-align:center; font-size:1.5rem; color:#ccc; margin: 10px 0;"><i class="fas fa-equals"></i></div>
                    <div style="display:flex; justify-content:space-between; font-size:1.1rem; color:#555;">
                        <span id="volTargetText" style="font-weight:bold; color:var(--primary);">0 Milliliter</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:35px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="volBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareVolCard()">Share</button>
            </div>

            <div id="volUnitModal" class="bmi-modal-overlay">
                <div class="bmi-modal-content" style="background: #fff; border-radius: 24px 24px 0 0; padding: 20px; box-shadow: 0 -5px 15px rgba(0,0,0,0.1);">
                    <div class="bmi-modal-title" id="volModalTitle" style="color: #333;">Select Unit</div>
                    <div id="volModalOptionsList" style="max-height: 40vh; overflow-y: auto;"></div>
                    <button class="bmi-modal-cancel" style="background: #f1f3f4; color: #555;" onclick="closeVolUnitModal()">Cancel</button>
                </div>
            </div>

        </div>`;
    openGenericTool('volToolPage', 'Volume', html);
    activateVolInput('from');
}

/* --- Input & Keypad Logic --- */
function activateVolInput(field) { 
    volState.activeField = field; 
    
    document.getElementById('volRowFrom').classList.remove('active'); 
    document.getElementById('volRowTo').classList.remove('active'); 
    if(field === 'from') document.getElementById('volRowFrom').classList.add('active'); 
    else document.getElementById('volRowTo').classList.add('active'); 
    
    document.getElementById('volResultArea').style.display = 'none'; 
    document.getElementById('volBottomBar').style.display = 'none'; 
    document.getElementById('volKeypad').style.display = 'grid'; 
}

function volType(val) { 
    let current = volState.activeField === 'from' ? volState.fromVal : volState.toVal; 
    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 9) return; 
        current += val; 
    } 
    if (volState.activeField === 'from') volState.fromVal = current; 
    else volState.toVal = current; 
    
    document.getElementById('volValFrom').innerText = volState.fromVal; 
    document.getElementById('volValTo').innerText = volState.toVal; 
}

function volBackspace() { 
    let current = volState.activeField === 'from' ? volState.fromVal : volState.toVal; 
    current = current.slice(0, -1); 
    if(current === '') current = '0'; 
    if (volState.activeField === 'from') volState.fromVal = current; 
    else volState.toVal = current; 
    
    document.getElementById('volValFrom').innerText = volState.fromVal; 
    document.getElementById('volValTo').innerText = volState.toVal; 
}

function volClear() { 
    volState.fromVal = '0'; 
    volState.toVal = '0'; 
    document.getElementById('volValFrom').innerText = volState.fromVal; 
    document.getElementById('volValTo').innerText = volState.toVal; 
}

/* --- Unit Dropdown Logic --- */
function openVolUnitModal(type, e) {
    e.stopPropagation(); 
    activateVolInput(type);
    
    const title = document.getElementById('volModalTitle');
    const optionsList = document.getElementById('volModalOptionsList');
    let optionsHtml = '';

    title.innerText = type === 'from' ? 'From Unit' : 'To Unit';
    
    for (const unit in volRates) {
        optionsHtml += `<div class="bmi-modal-option" onclick="selectVolUnit('${type}', '${unit}')" style="color: #333; border-bottom: 1px solid #f0f0f0;">${unit}</div>`;
    }
    
    optionsList.innerHTML = optionsHtml;
    document.getElementById('volUnitModal').style.display = 'flex';
}

function selectVolUnit(type, unit) {
    if (type === 'from') {
        volState.fromUnit = unit;
        document.getElementById('volLblFrom').innerText = unit;
    } else {
        volState.toUnit = unit;
        document.getElementById('volLblTo').innerText = unit;
    }
    closeVolUnitModal();
}

function closeVolUnitModal() {
    document.getElementById('volUnitModal').style.display = 'none';
}

/* --- Volume Calculation Math (Triggered by 'GO') --- */
function calculateVol() {
    let fromAmt = parseFloat(volState.fromVal) || 0; 
    let toAmt = parseFloat(volState.toVal) || 0;
    
    if (volState.activeField === 'from' && fromAmt === 0) return alert("Please enter a value.");
    if (volState.activeField === 'to' && toAmt === 0) return alert("Please enter a value.");

    let fromRate = volRates[volState.fromUnit];
    let toRate = volRates[volState.toUnit];
    let finalValue = 0;
    let resultCode = '';
    let baseText = '';
    let targetText = '';

    if (volState.activeField === 'from') {
        // Convert to Liters first, then to target unit
        let inLiters = fromAmt / fromRate;
        finalValue = inLiters * toRate;
        
        finalValue = parseFloat(finalValue.toFixed(6));
        volState.toVal = finalValue.toString();
        document.getElementById('volValTo').innerText = volState.toVal;
        
        resultCode = volState.toUnit;
        baseText = `${fromAmt} ${volState.fromUnit}`;
        targetText = `${finalValue} ${volState.toUnit}`;
    } else {
        // Reverse Conversion
        let inLiters = toAmt / toRate;
        finalValue = inLiters * fromRate;
        
        finalValue = parseFloat(finalValue.toFixed(6));
        volState.fromVal = finalValue.toString();
        document.getElementById('volValFrom').innerText = volState.fromVal;
        
        resultCode = volState.fromUnit;
        baseText = `${toAmt} ${volState.toUnit}`;
        targetText = `${finalValue} ${volState.fromUnit}`;
    }

    // Update Result Card UI
    document.getElementById('finalVolScore').innerText = finalValue; 
    document.getElementById('finalVolCode').innerText = resultCode; 
    document.getElementById('volBaseText').innerText = baseText;
    document.getElementById('volTargetText').innerText = targetText;
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('volKeypad').style.display = 'none'; 
    document.getElementById('volResultArea').style.display = 'flex'; 
    document.getElementById('volBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareVolCard() {
    const card = document.getElementById('volShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Volume.png", { type: "image/png" });
            const shareData = { 
                title: 'Volume Conversion', 
                text: 'Check out this volume conversion from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_Volume.png");
                });
            } else {
                downloadImage(blob, "Meraj_Volume.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}

/* ==========================================
   9. WEIGHT CONVERTER (MI-STYLE, REVERSE CALC & SHARE)
   ========================================== */
const weightRates = {
    "Kilogram": 1,
    "Gram": 0.001,
    "Milligram": 0.000001,
    "Metric Ton": 1000,
    "Pound (lb)": 0.45359237,
    "Ounce (oz)": 0.02834952
};

let weightState = { 
    activeField: 'from', 
    fromVal: '0', 
    toVal: '0',
    fromUnit: 'Kilogram',
    toUnit: 'Gram'
};

function openWeightMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('weightToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Weight</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="weightInputContainer" class="bmi-input-area light" style="padding-top: 5px;">
                <div class="bmi-row light active" id="weightRowFrom" onclick="activateWeightInput('from')">
                    <div class="bmi-label-wrap" onclick="openWeightUnitModal('from', event)">
                        <span class="bmi-label light" id="weightLblFrom" style="font-weight:bold;">Kilogram</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="weightValFrom" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="weightRowTo" onclick="activateWeightInput('to')">
                    <div class="bmi-label-wrap" onclick="openWeightUnitModal('to', event)">
                        <span class="bmi-label light" id="weightLblTo" style="font-weight:bold;">Gram</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="weightValTo" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
            </div>

            <div id="weightKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="weightType('7')">7</button>
                <button class="bmi-k-btn light" onclick="weightType('8')">8</button>
                <button class="bmi-k-btn light" onclick="weightType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="weightClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="weightType('4')">4</button>
                <button class="bmi-k-btn light" onclick="weightType('5')">5</button>
                <button class="bmi-k-btn light" onclick="weightType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="weightBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="weightType('1')">1</button>
                <button class="bmi-k-btn light" onclick="weightType('2')">2</button>
                <button class="bmi-k-btn light" onclick="weightType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateWeight()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="weightType('0')">0</button>
                <button class="bmi-k-btn light" onclick="weightType('.')">.</button>
            </div>

            <div id="weightResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="weightShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-res-num" id="finalWeightScore" style="font-size:3.2rem; word-break:break-all; text-align:center; color:var(--primary);">0.00</span>
                        <span class="bmi-text" id="finalWeightCode" style="color:#555; font-size:1.3rem;">Gram</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div class="bmi-info-title">Conversion Details</div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:1.1rem; color:#555;">
                        <span id="weightBaseText" style="font-weight:bold; color:#333;">0 Kilogram</span>
                    </div>
                    <div style="text-align:center; font-size:1.5rem; color:#ccc; margin: 10px 0;"><i class="fas fa-equals"></i></div>
                    <div style="display:flex; justify-content:space-between; font-size:1.1rem; color:#555;">
                        <span id="weightTargetText" style="font-weight:bold; color:var(--primary);">0 Gram</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:35px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="weightBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareWeightCard()">Share</button>
            </div>

            <div id="weightUnitModal" class="bmi-modal-overlay">
                <div class="bmi-modal-content" style="background: #fff; border-radius: 24px 24px 0 0; padding: 20px; box-shadow: 0 -5px 15px rgba(0,0,0,0.1);">
                    <div class="bmi-modal-title" id="weightModalTitle" style="color: #333;">Select Unit</div>
                    <div id="weightModalOptionsList" style="max-height: 40vh; overflow-y: auto;"></div>
                    <button class="bmi-modal-cancel" style="background: #f1f3f4; color: #555;" onclick="closeWeightUnitModal()">Cancel</button>
                </div>
            </div>

        </div>`;
    openGenericTool('weightToolPage', 'Weight', html);
    activateWeightInput('from');
}

/* --- Input & Keypad Logic --- */
function activateWeightInput(field) { 
    weightState.activeField = field; 
    
    document.getElementById('weightRowFrom').classList.remove('active'); 
    document.getElementById('weightRowTo').classList.remove('active'); 
    if(field === 'from') document.getElementById('weightRowFrom').classList.add('active'); 
    else document.getElementById('weightRowTo').classList.add('active'); 
    
    document.getElementById('weightResultArea').style.display = 'none'; 
    document.getElementById('weightBottomBar').style.display = 'none'; 
    document.getElementById('weightKeypad').style.display = 'grid'; 
}

function weightType(val) { 
    let current = weightState.activeField === 'from' ? weightState.fromVal : weightState.toVal; 
    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 9) return; 
        current += val; 
    } 
    if (weightState.activeField === 'from') weightState.fromVal = current; 
    else weightState.toVal = current; 
    
    document.getElementById('weightValFrom').innerText = weightState.fromVal; 
    document.getElementById('weightValTo').innerText = weightState.toVal; 
}

function weightBackspace() { 
    let current = weightState.activeField === 'from' ? weightState.fromVal : weightState.toVal; 
    current = current.slice(0, -1); 
    if(current === '') current = '0'; 
    if (weightState.activeField === 'from') weightState.fromVal = current; 
    else weightState.toVal = current; 
    
    document.getElementById('weightValFrom').innerText = weightState.fromVal; 
    document.getElementById('weightValTo').innerText = weightState.toVal; 
}

function weightClear() { 
    weightState.fromVal = '0'; 
    weightState.toVal = '0'; 
    document.getElementById('weightValFrom').innerText = weightState.fromVal; 
    document.getElementById('weightValTo').innerText = weightState.toVal; 
}

/* --- Unit Dropdown Logic --- */
function openWeightUnitModal(type, e) {
    e.stopPropagation(); 
    activateWeightInput(type);
    
    const title = document.getElementById('weightModalTitle');
    const optionsList = document.getElementById('weightModalOptionsList');
    let optionsHtml = '';

    title.innerText = type === 'from' ? 'From Unit' : 'To Unit';
    
    for (const unit in weightRates) {
        optionsHtml += `<div class="bmi-modal-option" onclick="selectWeightUnit('${type}', '${unit}')" style="color: #333; border-bottom: 1px solid #f0f0f0;">${unit}</div>`;
    }
    
    optionsList.innerHTML = optionsHtml;
    document.getElementById('weightUnitModal').style.display = 'flex';
}

function selectWeightUnit(type, unit) {
    if (type === 'from') {
        weightState.fromUnit = unit;
        document.getElementById('weightLblFrom').innerText = unit;
    } else {
        weightState.toUnit = unit;
        document.getElementById('weightLblTo').innerText = unit;
    }
    closeWeightUnitModal();
}

function closeWeightUnitModal() {
    document.getElementById('weightUnitModal').style.display = 'none';
}

/* --- Weight Calculation Math (Triggered by 'GO') --- */
function calculateWeight() {
    let fromAmt = parseFloat(weightState.fromVal) || 0; 
    let toAmt = parseFloat(weightState.toVal) || 0;
    
    if (weightState.activeField === 'from' && fromAmt === 0) return alert("Please enter a value.");
    if (weightState.activeField === 'to' && toAmt === 0) return alert("Please enter a value.");

    let fromRate = weightRates[weightState.fromUnit];
    let toRate = weightRates[weightState.toUnit];
    let finalValue = 0;
    let resultCode = '';
    let baseText = '';
    let targetText = '';

    if (weightState.activeField === 'from') {
        // Convert to Kilograms first, then to target unit
        let inKg = fromAmt * fromRate;
        finalValue = inKg / toRate;
        
        finalValue = parseFloat(finalValue.toFixed(6));
        weightState.toVal = finalValue.toString();
        document.getElementById('weightValTo').innerText = weightState.toVal;
        
        resultCode = weightState.toUnit;
        baseText = `${fromAmt} ${weightState.fromUnit}`;
        targetText = `${finalValue} ${weightState.toUnit}`;
    } else {
        // Reverse Conversion
        let inKg = toAmt * toRate;
        finalValue = inKg / fromRate;
        
        finalValue = parseFloat(finalValue.toFixed(6));
        weightState.fromVal = finalValue.toString();
        document.getElementById('weightValFrom').innerText = weightState.fromVal;
        
        resultCode = weightState.fromUnit;
        baseText = `${toAmt} ${weightState.toUnit}`;
        targetText = `${finalValue} ${weightState.fromUnit}`;
    }

    // Update Result Card UI
    document.getElementById('finalWeightScore').innerText = finalValue; 
    document.getElementById('finalWeightCode').innerText = resultCode; 
    document.getElementById('weightBaseText').innerText = baseText;
    document.getElementById('weightTargetText').innerText = targetText;
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('weightKeypad').style.display = 'none'; 
    document.getElementById('weightResultArea').style.display = 'flex'; 
    document.getElementById('weightBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareWeightCard() {
    const card = document.getElementById('weightShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Weight.png", { type: "image/png" });
            const shareData = { 
                title: 'Weight Conversion', 
                text: 'Check out this weight conversion from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_Weight.png");
                });
            } else {
                downloadImage(blob, "Meraj_Weight.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}
/* ==========================================
   10. SPEED CONVERTER (MI-STYLE, REVERSE CALC & SHARE)
   ========================================== */
const speedRates = {
    "Meter per second": 1,
    "Kilometer per hour": 3.6,
    "Mile per hour": 2.236936,
    "Foot per second": 3.28084,
    "Knot": 1.943844
};

let speedState = { 
    activeField: 'from', 
    fromVal: '0', 
    toVal: '0',
    fromUnit: 'Kilometer per hour',
    toUnit: 'Meter per second'
};

function openSpeedMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('speedToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Speed</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="speedInputContainer" class="bmi-input-area light" style="padding-top: 5px;">
                <div class="bmi-row light active" id="speedRowFrom" onclick="activateSpeedInput('from')">
                    <div class="bmi-label-wrap" onclick="openSpeedUnitModal('from', event)">
                        <span class="bmi-label light" id="speedLblFrom" style="font-weight:bold;">Kilometer per hour</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="speedValFrom" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="speedRowTo" onclick="activateSpeedInput('to')">
                    <div class="bmi-label-wrap" onclick="openSpeedUnitModal('to', event)">
                        <span class="bmi-label light" id="speedLblTo" style="font-weight:bold;">Meter per second</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="speedValTo" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
            </div>

            <div id="speedKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="speedType('7')">7</button>
                <button class="bmi-k-btn light" onclick="speedType('8')">8</button>
                <button class="bmi-k-btn light" onclick="speedType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="speedClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="speedType('4')">4</button>
                <button class="bmi-k-btn light" onclick="speedType('5')">5</button>
                <button class="bmi-k-btn light" onclick="speedType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="speedBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="speedType('1')">1</button>
                <button class="bmi-k-btn light" onclick="speedType('2')">2</button>
                <button class="bmi-k-btn light" onclick="speedType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateSpeed()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="speedType('0')">0</button>
                <button class="bmi-k-btn light" onclick="speedType('.')">.</button>
            </div>

            <div id="speedResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="speedShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-res-num" id="finalSpeedScore" style="font-size:3.2rem; word-break:break-all; text-align:center; color:var(--primary);">0.00</span>
                        <span class="bmi-text" id="finalSpeedCode" style="color:#555; font-size:1.3rem;">Meter per second</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div class="bmi-info-title">Conversion Details</div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:1.1rem; color:#555;">
                        <span id="speedBaseText" style="font-weight:bold; color:#333;">0 Kilometer per hour</span>
                    </div>
                    <div style="text-align:center; font-size:1.5rem; color:#ccc; margin: 10px 0;"><i class="fas fa-equals"></i></div>
                    <div style="display:flex; justify-content:space-between; font-size:1.1rem; color:#555;">
                        <span id="speedTargetText" style="font-weight:bold; color:var(--primary);">0 Meter per second</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:35px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="speedBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareSpeedCard()">Share</button>
            </div>

            <div id="speedUnitModal" class="bmi-modal-overlay">
                <div class="bmi-modal-content" style="background: #fff; border-radius: 24px 24px 0 0; padding: 20px; box-shadow: 0 -5px 15px rgba(0,0,0,0.1);">
                    <div class="bmi-modal-title" id="speedModalTitle" style="color: #333;">Select Unit</div>
                    <div id="speedModalOptionsList" style="max-height: 40vh; overflow-y: auto;"></div>
                    <button class="bmi-modal-cancel" style="background: #f1f3f4; color: #555;" onclick="closeSpeedUnitModal()">Cancel</button>
                </div>
            </div>

        </div>`;
    openGenericTool('speedToolPage', 'Speed', html);
    activateSpeedInput('from');
}

/* --- Input & Keypad Logic --- */
function activateSpeedInput(field) { 
    speedState.activeField = field; 
    
    document.getElementById('speedRowFrom').classList.remove('active'); 
    document.getElementById('speedRowTo').classList.remove('active'); 
    if(field === 'from') document.getElementById('speedRowFrom').classList.add('active'); 
    else document.getElementById('speedRowTo').classList.add('active'); 
    
    document.getElementById('speedResultArea').style.display = 'none'; 
    document.getElementById('speedBottomBar').style.display = 'none'; 
    document.getElementById('speedKeypad').style.display = 'grid'; 
}

function speedType(val) { 
    let current = speedState.activeField === 'from' ? speedState.fromVal : speedState.toVal; 
    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 9) return; 
        current += val; 
    } 
    if (speedState.activeField === 'from') speedState.fromVal = current; 
    else speedState.toVal = current; 
    
    document.getElementById('speedValFrom').innerText = speedState.fromVal; 
    document.getElementById('speedValTo').innerText = speedState.toVal; 
}

function speedBackspace() { 
    let current = speedState.activeField === 'from' ? speedState.fromVal : speedState.toVal; 
    current = current.slice(0, -1); 
    if(current === '') current = '0'; 
    if (speedState.activeField === 'from') speedState.fromVal = current; 
    else speedState.toVal = current; 
    
    document.getElementById('speedValFrom').innerText = speedState.fromVal; 
    document.getElementById('speedValTo').innerText = speedState.toVal; 
}

function speedClear() { 
    speedState.fromVal = '0'; 
    speedState.toVal = '0'; 
    document.getElementById('speedValFrom').innerText = speedState.fromVal; 
    document.getElementById('speedValTo').innerText = speedState.toVal; 
}

/* --- Unit Dropdown Logic --- */
function openSpeedUnitModal(type, e) {
    e.stopPropagation(); 
    activateSpeedInput(type);
    
    const title = document.getElementById('speedModalTitle');
    const optionsList = document.getElementById('speedModalOptionsList');
    let optionsHtml = '';

    title.innerText = type === 'from' ? 'From Unit' : 'To Unit';
    
    for (const unit in speedRates) {
        optionsHtml += `<div class="bmi-modal-option" onclick="selectSpeedUnit('${type}', '${unit}')" style="color: #333; border-bottom: 1px solid #f0f0f0;">${unit}</div>`;
    }
    
    optionsList.innerHTML = optionsHtml;
    document.getElementById('speedUnitModal').style.display = 'flex';
}

function selectSpeedUnit(type, unit) {
    if (type === 'from') {
        speedState.fromUnit = unit;
        document.getElementById('speedLblFrom').innerText = unit;
    } else {
        speedState.toUnit = unit;
        document.getElementById('speedLblTo').innerText = unit;
    }
    closeSpeedUnitModal();
}

function closeSpeedUnitModal() {
    document.getElementById('speedUnitModal').style.display = 'none';
}

/* --- Speed Calculation Math (Triggered by 'GO') --- */
function calculateSpeed() {
    let fromAmt = parseFloat(speedState.fromVal) || 0; 
    let toAmt = parseFloat(speedState.toVal) || 0;
    
    if (speedState.activeField === 'from' && fromAmt === 0) return alert("Please enter a value.");
    if (speedState.activeField === 'to' && toAmt === 0) return alert("Please enter a value.");

    let fromRate = speedRates[speedState.fromUnit];
    let toRate = speedRates[speedState.toUnit];
    let finalValue = 0;
    let resultCode = '';
    let baseText = '';
    let targetText = '';

    if (speedState.activeField === 'from') {
        // Convert to Meter per second first, then to target unit
        let inMps = fromAmt / fromRate;
        finalValue = inMps * toRate;
        
        finalValue = parseFloat(finalValue.toFixed(6));
        speedState.toVal = finalValue.toString();
        document.getElementById('speedValTo').innerText = speedState.toVal;
        
        resultCode = speedState.toUnit;
        baseText = `${fromAmt} ${speedState.fromUnit}`;
        targetText = `${finalValue} ${speedState.toUnit}`;
    } else {
        // Reverse Conversion
        let inMps = toAmt / toRate;
        finalValue = inMps * fromRate;
        
        finalValue = parseFloat(finalValue.toFixed(6));
        speedState.fromVal = finalValue.toString();
        document.getElementById('speedValFrom').innerText = speedState.fromVal;
        
        resultCode = speedState.fromUnit;
        baseText = `${toAmt} ${speedState.toUnit}`;
        targetText = `${finalValue} ${speedState.fromUnit}`;
    }

    // Update Result Card UI
    document.getElementById('finalSpeedScore').innerText = finalValue; 
    document.getElementById('finalSpeedCode').innerText = resultCode; 
    document.getElementById('speedBaseText').innerText = baseText;
    document.getElementById('speedTargetText').innerText = targetText;
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('speedKeypad').style.display = 'none'; 
    document.getElementById('speedResultArea').style.display = 'flex'; 
    document.getElementById('speedBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareSpeedCard() {
    const card = document.getElementById('speedShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Speed.png", { type: "image/png" });
            const shareData = { 
                title: 'Speed Conversion', 
                text: 'Check out this speed conversion from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_Speed.png");
                });
            } else {
                downloadImage(blob, "Meraj_Speed.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}
/* ==========================================
   11. DATA CONVERTER (MI-STYLE, REVERSE CALC & SHARE)
   ========================================== */
const dataRates = {
    "Bit": 0.125,
    "Byte": 1,
    "Kilobyte (KB)": 1024,
    "Megabyte (MB)": 1048576,        // 1024 * 1024
    "Gigabyte (GB)": 1073741824,     // 1024^3
    "Terabyte (TB)": 1099511627776,  // 1024^4
    "Petabyte (PB)": 1125899906842624
};

let dataState = { 
    activeField: 'from', 
    fromVal: '0', 
    toVal: '0',
    fromUnit: 'Gigabyte (GB)',
    toUnit: 'Megabyte (MB)'
};

function openDataMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('dataToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Data</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="dataInputContainer" class="bmi-input-area light" style="padding-top: 5px;">
                <div class="bmi-row light active" id="dataRowFrom" onclick="activateDataInput('from')">
                    <div class="bmi-label-wrap" onclick="openDataUnitModal('from', event)">
                        <span class="bmi-label light" id="dataLblFrom" style="font-weight:bold;">Gigabyte (GB)</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="dataValFrom" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="dataRowTo" onclick="activateDataInput('to')">
                    <div class="bmi-label-wrap" onclick="openDataUnitModal('to', event)">
                        <span class="bmi-label light" id="dataLblTo" style="font-weight:bold;">Megabyte (MB)</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="dataValTo" style="font-size:3.2rem;">0</span>
                    </div>
                </div>
            </div>

            <div id="dataKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="dataType('7')">7</button>
                <button class="bmi-k-btn light" onclick="dataType('8')">8</button>
                <button class="bmi-k-btn light" onclick="dataType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="dataClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="dataType('4')">4</button>
                <button class="bmi-k-btn light" onclick="dataType('5')">5</button>
                <button class="bmi-k-btn light" onclick="dataType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="dataBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="dataType('1')">1</button>
                <button class="bmi-k-btn light" onclick="dataType('2')">2</button>
                <button class="bmi-k-btn light" onclick="dataType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateData()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="dataType('0')">0</button>
                <button class="bmi-k-btn light" onclick="dataType('.')">.</button>
            </div>

            <div id="dataResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="dataShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-res-num" id="finalDataScore" style="font-size:3.2rem; word-break:break-all; text-align:center; color:var(--primary);">0.00</span>
                        <span class="bmi-text" id="finalDataCode" style="color:#555; font-size:1.3rem;">Megabyte (MB)</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div class="bmi-info-title">Conversion Details</div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:1.1rem; color:#555;">
                        <span id="dataBaseText" style="font-weight:bold; color:#333;">0 Gigabyte (GB)</span>
                    </div>
                    <div style="text-align:center; font-size:1.5rem; color:#ccc; margin: 10px 0;"><i class="fas fa-equals"></i></div>
                    <div style="display:flex; justify-content:space-between; font-size:1.1rem; color:#555;">
                        <span id="dataTargetText" style="font-weight:bold; color:var(--primary);">0 Megabyte (MB)</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:35px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="dataBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareDataCard()">Share</button>
            </div>

            <div id="dataUnitModal" class="bmi-modal-overlay">
                <div class="bmi-modal-content" style="background: #fff; border-radius: 24px 24px 0 0; padding: 20px; box-shadow: 0 -5px 15px rgba(0,0,0,0.1);">
                    <div class="bmi-modal-title" id="dataModalTitle" style="color: #333;">Select Unit</div>
                    <div id="dataModalOptionsList" style="max-height: 40vh; overflow-y: auto;"></div>
                    <button class="bmi-modal-cancel" style="background: #f1f3f4; color: #555;" onclick="closeDataUnitModal()">Cancel</button>
                </div>
            </div>

        </div>`;
    openGenericTool('dataToolPage', 'Data', html);
    activateDataInput('from');
}

/* --- Input & Keypad Logic --- */
function activateDataInput(field) { 
    dataState.activeField = field; 
    
    document.getElementById('dataRowFrom').classList.remove('active'); 
    document.getElementById('dataRowTo').classList.remove('active'); 
    if(field === 'from') document.getElementById('dataRowFrom').classList.add('active'); 
    else document.getElementById('dataRowTo').classList.add('active'); 
    
    document.getElementById('dataResultArea').style.display = 'none'; 
    document.getElementById('dataBottomBar').style.display = 'none'; 
    document.getElementById('dataKeypad').style.display = 'grid'; 
}

function dataType(val) { 
    let current = dataState.activeField === 'from' ? dataState.fromVal : dataState.toVal; 
    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 9) return; 
        current += val; 
    } 
    if (dataState.activeField === 'from') dataState.fromVal = current; 
    else dataState.toVal = current; 
    
    document.getElementById('dataValFrom').innerText = dataState.fromVal; 
    document.getElementById('dataValTo').innerText = dataState.toVal; 
}

function dataBackspace() { 
    let current = dataState.activeField === 'from' ? dataState.fromVal : dataState.toVal; 
    current = current.slice(0, -1); 
    if(current === '') current = '0'; 
    if (dataState.activeField === 'from') dataState.fromVal = current; 
    else dataState.toVal = current; 
    
    document.getElementById('dataValFrom').innerText = dataState.fromVal; 
    document.getElementById('dataValTo').innerText = dataState.toVal; 
}

function dataClear() { 
    dataState.fromVal = '0'; 
    dataState.toVal = '0'; 
    document.getElementById('dataValFrom').innerText = dataState.fromVal; 
    document.getElementById('dataValTo').innerText = dataState.toVal; 
}

/* --- Unit Dropdown Logic --- */
function openDataUnitModal(type, e) {
    e.stopPropagation(); 
    activateDataInput(type);
    
    const title = document.getElementById('dataModalTitle');
    const optionsList = document.getElementById('dataModalOptionsList');
    let optionsHtml = '';

    title.innerText = type === 'from' ? 'From Unit' : 'To Unit';
    
    for (const unit in dataRates) {
        optionsHtml += `<div class="bmi-modal-option" onclick="selectDataUnit('${type}', '${unit}')" style="color: #333; border-bottom: 1px solid #f0f0f0;">${unit}</div>`;
    }
    
    optionsList.innerHTML = optionsHtml;
    document.getElementById('dataUnitModal').style.display = 'flex';
}

function selectDataUnit(type, unit) {
    if (type === 'from') {
        dataState.fromUnit = unit;
        document.getElementById('dataLblFrom').innerText = unit;
    } else {
        dataState.toUnit = unit;
        document.getElementById('dataLblTo').innerText = unit;
    }
    closeDataUnitModal();
}

function closeDataUnitModal() {
    document.getElementById('dataUnitModal').style.display = 'none';
}

/* --- Data Calculation Math (Triggered by 'GO') --- */
function calculateData() {
    let fromAmt = parseFloat(dataState.fromVal) || 0; 
    let toAmt = parseFloat(dataState.toVal) || 0;
    
    if (dataState.activeField === 'from' && fromAmt === 0) return alert("Please enter a value.");
    if (dataState.activeField === 'to' && toAmt === 0) return alert("Please enter a value.");

    let fromRate = dataRates[dataState.fromUnit];
    let toRate = dataRates[dataState.toUnit];
    let finalValue = 0;
    let resultCode = '';
    let baseText = '';
    let targetText = '';

    if (dataState.activeField === 'from') {
        // Convert to Bytes first, then to target unit
        let inBytes = fromAmt * fromRate;
        finalValue = inBytes / toRate;
        
        // Data me decimal numbers lamba ja sakta hai, isliye up to 6 decimal format kar rahe hain
        finalValue = parseFloat(finalValue.toFixed(6));
        dataState.toVal = finalValue.toString();
        document.getElementById('dataValTo').innerText = dataState.toVal;
        
        resultCode = dataState.toUnit;
        baseText = `${fromAmt} ${dataState.fromUnit}`;
        targetText = `${finalValue} ${dataState.toUnit}`;
    } else {
        // Reverse Conversion
        let inBytes = toAmt * toRate;
        finalValue = inBytes / fromRate;
        
        finalValue = parseFloat(finalValue.toFixed(6));
        dataState.fromVal = finalValue.toString();
        document.getElementById('dataValFrom').innerText = dataState.fromVal;
        
        resultCode = dataState.fromUnit;
        baseText = `${toAmt} ${dataState.toUnit}`;
        targetText = `${finalValue} ${dataState.fromUnit}`;
    }

    // Update Result Card UI
    document.getElementById('finalDataScore').innerText = finalValue; 
    document.getElementById('finalDataCode').innerText = resultCode; 
    document.getElementById('dataBaseText').innerText = baseText;
    document.getElementById('dataTargetText').innerText = targetText;
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('dataKeypad').style.display = 'none'; 
    document.getElementById('dataResultArea').style.display = 'flex'; 
    document.getElementById('dataBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareDataCard() {
    const card = document.getElementById('dataShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Data.png", { type: "image/png" });
            const shareData = { 
                title: 'Data Conversion', 
                text: 'Check out this data conversion from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_Data.png");
                });
            } else {
                downloadImage(blob, "Meraj_Data.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}
/* ==========================================
   12. TEMPERATURE CONVERTER (MI-STYLE, 5 UNITS & SHARE)
   ========================================== */

const tempUnitsData = {
    "Celsius": { symbol: "°C", modalLabel: "Celsius °C" },
    "Fahrenheit": { symbol: "°F", modalLabel: "Fahrenheit °F" },
    "Kelvin": { symbol: "K", modalLabel: "Kelvin K" },
    "Rankine": { symbol: "°R", modalLabel: "Rankine °R" },
    "Réaumur": { symbol: "°Re", modalLabel: "Réaumur °Re" }
};

let tempState = { 
    activeField: 'from', 
    fromVal: '0', 
    toVal: '32', 
    fromUnit: 'Celsius',
    toUnit: 'Fahrenheit'
};

function openTempMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('tempToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Temperature</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="tempInputContainer" class="bmi-input-area light" style="padding-top: 5px;">
                <div class="bmi-row light active" id="tempRowFrom" onclick="activateTempInput('from')">
                    <div class="bmi-label-wrap" onclick="openTempUnitModal('from', event)">
                        <span class="bmi-label light" id="tempLblFrom" style="font-weight:bold; font-size:1.4rem;">°C</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="tempValFrom" style="font-size:3.2rem;">0</span>
                        <span class="bmi-unit light" id="tempNameFrom">Celsius</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="tempRowTo" onclick="activateTempInput('to')">
                    <div class="bmi-label-wrap" onclick="openTempUnitModal('to', event)">
                        <span class="bmi-label light" id="tempLblTo" style="font-weight:bold; font-size:1.4rem;">°F</span>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="tempValTo" style="font-size:3.2rem;">32</span>
                        <span class="bmi-unit light" id="tempNameTo">Fahrenheit</span>
                    </div>
                </div>
            </div>

            <div id="tempKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="tempType('7')">7</button>
                <button class="bmi-k-btn light" onclick="tempType('8')">8</button>
                <button class="bmi-k-btn light" onclick="tempType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="tempClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="tempType('4')">4</button>
                <button class="bmi-k-btn light" onclick="tempType('5')">5</button>
                <button class="bmi-k-btn light" onclick="tempType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="tempBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="tempType('1')">1</button>
                <button class="bmi-k-btn light" onclick="tempType('2')">2</button>
                <button class="bmi-k-btn light" onclick="tempType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateTemp()">GO</button>
                
                <button class="bmi-k-btn light" style="font-size:1.5rem; font-weight:bold; color:var(--primary);" onclick="tempToggleSign()">+/-</button>
                <button class="bmi-k-btn light" onclick="tempType('0')">0</button>
                <button class="bmi-k-btn light" onclick="tempType('.')">.</button>
            </div>

            <div id="tempResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="tempShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-res-num" id="finalTempScore" style="font-size:3.2rem; word-break:break-all; text-align:center; color:var(--primary);">32.00</span>
                        <span class="bmi-text" id="finalTempCode" style="color:#555; font-size:1.3rem;">Fahrenheit</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div class="bmi-info-title">Conversion Details</div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:1.2rem; color:#555;">
                        <span id="tempBaseText" style="font-weight:bold; color:#333;">0 °C</span>
                    </div>
                    <div style="text-align:center; font-size:1.5rem; color:#ccc; margin: 10px 0;"><i class="fas fa-equals"></i></div>
                    <div style="display:flex; justify-content:space-between; font-size:1.2rem; color:#555;">
                        <span id="tempTargetText" style="font-weight:bold; color:var(--primary);">32 °F</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:35px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="tempBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareTempCard()">Share</button>
            </div>

            <div id="tempUnitModal" class="bmi-modal-overlay">
                <div class="bmi-modal-content" style="background: #fff; border-radius: 24px 24px 0 0; padding: 20px; box-shadow: 0 -5px 15px rgba(0,0,0,0.1);">
                    <div class="bmi-modal-title" id="tempModalTitle" style="color: #333; font-weight: bold;">Select unit</div>
                    <div id="tempModalOptionsList" style="max-height: 40vh; overflow-y: auto;"></div>
                    <button class="bmi-modal-cancel" style="background: #f1f3f4; color: #555;" onclick="closeTempUnitModal()">Cancel</button>
                </div>
            </div>

        </div>`;
    openGenericTool('tempToolPage', 'Temperature', html);
    activateTempInput('from');
}

/* --- Input & Keypad Logic --- */
function activateTempInput(field) { 
    tempState.activeField = field; 
    
    document.getElementById('tempRowFrom').classList.remove('active'); 
    document.getElementById('tempRowTo').classList.remove('active'); 
    if(field === 'from') document.getElementById('tempRowFrom').classList.add('active'); 
    else document.getElementById('tempRowTo').classList.add('active'); 
    
    document.getElementById('tempResultArea').style.display = 'none'; 
    document.getElementById('tempBottomBar').style.display = 'none'; 
    document.getElementById('tempKeypad').style.display = 'grid'; 
}

function tempType(val) { 
    let current = tempState.activeField === 'from' ? tempState.fromVal : tempState.toVal; 
    if (current === '0' && val !== '.') current = val; 
    else if (current === '-0' && val !== '.') current = '-' + val;
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 9) return; 
        current += val; 
    } 
    if (tempState.activeField === 'from') tempState.fromVal = current; 
    else tempState.toVal = current; 
    
    document.getElementById('tempValFrom').innerText = tempState.fromVal; 
    document.getElementById('tempValTo').innerText = tempState.toVal; 
}

function tempToggleSign() {
    let current = tempState.activeField === 'from' ? tempState.fromVal : tempState.toVal; 
    if (current.startsWith('-')) {
        current = current.substring(1);
    } else {
        current = '-' + current;
    }
    if (current === '-0') current = '-0';
    
    if (tempState.activeField === 'from') tempState.fromVal = current; 
    else tempState.toVal = current; 
    
    document.getElementById('tempValFrom').innerText = tempState.fromVal; 
    document.getElementById('tempValTo').innerText = tempState.toVal; 
}

function tempBackspace() { 
    let current = tempState.activeField === 'from' ? tempState.fromVal : tempState.toVal; 
    current = current.slice(0, -1); 
    if(current === '' || current === '-') current = '0'; 
    if (tempState.activeField === 'from') tempState.fromVal = current; 
    else tempState.toVal = current; 
    
    document.getElementById('tempValFrom').innerText = tempState.fromVal; 
    document.getElementById('tempValTo').innerText = tempState.toVal; 
}

function tempClear() { 
    tempState.fromVal = '0'; 
    tempState.toVal = '0'; 
    document.getElementById('tempValFrom').innerText = tempState.fromVal; 
    document.getElementById('tempValTo').innerText = tempState.toVal; 
}

/* --- Unit Dropdown Logic --- */
function openTempUnitModal(type, e) {
    e.stopPropagation(); 
    activateTempInput(type);
    
    const optionsList = document.getElementById('tempModalOptionsList');
    let optionsHtml = '';

    for (const unit in tempUnitsData) {
        optionsHtml += `<div class="bmi-modal-option" onclick="selectTempUnit('${type}', '${unit}')" style="color: #333; border-bottom: 1px solid #f0f0f0;">${tempUnitsData[unit].modalLabel}</div>`;
    }
    
    optionsList.innerHTML = optionsHtml;
    document.getElementById('tempUnitModal').style.display = 'flex';
}

function selectTempUnit(type, unit) {
    if (type === 'from') {
        tempState.fromUnit = unit;
        document.getElementById('tempLblFrom').innerText = tempUnitsData[unit].symbol;
        document.getElementById('tempNameFrom').innerText = unit;
    } else {
        tempState.toUnit = unit;
        document.getElementById('tempLblTo').innerText = tempUnitsData[unit].symbol;
        document.getElementById('tempNameTo').innerText = unit;
    }
    closeTempUnitModal();
    calculateTemp(); // Auto calculate when unit changes
}

function closeTempUnitModal() {
    document.getElementById('tempUnitModal').style.display = 'none';
}

/* --- Temperature Math Logic --- */
function convertTemperatureValue(val, fromU, toU) {
    if (fromU === toU) return val;
    let celsius;
    
    // Convert to Celsius first
    if (fromU === "Celsius") celsius = val;
    else if (fromU === "Fahrenheit") celsius = (val - 32) * 5 / 9;
    else if (fromU === "Kelvin") celsius = val - 273.15;
    else if (fromU === "Rankine") celsius = (val - 491.67) * 5 / 9;
    else if (fromU === "Réaumur") celsius = val * 5 / 4;
    
    // Convert Celsius to Target
    let result;
    if (toU === "Celsius") result = celsius;
    else if (toU === "Fahrenheit") result = (celsius * 9 / 5) + 32;
    else if (toU === "Kelvin") result = celsius + 273.15;
    else if (toU === "Rankine") result = (celsius + 273.15) * 9 / 5;
    else if (toU === "Réaumur") result = celsius * 4 / 5;
    
    return parseFloat(result.toFixed(4));
}

/* --- Temperature Calculation Math (Triggered by 'GO') --- */
function calculateTemp() {
    let fromAmt = parseFloat(tempState.fromVal); 
    let toAmt = parseFloat(tempState.toVal);
    
    if (isNaN(fromAmt)) fromAmt = 0;
    if (isNaN(toAmt)) toAmt = 0;

    let finalValue = 0;
    let resultCode = '';
    let baseText = '';
    let targetText = '';

    if (tempState.activeField === 'from') {
        finalValue = convertTemperatureValue(fromAmt, tempState.fromUnit, tempState.toUnit);
        
        tempState.toVal = finalValue.toString();
        document.getElementById('tempValTo').innerText = tempState.toVal;
        
        resultCode = tempState.toUnit;
        baseText = `${fromAmt} ${tempUnitsData[tempState.fromUnit].symbol}`;
        targetText = `${finalValue} ${tempUnitsData[tempState.toUnit].symbol}`;
    } else {
        finalValue = convertTemperatureValue(toAmt, tempState.toUnit, tempState.fromUnit);
        
        tempState.fromVal = finalValue.toString();
        document.getElementById('tempValFrom').innerText = tempState.fromVal;
        
        resultCode = tempState.fromUnit;
        baseText = `${toAmt} ${tempUnitsData[tempState.toUnit].symbol}`;
        targetText = `${finalValue} ${tempUnitsData[tempState.fromUnit].symbol}`;
    }

    document.getElementById('finalTempScore').innerText = finalValue; 
    document.getElementById('finalTempCode').innerText = resultCode; 
    document.getElementById('tempBaseText').innerText = baseText;
    document.getElementById('tempTargetText').innerText = targetText;
    
    document.getElementById('tempKeypad').style.display = 'none'; 
    document.getElementById('tempResultArea').style.display = 'flex'; 
    document.getElementById('tempBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareTempCard() {
    const card = document.getElementById('tempShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Temperature.png", { type: "image/png" });
            const shareData = { 
                title: 'Temperature Conversion', 
                text: 'Check out this temperature conversion from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_Temperature.png");
                });
            } else {
                downloadImage(blob, "Meraj_Temperature.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}
/* ==========================================
   13. FUEL & MILEAGE CALCULATOR
   ========================================== */

let fuelState = { 
    activeField: 'dist', // 'dist', 'mileage', 'price'
    distVal: '0', 
    mileageVal: '0',
    priceVal: '0'
};

function openFuelMode() {
    let html = `
        <div class="bmi-light-wrapper">
            <div class="bmi-light-header">
                <button class="tool-back-btn" onclick="closeToolPage('fuelToolPage')"><i class="fas fa-arrow-left"></i></button>
                <span class="tool-ui-title">Fuel Calculator</span>
                <div style="width: 40px;"></div>
            </div>

            <div id="fuelInputContainer" class="bmi-input-area light" style="padding-top: 5px;">
                
                <div class="bmi-row light active" id="fuelRowDist" onclick="activateFuelInput('dist')" style="padding: 10px 25px;">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">Distance</span>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="fuelValDist" style="font-size:2.8rem;">0</span>
                        <span class="bmi-unit light">Kilometers (km)</span>
                    </div>
                </div>
                
                <div class="bmi-row light" id="fuelRowMileage" onclick="activateFuelInput('mileage')" style="padding: 10px 25px;">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">Mileage</span>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="fuelValMileage" style="font-size:2.8rem;">0</span>
                        <span class="bmi-unit light">km / Liter</span>
                    </div>
                </div>

                <div class="bmi-row light" id="fuelRowPrice" onclick="activateFuelInput('price')" style="padding: 10px 25px; border-bottom: none;">
                    <div class="bmi-label-wrap">
                        <span class="bmi-label light" style="font-weight:bold;">Fuel Price</span>
                    </div>
                    <div class="bmi-val-col light">
                        <span class="bmi-val light" id="fuelValPrice" style="font-size:2.8rem;">0</span>
                        <span class="bmi-unit light">₹ / Liter</span>
                    </div>
                </div>
            </div>

            <div id="fuelKeypad" class="bmi-keypad light">
                <button class="bmi-k-btn light" onclick="fuelType('7')">7</button>
                <button class="bmi-k-btn light" onclick="fuelType('8')">8</button>
                <button class="bmi-k-btn light" onclick="fuelType('9')">9</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="fuelClear()">AC</button>
                
                <button class="bmi-k-btn light" onclick="fuelType('4')">4</button>
                <button class="bmi-k-btn light" onclick="fuelType('5')">5</button>
                <button class="bmi-k-btn light" onclick="fuelType('6')">6</button>
                <button class="bmi-k-btn light bmi-k-action light" onclick="fuelBackspace()"><i class="fas fa-backspace" style="font-size:1.1rem;"></i></button>
                
                <button class="bmi-k-btn light" onclick="fuelType('1')">1</button>
                <button class="bmi-k-btn light" onclick="fuelType('2')">2</button>
                <button class="bmi-k-btn light" onclick="fuelType('3')">3</button>
                <button class="bmi-k-btn light bmi-k-action light bmi-go light" onclick="calculateFuel()">GO</button>
                
                <button class="bmi-k-btn light"></button>
                <button class="bmi-k-btn light" onclick="fuelType('0')">0</button>
                <button class="bmi-k-btn light" onclick="fuelType('.')">.</button>
            </div>

            <div id="fuelResultArea" class="bmi-result-area light">
                <div class="bmi-res-card light" id="fuelShareCard">
                    <div class="bmi-score-row" style="flex-direction:column; gap:5px;">
                        <span class="bmi-text" style="color:#555; font-size:1.2rem;">Estimated Fuel Cost</span>
                        <span class="bmi-res-num" id="finalFuelScore" style="font-size:3.5rem; word-break:break-all; text-align:center; color:var(--primary);">₹0</span>
                    </div>
                    
                    <div class="bmi-card-divider"></div>
                    
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem; color:#555;">
                        <span>Fuel Required:</span> <span id="resFuelLiters" style="font-weight:bold; color:#333;">0 Liters</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem; color:#555;">
                        <span>Total Distance:</span> <span id="resFuelDist" style="font-weight:bold; color:#333;">0 km</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:1.1rem; color:#555;">
                        <span>Vehicle Mileage:</span> <span id="resFuelMil" style="font-weight:bold; color:#333;">0 km/l</span>
                    </div>
                    
                    <div class="bmi-powered-text" style="margin-top:25px;">Powered by Meraj Calculator</div>
                </div>
            </div>

            <div id="fuelBottomBar" class="bmi-bottom-bar" style="display: none;">
                <button class="bmi-share-btn-full" onclick="shareFuelCard()">Share</button>
            </div>

        </div>`;
    openGenericTool('fuelToolPage', 'Fuel Calculator', html);
    activateFuelInput('dist');
}

/* --- Input & Keypad Logic --- */
function activateFuelInput(field) { 
    fuelState.activeField = field; 
    
    document.getElementById('fuelRowDist').classList.remove('active'); 
    document.getElementById('fuelRowMileage').classList.remove('active'); 
    document.getElementById('fuelRowPrice').classList.remove('active'); 
    
    if(field === 'dist') document.getElementById('fuelRowDist').classList.add('active'); 
    else if(field === 'mileage') document.getElementById('fuelRowMileage').classList.add('active'); 
    else document.getElementById('fuelRowPrice').classList.add('active'); 
    
    document.getElementById('fuelResultArea').style.display = 'none'; 
    document.getElementById('fuelBottomBar').style.display = 'none'; 
    document.getElementById('fuelKeypad').style.display = 'grid'; 
}

function fuelType(val) { 
    let current;
    if (fuelState.activeField === 'dist') current = fuelState.distVal;
    else if (fuelState.activeField === 'mileage') current = fuelState.mileageVal;
    else current = fuelState.priceVal;

    if (current === '0' && val !== '.') current = val; 
    else { 
        if (val === '.' && current.includes('.')) return; 
        if (current.length > 7) return; 
        current += val; 
    } 

    if (fuelState.activeField === 'dist') { fuelState.distVal = current; document.getElementById('fuelValDist').innerText = current; }
    else if (fuelState.activeField === 'mileage') { fuelState.mileageVal = current; document.getElementById('fuelValMileage').innerText = current; }
    else { fuelState.priceVal = current; document.getElementById('fuelValPrice').innerText = current; }
}

function fuelBackspace() { 
    let current;
    if (fuelState.activeField === 'dist') current = fuelState.distVal;
    else if (fuelState.activeField === 'mileage') current = fuelState.mileageVal;
    else current = fuelState.priceVal;

    current = current.slice(0, -1); 
    if(current === '') current = '0'; 

    if (fuelState.activeField === 'dist') { fuelState.distVal = current; document.getElementById('fuelValDist').innerText = current; }
    else if (fuelState.activeField === 'mileage') { fuelState.mileageVal = current; document.getElementById('fuelValMileage').innerText = current; }
    else { fuelState.priceVal = current; document.getElementById('fuelValPrice').innerText = current; }
}

function fuelClear() { 
    fuelState.distVal = '0'; 
    fuelState.mileageVal = '0'; 
    fuelState.priceVal = '0'; 
    document.getElementById('fuelValDist').innerText = '0'; 
    document.getElementById('fuelValMileage').innerText = '0'; 
    document.getElementById('fuelValPrice').innerText = '0'; 
}

/* --- Calculation Math (Triggered by 'GO') --- */
function calculateFuel() {
    let d = parseFloat(fuelState.distVal) || 0; 
    let m = parseFloat(fuelState.mileageVal) || 0;
    let p = parseFloat(fuelState.priceVal) || 0;
    
    if (d === 0 || m === 0 || p === 0) return alert("Please enter Distance, Mileage, and Fuel Price.");

    let litersNeeded = d / m;
    let totalCost = litersNeeded * p;

    // Update Result Card UI
    document.getElementById('finalFuelScore').innerText = '₹' + Math.round(totalCost).toLocaleString('en-IN'); 
    document.getElementById('resFuelLiters').innerText = litersNeeded.toFixed(2) + ' Liters';
    document.getElementById('resFuelDist').innerText = d + ' km';
    document.getElementById('resFuelMil').innerText = m + ' km/l';
    
    // Hide Keypad, Show Card & Share Button
    document.getElementById('fuelKeypad').style.display = 'none'; 
    document.getElementById('fuelResultArea').style.display = 'flex'; 
    document.getElementById('fuelBottomBar').style.display = 'block'; 
}

/* --- Share Image Function --- */
function shareFuelCard() {
    const card = document.getElementById('fuelShareCard');
    
    html2canvas(card, { backgroundColor: "#ffffff", scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], "Meraj_Fuel_Cost.png", { type: "image/png" });
            const shareData = { 
                title: 'Fuel Calculation', 
                text: 'Check out my Fuel Cost estimation from Meraj Calculator!', 
                files: [file] 
            };
            
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                navigator.share(shareData).catch(err => {
                    downloadImage(blob, "Meraj_Fuel_Cost.png");
                });
            } else {
                downloadImage(blob, "Meraj_Fuel_Cost.png");
                alert("Image Saved to Downloads!");
            }
        });
    });
}

/* ============================================================
   14. MERAJ HYDRATION TRACKER (BLUE THEME FIXED)
   ============================================================ */

window.waterState = { 
    goalML: 3000,   
    currentML: 0,   
    history: {}     
};

window.openWaterMode = function() {
    let today = new Date().toLocaleDateString('en-GB'); 
    let savedData = JSON.parse(localStorage.getItem('meraj_water_history')) || {};
    waterState.history = savedData;

    if (waterState.history[today]) {
        waterState.currentML = waterState.history[today].current;
        waterState.goalML = waterState.history[today].goal;
    } else {
        waterState.currentML = 0;
        let dates = Object.keys(waterState.history);
        if(dates.length > 0) {
            let lastDate = dates[dates.length - 1];
            waterState.goalML = waterState.history[lastDate].goal;
        }
    }

    let html = `
        <style>
            #waterToolPage > .tool-ui-header { display: none !important; }
            .meraj-water-bg { background: var(--bg-color, #ffffff); height: 100%; display: flex; flex-direction: column; font-family: sans-serif; }
            
            /* 🌊 Water Wave Animation */
            .meraj-liquid-ring { width: 260px; height: 260px; margin: 30px auto; border-radius: 50%; background: var(--feature-card-bg, #fff); box-shadow: 0 10px 35px rgba(0,0,0,0.06); padding: 8px; position: relative; border: 2px solid #f1f3f4; }
            .meraj-liquid-circle { width: 100%; height: 100%; border-radius: 50%; overflow: hidden; position: relative; background: #f8f9fa; display: flex; justify-content: center; align-items: center; }
            .meraj-liquid-wave { position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(180deg, #38bdf8 0%, #0284c7 100%); transition: height 1s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 1; }
            
            .meraj-liquid-wave::before, .meraj-liquid-wave::after { content: ""; position: absolute; width: 400px; height: 400px; bottom: 100%; left: 50%; margin-left: -200px; margin-bottom: -20px; background: #f8f9fa; border-radius: 40%; animation: spinWave 6s linear infinite; }
            .meraj-liquid-wave::after { border-radius: 45%; background: rgba(248, 249, 250, 0.5); animation: spinWave 8s linear infinite; }
            @keyframes spinWave { 100% { transform: rotate(360deg); } }
            
            .meraj-water-info { position: relative; z-index: 10; text-align: center; }
            .meraj-w-val { font-size: 3.5rem; font-weight: 900; color: #111; line-height: 1; }
            .meraj-w-goal { font-size: 1.1rem; font-weight: 600; color: #666; margin-top: 5px; }
            
            /* Add Buttons Theme */
            .meraj-q-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; padding: 0 20px; margin-top: 15px; }
            .meraj-q-btn { background: var(--feature-card-bg, #fff); border: 2px solid #f1f3f4; padding: 18px 5px; border-radius: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; transition: 0.2s; }
            .meraj-q-btn:active { transform: scale(0.95); background: #f0f7ff; border-color: var(--primary, #007bff); }
            .meraj-q-icon { font-size: 1.6rem; color: #555; }
            .meraj-q-text { font-size: 0.9rem; font-weight: 700; color: #333; }
            .meraj-q-btn:active .meraj-q-icon { color: var(--primary, #007bff); }

            /* ✨ Undo Button Fixed: Click feedback add kar diya ✨ */
            .meraj-undo-btn {
                background: rgba(255, 68, 68, 0.1); 
                border-radius: 12px; 
                border: none; 
                color: #ff4444; 
                font-weight: 700; 
                padding: 12px 25px; 
                cursor: pointer; 
                transition: all 0.1s ease;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                outline: none;
            }

            .meraj-undo-btn:active {
                background: #ff4444 !important; 
                color: #ffffff !important; 
                transform: scale(0.92); /* Button niche dabega */
            }

            .meraj-modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 20000; align-items: center; justify-content: center; backdrop-filter: blur(2px); padding: 20px; }
            .meraj-modal-box { background: #fff; width: 100%; max-width: 340px; border-radius: 20px; padding: 25px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); animation: popIn 0.25s; }
        </style>

        <div class="meraj-water-bg">
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 15px 20px; background: #fff; border-bottom: 1px solid #f1f3f4; z-index: 10;">
                <button onclick="closeToolPage('waterToolPage')" style="background:none; border:none; font-size: 1.4rem; color: #333; cursor: pointer;"><i class="fas fa-arrow-left"></i></button>
                <span style="font-size: 1.3rem; font-weight: 800; color: #111;">Hydration</span>
                <div style="display:flex; gap:15px;">
                    <button onclick="document.getElementById('waterHistoryModal').style.display='flex'; renderWaterHistory();" style="background:none; border:none; font-size:1.3rem; color:var(--primary, #007bff);"><i class="fas fa-history"></i></button>
                    <button onclick="document.getElementById('waterSettingsModal').style.display='flex'" style="background:none; border:none; font-size:1.3rem; color:#555;"><i class="fas fa-cog"></i></button>
                </div>
            </div>

            <div style="flex:1; overflow-y:auto; padding-bottom: 30px;">
                <div class="meraj-liquid-ring">
                    <div class="meraj-liquid-circle">
                        <div id="liquidWaveAnim" class="meraj-liquid-wave"></div>
                        <div class="meraj-water-info">
                            <div id="wTitle" style="font-size:0.9rem; font-weight:800; color:#888; text-transform:uppercase;">Today's Intake</div>
                            <div id="wValue" class="meraj-w-val">0.00 <span style="font-size:1.8rem; font-weight:700;">L</span></div>
                            <div id="wGoal" class="meraj-w-goal">Target: 3.00 L</div>
                        </div>
                    </div>
                </div>

                <div class="meraj-q-grid">
                    <button class="meraj-q-btn" onclick="addWaterPro(150)">
                        <i class="fas fa-coffee meraj-q-icon"></i>
                        <span class="meraj-q-text">150 ml</span>
                    </button>
                    <button class="meraj-q-btn" onclick="addWaterPro(250)" style="border-color: var(--primary, #007bff); background: #f0f7ff;">
                        <i class="fas fa-glass-water meraj-q-icon" style="color: var(--primary, #007bff);"></i>
                        <span class="meraj-q-text" style="color: var(--primary, #007bff);">250 ml</span>
                    </button>
                    <button class="meraj-q-btn" onclick="addWaterPro(500)">
                        <i class="fas fa-bottle-water meraj-q-icon"></i>
                        <span class="meraj-q-text">500 ml</span>
                    </button>
                </div>

                <div style="text-align: center; margin-top: 25px;">
                    <button class="meraj-undo-btn" onclick="addWaterPro(-250)">
                        <i class="fas fa-undo"></i> Undo Last
                    </button>
                </div>
            </div>

            <div id="waterSettingsModal" class="meraj-modal">
                <div class="meraj-modal-box">
                    <h3 style="margin:0 0 15px 0;">Daily Target</h3>
                    <input type="number" id="waterGoalInput" value="${waterState.goalML}" style="width: 100%; padding: 15px; border-radius: 12px; border: 2px solid var(--primary, #007bff); background: #f0f7ff; outline: none; font-weight: bold; font-size: 1.2rem; box-sizing:border-box;">
                    <div style="display:flex; gap:10px; margin-top:20px;">
                        <button onclick="document.getElementById('waterSettingsModal').style.display='none'" style="flex:1; padding:12px; background:#f1f3f4; border-radius:10px; border:none;">Cancel</button>
                        <button onclick="saveWaterSettingsPro()" style="flex:1; padding:12px; background:var(--primary, #007bff); border-radius:10px; border:none; color:#fff; font-weight:bold;">Save</button>
                    </div>
                </div>
            </div>

            <div id="waterHistoryModal" class="meraj-modal">
                <div class="meraj-modal-box" style="height: 70vh; display:flex; flex-direction:column;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                        <h2 style="margin:0;">History</h2>
                        <button onclick="document.getElementById('waterHistoryModal').style.display='none'" style="background:none; border:none; font-size:1.4rem;"><i class="fas fa-times"></i></button>
                    </div>
                    <div id="waterHistoryList" style="overflow-y: auto; flex:1;"></div>
                </div>
            </div>
<div id="waterDeleteConfirmModal" class="meraj-universal-modal">
    <div class="meraj-modal-content">
        <h3>Delete History?</h3>
        <p>Are you sure you want to delete <br><span id="deleteDateDisplay" style="font-weight:bold; color:#111;"></span> history? This cannot be undone.</p>
        <div class="meraj-modal-actions">
            <button class="m-btn m-btn-cancel" onclick="closeDeleteModal()">Cancel</button>
            <button class="m-btn m-btn-danger" onclick="confirmDeleteEntry()">Delete</button>
        </div>
    </div>
</div>
        </div>`;

    
    openGenericTool('waterToolPage', 'Hydration', html);
    updateWaterUIPro();
}

// ... baaki logic (addWaterPro, saveWaterSettingsPro, etc.) same rahega ...


window.addWaterPro = function(ml) {
    // Click ka signal dene ke liye vibration
    if(navigator.vibrate) navigator.vibrate(15);
    
    waterState.currentML += ml;
    if(waterState.currentML < 0) waterState.currentML = 0;
    
    updateWaterUIPro();
    saveWaterDataPro();
};

window.saveWaterSettingsPro = function() {
    let newGoal = parseInt(document.getElementById('waterGoalInput').value) || 3000;
    waterState.goalML = newGoal;
    document.getElementById('waterSettingsModal').style.display = 'none';
    updateWaterUIPro();
    saveWaterDataPro();
};

window.updateWaterUIPro = function() {
    let currentLiters = (waterState.currentML / 1000).toFixed(2);
    let goalLiters = (waterState.goalML / 1000).toFixed(2);
    let percent = Math.round((waterState.currentML / waterState.goalML) * 100);
    
    document.getElementById('wValue').innerHTML = currentLiters + ' <span style="font-size:1.8rem; font-weight:700;">L</span>';
    document.getElementById('wGoal').innerText = "Target: " + goalLiters + " L";
    
    let fillBg = document.getElementById('liquidWaveAnim');
    let fillHeight = percent > 105 ? 105 : percent; 
    fillBg.style.height = fillHeight + "%";

    let titleEl = document.getElementById('wTitle');
    let valEl = document.getElementById('wValue');
    let goalEl = document.getElementById('wGoal');

    // FIX: Text shadow for readability when underwater
    if(fillHeight >= 55) {
        titleEl.style.color = "rgba(255,255,255,0.9)";
        valEl.style.color = "#ffffff";
        valEl.style.textShadow = "0 2px 8px rgba(0,0,0,0.3)";
        goalEl.style.color = "rgba(255,255,255,0.9)";
    } else {
        titleEl.style.color = "#888";
        valEl.style.color = "#111"; // Original Black Text
        valEl.style.textShadow = "none";
        goalEl.style.color = "#666";
    }
};

window.saveWaterDataPro = function() {
    let today = new Date().toLocaleDateString('en-GB');
    waterState.history[today] = { current: waterState.currentML, goal: waterState.goalML };
    localStorage.setItem('meraj_water_history', JSON.stringify(waterState.history));
};

window.renderWaterHistory = function() {
    let historyDiv = document.getElementById('waterHistoryList');
    let dates = Object.keys(waterState.history).reverse(); 
    
    if(dates.length === 0) {
        historyDiv.innerHTML = `<div style="text-align:center; padding: 40px 10px; color:#888;">No history found.</div>`;
    } else {
        let html = '';
        dates.forEach(date => {
            let data = waterState.history[date];
            let percent = Math.round((data.current / data.goal) * 100);
            
            html += `
                <div style="background:#fff; border:1px solid #f1f3f4; border-radius:12px; padding:15px; margin-bottom:12px; display:flex; align-items:center; justify-content:space-between;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <button onclick="deleteWaterEntry('${date}')" style="background:none; border:none; color:#ff4444; font-size:1.1rem; cursor:pointer; padding:5px;">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <div>
                            <div style="font-weight:700; color:#111;">${date === new Date().toLocaleDateString('en-GB') ? 'Today' : date}</div>
                            <div style="font-size:0.85rem; color:#666;">${(data.current/1000).toFixed(2)}L / ${(data.goal/1000).toFixed(2)}L</div>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:1.1rem; font-weight:800; color:var(--primary);">${percent}%</div>
                    </div>
                </div>`;
        });
        historyDiv.innerHTML = html;
    }
};
window.deleteWaterEntry = function(date) {
    window.dateToDelete = date; 
    let modal = document.getElementById('waterDeleteConfirmModal');
    if(modal) {
        document.getElementById('deleteDateDisplay').innerText = date;
        modal.style.display = 'flex';
    }
};

window.confirmDeleteEntry = function() {
    if(window.dateToDelete) {
        delete waterState.history[window.dateToDelete];
        localStorage.setItem('meraj_water_history', JSON.stringify(waterState.history));
        renderWaterHistory();
        if(navigator.vibrate) navigator.vibrate(30); 
    }
    closeDeleteModal();
};

window.closeDeleteModal = function() {
    document.getElementById('waterDeleteConfirmModal').style.display = 'none';
};


/* home.js handles the keyboard system — no duplicate needed here */

/* ============================================================
   TOOL FUNCTION ALIASES — tools.js can call these via window._openXxx
   ============================================================ */
(function() {
    var toolMap = {
        '_openBmiMode':       typeof openBmiMode !== 'undefined' ? openBmiMode : null,  /* Bug #6 Fix */
        '_openCurrencyMode':  openCurrencyMode,
        '_openEMIMode':       openEMIMode,
        '_openGSTMode':       openGSTMode,
        '_openDiscountMode':  openDiscountMode,
        '_openLengthMode':    openLengthMode,
        '_openAreaMode':      openAreaMode,
        '_openVolumeMode':    openVolumeMode,
        '_openWeightMode':    openWeightMode,
        '_openSpeedMode':     openSpeedMode,
        '_openDataMode':      openDataMode,
        '_openTempMode':      openTempMode,
        '_openFuelMode':      typeof openFuelMode !== 'undefined' ? openFuelMode : null,
        '_openWaterMode':     typeof openWaterMode !== 'undefined' ? openWaterMode : null,
        '_openAgeMode':       typeof openAgeMode !== 'undefined' ? openAgeMode : null,
        '_openDateMode':      typeof openDateMode !== 'undefined' ? openDateMode : null,
        '_openLandMode':      typeof openLandMode !== 'undefined' ? openLandMode : null,
    };
    Object.keys(toolMap).forEach(function(k) {
        if (toolMap[k]) window[k] = toolMap[k];
    });
})();

/* ============================================================
   MISSING HELPER FUNCTIONS
   ============================================================ */

/* Number to Indian words (e.g. 12500 → "Twelve Thousand Five Hundred") */
window.numberToWordsIndian = function(num) {
    if (num === 0) return 'Zero';
    if (!isFinite(num) || isNaN(num)) return '';
    var ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                'Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen',
                'Eighteen','Nineteen'];
    var tens = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
    function convert(n) {
        if (n < 20) return ones[n];
        if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? ' ' + ones[n%10] : '');
        if (n < 1000) return ones[Math.floor(n/100)] + ' Hundred' + (n%100 ? ' ' + convert(n%100) : '');
        return '';
    }
    var n = Math.floor(Math.abs(num));
    var parts = [];
    if (n >= 10000000) { parts.push(convert(Math.floor(n/10000000)) + ' Crore'); n %= 10000000; }
    if (n >= 100000)   { parts.push(convert(Math.floor(n/100000)) + ' Lakh'); n %= 100000; }
    if (n >= 1000)     { parts.push(convert(Math.floor(n/1000)) + ' Thousand'); n %= 1000; }
    if (n > 0)         { parts.push(convert(n)); }
    return parts.join(' ');
};

/* Bill Splitter calculation */
window.calculateBillSplit = function() {
    var amount = parseFloat(document.getElementById('billAmount').value);
    var tip    = parseFloat(document.getElementById('billTip').value) || 0;
    var persons= parseInt(document.getElementById('billPersons').value) || 1;
    if (!amount || amount <= 0) {
        var el = document.getElementById('billAmount');
        if (el) { el.style.borderColor = 'var(--danger)'; setTimeout(function(){ el.style.borderColor='var(--border-color)'; }, 800); }
        return;
    }
    var tipAmt   = amount * (tip / 100);
    var total    = amount + tipAmt;
    var perPerson= total / persons;
    var card = document.getElementById('billResultCard');
    if (card) {
        card.style.display = 'block';
        document.getElementById('resPerPerson').innerText = '₹' + perPerson.toLocaleString('en-IN', {maximumFractionDigits: 2});
        document.getElementById('resTotalBill').innerText = '₹' + total.toLocaleString('en-IN', {maximumFractionDigits: 2});
        document.getElementById('resTipAmount').innerText = '₹' + tipAmt.toLocaleString('en-IN', {maximumFractionDigits: 2});
        if (navigator.vibrate) navigator.vibrate(30);
    }
};

/* Profit Calculator live update listener */
document.addEventListener('input', function(e) {
    var id = e.target && e.target.id;
    if (id === 'profit_cost' || id === 'profit_margin') {
        if (typeof window.calculateProfit === 'function') window.calculateProfit();
    }
});

/* Formula Reference Book */
window.openHomeTool_Formula = function() {
    var categories = [
        { title: 'Geometry', icon: 'fas fa-shapes', color: 'var(--primary)', formulas: [
            { name: 'Circle Area', formula: 'A = π r²' },
            { name: 'Circle Perimeter', formula: 'P = 2πr' },
            { name: 'Rectangle Area', formula: 'A = l × w' },
            { name: 'Triangle Area', formula: 'A = ½ b × h' },
            { name: 'Sphere Volume', formula: 'V = 4/3 πr³' },
            { name: 'Cylinder Volume', formula: 'V = πr²h' },
        ]},
        { title: 'Finance', icon: 'fas fa-rupee-sign', color: 'var(--success)', formulas: [
            { name: 'Simple Interest', formula: 'SI = P × R × T / 100' },
            { name: 'Compound Interest', formula: 'CI = P(1 + R/n)^(nT) - P' },
            { name: 'EMI', formula: 'EMI = P×r×(1+r)^n / ((1+r)^n - 1)' },
            { name: 'Profit %', formula: 'Profit% = (Profit/CP) × 100' },
            { name: 'Discount %', formula: 'Disc% = (Disc/MP) × 100' },
            { name: 'GST Amount', formula: 'GST = Price × Rate / 100' },
        ]},
        { title: 'Physics', icon: 'fas fa-atom', color: 'var(--info)', formulas: [
            { name: 'Speed', formula: 'v = d / t' },
            { name: 'Acceleration', formula: 'a = (v-u) / t' },
            { name: "Newton's 2nd Law", formula: 'F = m × a' },
            { name: 'Kinetic Energy', formula: 'KE = ½ mv²' },
            { name: 'Potential Energy', formula: 'PE = m × g × h' },
            { name: 'Ohm\'s Law', formula: 'V = I × R' },
        ]},
        { title: 'Maths', icon: 'fas fa-square-root-alt', color: 'var(--danger)', formulas: [
            { name: 'Quadratic Formula', formula: 'x = (-b ± √(b²-4ac)) / 2a' },
            { name: 'Pythagoras', formula: 'c² = a² + b²' },
            { name: 'Distance Formula', formula: 'd = √((x₂-x₁)² + (y₂-y₁)²)' },
            { name: 'Slope', formula: 'm = (y₂-y₁) / (x₂-x₁)' },
            { name: 'Permutations', formula: 'P(n,r) = n! / (n-r)!' },
            { name: 'Combinations', formula: 'C(n,r) = n! / (r!(n-r)!)' },
        ]},
    ];

    var categoriesHtml = categories.map(function(cat) {
        var formulasHtml = cat.formulas.map(function(f) {
            return '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 15px;border-bottom:1px solid var(--border-color);">' +
                '<span style="color:var(--text-main);font-weight:600;font-size:0.95rem;">' + f.name + '</span>' +
                '<span style="color:' + cat.color + ';font-weight:800;font-size:0.95rem;font-family:monospace;">' + f.formula + '</span>' +
                '</div>';
        }).join('');

        return '<div class="meraj-card" style="margin-bottom:15px;overflow:hidden;">' +
            '<div style="display:flex;align-items:center;gap:12px;padding:15px;background:var(--bg-sec);border-bottom:1px solid var(--border-color);">' +
            '<div style="width:38px;height:38px;border-radius:12px;background:' + cat.color + ';display:flex;align-items:center;justify-content:center;">' +
            '<i class="' + cat.icon + '" style="color:#fff;font-size:1.1rem;"></i></div>' +
            '<span style="font-size:1.1rem;font-weight:800;color:var(--text-main);">' + cat.title + '</span></div>' +
            formulasHtml + '</div>';
    }).join('');

    var html = '<div style="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-main);">' +
        '<div style="flex:1;overflow-y:auto;padding:15px;padding-bottom:30px;">' +
        categoriesHtml + '</div></div>';

    openGenericTool('homeFormulaTool', 'Formula Book', html);
};