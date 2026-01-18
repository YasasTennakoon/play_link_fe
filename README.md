# PlayLink Frontend

**The Global Indoor and Outdoor Sports Booking Platform**

This is a pnpm monorepo containing the customer and admin frontends for PlayLink — a platform for discovering and booking sports courts in Sri Lanka (and eventually worldwide).

## Quick Start

```bash
# Install pnpm if needed
npm install -g pnpm

# Install dependencies
pnpm install

# Run customer app (http://localhost:3000)
pnpm dev:customer

# Run admin app (http://localhost:3001)
pnpm dev:admin
```

See [README_MONOREPO.md](README_MONOREPO.md) for detailed documentation.

## Project Vision

PlayLink solves the manual booking problems facing Sri Lankan sports venues:
- Real-time availability checking
- Online payments and digital receipts
- Unified platform for all indoor/outdoor courts
- Venue owner dashboards
- Admin management tools

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Package Manager**: pnpm workspaces
- **Styling**: Tailwind CSS 4 (ready to configure)
- **React**: Version 19

## Workspace Structure

- `apps/customer` — Customer booking interface
- `apps/admin` — Venue & platform management
- `packages/ui` — Shared component library

---

Built with ❤️ for the PlayLink MVP (Nov-Dec roadmap)
