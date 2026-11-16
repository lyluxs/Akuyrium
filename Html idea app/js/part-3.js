(() => {
  const menu = document.getElementById('aero-menu-toggle');
  if (menu) menu.addEventListener('click', () => {
    if (typeof goto === 'function') goto('home');
    const sheet = document.getElementById('mobile-sheet');
    const backdrop = document.getElementById('mobile-sheet-backdrop');
    if (sheet) sheet.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
    menu.setAttribute('aria-label', 'Go to main menu');
    menu.title = 'Go to main menu';
    window.scrollTo({top:0, behavior:'smooth'});
  });

  const musicButton = document.getElementById('bg-music-toggle');
  const widget = document.querySelector('.bg-music-widget');
  if (musicButton && widget) {
    const syncMusicIcon = () => {
      const muted = !widget.classList.contains('is-playing');
      musicButton.classList.toggle('is-muted', muted);
      musicButton.title = muted ? 'Turn background music on' : 'Mute background music';
      musicButton.setAttribute('aria-label', musicButton.title);
    };
    syncMusicIcon();
    new MutationObserver(syncMusicIcon).observe(widget, {attributes:true, attributeFilter:['class']});
    musicButton.addEventListener('click', () => setTimeout(syncMusicIcon, 80));
  }
})();
