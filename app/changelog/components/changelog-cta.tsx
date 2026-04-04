import { ChangelogIcon } from "@/app/changelog/components/changelog-icon";

export function ChangelogCta() {
  return (
    <div className="mt-16 rounded-xl border border-border bg-card/40 p-8 text-center">
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        Want to contribute?
      </h3>
      <p className="mb-5 text-sm text-muted-foreground">
        Found a bug or have a feature request? Open an issue or PR on GitHub.
      </p>
      <a
        href="https://github.com/samrosemohammed/create-samrose-app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <ChangelogIcon name="git-fork" size={16} />
        View on GitHub
      </a>
    </div>
  );
}
