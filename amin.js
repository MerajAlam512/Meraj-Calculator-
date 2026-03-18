/* =====================================================================
   AMIN.JS  ·  Professional Land Measurement Tool  ·  v5.1
   Meraj Calculator Pro  —  by Meraj Alam
   Bug #17 Fix — 'use strict' other files ke saath consistent

   CSS: style.css mein hai (AMIN TOOL section).
        Yahan sirf pure JS logic hai — koi inline style ya CSS nahi.

   Token mapping (style.css se):
     brand colour  → var(--primary) / --primary-dark / --primary-a*
     green         → var(--success)
     red/danger    → var(--danger)  / --danger-light
     blue          → var(--info)
     backgrounds   → var(--bg-main) / --bg-sec / --bg-card
     text          → var(--text-main) / --text-muted / --text-inverse
     border        → var(--border-color)
     shadows       → var(--shadow-sm) / --shadow-md / --shadow-primary
   ===================================================================== */

"use strict";

/* ══════════════════════════════════════════════
   § 1 · STATE
   ══════════════════════════════════════════════ */
window.jaminState = window.jaminState || {
    shape:        'amin',
    lengthCount:  2,
    widthCount:   2,
    dimensions:   {},
    activeField:  'L1',
    currentNum:   '',
    lastResult:   null
};

/* Unit → feet conversion multipliers */
const UNIT_MUL = {
    ft:   1,
    inch: 1 / 12,
    m:    3.280839895,
    cm:   0.032808399,
    gaj:  3,
    kari: 0.66
};

const UNIT_SYM  = { ft:'ft', inch:'in', m:'m', cm:'cm', gaj:'Gaj', kari:'Kari' };
const UNIT_NAME = { ft:'Foot', inch:'Inch', m:'Meter', cm:'CM', gaj:'Gaj', kari:'Kari' };

const MAX_FIELDS = 8;

window.getJaminHistory = () =>
    JSON.parse(localStorage.getItem('meraj_jamin_history') || '[]');

/* ══════════════════════════════════════════════
   § 2 · HTML TEMPLATE
   CSS classes → style.css ke AMIN TOOL section se
   ══════════════════════════════════════════════ */
