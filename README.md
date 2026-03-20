# Pwani University miniJumia
A lightweight marketplace demo for Pwani University business students to publish real products.

## 📦 What this repo contains
- `index.html`: single-page web app
  - Landing section describing purpose
  - Product submission form (name, description, price, images from camera/gallery)
  - Product list rendered from server
- Server (`server.js`) with Express for shared persistence
- No preloaded products at first launch
- The user posts real products manually

## 🚀 How to run locally
1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Open `http://localhost:3000` in your browser.

## 🧑‍💼 User workflow
- Start with an empty marketplace.
- Add product details and select images from gallery or camera.
- Product appears instantly and is persisted on the server.
- Visible to all users accessing the server.
- The "Clear all listings" button resets the server product cache.

## 🛠️ Customization ideas
- Add login/auth so each student has their own seller account.
- Add category filters and search.
- Use a database instead of in-memory storage.

## ⚙️ Notes
- This is a Node.js/Express app with vanilla HTML/CSS/JS frontend.
- Works in any modern browser.
- Images are stored as base64 data URLs.
