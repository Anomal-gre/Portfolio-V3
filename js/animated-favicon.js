/* ── Dynamic Animated Favicon (Stars + Logo + 5-Pointed Flag Star on Rounded Square) ── */
(function () {
  'use strict';

  // Create or select the favicon link element
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }

  // Offscreen canvas for crisp 64x64 favicon rendering
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  // Offscreen canvas for tinting logo pure black
  const tintCanvas = document.createElement('canvas');
  tintCanvas.width = 64;
  tintCanvas.height = 64;
  const tintCtx = tintCanvas.getContext('2d');

  // Load user logo
  const logo = new Image();
  logo.crossOrigin = 'anonymous';
  logo.src = 'assets/images/logo.png';
  let isLogoReady = false;

  logo.onload = () => {
    isLogoReady = true;
    prepareBlackLogo();
  };

  function prepareBlackLogo() {
    tintCtx.clearRect(0, 0, 64, 64);
    // Draw original logo
    tintCtx.drawImage(logo, 0, 0, 64, 64);
    // Tint solid ink black
    tintCtx.globalCompositeOperation = 'source-in';
    tintCtx.fillStyle = '#111111';
    tintCtx.fillRect(0, 0, 64, 64);
    tintCtx.globalCompositeOperation = 'source-over';
  }

  // Sequence: Star glyphs, Logo, and 5-Pointed Flag Star
  const frames = ['✦', '✧', '✶', 'LOGO', 'STAR5', '✸', '✹', '✷'];
  let currentFrame = 0;
  let angle = 0;
  let intervalId = null;

  function drawRoundedRect(c, x, y, w, h, r) {
    if (typeof c.roundRect === 'function') {
      c.beginPath();
      c.roundRect(x, y, w, h, r);
      c.fill();
      c.stroke();
    } else {
      c.beginPath();
      c.moveTo(x + r, y);
      c.lineTo(x + w - r, y);
      c.quadraticCurveTo(x + w, y, x + w, y + r);
      c.lineTo(x + w, y + h - r);
      c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      c.lineTo(x + r, y + h);
      c.quadraticCurveTo(x, y + h, x, y + h - r);
      c.lineTo(x, y + r);
      c.quadraticCurveTo(x, y, x + r, y);
      c.closePath();
      c.fill();
      c.stroke();
    }
  }

  // Draw 5-pointed star with golden ratio proportions (Vietnamese Flag Star geometry)
  function drawFlagStar(c, cx, cy, outerR, innerR) {
    let rot = (Math.PI / 2) * 3; // Top spike points straight up at 12 o'clock
    const step = Math.PI / 5;

    c.beginPath();
    c.moveTo(cx, cy - outerR);
    for (let i = 0; i < 5; i++) {
      let x = cx + Math.cos(rot) * outerR;
      let y = cy + Math.sin(rot) * outerR;
      c.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerR;
      y = cy + Math.sin(rot) * innerR;
      c.lineTo(x, y);
      rot += step;
    }
    c.lineTo(cx, cy - outerR);
    c.closePath();
    c.fillStyle = '#111111';
    c.fill();
  }

  function renderFavicon() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Draw White Rounded Square Background
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, 2, 2, 60, 60, 14);

    // 2. Draw Glyphs / Logo / Flag Star
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

    const frame = frames[currentFrame];

    if (frame === 'LOGO' && isLogoReady) {
      // Draw black logo completely upright (NO ROTATION)
      const size = 34;
      ctx.drawImage(tintCanvas, -size / 2, -size / 2, size, size);
    } else if (frame === 'STAR5') {
      // Draw 5-pointed flag star completely upright (NO ROTATION)
      drawFlagStar(ctx, 0, 1.5, 20, 7.6);
    } else {
      // Rotate slightly only for decorative star glyphs
      ctx.rotate(angle);

      // Draw star glyph in rich ink black (enlarged +30%)
      ctx.fillStyle = '#111111';
      ctx.font = 'bold 45px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(frame, 0, 1);
    }

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

  if (logo.complete && logo.naturalWidth > 0) {
    isLogoReady = true;
    prepareBlackLogo();
  }

  // Start on load
  startAnimation();
})();
