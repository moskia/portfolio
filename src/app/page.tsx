import { profile } from "@/data/profile";
import PageContainer from "@/components/layout/PageContainer";
import LinkButton from "@/components/ui/LinkButton";
import Tag from "@/components/ui/Tag";

export default function HomePage() {
  return (
    <PageContainer>
      <div className="py-20">

        {/* Route label — same style as every other page */}
        <p className="font-mono font-medium mb-3 text-sm text-accent">~/home</p>

        {/* Name — the largest, most prominent element */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-neutral-100">
          Hi, I&apos;m {profile.name}.
        </h1>

        {/* Subtitle — one strong sentence, clearly smaller than the name */}
        <p className="mb-10 max-w-xl text-xl leading-relaxed text-neutral-300">
          {profile.headline}
        </p>

        {/* CTAs — primary action first, secondary actions after */}
        <div className="mb-14 flex flex-wrap gap-3">
          <LinkButton href="/projects" variant="primary">
            View Projects
          </LinkButton>
          {/* AI assistant not implemented yet — links to the Interview page for now */}
          <LinkButton href="/interview" variant="ghost">
            Ask AI Amine
          </LinkButton>
          {/* Points to /resume for now — swap href for a PDF URL when ready */}
          <LinkButton href="/resume" variant="ghost">
            Download Resume
          </LinkButton>
        </div>

        {/* Current focus — understated footer line, technical and specific */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-neutral-600">currently focused on</span>
          {profile.focus.map((item) => (
            <Tag key={item} label={item} />
          ))}
        </div>

      </div>
    </PageContainer>
  );
}
