// Page heading block.
// `label`    — optional monospace eyebrow (e.g. "~/projects"), shown in accent color
// `title`    — the main h1
// `subtitle` — optional muted line below the title
// `action`   — optional element rendered on the right (e.g. a download button)
type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  label?: string;
  action?: React.ReactNode;
};

export default function SectionHeader({ title, subtitle, label, action }: SectionHeaderProps) {
  return (
    // `items-start` keeps the action button aligned to the top of the heading block,
    // not stretched to the full height if the title wraps to two lines.
    <div className="mb-10 flex items-start justify-between gap-6">
      <div>
        {label && (
          <p className="font-mono font-medium mb-3 text-sm text-accent">{label}</p>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-neutral-100">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-neutral-500">{subtitle}</p>
        )}
      </div>

      {/* The action slot — rendered only when a value is passed */}
      {action && <div className="shrink-0 pt-1">{action}</div>}
    </div>
  );
}
