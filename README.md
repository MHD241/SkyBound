# SKYBOUND — Studio Build

A self-contained GitHub Pages build of the Skybound 3D flight simulator.

## Deploy — no build tools required
1. Extract this ZIP.
2. Upload **everything inside the folder** to the root of your GitHub repository.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose your branch, and choose `/ (root)`.
5. Open the GitHub Pages URL when deployment finishes.

There is no npm install, no terminal command, no server, no database, and no external setup required.

## Studio-build changes
This pass is intended to change the *production value*, not just tweak the old colours.

### Airport environment
- rebuilt terminal presentation with glass curtain-wall frontage and structural mullions
- rooftop equipment and architectural detail
- proper stand lead-in lines, stop bars and safety markings
- high-mast apron lighting
- fuel trucks, pushback/service vehicles and baggage equipment
- maintenance hangars and cargo/service buildings
- landside access road, parking areas and parked vehicles
- terminal-side perimeter security fencing
- denser taxiway edge/centreline lighting
- runway shoulders, touchdown rubbering and extra runway detail
- approach lighting and PAPI-style visual approach lights
- reduced oversized in-world signage

### Aircraft presentation
- upgraded metallic/paint response
- cabin window strip
- cockpit glazing
- engine inlet/fan/spinner detail
- anti-collision beacons
- wingtip navigation lights

### Simulation feel
- turbine spool lag rather than instant thrust
- speed-sensitive pitch/roll authority
- heavier roll/pitch inertia
- coordinated bank turning
- flap/gear drag
- extra induced drag in steeper turns
- bank/load-factor stall-speed penalty
- stricter stable-touchdown envelope
- faster, less congested AI airport operations

### Presentation
- cinematic loading curtain
- cleaner, more premium start menu
- restrained HUD/glass styling
- improved ready-screen camera framing
- revised atmosphere, haze and lighting balance

## Files
- `index.html` — complete simulator runtime
- `assets/skybound-pro.css` — earlier realism presentation layer
- `assets/studio.css` — Studio Build presentation layer
- `assets/studio.js` — loading/presentation enhancements
- `assets/favicon.svg` — site icon
- `docs/REALISM.md` — simulation notes and limitations
- `docs/STUDIO_BUILD.md` — details of this visual rebuild

## Important limitation
This is still a lightweight browser simulator. Microsoft Flight Simulator 2024 uses streamed world imagery, photogrammetry, large PBR asset libraries, advanced weather/atmosphere simulation, detailed avionics and aircraft-specific aerodynamic data. Skybound does not reproduce those systems, but this build moves the game toward the visual language and operational feel of a commercial flight simulator while staying deployable as a static GitHub Pages project.

## Studio Reboot controls
- Drag directly on the 3D world in Chase or Orbit view to move the camera around the aircraft.
- Mouse wheel / trackpad scroll changes camera distance.
- Double-click the 3D world to reset the camera angle.
- Roll and yaw controls have been retuned for significantly quicker, less stubborn turns.

## Visual reboot
This build also replaces the pale airport look with darker concrete/asphalt, visible concrete panel joints and apron wear, richer terrain, stronger terminal glass/metal contrast, and a lower-angle cinematic daylight setup.
