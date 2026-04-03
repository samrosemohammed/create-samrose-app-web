import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "bash",
  showCopy = true,
  className,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/80">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/60" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <span className="h-3 w-3 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-zinc-600 font-mono">{language}</span>
        {showCopy && <CopyButton text={code} />}
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm text-zinc-300 font-mono leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  );
}
