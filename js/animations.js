/* ── Animations — Scroll Reveals & Kinetic Hover ── */
(function () {
  'use strict';

  /* ── Scroll Reveal with IntersectionObserver ── */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el, i) => {
      // Set stagger delay for children
      if (el.parentElement && el.parentElement.classList.contains('reveal-stagger')) {
        el.style.setProperty('--stagger', i);
      }
      observer.observe(el);
    });
  }

  /* ── Hero headline word reveal observer ── */
  const heroHeadline = document.querySelector('.hero-headline');
  if (heroHeadline) {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            heroObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    heroObserver.observe(heroHeadline);
  }

  /* ── Stagger reveal for project list ── */
  const staggerContainers = document.querySelectorAll('.reveal-stagger');
  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.setProperty('--stagger', i);
    });
  });

})();
