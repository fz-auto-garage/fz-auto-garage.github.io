// FZ Auto Garage — small interactions

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Close mobile nav after clicking a link
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Language switch — Bahasa Malaysia default, English optional
const langSwitch = document.getElementById('langSwitch');

function setLang(lang) {
  const en = lang === 'en';
  document.body.classList.toggle('show-en', en);
  document.documentElement.lang = en ? 'en' : 'ms';
  langSwitch.querySelectorAll('button').forEach((b) => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  try { localStorage.setItem('fz-lang', lang); } catch (e) {}
}

langSwitch.querySelectorAll('button').forEach((b) => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
});

// Restore saved choice (default BM)
let saved = 'bm';
try { saved = localStorage.getItem('fz-lang') || 'bm'; } catch (e) {}
setLang(saved);

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
