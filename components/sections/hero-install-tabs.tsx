"use client";

import { useState } from "react";
import { CopyButton } from "@/components/ui/copy-button";
import { PACKAGE_MANAGERS } from "@/constant";

export function HeroInstallTabs() {
  const [active, setActive] = useState(PACKAGE_MANAGERS[0].name);
  const current = PACKAGE_MANAGERS.find((pm) => pm.name === active)!;

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur overflow-hidden shadow-2xl shadow-black/40">
      {/* Tab bar */}
      <div className="flex items-center gap-1 px-3 py-2 border-b border-zinc-800 bg-zinc-950/60 overflow-x-auto">
        {PACKAGE_MANAGERS.map((pm) => (
          <button
            key={pm.name}
            onClick={() => setActive(pm.name)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-150 ${
              active === pm.name
                ? "bg-zinc-700 text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <span>{pm.icon}</span>
            {pm.name}
          </button>
        ))}
      </div>

      {/* Command */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-emerald-400 font-mono text-sm shrink-0">$</span>
          <code className="font-mono text-sm text-zinc-200 truncate">
            {current.command}
          </code>
        </div>
        <CopyButton text={current.command} />
      </div>
    </div>
  );
}
