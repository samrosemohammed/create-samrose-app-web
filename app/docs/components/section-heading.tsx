interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-2 flex items-center gap-3 border-b border-border pb-4">
      <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
        {children}
      </h2>
    </div>
  );
}
