import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HeroSection } from "@/components/site/HeroSection";
import { LogoCloud } from "@/components/site/LogoCloud";
import { ProblemSection } from "@/components/site/ProblemSection";
import { FeaturesSection } from "@/components/site/FeaturesSection";
import { ProductDemoSection } from "@/components/site/ProductDemoSection";
import { HowItWorksSection } from "@/components/site/HowItWorksSection";
import { UseCasesSection } from "@/components/site/UseCasesSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { PricingPreviewSection } from "@/components/site/PricingPreviewSection";
import { FAQSection } from "@/components/site/FAQSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlowPilot — Automate the busywork behind every growing team" },
      {
        name: "description",
        content:
          "FlowPilot helps startups, agencies, and remote teams turn meetings, tasks, and weekly updates into clear, automated workflows — in one workspace your team will actually open.",
      },
      { property: "og:title", content: "FlowPilot — Automate the busywork behind every growing team" },
      { property: "og:description", content: "Workflows, meeting recaps, and weekly updates — automated for startups, agencies, and remote teams." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <LogoCloud />
      <ProblemSection />
      <FeaturesSection />
      <ProductDemoSection />
      <HowItWorksSection />
      <UseCasesSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FAQSection />
      <CTASection />
    </SiteLayout>
  );
}
