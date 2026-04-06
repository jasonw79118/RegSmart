# RegSmart

RegSmart is a Salesforce-style, cloud-based compliance operating system for banks and regulated financial institutions.

This starter build is being structured from day one for:
- lead bank + subsidiary + business-unit hierarchy
- audit and compliance issue tracking
- review and examination support
- upgrade-friendly modular growth
- future AI review and redaction workflows

## Current pack focus
This phase expands the UI shell into enterprise mode with:
- multi-entity dashboard views
- issue tracker register
- issue detail lifecycle view
- audits and reviews register
- review detail page
- entity structure page
- user administration shell

## Repo structure
- `apps/web` — React/Vite front end
- `apps/api` — FastAPI back end shell
- `docs` — product, architecture, and handoff notes
- `infra` — scripts and deployment support notes
- `database` — migrations and seeds placeholder

## Run the web app
From `apps/web`:
- install dependencies
- run the dev server
- build when ready for deployment

## Notes
- Built to remain constantly upgradeable.
- Keep APIs versioned.
- Keep entity, role, and workflow models data-driven.
- Use ZIP-file delivery and include handoff documentation for larger phases.


## Current build marker
- Version: 04.06.2026.0003
- Version appears in the lower-left corner of the application shell so successful pushes can be verified quickly.
- Help & User Guide is now part of the left navigation and should grow with each phase.
