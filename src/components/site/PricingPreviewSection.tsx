import { useState } from "react";
import { plans } from "@/data/mock";
import { PricingCard } from "./PricingCard";
import { PricingToggle } from "./PricingToggle";
import { SectionHeader } from "./SectionHeader";

export function PricingPreviewSection() {
  const [yearly, setYearly] = useState(true);
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Pricing"
          title="Clear pricing. No seat games."
          description="Start free for 14 days. Upgrade when your team is ready. Cancel in one click."
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
  );
}
