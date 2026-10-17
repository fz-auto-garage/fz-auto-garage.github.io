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

// ===== SHOP ITEMS =====
// To update an item later, just fill in nameBm / nameEn / model / price below.
// Leave a field as "" and the site shows a friendly placeholder instead.
const ITEMS = [
  { id: 1,  img: 'images/items/item-01.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 2,  img: 'images/items/item-02.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 3,  img: 'images/items/item-03.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 4,  img: 'images/items/item-04.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 5,  img: 'images/items/item-05.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 6,  img: 'images/items/item-06.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 7,  img: 'images/items/item-07.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 8,  img: 'images/items/item-08.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 9,  img: 'images/items/item-09.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 10, img: 'images/items/item-10.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 11, img: 'images/items/item-11.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 12, img: 'images/items/item-12.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 13, img: 'images/items/item-13.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 14, img: 'images/items/item-14.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 15, img: 'images/items/item-15.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 16, img: 'images/items/item-16.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
  { id: 17, img: 'images/items/item-17.jpeg', nameBm: '', nameEn: '', model: '', price: '' },
];

const WA_ITEM_NUMBER = '60182669463';

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function bilingual(bm, en) {
  return `<span class="lang-bm">${esc(bm)}</span><span class="lang-en">${esc(en)}</span>`;
}

function renderShop() {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  grid.innerHTML = ITEMS.map((it) => {
    const name = (it.nameBm || it.nameEn)
      ? bilingual(it.nameBm || it.nameEn, it.nameEn || it.nameBm)
      : bilingual('Alat Ganti Kereta', 'Car Spare Part');
    const model = it.model
      ? `<p class="muted">${esc(it.model)}</p>`
      : `<p class="muted">${bilingual('Model: tanya di WhatsApp', 'Model: ask on WhatsApp')}</p>`;
    const price = it.price
      ? `<p class="price">${esc(it.price)}</p>`
      : `<p class="price">${bilingual('Harga: tanya di WhatsApp', 'Price: ask on WhatsApp')}</p>`;
    const labelBm = it.nameBm || `Item ${it.id}`;
    const labelEn = it.nameEn || `Item ${it.id}`;
    const msg = `Hi FZ Auto Garage, saya berminat dengan Item ${it.id}` +
      (it.nameBm ? ` (${it.nameBm})` : '') + ` di website. Boleh bagi detail & harga?`;
    const wa = `https://wa.me/${WA_ITEM_NUMBER}?text=${encodeURIComponent(msg)}`;
    return `
      <article class="card product-card">
        <div class="item-photo">
          <img src="${it.img}" alt="${esc(labelEn)}" loading="lazy" />
          <span class="item-badge">#${it.id}</span>
        </div>
        <div class="card-body">
          <h3>${name}</h3>
          ${model}
          ${price}
          <a class="btn btn-wa btn-sm btn-block" href="${wa}" target="_blank" rel="noopener">${bilingual('Order via WhatsApp', 'Order via WhatsApp')}</a>
        </div>
      </article>`;
  }).join('');
}
renderShop();

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
