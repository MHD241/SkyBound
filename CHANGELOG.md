# v8

- Restored the newer Studio/Reboot world on top of the known-working self-contained renderer.
- Removed the experimental remote-model/CDN startup path.
- Removed the long Studio loading curtain.
- Reworked flight controls: faster roll response, stronger automatic bank-centering, conventional ~35 degree maximum commanded bank, faster yaw response and less input lag.
- Preserved drag-camera and later airport-detail work.

## v9 — Country World / Multi-Runway
- Expanded Northpoint and Coral Bay into country-scale landmasses tens of kilometres across.
- Moved Coral Bay roughly 100 km from Northpoint to create a real regional sector.
- Increased draw distance, ocean, sky, terrain meshes, cloud coverage and navigation-map scale.
- Activated Northpoint runway 36L for AI departures and selected arrivals.
- Kept the player primarily on 36R while AI traffic can use 36L independently.
- Added a separate secondary-runway spacing timer to reduce congestion on the main queue.
