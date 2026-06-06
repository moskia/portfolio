import Link from "next/link";
import { profile } from "@/data/profile";
import ScrambleText from "@/components/ui/ScrambleText";

const navLinks = [
  { href: "/about",     label: "About" },
  { href: "/projects",  label: "Projects" },
  { href: "/resume",    label: "Resume" },
  { href: "/interview", label: "Interview" },
];

export default function Navbar() {
  return (
    <header className="border-b border-border bg-neutral-950">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-baseline gap-0.5 font-semibold tracking-tight">
          <span className="font-mono text-accent">~/</span>
          <span className="text-neutral-100">
            <ScrambleText text={profile.name} />
          </span>
        </Link>

        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
              >
                <ScrambleText text={link.label} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
