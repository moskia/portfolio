// Every page wraps its content in this component.
// It handles the max-width, horizontal padding, and vertical spacing
// so we never repeat "mx-auto max-w-4xl px-6 py-20" in every page file.
type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {children}
    </div>
  );
}
