import { useCases } from "@/data/mock";
import { SectionHeader } from "./SectionHeader";
import { UseCaseCard } from "./UseCaseCard";

export function UseCasesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Built for"
          title="One workspace, three kinds of teams"
          description="Whether you're four founders or four hundred operators, FlowPilot adapts to the way your team already works."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {useCases.map((uc) => (
            <UseCaseCard key={uc.badge} uc={uc} />
          ))}
        </div>
      </div>
    </section>
  );
}
