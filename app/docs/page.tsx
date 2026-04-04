import type { Metadata } from "next";
import { DevelopmentSection } from "@/app/docs/components/development-section";
import { DocsHero } from "@/app/docs/components/docs-hero";
import { DocsSidebar } from "@/app/docs/components/docs-sidebar";
import { GettingStartedSection } from "@/app/docs/components/getting-started-section";
import { InstallationSection } from "@/app/docs/components/installation-section";
import { RequirementsSection } from "@/app/docs/components/requirements-section";
import { StackOptionsSection } from "@/app/docs/components/stack-options-section";
import { UsageSection } from "@/app/docs/components/usage-section";

export const metadata: Metadata = {
  title: "Docs — create-samrose-app",
  description: "Documentation for create-samrose-app CLI.",
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DocsHero />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10 items-start">
          <DocsSidebar />

          <article className="flex-1 min-w-0 space-y-14">
            <GettingStartedSection />
            <InstallationSection />
            <UsageSection />
            <StackOptionsSection />
            <RequirementsSection />
            <DevelopmentSection />
          </article>
        </div>
      </div>
    </div>
  );
}
