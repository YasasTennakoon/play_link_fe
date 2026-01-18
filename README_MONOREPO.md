# PlayLink Frontend Monorepo

Modern pnpm workspace setup for PlayLink — customer and admin apps sharing UI components.

## Structure

```
play_link_fe/
├── apps/
│   ├── customer/          # Customer-facing booking app (port 3000)
│   └── admin/             # Admin dashboard (port 3001)
├── packages/
│   └── ui/                # Shared React components (@playlink/ui)
└── pnpm-workspace.yaml
```

## Prerequisites

- Node.js 20+
- pnpm (installed automatically if missing)

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run customer app (http://localhost:3000)

```bash
pnpm dev:customer
```

### Run admin app (http://localhost:3001)

```bash
pnpm dev:admin
```

### Run both apps concurrently

```bash
pnpm dev:customer & pnpm dev:admin
```

## Pages Created

**Customer App:**
- `/` — Home page with court search
- `/search` — Court search and filters
- `/bookings` — User booking management

**Admin App:**
- `/` — Admin home
- `/dashboard` — Analytics and overview
- `/venues` — Venue management

## Shared Components

All shared UI lives in `packages/ui` and is imported as `@playlink/ui`:

```tsx
import { Button } from '@playlink/ui'

<Button onClick={handleClick}>Click me</Button>
<Button variant="ghost">Secondary</Button>
```

## Adding New Shared Components

1. Create in `packages/ui/src/YourComponent.tsx` with `'use client'` directive
2. Export in `packages/ui/src/index.ts`
3. Import in apps: `import { YourComponent } from '@playlink/ui'`

## Notes

- Each app runs on its own port to allow concurrent development
- Shared dependencies are hoisted to the root `node_modules` by pnpm
- TypeScript path aliases configured for workspace packages
- Next.js 16 with React 19 (app router)

## Next Steps

- [ ] Add Tailwind CSS configuration (already installed)
- [ ] Implement authentication flow
- [ ] Connect to backend API
- [ ] Add state management (Zustand/Redux)
- [ ] Set up API client package

