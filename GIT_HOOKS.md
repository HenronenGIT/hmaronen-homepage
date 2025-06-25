# Git Hooks Setup

This project uses [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) to ensure code quality and consistency.

## Hooks Configured

### Pre-commit Hook

- **What it does**: Automatically formats and lints only the files you're committing
- **Files affected**: `*.{ts,tsx,js,jsx,json,css,md}`
- **Actions**:
  - Runs ESLint with `--fix` on TypeScript/React files
  - Runs Prettier formatting on all supported files
  - Only processes staged files (files you've added to the commit)

### Pre-push Hook

- **What it does**: Runs a comprehensive check before allowing you to push to the remote repository
- **Checks performed**:
  1. **Type checking** (`npm run typecheck`) - Ensures no TypeScript errors
  2. **Linting** (`npm run lint`) - Checks for code quality issues
  3. **Format checking** (`npm run format:check`) - Ensures consistent code formatting

If any check fails, the push is prevented and you'll see helpful error messages.

## Manual Testing

You can manually test all the pre-push checks by running:

```bash
npm run test-hooks
```

This runs the same checks that the pre-push hook performs.

## Individual Commands

- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files are properly formatted
- `npm run lint` - Run ESLint on all files
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run typecheck` - Run TypeScript type checking

## How It Works

1. **Pre-commit**: When you run `git commit`, the hook automatically formats and lints your staged files
2. **Pre-push**: When you run `git push`, the hook runs all quality checks
3. **Automatic setup**: The hooks are automatically installed when you run `npm install` (via the `prepare` script)

## Benefits

- ✅ Consistent code formatting across the team
- ✅ Early catch of linting errors before they reach the repository
- ✅ Prevents broken code from being pushed
- ✅ Reduces code review time by ensuring consistent style
- ✅ Automatically fixes common issues

## Troubleshooting

If a hook fails:

1. **Pre-commit failure**: The staged files have been automatically fixed. Add them again with `git add .` and re-commit
2. **Pre-push failure**: Fix the reported issues and try pushing again
3. **To skip hooks temporarily** (not recommended): Use `git push --no-verify`

## Configuration Files

- `.husky/pre-commit` - Pre-commit hook script
- `.husky/pre-push` - Pre-push hook script
- `package.json` - Contains `lint-staged` configuration
- `.eslintrc.js` - ESLint configuration
- `.prettierrc` - Prettier configuration
