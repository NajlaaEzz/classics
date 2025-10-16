# ECOLUD Puzzle App

ECOLUD is a browser-based educational puzzle experience that celebrates ecology through realistic photography, bilingual copy, and a playful interface for children.

## Project structure

- `index.html` – main application shell
- `styles.css` – styling for the UI
- `script.js` – puzzle game logic, localization, audio, and game state management
- `assets/` – static assets used by the experience

## How to run the app locally

The project is 100% static, so you only need a web browser. There are two easy ways to preview it:

### Option 1: Open the HTML file directly

1. Download or clone the repository.
2. Double-click `index.html` (or open it via your browser's **File → Open** menu).

> **Tip:** Some browsers (especially Chrome) restrict audio playback or certain APIs when a page is opened with the `file://` protocol. If you notice missing sounds or console warnings, use the local server approach below.

### Option 2: Use a lightweight local server

If you prefer a live-reload style workflow or encounter browser restrictions, you can run a tiny server from the project folder:

```bash
# Using Python 3's built-in server
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser and open `index.html`.

## Troubleshooting

- **I see a blank screen or missing images:** Check your internet connection—puzzle photos are loaded from Unsplash.
- **No sound plays when I click buttons:** Browsers require a user interaction before enabling audio. Click anywhere on the page first, or use the "Play Music" button to start the soundtrack.
- **Language menu looks empty:** Wait a second; the script populates the language options after the page loads. If it stays empty, open the browser console for errors.

## License

This project bundles third-party photography via Unsplash. Please review Unsplash's license if you redistribute the images.
