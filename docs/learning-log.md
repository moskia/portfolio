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

## Step 3 — Reusable UI components & dark theme

**Date:** 2026-06-06

### What we built
- Created `components/layout/PageContainer.tsx` — shared width/padding wrapper.
- Created `components/ui/SectionHeader.tsx` — consistent page heading block.
- Created `components/ui/SkillBadge.tsx` — pill tag for skills and technologies.
- Created `components/ui/ExperienceCard.tsx` — timeline entry for jobs and education.
- Created `components/ui/ProjectCard.tsx` — card for a single project, uses `SkillBadge`.
- Refactored Home, About, Projects, Resume pages to use the new components.
- Applied a dark theme across globals.css, layout, Navbar, Footer, and all pages.
- Added a `skills` array to `data/profile.ts`.

### Key concepts

**Props and TypeScript types**
A component is just a function. Props are its parameters.
TypeScript lets us define exactly what shape those parameters must be:
```ts
type SkillBadgeProps = {
  label: string;
};
export default function SkillBadge({ label }: SkillBadgeProps) { ... }
```
Now if you call `<SkillBadge />` without a `label`, TypeScript shows an error immediately.

**Optional props with `?`**
Adding `?` to a prop makes it optional:
```ts
type SectionHeaderProps = {
  title: string;
  subtitle?: string; // caller can omit this
};
```
Inside the component, use `{subtitle && <p>{subtitle}</p>}` to only render it when it exists.

**Spreading an object into props (`{...entry}`)**
On the Resume page we write:
```tsx
<ExperienceCard {...entry} />
```
This is equivalent to writing out every prop by hand: `role={entry.role} company={entry.company} ...`.
It's useful when the data shape matches the component's props exactly.

**Exporting a type alongside a component**
In `ExperienceCard.tsx` we export both the component *and* its type:
```ts
export type ExperienceEntry = { ... };
export default function ExperienceCard(...) { ... }
```
This lets `resume/page.tsx` import the type for the local data arrays:
```ts
import ExperienceCard, { type ExperienceEntry } from "@/components/ui/ExperienceCard";
```

**When to keep a helper in the page vs. extract it**
`ResumeSection` is only needed in `resume/page.tsx`, so it stays there.
`ExperienceCard` and `ProjectCard` are general enough to be used anywhere, so they go in `components/ui/`.
The rule: extract when you'd copy-paste it to a second place.

### Things to explore next
- Active nav link highlighting with `usePathname` (needs `"use client"`)
- Per-page `metadata` exports for SEO titles and descriptions
- Project detail pages using dynamic routes `/projects/[slug]`

<!-- Add new step entries below as we build -->
