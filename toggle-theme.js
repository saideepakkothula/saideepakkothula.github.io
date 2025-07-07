// Theme toggle for light/dark mode
(function() {
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle-btn';
  toggleBtn.title = 'Toggle light/dark mode';
  toggleBtn.setAttribute('aria-label', 'Toggle light/dark mode');
  toggleBtn.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 16v2m11-11h-2M3 12H1m16.95 6.95-1.41-1.41M6.46 6.46 5.05 5.05m12.02 0-1.41 1.41M6.46 17.54l-1.41 1.41"/></svg>`;
  // Responsive placement for theme toggle button
  function setToggleBtnPosition() {
    toggleBtn.style.position = 'fixed';
    toggleBtn.style.zIndex = '200';
    toggleBtn.style.border = 'none';
    toggleBtn.style.borderRadius = '50%';
    toggleBtn.style.width = '48px';
    toggleBtn.style.height = '48px';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.display = 'flex';
    toggleBtn.style.alignItems = 'center';
    toggleBtn.style.justifyContent = 'center';
    toggleBtn.style.transition = 'background 0.2s, box-shadow 0.2s, border 0.2s';
    if (window.innerWidth <= 900) {
      toggleBtn.style.right = '18px';
      toggleBtn.style.top = '74px';
      toggleBtn.style.boxShadow = '0 2px 12px rgba(25,118,210,0.13)';
    } else {
      toggleBtn.style.right = '32px';
      toggleBtn.style.top = '32px';
      toggleBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)';
    }
    // Set background and icon color based on theme
    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.style.background = '#181c24';
      toggleBtn.style.color = '#fff';
    } else {
      toggleBtn.style.background = '#fff';
      toggleBtn.style.color = '#23272f';
    }
  }
  setToggleBtnPosition();
  window.addEventListener('resize', setToggleBtnPosition);
  toggleBtn.onmouseenter = () => {
    toggleBtn.style.boxShadow = '0 4px 18px rgba(25,118,210,0.18)';
    toggleBtn.style.border = 'none';
    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.style.background = '#23283a';
      toggleBtn.style.color = '#90caf9';
    } else {
      toggleBtn.style.background = '#e3eaf7';
      toggleBtn.style.color = '#1976d2';
    }
  };
  toggleBtn.onmouseleave = () => {
    setToggleBtnPosition();
  };

  function setTheme(dark) {
    if (dark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      toggleBtn.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>`;
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      toggleBtn.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#23272f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 16v2m11-11h-2M3 12H1m16.95 6.95-1.41-1.41M6.46 6.46 5.05 5.05m12.02 0-1.41 1.41M6.46 17.54l-1.41 1.41"/></svg>`;
    }
    setToggleBtnPosition();
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
