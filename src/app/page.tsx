import Link from "next/link";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-start justify-center px-6 py-32">
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-neutral-400">
        Welcome
      </p>
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-neutral-900">
        Hi, I&apos;m {profile.name}.
      </h1>
      <p className="mb-8 max-w-xl text-lg text-neutral-600">{profile.bio}</p>

      <div className="flex gap-4">
        <Link
          href="/projects"
          className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          See my work
        </Link>
        <Link
          href="/about"
          className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-900"
        >
          About me
        </Link>
      </div>
    </section>
  );
}
