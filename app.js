/* ─────────────────────────────────────────────────────────────────────────────
   ANNIVERSARY WEBSITE — APP.JS
   ───────────────────────────────────────────────────────────────────────────── */
/* ══════════════════════════════════════
   DATA
   ══════════════════════════════════════ */
const PHOTO_CAPTIONS = [
  "Our first photo together ❤️",
  "That golden afternoon",
  "Where it all began",
  "Your smile, always",
  "The little moments",
  "Late evening walks",
  "Rainy day, warm hearts",
  "A quiet Sunday",
  "When time stood still",
  "Laughter and light",
  "Our favorite place",
  "Just us two",
  "Dancing in the rain",
  "The long road home",
  "Sunsets and silence",
  "Morning coffee together",
  "Captured forever",
  "Green hills, open skies",
  "Endless conversations",
  "Two years of love ❤️"
];
const VIDEO_TITLES = [
  "Our First Day",
  "Laughing Together",
  "Beautiful Evening",
  "A Rainy Afternoon",
  "Golden Hour Memory",
  "The Long Drive",
  "Sunday Morning",
  "Dancing in the Dark",
  "Quiet Moments",
  "Two Years ❤️"
];
const MEMORY_TEXTS = [
  "Our first photo together",
  "The first time we laughed until we cried",
  "The longest phone call",
  "Our favorite place in the world",
  "The day you made everything better",
  "That song that plays in my head when I think of you",
  "Our first meal together",
  "When you held my hand for the first time",
  "The message that changed everything",
  "A rainy evening I'll never forget",
  "When I knew you were the one",
  "Our little secrets",
  "The walk that lasted hours",
  "Every time you made me smile",
  "June 28 — the most beautiful beginning"
];
const HEART_MESSAGES = [
  "Love is not about how many days, months, or years you have been together. It is all about how much you love each other every single day.",
  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
  "To love and be loved is to feel the sun from both sides.",
  "True love stories never have endings.",
  "The best thing to hold onto in life is each other.",
  "Love is composed of a single soul inhabiting two bodies.",
  "We loved with a love that was more than love.",
  "You are my today and all of my tomorrows.",
  "If I know what love is, it is because of you.",
  "Two souls with but a single thought, two hearts that beat as one.",
  "Love is a canvas furnished by nature and embroidered by imagination.",
  "In the arithmetic of love, one plus one equals everything, and two minus one equals nothing.",
  "The water shines only by the sun. And it is you who are my sun.",
  "Grow old along with me! The best is yet to be.",
  "Where there is love there is life.",
  "To the world you may be one person, but to one person you are the world.",
  "Love is that condition in which the happiness of another person is essential to your own."
];
const NOTE_ROTATIONS = [
  -3, 2, -1.5, 4, -2.5, 1, -4, 3, -1, 2.5,
  -3.5, 1.5, -2, 3.5, -1
];
const POLAROID_ROTATIONS = [
  -4, 3, -2, 5, -1, 4, -3, 2, -5, 1,
  3, -4, 1.5, -2.5, 4, -1.5, 2, -3.5, 5, -2
];
/* ══════════════════════════════════════
   DOM READY
   ══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initPasswordGate();
  initPetals();
  initRain();
  initHiddenHearts();
  initPhotoGallery();
  initVideoGallery();
  initMemoryWall();
  initCountdown();
  initSurprise();
  initScrollAnimations();
  initSmoothScroll();
  initKSRTCTickets();
  initJourneyMap();
  initHiddenKSRTCIcons();
  initCollegeUploads();
  initCollegeTextReveal();
  initFinalJourney();
});
/* ══════════════════════════════════════
   FLOATING PETALS
   ══════════════════════════════════════ */
