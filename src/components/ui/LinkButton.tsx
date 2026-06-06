// A link that looks like a button — for navigation, not click actions.
// Use `external` for links that open in a new tab (GitHub, live demo, etc.).
import Link from "next/link";

type LinkButtonVariant = "primary" | "ghost";

type LinkButtonProps = {
  href: string;
  variant?: LinkButtonVariant;
  external?: boolean;
  children: React.ReactNode;
};

const variantStyles: Record<LinkButtonVariant, string> = {
  primary: "bg-neutral-100 text-neutral-900 hover:bg-white",
  ghost:   "border border-border text-neutral-300 hover:border-accent hover:text-accent",
};

export default function LinkButton({
  href,
  variant = "ghost",
  external = false,
  children,
}: LinkButtonProps) {
  const className = `inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-medium transition-colors ${variantStyles[variant]}`;

  // External links use a plain <a> so the browser opens them in a new tab.
  // Internal links use Next.js <Link> for client-side navigation and prefetching.
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
