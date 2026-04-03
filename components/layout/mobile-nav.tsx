"use client";

import { useState } from "react";
import Link from "next/link";
import { GITHUB_URL, NAV_ITEMS, NPM_URL } from "@/constant";
import {
  Cancel01Icon,
  GitForkIcon,
  Menu02Icon,
  PackageIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all"
        aria-label="Toggle menu"
      >
        {open ? (
          <HugeiconsIcon icon={Cancel01Icon} />
        ) : (
          <HugeiconsIcon icon={Menu02Icon} />
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-16 z-50 border-b border-zinc-800 bg-zinc-950 px-4 py-4 shadow-xl">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-zinc-800 flex gap-2">
              <Link
                href={NPM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all border border-zinc-800"
              >
                <HugeiconsIcon icon={PackageIcon} /> npm
              </Link>
              <Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all border border-zinc-800"
              >
                <HugeiconsIcon icon={GitForkIcon} /> GitHub
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
