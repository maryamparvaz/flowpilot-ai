import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DashboardPreview } from "./DashboardPreview";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="container-page relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-brand/30 bg-brand-soft/40 px-3 py-1 text-xs font-medium text-brand"
          >
            <Sparkles className="mr-1.5 h-3 w-3 text-brand" />
            New — smart task routing is live
          </Badge>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Automate the busywork behind{" "}
            <span className="text-gradient-brand">every growing team</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            FlowPilot helps startups, agencies, and remote teams turn meetings,
            tasks, and weekly updates into clear, automated workflows — in one
            workspace your team will actually open.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="group">
              Start free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline">
              View demo
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> SOC 2 Type II</span>
            <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> 14-day free trial, no card</span>
            <span>· Cancel any time</span>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute -inset-x-8 -inset-y-4 -z-10 rounded-3xl bg-[var(--gradient-brand)] opacity-20 blur-3xl" />
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
