import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-neutral-900">
        Projects
      </h1>
      <p className="mb-10 text-neutral-500">
        A selection of things I&apos;ve built.
      </p>

      <ul className="space-y-6">
        {projects.map((project) => (
          <li
            key={project.id}
            className="rounded-lg border border-neutral-200 p-6 transition-shadow hover:shadow-sm"
          >
            <h2 className="mb-1 text-xl font-semibold text-neutral-900">
              {project.title}
            </h2>
            <p className="mb-4 text-neutral-600">{project.description}</p>

            {/* Tag list */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-0.5 text-xs text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Optional links */}
            <div className="flex gap-4 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 underline underline-offset-2 hover:text-neutral-900"
                >
                  GitHub
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 underline underline-offset-2 hover:text-neutral-900"
                >
                  Live demo
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
