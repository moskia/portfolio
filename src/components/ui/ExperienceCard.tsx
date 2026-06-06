import ScrambleText from "./ScrambleText";

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export default function ExperienceCard({ role, company, period, description }: ExperienceEntry) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <span className="font-semibold text-neutral-100">
            <ScrambleText text={role} />
          </span>
          <span className="ml-2 text-neutral-500">
            — <ScrambleText text={company} />
          </span>
        </div>
        <span className="text-sm text-neutral-500">
          <ScrambleText text={period} />
        </span>
      </div>
      <p className="mt-2 text-neutral-400">
        <ScrambleText text={description} />
      </p>
    </div>
  );
}
