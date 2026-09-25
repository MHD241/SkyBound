# Skybound — 3D Flight Simulator

A standalone browser build of **Skybound**. No build step, package manager, external assets, or API keys are required.

## Run locally

Open `index.html` in a modern desktop browser. For the most reliable browser security behaviour, you can also serve the folder with any tiny static server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this ZIP to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`, then save.

`index.html` is self-contained, so GitHub Pages does not need a build process.

## Polish v2 changes

- More responsive yaw and roll authority.
- Faster turning while keeping the visible banking transition smoother.
- Reduced airport traffic density and shorter runway queues.
- Faster NPC taxi, line-up, takeoff, approach, rollout, and taxi-in flow.
- Shorter runway separation/turnaround delays.
- More detailed island terrain with improved relief and shoreline/terrain colour variation.
- Foliage distributed across both Northpoint and Coral Bay instead of being concentrated around one island.
- Clouds distributed across both islands and the inter-island route, with subtle movement.
- Cleaner start menu and a less intrusive in-flight interface.
- No new external dependencies or downloaded asset packs.

## Controls

The in-game **Flight controls** button shows the current keyboard controls. The existing Skybound ATC, passenger/career, camera, collision, and airport systems remain in the build.

## Notes

This repository contains the ready-to-run bundled game. Keep a copy of the ZIP before making major edits so you always have a stable baseline.
