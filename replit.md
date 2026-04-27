# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### JBR Creative Group — `artifacts/jbr-site`
- **Kind**: React + Vite web app (frontend only, no backend)
- **Port**: 8081 → externalPort 80
- **Preview path**: `/`
- **Stack**: React, TypeScript, Vite, Google Fonts (Bebas Neue, Inter, DM Mono)
- **Description**: JBR Creative Group music label website. Sections: hero feature stack (3 posters), new releases grid, featured release, deep cuts catalog, merch, artists roster, news dispatch, tour dates, newsletter signup, footer.
- **Artists**: Joe Leone, Eric Benét, Chanté Moore, Autumn Paige
- **Images**: `/public/covers/`, `/public/photos/`, `/public/logos/`, `/public/news/` (extracted from original zip)
- **No API, no database** — all data is static/hardcoded in `src/pages/Home.tsx`

### API Server — `artifacts/api-server`
- **Kind**: Express 5 API
- **Port**: 8080 → externalPort 8080

### Canvas (Mockup Sandbox) — `artifacts/mockup-sandbox`
- **Kind**: design
- **Port**: 5173
- **Preview path**: `/__mockup`