const AMIN_HTML = `
<div class="amin-wrapper">

    <!-- ── Header ── -->
    <div class="amin-header">
        <div class="amin-header-left">
            <button class="amin-back-btn"
                    onclick="closeToolPage('landToolPage')"
                    aria-label="Back">
                <i class="fas fa-arrow-left"></i>
            </button>
            <div class="amin-header-title">
                <i class="fas fa-drafting-compass"></i>
                Amin Tool
                <span class="amin-header-badge">PRO</span>
            </div>
        </div>
        <button class="amin-history-btn"
                onclick="openJaminHistory()"
                aria-label="Field Diary">
            <i class="fas fa-book-open"></i>
        </button>
    </div>

    <!-- ── Shape Tabs ── -->
    <div class="plot-tabs">
        <div id="tabChakor" class="plot-tab" onclick="setJaminShape('chakor')">
            <i class="fas fa-vector-square"></i>
            <span>Sidhi</span>
        </div>
        <div id="tabAmin" class="plot-tab active" onclick="setJaminShape('amin')">
            <i class="fas fa-draw-polygon"></i>
            <span>Tedhi</span>
        </div>
        <div id="tabGol" class="plot-tab" onclick="setJaminShape('gol')">
            <i class="fas fa-circle-notch"></i>
            <span>Gol</span>
        </div>
    </div>

    <!-- ── Scrollable Input Area ── -->
    <div id="jaminInputArea" class="amin-input-area"></div>

    <!-- ── Bottom Action Bar ── -->
    <div class="amin-bottom-bar">
        <button class="amin-btn amin-btn-clear" onclick="clearAllJaminConfirm()">
            <i class="fas fa-rotate-left"></i> Reset
        </button>
        <button class="amin-btn amin-btn-calc" onclick="calculateJamin()">
            <i class="fas fa-ruler-combined"></i> Napein
        </button>
    </div>

    <!-- ════════════════════════════════════════
         NUMBER PAD  (slide-up sheet)
         ════════════════════════════════════════ -->
    <div id="jaminMultiPad" class="amin-pad">

        <div class="pad-topbar">
            <span class="pad-field-label" id="padFieldLabel">Measurement</span>
            <button class="pad-close-btn" onclick="closeMultiPad()" aria-label="Close">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div class="pad-display">
            <div class="pad-history-line" id="padHistory"></div>
            <div class="pad-current-text" id="padCurrent">0</div>
        </div>

        <div class="pad-unit-row">
            <button class="pad-unit-btn feet"  onclick="addUnitToField('ft')">Feet</button>
            <button class="pad-unit-btn inch"  onclick="addUnitToField('inch')">Inch</button>
            <button class="pad-unit-btn kari"  onclick="addUnitToField('kari')">Kari</button>
            <button class="pad-unit-btn meter" onclick="addUnitToField('m')">Meter</button>
            <button class="pad-unit-btn gaj"   onclick="addUnitToField('gaj')">Gaj</button>
            <button class="pad-unit-btn cm"    onclick="addUnitToField('cm')">CM</button>
        </div>

        <div class="pad-keys">
            <button class="k-btn" onclick="jType('7')">7</button>
            <button class="k-btn" onclick="jType('8')">8</button>
            <button class="k-btn" onclick="jType('9')">9</button>
            <button class="k-btn del" onclick="jBackspace()">
                <i class="fas fa-backspace"></i>
            </button>

            <button class="k-btn" onclick="jType('4')">4</button>
            <button class="k-btn" onclick="jType('5')">5</button>
            <button class="k-btn" onclick="jType('6')">6</button>
            <button class="k-btn clear" onclick="jClearCurrent()">CLR</button>

            <button class="k-btn" onclick="jType('1')">1</button>
            <button class="k-btn" onclick="jType('2')">2</button>
            <button class="k-btn" onclick="jType('3')">3</button>
            <button class="k-btn ok" onclick="closeMultiPad()">OK</button>

            <button class="k-btn" onclick="jType('00')">00</button>
            <button class="k-btn" onclick="jType('0')">0</button>
            <button class="k-btn" onclick="jType('.')">.</button>
        </div>
    </div>

    <!-- ════════════════════════════════════════
         RESULT POPUP
         ════════════════════════════════════════ -->
    <div id="jaminResultPopup" class="jamin-result-overlay">
        <div class="result-card">
            <div id="jaminShareCard">

                <div class="result-card-header">
                    <div class="result-verified-stamp">VERIFIED</div>
                    <div class="result-card-title">
                        <i class="fas fa-map-marked-alt"></i> Land Report
                    </div>
                    <div class="result-shape-sub" id="jaminShapeNameText"></div>
                </div>

                <div class="result-main-val-wrap">
                    <div class="result-main-label">Total Area</div>
                    <div class="result-main-num" id="resJaminSqFt">0.00</div>
                    <div class="result-main-unit">Square Feet</div>
                </div>

                <div class="result-grid">
                    <div class="result-cell">
                        <span class="result-cell-label">Decimal</span>
                        <span class="result-cell-val" id="resJaminDecimal">0.000</span>
                    </div>
                    <div class="result-cell">
                        <span class="result-cell-label">Dhur</span>
                        <span class="result-cell-val" id="resJaminDhur">0.00</span>
                    </div>
                    <div class="result-cell highlight">
                        <span class="result-cell-label">Katha</span>
                        <span class="result-cell-val" id="resJaminKatha">0.000</span>
                    </div>
                    <div class="result-cell">
                        <span class="result-cell-label">Bigha</span>
                        <span class="result-cell-val" id="resJaminBigha">0.0000</span>
                    </div>
                    <div class="result-cell">
                        <span class="result-cell-label">Acre</span>
                        <span class="result-cell-val" id="resJaminAcre">0.0000</span>
                    </div>
                    <div class="result-cell">
                        <span class="result-cell-label">Hectare</span>
                        <span class="result-cell-val" id="resJaminHectare">0.0000</span>
                    </div>
                    <div class="result-cell full">
                        <span class="result-cell-label">Square Meter</span>
                        <span class="result-cell-val" id="resJaminSqM">0.00</span>
                    </div>
                </div>

            </div><!-- /#jaminShareCard -->

            <div class="result-actions">
                <button class="result-btn close"
                        onclick="document.getElementById('jaminResultPopup').style.display='none'">
                    <i class="fas fa-times"></i> Close
                </button>
                <button class="result-btn share" onclick="shareJaminResult()">
                    <i class="fab fa-whatsapp"></i> Share
                </button>
            </div>
        </div>
    </div>

    <!-- ════════════════════════════════════════
         HISTORY SHEET
         ════════════════════════════════════════ -->
    <div id="jaminHistoryModal" class="jamin-history-overlay">
        <div class="history-sheet">
            <div class="history-sheet-header">
                <div class="history-sheet-title">
                    <i class="fas fa-book"></i> Field Diary
                </div>
                <button class="history-sheet-close"
                        onclick="document.getElementById('jaminHistoryModal').style.display='none'"
                        aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div id="jaminHistoryContainer" class="history-scroll"></div>
            <button class="history-del-btn" onclick="openCustomDeleteModal()">
                <i class="fas fa-trash-alt"></i> Delete All Records
            </button>
        </div>
    </div>

    <!-- ════════════════════════════════════════
         CONFIRM MODAL
         ════════════════════════════════════════ -->
    <div id="jaminCustomDeleteModal" class="jamin-confirm-overlay">
        <div class="jamin-confirm-box">
            <div class="jamin-confirm-icon"  id="jaminConfirmIcon">⚠️</div>
            <div class="jamin-confirm-title" id="jaminDeleteModalTitle">Are you sure?</div>
            <div class="jamin-confirm-msg"   id="jaminDeleteModalText">This action cannot be undone.</div>
            <div class="jamin-confirm-btns">
                <button class="jamin-confirm-btn cancel"
                        onclick="closeCustomDeleteModal()">Cancel</button>
                <button class="jamin-confirm-btn danger"
                        id="confirmDeleteActionBtn">Delete</button>
            </div>
        </div>
    </div>

</div>`;

