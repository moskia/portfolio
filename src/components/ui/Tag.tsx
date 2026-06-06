// A small label for technologies, skills, or categories.
// Uses the mono font to give a subtle code/terminal feeling.
type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="font-mono rounded border border-border bg-neutral-950 px-2 py-0.5 text-xs text-neutral-400">
      {label}
    </span>
  );
}
