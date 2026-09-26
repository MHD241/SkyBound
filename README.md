# Skybound Safari-Safe v5

GitHub Pages-ready build. Upload the **contents** of this folder to the repository root.

## Startup design
- Uses classic Three.js loading rather than cross-origin ES module imports, for Safari compatibility.
- The base airport and fallback aircraft do not depend on GLB assets.
- High-detail GLB assets load only after the scene is visible.
- If the new renderer does not produce a WebGL canvas within 3.5 seconds, the page automatically opens `fallback.html`, the known bundled Skybound renderer.

No npm/build step is required.