/* ══════════════════════════════════════════════
   § 3 · INIT & OPEN
   ══════════════════════════════════════════════ */

window.initJaminDims = function () {
    const keys = [];
    for (let i = 1; i <= MAX_FIELDS; i++) {
        keys.push('L' + i);
        keys.push('W' + i);
    }
    keys.push('D');
    keys.forEach(k => { window.jaminState.dimensions[k] = []; });
};

window.openLandMode = function () {
    Object.assign(window.jaminState, {
        lengthCount: 2,
        widthCount:  2,
        currentNum:  '',
        shape:       'amin',
        lastResult:  null
    });
    window.initJaminDims();
    openGenericTool('landToolPage', 'Amin Tool', AMIN_HTML);
    window.setJaminShape('amin');
};

/* ══════════════════════════════════════════════
   § 4 · SHAPE TABS & RENDERING
   ══════════════════════════════════════════════ */

window.setJaminShape = function (shape) {
    window.jaminState.shape = shape;
    document.querySelectorAll('.plot-tab').forEach(el => el.classList.remove('active'));
    const tabId = 'tab' + shape.charAt(0).toUpperCase() + shape.slice(1);
    const tab = document.getElementById(tabId);
    if (tab) tab.classList.add('active');
    window.renderAminInputs();
};

window.renderAminInputs = function () {
    const st  = window.jaminState;
    let   html = '';

    if (st.shape === 'chakor') {
        html += _sectionHead('length', '<i class="fas fa-arrows-alt-h"></i> Lambaai (Length)');
        html += _buildFieldRow('L1', 'Length', 'tape-edge', 'length', 1, false);
        html += _sectionHead('width',  '<i class="fas fa-arrows-alt-v"></i> Chaudaai (Width)');
        html += _buildFieldRow('W1', 'Width',  'tape-edge green-edge', 'width', 1, false);

    } else if (st.shape === 'amin') {
        html += _sectionHead('length', '<i class="fas fa-arrows-alt-h"></i> Lambaai (Lengths)');
        for (let i = 1; i <= st.lengthCount; i++) {
            const lbl = i === 1              ? '1st Length'
                      : i === st.lengthCount ? 'Last Length'
                      : `Mid Length ${i}`;
            html += _buildFieldRow('L' + i, lbl, 'tape-edge', 'length', i, i > 1);
        }
        if (st.lengthCount < MAX_FIELDS) {
            html += `<button class="add-dim-btn len" onclick="addJaminField('length')">
                        <i class="fas fa-plus"></i> Add Length
                     </button>`;
        }

        html += _sectionHead('width', '<i class="fas fa-arrows-alt-v"></i> Chaudaai (Widths)');
        for (let i = 1; i <= st.widthCount; i++) {
            const lbl = i === 1             ? '1st Width'
                      : i === st.widthCount ? 'Last Width'
                      : `Mid Width ${i}`;
            html += _buildFieldRow('W' + i, lbl, 'tape-edge green-edge', 'width', i, i > 1);
        }
        if (st.widthCount < MAX_FIELDS) {
            html += `<button class="add-dim-btn wid" onclick="addJaminField('width')">
                        <i class="fas fa-plus"></i> Add Width
                     </button>`;
        }

    } else if (st.shape === 'gol') {
        html += _sectionHead('diam', '<i class="fas fa-circle-notch"></i> Diameter / Ghera');
        html += _buildFieldRow('D', 'Diameter', 'tape-edge blue-edge', 'diam', 1, false);
    }

    document.getElementById('jaminInputArea').innerHTML = html;
};

