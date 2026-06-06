// A link that looks like a button — for navigation, not click actions.
// `external` — opens in a new tab (GitHub, live demo, etc.)
// `download` — triggers a file download instead of navigation
import Link from "next/link";

type LinkButtonVariant = "primary" | "ghost";

type LinkButtonProps = {
  href: string;
  variant?: LinkButtonVariant;
  external?: boolean;
  download?: boolean;
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
  download = false,
  children,
}: LinkButtonProps) {
  const className = `inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-medium transition-colors ${variantStyles[variant]}`;

  // `download` renders a plain <a download> — the browser saves the file
  // instead of navigating to it. Works for same-origin files in /public.
  if (download) {
    return (
      <a href={href} download className={className}>
        {children}
      </a>
    );
  }

  // External links open in a new tab.
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  // Internal links use Next.js <Link> for client-side navigation and prefetching.
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
