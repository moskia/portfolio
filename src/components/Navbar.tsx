// Server Component — no "use client" needed because we only use <Link>, no hooks.
// When we add active-link highlighting later, we'll extract a small client piece.
import Link from "next/link";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/interview", label: "Interview" },
];

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        {/* Brand: links back to the home page */}
        <Link href="/" className="font-semibold tracking-tight text-neutral-900">
          {profile.name}
        </Link>

        {/* Page links */}
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
