# RegSmart Starter Pack

This starter pack is the initial scaffold for RegSmart, a Salesforce-style, cloud-based compliance, audit, and regulatory intelligence platform for banks.

## Build direction
- Cloud-based and browser accessible
- Modular for constant upgrades
- Frontend and backend separated from day one
- API versioning from day one
- SSO-ready authentication structure, even if local auth is used first
- Multi-tenant aware design
- Issue tracker and audit tracker treated as core records

## Color system
- Deep Trust Navy: #163A5F
- Regulatory Blue: #245E8A
- Review Slate: #5F6F7F
- Compliance Teal: #2F7C7C
- Cloud White: #F7FAFC
- Border Gray: #D6DEE6
- Text Charcoal: #1F2933

## Repo structure
- apps/web -> React + TypeScript + Vite shell
- apps/api -> FastAPI shell
- packages -> shared config/types/ui placeholders
- docs -> product, architecture, handoff
- database -> migrations and seeds placeholders
- infra -> deployment and scripts placeholders

## Important Git note
The error `src refspec main does not match any` happens when Git has no commit to push yet.
That occurs when the folder is empty or has no tracked files committed.

Use the included PowerShell guide after copying these files into your local `C:\Users\jason\RegSmart` folder.

## Next build target
- login page
- left navigation
- dashboard shell
- issues list and issue detail
- audits list
- admin users page
- backend health route and starter auth structure
- issue and review API stubs
