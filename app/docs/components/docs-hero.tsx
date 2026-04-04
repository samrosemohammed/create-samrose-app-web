import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function DocsHero() {
  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <span>create-samrose-app</span>
          <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
          <span className="font-medium text-foreground">Documentation</span>
        </div>
        <h1 className="mb-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Documentation
        </h1>
        <p className="leading-relaxed text-muted-foreground">
          Everything you need to scaffold a modern Next.js app with{" "}
          <code className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm text-primary">
            create-samrose-app
          </code>
          .
        </p>
      </div>
    </div>
  );
}
