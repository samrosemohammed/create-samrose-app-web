import { ChangelogIcon } from "@/app/changelog/components/changelog-icon";
import type { ChangelogStat } from "@/types";

interface ChangelogHeroProps {
  stats: ChangelogStat[];
}

export function ChangelogHero({ stats }: ChangelogHeroProps) {
  return (
    <div className="border-b border-border/80 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <ChangelogIcon name="git-fork" size={12} />
            Open Source
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <ChangelogIcon name="command" size={12} />
            CLI Tool
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Changelog
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Every update to{" "}
          <code className="rounded bg-primary/10 px-2 py-0.5 text-sm font-mono text-primary">
            create-samrose-app
          </code>{" "}
          is documented here - features, fixes, and improvements.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <ChangelogIcon name={stat.icon} size={16} />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
