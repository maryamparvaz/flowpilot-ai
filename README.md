# FlowPilot

> Automate the busywork behind every growing team. A portfolio-grade SaaS marketing site for a fictional workflow product — built with the same care a real product team would bring to a launch site.

## 🚀 Live demo
 [Demo Project](https://flowpilot-ai-jade.vercel.app/)


## ✨ Main features

- Premium SaaS landing experience (hero, social proof, problem, features, demo, how it works, use cases, testimonials, pricing, FAQ, CTA)
- Fully responsive — mobile-first layouts that scale up to wide desktop
- Polished **light & dark mode** with no-flash theme bootstrapping
- Reusable component architecture (`src/components/site/*`)
- Typed mock data layer (`src/data/mock.ts`)
- Animated, glassmorphic dashboard mockup built with pure CSS (no images)
- SEO-friendly metadata per route + sitemap + robots
- Accessible semantic HTML, keyboard-friendly nav, ARIA-labeled icons
- Smooth micro-interactions via CSS transitions

## 🛠 Tech stack

- **React 19** + **TypeScript**
- **Vite 8** build tooling
- **TanStack Router** (file-based, type-safe routing — the modern equivalent of React Router)
- **TanStack Start** for SSR + edge deployment
- **Tailwind CSS v4** with CSS-first design tokens
- **shadcn/ui** primitives (Radix under the hood)
- **Lucide React** icons

> Note on routing: this project uses TanStack Router instead of React Router DOM. Both share the same mental model (`<Link to="...">`, `useNavigate`), but TanStack gives us file-based routing, type-safe params, and built-in SSR/preloading.

## 📄 Pages

| Route | Purpose |
| --- | --- |
| `/` | Marketing home — hero, problem, features, demo, use cases, testimonials, pricing preview, FAQ, CTA |
| `/features` | Deep dive on every capability + integrations + analytics preview |
| `/pricing` | 3 plans, monthly/yearly toggle, full comparison table, FAQ |
| `/contact` | Contact form, company details, response time, FAQ |

## 📁 Folder structure

```
src/
├── components/
│   ├── site/           # Marketing site components (Navbar, Hero, etc.)
│   └── ui/             # shadcn/ui primitives
├── data/
│   └── mock.ts         # Typed mock data (features, plans, testimonials, ...)
├── lib/
│   ├── theme.ts        # Theme bootstrap + toggle helpers
│   └── utils.ts        # cn() helper
├── routes/             # File-based routes (TanStack Router)
│   ├── __root.tsx
│   ├── index.tsx       # /
│   ├── features.tsx    # /features
│   ├── pricing.tsx     # /pricing
│   ├── contact.tsx     # /contact
│   └── sitemap[.]xml.ts
├── styles.css          # Tailwind v4 + design tokens
└── router.tsx
```

## ⚡ Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

App will be available at `http://localhost:8080` (or as printed by Vite).

## 🌍 Deployment

Built on TanStack Start, this app deploys to any modern host:

- **Vercel** — `vercel deploy` (auto-detects)
- **Netlify** — point to `npm run build`, publish `.output/public`
- **Cloudflare Pages / Workers** — supported out of the box
- **Any static host** — for a fully static export, switch the Start preset

## 🧠 Engineering highlights

- **Design tokens, not hex codes.** Every color, gradient, shadow, and radius lives in `src/styles.css` as a CSS custom property, mapped into Tailwind via `@theme inline`. No hardcoded `text-white` / `bg-[#…]` in components.
- **Custom Tailwind v4 utilities** (`container-page`, `text-gradient-brand`, `glass`, `bg-grid`) defined via `@utility` for a consistent rhythm across pages.
- **No-flash theming.** A tiny inline script in `__root.tsx` applies the saved theme before paint, so dark-mode users never see a white flash.
- **Composition over duplication.** `CTASection`, `SectionHeader`, `FeatureCard`, `DashboardPreview` are reused across every page.
- **Typed mock data.** Every dataset is exported with explicit interfaces — swap for a real API by replacing one import.

## 📚 What I learned

- Building a real design system in Tailwind v4's CSS-first model
- Using TanStack Router's file-based routing with per-route SEO metadata
- Crafting a believable dashboard mockup with pure CSS (no PNG/Figma exports)
- Balancing density and whitespace at the level expected of Linear/Stripe/Vercel

## 🔮 Future improvements

- Animated section reveals with Framer Motion
- Real blog/changelog routes with MDX
- Internationalization (i18n)
- Persisted demo dashboard (Supabase)
- Visual regression tests with Playwright

---

Built with care as a portfolio piece. Feel free to fork, learn from, and remix.
