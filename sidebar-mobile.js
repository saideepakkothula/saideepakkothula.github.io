// Sidebar mobile toggle logic for Sai Deepak Kothula Portfolio

document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggleBtn = document.getElementById('sidebar-toggle');
  const navLinks = sidebar ? sidebar.querySelectorAll('.sidebar-nav a') : [];

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Ensure sidebar is always at scroll top when opened
    if (window.innerWidth <= 900) {
      sidebar.scrollTop = 0;
      window.scrollTo({ top: 0 });
    }
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggleBtn && sidebar && overlay) {
    toggleBtn.addEventListener('click', function () {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
    overlay.addEventListener('click', closeSidebar);
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        // Only close sidebar on mobile
        if (window.innerWidth <= 900) closeSidebar();
      });
    });
    // Close sidebar on resize to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        closeSidebar();
      }
    });
  }
});
