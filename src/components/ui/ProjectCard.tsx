import { type Project } from "@/data/projects";
import Card from "./Card";
import Tag from "./Tag";
import LinkButton from "./LinkButton";
import ScrambleText from "./ScrambleText";

type ProjectCardLabels = {
  problem: string;
  built: string;
  learned: string;
  github: string;
  liveDemo: string;
};

type ProjectCardProps = {
  project: Project;
  labels: ProjectCardLabels;
};

export default function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">

      <h2 className="mb-2 text-2xl font-bold text-ink">
        <ScrambleText text={project.title} />
      </h2>
      <p className="mb-8 text-ink-muted">
        <ScrambleText text={project.description} onHover={false} />
      </p>

      <div className="mb-8 space-y-6 border-t border-border pt-8">
        <CaseStudyRow label={labels.problem}  text={project.problem}  />
        <CaseStudyRow label={labels.built}    text={project.solution} />
        <CaseStudyRow label={labels.learned}  text={project.learned}  />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.github && (
          <LinkButton href={project.github} external>
            <ScrambleText text={labels.github} />
          </LinkButton>
        )}
        {project.url && (
          <LinkButton href={project.url} external>
            <ScrambleText text={labels.liveDemo} />
          </LinkButton>
        )}
      </div>

    </Card>
  );
}

function CaseStudyRow({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold tracking-[0.12em] text-ink-light uppercase">
        <ScrambleText text={label} />
      </p>
      <p className="leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}
