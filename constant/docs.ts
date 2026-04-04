import type {
  DocsDevelopmentStep,
  DocsGettingStartedStep,
  DocsRequirement,
  DocsSectionLink,
} from "@/types";

export const DOCS_SECTIONS: DocsSectionLink[] = [
  { id: "getting-started", label: "Getting Started" },
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "stack-options", label: "Stack Options" },
  { id: "requirements", label: "Requirements" },
  { id: "development", label: "Development" },
];

export const DOCS_GETTING_STARTED_STEPS: DocsGettingStartedStep[] = [
  {
    step: "01",
    title: "Run CLI",
    desc: "One command to start",
  },
  {
    step: "02",
    title: "Pick your stack",
    desc: "Interactive prompts",
  },
  {
    step: "03",
    title: "Start building",
    desc: "Fully wired project",
  },
];

export const DOCS_USAGE_CODE = `? Enter project name › my-app
? Select ORM › Prisma
? Select Database › PostgreSQL
? Select Authentication › NextAuth
? Add shadcn/ui? › Yes
? Select State Management › Zustand
? Select API Layer › tRPC
? Select Testing › Vitest
? Add Docker? › Yes
? Add GitHub Actions? › Yes
? Add Husky? › Yes

✓ Creating project...
✓ Installing dependencies...
✓ Done! cd my-app && npm run dev`;

export const DOCS_REQUIREMENTS: DocsRequirement[] = [
  {
    icon: "🟢",
    label: "Node.js 18+",
    note: "Minimum supported version",
  },
  {
    icon: "📦",
    label: "npm, pnpm, yarn, or bun",
    note: "Any package manager works",
  },
  {
    icon: "💻",
    label: "macOS, Windows, or Linux",
    note: "All platforms supported",
  },
];

export const DOCS_DEVELOPMENT_STEPS: DocsDevelopmentStep[] = [
  {
    step: "1 - Clone & install",
    code: `git clone https://github.com/samrosemohammed/create-samrose-app\ncd create-samrose-app\nnpm install`,
  },
  { step: "2 - Run in dev mode", code: "npm run dev" },
  {
    step: "3 - Build & dry-run publish",
    code: "npm run build\nnpm pack --dry-run",
  },
];
