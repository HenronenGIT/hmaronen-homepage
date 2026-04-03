# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install               # Install all workspace dependencies
pnpm run dev:legacy        # Start the legacy homepage app
pnpm run dev:home          # Start the redesigned homepage app
pnpm run build:legacy      # Production build for the legacy app
pnpm run build:home        # Production build for the redesigned app
pnpm run check-all         # Run typecheck + lint + format:check for both apps
```

No test suite is configured.

## Architecture

**PNPM monorepo** with two React 18 SPAs built with Vite + TypeScript and deployed independently.

- `apps/legacy-homepage` — frozen current site, intended for the "time machine" subdomain
- `apps/homepage` — new redesigned homepage workspace
- `packages/` — reserved for future shared packages; avoid adding shared runtime code unless necessary

### Routing & Pages

Legacy routing lives in `apps/legacy-homepage/src/App.tsx`, which sets up React Router with React Query. Pages live in `apps/legacy-homepage/src/pages/`:

- `Index.tsx` — home page composing Hero, About, WorkExperience sections
- `Thoughts.tsx` / `ThoughtPage.tsx` — blog listing and individual post views
- `NotFound.tsx` — 404

### Content: Thoughts (Blog)

Markdown files in `apps/legacy-homepage/src/thoughts/` are the blog posts. They use front matter (parsed by `gray-matter`) and are rendered via `marked`. No CMS — content is file-based.

### Component Layers

- `apps/legacy-homepage/src/components/ui/` — shadcn/ui primitives (do not modify unless necessary)
- `apps/legacy-homepage/src/components/` — page-section components (Hero, About, WorkExperience, etc.)
- `apps/legacy-homepage/src/hooks/` — custom hooks: `use-typewriter`, `use-mobile`, `use-thought-filters`

### Design System

For the legacy app, colors and typography are centralized in `apps/legacy-homepage/src/constants/` — use these rather than hardcoding values when touching the legacy site. Primary color: `#47bfba`, dark background: `#1A1A1B`. `cn()` from `apps/legacy-homepage/src/lib/utils.ts` is the utility for merging Tailwind classes.

### Git Hooks

Husky runs automatically:

- **Pre-commit**: ESLint + Prettier on staged files
- **Pre-push**: root `check-all` across both apps

Use `git cz` instead of `git commit` for conventional commit messages.
