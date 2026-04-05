# create-samrose-app-web

Marketing website and documentation hub for the `create-samrose-app` CLI.

This project is built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and shadcn/ui-style components.

## What This Site Includes

- Landing page for the CLI with hero, features, workflow, stack options, and CTA sections.
- Documentation page with a sidebar and structured sections:
  - Getting Started
  - Installation
  - Usage
  - Stack Options
  - Requirements
  - Development
- Changelog page with release timeline and stats.
- Shared layout with responsive navbar, footer, and theme provider.

## Routes

- `/` - Marketing landing page
- `/docs` - Product documentation
- `/changelog` - Release history

## Tech Stack

- `next@16.2.2`
- `react@19.2.4`
- `typescript@5`
- `tailwindcss@4`
- `eslint@9`
- `next-themes` for theme handling
- `class-variance-authority`, `clsx`, `tailwind-merge` for styling utilities
- `@hugeicons/react` for icons

## Quick Start

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev    # Start local dev server
npm run build  # Create production build
npm run start  # Run production server
npm run lint   # Run ESLint
```

## Project Structure

```text
app/
	layout.tsx               # Root layout + metadata + providers
	page.tsx                 # Landing page
	docs/
		page.tsx               # Docs page shell
		components/            # Docs-specific UI sections
	changelog/
		page.tsx               # Changelog page shell
		components/            # Changelog-specific UI sections

components/
	layout/                  # Navbar, footer, mobile nav, theme toggle
	sections/                # Landing page sections
	ui/                      # Reusable UI primitives

constant/                  # Static content/data for pages
lib/                       # Utility helpers
hooks/                     # Custom hooks
types/                     # Shared TypeScript types
```

## Notes

- Path alias is configured as `@/*` in `tsconfig.json`.
- Global styles are defined in `app/globals.css`.
- The site metadata is declared in `app/layout.tsx` and route-level pages.

## Related Links

- CLI repository: https://github.com/samrosemohammed/create-samrose-app
- npm package: https://www.npmjs.com/package/create-samrose-app

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
