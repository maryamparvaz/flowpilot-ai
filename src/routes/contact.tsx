import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageSquare, MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { CTASection } from "@/components/site/CTASection";
import { faqs } from "@/data/mock";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FlowPilot" },
      { name: "description", content: "Talk to the FlowPilot team — about a rollout, an integration, or just to ask a question. We reply within one business day." },
      { property: "og:title", content: "Contact — FlowPilot" },
      { property: "og:description", content: "Talk to sales, get support, or say hi." },
    ],
  }),
  component: ContactPage,
});

const meta = [
  { icon: Mail, label: "Email", value: "hello@flowpilot.ai" },
  { icon: MessageSquare, label: "Sales", value: "sales@flowpilot.ai" },
  { icon: MapPin, label: "HQ", value: "San Francisco · Remote-first" },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container-page relative">
          <SectionHeader
            eyebrow="Contact"
            title="Tell us about the workflow you'd like to fix"
            description="Whether you're scoping a rollout for 200 people or just curious how FlowPilot would fit your team — we're happy to talk."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-4">
            {meta.map((m) => (
              <div key={m.label} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-brand">
                  <m.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{m.label}</p>
                  <p className="truncate text-sm font-medium">{m.value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-border/70 bg-brand-soft/30 p-5 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">A real human will reply.</p>
              <p className="mt-1">No ticket numbers, no chatbots. Our team answers every inbound personally — usually within a few hours during PT working time.</p>
            </div>
          </aside>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="container-page">
          <SectionHeader eyebrow="FAQ" title="Before you write to us" />
          <div className="mt-10">
            <FAQAccordion items={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      <CTASection title="Prefer to just try it?" description="14 days, full product, no credit card." />
    </SiteLayout>
  );
}
