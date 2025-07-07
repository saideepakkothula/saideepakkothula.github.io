// Highlight sidebar nav link based on scroll position
window.addEventListener('DOMContentLoaded', function () {
  const sections = [
    { id: 'home', nav: document.querySelector('.sidebar-nav a[href="#home"]') },
    { id: 'about', nav: document.querySelector('.sidebar-nav a[href="#about"]') },
    { id: 'projects', nav: document.querySelector('.sidebar-nav a[href="#projects"]') },
    { id: 'resume', nav: document.querySelector('.sidebar-nav a[href="#resume"]') },
    { id: 'contact', nav: document.querySelector('.sidebar-nav a[href="#contact"]') }
  ];

  function getSectionTop(id) {
    const el = document.getElementById(id);
    if (!el) return Number.POSITIVE_INFINITY;
    return el.getBoundingClientRect().top - 80; // offset for fixed sidebar
  }


  function onScroll() {
    let current = sections[0];
    for (const section of sections) {
      if (getSectionTop(section.id) < 0) {
        current = section;
      }
    }
    // If at (or near) the bottom of the page, always highlight Contact
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
      const contactSection = sections.find(s => s.id === 'contact');
      if (contactSection) current = contactSection;
    }
    sections.forEach(s => s.nav && s.nav.classList.remove('active'));
    if (current.nav) current.nav.classList.add('active');
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
