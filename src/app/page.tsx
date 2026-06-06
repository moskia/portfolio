import { profile } from "@/data/profile";
import PageContainer from "@/components/layout/PageContainer";
import LinkButton from "@/components/ui/LinkButton";
import Tag from "@/components/ui/Tag";
import ScrambleText from "@/components/ui/ScrambleText";

export default function HomePage() {
  return (
    <PageContainer>
      <div className="py-20">

        <p className="font-mono font-medium mb-3 text-sm text-accent">
          <ScrambleText text="~/home" delay={0} />
        </p>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-neutral-100">
          Hi, I&apos;m <ScrambleText text={profile.name} delay={250} />.
        </h1>

        <p className="mb-10 max-w-xl text-xl leading-relaxed text-neutral-300">
          <ScrambleText text={profile.headline} />
        </p>

        <div className="mb-14 flex flex-wrap gap-3">
          <LinkButton href="/projects" variant="primary">
            <ScrambleText text="View Projects" />
          </LinkButton>
          <LinkButton href="/interview" variant="ghost">
            <ScrambleText text="Ask AI Amine" />
          </LinkButton>
          <LinkButton href="/resume" variant="ghost">
            <ScrambleText text="Download Resume" />
          </LinkButton>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-neutral-600">
            <ScrambleText text="currently focused on" />
          </span>
          {profile.focus.map((item) => (
            <Tag key={item} label={item} />
          ))}
        </div>

      </div>
    </PageContainer>
  );
}
