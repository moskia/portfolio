import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900">
        About me
      </h1>

      <div className="space-y-4 text-lg text-neutral-600">
        <p>{profile.bio}</p>
        <p>
          Based in {profile.location}. You can reach me at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="underline underline-offset-2 hover:text-neutral-900"
          >
            {profile.email}
          </a>
          .
        </p>
      </div>

      {/* Placeholder: skills, story, photo, etc. will go here */}
      <div className="mt-12 rounded-lg border border-dashed border-neutral-300 p-8 text-center text-neutral-400">
        More content coming soon — skills, story, photo…
      </div>
    </section>
  );
}
