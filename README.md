# Maligayang Kaarawan, Ma 🌸

A 5-page pink birthday scrapbook website, built to send to your friend's mother.

## 1. Add your photos

Drop your `.jpg` files into `assets/images/` using these exact filenames (or edit the `src=""` in the HTML to match your own filenames):

| Page | Filenames expected |
|---|---|
| Tsapter 1 (page2.html) | `memory1.jpg`, `memory2.jpg`, `memory3.jpg` |
| Tsapter 3 (page4.html) | `photo1.jpg` through `photo6.jpg` |

Until you add a photo, that spot shows a soft pink placeholder — nothing breaks.

## 2. Add your music

Drop your `.mp3` files into `assets/audio/` using these exact filenames (or edit the `src=""` in the `<audio>` tag on each page):

| Page | Filename expected |
|---|---|
| index.html (cover) | `page1-cover.mp3` |
| page2.html (Tsapter 1) | `page2-memories.mp3` |
| page3.html (Tsapter 2) | `page3-liham.mp3` |
| page4.html (Tsapter 3) | `page4-larawan.mp3` |
| page5.html (Tsapter 4) | `page5-bati.mp3` |

**Important about autoplay:** browsers block audio with sound from autoplaying until the visitor interacts with the page at least once (this is a browser rule, not a bug). Each page has a small 🎵 button in the top-right corner — if a browser blocks the autoplay, it shows "tap for music" and plays as soon as she taps it. This is normal and works the same on every phone/browser.

## 3. Put it on GitHub Pages

```bash
git init
git add .
git commit -m "birthday website for Mama"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then in your GitHub repo: **Settings → Pages → Source → Deploy from branch → main → / (root) → Save**.

Your link will be:
`https://YOUR_USERNAME.github.io/YOUR_REPO/`

Send that link to your friend, and she can send it straight to her mom. 💕

## 4. Optional edits

- Change any text directly in the `.html` files (each page is plain, readable HTML).
- The color palette lives at the top of `style.css` under `:root` if you want to adjust the pink/gold tones.
