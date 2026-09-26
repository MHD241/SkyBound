# Changelog

## v5 Safari-safe runtime
- Removed cross-origin JavaScript module imports from core startup.
- Three.js core now loads as a classic script with a second CDN fallback.
- GLTFLoader is lazy-loaded only after the base 3D scene can run.
- Replaced unsupported fallback aircraft CapsuleGeometry for older Three.js compatibility.
- Added visible startup error state.
- Added automatic local `fallback.html` using the last known bundled renderer if the new runtime cannot start.
- Versioned app/CSS filenames to bypass stale GitHub/browser caches.
