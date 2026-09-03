/**
 * Project Accordion & Show More Module
 * Simple, reliable show/hide with smooth scroll-back on collapse.
 */
(function () {
  'use strict';

  function getTranslation(key, fallback) {
    const lang = document.documentElement.lang || 'vi';
    const texts = {
      vi: {
        btn_view_more: 'Xem thêm',
        btn_show_less: 'Thu gọn',
        btn_open_part: 'Mở xem',
        btn_close_part: 'Thu gọn',
        btn_photos: 'ảnh'
      },
      en: {
        btn_view_more: 'View more',
        btn_show_less: 'Show less',
        btn_open_part: 'Open',
        btn_close_part: 'Collapse',
        btn_photos: 'photos'
      }
    };
    return (texts[lang] && texts[lang][key]) || fallback;
  }

  /* ── Project Media "View More" Toggles ── */

  function initProjectToggles() {
    const toggles = document.querySelectorAll('.project-media-toggle');

    toggles.forEach((btn) => {
      const parentMedia = btn.closest('.project-media');
      if (!parentMedia) return;
      const moreContainer = parentMedia.querySelector('.project-media__more');
      if (!moreContainer) return;

      const extraCount = btn.getAttribute('data-extra-count') || '';

      function updateBtnState(isExpanded) {
        btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        const textSpan = btn.querySelector('.toggle-text');
        const countSpan = btn.querySelector('.toggle-count');

        if (isExpanded) {
          if (textSpan) textSpan.textContent = getTranslation('btn_show_less', 'Thu gọn');
          if (countSpan) countSpan.style.display = 'none';
        } else {
          if (textSpan) textSpan.textContent = getTranslation('btn_view_more', 'Xem thêm');
          if (countSpan) {
            countSpan.style.display = '';
            countSpan.textContent = ` (+${extraCount} ${getTranslation('btn_photos', 'ảnh')})`;
          }
        }
      }

      btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';

        if (!isExpanded) {
          /* ── EXPAND ── */
          moreContainer.removeAttribute('hidden');
          updateBtnState(true);
          window.dispatchEvent(new Event('scroll'));
        } else {
          /* ── COLLAPSE ── */
          // 1. Find the project article and calculate where its top is
          const projectArticle = btn.closest('.project');
          const projectTop = projectArticle
            ? window.pageYOffset + projectArticle.getBoundingClientRect().top - 80
            : null;

          // 2. Hide the content immediately
          moreContainer.setAttribute('hidden', '');
          updateBtnState(false);

          // 3. After hiding, if we were scrolled past the project top,
          //    instantly jump to project top (no smooth scroll — this is
          //    the snappiest, least disorienting option since the content
          //    above the fold hasn't changed and the user just wants to
          //    see the collapsed state).
          if (projectArticle && projectTop !== null) {
            const currentY = window.pageYOffset;
            if (currentY > projectTop + 50) {
              window.scrollTo(0, Math.max(0, projectTop));
            }
          }
        }
      });
    });
  }

  /* ── IAE Subgroup Accordions ── */

  function initIaeSubgroups() {
    const subgroups = document.querySelectorAll('.media-subgroup');

    subgroups.forEach((sg) => {
      const header = sg.querySelector('.media-subgroup__header');
      const body = sg.querySelector('.media-subgroup__body');
      if (!header || !body) return;

      function toggleSubgroup() {
        const isOpen = sg.classList.contains('is-open');

        if (!isOpen) {
          sg.classList.add('is-open');
          header.setAttribute('aria-expanded', 'true');
          body.removeAttribute('hidden');

          const label = header.querySelector('.subgroup-toggle-label');
          if (label) label.textContent = getTranslation('btn_close_part', 'Thu gọn');

          window.dispatchEvent(new Event('scroll'));
        } else {
          const sgTop = window.pageYOffset + sg.getBoundingClientRect().top - 85;

          sg.classList.remove('is-open');
          header.setAttribute('aria-expanded', 'false');
          body.setAttribute('hidden', '');

          const label = header.querySelector('.subgroup-toggle-label');
          if (label) label.textContent = getTranslation('btn_open_part', 'Mở xem');

          const currentY = window.pageYOffset;
          if (currentY > sgTop + 50) {
            window.scrollTo(0, Math.max(0, sgTop));
          }
        }
      }

      header.addEventListener('click', toggleSubgroup);
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSubgroup();
        }
      });
    });
  }

  /* ── Language change handler ── */

  function updateAllTexts() {
    document.querySelectorAll('.project-media-toggle').forEach((btn) => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const textSpan = btn.querySelector('.toggle-text');
      const countSpan = btn.querySelector('.toggle-count');
      const extraCount = btn.getAttribute('data-extra-count') || '';

      if (isExpanded) {
        if (textSpan) textSpan.textContent = getTranslation('btn_show_less', 'Thu gọn');
        if (countSpan) countSpan.style.display = 'none';
      } else {
        if (textSpan) textSpan.textContent = getTranslation('btn_view_more', 'Xem thêm');
        if (countSpan) {
          countSpan.style.display = '';
          countSpan.textContent = ` (+${extraCount} ${getTranslation('btn_photos', 'ảnh')})`;
        }
      }
    });

    document.querySelectorAll('.media-subgroup').forEach((sg) => {
      const isOpen = sg.classList.contains('is-open');
      const label = sg.querySelector('.subgroup-toggle-label');
      if (label) {
        label.textContent = isOpen
          ? getTranslation('btn_close_part', 'Thu gọn')
          : getTranslation('btn_open_part', 'Mở xem');
      }
    });
  }

  window.addEventListener('portfolio-lang-change', updateAllTexts);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initProjectToggles();
      initIaeSubgroups();
      updateAllTexts();
    });
  } else {
    initProjectToggles();
    initIaeSubgroups();
    updateAllTexts();
  }
})();
