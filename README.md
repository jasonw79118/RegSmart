# RegSmart 04.17.2026.0004

Corrected packaging pack.

Important change:
- build.py is now placed at the REPO ROOT

Run from repo root:
python build.py

This lets the script write to the intended paths:
- docs/data/items.json
- docs/raw/*
- docs/print/*

The live root files remain at zip root with no extra folder nesting.
