import Link from "next/link";
import { GITHUB_URL, NAV_ITEMS, NPM_URL } from "@/constant";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { GitForkIcon, PackageIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
              S
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              create-samrose-app
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link href={NPM_URL} target="_blank" rel="noopener noreferrer">
              <HugeiconsIcon icon={PackageIcon} />
              npm
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <HugeiconsIcon icon={GitForkIcon} />
              GitHub
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
