# GymFit — Personal Gym Coach Website

A production-ready, multi-page marketing site for a personal coaching brand. Built with **Next.js 15** (App Router), **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, **Lenis** smooth scroll, **Radix UI / shadcn-style** primitives, and **Lucide** icons.

## Pages

- `/` — Home (hero, stats, values, programs, process, transformations, trainers, testimonials, pricing, gallery, FAQ, CTA)
- `/about` — Brand story, stats, values, team, hiring CTA
- `/programs` — All training programs with cards, process, FAQ
- `/trainers` — Coach roster with social links and specialties
- `/pricing` — Monthly/annual toggle, three plans, testimonials, FAQ
- `/gallery` — Editorial-style photo grid + before/after slider
- `/contact` — Contact channels + accessible validated form

## Tech stack

| Concern        | Choice                                                       |
| -------------- | ------------------------------------------------------------ |
| Framework      | Next.js 15 (App Router, Turbopack dev)                       |
| Runtime        | React 19                                                     |
| Language       | TypeScript (strict)                                          |
| Styling        | Tailwind CSS + custom design tokens (HSL CSS variables)      |
| Components     | Radix UI primitives + shadcn-style wrappers                  |
| Icons          | lucide-react                                                 |
| Animation      | Framer Motion (component-level), GSAP (scroll triggers)      |
| Smooth scroll  | Lenis (with reduced-motion guard)                            |
| Forms          | react-hook-form + zod                                        |
| SEO            | metadata API, sitemap.ts, robots.ts, OG/icon ImageResponse, JSON-LD |
| Fonts          | Inter (body) + Bricolage Grotesque (display) via next/font   |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

The site runs at http://localhost:3000.

## Project structure

```
src/
├── app/                      # App Router pages, sitemap, robots, OG image, layouts
│   ├── (pages)/page.tsx      # Home, about, programs, trainers, pricing, gallery, contact
│   ├── globals.css           # Design tokens, base styles, utility layers
│   ├── layout.tsx            # Root layout, providers, fonts, metadata
│   ├── opengraph-image.tsx   # Dynamic OG image
│   ├── icon.tsx              # Dynamic favicon
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   └── loading.tsx
├── components/
│   ├── layout/               # Navbar, Footer, Logo
│   ├── providers/            # Smooth-scroll provider (Lenis)
│   ├── sections/             # Reusable page sections (Hero, Pricing, FAQ, etc.)
│   ├── seo/                  # JSON-LD structured data
│   └── ui/                   # shadcn-style primitives (Button, Card, Tabs, ...)
└── lib/                      # site config, utils, mock data
```

## Design system

- **Color tokens** — `--background`, `--foreground`, `--primary` (orange), `--card`, `--border`, etc. defined as HSL CSS variables in `globals.css`. Brand orange palette under `tailwind.config.ts` → `colors.brand.50–950`.
- **Typography** — display heading via `font-display` (Bricolage Grotesque), body via `font-sans` (Inter).
- **Spacing system** — Tailwind container with responsive padding; `section-padding` utility for vertical rhythm.
- **Glassmorphism** — `.glass`, `.glass-strong`, plus `<SpotlightCard />` component with cursor-tracking radial highlight.
- **Animations** — `Reveal`, `AnimatedCounter`, `Marquee`, scroll-linked transforms, Framer Motion `whileInView`.

## Performance & SEO

- All pages use the Next.js Metadata API with canonical URLs.
- Dynamic `opengraph-image.tsx` and `icon.tsx` generate OG and favicon images on the edge.
- `sitemap.ts` and `robots.ts` produce SEO assets at `/sitemap.xml` and `/robots.txt`.
- `OrganizationJsonLd` + `WebsiteJsonLd` structured data injected into the root layout.
- `next/image` is used everywhere with proper `sizes` and `priority` for the LCP hero image.
- `optimizePackageImports` for `lucide-react` and `framer-motion` keeps bundles lean.
- Lenis respects `prefers-reduced-motion`.
- Skip-to-content link, `focus-visible` rings, semantic landmarks, ARIA labels on interactive widgets (slider, accordion, tabs, navigation).

## Accessibility

- All interactive controls have visible focus states.
- The before/after slider supports keyboard interaction (arrow keys) and exposes `role="slider"` with valuemin/max/now.
- Color contrast targets WCAG AA in both pill and surface combinations.
- The mobile navigation traps body scroll while open and closes on route change.

## Forms

- The newsletter and contact forms use `react-hook-form` with `zod` schemas, accessible labels, inline error messages, and animated submit states. Toast notifications via a Radix-backed `Toaster` provider.
- Plug your provider of choice (Resend, Postmark, Supabase, etc.) into the `onSubmit` handler — see `.env.example` for the recommended environment variables.

## Deployment

The repo is ready for **Vercel**:

1. Import the repository.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. (Optional) Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, Supabase keys.
4. Deploy.

`next.config.ts` already enables AVIF/WebP image formats and remote pattern allowlisting for Unsplash and Pexels.

## Scripts

| Script        | Purpose                       |
| ------------- | ----------------------------- |
| `npm run dev` | Local dev with Turbopack      |
| `npm run build` | Production build            |
| `npm start`   | Run the built app             |
| `npm run lint` | ESLint with Next + TS config |
| `npm run format` | Prettier write             |

## License

MIT — see `LICENSE`.
