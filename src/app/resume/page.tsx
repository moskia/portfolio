export default function ResumePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900">
        Resume
      </h1>

      {/* Placeholder sections — we'll fill these in a future step */}
      <div className="space-y-10">
        <ResumeSection title="Experience">
          <PlaceholderEntry
            title="Job Title — Company"
            period="2022 – present"
            description="Short description of your role and what you accomplished."
          />
        </ResumeSection>

        <ResumeSection title="Education">
          <PlaceholderEntry
            title="Degree — University"
            period="2018 – 2022"
            description="Field of study and any relevant highlights."
          />
        </ResumeSection>

        <ResumeSection title="Skills">
          <p className="text-neutral-500">
            TypeScript · React · Next.js · Node.js · SQL · Git
          </p>
        </ResumeSection>
      </div>
    </section>
  );
}

// Small layout helpers — kept here because they're only used on this page.
function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-neutral-900">{title}</h2>
      <div className="border-l-2 border-neutral-200 pl-6">{children}</div>
    </div>
  );
}

function PlaceholderEntry({
  title,
  period,
  description,
}: {
  title: string;
  period: string;
  description: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between">
        <p className="font-medium text-neutral-800">{title}</p>
        <p className="text-sm text-neutral-400">{period}</p>
      </div>
      <p className="mt-1 text-neutral-600">{description}</p>
    </div>
  );
}
