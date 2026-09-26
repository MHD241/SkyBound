# Skybound Merged v8

This is the current self-contained Skybound build based on the renderer that is known to work on Safari/GitHub Pages, with the later Studio/Reboot features merged back in.

## Included
- Studio airport environment and added airside detail
- Drag/orbit camera presentation
- Updated menu/HUD styling
- Faster AI traffic flow
- Normalized, responsive passenger-jet handling
- No external GLB/CDN renderer dependency
- GitHub Pages ready

Upload the contents of this folder to the repository root.

## v9 world scale
Northpoint and Coral Bay are now separated by roughly 100 km and sit on country-scale landmasses. Northpoint AI traffic is split across 36R and 36L to reduce player waiting time.


## v10 — Living Countries
- Expanded the flat airport safety basin around both airports. The terrain stays level for several kilometres before hills begin.
- Removed the immediate downhill transition around the airport by clamping the surrounding transition zone to airport elevation or higher.
- Added multiple cities and towns to each country, with denser major urban centres and lower suburban development.
- Added arterial road networks connecting the cities.
- Added moving road traffic using lightweight instanced vehicles.
- Urban development is kept outside the airport safety zone.
