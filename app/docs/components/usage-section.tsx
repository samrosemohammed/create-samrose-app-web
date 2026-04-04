import { CodeBlock } from "@/components/ui/code-block";
import { DOCS_USAGE_CODE } from "@/constant/docs";
import { SectionHeading } from "@/app/docs/components/section-heading";
import { InfoCallout } from "@/app/docs/components/info-callout";

export function UsageSection() {
  return (
    <section id="usage" className="space-y-5">
      <SectionHeading>Usage</SectionHeading>
      <p className="text-sm leading-relaxed text-muted-foreground">
        After running the CLI, an interactive prompt guides you through each
        choice. Every selection is fully configured - no manual setup needed.
      </p>
      <CodeBlock code={DOCS_USAGE_CODE} language="bash" />
      <InfoCallout>
        Use the <code className="font-mono text-xs">--yes</code> flag to skip
        all prompts and scaffold with sensible defaults instantly.
      </InfoCallout>
    </section>
  );
}
