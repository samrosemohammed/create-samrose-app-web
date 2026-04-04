import { STEPS } from "@/constant";
import { CodeBlock } from "../ui/code-block";

export function HowItWorksSection() {
  return (
    <section className="bg-muted/20 py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Quick start
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Up and running in 3 steps
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              {/* Step header */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Code */}
              <CodeBlock code={step.code} language="bash" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
