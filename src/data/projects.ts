// Add your real projects here. Each project appears on the /projects page.
export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];       // e.g. ["React", "TypeScript", "API"]
  url?: string;         // optional live demo link
  github?: string;      // optional source code link
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project One",
    description: "A short description of what this project does and why you built it.",
    tags: ["Next.js", "TypeScript"],
    github: "https://github.com/yourusername/project-one",
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "Another project — replace this with your real work.",
    tags: ["React", "Tailwind CSS"],
    url: "https://project-two.vercel.app",
    github: "https://github.com/yourusername/project-two",
  },
];
