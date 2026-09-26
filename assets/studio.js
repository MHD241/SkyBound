(() => {
  const start = () => {
    if (!document.body) return;
    const decorate = () => {
      const brand = document.querySelector('.brand');
      if (brand && !document.querySelector('.studio-build-badge')) {
        const badge = document.createElement('span');
        badge.className = 'studio-build-badge';
        badge.textContent = 'STUDIO REBOOT';
        brand.after(badge);
      }
      if (!document.querySelector('.camera-drag-hint')) {
        const world = document.querySelector('.world');
        if (world) {
          const hint = document.createElement('div');
          hint.className = 'camera-drag-hint';
          hint.innerHTML = '<b>DRAG</b> look around <span>·</span> <b>SCROLL</b> zoom <span>·</span> <b>DOUBLE CLICK</b> reset';
          document.body.appendChild(hint);
        }
      }
    };
    decorate();
    const uiObserver = new MutationObserver(decorate);
    uiObserver.observe(document.documentElement, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
