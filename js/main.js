const START_DATE = new Date(2026, 4, 11); // 11 de maio de 2026

let musicOn = false;

/* ---- PETALS ---- */
function initPetals(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let raf;
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize(); window.addEventListener('resize', resize);
  const COLORS = ['#FFB6C1','#FF8FAB','#FFAB91','#FFC0CB','#FFD6E0','#FFE4EC','#FFD54F'];
  function randomPetal(full) {
    return { x: Math.random()*canvas.width, y: full ? Math.random()*canvas.height : -30, r: Math.random()*14+7, rot: Math.random()*Math.PI*2, rotSpeed: (Math.random()-.5)*.04, speedY: Math.random()*.8+.4, speedX: (Math.random()-.5)*.6, wave: Math.random()*Math.PI*2, color: COLORS[Math.floor(Math.random()*COLORS.length)], opacity: Math.random()*.4+.45 };
  }
  const petals = Array.from({length:42}, ()=>randomPetal(true));
  function drawPetal(p) { ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.globalAlpha=p.opacity; ctx.fillStyle=p.color; ctx.beginPath(); ctx.ellipse(0,0,p.r,p.r*.55,0,0,Math.PI*2); ctx.fill(); ctx.restore(); }
  function tick() { ctx.clearRect(0,0,canvas.width,canvas.height); petals.forEach(p=>{ p.y+=p.speedY; p.x+=p.speedX+Math.sin(p.wave)*.4; p.wave+=.025; p.rot+=p.rotSpeed; if(p.y>canvas.height+40) Object.assign(p,randomPetal(false)); drawPetal(p); }); raf=requestAnimationFrame(tick); }
  tick();
  return () => cancelAnimationFrame(raf);
}

const stopIntroPetals = initPetals('petal-canvas');

/* ---- OPEN BUTTON ---- */
document.getElementById('openBtn').addEventListener('click', function() {
  const audio = document.getElementById('audio');
  audio.muted = false;
  audio.volume = 1;
  audio.play();
  musicOn = true;

  const intro = document.getElementById('intro-screen');
  intro.classList.add('fade-out');

  setTimeout(() => {
    intro.style.display = 'none';
    if (stopIntroPetals) stopIntroPetals();
    const main = document.getElementById('main-content');
    main.classList.add('visible');
    initHeroCanvas();
    initScrollReveal();
    startCountdown();
  }, 800);
});

/* ---- HERO CANVAS ---- */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; }
  resize(); window.addEventListener('resize', resize);
  function heart(ctx,x,y,size) { ctx.save(); ctx.translate(x,y); const s=size/30; ctx.beginPath(); ctx.moveTo(0,-8*s); ctx.bezierCurveTo(0,-8*s,-8*s,-16*s,-16*s,-8*s); ctx.bezierCurveTo(-16*s,0,-8*s,8*s,0,16*s); ctx.bezierCurveTo(8*s,8*s,16*s,0,16*s,-8*s); ctx.bezierCurveTo(16*s,-16*s,0,-8*s,0,-8*s); ctx.closePath(); ctx.fill(); ctx.restore(); }
  const particles = Array.from({length:28}, ()=>({ x:Math.random()*1200, y:Math.random()*800, size:Math.random()*16+6, opacity:Math.random()*.2+.08, speed:Math.random()*.5+.2, sway:Math.random()*Math.PI*2 }));
  function tick() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p=>{ ctx.globalAlpha=p.opacity; ctx.fillStyle='#FFD54F'; heart(ctx,p.x,p.y,p.size); p.y-=p.speed; p.x+=Math.sin(p.sway)*.4; p.sway+=.018; if(p.y<-40){p.y=canvas.height+20;p.x=Math.random()*canvas.width;} }); requestAnimationFrame(tick); }
  tick();
}

/* ---- SCROLL REVEAL ---- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reason-card, .gallery-item');
  const obs = new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);} }); },{threshold:.15});
  els.forEach(el=>obs.observe(el));
}

/* ---- COUNTDOWN ---- */
function startCountdown() {
  function update() {
    const diff = new Date() - START_DATE;
    if (diff < 0) { ['cnt-days','cnt-hours','cnt-minutes'].forEach(id=>document.getElementById(id).textContent='0'); return; }
    document.getElementById('cnt-days').textContent    = Math.floor(diff/86400000);
    document.getElementById('cnt-hours').textContent   = Math.floor((diff%86400000)/3600000);
    document.getElementById('cnt-minutes').textContent = Math.floor((diff%3600000)/60000);
  }
  update(); setInterval(update, 30000);
}

/* ---- MUSIC TOGGLE ---- */
function toggleMusic() {
  const audio = document.getElementById('audio');
  if (musicOn) {
    audio.pause();
    document.getElementById('music-icon').style.animationPlayState = 'paused';
  } else {
    audio.play();
    document.getElementById('music-icon').style.animationPlayState = 'running';
  }
  musicOn = !musicOn;
}
