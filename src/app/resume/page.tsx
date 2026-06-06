import { profile } from "@/data/profile";
import { experience, education } from "@/data/experience";
import { projects, type Project } from "@/data/projects";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";
import Tag from "@/components/ui/Tag";
import LinkButton from "@/components/ui/LinkButton";
import ScrambleText from "@/components/ui/ScrambleText";

export default function ResumePage() {
  return (
    <PageContainer>
      <SectionHeader
        label="~/resume"
        title="Resume"
        subtitle="Experience, education, projects, and skills."
        action={
          <LinkButton href="/resume.pdf" download variant="ghost">
            <ScrambleText text="↓ Download PDF" />
          </LinkButton>
        }
      />

      <div className="space-y-14">

        <ResumeSection title="Experience">
          {experience.map((entry) => (
            <ExperienceCard key={entry.role} {...entry} />
          ))}
        </ResumeSection>

        <ResumeSection title="Education">
          {education.map((entry) => (
            <ExperienceCard key={entry.role} {...entry} />
          ))}
        </ResumeSection>

        <ResumeSection title="Projects">
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </ResumeSection>

        <ResumeSection title="Skills">
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </ResumeSection>

      </div>
    </PageContainer>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-neutral-500">
        <ScrambleText text={title} />
      </h2>
      <div className="mb-5 h-px w-8 bg-accent" />
      <div className="border-l border-border pl-6">{children}</div>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="font-semibold text-neutral-100">
          <ScrambleText text={project.title} />
        </span>
        <div className="flex gap-4 text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 underline underline-offset-2 transition-colors hover:text-neutral-200"
            >
              <ScrambleText text="GitHub" />
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 underline underline-offset-2 transition-colors hover:text-neutral-200"
            >
              <ScrambleText text="Live" />
            </a>
          )}
        </div>
      </div>
      <p className="mb-2 text-sm text-neutral-400">
        <ScrambleText text={project.description} />
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
