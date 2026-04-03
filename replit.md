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

## Artifacts

### Portfolio Website (`artifacts/portfolio`)
- **Type**: React + Vite (frontend-only, no backend)
- **Preview Path**: `/`
- **Description**: Aron Tadina's professional graphic designer portfolio
- **Sections**: Hero, Services (8 cards), Software Skills (8 tools with animated progress bars), Portfolio (6 projects with Google Drive links), Why Choose Me, Testimonials, About, Contact
- **Theme**: Dark black (#0a0a0a), orange (#FF6B00), yellow (#FFD700)
- **Fonts**: Bebas Neue (headings), Inter (body)
- **Libraries**: framer-motion (animations), lucide-react (icons)
- **Images**: Generated AI images in `artifacts/portfolio/public/`

### API Server (`artifacts/api-server`)
- **Type**: Express 5 API server
- **Preview Path**: `/api`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
