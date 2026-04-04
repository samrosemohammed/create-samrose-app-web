import { CTASection } from "@/components/sections/cta-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroInstallTabs } from "@/components/sections/hero-install-tabs";
import { HeroSection } from "@/components/sections/hero-sections";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { StackSection } from "@/components/sections/stack-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StackSection />
      <CTASection />
    </>
  );
}
