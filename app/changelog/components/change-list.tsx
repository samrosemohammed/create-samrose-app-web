import { CHANGELOG_CATEGORY_CONFIG } from "@/constant/changelog";
import { ChangelogIcon } from "@/app/changelog/components/changelog-icon";
import type { Change, ChangeCategory } from "@/types";

interface ChangeListProps {
  changes: Change[];
}

export function ChangeList({ changes }: ChangeListProps) {
  const categoriesInRelease = (
    Object.entries(CHANGELOG_CATEGORY_CONFIG) as [
      ChangeCategory,
      (typeof CHANGELOG_CATEGORY_CONFIG)[ChangeCategory],
    ][]
  ).filter(([category]) =>
    changes.some((change) => change.category === category),
  );

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card/40">
      <div className="flex flex-wrap gap-2 border-b border-border bg-muted/40 px-5 py-3">
        {categoriesInRelease.map(([category, cfg]) => (
          <span
            key={category}
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${cfg.color} ${cfg.bg} ${cfg.border}`}
          >
            <ChangelogIcon name={cfg.icon} size={12} />
            {cfg.label}
          </span>
        ))}
      </div>

      <ul className="divide-y divide-border/80">
        {changes.map((change, index) => {
          const cfg = CHANGELOG_CATEGORY_CONFIG[change.category];

          return (
            <li
              key={index}
              className="flex items-start gap-3 px-5 py-3 transition-colors hover:bg-muted/50"
            >
              <span
                className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${cfg.bg} ${cfg.color}`}
              >
                <ChangelogIcon name={cfg.icon} size={12} />
              </span>
              <span className="text-sm leading-relaxed text-foreground">
                {change.text}
              </span>
              <span
                className={`ml-auto hidden shrink-0 text-xs font-medium sm:block ${cfg.color}`}
              >
                {cfg.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
