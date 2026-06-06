import ScrambleText from "./ScrambleText";

type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="font-mono rounded border border-border bg-neutral-950 px-2 py-0.5 text-xs text-neutral-400">
      <ScrambleText text={label} />
    </span>
  );
}
