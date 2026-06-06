# Portfolio Spec

A living document that defines what this portfolio is, what each page does, and what features are planned.

---

## Pages

| Route        | Purpose                                                                 |
|--------------|-------------------------------------------------------------------------|
| `/`          | Hero section — name, title, short bio, CTA buttons                     |
| `/about`     | Longer personal story, skills, photo                                    |
| `/projects`  | Grid or list of projects pulled from `data/projects.ts`                 |
| `/resume`    | Timeline of experience + education + skills                             |
| `/interview` | Q&A format — personal questions with thoughtful answers                 |

---

## Components

| Component | File                          | Purpose                            |
|-----------|-------------------------------|------------------------------------|
| Navbar    | `components/Navbar.tsx`       | Site-wide navigation               |
| Footer    | `components/Footer.tsx`       | Copyright + social links           |

---

## Data Layer

| File                  | What it exports                  |
|-----------------------|----------------------------------|
| `data/profile.ts`     | `profile` — personal info object |
| `data/projects.ts`    | `projects` — array of projects   |

---

## Planned Features (future steps)

- [ ] Scramble text animation on the hero heading
- [ ] AI assistant / chat widget
- [ ] Dark mode toggle
- [ ] Project detail pages (`/projects/[slug]`)
- [ ] PDF resume download
- [ ] Contact form
- [ ] OG image generation for SEO
