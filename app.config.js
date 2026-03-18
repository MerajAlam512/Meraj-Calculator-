/* ════════════════════════════════════════════════════════════════════
   APP.CONFIG.JS  —  Meraj Calculator Pro  v4.1
   📌 APP KI SAARI INFORMATION EK HI JAGAH — sirf yahan badlein
   ════════════════════════════════════════════════════════════════════ */

window.APP = {

    /* ── Identity ── */
    name:        'Meraj Calculator',
    fullName:    'Meraj Calculator Pro',
    tagline:     'Ultimate Scientific Calculator',
    version:     '4.1',
    edition:     'Pro Edition',
    buildDate:   '2026',

    /* ── Developer ── */
    developer:   'Meraj Alam',
    company:     'M.A Studio',
    email:       'merajalam@gmail.com',     /* ← apna real email yahan likhein */

    /* ── Store / Download Link ──
       Bug #12 Fix: Jab tak Play Store par publish na ho, link empty rakho.
       Publish hone ke baad real link yahan daalo:
       'https://play.google.com/store/apps/details?id=com.meraj.calculator'  */
    playStore:   '',                          /* ← Play Store publish hone ke baad real URL daalen */
    appStore:    '',                          /* ← iOS ke liye App Store link */

    /* ── Social Links — apne real profiles yahan daalen ── */
    social: {
        whatsapp:   'https://wa.me/?text=',
        instagram:  'https://instagram.com/meraj_calculator', /* ← apna real Instagram profile */
        youtube:    '',                                         /* ← YouTube channel link */
        twitter:    ''                                          /* ← Twitter/X handle */
    },

    /* ── Share Messages ── */
    shareText: {
        'English (India)': 'Hey! Check out this amazing Calculator App:',
        'Hindi':           'Yeh kamaal ka Calculator App zaroor dekho:',
        'Urdu':            'یہ شاندار کیلکولیٹر ایپ ضرور دیکھیں:'
    },

    /* ── About Dialog text ── */
    aboutText: {
        'English (India)': function() {
            return `${window.APP.fullName} v${window.APP.version}\n${window.APP.edition}\n\nDeveloper: ${window.APP.developer}\n${window.APP.company}`;
        },
        'Hindi': function() {
            return `${window.APP.fullName} v${window.APP.version}\n${window.APP.edition}\n\nनिर्माता: ${window.APP.developer}\n${window.APP.company}`;
        },
        'Urdu': function() {
            return `${window.APP.fullName} v${window.APP.version}\n${window.APP.edition}\n\nبنانے والے: ${window.APP.developer}\n${window.APP.company}`;
        }
    },

    /* ── Helper: Get current about text ── */
    getAbout: function() {
        const lang = (window.MerajData && window.MerajData.currentLang) || 'English (India)';
        const fn   = this.aboutText[lang] || this.aboutText['English (India)'];
        return fn();
    },

    /* ── Helper: Get share message (Bug #12 Fix — empty link check) ── */
    getShareMessage: function() {
        const lang = (window.MerajData && window.MerajData.currentLang) || 'English (India)';
        const txt  = this.shareText[lang] || this.shareText['English (India)'];
        const link = this.getStoreLink();
        return link ? `${txt}\n${link}` : txt;
    },

    /* ── Helper: Get store link ── */
    getStoreLink: function() {
        return this.playStore || this.appStore || '';
    }
};

console.info(`%c${window.APP.fullName} v${window.APP.version}`, 'color:#FF9700;font-weight:bold;');
