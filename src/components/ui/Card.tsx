// Generic surface container — consistent dark background, border, and padding.
// `className` is an escape hatch for one-off overrides (e.g. hover effects).
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border border-border bg-surface p-6 ${className}`}>
      {children}
    </div>
  );
}
