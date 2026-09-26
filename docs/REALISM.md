# Realism notes

## Flight model
Skybound now models several effects that were previously simplified: engine spool lag, control authority changing with airspeed, coordinated bank turning, parasite/configuration drag, extra drag in turns, bank-angle load factor raising stall speed, and a narrower landing envelope.

It remains a lightweight browser flight model rather than a certified aerodynamic model. The JX-200 is fictional, so the values are tuned to feel like a small twin-engine transport rather than reproduce a specific type certificate.

## Airport
The airport now includes more runway paint, touchdown-zone/rubber cues, approach lighting, ramp/service details, hangar massing and less intrusive signage. Geometry remains procedural to keep GitHub Pages loading quickly.

## What MSFS 2024 still has that this build does not
Microsoft Flight Simulator uses streamed world imagery/photogrammetry, sophisticated atmospheric and weather simulation, detailed aircraft systems and avionics, high-resolution PBR assets, real nav databases and far more advanced aerodynamics. Matching those systems would require a fundamentally larger project and data pipeline.

## Best next upgrades
1. glTF aircraft and terminal models with PBR textures
2. real elevation / map tiles for one chosen island
3. cockpit instruments driven by actual simulator state
4. wind layers, gusts, turbulence and weather presets
5. wheel suspension, braking friction and crosswind ground handling
6. proper audio files for engines, wind, touchdown and cockpit ambience
