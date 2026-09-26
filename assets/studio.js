(() => {
  const start = () => {
    if (!document.body) return;
    const loader = document.createElement('div');
    loader.id = 'studio-loader';
    loader.innerHTML = '<div class="studio-loader-inner"><div class="studio-loader-mark">✈</div><div class="studio-loader-title">SKYBOUND</div><div class="studio-loader-sub">FLIGHT SIMULATOR · STUDIO BUILD</div><div class="studio-loader-line"></div></div>';
    document.body.prepend(loader);

    const finish = () => {
      const canvas = document.querySelector('.world canvas');
      if (!canvas) return false;
      requestAnimationFrame(() => setTimeout(() => loader.classList.add('hide'), 650));
      setTimeout(() => loader.remove(), 1500);
      return true;
    };

    if (!finish()) {
      const observer = new MutationObserver(() => {
        if (finish()) observer.disconnect();
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
      setTimeout(() => {
        loader.classList.add('hide');
        setTimeout(() => loader.remove(), 900);
      }, 5000);
    }

    const decorate = () => {
      const brand = document.querySelector('.brand');
      if (brand && !document.querySelector('.studio-build-badge')) {
        const badge = document.createElement('span');
        badge.className = 'studio-build-badge';
        badge.textContent = 'STUDIO BUILD';
        brand.after(badge);
      }
    };
    decorate();
    const uiObserver = new MutationObserver(decorate);
    uiObserver.observe(document.documentElement, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
