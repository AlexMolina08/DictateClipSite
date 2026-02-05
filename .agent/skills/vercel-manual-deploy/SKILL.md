---
name: vercel-manual-deploy
description: Automates manual deployment to Vercel using the CLI. Use when GitHub integration fails, hashes mismatch, or immediate manual deployment is required.
---

# Vercel Manual Deployment Skill

This skill provides a structured way to perform manual deployments to Vercel when standard CI/CD pipelines are broken or disconnected.

## When to use this skill
- Use when `git push` does not trigger a Vercel build.
- Use when Vercel dashboard shows a commit mismatch (e.g., local branch is ahead or has a different history).
- Use when the user requests a "manual push" or "CLI deploy".

## How to use it

### 1. Prerequisites
- Vercel CLI must be installed (`npm install -G vercel` or run via `npx vercel`).
- User must be logged in (usually handled by the local environment or browser authentication).

### 2. Linking the Project
Before deploying, ensure the local directory is linked to the correct Vercel project:
// turbo
```bash
npx vercel link
```
*Selection during link:*
- **Project Name**: `dictateclip-site`
- **Scope**: User's scope (godmodes-projects)
- **Framework**: Vite/React (auto-detected)

### 3. Deploying to Production
To push the current local state to the production domain:
// turbo
```bash
npx vercel --prod
```

### 4. Verification
After deployment:
1. Verify the output URL provided by the CLI.
2. Use the `browser_subagent` to check the live site and ensure it's not a 404 and reflects the latest changes.

### 5. Common Issues
- **404 NOT_FOUND**: Usually means the build output directory (`dist`) was missing or the project was not correctly linked. Ensure `npm run build` succeeds locally first if necessary, although Vercel handles builds server-side.
- **Login Required**: If `npx vercel` fails with an auth error, ask the user to run `vercel login` in their local terminal.
