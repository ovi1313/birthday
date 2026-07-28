// ---------- floating background stickers ----------
(function spawnStickers() {
  const field = document.querySelector('.sticker-field');
  if (!field) return;
  const icons = ['🌸', '💗', '✨', '🌷', '💕'];
  const count = window.innerWidth < 720 ? 8 : 14;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDelay = (Math.random() * 14) + 's';
    el.style.animationDuration = (10 + Math.random() * 8) + 's';
    el.style.fontSize = (1 + Math.random() * 1.4) + 'rem';
    field.appendChild(el);
  }
})();

// ---------- music autoplay handling ----------
(function setupMusic() {
  const audio = document.getElementById('bgm');
  const btn = document.getElementById('music-toggle');
  if (!audio || !btn) return;

  audio.volume = 0.45;

  function updateIcon() {
    btn.textContent = audio.paused ? '🔇' : '🎵';
  }

  audio.play().then(() => {
    updateIcon();
  }).catch(() => {
    btn.classList.add('needs-tap');
    updateIcon();
  });

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        btn.classList.remove('needs-tap');
        updateIcon();
      }).catch(() => {});
    } else {
      audio.pause();
      updateIcon();
    }
  });
})();

// ---------- birthday cake candle blow / wish reveal (page 5) ----------
function blowCandles() {
  const reveal = document.getElementById('wish-reveal');
  const flame = document.querySelectorAll('.flame');
  flame.forEach(f => f.style.opacity = '0');
  if (reveal) reveal.classList.add('show');
  launchConfetti();
}

function launchConfetti() {
  const colors = ['#e88aa0', '#f2c879', '#b4485f', '#ffd8e2'];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.textContent = ['🌸', '💖', '✨', '🎉'][Math.floor(Math.random() * 4)];
    piece.style.position = 'fixed';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.top = '-40px';
    piece.style.fontSize = (1 + Math.random()) + 'rem';
    piece.style.zIndex = 999;
    piece.style.pointerEvents = 'none';
    piece.style.transition = 'transform 2.2s ease-in, opacity 2.2s ease-in';
    document.body.appendChild(piece);
    requestAnimationFrame(() => {
      piece.style.transform = `translateY(${window.innerHeight + 60}px) rotate(${Math.random() * 360}deg)`;
      piece.style.opacity = '0';
    });
    setTimeout(() => piece.remove(), 2300);
  }
}
