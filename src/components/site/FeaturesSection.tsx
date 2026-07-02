import { features } from "@/data/mock";
import { FeatureCard } from "./FeatureCard";
import { SectionHeader } from "./SectionHeader";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Features"
          title="The rituals every team runs — finally in one place"
          description="Six focused capabilities that work like a single product, not six tools bolted together."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
