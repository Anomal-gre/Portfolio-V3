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
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#top' || anchor.classList.contains('header-brand')) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 54;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
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

  /* ── Dynamic Equal-Height Multi-Column Media Alignment ── */
  function alignMediaRows() {
    document.querySelectorAll('.media-grid-2, .media-grid-3').forEach((row) => {
      const items = Array.from(row.querySelectorAll('.img-hover'));
      if (items.length >= 2) {
        const imgs = items.map((item) => item.querySelector('img'));
        const compute = () => {
          if (imgs.every((img) => img && img.naturalWidth && img.naturalHeight)) {
            imgs.forEach((img, i) => {
              const aspect = img.naturalWidth / img.naturalHeight;
              items[i].style.flex = `${aspect} 1 0%`;
            });
          }
        };

        compute();
        imgs.forEach((img) => {
          if (img && !img.complete) {
            img.addEventListener('load', compute);
          }
        });
      }
    });
  }

  // Run on DOM ready & window load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', alignMediaRows);
  } else {
    alignMediaRows();
  }
  window.addEventListener('load', alignMediaRows);
  window.addEventListener('resize', alignMediaRows, { passive: true });

  /* ── Handle broken images gracefully ── */
  document.querySelectorAll('.project-media img').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });

  /* ── About portrait click/tap reveal toggle ── */
  const portrait = document.querySelector('.about-portrait');
  if (portrait) {
    portrait.addEventListener('click', () => {
      portrait.classList.toggle('is-revealed');
    });
  }

})();
