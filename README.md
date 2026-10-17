# FZ Auto Garage Service — Website

Single-page website for FZ Auto Garage Service (Pusat Servis Kereta), Taman Lestari Perdana, Selangor.

## Files
- `index.html` — all the page content (text + sections)
- `styles.css` — colours and layout (black / red / white racing theme)
- `script.js` — mobile menu + footer year
- `images/` — put your photos here

## How to run locally
From this folder, run:

```
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

## How to add your real photos
Each photo placeholder on the page has a striped box labelled with what goes there
(e.g. "Gambar: Servis am"). To replace one with a real photo:

1. Put your photo file into the `images/` folder (e.g. `images/servis-am.jpeg`).
2. In `index.html`, find the matching `<div class="photo-slot" data-slot="...">...</div>` block.
3. Replace the whole `<div>` with an image tag, for example:

   ```html
   <img class="photo" src="images/servis-am.jpeg" alt="Servis am kereta" />
   ```

Keep photos landscape (wide) for service cards, square for shop products.
Tip: resize photos to about 1200px wide so the page loads fast.

## Contact / WhatsApp numbers used
- Rohaida — 019-342 6560 → `wa.me/60193426560`
- Faizal — 018-266 9463 → `wa.me/60182669463`

To change a pre-filled WhatsApp message, edit the `?text=...` part of the links.

## Deploy free on GitHub Pages
1. Create a new GitHub repository (e.g. `fz-auto-garage`).
2. Upload these files.
3. In the repo: **Settings → Pages → Source: main branch / root → Save**.
4. Your site goes live at `https://<username>.github.io/fz-auto-garage/`.