function _sectionHead(cls, inner) {
    return `<div class="amin-section-head ${cls}">${inner}</div>`;
}

window.buildFieldRow  =
window._buildFieldRow = _buildFieldRow;

function _buildFieldRow(field, label, edgeClass, type, index, isRemovable) {
    const arr      = window.jaminState.dimensions[field] || [];
    const isGreen  = edgeClass.includes('green');
    const isBlue   = edgeClass.includes('blue');
    const badgeCls = isGreen ? 'green' : isBlue ? 'blue' : '';
    const hasData  = arr.length > 0;

    const displayStr = hasData
        ? `<div class="tape-val">${
              arr.map(it =>
                  `<span class="val-badge ${badgeCls}">${it.val}<span class="unit-badge"> ${UNIT_SYM[it.u]}</span></span>`
              ).join('<span class="plus-badge"> + </span>')
          }</div>`
        : `<span class="tape-val empty"><i class="fas fa-hand-pointer" style="margin-right:6px;font-size:.85rem;"></i>Tap to enter reading</span>`;

    const removeBtn = isRemovable
        ? `<button class="row-delete-btn"
               onclick="removeJaminField('${type}',${index});event.stopPropagation();"
               aria-label="Remove row">
               <i class="fas fa-trash-alt"></i>
           </button>`
        : '';

    const cardCls = hasData
        ? `tape-card has-data${isGreen ? ' green' : ''}`
        : 'tape-card';

    return `
    <div class="${cardCls}" onclick="openMultiPad('${field}','${label}')">
        <div class="${edgeClass}"></div>
        <div class="tape-content"${isRemovable ? ' style="padding-right:50px"' : ''}>
            <div class="tape-label">${label}</div>
            <div id="rowDisplay_${field}">${displayStr}</div>
        </div>
        <div class="tape-chevron"><i class="fas fa-chevron-right"></i></div>
        ${removeBtn}
    </div>`;
}

/* ══════════════════════════════════════════════
   § 5 · FIELD ADD / REMOVE
   ══════════════════════════════════════════════ */

window.addJaminField = function (type) {
    if (navigator.vibrate) navigator.vibrate(15);
    const key = type === 'length' ? 'lengthCount' : 'widthCount';
    if (window.jaminState[key] < MAX_FIELDS) window.jaminState[key]++;
    window.renderAminInputs();
};

window.removeJaminField = function (type, index) {
    if (navigator.vibrate) navigator.vibrate([20, 20]);
    const countKey = type === 'length' ? 'lengthCount' : 'widthCount';
    const prefix   = type === 'length' ? 'L'           : 'W';
    const count    = window.jaminState[countKey];

    if (count <= 1) return;

    const hasData = (window.jaminState.dimensions[prefix + index] || []).length > 0;
    if (hasData) {
        _showConfirm(
            '🗑️', 'Remove Reading?',
            'Do you want to delete this measurement row?',
            () => _doRemoveField(type, index, countKey, prefix, count)
        );
    } else {
        _doRemoveField(type, index, countKey, prefix, count);
    }
};

function _doRemoveField(type, index, countKey, prefix, count) {
    for (let i = index; i < count; i++) {
        window.jaminState.dimensions[prefix + i] =
            window.jaminState.dimensions[prefix + (i + 1)] || [];
    }
    window.jaminState.dimensions[prefix + count] = [];
    window.jaminState[countKey]--;
    window.renderAminInputs();
}

/* ══════════════════════════════════════════════
   § 6 · NUMBER PAD
   ══════════════════════════════════════════════ */

window.openMultiPad = function (field, label) {
    window.jaminState.activeField = field;
    window.jaminState.currentNum  = '';
    document.getElementById('padFieldLabel').innerText = label.toUpperCase();
    document.getElementById('jaminMultiPad').style.display = 'block';
    window.updatePadDisplay();
};

