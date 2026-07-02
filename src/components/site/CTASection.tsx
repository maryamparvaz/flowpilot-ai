import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  title?: string;
  description?: string;
  primary?: string;
  secondary?: string;
}

export function CTASection({
  title = "Spend less time coordinating. Spend more time building.",
  description = "Join 4,200+ teams who run their weeks on FlowPilot. Free for 14 days, no credit card required.",
  primary = "Start free",
  secondary = "Book a 20-min demo",
}: Props) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-10 text-center sm:p-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group">
                {primary}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button size="lg" variant="outline">
                {secondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
