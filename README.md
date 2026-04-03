# Henri Maronen Homepage Monorepo

This repository now contains two independent frontend apps:

- `apps/legacy-homepage` keeps the current site intact so it can live on a separate "time machine" subdomain.
- `apps/homepage` is the new redesigned homepage app built with Next.js.

## Workspace Commands

Install dependencies from the repo root:

```bash
pnpm install
```

Run either app from the repo root:

```bash
pnpm dev:legacy
pnpm dev:home
```

Build either app from the repo root:

```bash
pnpm build:legacy
pnpm build:home
```

Run checks across both apps:

```bash
pnpm check-all
```

## Structure

```text
hmaronen-homepage/
├── apps/
│   ├── homepage/          # New redesigned homepage (Next.js)
│   └── legacy-homepage/   # Frozen current site
├── docs/
├── packages/              # Reserved for future shared packages
├── package.json           # Root workspace orchestration
└── pnpm-workspace.yaml
```