window.closeMultiPad = function () {
    document.getElementById('jaminMultiPad').style.display = 'none';
    window.renderAminInputs();
};

window.updatePadDisplay = function () {
    const arr     = window.jaminState.dimensions[window.jaminState.activeField] || [];
    const histStr = arr.map(it => `${it.val} ${UNIT_NAME[it.u]}`).join(' + ');
    document.getElementById('padHistory').innerText = histStr || 'Enter a value, then choose unit ↓';
    document.getElementById('padCurrent').innerText = window.jaminState.currentNum || '0';
};

window.jType = function (val) {
    if (navigator.vibrate) navigator.vibrate(12);
    const st = window.jaminState;
    if (val === '.' && st.currentNum.includes('.')) return;
    if (st.currentNum === '0' && val !== '.') st.currentNum = val;
    else st.currentNum += val;
    window.updatePadDisplay();
};

window.jBackspace = function () {
    if (navigator.vibrate) navigator.vibrate(18);
    const st = window.jaminState;
    if (st.currentNum.length > 0) {
        st.currentNum = st.currentNum.slice(0, -1);
    } else if ((st.dimensions[st.activeField] || []).length > 0) {
        st.dimensions[st.activeField].pop();
    }
    window.updatePadDisplay();
};

window.jClearCurrent = function () {
    if (navigator.vibrate) navigator.vibrate([18, 18]);
    window.jaminState.currentNum = '';
    window.jaminState.dimensions[window.jaminState.activeField] = [];
    window.updatePadDisplay();
};

window.addUnitToField = function (unitKey) {
    if (navigator.vibrate) navigator.vibrate(22);
    const val = parseFloat(window.jaminState.currentNum);
    if (!val || val <= 0) return;
    window.jaminState.dimensions[window.jaminState.activeField].push({ val, u: unitKey });
    window.jaminState.currentNum = '';
    window.updatePadDisplay();
};

/* ══════════════════════════════════════════════
   § 7 · CALCULATION
   ══════════════════════════════════════════════ */

window.getFeetFromField = function (field) {
    return (window.jaminState.dimensions[field] || [])
        .reduce((sum, it) => sum + it.val * UNIT_MUL[it.u], 0);
};

window.calculateJamin = function () {
    const st = window.jaminState;
    let sqFt = 0, shapeName = '';

    if (st.shape === 'chakor') {
        const L = window.getFeetFromField('L1');
        const W = window.getFeetFromField('W1');
        if (!L || !W) return _toast('Error: Length aur Width dono zaroori hain.');
        sqFt      = L * W;
        shapeName = 'Rectangular Plot';

    } else if (st.shape === 'amin') {
        let totalL = 0, validL = 0, totalW = 0, validW = 0;
        for (let i = 1; i <= st.lengthCount; i++) {
            const l = window.getFeetFromField('L' + i);
            if (l > 0) { totalL += l; validL++; }
        }
        for (let i = 1; i <= st.widthCount; i++) {
            const w = window.getFeetFromField('W' + i);
            if (w > 0) { totalW += w; validW++; }
        }
        if (!validL || !validW) return _toast('Error: Kam se kam ek Length aur ek Width zaroori hai.');
        sqFt      = (totalL / validL) * (totalW / validW);
        shapeName = `Irregular Plot (${validL}L \xD7 ${validW}W)`;

    } else if (st.shape === 'gol') {
        const D = window.getFeetFromField('D');
        if (!D) return _toast('Error: Diameter enter karein.');
        sqFt      = Math.PI * (D / 2) ** 2;
        shapeName = 'Circular Plot';
    }

    /* Unit conversions */
    const sqMeter = sqFt / 10.7639;
    const decimal = sqFt / 435.6;
    const dhur    = sqFt / 68.0625;
    const katha   = sqFt / 1361.25;
    const bigha   = sqFt / 27225;
    const acre    = sqFt / 43560;
    const hectare = sqMeter / 10000;

    const fmt = (n, d) => n.toLocaleString('en-IN', { maximumFractionDigits: d });

    document.getElementById('jaminShapeNameText').innerText = shapeName;
    document.getElementById('resJaminSqFt').innerText       = fmt(sqFt,    2);
    document.getElementById('resJaminSqM').innerText        = fmt(sqMeter, 2);
    document.getElementById('resJaminDecimal').innerText    = fmt(decimal, 3);
    document.getElementById('resJaminDhur').innerText       = fmt(dhur,    2);
    document.getElementById('resJaminKatha').innerText      = fmt(katha,   3);
    document.getElementById('resJaminBigha').innerText      = fmt(bigha,   4);
    document.getElementById('resJaminAcre').innerText       = fmt(acre,    4);
    document.getElementById('resJaminHectare').innerText    = fmt(hectare, 4);

    document.getElementById('jaminResultPopup').style.display = 'flex';
    if (navigator.vibrate) navigator.vibrate([30, 15, 30]);

    window.jaminState.lastResult = { shapeName, sqFt, decimal, katha };
    window.saveToJaminHistory(shapeName, sqFt, decimal, katha);
};

