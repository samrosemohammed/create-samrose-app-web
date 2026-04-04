import { CodeBlock } from "@/components/ui/code-block";
import { GITHUB_URL } from "@/constant";
import { DOCS_DEVELOPMENT_STEPS } from "@/constant/docs";
import { SectionHeading } from "@/app/docs/components/section-heading";

export function DevelopmentSection() {
  return (
    <section id="development" className="space-y-5">
      <SectionHeading>Development</SectionHeading>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Want to contribute or run the CLI locally? Clone the repo and follow
        these steps:
      </p>

      <div className="space-y-5">
        {DOCS_DEVELOPMENT_STEPS.map((item) => (
          <div key={item.step}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {item.step}
            </p>
            <CodeBlock code={item.code} language="bash" />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center">
        <div>
          <p className="mb-1 font-heading font-semibold text-foreground">
            Want to contribute?
          </p>
          <p className="text-sm text-muted-foreground">
            PRs and issues are always welcome.
          </p>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          View on GitHub -&gt;
        </a>
      </div>
    </section>
  );
}
