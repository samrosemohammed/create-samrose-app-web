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
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-emerald-400 font-bold text-xs">S</span>
              </div>
              <span className="font-semibold text-zinc-100 text-sm">
                create-samrose-app
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
              An opinionated CLI to scaffold modern Next.js apps with your
              preferred stack choices.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
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
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <HugeiconsIcon icon={PackageIcon} />
                  npm Registry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} create-samrose-app. MIT License.
          </p>
          <p className="inline-flex items-center gap-1 text-xs text-zinc-600">
            Built with <HugeiconsIcon icon={HeartAddIcon} /> by samrosemohammed
          </p>
        </div>
      </div>
    </footer>
  );
}
