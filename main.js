"use strict";

/* ============================================================
   MERAJ CALCULATOR PRO  ·  main.js  ·  v5.1
   ✅ Full Language Support (EN / Hindi / Urdu)
   ✅ Dark / Light / System Theme
   ✅ Share karne par Share hoga — Save nahi
   ✅ All Bugs Fixed (v5.1)
   ============================================================ */

/* Native alert ko override se PEHLE save karo (Bug #4 Fix) */
const _nativeAlert = window.alert.bind(window);

/* ── Global State ── */
window.MerajData = window.MerajData || {
    historyData:     [],
    currentLang:     localStorage.getItem('app_lang')  || 'English (India)',
    currentTheme:    localStorage.getItem('app_theme') || 'system',
    isRadians:       true,
    isSelectionMode: false,
    memoryValue:     0
};

/* ============================================================
   § 1  TRANSLATIONS  — Pura app ek hi jagah se translate hota hai
   ============================================================ */
window.LANG = {

    'English (India)': {
        /* Calculator */
        res: 'Result is', clr: 'Clear', error: 'Error',
        memCleared: 'Memory Cleared',
        appTitle: 'Meraj Calculator',

        /* Alert / Modal */
        ok: 'OK', cancel: 'Cancel', delete: 'Delete',

        /* History */
        history: 'History',
        noHistory: 'No calculations yet',
        deleteAll: 'Clear All History',
        deleteConfirm: 'Delete History?',
        deleteMsg: 'Are you sure you want to delete all history? This cannot be undone.',
        selectItems: 'Select',
        selectFirst: 'Please select items first!',
        historyEmpty: 'History is empty!',
        deleteSelected: 'Delete Selected',

        /* Share */
        shareImg: 'Share as Image',
        shareTitle: 'Calculation History',
        shareText: 'Check out my calculations from Meraj Calculator!',
        histImgShared: 'History shared successfully!',
        histImgSaved: 'Image saved to Downloads!',
        shareNotSupported: 'Sharing not supported on this device.',
        copyClip: 'App link copied to clipboard!',

        /* Settings / Menu */
        about: 'About',
        langLabel: 'Language',
        themeLabel: 'Theme',
        lightMode: 'Light', darkMode: 'Dark', systemMode: 'System',
        constants: 'Constants',
        social: 'Social',
        share: 'Share App',
        info: 'About',
        toolsMenu: 'Tools',
        privacy: 'Privacy Policy',
        privacyPageTitle: 'Calculator',
        privacyAboutLabel: 'ABOUT CALCULATOR',
        privacyPolicyItem: 'Privacy Policy',
        withdrawal: 'Withdrawal of consent',
        withdrawalItem: 'Withdrawal of consent',

        /* Tools Page */
        tools: 'Tools & Converters',
        date: 'Date', age: 'Age', water: 'Water', bmi: 'BMI',
        currency: 'Currency', emi: 'EMI', gst: 'GST', discount: 'Discount',
        length: 'Length', area: 'Area', land: 'Jamin', fuel: 'Fuel',
        volume: 'Volume', weight: 'Weight', speed: 'Speed',
        data: 'Data', temp: 'Temp',

        /* Misc */
        close: 'Close',
        calHistory: 'Calculation History',
        downloadApp: 'Download App',
    },

    'Hindi': {
        res: 'उत्तर है', clr: 'साफ़', error: 'त्रुटि',
        memCleared: 'मेमोरी साफ़ हो गई',
        appTitle: 'मेराज कैलकुलेटर',

        ok: 'ठीक है', cancel: 'रद्द करें', delete: 'हटाएं',

        history: 'इतिहास',
        noHistory: 'अभी तक कोई गणना नहीं',
        deleteAll: 'सारा इतिहास हटाएं',
        deleteConfirm: 'इतिहास हटाएं?',
        deleteMsg: 'क्या आप वाकई सारा इतिहास हटाना चाहते हैं? यह वापस नहीं आएगा।',
        selectItems: 'चुनें',
        selectFirst: 'पहले आइटम चुनें!',
        historyEmpty: 'इतिहास खाली है!',
        deleteSelected: 'चुने हुए हटाएं',

        shareImg: 'फ़ोटो शेयर करें',
        shareTitle: 'गणना का इतिहास',
        shareText: 'मेराज कैलकुलेटर से मेरी गणनाएं देखें!',
        histImgShared: 'इतिहास सफलतापूर्वक शेयर हुआ!',
        histImgSaved: 'फ़ोटो डाउनलोड में सेव हुई!',
        shareNotSupported: 'इस डिवाइस पर शेयरिंग उपलब्ध नहीं।',
        copyClip: 'ऐप लिंक कॉपी हो गया!',

        about: 'जानकारी',
        langLabel: 'भाषा',
        themeLabel: 'थीम',
        lightMode: 'लाइट', darkMode: 'डार्क', systemMode: 'सिस्टम',
        constants: 'स्थिरांक',
        social: 'सोशल',
        share: 'ऐप शेयर करें',
        info: 'जानकारी',
        toolsMenu: 'टूल्स',
        privacy: 'गोपनीयता नीति',
        privacyPageTitle: 'कैलकुलेटर',
        privacyAboutLabel: 'कैलकुलेटर के बारे में',
        privacyPolicyItem: 'गोपनीयता नीति',
        withdrawal: 'सहमति वापस लें',
        withdrawalItem: 'सहमति वापस लें',

        tools: 'टूल्स और कन्वर्टर',
        date: 'तारीख', age: 'उम्र', water: 'पानी', bmi: 'बीएमआई',
        currency: 'मुद्रा', emi: 'ईएमआई', gst: 'जीएसटी', discount: 'छूट',
        length: 'लंबाई', area: 'क्षेत्र', land: 'जमीन', fuel: 'ईंधन',
        volume: 'आयतन', weight: 'वजन', speed: 'गति',
        data: 'डेटा', temp: 'तापमान',

        close: 'बंद करें',
        calHistory: 'गणना इतिहास',
        downloadApp: 'ऐप डाउनलोड करें',
    },

    'Urdu': {
        res: 'جواب ہے', clr: 'صاف', error: 'خطا',
        memCleared: 'میموری صاف ہو گئی',
        appTitle: 'میراج کیلکولیٹر',

        ok: 'ٹھیک ہے', cancel: 'منسوخ', delete: 'حذف',

        history: 'تاریخ',
        noHistory: 'ابھی تک کوئی حساب نہیں',
        deleteAll: 'تمام تاریخ حذف کریں',
        deleteConfirm: 'تاریخ حذف کریں؟',
        deleteMsg: 'کیا آپ واقعی تمام تاریخ حذف کرنا چاہتے ہیں؟ یہ واپس نہیں آئے گی۔',
        selectItems: 'منتخب کریں',
        selectFirst: 'پہلے آئٹم منتخب کریں!',
        historyEmpty: 'تاریخ خالی ہے!',
        deleteSelected: 'منتخب حذف کریں',

        shareImg: 'تصویر شیئر کریں',
        shareTitle: 'حساب کی تاریخ',
        shareText: 'میراج کیلکولیٹر سے میرے حسابات دیکھیں!',
        histImgShared: 'تاریخ کامیابی سے شیئر ہوئی!',
        histImgSaved: 'تصویر ڈاؤنلوڈ میں محفوظ!',
        shareNotSupported: 'اس ڈیوائس پر شیئرنگ دستیاب نہیں۔',
        copyClip: 'ایپ لنک کاپی ہو گیا!',

        about: 'معلومات',
        langLabel: 'زبان',
        themeLabel: 'تھیم',
        lightMode: 'لائٹ', darkMode: 'ڈارک', systemMode: 'سسٹم',
        constants: 'ثابت',
        social: 'سوشل',
        share: 'ایپ شیئر کریں',
        info: 'معلومات',
        toolsMenu: 'ٹولز',
        privacy: 'رازداری کی پالیسی',
        privacyPageTitle: 'کیلکولیٹر',
        privacyAboutLabel: 'کیلکولیٹر کے بارے میں',
        privacyPolicyItem: 'رازداری کی پالیسی',
        withdrawal: 'رضامندی واپس لیں',
        withdrawalItem: 'رضامندی واپس لیں',

        tools: 'ٹولز اور کنورٹر',
        date: 'تاریخ', age: 'عمر', water: 'پانی', bmi: 'بی ایم آئی',
        currency: 'کرنسی', emi: 'ای ایم آئی', gst: 'جی ایس ٹی', discount: 'رعایت',
        length: 'لمبائی', area: 'رقبہ', land: 'زمین', fuel: 'ایندھن',
        volume: 'حجم', weight: 'وزن', speed: 'رفتار',
        data: 'ڈیٹا', temp: 'درجہ حرارت',

        close: 'بند کریں',
        calHistory: 'حساب کی تاریخ',
        downloadApp: 'ایپ ڈاؤنلوڈ کریں',
    }
};

