# Gowtham M — Portfolio (React + TypeScript + Tailwind + Framer Motion)

## Run it

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Hot-reloads as you edit.

To build for deployment:

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Add your photo

Drop a square-ish photo into `public/avatar.jpg` (any image, the filename
just needs to match). It'll appear automatically in the glowing ring in the
hero section. If the file isn't there, it falls back to a "GM" monogram —
so the site never looks broken either way.

## Edit content

Everything you'd want to change — projects, skills, experience,
certifications, contact links — lives in **`src/data.ts`**. Edit the arrays
there; every section re-renders itself, no component code needs touching.

## Before you publish — please check these

1. **Internship company name** — `EXPERIENCE` in `src/data.ts` currently has
   `org: "YES — full company name to confirm"`. Replace with the real name.
2. **Project descriptions** — I wrote plausible descriptions and bullets for
   both projects based on their names alone. Read through `PROJECTS` in
   `src/data.ts` and correct anything that doesn't match what you actually
   built.
3. **GitHub/live links** — both projects link to your GitHub profile, not a
   specific repo (I didn't have exact repo URLs). Update `github` per
   project, and add a `live` URL if you deploy a working demo.
4. **Cisco certificate** — listed as "Networking Essentials." Update to the
   exact title if different.

## Deploying it live

Since you're already comfortable with `npm run dev`, deploying is one more
step:

- **Vercel** — `npm i -g vercel`, then `vercel` in this folder, or connect
  the repo at vercel.com
- **Netlify** — `netlify.com` → drag-and-drop the `dist/` folder after
  `npm run build`, or connect your GitHub repo for auto-deploys
- **GitHub Pages** — push this repo, add a `gh-pages` deploy step, or use
  the `gh-pages` npm package

## Design notes

- **Layout** — single scrolling page with a fixed sidebar (desktop) /
  topbar (mobile), same pattern as most developer portfolios (including the
  one you linked) — recruiters skim in under a minute, so one continuous
  page beats forcing clicks between separate pages. Each section is
  `min-h-screen` with soft scroll-snap, so it still *feels* like distinct
  pages as you scroll, without the loading/navigation overhead of actual
  separate routes.
- **Command palette** — press `/` anywhere to open a quick-jump menu
  (arrow keys + Enter to navigate). This is the one genuinely distinctive
  interaction on the site — most portfolios don't have it.
- **Glass + glow** — cards use a frosted-glass effect (`bg-white/5` +
  `backdrop-blur`) over ambient glowing background blobs, plus a soft glow
  that follows your cursor on desktop.
- **Tilt cards** — project and cert cards tilt slightly in 3D toward your
  cursor on hover (see `src/components/TiltCard.tsx`).
- **Reduced motion respected** — anyone with `prefers-reduced-motion`
  enabled gets the same content instantly, with animations skipped.

## Stack used

React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, lucide-react
icons. No backend, no database — this is a static site (the backend
tech listed on the page is what *you* built in your projects, not what
this site runs on).
