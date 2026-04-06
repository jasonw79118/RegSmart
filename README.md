# RegSmart

Version: 04.06.2026.0005

RegSmart is a Salesforce-style compliance, audit, and issue management system for banks. This build starts in full enterprise structure so a lead bank, subsidiaries, departments, and business units can be represented from the start while still allowing future simplification for smaller institutions.

## Included in this pack
- protected application shell with local session persistence
- bottom-left version marker
- enterprise entity selector in the header
- dashboard with scoped entity and department views
- issues tracker with filters
- issue detail lifecycle view
- audits and review linkage
- evidence center with privacy class field
- department workspace
- workflow settings workspace
- expanded help and user guide workspace
- API scaffolding for entities, departments, and workflows

## Frontend
From `apps/web`:
1. install dependencies
2. run the dev server
3. build when ready

## Update workflow
Extract this pack directly into the repo root, review the changed files, then commit and push on `main`.

## Versioning rule
Program versions use:
`MM.DD.YYYY.####`

The version must be shown in the bottom-left of the UI and updated with each release so successful pushes can be confirmed quickly.