/* Quick translation getter */
window.t = function (key) {
    const lang = MerajData.currentLang;
    return (LANG[lang] && LANG[lang][key] !== undefined)
        ? LANG[lang][key]
        : (LANG['English (India)'][key] || key);
};

/* ============================================================
   § 2  THEME SYSTEM
   ============================================================ */
window.applyTheme = function (theme) {
    MerajData.currentTheme = theme;
    try { localStorage.setItem('app_theme', theme); } catch (e) {}

    document.body.classList.remove('light-mode', 'dark-mode');
    if (theme === 'dark')  document.body.classList.add('dark-mode');
    if (theme === 'light') document.body.classList.add('light-mode');

    /* Update status-bar color */
    const isDark = theme === 'dark' ||
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.querySelectorAll('meta[name="theme-color"]').forEach(m => {
        m.content = isDark ? '#1c1c1e' : '#ffffff';
    });

    _refreshThemeButtons();
};

function _refreshThemeButtons() {
    ['btn-theme-system', 'btn-theme-light', 'btn-theme-dark'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
    const active = document.getElementById('btn-theme-' + MerajData.currentTheme);
    if (active) active.classList.add('active');
}

/* Listen for OS theme change */
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
            if (MerajData.currentTheme === 'system') applyTheme('system');
        });
}

