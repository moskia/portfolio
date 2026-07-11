import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import ScrambleText from "@/components/ui/ScrambleText";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function InterviewPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);

  return (
    <PageContainer>
      <SectionHeader
        label={t.interview.label}
        title={t.interview.title}
        subtitle={t.interview.subtitle}
      />

      <ul className="space-y-4">
        {t.qanda.map(({ question, answer }) => (
          <li key={question}>
            <Card>
              <p className="font-mono mb-3 text-xs text-accent">
                Q: <ScrambleText text={question} />
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">{answer}</p>
            </Card>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
