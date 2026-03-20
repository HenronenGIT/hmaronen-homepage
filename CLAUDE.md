# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install          # Install dependencies (pnpm required)
pnpm run dev          # Start dev server (http://localhost:5173)
pnpm run build        # Production build
pnpm run lint         # Run ESLint
pnpm run lint:fix     # Run ESLint with auto-fix
pnpm run format       # Format with Prettier
pnpm run typecheck    # TypeScript type checking
pnpm run check-all    # Run typecheck + lint + format:check together
```

No test suite is configured.

## Architecture

**React 18 SPA** built with Vite + TypeScript, deployed to Vercel. All routes rewrite to `/index.html`.

### Routing & Pages

`src/App.tsx` sets up React Router with React Query. Pages live in `src/pages/`:

- `Index.tsx` — home page composing Hero, About, WorkExperience sections
- `Thoughts.tsx` / `ThoughtPage.tsx` — blog listing and individual post views
- `NotFound.tsx` — 404

### Content: Thoughts (Blog)

Markdown files in `src/thoughts/` are the blog posts. They use front matter (parsed by `gray-matter`) and are rendered via `marked`. No CMS — content is file-based.

### Component Layers

- `src/components/ui/` — shadcn/ui primitives (do not modify unless necessary)
- `src/components/` — page-section components (Hero, About, WorkExperience, etc.)
- `src/hooks/` — custom hooks: `use-typewriter`, `use-mobile`, `use-thought-filters`

### Design System

Colors and typography are centralized in `src/constants/` — use these rather than hardcoding values. Primary color: `#47bfba`, dark background: `#1A1A1B`. `cn()` from `src/lib/utils.ts` is the utility for merging Tailwind classes.

### Git Hooks

Husky runs automatically:

- **Pre-commit**: ESLint + Prettier on staged files
- **Pre-push**: full `check-all` (typecheck + lint + format check)

Use `git cz` instead of `git commit` for conventional commit messages.