function initPetals() {
  const container = document.getElementById('petalsContainer');
  const PETAL_CHARS = ['🌸', '🌺', '🌼', '✿', '✾', '❀', '🍃', '🌿'];
  const COUNT = 18;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = PETAL_CHARS[i % PETAL_CHARS.length];
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${10 + Math.random() * 15}s`;
    p.style.animationDelay = `${Math.random() * 12}s`;
    p.style.fontSize = `${10 + Math.random() * 14}px`;
    container.appendChild(p);
  }
}
/* ══════════════════════════════════════
   RAIN EFFECT (subtle, on hero)
   ══════════════════════════════════════ */
function initRain() {
  const layer = document.getElementById('rainLayer');
  if (!layer) return;
  const COUNT = 40;
  for (let i = 0; i < COUNT; i++) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    const h = 30 + Math.random() * 60;
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.height = `${h}px`;
    drop.style.animationDuration = `${0.6 + Math.random() * 0.6}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;
    layer.appendChild(drop);
  }
  // Slowly show rain after 4s for ambiance
  setTimeout(() => {
    layer.style.opacity = '0.55';
  }, 4000);
}
/* ══════════════════════════════════════
   HIDDEN HEARTS
   ══════════════════════════════════════ */
function initHiddenHearts() {
  const layer = document.getElementById('hiddenHeartsLayer');
  const popup = document.getElementById('heartPopup');
  const popupText = document.getElementById('heartPopupText');
  const popupClose = document.getElementById('heartPopupClose');
  const COUNT = 20;
  const positions = [];
  for (let i = 0; i < COUNT; i++) {
    // Avoid clusters
    let x, y, tries = 0;
    do {
      x = 3 + Math.random() * 91;
      y = 5 + Math.random() * 88;
      tries++;
    } while (tries < 20 && positions.some(p => Math.abs(p[0]-x) < 7 && Math.abs(p[1]-y) < 7));
    positions.push([x, y]);
    const h = document.createElement('div');
    h.className = 'hidden-heart';
    h.textContent = '❤';
    h.style.left = `${x}%`;
    h.style.top = `${y}%`;
    h.style.animationDelay = `${Math.random() * 3}s`;
    h.style.animationDuration = `${2.5 + Math.random() * 2}s`;
    h.setAttribute('aria-label', 'Hidden heart — click for a message');
    h.setAttribute('tabindex', '0');
    const msg = HEART_MESSAGES[i % HEART_MESSAGES.length];
    const showPopup = () => {
      popupText.textContent = msg;
      popup.classList.add('active');
      h.style.opacity = '0.05';
      setTimeout(() => { h.style.opacity = ''; }, 3000);
    };
    h.addEventListener('click', showPopup);
    h.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') showPopup(); });
    layer.appendChild(h);
  }
  const closePopup = () => popup.classList.remove('active');
  popupClose.addEventListener('click', closePopup);
  popup.addEventListener('click', e => { if (e.target === popup) closePopup(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });
}
/* ══════════════════════════════════════
   PASSWORD GATE
   ══════════════════════════════════════ */
function initPasswordGate() {
  const gateOverlay = document.getElementById('gateOverlay');
  const gateDigits = document.getElementById('gateDigits');
  const gateError = document.getElementById('gateError');
  const gateUnlockBtn = document.getElementById('gateUnlockBtn');
  const inputs = Array.from(document.querySelectorAll('.gate-digit'));
  const correctPassword = "28062024";
  if (!gateOverlay) return;
  // Auto-focus next input and handle typing
  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const val = e.target.value;
      // Allow only numbers
      if (val && !/^[0-9]$/.test(val)) {
        input.value = '';
        return;
      }
      if (val.length === 1) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
      checkAndVerify();
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (!input.value && index > 0) {
          inputs[index - 1].value = '';
          inputs[index - 1].focus();
        } else {
          input.value = '';
        }
        e.preventDefault();
        checkAndVerify();
      }
    });
    // Paste handler for convenience
    input.addEventListener('paste', (e) => {
      const pasteData = (e.clipboardData || window.clipboardData).getData('text').trim();
      if (/^\d{8}$/.test(pasteData)) {
        pasteData.split('').forEach((char, i) => {
          if (inputs[i]) inputs[i].value = char;
        });
        checkAndVerify();
      }
      e.preventDefault();
    });
  });
  function checkAndVerify() {
    const entered = inputs.map(input => input.value).join('');
    if (entered.length === 8) {
      if (entered === correctPassword) {
        handleSuccess();
      } else {
        handleFailure();
      }
    }
  }
  function handleSuccess() {
    gateDigits.classList.remove('error');
    gateDigits.classList.add('success');
    gateError.classList.remove('visible');
    
    // Play transition
    gateOverlay.classList.add('unlocking');
    document.body.classList.remove('locked');
    setTimeout(() => {
      gateOverlay.classList.add('gone');
    }, 1400);
  }
  function handleFailure() {
    gateDigits.classList.add('error');
    gateError.textContent = "That key doesn't unlock our story... Try again ❤️";
    gateError.classList.add('visible');
    
    // Vibrate / Shake
    setTimeout(() => {
      gateDigits.classList.remove('error');
      inputs.forEach(input => input.value = '');
      inputs[0].focus();
    }, 600);
  }
  gateUnlockBtn.addEventListener('click', () => {
    const entered = inputs.map(input => input.value).join('');
    if (entered === correctPassword) {
      handleSuccess();
    } else {
      handleFailure();
    }
  });
  // Focus on first box
  setTimeout(() => {
    if (inputs[0]) inputs[0].focus();
  }, 500);
}
/* ══════════════════════════════════════
   PHOTO GALLERY
   ══════════════════════════════════════ */
