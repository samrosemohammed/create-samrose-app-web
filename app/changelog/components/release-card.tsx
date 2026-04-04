import { ChangeList } from "@/app/changelog/components/change-list";
import type { Release } from "@/types";

interface ReleaseCardProps {
  release: Release;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <div className="flex-1 min-w-0 pb-4">
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <h2 className="font-mono text-xl font-bold text-foreground">
          v{release.version}
        </h2>
        {release.label === "latest" && (
          <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Latest
          </span>
        )}
        {release.label === "stable" && (
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            Stable
          </span>
        )}
        <span className="text-sm text-muted-foreground">{release.date}</span>
      </div>

      <p className="mb-5 text-sm text-muted-foreground">{release.summary}</p>
      <ChangeList changes={release.changes} />
    </div>
  );
}
