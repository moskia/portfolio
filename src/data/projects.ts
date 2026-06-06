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
    id: "project-1",
    title: "Project One",
    description: "A full-stack web application for [what it does — replace this].",
    problem:
      "Describe the problem you noticed or were assigned. What made it worth solving, and who was affected by it?",
    solution:
      "Describe what you built to address it. What are the main features, the architecture, or the technical decisions you made?",
    learned:
      "What did you take away from building this? A new pattern, a tool you discovered, or a mistake you won't repeat.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/moskia/project-one",
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "A developer tool that [what it does — replace this].",
    problem:
      "Describe the problem you noticed or were assigned.",
    solution:
      "Describe what you built to address it.",
    learned:
      "What did you take away from building this?",
    stack: ["React", "Node.js", "OpenAI API", "TypeScript"],
    url:    "https://project-two.vercel.app",
    github: "https://github.com/moskia/project-two",
  },
];
