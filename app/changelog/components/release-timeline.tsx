import { ReleaseCard } from "@/app/changelog/components/release-card";
import type { Release } from "@/types";

interface ReleaseTimelineProps {
  releases: Release[];
}

export function ReleaseTimeline({ releases }: ReleaseTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute bottom-2 left-2.75 top-2 w-px bg-linear-to-b from-primary/40 via-border to-transparent" />

      <div className="space-y-12">
        {releases.map((release, index) => (
          <div key={release.version} className="relative flex gap-6">
            <div className="relative z-10 shrink-0">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                  index === 0
                    ? "border-primary/40 bg-primary/15"
                    : "border-border bg-muted"
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    index === 0 ? "bg-primary" : "bg-muted-foreground"
                  }`}
                />
              </div>
            </div>

            <ReleaseCard release={release} />
          </div>
        ))}
      </div>
    </div>
  );
}
