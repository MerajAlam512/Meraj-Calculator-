/* ===================================================
   TOOLS.JS - Privacy & Tools (Language Support Added)
   v6.1 — All Bugs Fixed
   =================================================== */

function toggleSettingsPopup() {
    const popup = document.getElementById('settingsPopup');
    if(popup) popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function openPrivacyPage() {
    const page = document.getElementById('privacyPage');
    if(page) {
        page.style.display = 'block';
        const popup = document.getElementById('settingsPopup');
        if(popup) popup.style.display = 'none';
    }
}

function closePrivacyPage() {
    const page = document.getElementById('privacyPage');
    if(page) page.style.display = 'none';
}

/* ===== TOOLS (Language-aware) ===== */
/* Bug #8 Fix — openBmiMode ab meraj.js ki full version use karega */
function openBmiMode() {
    if (typeof window._openBmiMode === 'function') {
        window._openBmiMode();
    } else {
        showComingSoon('bmi');
    }
}
function openCurrencyMode() { if(typeof window._openCurrencyMode==='function') window._openCurrencyMode(); else showComingSoon('currency'); }
function openEMIMode()      { if(typeof window._openEMIMode==='function') window._openEMIMode(); else showComingSoon('emi'); }
function openGSTMode()      { if(typeof window._openGSTMode==='function') window._openGSTMode(); else showComingSoon('gst'); }
function openDiscountMode() { if(typeof window._openDiscountMode==='function') window._openDiscountMode(); else showComingSoon('discount'); }
function openLengthMode()   { if(typeof window._openLengthMode==='function') window._openLengthMode(); else showComingSoon('length'); }
function openAreaMode()     { if(typeof window._openAreaMode==='function') window._openAreaMode(); else showComingSoon('area'); }
function openVolumeMode()   { if(typeof window._openVolumeMode==='function') window._openVolumeMode(); else showComingSoon('volume'); }
function openWeightMode()   { if(typeof window._openWeightMode==='function') window._openWeightMode(); else showComingSoon('weight'); }
function openSpeedMode()    { if(typeof window._openSpeedMode==='function') window._openSpeedMode(); else showComingSoon('speed'); }
function openDataMode()     { if(typeof window._openDataMode==='function') window._openDataMode(); else showComingSoon('data'); }
function openTempMode()     { if(typeof window._openTempMode==='function') window._openTempMode(); else showComingSoon('temp'); }
function openFuelMode()     { if(typeof window._openFuelMode==='function') window._openFuelMode(); else showComingSoon('fuel'); }
function openWaterMode()    { if(typeof window._openWaterMode==='function') window._openWaterMode(); else showComingSoon('water'); }

function showComingSoon(feature) {
    const msgs = {
        'English (India)': 'Coming Soon!',
        'Hindi': 'जल्द आ रहा है!',
        'Urdu': 'جلد آ رہا ہے!'
    };
    alert(msgs[MerajData.currentLang] || 'Coming Soon!');
}
