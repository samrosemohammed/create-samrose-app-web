import { FEATURES } from "@/constant";
import { SectionHeading } from "@/app/docs/components/section-heading";

export function StackOptionsSection() {
  return (
    <section id="stack-options" className="space-y-5">
      <SectionHeading>Stack Options</SectionHeading>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Every combination is supported and correctly configured out of the box.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="mb-2 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted text-base">
                {feature.icon}
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {feature.title}
              </h3>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {feature.options.map((option) => (
                <span
                  key={option}
                  className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-foreground"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
