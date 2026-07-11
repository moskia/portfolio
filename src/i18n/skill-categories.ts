import type { Locale } from "./config";
import type { SkillCategory } from "@/components/ui/SkillsGrid";

const SKILL_ITEMS = {
  languages: ["TypeScript", "JavaScript", "Java", "Python", "Bash"],
  backend:   ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  frontend:  ["Angular", "React", "Next.js", "HTML", "CSS", "RxJS"],
  databases: ["PostgreSQL", "SQL", "Elasticsearch", "Data modeling"],
  cloud:     ["Docker", "Kubernetes", "Terraform", "Linux", "Git", "CI/CD"],
  quality:   ["Unit testing", "Integration testing", "Code review", "Debugging", "RAG", "LLM", "Agile/Scrum"],
} as const;

const LABELS: Record<Locale, Record<keyof typeof SKILL_ITEMS, { name: string; description: string }>> = {
  en: {
    languages: { name: "Languages",              description: "What I write day to day." },
    backend:   { name: "Backend",                description: "APIs and server-side logic." },
    frontend:  { name: "Frontend",               description: "Interfaces shipped to production." },
    databases: { name: "Databases & search",     description: "Modeling, queries, and indexing." },
    cloud:     { name: "Cloud & DevOps",         description: "From container to deployment." },
    quality:   { name: "Quality & AI",           description: "How I work — and where I use LLMs." },
  },
  fr: {
    languages: { name: "Langages",               description: "Ce que j'utilise au quotidien." },
    backend:   { name: "Backend",                description: "APIs et logique côté serveur." },
    frontend:  { name: "Frontend",               description: "Interfaces livrées en production." },
    databases: { name: "Bases de données & search", description: "Modélisation, requêtes et indexation." },
    cloud:     { name: "Cloud & DevOps",         description: "Du conteneur au déploiement." },
    quality:   { name: "Qualité & IA",           description: "Ma façon de travailler — et l'usage des LLM." },
  },
};

export function getSkillCategories(locale: Locale): SkillCategory[] {
  return (Object.keys(SKILL_ITEMS) as (keyof typeof SKILL_ITEMS)[]).map((key) => ({
    name:        LABELS[locale][key].name,
    description: LABELS[locale][key].description,
    skills:      [...SKILL_ITEMS[key]],
  }));
}
