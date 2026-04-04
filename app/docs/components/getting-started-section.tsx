import { DOCS_GETTING_STARTED_STEPS } from "@/constant/docs";
import { SectionHeading } from "@/app/docs/components/section-heading";
import { InfoCallout } from "@/app/docs/components/info-callout";

export function GettingStartedSection() {
  return (
    <section id="getting-started" className="space-y-5">
      <SectionHeading>Getting Started</SectionHeading>
      <p className="leading-relaxed text-muted-foreground">
        <code className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-sm text-primary">
          create-samrose-app
        </code>{" "}
        is an opinionated CLI that scaffolds a modern Next.js app with your
        preferred stack - ORM, database, auth, state management, API layer, and
        more - all wired together and ready to ship.
      </p>
      <InfoCallout>
        No config files to write. No wiring to do. Run the CLI, answer a few
        prompts, and your production-ready project is ready.
      </InfoCallout>
      <div className="grid gap-3 pt-1 sm:grid-cols-3">
        {DOCS_GETTING_STARTED_STEPS.map((item) => (
          <div
            key={item.step}
            className="rounded-lg border border-border bg-card px-4 py-4"
          >
            <span className="font-mono text-xs font-bold text-primary">
              {item.step}
            </span>
            <p className="mt-1 text-sm font-semibold text-foreground">
              {item.title}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
