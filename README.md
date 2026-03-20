# Pwani University miniJumia
A lightweight marketplace demo for Pwani University business students to publish real products.

## 📦 What this repo contains
- `index.html`: single-page web app
  - Landing section describing purpose
  - Product submission form (name, description, price, image URL)
  - Product list rendered live from browser local storage
- No preloaded products at first launch (per your request)
- The user posts real products manually

## 🚀 How to run locally
1. Open `index.html` in your browser.
2. (Recommended) Install VS Code Live Server extension and click `Go Live`, then visit `http://127.0.0.1:5500/index.html`.

## 🧑‍💼 User workflow
- Start with an empty marketplace.
- Add product details and submit.
- Product appears instantly and is persisted with `localStorage`.
- The "Clear all listings" button resets the local product cache.

## 🛠️ Customization ideas
- Add a backend (Node/Express, Django, Flask) with a database for chain-wide persistence.
- Add login/auth so each student has their own seller account.
- Add image upload instead of URL.
- Add category filters and search.

## ⚙️ Notes
- This is a vanilla HTML/CSS/JS page, requiring no build or npm dependencies.
- Works in any modern browser.
