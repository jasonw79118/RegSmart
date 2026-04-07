# RegSmart

Version: 04.07.2026.0013

This package is the live root deployment for GitHub Pages.

## Files
- index.html
- styles.css
- .nojekyll
- README.md
- docs/handoff/

## What changed in this version
- Added clickable Issues Register rows
- Added slide-out Issue Detail Panel
- Added localStorage issue persistence
- Added lifecycle action buttons
- Added issue ID generation using ISS-YYYYMMDD-#####
- Expanded Help / User Guide content
- Kept root deployment structure stable

## Deployment
1. Extract directly into repo root.
2. Confirm files are not nested inside an extra folder.
3. git add .
4. git commit -m "Version 04.07.2026.0013"
5. git push origin main

## Important
The root files power the live site.
The React/Vite app under apps/web is still separate from the live deployment.
