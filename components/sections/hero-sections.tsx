import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight01Icon,
  GitForkIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { GITHUB_URL, NODE_REQUIREMENT } from "@/constant";
import { HeroInstallTabs } from "./hero-install-tabs";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-24 border-b border-border/60">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <Badge>
            <span className="mr-1">✨</span> Opinionated Next.js scaffolding
          </Badge>
          <Badge variant="secondary">{NODE_REQUIREMENT}</Badge>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          Scaffold your <span className="text-primary">Next.js app</span>
          <br />
          in seconds
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          One CLI to configure your entire stack — ORM, database, auth, state
          management, API layer, and more. Stop spending hours on boilerplate.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/docs">
            <Button size="lg">
              Get Started <HugeiconsIcon icon={ArrowRight01Icon} />
            </Button>
          </Link>
          <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <HugeiconsIcon icon={GitForkIcon} />
              GitHub
              {/* <Star className="h-3.5 w-3.5 text-yellow-400" /> */}
              <HugeiconsIcon icon={StarIcon} />
            </Button>
          </Link>
        </div>

        {/* Install tabs */}
        <div className="mt-14 mx-auto max-w-2xl">
          <HeroInstallTabs />
        </div>
      </div>
    </section>
  );
}
