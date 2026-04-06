# RegSmart

Version: 04.06.2026.0008

RegSmart is a Salesforce-style regulatory intelligence, audit, issue tracking, and compliance review platform for banks and regulated financial institutions.

## What changed in this release
- corrected GitHub Pages deployment approach so the live site can publish the built frontend instead of repo text
- set the Vite base path for `/RegSmart/`
- switched routing to hash-based navigation for GitHub Pages compatibility
- added a GitHub Actions Pages deployment workflow on pushes to `main`
- kept the version visible in the bottom-left of the app
- expanded the Help page and handoff notes

## Web app
From `apps/web`:
1. install dependencies
2. run the dev server for local work
3. build when ready

## API
From `apps/api`:
1. install requirements
2. run the FastAPI app locally

## GitHub Pages deployment
1. Push this version to `main`
2. In GitHub, open **Settings > Pages**
3. Under **Build and deployment**, choose **GitHub Actions**
4. Wait for the workflow named **Deploy RegSmart to GitHub Pages** to finish
5. Open the site again and confirm the bottom-left version shows `04.06.2026.0008`

## Notes
- keep all updates on `main`
- keep the ZIP flat at repo root when extracting into the local repo
- continue expanding the Help / User Guide page as the system grows
