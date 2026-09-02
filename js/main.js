/* ── Main — Init, Header, Smooth Scroll ── */
(function () {
  'use strict';

  /* ── Header element reference ── */
  const header = document.querySelector('.site-header');

  /* ── Mobile menu ── */
  const burger = document.querySelector('.header-burger');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');

  function toggleDrawer() {
    const isOpen = drawer.classList.contains('is-open');
    drawer.classList.toggle('is-open');
    overlay.classList.toggle('is-open');
    burger.classList.toggle('is-open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    burger.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (burger) burger.addEventListener('click', toggleDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Close drawer on nav link click
  drawer?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        const headerHeight = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header-nav a[href^="#"]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('is-active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateActiveNav);
  }, { passive: true });

  /* ── Rename image files with cleaner names ── */
  // Handle broken images gracefully
  document.querySelectorAll('.project-media img').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });

})();