/* Non-blocking error helper */
function _toast(msg) {
    if (typeof showToast === 'function') showToast(msg);
    else                                 alert(msg);
}

/* ══════════════════════════════════════════════
   § 8 · HISTORY
   ══════════════════════════════════════════════ */

window.saveToJaminHistory = function (shape, sqft, dec, katha) {
    const history = window.getJaminHistory();
    const now     = new Date();
    const time    = now.toLocaleDateString('en-IN') + '  ' +
                    now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    history.unshift({
        id:    Date.now(),
        time,
        shape,
        sqft:  sqft.toLocaleString('en-IN',  { maximumFractionDigits: 2 }),
        dec:   dec.toLocaleString('en-IN',   { maximumFractionDigits: 2 }),
        katha: katha.toLocaleString('en-IN', { maximumFractionDigits: 2 })
    });

    if (history.length > 50) history.pop();
    try { localStorage.setItem('meraj_jamin_history', JSON.stringify(history)); } catch (e) {}
};

window.openJaminHistory = function () {
    const history   = window.getJaminHistory();
    const container = document.getElementById('jaminHistoryContainer');

    if (history.length === 0) {
        container.innerHTML = `
            <div class="history-empty">
                <i class="fas fa-clipboard-list"></i>
                <p>No field records yet.</p>
            </div>`;
    } else {
        container.innerHTML = history.map(item => `
            <div class="hist-item">
                <div class="hist-item-top">
                    <span class="hist-shape">${item.shape}</span>
                    <span class="hist-time">${item.time}</span>
                </div>
                <div class="hist-item-bottom">
                    <div>
                        <div>
                            <span class="hist-sqft-val">${item.sqft}</span>
                            <span class="hist-sqft-unit"> sq.ft</span>
                        </div>
                        <div class="hist-dec">Decimal: ${item.dec}</div>
                    </div>
                    <div class="hist-katha-badge">${item.katha} Katha</div>
                </div>
            </div>`
        ).join('');
    }

    document.getElementById('jaminHistoryModal').style.display = 'flex';
};

/* ══════════════════════════════════════════════
   § 9 · SHARE  → share.js mein handle hota hai
   (window.shareJaminResult share.js se aata hai —
    better version: spinner + useCORS + _doShare engine)
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   § 10 · CONFIRM / DELETE MODALS
   ══════════════════════════════════════════════ */

function _showConfirm(icon, title, msg, onConfirm) {
    document.getElementById('jaminConfirmIcon').innerText      = icon;
    document.getElementById('jaminDeleteModalTitle').innerText = title;
    document.getElementById('jaminDeleteModalText').innerText  = msg;
    document.getElementById('jaminCustomDeleteModal').style.display = 'flex';

    const btn    = document.getElementById('confirmDeleteActionBtn');
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', () => {
        closeCustomDeleteModal();
        onConfirm();
    });
}

window.closeCustomDeleteModal = function () {
    document.getElementById('jaminCustomDeleteModal').style.display = 'none';
};

window.clearAllJaminConfirm = function () {
    _showConfirm(
        '\u{1F504}', 'Reset Inputs?',
        'Sab darj ki gayi measurements clear ho jaayengi.',
        () => {
            if (navigator.vibrate) navigator.vibrate([25, 15, 25]);
            window.initJaminDims();
            window.jaminState.lengthCount = 2;
            window.jaminState.widthCount  = 2;
            window.renderAminInputs();
        }
    );
};

window.openCustomDeleteModal = function () {
    _showConfirm(
        '\u{1F5D1}\uFE0F', 'Delete All History?',
        'Saari field records permanently delete ho jaayengi. Ye wapas nahi aa sakti.',
        () => window.confirmClearJaminHistory()
    );
};

window.confirmClearJaminHistory = function () {
    try { localStorage.removeItem('meraj_jamin_history'); } catch (e) {}
    window.openJaminHistory();
};