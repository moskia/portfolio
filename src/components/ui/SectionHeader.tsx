// Page heading block.
// `label`    — optional monospace eyebrow (e.g. "~/projects"), shown in accent color
// `title`    — the main h1
// `subtitle` — optional muted line below the title
type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  label?: string;
};

export default function SectionHeader({ title, subtitle, label }: SectionHeaderProps) {
  return (
    <div className="mb-10">
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
  );
}
