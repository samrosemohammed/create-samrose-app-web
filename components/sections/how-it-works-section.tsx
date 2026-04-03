import { STEPS } from "@/constant";
import { CodeBlock } from "../ui/code-block";

export function HowItWorksSection() {
  return (
    <section className="bg-zinc-900/30 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            Quick start
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Up and running in 3 steps
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              {/* Step header */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
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
