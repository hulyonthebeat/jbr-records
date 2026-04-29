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
- **Description**: JBR Creative Group music label website. Faithful rebuild of jbrcreativegroup.com — no merch/store/tours.
- **Routes** (wouter): `/` (Home), `/about` (About), `/artists/:slug` (Artist subpage), `/contact` (Contact), `*` (404).
- **Home sections**: header (logo + nav), hero (headline + auto-advancing carousel), about, releases, roster (3 artist cards linking to subpages), news, contact (mailto only), newsletter, footer.
- **Artist subpages** (`src/pages/Artist.tsx`, data in `src/data/artists.ts`): hero with photo + LISTEN NOW + back-to-roster, biography, discography grid (`disc-card`), press articles (omitted when empty), social chips, "Other Artists" cross-promo cards.
- **Artists**: Eric Benét (`/artists/eric-benet`), Joe Leone (`/artists/joe-leone`), Autumn Paige (`/artists/autumn-paige`).
- **Header/Footer**: exported from `src/pages/Home.tsx` and reused on Artist pages. Use `useHashHref()` helper so in-page nav (`#about`, `#roster`, etc.) resolves to `/#section` when on a non-home route.
- **Images**: `/public/covers/`, `/public/photos/`, `/public/logos/`, `/public/news/`, `/public/carousel/`, `/public/brand/jbr-logo.png`.
- **No API, no database** — all content is static.

### API Server — `artifacts/api-server`
- **Kind**: Express 5 API
- **Port**: 8080 → externalPort 8080

### JBR Creative Group (Republic-style) — `artifacts/jbr-records`
- **Kind**: React + Vite web app (frontend only, no backend)
- **Port**: 26215
- **Preview path**: `/jbr-records/`
- **Stack**: React, TypeScript, Vite, Wouter, Inter (Google Fonts), framer-motion, lucide-react
- **Description**: Second JBR site, modeled on republicrecords.com — flat-black retail-shop aesthetic, all-lowercase, sharp corners (`--radius: 0`), bold Inter. Brand palette pulled from JBR logo: red `#C7332E` accent, blue `#1F4E7C` promo strip, white text on black.
- **Sections** (single page, anchored): hero `#new` (NEW RELEASE — duets, eric benét with chanté moore), shop carousel (3-up bordered "NEW IN" row), `#artists` (3-card row), **VideoHero "in motion / watch"** (auto-cycling thumbnail carousel of YouTube music videos with crossfade, NOW PLAYING badge, counter, and centered play button — clicks open YouTube), `#music` (4-tile releases grid), `#news` (3-card editorial grid), newsletter, `#contact`, footer.
- **VideoHero** (`src/components/jbr/VideoHero.tsx`): uses `i.ytimg.com/vi/{ID}/hqdefault.jpg` for poster thumbnails (with sddefault fallback), no live YouTube iframe (Replit dev preview blocks YT embeds — static thumbnails are reliable and look just as polished). Auto-advance every 6s, pauses on hover, click links to YouTube watch URL.
- **Roster** (3): Eric Benét, Joe Leone, Autumn Paige.
- **Forms**: newsletter and contact both submit locally and show in-place success state (no backend wiring).
- **Images**: `/public/images/jbr/` — copies from mockup-sandbox.
- **Asset paths**: built with `${import.meta.env.BASE_URL}images/jbr/...` helper so the proxy base path (`/jbr-records/`) is honored at runtime.

### Canvas (Mockup Sandbox) — `artifacts/mockup-sandbox`
- **Kind**: design
- **Port**: 5173
- **Preview path**: `/__mockup`
