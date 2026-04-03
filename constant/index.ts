import type {
  Feature,
  Step,
  PackageManager,
  StackOption,
  NavItem,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
];

export const PACKAGE_MANAGERS: PackageManager[] = [
  { name: "npx", command: "npx create-samrose-app", icon: "⚡" },
  {
    name: "npm",
    command: "npm i -g create-samrose-app && create-samrose-app",
    icon: "📦",
  },
  { name: "pnpm", command: "pnpm dlx create-samrose-app", icon: "🚀" },
  { name: "yarn", command: "yarn dlx create-samrose-app", icon: "🧶" },
  { name: "bun", command: "bunx create-samrose-app", icon: "🐰" },
];

export const FEATURES: Feature[] = [
  {
    id: "orm",
    icon: "🗄️",
    title: "ORM",
    description:
      "Choose your preferred database ORM to match your project needs.",
    options: ["Prisma", "Drizzle", "TypeORM", "Mongoose"],
  },
  {
    id: "database",
    icon: "🏛️",
    title: "Database",
    description: "Pick from battle-tested databases for any scale.",
    options: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    id: "auth",
    icon: "🔐",
    title: "Authentication",
    description: "Secure your app with the right auth solution.",
    options: ["NextAuth", "Clerk", "JWT"],
  },
  {
    id: "ui",
    icon: "🎨",
    title: "UI Components",
    description:
      "Optional beautiful component libraries for rapid UI development.",
    options: ["shadcn/ui"],
  },
  {
    id: "state",
    icon: "🔄",
    title: "State Management",
    description: "Manage your application state with proven solutions.",
    options: ["Zustand", "Redux", "Recoil"],
  },
  {
    id: "api",
    icon: "🔌",
    title: "API Layer",
    description: "Define your API architecture from the start.",
    options: ["tRPC", "oRPC", "GraphQL", "REST"],
  },
  {
    id: "testing",
    icon: "🧪",
    title: "Testing",
    description: "Ship with confidence using modern testing frameworks.",
    options: ["Jest", "Vitest"],
  },
  {
    id: "extras",
    icon: "🛠️",
    title: "Extras",
    description: "Production-ready tooling from day one.",
    options: ["Docker", "GitHub Actions", "Husky"],
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Run the CLI",
    description: "Bootstrap your project with a single command.",
    code: "npx create-samrose-app",
  },
  {
    number: 2,
    title: "Choose your stack",
    description: "Interactively pick your ORM, database, auth, and more.",
    code: "? Select ORM › Prisma\n? Select Database › PostgreSQL\n? Select Auth › NextAuth",
  },
  {
    number: 3,
    title: "Start building",
    description: "Your fully configured Next.js app is ready to go.",
    code: "cd my-app && npm run dev",
  },
];

export const STACK_OPTIONS: StackOption[] = [
  {
    category: "ORM",
    icon: "🗄️",
    choices: ["Prisma", "Drizzle", "TypeORM", "Mongoose"],
  },
  {
    category: "Database",
    icon: "🏛️",
    choices: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  { category: "Auth", icon: "🔐", choices: ["NextAuth", "Clerk", "JWT"] },
  { category: "State", icon: "🔄", choices: ["Zustand", "Redux", "Recoil"] },
  { category: "API", icon: "🔌", choices: ["tRPC", "oRPC", "GraphQL", "REST"] },
  { category: "Testing", icon: "🧪", choices: ["Jest", "Vitest"] },
];

export const GITHUB_URL =
  "https://github.com/samrosemohammed/create-samrose-app";
export const NPM_URL = "https://www.npmjs.com/package/create-samrose-app";
export const NODE_REQUIREMENT = "Node.js 18+";
