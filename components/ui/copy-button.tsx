"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle01Icon, CopyIcon } from "@hugeicons/core-free-icons";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button
      onClick={() => copy(text)}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-all duration-150",
        copied
          ? "text-emerald-400"
          : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800",
        className,
      )}
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <>
          <HugeiconsIcon icon={CheckmarkCircle01Icon} />
        </>
      ) : (
        <>
          <HugeiconsIcon icon={CopyIcon} />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
