/* ── ASCII Dither Cursor Trail (vessa.design inspired) ── */
(function () {
  'use strict';

  // Skip on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const canvas = document.querySelector('.dither-trail-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const chars = ['.', '·', '+', '*', '#', ':', '░', '▒', '▓', '█'];
  const particles = [];
  const MAX_PARTICLES = 120;
  const SPAWN_RATE = 3; // particles per move event
  const FADE_SPEED = 0.018;
  const FONT_SIZE = 10;

  let mouseX = -100;
  let mouseY = -100;
  let lastMouseX = -100;
  let lastMouseY = -100;
  let raf;
  let needsResize = true;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
    needsResize = false;
  }

  function spawnParticle(x, y) {
    if (particles.length >= MAX_PARTICLES) {
      // Recycle oldest
      const p = particles.shift();
      p.x = x + (Math.random() - 0.5) * 20;
      p.y = y + (Math.random() - 0.5) * 20;
      p.char = chars[Math.floor(Math.random() * chars.length)];
      p.opacity = 0.4 + Math.random() * 0.4;
      p.size = FONT_SIZE + Math.random() * 4;
      p.vy = -0.2 - Math.random() * 0.3;
      particles.push(p);
    } else {
      particles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: 0.4 + Math.random() * 0.4,
        size: FONT_SIZE + Math.random() * 4,
        vy: -0.2 - Math.random() * 0.3
      });
    }
  }

  function draw() {
    if (needsResize) resize();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.opacity -= FADE_SPEED;
      p.y += p.vy;

      if (p.opacity <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.globalAlpha = p.opacity;
      ctx.font = `${p.size}px monospace`;
      ctx.fillStyle = '#111';
      ctx.fillText(p.char, p.x, p.y);
    }

    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(draw);
  }

  // Throttled mousemove
  let lastSpawn = 0;
  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const now = performance.now();
    if (now - lastSpawn < 16) return; // ~60fps throttle
    lastSpawn = now;

    // Calculate distance to avoid spawning when stationary
    const dx = mouseX - lastMouseX;
    const dy = mouseY - lastMouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 3) {
      const count = Math.min(SPAWN_RATE, Math.ceil(dist / 10));
      for (let i = 0; i < count; i++) {
        spawnParticle(mouseX, mouseY);
      }
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }

  window.addEventListener('resize', () => { needsResize = true; });
  document.addEventListener('mousemove', onMouseMove);

  resize();
  draw();
})();
