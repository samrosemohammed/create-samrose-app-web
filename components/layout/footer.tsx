import { GITHUB_URL, NAV_ITEMS, NPM_URL } from "@/constant";
import {
  GitForkIcon,
  HeartAddIcon,
  PackageIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-primary font-bold text-xs">S</span>
              </div>
              <span className="font-semibold text-foreground text-sm">
                create-samrose-app
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              An opinionated CLI to scaffold modern Next.js apps with your
              preferred stack choices.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <HugeiconsIcon icon={GitForkIcon} />
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link
                  href={NPM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <HugeiconsIcon icon={PackageIcon} />
                  npm Registry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} create-samrose-app. MIT License.
          </p>
          <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            Built with <HugeiconsIcon icon={HeartAddIcon} /> by samrosemohammed
          </p>
        </div>
      </div>
    </footer>
  );
}
