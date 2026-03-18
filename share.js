/* ════════════════════════════════════════════════════════════════════
   MERAJ CALCULATOR PRO  ·  share.js  ·  v6.1 (Fixed)
   
   FIXES:
   1. Hardcoded #FF9700 replaced with CSS variables
   2. Loading spinner added before html2canvas
   3. HTTPS check + better fallback
   4. Automatic download if share fails
   5. Decimal bug fixed in gkbType
   ════════════════════════════════════════════════════════════════════ */

'use strict';

/* ── Spinner helper ── */
function _showShareSpinner(msg) {
    let el = document.getElementById('_shareSpinner');
    if (!el) {
        el = document.createElement('div');
        el.id = '_shareSpinner';
        el.style.cssText = [
            'position:fixed','inset:0','background:var(--bg-overlay)',
            'z-index:99999','display:flex','flex-direction:column',
            'align-items:center','justify-content:center','gap:16px',
            'backdrop-filter:blur(4px)'
        ].join(';');
        el.innerHTML = `
            <div style="
                width:52px;height:52px;border:4px solid var(--border-color);
                border-top-color:var(--primary);border-radius:50%;
                animation:_spin 0.8s linear infinite;">
            </div>
            <div style="color:var(--text-main);font-weight:700;font-size:1rem;" id="_shareSpinnerMsg">
                ${msg || 'Please wait...'}
            </div>
            <style>@keyframes _spin{to{transform:rotate(360deg)}}</style>`;
        document.body.appendChild(el);
    }
    el.style.display = 'flex';
    return el;
}

function _hideShareSpinner() {
    const el = document.getElementById('_shareSpinner');
    if (el) el.style.display = 'none';
}

/* ── 1. APP INSTALL LINK SHARE ── */
window.shareAppInstall = function () {
    const link    = APP.getStoreLink();
    const message = APP.getShareMessage();

    if (navigator.share) {
        navigator.share({
            title: APP.fullName,
            text:  message,
            url:   link
        }).catch(err => {
            if (err.name !== 'AbortError') _copyLinkFallback(link);
        });
    } else {
        _copyLinkFallback(link);
    }
};

function _copyLinkFallback(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(()  => alert(t('copyClip')))
            .catch(() => alert(t('copyClip')));
    } else {
        const el = document.createElement('textarea');
        el.value = text;
        el.style.cssText = 'position:fixed;opacity:0;';
        document.body.appendChild(el);
        el.select();
        try { document.execCommand('copy'); alert(t('copyClip')); } catch (e) {}
        document.body.removeChild(el);
    }
}

/* ── 2. HISTORY IMAGE SHARE ── */
window.shareHistoryAsImage = function () {
    if (!MerajData.historyData.length) { alert(t('historyEmpty')); return; }

    let items = MerajData.historyData;
    if (MerajData.isSelectionMode) {
        const checked = document.querySelectorAll('.h-checkbox:checked');
        if (checked.length > 0) {
            const indices = new Set(
                Array.from(checked).map(cb => parseInt(cb.dataset.originalIndex))
            );
            items = MerajData.historyData.filter((_, i) => indices.has(i));
        }
    }

    const finalItems = [...items].reverse();
    const card = _buildHistoryCard(finalItems);
    document.body.appendChild(card);

    if (typeof html2canvas === 'undefined') {
        document.body.removeChild(card);
        alert(t('shareNotSupported'));
        return;
    }

    /* Show spinner before heavy html2canvas work */
    _showShareSpinner('Creating image...');

    html2canvas(card, { backgroundColor: '#1a1a2e', scale: 2.5, useCORS: true })
        .then(canvas => canvas.toBlob(blob => {
            document.body.removeChild(card);
            _hideShareSpinner();
            if (!blob) { alert(t('shareNotSupported')); return; }
            _doShare({
                blob,
                fileName:   'Meraj_History.png',
                shareTitle: t('shareTitle'),
                shareText:  t('shareText'),
                onSuccess:  () => alert(t('histImgShared')),
                onSaved:    () => alert(t('histImgSaved'))
            });
        }))
        .catch(() => {
            if (document.body.contains(card)) document.body.removeChild(card);
            _hideShareSpinner();
            alert(t('shareNotSupported'));
        });
};

