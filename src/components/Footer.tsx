import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 text-sm text-neutral-500">
        <span>
          © {year} {profile.name}
        </span>
        <div className="flex gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-200"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
