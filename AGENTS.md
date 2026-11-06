# AGENTS.md — Ammy's Coffee

Canonical context: `AGENT.md` (business/positioning), `BRAND.md` (identity), `PRD.md`, `TRD.md`, `MENU.md`. Read `AGENT.md` before changing copy, scope, or brand direction.

## Stack & scope
- Next.js 15 App Router, React 19, TypeScript strict, Tailwind CSS v4. No `tailwind.config.*`; tokens are CSS-first in `app/globals.css` (`@theme inline`).
- Single-page CEO pitch concept for Ammy's Coffee (5 Delhi NCR outlets). Goal: editorial luxury flagship + franchise lead capture.
- Hard exclusions: no cart, checkout, payments, ordering, delivery, or order tracking. Menu is a visual catalog only. Never invent menu items/prices, outlet details, franchise fees, ROI, or financial claims.

## Commands
- `npm run dev` | `npm run build` | `npm run start`
- Typecheck: `npx tsc --noEmit`
- `npm run lint` fails in a clean install: `eslint` is not a dependency and no ESLint config exists. Do not claim lint passed; install/configure ESLint first if linting is in scope.
- No test suite exists.

## Current implementation
- Built: `Navbar`, `HeroSection`, `StoreMarquee`, `StorySection`, `CafesSection`, `FranchiseSection`, `Footer` on `/`; dedicated `/menu` route renders `MenuSection` (cream tabbed catalog sourced from `MENU.md`, strictly no cart/ordering). Keep nav/CTAs and anchors in sync.
- `CafesSection` lists only verified addresses/phones and links to Google Maps/tel. `FranchiseSection` is a client-side validated lead form with a local success state and prefilled email handoff only (no backend/webhook yet). `Footer` includes verified email/Instagram, quick links, copyright, and a `#top` back-to-top link.
- Do not invent menu items, prices, outlet hours, franchise fees, or ROI; pull only from `MENU.md` and `AGENT.md`.
- Media: optimized files in `public/assets/` (`videos/hero_ambient.mp4`, `photos/hero_poster.webp`, `photos/cafe_*.webp`, `logos/ammy_logo_white.png`, `logos/icon.png`, `logos/apple-icon.png`). Raw 600 MB sources in `brand_materials/` and `assets/*.pdf` are gitignored; never import/commit them directly.
- `@/*` maps to repo root.

## Design system
- Canonical UI palette: espresso `#121313`, surface `#18191A`, caramel `#C88A58`, caramel-hover `#B57846`, caramel-ink `#8A5A36` (accent text on cream), latte `#E8B88E`, cream `#FAF8F5`. Prefer token utilities (`bg-espresso`, `text-caramel`, `text-caramel-ink`); don't add more near-black hex variants. Caramel `#C88A58` is too light for small text on cream; use `caramel-ink`.
- Page rhythm: dark espresso hero/story/cafes/franchise with a cream `#menu` catalog section between story and cafes; keep the palette alternation intentional.
- `BRAND.md`, `AGENT.md`, and `globals.css` drift (`#1C1D1E` vs `#18191A`; `#2D2E2E` vs `#2E2F33`; `#EEE6EA` vs `#F4EFEA`). Use the `globals.css` token when in doubt.
- Fonts: Playfair Display + Plus Jakarta Sans via `next/font` (`--font-playfair`, `--font-jakarta`). Omalt/Museo/Gluck in `BRAND.md` are references, not web font files.
- Direction: Subko/Bacha/Ralph's/Aesop-level editorial luxury. Avoid SaaS card grids, glassmorphism, neon gradients, stock café clichés, and centered generic hero stacks. Restrained motion only.

## Implementation guardrails
- Hero entrance animations are CSS keyframes in `globals.css`, not Framer Motion, to avoid hydration fragility. Preserve that approach.
- Client components: `Navbar` (scroll/menu state), `StoreMarquee` (pause control), `MenuSection` (tabs), `FranchiseSection` (form state). Server components: `HeroSection`, `StorySection`, `CafesSection`, `Footer`.
- Mobile drawer positioning: use `absolute top-full` inside the fixed header, not `fixed ... top-full` which resolves against the viewport.
- Mobile drawer accessibility: keep Escape-close, body scroll lock, dialog semantics, focus trap, and focus return to the trigger.
- `prefers-reduced-motion`: hero keyframes stop and the hero video hides to reveal `hero_poster.webp`; the marquee still exposes its pause control.
- Keep `min-h-[100svh]` on the hero for mobile viewport correctness.
- Verify menu/location copy against `MENU.md` and `AGENT.md`; leave unknowns explicitly unconfirmed.
