import { profile } from "@/data/profile";
import PageContainer from "@/components/layout/PageContainer";
import LinkButton from "@/components/ui/LinkButton";

export default function HomePage() {
  return (
    <PageContainer>
      <div className="py-16">
        {/* Monospace eyebrow — sets the technical tone immediately */}
        <p className="font-mono font-medium mb-3 text-sm text-accent">
          {profile.title.toLowerCase()} · {profile.location.toLowerCase()}
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-100">
          Hi, I&apos;m {profile.name}.
        </h1>

        <p className="mb-10 max-w-lg text-neutral-400 leading-relaxed">
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-3">
          <LinkButton href="/projects" variant="primary">
            See my work
          </LinkButton>
          <LinkButton href="/about" variant="ghost">
            About me
          </LinkButton>
        </div>
      </div>
    </PageContainer>
  );
}
