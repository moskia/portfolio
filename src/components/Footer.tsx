import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { links } from "@/i18n/dictionaries/en";
import ScrambleText from "@/components/ui/ScrambleText";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-ink-muted">
        <span>© {year} <ScrambleText text={t.profile.name} onScroll={false} /></span>
        <div className="flex gap-6">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            <ScrambleText text="GitHub" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            <ScrambleText text="LinkedIn" />
          </a>
          <a href={links.medium} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            <ScrambleText text="Medium" />
          </a>
        </div>
      </div>
    </footer>
  );
}