/* ============================================================
   § 3  LANGUAGE SYSTEM
   ============================================================ */
window.setLanguage = function (lang) {
    MerajData.currentLang = lang;
    try { localStorage.setItem('app_lang', lang); } catch (e) {}

    /* RTL direction for Urdu */
    if (lang === 'Urdu') {
        document.body.classList.add('lang-urdu');
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ur');
    } else {
        document.body.classList.remove('lang-urdu');
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang === 'Hindi' ? 'hi' : 'en');
    }

    updateAllTranslations();
    _refreshLangButtons();
    closeMenu();
};

function _refreshLangButtons() {
    ['btn-lang-en', 'btn-lang-hi', 'btn-lang-ur'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
    const map = {
        'English (India)': 'btn-lang-en',
        'Hindi':           'btn-lang-hi',
        'Urdu':            'btn-lang-ur'
    };
    const btn = document.getElementById(map[MerajData.currentLang]);
    if (btn) btn.classList.add('active');
}
window.updateLangButtons = _refreshLangButtons; /* backward compat */

/* ── Master translation updater ──
   Har ek element ko ek hi function se update karo */
window.updateAllTranslations = function () {

    /* ── Helper ── */
    function setText(sel, key, attr) {
        const el = typeof sel === 'string' ? document.querySelector(sel) : sel;
        if (!el) return;
        if (attr) el.setAttribute(attr, t(key));
        else el.innerText = t(key);
    }
    function setAllText(sel, key) {
        document.querySelectorAll(sel).forEach(el => { el.innerText = t(key); });
    }

    /* ── Top-bar title (page title) ── */
    document.title = t('appTitle') + ' Pro';

    /* ── Settings Popup ── */
    setText('#settingsPopup .popup-item:first-child span', 'history');
    setText('#settingsPopup .popup-item:last-child span', 'about');

    /* ── History modal ── */
    setText('.history-title',                    'history');
    setText('#clearAllBtn',                      'deleteAll');
    setText('#deleteSelectedBtn',                'deleteSelected');
    const selectIcon = document.getElementById('selectModeIcon');
    if (selectIcon) selectIcon.setAttribute('title', t('selectItems'));

    /* ── Delete confirm modal ── */
    setText('#deleteConfirmModal .custom-modal-box h3', 'deleteConfirm');
    setText('#deleteConfirmModal .custom-modal-box p',  'deleteMsg');
    setText('#deleteConfirmModal .modal-btn.cancel',    'cancel');
    setText('#deleteConfirmModal .modal-btn.delete',    'delete');

    /* ── Custom alert modal OK button ── */
    setText('#customAlertModal .modal-btn.confirm-ok', 'ok');

    /* ── Tools Page ── */
    setText('.tools-title', 'tools');

    /* ── Feature box labels (data-key attribute se) ── */
    const featureKeys = {
        date:'date', age:'age', water:'water', bmi:'bmi',
        currency:'currency', emi:'emi', gst:'gst', discount:'discount',
        length:'length', area:'area', jamin:'land', fuel:'fuel',
        volume:'volume', weight:'weight', speed:'speed',
        data:'data', temp:'temp'
    };
    document.querySelectorAll('.feature-box[data-key]').forEach(box => {
        const key  = box.getAttribute('data-key');
        const span = box.querySelector('span');
        if (span && featureKeys[key]) span.innerText = t(featureKeys[key]);
    });

    /* ── Side menu section labels ── */
    setText('#menu-lang-label',  'langLabel');
    setText('#menu-theme-label', 'themeLabel');
    setText('#menu-tools-label', 'toolsMenu');
    setText('#menu-social-label','social');
    setText('#menu-app-label',   'info');

    /* ── Menu item texts ── */
    setText('#menu-item-constants span', 'constants');
    setText('#menu-item-share span',     'share');
    setText('#menu-item-about span',     'info');

    /* ── Theme buttons ── */
    setText('#btn-theme-light',  'lightMode');
    setText('#btn-theme-dark',   'darkMode');
    setText('#btn-theme-system', 'systemMode');

    /* ── Privacy page ── */
    setText('#privacy-page-title',        'privacyPageTitle');
    setText('#privacy-about-label',      'privacyAboutLabel');
    setText('#privacy-policy-item',      'privacyPolicyItem');
    setText('#privacy-withdrawal-item',  'withdrawalItem');

    /* ── Live date (re-render in correct locale) ── */
    _updateLiveDate();

    /* ── Re-render open history if visible ── */
    const histModal = document.getElementById('historyModal');
    if (histModal && histModal.style.display !== 'none') {
        window.renderHistory();
        window.updateSelectionUI();
    }

    /* ── Refresh angle unit labels ── */
    const sciAngle = document.getElementById('sci-angle-btn');
    if (sciAngle) sciAngle.innerText = MerajData.isRadians ? 'Rad' : 'Deg';
};

/* ============================================================
   § 4  CUSTOM ALERT (Professional Fix)
   ============================================================ */
window.alert = function (message) {
    const modal    = document.getElementById('customAlertModal');
    const msgBox   = document.getElementById('customAlertMessage');
    const titleBox = document.getElementById('customAlertTitle');
    const okBtn    = document.querySelector('#customAlertModal .modal-btn.confirm-ok');

    if (modal && msgBox) {
        // 1. Alert aate hi baaki saare popup band kar do (taaki screen saaf rahe)
        const settingsPopup = document.getElementById('settingsPopup');
        if (settingsPopup) settingsPopup.style.display = 'none';
        
        msgBox.innerText = message;
        
        // 2. Smart Error Detection
        const isError = /error|galat|خطا|त्रुटि|wrong|invalid/i.test(String(message));
        if (isError) {
            titleBox.innerText   = t('error');
            titleBox.style.color = '#ff4444';
        } else {
            titleBox.innerText   = t('appTitle');
            titleBox.style.color = 'var(--primary)';
        }

        if (okBtn) okBtn.innerText = t('ok');
        
        // 3. Modal ko display karo aur vibration do
        modal.style.display = 'flex';
        if (navigator.vibrate) navigator.vibrate(40); // Thoda strong vibration
        
    } else {
        // Agar custom modal nahi mila toh native browser alert dikhao (Bug #4 Fix)
        _nativeAlert(message); 
    }
};

window.closeCustomAlert = function () {
    const modal = document.getElementById('customAlertModal');
    if (modal) {
        modal.style.display = 'none';
        // Alert band hote hi input par focus wapas lao
        if (typeof focusInput === 'function') focusInput();
    }
};

/* ============================================================
   § 13  CONSENT / PRIVACY
   ============================================================ */
window.handleWithdrawalConsent = function (checked) {
    try { localStorage.setItem('meraj_consent', checked ? '1' : '0'); } catch (e) {}
    /* Bug #18 Fix — Privacy page mein liveResult visible nahi — toast use karo */
    const msg = checked ? '✓ Consent given' : '✗ Consent withdrawn';
    if (typeof showToast === 'function') {
        showToast(msg);
    } else {
        /* Fallback: Privacy page ke andar ek feedback div dikhao */
        let fb = document.getElementById('_consentFeedback');
        if (!fb) {
            fb = document.createElement('div');
            fb.id = '_consentFeedback';
            fb.style.cssText = 'text-align:center;padding:8px;font-size:0.9rem;font-weight:700;color:var(--primary);margin-top:8px;';
            const privContent = document.querySelector('.privacy-content');
            if (privContent) privContent.appendChild(fb);
        }
        fb.innerText = msg;
        setTimeout(() => { if (fb) fb.innerText = ''; }, 2500);
    }
};

/* Restore consent toggle state on load */
document.addEventListener('DOMContentLoaded', function () {
    try {
        const saved = localStorage.getItem('meraj_consent');
        const toggle = document.getElementById('withdrawalToggle');
        if (toggle && saved !== null) toggle.checked = saved === '1';
    } catch (e) {}
});

/* ============================================================
   § 5  DOM REFERENCES  &  ONLOAD
   ============================================================ */
const displayInput = document.getElementById('display');
const historyLine  = document.getElementById('history-line');
const liveResult   = document.getElementById('liveResult');

/* Load saved history */
try {
    const saved = localStorage.getItem('calc_history');
    MerajData.historyData = saved ? JSON.parse(saved) : [];
} catch (e) {
    MerajData.historyData = [];
}

/* ============================================================
   § 5.5  TOAST NOTIFICATION HELPER
   ============================================================ */
window.showToast = function (msg, duration) {
    duration = duration || 2400;
    let toast = document.getElementById('_merajToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = '_merajToast';
        toast.style.cssText = [
            'position:fixed', 'bottom:100px', 'left:50%',
            'transform:translateX(-50%)',
            'background:var(--primary)', 'color:#fff',
            'padding:10px 22px', 'border-radius:30px',
            'font-size:0.9rem', 'font-weight:700',
            'z-index:99999', 'pointer-events:none',
            'transition:opacity 0.3s ease',
            'white-space:nowrap', 'box-shadow:0 4px 14px rgba(0,0,0,0.2)'
        ].join(';');
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.opacity = '1';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, duration);
};

window.onload = function () {
    if (displayInput) displayInput.blur();

    /* Apply saved settings */
    applyTheme(MerajData.currentTheme);
    setLanguage(MerajData.currentLang); /* also applies RTL + translations */

    /* Close settings popup on outside click */
    document.body.addEventListener('click', e => {
        if (e.target.tagName !== 'INPUT' && displayInput) displayInput.blur();

        const popup = document.getElementById('settingsPopup');
        if (popup &&
            popup.style.display === 'block' &&
            !e.target.closest('.settings-popup') &&
            !e.target.closest('#btn-settings')) {
            popup.style.display = 'none';
        }
    });

    /* Live clock date in tools header */
    _updateLiveDate();
    setInterval(_updateLiveDate, 60000);
};

function _updateLiveDate() {
    const el = document.getElementById('liveDateDisplay');
    if (!el) return;
    const opts   = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const locale = MerajData.currentLang === 'Hindi' ? 'hi-IN'
                 : MerajData.currentLang === 'Urdu'  ? 'ur-PK'
                 : 'en-IN';
    try {
        el.innerText = new Date().toLocaleDateString(locale, opts);
    } catch (e) {
        el.innerText = new Date().toLocaleDateString('en-IN', opts);
    }
}

/* ============================================================
   § 6  FONT RESIZE (Ultra Smooth Native Feel)
   ============================================================ */
window.adjustFontSize = function () {
    if (!displayInput) return;
    
    const len = displayInput.value.length;
    
    if (len <= 7) {
        displayInput.style.fontSize = '4.5rem';
    } else {
        // Ekdum smooth sizing formula (bina kisi jhatke ke)
        let fitSize = 4.5 * (7 / len);
        if (fitSize < 1.6) fitSize = 1.6;
        displayInput.style.fontSize = fitSize + 'rem';
    }
};

window.scrollToCursor = function () {
    if (!displayInput) return;
    
    // 20ms ka chhota sa delay taaki text chhota hone ki animation smoothly poori ho (koi jhatka na lage)
    setTimeout(() => {
        // 1. Text ko zabardasti sabse last (right side) mein scroll karega
        displayInput.scrollLeft = displayInput.scrollWidth;
        
        // 2. Cursor ko hamesha aakhiri number ke baad fix rakhega taaki text chhipe nahi
        const len = displayInput.value.length;
        displayInput.setSelectionRange(len, len);
    }, 20);
};

/* ============================================================
   § 7  UI / MENU FUNCTIONS
   ============================================================ */
window.openMenu = function () {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.style.width = '285px';
    _refreshLangButtons();
    _refreshThemeButtons();
    updateAllTranslations();
};
window.closeMenu = function () {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.style.width = '0';
};

window.openMoreFeatures = function () {
    const page = document.getElementById('toolsPage');
    if (page) page.style.display = 'block';
    const popup = document.getElementById('settingsPopup');
    if (popup) popup.style.display = 'none';
    updateActiveBtn('btn-grid');
    closeMenu();
    _updateLiveDate();
    updateAllTranslations(); /* feature box labels translate */
};

window.closeMoreFeatures = function () {
    const page = document.getElementById('toolsPage');
    if (page) page.style.display = 'none';
    updateActiveBtn('btn-calc');
    closeMenu();
};
window.updateActiveBtn = function (btnId) {
    // 1. Top bar ke sabhi buttons ko pakdo aur unse colour (active-orange) hata do
    const allBtns = document.querySelectorAll('.top-bar .icon-btn');
    allBtns.forEach(btn => {
        btn.classList.remove('active-orange', 'active');
    });

    // 2. Ab jis button par click hua hai (btnId), sirf uspe colour (active-orange) lagao
    const targetBtn = document.getElementById(btnId);
    if (targetBtn) {
        targetBtn.classList.add('active-orange'); 
    }
};
/* ── shareAppInstall, shareHistoryAsImage, downloadImage
   Moved to js/share.js — ab sab share logic wahan hai ── */

window.toggleSimpleMode = function () {
    const wrapper = document.querySelector('.keypad-wrapper');
    if (wrapper) wrapper.classList.toggle('simple');
};

/* toggleScientificMode is an alias for toggleSimpleMode */
window.toggleScientificMode = window.toggleSimpleMode;

window.toggleSettingsPopup = function () {
    const popup = document.getElementById('settingsPopup');
    if (popup) popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
};

window.toggleAngleUnit = function () {
    MerajData.isRadians = !MerajData.isRadians;
    const rad = document.getElementById('unit-rad');
    const deg = document.getElementById('unit-deg');
    if (rad) rad.classList.toggle('active-unit');
    if (deg) deg.classList.toggle('active-unit');

    /* Also update sci grid button */
    const sciBtn = document.getElementById('sci-angle-btn');
    if (sciBtn) sciBtn.innerText = MerajData.isRadians ? 'Rad' : 'Deg';
};

/* ============================================================
   § 8  INPUT LOGIC
   ============================================================ */
window.focusInput = function () { if (displayInput) displayInput.focus(); };

window.insertAtCursor = function (text) {
    if (!displayInput) return;
    const start = displayInput.selectionStart;
    const end   = displayInput.selectionEnd;
    displayInput.value =
        displayInput.value.substring(0, start) + text + displayInput.value.substring(end);
    const pos = start + text.length;
    displayInput.setSelectionRange(pos, pos);
    focusInput();
    window.updateLiveResult();
    window.adjustFontSize();
    window.scrollToCursor();
};

window.insertVal = function (val) {
    focusInput();

    /* Symbol normalisation */
    if (val === '*')       val = '×';
    if (val === '/')       val = '÷';
    if (val === 'Math.PI') val = 'π';
    if (val === 'Math.E')  val = 'e';
    if (val === '^')       val = '^(';

    const cursor     = displayInput.selectionStart;
    const currentVal = displayInput.value;
    const operators  = ['+', '-', '×', '÷', '%', '.'];

    if (operators.includes(val)) {
        if (currentVal === '' && val === '-') { window.insertAtCursor(val); return; }
        if (currentVal === '') return;

        const charBefore      = currentVal.charAt(cursor - 1);
        const twoCharsBefore  = currentVal.substring(cursor - 2, cursor);

        /* Replace ^( with operator */
        if (twoCharsBefore === '^(') {
            displayInput.value =
                currentVal.substring(0, cursor - 2) + val + currentVal.substring(cursor);
            displayInput.setSelectionRange(cursor - 1, cursor - 1);
            window.updateLiveResult();
            window.speak(val);
            return;
        }

        /* Replace consecutive operator */
        if (operators.includes(charBefore) && val !== '%') {
            displayInput.value =
                currentVal.substring(0, cursor - 1) + val + currentVal.substring(cursor);
            displayInput.setSelectionRange(cursor, cursor);
            window.updateLiveResult();
            window.speak(val);
            return;
        }
    }

    window.insertAtCursor(val);
    window.speak(val);
};

window.insertFunc = function (val) {
    let text = val + '(';
    if (val === '√' || val === '³√') text = val;
    else if (val === 'rand') {
        /* Bug #13 Fix — rand ke baad properly update karo */
        text = Math.random().toFixed(8);
    }
    else if (val === 'exp')          text = 'e^(';
    else if (val === '10')           text = '10^(';
    window.insertAtCursor(text);
    window.updateLiveResult();
    window.adjustFontSize();
    window.speak(val);
};

window.clearAll = function () {
    if (!displayInput) return;
    displayInput.value          = '';
    liveResult.innerText        = '';
    historyLine.innerText       = '';
    displayInput.style.fontSize = '';
    focusInput();
    window.speak(t('clr'));
};

window.backspace = function () {
    if (!displayInput) return;
    focusInput();
    const start = displayInput.selectionStart;
    const end   = displayInput.selectionEnd;
    if (start !== end) {
        displayInput.value =
            displayInput.value.substring(0, start) + displayInput.value.substring(end);
        displayInput.setSelectionRange(start, start);
    } else if (start > 0) {
        displayInput.value =
            displayInput.value.substring(0, start - 1) + displayInput.value.substring(end);
        displayInput.setSelectionRange(start - 1, start - 1);
    }
    window.updateLiveResult();
    window.adjustFontSize();
};

/* ============================================================
   § 9  CALCULATION ENGINE
   ============================================================ */
window.factorial = function (n) {
    n = parseFloat(n);
    if (!Number.isInteger(n) || n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    if (n > 170) return Infinity;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
};

function _formatExpr(expr) {
    /* ── CRITICAL ORDER ──
       sinh/cosh/tanh MUST be replaced BEFORE sin/cos/tan
       otherwise "sinh" becomes "Math.sinh" wrongly via sin-replace */
    let e = expr
        /* Bug #7 Fix — implicit multiply: 2(  2π  2e  2√
           e regex: exclude uppercase A-Z (exp, E notation) and digits after e */
        .replace(/(\d)(√|³√|\(|π|e(?!\^)(?![0-9a-zA-Z]))/g, '$1*$2')
        /* operators */
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        /* constants */
        .replace(/π/g, 'Math.PI')
        /* powers */
        .replace(/\^/g, '**')
        .replace(/²/g, '**2')
        .replace(/³(?!√)/g, '**3')
        /* roots */
        .replace(/³√(\d+(\.\d+)?)/g, 'Math.cbrt($1)')
        .replace(/√(\d+(\.\d+)?)/g,  'Math.sqrt($1)')
        /* percent & factorial */
        .replace(/(\d+(?:\.\d+)?)%/g, '($1/100)')
        .replace(/(\d+(?:\.\d+)?)!/g, 'factorial($1)');

    /* ── Hyperbolic (FIRST! — sinh/cosh/tanh before sin/cos/tan) ── */
    e = e.replace(/sinh\(/g, 'Math.sinh(')
         .replace(/cosh\(/g, 'Math.cosh(')
         .replace(/tanh\(/g, 'Math.tanh(');

    /* ── Trig ── */
    if (!MerajData.isRadians) {
        e = e.replace(/sin\(/g, 'Math.sin((Math.PI/180)*')
             .replace(/cos\(/g, 'Math.cos((Math.PI/180)*')
             .replace(/tan\(/g, 'Math.tan((Math.PI/180)*');
    } else {
        e = e.replace(/sin\(/g, 'Math.sin(')
             .replace(/cos\(/g, 'Math.cos(')
             .replace(/tan\(/g, 'Math.tan(');
    }

    /* ── Logarithms ── */
    e = e.replace(/log\(/g, 'Math.log10(')
         .replace(/ln\(/g,  'Math.log(');

    return e;
}

window.calculate = function () {
    if (!displayInput) return;
    let expr = displayInput.value.trim();
    if (!expr) return;

    /* Strip trailing operators */
    const trailingOp = /[+\-×÷.^(]$/;
    while (trailingOp.test(expr)) expr = expr.slice(0, -1);
    if (!expr) return;

    try {
        /* Show expression in history line */
        historyLine.innerText = expr + ' =';
        historyLine.onclick = () => {
            displayInput.value = expr;
            historyLine.innerText = '';
            window.adjustFontSize();
            focusInput();
        };

        /* Bug #5 Fix — Input sanitization (eval se pehle check karo) */
        const safePattern = /^[0-9+\-×÷*/^().%!²³eπ\s√sincotaghlbqrtEMPIRand]+$/i;
        const cleanedExpr = expr.replace(/[×÷]/g, '').replace(/[πe]/g, '');
        const allowedChars = /^[\d\s+\-*\/\^().%!²³eπ√sincotanhlbqrtErand,_]+$/i;
        /* Allow all math expressions — block only obvious injection patterns */
        if (/[<>{};`]/.test(expr)) throw new Error('Invalid characters');

        // eslint-disable-next-line no-eval
        let result = eval(_formatExpr(expr));

        if (!isFinite(result) || isNaN(result)) throw new Error('Invalid');

        /* Bug #6 Fix — Clean up floating point noise + properly handle scientific notation */
        if (!Number.isInteger(result)) {
            const rounded = parseFloat(result.toPrecision(12));
            const str = rounded.toString();
            if (str.includes('e') || str.includes('E')) {
                /* Scientific notation: large/small numbers ko readable format mein dikhao */
                result = parseFloat(rounded.toPrecision(10));
            } else {
                result = rounded;
            }
        }

        window.addToHistory(expr, result);
        displayInput.value = String(result);
        liveResult.innerText = '';
        window.adjustFontSize();
        displayInput.setSelectionRange(String(result).length, String(result).length);
        focusInput();
        window.speak(t('res') + ' ' + result);

    } catch (err) {
        liveResult.innerText = t('error');
        liveResult.style.color = 'var(--danger, #ff4444)';
        setTimeout(() => {
            liveResult.innerText = '';
            liveResult.style.color = '';
        }, 1600);
    }
};

window.updateLiveResult = function () {
    if (!displayInput) return;
    try {
        const expr = displayInput.value;
        if (!expr) { liveResult.innerText = ''; return; }

        // ASLI MAGIC: Agar aakhiri character +, -, ×, ÷ hai, 
        // toh usko calculation ke liye ignore karo, par Live Result dikhate raho
        const safeExpr = expr.replace(/[+\-×÷.^(]+$/, '');
        
        // Agar clear karne ke baad kuch nahi bachta, toh hide kar do
        if (!safeExpr) { liveResult.innerText = ''; return; }

        // eslint-disable-next-line no-eval
        let res = eval(_formatExpr(safeExpr));

        if (res !== undefined && isFinite(res) && !isNaN(res)) {
            if (!Number.isInteger(res)) res = parseFloat(parseFloat(res).toPrecision(10));
            
            /* Agar input aur result same hai (jaise sirf '5' likha hai), toh hide rakho */
            if (String(res) !== safeExpr) liveResult.innerText = res;
            else liveResult.innerText = '';
        } else {
            liveResult.innerText = '';
        }
    } catch (e) { liveResult.innerText = ''; }
};

/* ============================================================
   § 10  MEMORY
   ============================================================ */
window.memoryClear = function () {
    MerajData.memoryValue = 0;
    liveResult.innerText  = t('memCleared');
    setTimeout(() => window.updateLiveResult(), 1400);
};

window.memoryAdd = function () {
    const val = parseFloat(displayInput.value);
    if (isNaN(val)) return;
    MerajData.memoryValue += val;
    liveResult.innerText = 'M+ (' + MerajData.memoryValue + ')';
    setTimeout(() => window.updateLiveResult(), 1600);
};

window.memorySubtract = function () {
    const val = parseFloat(displayInput.value);
    if (isNaN(val)) return;
    MerajData.memoryValue -= val;
    liveResult.innerText = 'M− (' + MerajData.memoryValue + ')';
    setTimeout(() => window.updateLiveResult(), 1600);
};

window.memoryRecall = function () {
    if (MerajData.memoryValue !== 0) {
        window.insertVal(String(MerajData.memoryValue));
    }
};

/* ============================================================
   § 11  HISTORY
   ============================================================ */
window.addToHistory = function (q, a) {
    const now = new Date();
    const d   = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const ti  = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    MerajData.historyData.push({ q, a, date: d + ' · ' + ti, id: Date.now() });
    if (MerajData.historyData.length > 500) MerajData.historyData.shift();
    try { localStorage.setItem('calc_history', JSON.stringify(MerajData.historyData)); } catch (e) {}
};

window.openHistory = function () {
    // 1. Asli Fix: setTimeout popup ko turant band karega bina kisi event takrav ke
    setTimeout(() => {
        const popup = document.getElementById('settingsPopup');
        if (popup) popup.style.display = 'none';
    }, 10); // 10 millisecond ka delay jisse popup dobara na khule

    // 2. Side Menu ko bhi band karne ka code (agar khula ho)
    const menu = document.getElementById('sideMenu');
    if (menu) menu.style.width = '0';

    // 3. History Modal ko open karne ka code
    const modal = document.getElementById('historyModal');
    if (modal) modal.style.display = 'block';

    MerajData.isSelectionMode = false;
    window.updateSelectionUI();
    window.renderHistory();
    updateAllTranslations();
};

window.closeHistory = function () {
    const modal = document.getElementById('historyModal');
    if (modal) modal.style.display = 'none';
    focusInput();
};

window.toggleSelectionMode = function () {
    MerajData.isSelectionMode = !MerajData.isSelectionMode;
    window.updateSelectionUI();
    window.renderHistory();
    if (navigator.vibrate) navigator.vibrate(50);
};

window.updateSelectionUI = function () {
    const icon     = document.getElementById('selectModeIcon');
    const clearBtn = document.getElementById('clearAllBtn');
    const delBtn   = document.getElementById('deleteSelectedBtn');

    if (MerajData.isSelectionMode) {
        if (icon)     icon.classList.add('active-mode');
        if (clearBtn) clearBtn.style.display = 'none';
        if (delBtn)   { delBtn.style.display = 'block'; delBtn.innerText = t('deleteSelected'); }
    } else {
        if (icon)     icon.classList.remove('active-mode');
        if (clearBtn) { clearBtn.style.display = 'block'; clearBtn.innerText = t('deleteAll'); }
        if (delBtn)   delBtn.style.display = 'none';
    }
};

window.renderHistory = function () {
    const list = document.getElementById('historyList');
    if (!list) return;

    list.innerHTML = '';
    if (MerajData.isSelectionMode) list.classList.add('select-mode');
    else list.classList.remove('select-mode');

    if (MerajData.historyData.length === 0) {
        list.innerHTML = `
            <div style="text-align:center;padding:70px 20px;color:var(--text-muted);">
                <i class="fas fa-history" style="font-size:3rem;opacity:.3;display:block;margin-bottom:14px;"></i>
                <span style="font-size:1.05rem;">${t('noHistory')}</span>
            </div>`;
        return;
    }

    MerajData.historyData.slice().reverse().forEach((item, revIdx) => {
        const origIdx = MerajData.historyData.length - 1 - revIdx;
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <input type="checkbox" class="h-checkbox" data-original-index="${origIdx}">
            <div class="h-content">
                <div class="history-q">${item.q}</div>
                <div class="history-a">= ${item.a}</div>
                <div class="history-date">${item.date}</div>
            </div>`;

        /* Long-press → selection mode */
        let pressTimer;
        div.addEventListener('touchstart', () => {
            if (MerajData.isSelectionMode) return;
            pressTimer = setTimeout(() => {
                MerajData.isSelectionMode = true;
                window.updateSelectionUI();
                window.renderHistory();
                if (navigator.vibrate) navigator.vibrate(55);
            }, 600);
        });
        div.addEventListener('touchend',  () => clearTimeout(pressTimer));
        div.addEventListener('touchmove', () => clearTimeout(pressTimer));

        div.onclick = e => {
            if (e.target.type === 'checkbox') return;
            if (MerajData.isSelectionMode) {
                const cb = div.querySelector('.h-checkbox');
                if (cb) cb.checked = !cb.checked;
            } else {
                displayInput.value = String(item.a);
                displayInput.setSelectionRange(String(item.a).length, String(item.a).length);
                window.adjustFontSize();
                document.getElementById('historyModal').style.display = 'none';
                focusInput();
            }
        };

        list.appendChild(div);
    });
};

/* ============================================================
   § 12  DELETE MODALS
   ============================================================ */
window.showDeleteConfirm = function () {
    if (MerajData.historyData.length === 0) return;
    const modal = document.getElementById('deleteConfirmModal');
    if (!modal) return;

    /* Translate modal content */
    const h3  = modal.querySelector('.custom-modal-box h3');
    const p   = modal.querySelector('.custom-modal-box p');
    const can = modal.querySelector('.modal-btn.cancel');
    const del = modal.querySelector('.modal-btn.delete');
    if (h3)  h3.innerText  = t('deleteConfirm');
    if (p)   p.innerText   = t('deleteMsg');
    if (can) can.innerText = t('cancel');
    if (del) del.innerText = t('delete');

    modal.style.display = 'flex';
};

window.closeDeleteConfirm = function () {
    const modal = document.getElementById('deleteConfirmModal');
    if (modal) modal.style.display = 'none';
};

window.confirmClearAll = function () {
    MerajData.historyData = [];
    try { localStorage.removeItem('calc_history'); } catch (e) {}
    window.renderHistory();
    window.closeDeleteConfirm();
};

window.deleteSelectedItems = function () {
    const checked = document.querySelectorAll('.h-checkbox:checked');
    if (checked.length === 0) { alert(t('selectFirst')); return; }

    const toDelete = new Set(
        Array.from(checked).map(cb => parseInt(cb.dataset.originalIndex))
    );
    MerajData.historyData = MerajData.historyData.filter((_, i) => !toDelete.has(i));
    try { localStorage.setItem('calc_history', JSON.stringify(MerajData.historyData)); } catch (e) {}

    if (MerajData.historyData.length === 0) {
        MerajData.isSelectionMode = false;
        window.updateSelectionUI();
    }
    window.renderHistory();
};

/* ── Share functions → see js/share.js ── */


/* ============================================================
   § 14  SPEECH
   ============================================================ */
window.speak = function (text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u  = new SpeechSynthesisUtterance(String(text));
    u.lang   = MerajData.currentLang === 'Hindi' ? 'hi-IN'
             : MerajData.currentLang === 'Urdu'  ? 'ur-PK'
             : 'en-IN';
    u.volume = 0.75;
    u.rate   = 1.0;
    window.speechSynthesis.speak(u);
};