import PageContainer from "@/components/layout/PageContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import ScrambleText from "@/components/ui/ScrambleText";

export default function InterviewPage() {
  return (
    <PageContainer>
      <SectionHeader
        label="~/interview"
        title="Interview"
        subtitle="Questions I've been asked, and my honest answers."
      />

      <ul className="space-y-4">
        {qanda.map(({ question, answer }) => (
          <li key={question}>
            <Card>
              <p className="font-mono mb-3 text-xs text-accent">
                Q: <ScrambleText text={question} />
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                <ScrambleText text={answer} />
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}

const qanda = [
  {
    question: "What kind of problems do you enjoy solving?",
    answer:   "Placeholder — write your real answer here.",
  },
  {
    question: "How do you approach learning a new technology?",
    answer:   "Placeholder — write your real answer here.",
  },
  {
    question: "What does a good day of work look like for you?",
    answer:   "Placeholder — write your real answer here.",
  },
];
