import type { Dictionary } from "../types";

const links = {
  github:   "https://github.com/moskia",
  linkedin: "https://www.linkedin.com/in/mohamed-amine-benkia-a9a026379/",
  medium:   "https://medium.com/@mabenkia612",
};

export const en: Dictionary = {
  meta: {
    title: "Amine Benkia — Portfolio",
    description:
      "Software Engineering graduate from ENSEEIHT. Full-stack & backend developer building production SaaS systems and AI-powered developer tools.",
  },
  nav: {
    about:     "About",
    projects:  "Projects",
    resume:    "Resume",
    interview: "Interview",
  },
  home: {
    tagline:        "Software Engineering",
    locationLine:   "Paris, France · ENSEEIHT · Padoa",
    viewProjects:   "View projects",
    downloadResume: "Download resume",
    inDepth:        "In depth",
    project:        "Project",
    focusedOn:      "Currently focused on",
  },
  about: {
    label:          "About",
    title:          "About me",
    subtitle:       "A bit about who I am and what I work with.",
    basedIn:        "Based in",
    reachMe:        "You can reach me at",
    writeOn:        "I also write on",
    writeOnSuffix:  "from time to time.",
    skills:         "Skills",
    languages:      "Languages",
  },
  projectsPage: {
    label:    "Projects",
    title:    "What I've built",
    subtitle: "A selection of things I've built — from production systems to side projects.",
  },
  resume: {
    label:      "Resume",
    title:      "Resume",
    subtitle:   "Experience, education, projects, and skills.",
    experience: "Experience",
    education:  "Education",
    projects:   "Projects",
    skills:     "Skills",
    downloadEn: "↓ EN",
    downloadFr: "↓ FR",
    live:       "Live",
  },
  interview: {
    label:    "Interview",
    title:    "Interview",
    subtitle: "Questions I've been asked, and my honest answers.",
  },
  projectCard: {
    problem:  "Problem",
    built:    "What I built",
    learned:  "What I learned",
    github:   "GitHub",
    liveDemo: "Live demo",
  },
  profile: {
    name:     "Amine Benkia",
    title:    "Software Engineering",
    headline:
      "Software Engineering graduate building full-stack production systems and AI-powered developer tools.",
    bio:
      "I'm a Software Engineering graduate from ENSEEIHT (INP Toulouse), currently completing my end-of-studies internship at Padoa on a production SaaS platform used by large organizations. I like owning features end-to-end — diagnosing bottlenecks, shipping APIs and frontends, writing tests, and validating in production. I'm especially drawn to embedding AI into the engineering workflow: LLM code review, local RAG assistants, and CI automation.",
    location: "Paris, France",
    email:    "mabenkia612@gmail.com",
    focus: ["AI code review", "CI automation", "full-stack engineering"],
    spokenLanguages: [
      { name: "English", level: "Professional (C1)" },
      { name: "French",  level: "Fluent" },
      { name: "Arabic",  level: "Native" },
    ],
  },
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Padoa",
      period: "Mar 2026 – Present",
      description:
        "Full-stack development on a production occupational-health SaaS platform. Delivered a feature end-to-end — REST API, business logic, Angular frontend, automated tests, and progressive rollout via feature flags. Diagnosed and eliminated a critical data-access bottleneck, achieving a 50% CPU reduction on a high-throughput pipeline for enterprise accounts including Airbus and Thales. Executed a backward-compatible PostgreSQL schema migration across multiple services with SQL and Elasticsearch query refactors.",
    },
    {
      role: "Infrastructure & Automation Intern",
      company: "CMI France",
      period: "Jun 2025 – Aug 2025",
      description:
        "Built automated monitoring workflows in Bash and Python, eliminating ~30% of recurring manual checks. Audited 500+ user accounts, uncovered potential LOLBin attack surface in existing configurations, and produced a structured security report that informed hardening decisions.",
    },
    {
      role: "Software Engineering Intern",
      company: "Business Action Network",
      period: "Jun 2024 – Aug 2024",
      description:
        "Replaced a fully manual, email-based HR process with a Spring Boot backend (RBAC, electronic signatures, multi-step validation), cutting document turnaround from one day to a few hours across 100 employees. Modeled the full document lifecycle in PostgreSQL and enforced business rules at every stage through the REST API.",
    },
  ],
  education: [
    {
      role: "Master's-level Engineering Degree in Computer Science",
      company: "ENSEEIHT – INP Toulouse",
      period: "2023 – 2026",
      description:
        "Coursework in algorithms, data structures, OOP, distributed systems, databases, cloud computing, networking, and software design.",
    },
    {
      role: "Classe Préparatoire aux Grandes Écoles (MPSI/MP)",
      company: "CPGE, Casablanca",
      period: "2020 – 2023",
      description:
        "Intensive preparation in mathematics, computer science, and physics.",
    },
  ],
  projects: [
    {
      id: "milo",
      title: "MILO — Local-First AI Learning Companion",
      description: "A Chrome extension and local agent that turns web browsing into structured learning — entirely on-device.",
      problem:
        "Learning from the web leaves knowledge scattered across tabs and highlights. Most AI tools send your notes to the cloud, which is a non-starter for private study material. I wanted a way to capture what I learn, search it by meaning, and get summaries, gap analysis, and quizzes — without data ever leaving the machine.",
      solution:
        "Architected a TypeScript pnpm monorepo with three packages: a Chrome MV3 extension for capture and on-device enrichment, a shared core for typed contracts and swappable AI interfaces, and a local agent app for RAG retrieval and learning features (summarize, gaps, chat, quiz). Notes are embedded with MiniLM, indexed semantically, and queried via Gemini Nano's on-device Prompt API.",
      learned:
        "Edge inference forces real trade-offs: context window limits, chunking strategy, and retrieval fallbacks matter as much as model choice. Designing a swappable AI layer early kept capture and agent logic clean when providers changed.",
      stack: ["TypeScript", "Chrome MV3", "Gemini Nano", "RAG", "pnpm", "React"],
      github: links.github + "/MILO",
    },
    {
      id: "ai-code-reviewer",
      title: "AI Code Reviewer",
      description: "An LLM-powered code review pipeline that analyzes repositories and returns structured diagnostics.",
      problem:
        "Manual code review doesn't scale, and ad-hoc LLM prompts produce inconsistent feedback. Teams need automated, repeatable review that catches bugs and style issues early — ideally embedded directly in the development workflow.",
      solution:
        "Built a composable review pipeline: fetch repo contents via GitHub's Tree API, prioritize application code over config, summarize files into token-friendly previews, and invoke an LLM for structured JSON output (bugs, style, security notes). Packaged as a REST API with Docker support, test coverage, and CI — designed so additional rule sets and linters can plug in without architectural changes.",
      learned:
        "The hard part isn't calling an LLM — it's normalizing input, bounding token usage, and formatting output so humans actually act on it. Truncation policies and clear '(analysis truncated)' signals build trust more than pretending to review everything.",
      stack: ["TypeScript", "Python", "FastAPI", "Mistral AI", "GitHub API", "Docker", "CI/CD"],
      github: links.github + "/mistralai-code-reviewer",
    },
    {
      id: "ban-hr-workflow",
      title: "HR Document Workflow",
      description: "A Spring Boot system that digitized a manual HR document process for 100 employees.",
      problem:
        "HR document handling at Business Action Network relied on email chains and manual validation — slow, error-prone, and impossible to audit. Turnaround took up to a full day per document.",
      solution:
        "Designed and built a Spring Boot backend with RBAC, electronic signatures, and multi-step validation. Modeled the full document lifecycle in PostgreSQL (draft → review → signed → archived) with layered role enforcement across REST endpoints, plus Angular components for the user-facing workflow.",
      learned:
        "Workflow systems are mostly about state machines and permissions. Getting the PostgreSQL schema and role enforcement right upfront made every API endpoint simpler and prevented business-rule leaks.",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Angular", "REST APIs", "RBAC"],
    },
  ],
  qanda: [
    {
      question: "What kind of problems do you enjoy solving?",
      answer:
        "Production problems with a clear before-and-after. At Padoa, I traced a data-access bottleneck through logs, slow-query profiling, and cross-service call chains — then cut CPU usage by 50% on a pipeline serving enterprise accounts. I like that kind of work: find the root cause, fix it properly, and validate it live. I'm equally drawn to building tools that make engineering faster — LLM code review, CI automation, local AI assistants.",
    },
    {
      question: "How do you approach learning a new technology?",
      answer:
        "I learn by building something real with it, not by reading docs in isolation. When I wanted to understand on-device AI, I built MILO — a full Chrome extension + RAG pipeline running locally with Gemini Nano. That forced me to deal with context limits, chunking, and retrieval fallbacks in practice. I also write down what I learn (my notes become the test data), which keeps the feedback loop tight.",
    },
    {
      question: "What does a good day of work look like for you?",
      answer:
        "Shipping something end-to-end and seeing it work in production. A good day might be designing an API, implementing the frontend integration, writing tests, and rolling out behind a feature flag — then watching it behave correctly with real data. I also value days spent debugging hard problems: correlating logs, profiling queries, and restoring system behavior without user impact.",
    },
    {
      question: "Why software engineering?",
      answer:
        "I like building systems that other people rely on. Software engineering sits at the intersection of logic, design, and impact — you can go deep on a performance problem in the morning and ship a user-facing feature in the afternoon. The field also keeps evolving, which means there's always something new worth learning and applying.",
    },
    {
      question: "What are you looking for next?",
      answer:
        "A full-time software engineering role where I can own features end-to-end in production. I'm strongest in TypeScript/Node.js and Java/Spring Boot backends, with growing depth in AI-augmented engineering — RAG, LLM integrations, and CI tooling. I want to keep working on systems that matter, with a team that values clean code, good debugging, and shipping reliably.",
    },
  ],
  resumePdf: "/resume-en.pdf",
};

export { links };
