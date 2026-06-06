# Learning Log

A running record of things learned while building this portfolio, step by step.

---

## Step 1 — Project structure & placeholder pages

**Date:** 2026-06-06

### What we built
- Scaffolded a Next.js 16 App Router project with TypeScript and Tailwind CSS v4.
- Created placeholder pages for every route.
- Added a shared `Navbar` and `Footer` in the root layout.
- Defined typed data files for profile info and projects.

### Key concepts

**App Router routing**
In Next.js App Router, a folder inside `app/` becomes a URL route.
A file named `page.tsx` inside that folder is what gets rendered.
So `app/about/page.tsx` → `/about`.

**Root layout (`app/layout.tsx`)**
This file wraps *every* page automatically.
It's the right place for elements that appear on all pages — Navbar, Footer, global fonts.

**Server Components (default)**
Every component is a Server Component unless you add `"use client"` at the top.
Server Components run on the server, so they can't use browser APIs or React hooks like `useState`.
Our Navbar only uses `<Link>`, so it doesn't need `"use client"`.

**`@/` alias**
`@/` is a shortcut configured in `tsconfig.json` that points to `src/`.
So `import { profile } from "@/data/profile"` means `src/data/profile.ts`.

**Tailwind CSS v4**
Instead of a `tailwind.config.js`, v4 uses `@import "tailwindcss"` at the top of your CSS file.
Configuration happens in the CSS file itself using CSS variables.

### Things to explore next
- How to highlight the active nav link (requires `usePathname` → needs `"use client"`)
- How to add metadata (`export const metadata`) to individual pages for SEO
- How TypeScript types in `data/projects.ts` give us autocomplete and safety everywhere

---

<!-- Add new step entries below as we build -->
