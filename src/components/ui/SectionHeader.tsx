import ScrambleText from "./ScrambleText";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  label?: string;
  action?: React.ReactNode;
};

export default function SectionHeader({ title, subtitle, label, action }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex items-start justify-between gap-6">
      <div>
        {label && (
          <p className="font-mono font-medium mb-3 text-sm text-accent">
            <ScrambleText text={label} />
          </p>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-neutral-100">
          <ScrambleText text={title} />
        </h1>
        {subtitle && (
          <p className="mt-3 text-neutral-500">
            <ScrambleText text={subtitle} />
          </p>
        )}
      </div>
      {action && <div className="shrink-0 pt-1">{action}</div>}
    </div>
  );
}
