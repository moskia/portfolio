import { profile } from "@/data/profile";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import ScrambleText from "@/components/ui/ScrambleText";

export default function AboutPage() {
  return (
    <PageContainer>
      <SectionHeader
        label="~/about"
        title="About me"
        subtitle="A bit about who I am and what I work with."
      />

      <div className="space-y-4 text-neutral-400 leading-relaxed">
        <p><ScrambleText text={profile.bio} /></p>
        <p>
          <ScrambleText text="Based in" />{" "}<ScrambleText text={profile.location} />{". "}
          <ScrambleText text="You can reach me at" />{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-neutral-200 underline underline-offset-2 transition-colors hover:text-accent"
          >
            <ScrambleText text={profile.email} />
          </a>
          .
        </p>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
          <ScrambleText text="Skills" />
        </h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-dashed border-border p-8 text-center text-neutral-600">
        More content coming — story, photo, timeline…
      </div>
    </PageContainer>
  );
}
