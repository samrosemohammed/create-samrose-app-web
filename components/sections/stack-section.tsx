import { Badge } from "@/components/ui/badge";
import { STACK_OPTIONS } from "@/constant";

export function StackSection() {
  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Your choice, your stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Mix and match freely
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every combination is valid and fully configured out of the box.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STACK_OPTIONS.map((stack) => (
            <div
              key={stack.category}
              className="rounded-xl border border-border bg-card/50 p-5 hover:border-border/80 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{stack.icon}</span>
                <h3 className="font-semibold text-foreground text-sm">
                  {stack.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 ">
                {stack.choices.map((choice) => (
                  <Badge
                    key={choice}
                    variant="outline"
                    className="text-xs font-mono"
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
