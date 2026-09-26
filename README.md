# Skybound — GitHub Pages build

This is the upgraded realism build of Skybound. It is static and can be hosted directly on GitHub Pages.

## Deploy
1. Upload **the contents of this folder** to the root of your GitHub repository.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Choose the branch containing these files and `/ (root)`.
4. Open the Pages URL after deployment.

No npm install, server, database, or build command is required.

## What changed
- heavier, speed-sensitive flight controls and aircraft inertia
- simulated turbine spool rather than instant engine response
- flap/gear/turn drag and bank-angle stall penalty
- tighter stable-landing envelope
- additional runway threshold, aiming, touchdown and rubber markings
- approach lighting
- service equipment, apron lines and additional hangar massing
- less arcade-like NPC movement
- refined haze, exposure and ready-screen camera
- external presentation CSS for easier future editing

See `docs/REALISM.md` for design notes and remaining differences from a full simulator.
