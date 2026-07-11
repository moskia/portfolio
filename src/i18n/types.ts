import type { ExperienceEntry } from "@/components/ui/ExperienceCard";
import type { Project } from "@/data/projects";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    projects: string;
    resume: string;
    interview: string;
  };
  home: {
    tagline: string;
    locationLine: string;
    viewProjects: string;
    downloadResume: string;
    inDepth: string;
    project: string;
    focusedOn: string;
  };
  about: {
    label: string;
    title: string;
    subtitle: string;
    basedIn: string;
    reachMe: string;
    writeOn: string;
    writeOnSuffix: string;
    skills: string;
    languages: string;
  };
  projectsPage: {
    label: string;
    title: string;
    subtitle: string;
  };
  resume: {
    label: string;
    title: string;
    subtitle: string;
    experience: string;
    education: string;
    projects: string;
    skills: string;
    downloadEn: string;
    downloadFr: string;
    live: string;
  };
  interview: {
    label: string;
    title: string;
    subtitle: string;
  };
  projectCard: {
    problem: string;
    built: string;
    learned: string;
    github: string;
    liveDemo: string;
  };
  profile: {
    name: string;
    title: string;
    headline: string;
    bio: string;
    location: string;
    email: string;
    focus: string[];
    spokenLanguages: { name: string; level: string }[];
  };
  experience: ExperienceEntry[];
  education: ExperienceEntry[];
  projects: Project[];
  qanda: { question: string; answer: string }[];
  resumePdf: string;
};
