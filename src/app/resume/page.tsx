import { profile } from "@/data/profile";
import { experience, education } from "@/data/experience";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";
import Tag from "@/components/ui/Tag";

export default function ResumePage() {
  return (
    <PageContainer>
      <SectionHeader
        label="~/resume"
        title="Resume"
        subtitle="Experience, education, and skills."
      />

      <div className="space-y-12">
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

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {title}
      </h2>
      {/* Accent line under the section title */}
      <div className="mb-5 h-px w-8 bg-accent" />
      <div className="border-l border-border pl-6">{children}</div>
    </div>
  );
}
