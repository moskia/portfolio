import { type Project } from "@/data/projects";
import Card from "./Card";
import Tag from "./Tag";
import LinkButton from "./LinkButton";
import ScrambleText from "./ScrambleText";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="transition-colors hover:border-neutral-700">

      <h2 className="mb-1 text-xl font-semibold text-neutral-100">
        <ScrambleText text={project.title} />
      </h2>
      <p className="mb-6 text-sm text-neutral-500">
        <ScrambleText text={project.description} />
      </p>

      <div className="mb-6 space-y-5 border-t border-neutral-800 pt-5">
        <CaseStudyRow label="Problem"        text={project.problem}  />
        <CaseStudyRow label="What I built"   text={project.solution} />
        <CaseStudyRow label="What I learned" text={project.learned}  />
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.github && (
          <LinkButton href={project.github} external>
            <ScrambleText text="GitHub" />
          </LinkButton>
        )}
        {project.url && (
          <LinkButton href={project.url} external>
            <ScrambleText text="Live demo" />
          </LinkButton>
        )}
      </div>

    </Card>
  );
}

function CaseStudyRow({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-mono mb-1 text-xs text-neutral-500">
        <ScrambleText text={label} />
      </p>
      <p className="text-sm leading-relaxed text-neutral-300">
        <ScrambleText text={text} />
      </p>
    </div>
  );
}
