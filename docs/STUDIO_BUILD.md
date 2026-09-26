# Skybound Studio Build

## Goal
The previous versions improved the same procedural scene incrementally. This build changes the approach: preserve the working simulator/ATC/career systems, but increase scene density, scale cues, material variation and airport operations so that the world reads more like a designed game environment.

## Northpoint International
Northpoint now combines runway/taxiway geometry with a denser airport environment. The terminal zone includes curtain-wall glazing, structural mullions, roof equipment, high-mast lighting, stand paint, service equipment, maintenance buildings, landside roads/parking and perimeter elements. Airfield lighting is denser and runway surfaces include extra shoulder and touchdown cues.

## JX-200
The fictional JX-200 remains deliberately lightweight so the game loads quickly on GitHub Pages. The Studio Build improves its visual read with glazing, window rhythm, engine inlet detail, navigation lights and anti-collision beacons rather than replacing it with a multi-megabyte external aircraft asset.

## Performance strategy
Repeated details use simple low-poly primitives and instancing where practical. This keeps the simulator compatible with static hosting and avoids a large asset download while giving the airport much higher visual density.

## Testing
The packaged JavaScript has been syntax-checked and all local stylesheet/script references have been verified. The execution environment used to package the build blocks local browser navigation, so a full GPU-rendered browser test could not be performed here. The package therefore keeps the previous working runtime intact and adds the new content through contained geometry/material patches and external presentation files.
