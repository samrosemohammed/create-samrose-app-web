import { Badge } from "@/components/ui/badge";
import { STACK_OPTIONS } from "@/constant";

export function StackSection() {
  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            Your choice, your stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Mix and match freely
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Every combination is valid and fully configured out of the box.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STACK_OPTIONS.map((stack) => (
            <div
              key={stack.category}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{stack.icon}</span>
                <h3 className="font-semibold text-zinc-200 text-sm">
                  {stack.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 ">
                {stack.choices.map((choice) => (
                  <Badge
                    key={choice}
                    variant="outline"
                    className="text-xs font-mono text-zinc-400"
                  >
                    {choice}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
