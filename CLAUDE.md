# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — type-check (`tsc -b`) then production build to `dist/` (also generates the PWA service worker)
- `npm run preview` — serve the production build

There is no test runner or linter configured. `npm run build` is the only correctness check; TypeScript is strict with `noUnusedLocals`/`noUnusedParameters`, so unused imports fail the build.

## Architecture

Mobile-first React 19 + TypeScript PWA built with Vite. No backend: Firebase was intentionally removed, and data ships as static JSON bundled at build time.

- **Recipes**: one JSON file per recipe in `src/data/recipes/`. `src/data/recipes.ts` loads them all via `import.meta.glob` (eager) and exports `recipes: Recipe[]`. Adding a recipe = adding a file; the `Recipe` interface in that module is the schema and must be kept in sync with the JSON files.
- **Theming**: colors are CSS custom properties on `:root` (light) and `[data-theme="dark"]` in `src/index.css`. `useTheme` (`src/hooks/useTheme.ts`) sets `document.documentElement.dataset.theme`, persists the choice in `localStorage` (wrapped in try/catch), and falls back to `prefers-color-scheme`. Use the variables (`--bg`, `--surface`, `--text`, `--primary`, …) rather than hard-coded colors.
- **Styling**: CSS Modules per component (`*.module.css`) plus global resets in `index.css`. Layout is a single column capped at 480px.
- **PWA**: configured in `vite.config.ts` (`vite-plugin-pwa`, `autoUpdate`). The manifest's icons are expected in `public/`.
- **Imports**: `@/` aliases `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).
- **Icons**: `lucide-react`.

UI text is in Italian (`<html lang="it">`).
