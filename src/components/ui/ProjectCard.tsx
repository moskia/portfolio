import { type Project } from "@/data/projects";
import Card from "./Card";
import Tag from "./Tag";
import LinkButton from "./LinkButton";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="transition-colors hover:border-neutral-700">

      {/* ── Header ─────────────────────────────────────────── */}
      <h2 className="mb-1 text-xl font-semibold text-neutral-100">
        {project.title}
      </h2>
      <p className="mb-6 text-sm text-neutral-500">{project.description}</p>

      {/* ── Case study body ─────────────────────────────────── */}
      {/* A thin line separates the intro from the detail rows  */}
      <div className="mb-6 space-y-5 border-t border-neutral-800 pt-5">
        <CaseStudyRow label="Problem"       text={project.problem}  />
        <CaseStudyRow label="What I built"  text={project.solution} />
        <CaseStudyRow label="What I learned" text={project.learned}  />
      </div>

      {/* ── Stack ───────────────────────────────────────────── */}
      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>

      {/* ── Links ───────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3">
        {project.github && (
          <LinkButton href={project.github} external>GitHub</LinkButton>
        )}
        {project.url && (
          <LinkButton href={project.url} external>Live demo</LinkButton>
        )}
      </div>

    </Card>
  );
}

// ── Local helper ─────────────────────────────────────────────────────────────
// Only ProjectCard uses this, so it lives here rather than in components/ui/.
// The monospace label sits on its own line above the text — easy to scan.
function CaseStudyRow({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-mono mb-1 text-xs text-neutral-500">{label}</p>
      <p className="text-sm leading-relaxed text-neutral-300">{text}</p>
    </div>
  );
}
