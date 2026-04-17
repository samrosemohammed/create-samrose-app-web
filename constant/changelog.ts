import type { CategoryVisualConfig, ChangeCategory, Release } from "@/types";

export const CHANGELOG_RELEASES: Release[] = [
  {
    version: "1.0.3",
    date: "April 2026",
    label: "latest",
    summary:
      "Added Playwright E2E testing support across CLI prompts, scaffolding, and CI.",
    changes: [
      {
        category: "feature",
        text: "Added Playwright (E2E) as a testing framework option in CLI prompts",
      },
      {
        category: "feature",
        text: "Scaffold now generates Playwright config and starter e2e/home.spec.ts test",
      },
      {
        category: "improvement",
        text: "Added Playwright scripts: test, test:ci, test:ui, test:headed, and test:install-browsers",
      },
      {
        category: "improvement",
        text: "Extended testing type support to include Playwright in core project types",
      },
      {
        category: "improvement",
        text: "GitHub Actions CI setup now supports Playwright test execution",
      },
      {
        category: "improvement",
        text: "CI workflow now installs Playwright browsers automatically when Playwright is selected",
      },
    ],
  },
  {
    version: "1.0.2",
    date: "April 2026",
    label: "stable",
    summary: "Added oRPC support, improved CLI prompts, and enhanced DX.",
    changes: [
      { category: "feature", text: "Added oRPC as an API layer option" },
      {
        category: "feature",
        text: "New --yes flag to skip all prompts with defaults",
      },
      {
        category: "improvement",
        text: "Improved CLI prompt ordering for better UX flow",
      },
      {
        category: "improvement",
        text: "Faster scaffold time - reduced install step by 40%",
      },
      {
        category: "fix",
        text: "Fixed Drizzle config not being generated with SQLite",
      },
      {
        category: "fix",
        text: "Resolved Husky not initializing on bun installs",
      },
    ],
  },
  {
    version: "1.0.1",
    date: "March 2026",
    label: "stable",
    summary: "Initial public release with full stack scaffolding support.",
    changes: [
      {
        category: "feature",
        text: "Interactive CLI with full stack selection",
      },
      {
        category: "feature",
        text: "ORM support: Prisma, Drizzle, TypeORM, Mongoose",
      },
      {
        category: "feature",
        text: "Database support: PostgreSQL, MySQL, SQLite, MongoDB",
      },
      { category: "feature", text: "Auth support: NextAuth, Clerk, JWT" },
      { category: "feature", text: "Optional shadcn/ui integration" },
      { category: "feature", text: "State management: Zustand, Redux, Recoil" },
      { category: "feature", text: "API layer: tRPC, GraphQL, REST" },
      { category: "feature", text: "Testing: Jest and Vitest scaffolding" },
      { category: "feature", text: "Extras: Docker, GitHub Actions, Husky" },
      { category: "feature", text: "Support for npm, pnpm, yarn, and bun" },
    ],
  },
];

export const CHANGELOG_CATEGORY_CONFIG: Record<
  ChangeCategory,
  CategoryVisualConfig
> = {
  feature: {
    label: "Feature",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/25",
    icon: "sparkles",
  },
  improvement: {
    label: "Improvement",
    color: "text-foreground",
    bg: "bg-muted",
    border: "border-border",
    icon: "zap",
  },
  fix: {
    label: "Fix",
    color: "text-accent-foreground",
    bg: "bg-accent",
    border: "border-border",
    icon: "wrench",
  },
  breaking: {
    label: "Breaking",
    color: "text-destructive",
    bg: "bg-destructive/10",
    border: "border-destructive/25",
    icon: "shield",
  },
};
