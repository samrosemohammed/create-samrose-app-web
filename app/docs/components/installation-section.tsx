import { CodeBlock } from "@/components/ui/code-block";
import { PACKAGE_MANAGERS } from "@/constant";
import { SectionHeading } from "@/app/docs/components/section-heading";

export function InstallationSection() {
  return (
    <section id="installation" className="space-y-5">
      <SectionHeading>Installation</SectionHeading>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Works with all major package managers. Pick whichever you prefer:
      </p>

      <div className="overflow-hidden rounded-xl border border-border bg-card divide-y divide-border">
        {PACKAGE_MANAGERS.map((pm) => (
          <div
            key={pm.name}
            className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-muted"
          >
            <div className="flex w-20 shrink-0 items-center gap-2">
              <span className="text-base">{pm.icon}</span>
              <span className="text-sm font-semibold text-foreground">
                {pm.name}
              </span>
            </div>
            <code className="flex-1 truncate font-mono text-sm text-muted-foreground">
              {pm.command}
            </code>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-4">
        <span className="mt-0.5 shrink-0 text-base">⚡</span>
        <div className="flex-1 space-y-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Recommended</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Use <code className="font-mono">npx</code> to always run the
              latest version without a global install.
            </p>
          </div>
          <CodeBlock code="npx create-samrose-app" language="bash" />
        </div>
      </div>
    </section>
  );
}
