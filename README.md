# Skybound Known-Working v7

This recovery build is based on the exact self-contained Skybound HTML bundle that previously rendered successfully on the user's GitHub Pages site.

## Upload
Delete the old repository files and upload the contents of this folder. Then open `reset.html` once. It clears old service workers/browser caches and redirects to the game with a unique cache-busting URL.

No CDN, npm, external model loader, or build step is required.
