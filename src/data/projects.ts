export type Project = {
  id:          string;
  title:       string;
  description: string;   // one-liner shown at the top of the card
  problem:     string;   // what problem did you solve, and why did it matter?
  solution:    string;   // what did you build, and what are the key decisions?
  learned:     string;   // what did you take away — a pattern, a tool, an insight?
  stack:       string[]; // technologies used
  url?:        string;   // optional live demo
  github?:     string;   // optional source code
};

export const projects: Project[] = [
  {
    id:          "milo",
    title:       "MILO — Local-First AI Learning Companion",
    description: "A Chrome extension and local agent that turns web browsing into structured learning — entirely on-device.",
    problem:
      "Learning from the web leaves knowledge scattered across tabs and highlights. Most AI tools send your notes to the cloud, which is a non-starter for private study material. I wanted a way to capture what I learn, search it by meaning, and get summaries, gap analysis, and quizzes — without data ever leaving the machine.",
    solution:
      "Architected a TypeScript pnpm monorepo with three packages: a Chrome MV3 extension for capture and on-device enrichment, a shared core for typed contracts and swappable AI interfaces, and a local agent app for RAG retrieval and learning features (summarize, gaps, chat, quiz). Notes are embedded with MiniLM, indexed semantically, and queried via Gemini Nano's on-device Prompt API.",
    learned:
      "Edge inference forces real trade-offs: context window limits, chunking strategy, and retrieval fallbacks matter as much as model choice. Designing a swappable AI layer early kept capture and agent logic clean when providers changed.",
    stack: ["TypeScript", "Chrome MV3", "Gemini Nano", "RAG", "pnpm", "React"],
    github: "https://github.com/moskia/MILO",
  },
  {
    id:          "ai-code-reviewer",
    title:       "AI Code Reviewer",
    description: "An LLM-powered code review pipeline that analyzes repositories and returns structured diagnostics.",
    problem:
      "Manual code review doesn't scale, and ad-hoc LLM prompts produce inconsistent feedback. Teams need automated, repeatable review that catches bugs and style issues early — ideally embedded directly in the development workflow.",
    solution:
      "Built a composable review pipeline: fetch repo contents via GitHub's Tree API, prioritize application code over config, summarize files into token-friendly previews, and invoke an LLM for structured JSON output (bugs, style, security notes). Packaged as a REST API with Docker support, test coverage, and CI — designed so additional rule sets and linters can plug in without architectural changes.",
    learned:
      "The hard part isn't calling an LLM — it's normalizing input, bounding token usage, and formatting output so humans actually act on it. Truncation policies and clear '(analysis truncated)' signals build trust more than pretending to review everything.",
    stack: ["TypeScript", "Python", "FastAPI", "Mistral AI", "GitHub API", "Docker", "CI/CD"],
    github: "https://github.com/moskia/mistralai-code-reviewer",
  },
  {
    id:          "ban-hr-workflow",
    title:       "HR Document Workflow",
    description: "A Spring Boot system that digitized a manual HR document process for 100 employees.",
    problem:
      "HR document handling at Business Action Network relied on email chains and manual validation — slow, error-prone, and impossible to audit. Turnaround took up to a full day per document.",
    solution:
      "Designed and built a Spring Boot backend with RBAC, electronic signatures, and multi-step validation. Modeled the full document lifecycle in PostgreSQL (draft → review → signed → archived) with layered role enforcement across REST endpoints, plus Angular components for the user-facing workflow.",
    learned:
      "Workflow systems are mostly about state machines and permissions. Getting the PostgreSQL schema and role enforcement right upfront made every API endpoint simpler and prevented business-rule leaks.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Angular", "REST APIs", "RBAC"],
  },
];
