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

  /* ── Hero headline word reveal ── */
  const heroHeadline = document.querySelector('.hero-headline');
  if (heroHeadline) {
    // Already has words wrapped in .word > .word-inner from HTML
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            heroObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    heroObserver.observe(heroHeadline);
  }

  /* ── Text Scramble on Hover ── */
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.originalText = el.textContent;
      this.isAnimating = false;
    }

    scramble() {
      if (this.isAnimating) return;
      this.isAnimating = true;

      const text = this.originalText;
      const length = text.length;
      let iteration = 0;
      const maxIterations = length * 2;

      const interval = setInterval(() => {
        this.el.textContent = text
          .split('')
          .map((char, i) => {
            if (i < iteration / 2) return text[i];
            return this.chars[Math.floor(Math.random() * this.chars.length)];
          })
          .join('');

        iteration++;
        if (iteration > maxIterations) {
          this.el.textContent = text;
          this.isAnimating = false;
          clearInterval(interval);
        }
      }, 30);
    }
  }

  // Apply text scramble to elements with .scramble-text
  document.querySelectorAll('.scramble-text').forEach((el) => {
    const scrambler = new TextScramble(el);
    el.closest('a, .other-item')?.addEventListener('mouseenter', () => {
      scrambler.scramble();
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
