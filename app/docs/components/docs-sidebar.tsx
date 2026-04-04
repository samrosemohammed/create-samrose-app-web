import { DOCS_SECTIONS } from "@/constant/docs";
import { GITHUB_URL } from "@/constant";

export function DocsSidebar() {
  return (
    <aside className="hidden w-52 shrink-0 self-stretch lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          On this page
        </p>
        <nav className="space-y-0.5">
          {DOCS_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 rounded-lg border border-border bg-card p-4">
          <p className="mb-1 text-xs font-semibold text-foreground">
            Need help?
          </p>
          <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
            Open an issue or start a discussion on GitHub.
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
          >
            GitHub -&gt;
          </a>
        </div>
      </div>
    </aside>
  );
}
