import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
import { NODE_REQUIREMENT } from "@/constant";
import { DOCS_REQUIREMENTS } from "@/constant/docs";
import { SectionHeading } from "@/app/docs/components/section-heading";

export function RequirementsSection() {
  const requirements = DOCS_REQUIREMENTS.map((item) =>
    item.label === "Node.js 18+" ? { ...item, label: NODE_REQUIREMENT } : item,
  );

  return (
    <section id="requirements" className="space-y-5">
      <SectionHeading>Requirements</SectionHeading>
      <div className="overflow-hidden rounded-xl border border-border bg-card divide-y divide-border">
        {requirements.map((req) => (
          <div
            key={req.label}
            className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted"
          >
            <span className="shrink-0 text-lg">{req.icon}</span>
            <div>
              <p className="text-sm font-medium text-foreground">{req.label}</p>
              <p className="text-xs text-muted-foreground">{req.note}</p>
            </div>
            <span className="ml-auto shrink-0 text-primary">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
