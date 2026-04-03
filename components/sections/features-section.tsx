import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FEATURES } from "@/constant";

export function FeaturesSection() {
  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            Everything you need
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Configure your full stack
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Every choice scaffolded correctly, wired together, and ready for
            production.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <Card
              key={feature.id}
              className="group hover:border-zinc-700 hover:bg-zinc-900 text-zinc-400 transition-all duration-200"
            >
              <CardHeader className="pb-3">
                <div className="text-2xl mb-3">{feature.icon}</div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {feature.options.map((opt) => (
                    <Badge key={opt} variant="secondary" className="text-xs">
                      {opt}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
