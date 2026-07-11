import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import PageContainer from "@/components/layout/PageContainer";
import LinkButton from "@/components/ui/LinkButton";
import Tag from "@/components/ui/Tag";
import ScrambleText from "@/components/ui/ScrambleText";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  const featured = t.projects.slice(0, 2);

  return (
    <div>
      <section className="border-b border-border">
        <PageContainer>
          <p className="mb-6 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase">
            <ScrambleText text={t.home.tagline} delay={0} />
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-ink md:text-7xl">
            <ScrambleText text={t.profile.name} delay={150} />
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-muted md:text-2xl">
            <ScrambleText text={t.profile.headline} onHover={false} delay={300} />
          </p>

          <p className="mt-4 text-sm text-ink-light">
            <ScrambleText text={t.home.locationLine} onHover={false} delay={450} />
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <LinkButton href={`/${locale}/projects`} variant="primary">
              <ScrambleText text={t.home.viewProjects} />
            </LinkButton>
            <LinkButton href={t.resumePdf} download variant="ghost">
              <ScrambleText text={t.home.downloadResume} />
            </LinkButton>
          </div>
        </PageContainer>
      </section>

      <section className="bg-bg-subtle">
        <PageContainer>
          <p className="mb-8 text-xs font-semibold tracking-[0.15em] text-accent uppercase">
            <ScrambleText text={t.home.inDepth} />
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <Link
                key={project.id}
                href={`/${locale}/projects`}
                className="group rounded-2xl border border-border bg-bg p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-ink-light uppercase">
                  <ScrambleText text={t.home.project} onHover={false} />
                </p>
                <h2 className="text-2xl font-bold text-ink group-hover:text-accent transition-colors">
                  <ScrambleText text={project.title} />
                </h2>
                <p className="mt-4 leading-relaxed text-ink-muted">{project.description}</p>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      <section>
        <PageContainer>
          <p className="mb-6 text-xs font-semibold tracking-[0.15em] text-ink-light uppercase">
            <ScrambleText text={t.home.focusedOn} onHover={false} />
          </p>
          <div className="flex flex-wrap gap-3">
            {t.profile.focus.map((item) => (
              <Tag key={item} label={item} />
            ))}
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
