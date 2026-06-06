// One entry in the experience or education timeline on the Resume page.
// `role` is the job title or degree, `company` is where you worked/studied.
export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export default function ExperienceCard({ role, company, period, description }: ExperienceEntry) {
  return (
    <div className="mb-6 last:mb-0">
      {/* Top row: role + company on the left, date range on the right */}
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <span className="font-semibold text-neutral-100">{role}</span>
          <span className="ml-2 text-neutral-500">— {company}</span>
        </div>
        <span className="text-sm text-neutral-500">{period}</span>
      </div>
      <p className="mt-2 text-neutral-400">{description}</p>
    </div>
  );
}
