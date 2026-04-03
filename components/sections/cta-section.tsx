import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { GITHUB_URL } from "@/constant";
import { ArrowRight, GitForkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function CTASection() {
  return (
    <section className="bg-zinc-900/30 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-10 shadow-2xl shadow-black/30">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-2xl mb-6">
            🚀
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
            Start building today
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto mb-8">
            No configuration, no boilerplate headaches. Just run the command and
            your opinionated, production-ready Next.js project is ready.
          </p>

          <div className="mx-auto max-w-sm mb-8">
            <CodeBlock code="npx create-samrose-app" language="bash" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/docs">
              <Button size="lg">
                Read the Docs <HugeiconsIcon icon={ArrowRight} />
              </Button>
            </Link>
            <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <HugeiconsIcon icon={GitForkIcon} />
                View Source
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
