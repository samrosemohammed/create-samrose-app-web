import { FEATURES } from "@/constant";
import type { ChangelogStat, Release } from "@/types";

export function getChangelogStats(releases: Release[]): ChangelogStat[] {
  const featureCount = releases.reduce(
    (total, release) =>
      total +
      release.changes.filter((change) => change.category === "feature").length,
    0,
  );

  const fixCount = releases.reduce(
    (total, release) =>
      total +
      release.changes.filter((change) => change.category === "fix").length,
    0,
  );

  const stackOptionsCount = FEATURES.reduce(
    (total, feature) => total + feature.options.length,
    0,
  );

  return [
    { icon: "package", label: "Releases", value: String(releases.length) },
    { icon: "sparkles", label: "Features", value: String(featureCount) },
    { icon: "wrench", label: "Bug Fixes", value: String(fixCount) },
    {
      icon: "layers",
      label: "Stack Options",
      value: `${stackOptionsCount}+`,
    },
  ];
}
