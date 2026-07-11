import { type ExperienceEntry } from "@/components/ui/ExperienceCard";

export const experience: ExperienceEntry[] = [
  {
    role:        "Software Engineering Intern",
    company:     "Padoa",
    period:      "Mar 2026 – Present",
    description:
      "Full-stack development on a production occupational-health SaaS platform. Delivered a feature end-to-end — REST API, business logic, Angular frontend, automated tests, and progressive rollout via feature flags. Diagnosed and eliminated a critical data-access bottleneck, achieving a 50% CPU reduction on a high-throughput pipeline for enterprise accounts including Airbus and Thales. Executed a backward-compatible PostgreSQL schema migration across multiple services with SQL and Elasticsearch query refactors.",
  },
  {
    role:        "Infrastructure & Automation Intern",
    company:     "CMI France",
    period:      "Jun 2025 – Aug 2025",
    description:
      "Built automated monitoring workflows in Bash and Python, eliminating ~30% of recurring manual checks. Audited 500+ user accounts, uncovered potential LOLBin attack surface in existing configurations, and produced a structured security report that informed hardening decisions.",
  },
  {
    role:        "Software Engineering Intern",
    company:     "Business Action Network",
    period:      "Jun 2024 – Aug 2024",
    description:
      "Replaced a fully manual, email-based HR process with a Spring Boot backend (RBAC, electronic signatures, multi-step validation), cutting document turnaround from one day to a few hours across 100 employees. Modeled the full document lifecycle in PostgreSQL and enforced business rules at every stage through the REST API.",
  },
];

export const education: ExperienceEntry[] = [
  {
    role:        "Master's-level Engineering Degree in Computer Science",
    company:     "ENSEEIHT – INP Toulouse",
    period:      "2023 – 2026",
    description:
      "Coursework in algorithms, data structures, OOP, distributed systems, databases, cloud computing, networking, and software design.",
  },
  {
    role:        "Classe Préparatoire aux Grandes Écoles (MPSI/MP)",
    company:     "CPGE, Casablanca",
    period:      "2020 – 2023",
    description:
      "Intensive preparation in mathematics, computer science, and physics.",
  },
];
