/* ── Animations — Scroll Reveals & Text Scramble ── */
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

  /* ── Enhanced Cyber/Minimal Text Scramble on Hover ── */
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#_0101';
      this.isAnimating = false;
      this.interval = null;
    }

    scramble() {
      if (this.isAnimating) return;
      this.isAnimating = true;

      // Always read live textContent to seamlessly support i18n language switches
      const targetText = this.el.textContent.trim();
      if (!targetText) {
        this.isAnimating = false;
        return;
      }

      const length = targetText.length;
      let iteration = 0;
      const speed = length > 60 ? 18 : 28;
      const stepDivider = length > 60 ? 1.4 : 2.0;
      const maxIterations = length > 60 ? Math.min(length * 1.5, 45) : Math.min(length * 2.5, 30);

      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.el.textContent = targetText
          .split('')
          .map((char, i) => {
            if (char === ' ' || char === '\n') return char;
            if (i < iteration / stepDivider) return targetText[i];
            return this.chars[Math.floor(Math.random() * this.chars.length)];
          })
          .join('');

        iteration++;
        if (iteration > maxIterations) {
          this.el.textContent = targetText;
          this.isAnimating = false;
          clearInterval(this.interval);
        }
      }, speed);
    }
  }

  // Target selectors across Landing and Other Projects
  const scrambleSelectors = [
    '.hero-headline',
    '.hero-work-label',
    '.hero-work-years',
    '.hero-scroll-hint span:first-child',
    '.other-item__name',
    '.scramble-text'
  ];

  // Attach scramble hover effect
  scrambleSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      const scrambler = new TextScramble(el);
      el.addEventListener('mouseenter', () => scrambler.scramble());
    });
  });

  /* ── Stagger reveal for project list ── */
  const staggerContainers = document.querySelectorAll('.reveal-stagger');
  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.setProperty('--stagger', i);
    });
  });

})();
