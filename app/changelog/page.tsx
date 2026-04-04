import type { Metadata } from "next";
import { ChangelogCta } from "@/app/changelog/components/changelog-cta";
import { ChangelogHero } from "@/app/changelog/components/changelog-hero";
import { ReleaseTimeline } from "@/app/changelog/components/release-timeline";
import { CHANGELOG_RELEASES } from "@/constant/changelog";
import { getChangelogStats } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog - create-samrose-app",
  description: "Release history for create-samrose-app.",
};

export default function ChangelogPage() {
  const stats = getChangelogStats(CHANGELOG_RELEASES);

  return (
    <div className="min-h-screen bg-background">
      <ChangelogHero stats={stats} />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ReleaseTimeline releases={CHANGELOG_RELEASES} />
        <ChangelogCta />
      </div>
    </div>
  );
}
