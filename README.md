# RegSmart

Version: 04.06.2026.0009

This hotfix pack restores a visible interface at the live GitHub Pages URL by placing a deployable `index.html` at the repo root while preserving the longer-term app structure for future upgrades.

## Included in this pack
- deployable repo-root interface shell
- bottom-left version marker
- help / user guide content in the visible interface
- `.nojekyll` so Pages does not interfere with static assets
- updated handoff note

## Update workflow
Extract this pack directly into the repo root, commit, and push on `main`.

## Versioning rule
Program versions use: `MM.DD.YYYY.####`
