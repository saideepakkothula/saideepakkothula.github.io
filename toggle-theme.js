// Theme toggle for light/dark mode
(function() {
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle-btn';
  toggleBtn.title = 'Toggle light/dark mode';
  toggleBtn.setAttribute('aria-label', 'Toggle light/dark mode');
  toggleBtn.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 16v2m11-11h-2M3 12H1m16.95 6.95-1.41-1.41M6.46 6.46 5.05 5.05m12.02 0-1.41 1.41M6.46 17.54l-1.41 1.41"/></svg>`;
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.top = '24px';
  toggleBtn.style.right = '32px';
  toggleBtn.style.zIndex = '200';
  toggleBtn.style.background = 'rgba(255,255,255,0.85)';
  toggleBtn.style.border = 'none';
  toggleBtn.style.borderRadius = '50%';
  toggleBtn.style.width = '48px';
  toggleBtn.style.height = '48px';
  toggleBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.display = 'flex';
  toggleBtn.style.alignItems = 'center';
  toggleBtn.style.justifyContent = 'center';
  toggleBtn.style.transition = 'background 0.2s';
  toggleBtn.onmouseenter = () => toggleBtn.style.background = '#e3eaf7';
  toggleBtn.onmouseleave = () => toggleBtn.style.background = 'rgba(255,255,255,0.85)';

  function setTheme(dark) {
    if (dark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      toggleBtn.style.background = '#23272f';
      toggleBtn.style.color = '#e3eaf7';
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      toggleBtn.style.background = 'rgba(255,255,255,0.85)';
      toggleBtn.style.color = '#23272f';
    }
  }

  // Initial theme
  const userPref = localStorage.getItem('theme');
  const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(userPref === 'dark' || (!userPref && systemPref));

  toggleBtn.onclick = function() {
    setTheme(!document.body.classList.contains('dark-mode'));
  };

  document.body.appendChild(toggleBtn);
})();
