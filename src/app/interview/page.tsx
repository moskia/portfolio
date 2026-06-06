export default function InterviewPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-neutral-900">
        Interview
      </h1>
      <p className="mb-10 text-neutral-500">
        A curated Q&amp;A — questions I&apos;ve been asked, and my honest answers.
      </p>

      {/* Placeholder entries */}
      <div className="space-y-8">
        <QandA
          question="What kind of problems do you enjoy solving?"
          answer="Placeholder — write your real answer here."
        />
        <QandA
          question="How do you approach learning a new technology?"
          answer="Placeholder — write your real answer here."
        />
        <QandA
          question="What does a good day of work look like for you?"
          answer="Placeholder — write your real answer here."
        />
      </div>
    </section>
  );
}

function QandA({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <p className="mb-2 font-semibold text-neutral-900">Q: {question}</p>
      <p className="text-neutral-600">A: {answer}</p>
    </div>
  );
}