let currentPhotoIndex = 0;
const photoData = (typeof PHOTO_FILES !== 'undefined') ? PHOTO_FILES.map((file, i) => ({
  src: file,
  caption: PHOTO_CAPTIONS[i % PHOTO_CAPTIONS.length] || `Memory #${i+1} ❤️`
})) : [];
function initPhotoGallery() {
  const scrapbook = document.getElementById('polaroidScrapbook');
  const lightbox  = document.getElementById('photoLightbox');
  const lbClose   = document.getElementById('lbClose');
  const lbPrev    = document.getElementById('lbPrev');
  const lbNext    = document.getElementById('lbNext');
  const lbPhoto   = document.getElementById('lbPhoto');
  const lbCaption = document.getElementById('lbCaption');
  const lbCounter = document.getElementById('lbCounter');
  const lbLabel   = document.getElementById('lbPhotoLabel');
  photoData.forEach((photo, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'polaroid fade-in-up';
    wrap.style.transform = `rotate(${POLAROID_ROTATIONS[i % POLAROID_ROTATIONS.length]}deg)`;
    wrap.style.transitionDelay = `${(i % 8) * 0.08}s`;
    const photoDiv = document.createElement('div');
    photoDiv.className = 'polaroid-photo';
    // Image loaded directly
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = `Memory ${i+1}`;
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
    photoDiv.append(img);
    // Caption
    const cap = document.createElement('div');
    cap.className = 'polaroid-caption';
    cap.textContent = photo.caption;
    // Open lightbox on click
    photoDiv.addEventListener('click', () => {
      openLightbox(i);
    });
    wrap.append(photoDiv);
    scrapbook.appendChild(wrap);
  });
  function openLightbox(idx) {
    currentPhotoIndex = idx;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function updateLightbox() {
    const d = photoData[currentPhotoIndex];
    lbPhoto.innerHTML = '';
    if (d.src) {
      const img = document.createElement('img');
      img.src = d.src;
      img.alt = d.caption;
      img.style.cssText = 'max-width:80vw;max-height:70vh;object-fit:contain;display:block;';
      lbPhoto.appendChild(img);
    } else {
      lbPhoto.innerHTML = `
        <div class="lb-placeholder-inner">
          <span class="lb-ph-icon">📷</span>
          <span class="lb-ph-label">Memory #${currentPhotoIndex+1}</span>
        </div>`;
    }
    lbCaption.textContent = d.caption;
    lbCounter.textContent = `${currentPhotoIndex+1} / ${photoData.length}`;
  }
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  lbPrev.addEventListener('click', () => { currentPhotoIndex = (currentPhotoIndex - 1 + photoData.length) % photoData.length; updateLightbox(); });
  lbNext.addEventListener('click', () => { currentPhotoIndex = (currentPhotoIndex + 1) % photoData.length; updateLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') { currentPhotoIndex = (currentPhotoIndex - 1 + photoData.length) % photoData.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { currentPhotoIndex = (currentPhotoIndex + 1) % photoData.length; updateLightbox(); }
    if (e.key === 'Escape') closeLightbox();
  });
}
/* ══════════════════════════════════════
   VIDEO GALLERY
   ══════════════════════════════════════ */
const videoData = (typeof VIDEO_FILES !== 'undefined') ? VIDEO_FILES.map((file, i) => ({
  src: file,
  title: VIDEO_TITLES[i % VIDEO_TITLES.length] || `Clip #${i+1}`
})) : [];
function initVideoGallery() {
  const grid    = document.getElementById('videoGrid');
  const modal   = document.getElementById('videoModal');
  const vmClose = document.getElementById('vmClose');
  const vmTitle = document.getElementById('vmTitle');
  const vmVideo = document.getElementById('vmVideo');
  const vmScreen= document.getElementById('vmScreen');
  videoData.forEach((video, i) => {
    const card = document.createElement('div');
    card.className = 'video-card fade-in-up';
    card.style.transitionDelay = `${(i % 4) * 0.12}s`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Play video: ${video.title}`);
    const bg = document.createElement('div');
    bg.className = 'video-card-bg';
    // Subtle variation in background gradient
    const hue = 330 + (i * 15) % 80;
    bg.style.background = `linear-gradient(135deg, hsl(${hue},45%,18%) 0%, hsl(${90+(i*20)%60},30%,25%) 100%)`;
    const content = document.createElement('div');
    content.className = 'video-card-content';
    content.innerHTML = `
      <div class="video-play-ring">
        <div class="video-play-icon">▶</div>
      </div>
    `;
    card.append(bg, content);
    const openModal = () => {
      vmTitle.textContent = video.title;
      if (video.src) {
        vmVideo.src = video.src;
        vmVideo.style.display = 'block';
        vmScreen.querySelector('.vm-placeholder').style.display = 'none';
        vmVideo.play().catch(() => {});
      } else {
        vmVideo.style.display = 'none';
        vmVideo.src = '';
        const ph = vmScreen.querySelector('.vm-placeholder');
        if (ph) ph.style.display = 'flex';
      }
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(); });
    grid.appendChild(card);
  });
  vmClose.addEventListener('click', closeVideoModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeVideoModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeVideoModal(); });
  function closeVideoModal() {
    modal.classList.remove('active');
    vmVideo.pause();
    vmVideo.src = '';
    document.body.style.overflow = '';
  }
}
/* ══════════════════════════════════════
   MEMORY WALL / CORKBOARD
   ══════════════════════════════════════ */
function initMemoryWall() {
  const board = document.getElementById('corkboard');
  const today = new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
  MEMORY_TEXTS.forEach((text, i) => {
    const note = document.createElement('div');
    note.className = 'memory-note fade-in-up';
    note.style.transform = `rotate(${NOTE_ROTATIONS[i]}deg)`;
    note.style.transitionDelay = `${(i % 5) * 0.12}s`;
    const lines = document.createElement('div');
    lines.className = 'note-lines';
    lines.setAttribute('aria-hidden', 'true');
    const textarea = document.createElement('textarea');
    textarea.className = 'note-text';
    textarea.value = text;
    textarea.rows = 4;
    textarea.setAttribute('aria-label', `Memory note ${i+1} — click to edit`);
    const dateDiv = document.createElement('div');
    dateDiv.className = 'note-date';
    dateDiv.textContent = today;
    note.append(lines, textarea, dateDiv);
    board.appendChild(note);
    // Undo rotation on hover (handled by CSS), restore on mouse leave
    note.addEventListener('mouseenter', () => { note.style.zIndex = '10'; });
    note.addEventListener('mouseleave', () => { note.style.zIndex = ''; });
  });
}
/* ══════════════════════════════════════
   COUNTDOWN
   ══════════════════════════════════════ */
let countdownInterval = null;
const ANNIVERSARY_DATE = new Date('2024-06-28T00:00:00');
function initCountdown() {
  const input  = document.getElementById('countdownDateInput');
  const setBtn = document.getElementById('setCountdownBtn');
  const daysTgt= document.getElementById('daysTogether');
  // Default: next anniversary
  const nextAnniv = new Date(ANNIVERSARY_DATE);
  const now = new Date();
  nextAnniv.setFullYear(now.getFullYear());
  if (nextAnniv <= now) nextAnniv.setFullYear(now.getFullYear() + 1);
  // Set default input value
  const localIso = new Date(nextAnniv.getTime() - nextAnniv.getTimezoneOffset() * 60000)
    .toISOString().slice(0, 16);
  input.value = localIso;
  startCountdown(nextAnniv);
  updateDaysTogether(daysTgt);
  setBtn.addEventListener('click', () => {
    const val = input.value;
    if (!val) return;
    const target = new Date(val);
    if (isNaN(target.getTime())) return;
    if (countdownInterval) clearInterval(countdownInterval);
    startCountdown(target);
  });
}
function startCountdown(target) {
  const cdDays  = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMins  = document.getElementById('cdMinutes');
  const cdSecs  = document.getElementById('cdSeconds');
  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      cdDays.textContent = '000';
      cdHours.textContent = '00';
      cdMins.textContent = '00';
      cdSecs.textContent = '00';
      clearInterval(countdownInterval);
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    cdDays.textContent  = String(d).padStart(3, '0');
    cdHours.textContent = String(h).padStart(2, '0');
    cdMins.textContent  = String(m).padStart(2, '0');
    cdSecs.textContent  = String(s).padStart(2, '0');
  }
  tick();
  countdownInterval = setInterval(tick, 1000);
}
function updateDaysTogether(el) {
  const diff = new Date() - ANNIVERSARY_DATE;
  const days = Math.floor(diff / 86400000);
  el.textContent = days > 0 ? days : 0;
}
/* ══════════════════════════════════════
   SURPRISE / FLOWER BURST
   ══════════════════════════════════════ */
function initSurprise() {
  const btn    = document.getElementById('surpriseBtn');
  const reveal = document.getElementById('surpriseReveal');
  const petals = document.getElementById('petalsContainer');
  btn.addEventListener('click', () => {
    reveal.classList.add('active');
    burstFlowers();
    btn.style.display = 'none';
    // Extra petals cascade
    const container = document.getElementById('petalsContainer');
    const CHARS = ['🌸','🌺','🌼','✿','✾','❀','🍃','🌿','💮','🌷'];
    for (let i = 0; i < 60; i++) {
      setTimeout(() => {
        const p = document.createElement('div');
        p.className = 'burst-petal';
        p.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
        p.style.left = `${Math.random() * 100}%`;
        const dur = 3 + Math.random() * 3;
        p.style.animationDuration = `${dur}s`;
        p.style.fontSize = `${18 + Math.random() * 20}px`;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), (dur + 0.5) * 1000);
      }, i * 80);
    }
  });
}
function burstFlowers() {
  // Already handled inside initSurprise
}
/* ══════════════════════════════════════
   SCROLL ANIMATIONS (Intersection Observer)
   ══════════════════════════════════════ */
function initScrollAnimations() {
  const items = document.querySelectorAll('.fade-in-up');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => observer.observe(el));
}
/* ══════════════════════════════════════
   SMOOTH SCROLL
   ══════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
/* ══════════════════════════════════════
   LAZY OBSERVER FOR SECTIONS
   ══════════════════════════════════════ */
// Mark sections as they come into view (for potential future effects)
const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.setAttribute('data-visible', 'true');
  });
}, { threshold: 0.05 });
document.querySelectorAll('section').forEach(s => sectionObs.observe(s));
/* ══════════════════════════════════════
   KSRTC MEMORY TICKETS
   ══════════════════════════════════════ */
const TICKET_DATA = [
  { from: 'Home', to: 'Sulthan Bathery', date: 'June 28, 2024', memory: 'Our first unforgettable journey. The bus that changed everything.' },
  { from: 'Sulthan Bathery', to: "St. Mary's College", date: 'Every Morning', memory: 'Another ordinary day that became extraordinary because of you.' },
  { from: 'KSRTC Stand', to: 'Sulthan Bathery', date: 'Early Mornings', memory: 'Waiting for the same bus, not knowing we were waiting for each other.' },
  { from: 'College Gate', to: 'Bus Stand', date: 'Every Evening', memory: 'The walk back together was the best part of every college day.' },
  { from: 'Sulthan Bathery', to: 'Home', date: 'Weekends', memory: 'Even the journey home felt like an adventure when you were there.' },
  { from: 'Anywhere', to: 'You', date: 'Always', memory: 'Every journey I ever took led me to you. That was always the destination.' }
];
function initKSRTCTickets() {
  const grid = document.getElementById('ticketsGrid');
  if (!grid) return;
  TICKET_DATA.forEach((t, i) => {
    const ticket = document.createElement('div');
    ticket.className = 'ksrtc-ticket fade-in-up';
    ticket.style.transitionDelay = `${(i % 3) * 0.12}s`;
    ticket.innerHTML = `
      <div class="ticket-perforations">
        <div class="ticket-perf"></div>
        <div class="ticket-perf"></div>
        <div class="ticket-perf"></div>
      </div>
      <div class="ticket-header">
        <span class="ticket-org">KSRTC</span>
        <span class="ticket-bus-icon">🚌</span>
        <span class="ticket-org">KERALA</span>
      </div>
      <div class="ticket-body">
        <div class="ticket-from">
          <span class="ticket-field-label">FROM</span>
          <div class="ticket-field-value" contenteditable="true" aria-label="From location">${t.from}</div>
        </div>
        <div class="ticket-arrow">➜</div>
        <div class="ticket-to">
          <span class="ticket-field-label">TO</span>
          <div class="ticket-field-value" contenteditable="true" aria-label="To location">${t.to}</div>
        </div>
      </div>
      <div class="ticket-date-row">
        <span class="ticket-field-label">DATE:</span>
        <div class="ticket-date-value" contenteditable="true" aria-label="Date">${t.date}</div>
      </div>
      <div class="ticket-memory-row">
        <div class="ticket-memory-label">MEMORY:</div>
        <textarea class="ticket-memory-text" rows="2" aria-label="Memory">${t.memory}</textarea>
      </div>
      <div class="ticket-footer">
        <span style="font-family:monospace;font-size:0.6rem;color:var(--brown);opacity:0.5;">Ticket #${String(i+1).padStart(3,'0')}</span>
        <span style="font-size:0.7rem;color:var(--burgundy);">❤️ Valid Forever</span>
      </div>
    `;
    grid.appendChild(ticket);
  });
}
/* ══════════════════════════════════════
   JOURNEY MAP — Pin Click Memories
   ══════════════════════════════════════ */
const MAP_MEMORIES = {
  bathery:    { title: '📍 Sulthan Bathery', text: 'Where our journey begins. Every road in Bathery holds a sweet memory of us starting our trip.' },
  nadukani:   { title: '⛰️ Nadukani Ghats', text: 'Winding roads and misty hills of Nadukani. Sitting by the window watching the breathtaking valley with you.' },
  vazhikadavu:{ title: '🌿 Vazhikadavu', text: 'Crossing through the lush forests of Vazhikadavu. Nature witnessing our beautiful journey together.' },
  edakkara:   { title: '📍 Edakkara', text: 'Another milestone on our route. Every stop becomes unforgettable when we are traveling together.' },
  pandikkad:  { title: '❤️ Pandikkad', text: 'The destination reached, but with you, every journey is just the beginning of another beautiful memory.' }
};
function initJourneyMap() {
  const modal    = document.getElementById('mapMemoryModal');
  const closeBtn = document.getElementById('mapMemoryClose');
  const saveBtn  = document.getElementById('mapMemorySaveBtn');
  const titleEl  = document.getElementById('mapMemoryTitle');
  const textEl   = document.getElementById('mapMemoryText');
  if (!modal) return;
  let currentNode = null;
  document.querySelectorAll('.map-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      const node = pin.getAttribute('data-node');
      currentNode = node;
      const mem = MAP_MEMORIES[node] || { title: 'Memory', text: '' };
      titleEl.textContent = mem.title;
      textEl.value = localStorage.getItem('map_memory_' + node) || mem.text;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      textEl.focus();
    });
  });
  closeBtn.addEventListener('click', () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); });
  modal.addEventListener('click', e => { if (e.target === modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); } });
  saveBtn.addEventListener('click', () => {
    if (currentNode) {
      localStorage.setItem('map_memory_' + currentNode, textEl.value);
      MAP_MEMORIES[currentNode].text = textEl.value;
    }
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  });
  // Animate the SVG bus along path on scroll
  const section   = document.getElementById('journey-map');
  const busSvg    = document.getElementById('mapScrollingBus');
  const path      = document.getElementById('scrollRoutePath');
  if (!section || !busSvg || !path) return;
  const pathLength = path.getTotalLength ? path.getTotalLength() : 0;
  window.addEventListener('scroll', () => {
    if (!pathLength) return;
    const rect = section.getBoundingClientRect();
    const sectionH = section.offsetHeight;
    const progress = Math.max(0, Math.min(1, (-rect.top) / (sectionH - window.innerHeight)));
    const pt = path.getPointAtLength(progress * pathLength);
    busSvg.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
  }, { passive: true });
}
/* ══════════════════════════════════════
   HIDDEN KSRTC BUS ICONS
   ══════════════════════════════════════ */
const KSRTC_MESSAGES = [
  '❤️ Every journey became special because you were there.',
  '❤️ Sulthan Bathery will always feel like home.',
  '❤️ Some buses take us to places. You took me home.',
  '❤️ Every bus stop reminds me of you.',
  '❤️ The best seat was always beside you.',
  '❤️ Every ticket carried another beautiful memory.',
  '❤️ Our story was written one journey at a time.',
  '❤️ The bus route never mattered. Only you did.',
  '❤️ I would take that route a thousand more times just to be with you.',
  '❤️ The sound of the bus still brings me back to you.',
  '❤️ We made ordinary commutes into something extraordinary.',
  '❤️ KSRTC gave us the roads. We gave each other a reason to travel them.',
  '❤️ Every morning journey was worth it when you were waiting.',
  '❤️ The wheels kept turning and so did my heart — toward you.',
  '❤️ Some destinations you never look for. They find you on the journey.'
];
function initHiddenKSRTCIcons() {
  const popup    = document.getElementById('ksrtcPopup');
  const popupTxt = document.getElementById('ksrtcPopupText');
  const closeBtn = document.getElementById('ksrtcPopupClose');
  if (!popup) return;
  let autoClose;
  document.addEventListener('click', e => {
    const icon = e.target.closest('.hidden-ksrtc-icon');
    if (!icon) return;
    const idx = parseInt(icon.getAttribute('data-index'), 10) || 0;
    const msg = KSRTC_MESSAGES[(idx - 1) % KSRTC_MESSAGES.length];
    popupTxt.textContent = msg;
    popup.classList.add('visible');
    popup.setAttribute('aria-hidden', 'false');
    clearTimeout(autoClose);
    autoClose = setTimeout(() => popup.classList.remove('visible'), 6000);
  });
  closeBtn.addEventListener('click', () => { popup.classList.remove('visible'); clearTimeout(autoClose); });
}
/* ══════════════════════════════════════
   COLLEGE PHOTO & VIDEO UPLOADS
   ══════════════════════════════════════ */
function initCollegeUploads() {
  // Photos
  for (let i = 1; i <= 8; i++) {
    const input = document.getElementById(`collegePhotoInput${i}`);
    const img   = document.getElementById(`collegePhotoImg${i}`);
    if (!input || !img) continue;
    input.addEventListener('change', () => {
      const file = input.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      img.src = url;
      img.style.display = 'block';
      const ph = img.previousElementSibling;
      if (ph && ph.classList.contains('college-photo-placeholder')) ph.style.display = 'none';
    });
  }
  // Videos
  for (let i = 1; i <= 4; i++) {
    const input  = document.getElementById(`collegeVideoInput${i}`);
    const video  = document.getElementById(`collegeVideoPlayer${i}`);
    if (!input || !video) continue;
    input.addEventListener('change', () => {
      const file = input.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      video.src = url;
      video.style.display = 'block';
      const ph = video.nextElementSibling;
      if (ph && ph.classList.contains('college-video-placeholder')) ph.style.display = 'none';
    });
  }
}
/* ══════════════════════════════════════
   COLLEGE TEXT LINE REVEAL
   ══════════════════════════════════════ */
function initCollegeTextReveal() {
  const lines = document.querySelectorAll('.college-text-line');
  if (!lines.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 140);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  lines.forEach(l => obs.observe(l));
}
/* ══════════════════════════════════════
   FINAL JOURNEY — Typewriter + Petals
   ══════════════════════════════════════ */
const FJ_LINES = [
  { text: 'June 28, 2024', cls: 'fj-date' },
  { text: 'The day everything changed.' },
  { text: '' },
  { text: 'Through the winding roads from Sulthan Bathery...' },
  { text: 'Across Nadukani, Vazhikadavu & Edakkara...' },
  { text: 'All the way to Pandikkad...' },
  { text: '' },
  { text: 'Every journey became a memory.' },
  { text: 'Every memory became a reason to love you even more.' },
  { text: '' },
  { text: 'The best destination was never a place.', cls: 'fj-big' },
  { text: 'It was always you.', cls: 'fj-big' },
  { text: '' },
  { text: 'Happy 2nd Anniversary ❤️', cls: 'fj-final' }
];
function initFinalJourney() {
  const section  = document.getElementById('final-journey');
  const msgWrap  = document.getElementById('fjMessage');
  const petalsEl = document.getElementById('fjPetals');
  if (!section || !msgWrap) return;
  let revealed = false;
  // Build lines (hidden)
  FJ_LINES.forEach(line => {
    const span = document.createElement('span');
    span.className = 'fj-line' + (line.cls ? ' ' + line.cls : '');
    span.textContent = line.text || '\u00A0'; // non-breaking space for empty lines
    msgWrap.appendChild(span);
  });
  // Reveal on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !revealed) {
        revealed = true;
        obs.unobserve(section);
        revealLines();
      }
    });
  }, { threshold: 0.2 });
  obs.observe(section);
  function revealLines() {
    const lines = msgWrap.querySelectorAll('.fj-line');
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add('visible');
        if (i === lines.length - 1) {
          // All done — burst petals
          setTimeout(() => burstFjPetals(), 600);
        }
      }, 600 + i * 550);
    });
  }
  function burstFjPetals() {
    if (!petalsEl) return;
    const PETALS = ['🌸','🌺','🌼','❤️','💛','🌷','✿','❀'];
    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'fj-petal';
      p.textContent = PETALS[Math.floor(Math.random() * PETALS.length)];
      p.style.left = `${Math.random() * 100}%`;
      p.style.top  = `${-20 - Math.random() * 40}px`;
      p.style.animationDuration = `${4 + Math.random() * 5}s`;
      p.style.animationDelay    = `${Math.random() * 3}s`;
      p.style.fontSize = `${12 + Math.random() * 16}px`;
      petalsEl.appendChild(p);
      p.addEventListener('animationend', () => p.remove());
    }
  }
}
