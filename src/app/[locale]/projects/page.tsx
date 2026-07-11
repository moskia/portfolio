import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);

  return (
    <PageContainer>
      <SectionHeader
        label={t.projectsPage.label}
        title={t.projectsPage.title}
        subtitle={t.projectsPage.subtitle}
      />

      <ul className="space-y-8">
        {t.projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} labels={t.projectCard} />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
