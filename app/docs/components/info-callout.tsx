import { HugeiconsIcon } from "@hugeicons/react";
import { CpuIcon } from "@hugeicons/core-free-icons";

interface InfoCalloutProps {
  children: React.ReactNode;
}

export function InfoCallout({ children }: InfoCalloutProps) {
  return (
    <div className="flex gap-3 rounded-lg border border-border bg-muted px-4 py-3">
      <span className="mt-0.5 shrink-0 text-muted-foreground">
        <HugeiconsIcon icon={CpuIcon} size={16} />
      </span>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  );
}
