import { testimonials } from "@/data/mock";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Customer stories"
          title="What teams say after their first month"
          description="A few of the founders, COOs, and ops leads who run their week on FlowPilot."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
