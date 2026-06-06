import { projects } from "@/data/projects";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <PageContainer>
      <SectionHeader
        label="~/projects"
        title="Projects"
        subtitle="A selection of things I've built."
      />

      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
