# Skybound Fleet & Gates v13.2 — Safari Boot Fix

Built from v13.1 with a Safari-safe boot path.

Changes:
- aircraft/gate globals initialized before the module bundle
- removed MutationObserver setup loop entirely
- rewrote ambiguous minified numeric ternaries into explicit Safari-safe expressions
- added an early on-screen startup error reporter and 5-second mount watchdog
- keeps v13 route, aircraft, gate and visual-speed changes

Upload `index.html` at the repository root.
