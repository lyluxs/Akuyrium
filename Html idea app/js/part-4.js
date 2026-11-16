(() => {
  const finePointer = window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (!finePointer) return;
  let last = 0;
  document.addEventListener('click', (event) => {
    const target = event.target.closest('button,a,[role="button"],.app-launch,.nav button');
    if (!target) return;
    const now = Date.now();
    if (now-last < 65) return;
    last = now;
    const fx = document.createElement('span');
    fx.className = 'aero-click-fx';
    fx.style.setProperty('--fx-x', event.clientX + 'px');
    fx.style.setProperty('--fx-y', event.clientY + 'px');
    document.body.appendChild(fx);
    fx.addEventListener('animationend', () => fx.remove(), {once:true});
  }, {passive:true});
})();
