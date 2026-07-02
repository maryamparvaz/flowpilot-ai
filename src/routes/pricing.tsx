import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PricingCard } from "@/components/site/PricingCard";
import { PricingToggle } from "@/components/site/PricingToggle";
import { FeatureComparisonTable } from "@/components/site/FeatureComparisonTable";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTASection } from "@/components/site/CTASection";
import { plans } from "@/data/mock";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — FlowPilot" },
      { name: "description", content: "Clear pricing for teams of every size. Start free for 14 days, cancel any time, no seat games." },
      { property: "og:title", content: "Pricing — FlowPilot" },
      { property: "og:description", content: "Clear pricing. 14-day free trial. Cancel in one click." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const [yearly, setYearly] = useState(true);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container-page relative">
          <SectionHeader
            eyebrow="Pricing"
            title="Pricing that grows with the team, not against it"
            description="No seat games. No surprise invoices. Pick a plan, get the full product, change your mind any time."
          />
          <div className="mt-8 flex justify-center">
            <PricingToggle yearly={yearly} onChange={setYearly} />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <PricingCard key={p.name} plan={p} yearly={yearly} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-page">
          <FeatureComparisonTable />
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="FAQ" title="Pricing questions" />
          <div className="mt-10">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <CTASection
        title="Try every feature, free for 14 days"
        description="No credit card. No sales call. Sign in and start automating today."
      />
    </SiteLayout>
  );
}
