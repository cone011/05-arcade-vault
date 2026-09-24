# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Arcade Vault — a platform for playing games online and competing for the highest score (see README.md). This is currently a freshly scaffolded `create-next-app` project (App Router) with no custom features implemented yet.

There is no test runner configured yet.

## Skills

Usa siempre /frontend-desing para diseñar interfaz de usuario

## Important: Next.js version

This project pins `next@16.3.6` / `react@19.2.8`, ahead of general training data. Per `AGENTS.md`, before writing any App Router code, consult the bundled docs at `node_modules/next/dist/docs/` (sections: `01-app`, `02-pages`, `03-architecture`, `04-community`) rather than relying on prior knowledge of Next.js conventions, since APIs and file conventions may have changed.

## Architecture

- App Router lives under `app/` (`app/layout.tsx` is the root layout, `app/page.tsx` the home route). No route groups, API routes, or additional pages exist yet.
- Styling is Tailwind CSS v4 via `@tailwindcss/postcss` (see `app/globals.css`, `postcss.config.mjs`); there is no `tailwind.config.*` since v4 configures via CSS.
- Path alias `@/*` resolves to the repo root (`tsconfig.json`).

## Workflow

The README states this project follows Spec Driven Design using the `/spec` and `/spec-impl` workflow from [Klerith/fernando-skills](https://github.com/Klerith/fernando-skills), installed via `npx skills@latest add Klerith/fernando-skills`. Check whether those skills/commands are installed before assuming they're available.
