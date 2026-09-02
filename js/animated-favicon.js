/* ── Dynamic Animated Favicon (ASCII / Minimalist Style) ── */
(function () {
  'use strict';

  // Create or select the favicon link element
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }

  // Offscreen canvas for crisp 32x32 favicon rendering
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  // Animation frames - Elegant minimal glyph sequence
  const frames = ['✦', '✧', '✶', '✸', '✹', '✷', '✦'];
  let currentFrame = 0;
  let angle = 0;
  let intervalId = null;

  function renderFavicon() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Style settings
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    // Rotate slightly on each tick
    ctx.rotate(angle);

    // Draw symbol centered
    ctx.font = 'bold 44px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#111111'; // Pure ink black
    ctx.fillText(frames[currentFrame], 0, 2);

    ctx.restore();

    // Update favicon href
    link.href = canvas.toDataURL('image/png');

    currentFrame = (currentFrame + 1) % frames.length;
    angle += (Math.PI / 180) * 15; // 15 degrees per step
  }

  function startAnimation() {
    if (!intervalId) {
      renderFavicon();
      intervalId = setInterval(renderFavicon, 350); // 350ms per frame
    }
  }

  function stopAnimation() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Auto-pause when tab is inactive to save battery & resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAnimation();
    } else {
      startAnimation();
    }
  });

  // Start on load
  startAnimation();
})();
