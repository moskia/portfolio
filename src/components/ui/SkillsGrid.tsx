import ScrambleText from "./ScrambleText";

export type SkillCategory = {
  name: string;
  description?: string;
  skills: string[];
};

type SkillsGridProps = {
  categories: SkillCategory[];
};

export default function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {categories.map((category) => (
        <div
          key={category.name}
          className="rounded-2xl border border-border bg-bg p-6 shadow-sm"
        >
          <h3 className="mb-1 text-sm font-semibold tracking-wide text-ink">
            <ScrambleText text={category.name} onHover={false} />
          </h3>

          {category.description && (
            <p className="mb-4 text-xs leading-relaxed text-ink-muted">
              {category.description}
            </p>
          )}

          <ul className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-xs font-medium text-ink-muted"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
