# Skybound — Real Assets Edition

This build is intentionally different from the earlier procedural versions. It loads **real GLB aircraft models** and **real airport asset models** instead of pretending boxes are terminals/aircraft.

## Deploy to GitHub Pages
Upload the contents of this folder to the root of your GitHub Pages repository. No build step, npm, Blender or terminal commands are required.

The game loads Three.js and the GLB assets over HTTPS, so the published page needs an internet connection.

## Controls
- Arrow Left/Right — bank
- Arrow Up/Down — pitch
- A / D — rudder
- W / S — throttle
- Drag — orbit camera
- Mouse wheel — zoom
- Double-click — reset camera

## Asset licensing
See `ASSET_LICENSES.md`.


## v4 blank-screen fix
This build removes the old service worker, uses versioned game files, and has multiple renderer fallbacks. If upgrading from an older build, replace every file in the repository rather than only index.html.