/* ── 3. AMIN / JAMIN RESULT SHARE ── */
window.shareJaminResult = function () {
    const card = document.getElementById('jaminShareCard');
    if (!card) { alert(t('shareNotSupported')); return; }

    if (typeof html2canvas === 'undefined') {
        alert(t('shareNotSupported'));
        return;
    }

    _showShareSpinner('Creating image...');

    html2canvas(card, { backgroundColor: '#1a2640', scale: 2.5, useCORS: true })
        .then(canvas => canvas.toBlob(blob => {
            _hideShareSpinner();
            if (!blob) { alert(t('shareNotSupported')); return; }
            _doShare({
                blob,
                fileName:   'Land_Report.png',
                shareTitle: 'Amin Land Report',
                shareText:  t('shareText') || APP.getShareMessage(),
                onSuccess:  () => {},
                onSaved:    () => alert(t('histImgSaved'))
            });
        }))
        .catch(() => { _hideShareSpinner(); alert(t('shareNotSupported')); });
};

/* ══════════════════════════════════════════════════════
   PRIVATE HELPERS
   ══════════════════════════════════════════════════════ */

/* Universal share engine:
   1. Try Web Share API with file
   2. Fallback: download the file (works on all devices) */
function _doShare({ blob, fileName, shareTitle, shareText, onSuccess, onSaved }) {
    const file      = new File([blob], fileName, { type: 'image/png' });
    const shareData = { title: shareTitle, text: shareText, files: [file] };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData)
            .then(onSuccess)
            .catch(err => {
                if (err.name === 'AbortError') return;
                /* Share failed → auto download as fallback */
                _downloadBlob(blob, fileName);
                onSaved();
            });
    } else if (navigator.share) {
        navigator.share({ title: shareTitle, text: shareText })
            .then(() => {
                _downloadBlob(blob, fileName);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    _downloadBlob(blob, fileName);
                    onSaved();
                }
            });
    } else {
        /* No share API (non-HTTPS or unsupported browser) → download */
        _downloadBlob(blob, fileName);
        onSaved();
    }
}

/* Build the off-screen history image card — uses CSS variables via inline styles */
function _buildHistoryCard(items) {
    /* Get computed brand colour from CSS variable */
    const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary').trim() || '#FF9700';

    const appTitle   = APP.fullName;
    const calHistory = t('calHistory') || 'Calculation History';
    const storeLink  = APP.getStoreLink();
    const downloadTxt= t('downloadApp') || 'Download App';

    const wrap = document.createElement('div');
    wrap.style.cssText = [
        'position:absolute','top:0','left:-9999px',
        'width:400px','padding:28px 24px',
        'background:#1a1a2e','z-index:-1',
        'font-family:sans-serif'
    ].join(';');

    wrap.innerHTML = `
        <div style="text-align:center;border-bottom:2px solid ${primaryColor};padding-bottom:16px;margin-bottom:16px;">
            <div style="font-size:1.5rem;font-weight:900;color:${primaryColor};letter-spacing:1px;">${appTitle}</div>
            <div style="font-size:.85rem;color:#aaa;margin-top:4px;">${calHistory}</div>
        </div>
        <div id="_histRows"></div>
        <div style="margin-top:20px;padding-top:14px;border-top:2px solid ${primaryColor};text-align:center;">
            <div style="font-size:.8rem;color:#aaa;">${downloadTxt}</div>
            <div style="font-size:.8rem;color:#007aff;margin-top:3px;">${storeLink ? storeLink.replace('https://','') : 'play.google.com'}</div>
        </div>`;

    const rowsEl = wrap.querySelector('#_histRows');
    items.forEach(item => {
        const row = document.createElement('div');
        row.style.cssText = 'border-bottom:1px dashed #333;padding:12px 0;';
        row.innerHTML = `
            <div style="color:#888;font-size:.82rem;">${item.q}</div>
            <div style="text-align:right;font-weight:900;font-size:1.4rem;color:#fff;">= ${item.a}</div>
            <div style="font-size:.7rem;color:#555;margin-top:3px;">${item.date}</div>`;
        rowsEl.appendChild(row);
    });

    return wrap;
}

/* Trigger file download */
function _downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const a   = document.createElement('a');
    a.href     = url;
    a.download = name;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 8000);
}

window.downloadImage = _downloadBlob; /* backward compat */
