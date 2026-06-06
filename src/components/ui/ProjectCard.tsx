import { type Project } from "@/data/projects";
import Card from "./Card";
import Tag from "./Tag";
import LinkButton from "./LinkButton";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    // Card handles the surface + border; the className adds a hover state.
    <Card className="transition-colors hover:border-neutral-700">
      <h2 className="mb-2 text-lg font-semibold text-neutral-100">
        {project.title}
      </h2>
      <p className="mb-4 text-sm text-neutral-400">{project.description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.github && (
          <LinkButton href={project.github} external>
            GitHub
          </LinkButton>
        )}
        {project.url && (
          <LinkButton href={project.url} external>
            Live demo
          </LinkButton>
        )}
      </div>
    </Card>
  );
}
