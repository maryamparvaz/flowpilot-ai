import { FAQAccordion } from "./FAQAccordion";
import { SectionHeader } from "./SectionHeader";

export function FAQSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-10">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}
