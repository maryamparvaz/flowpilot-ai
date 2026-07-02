import { createFileRoute } from "@tanstack/react-router";
import { Activity, Clock, Target, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FeatureCard } from "@/components/site/FeatureCard";
import { StatCard } from "@/components/site/StatCard";
import { IntegrationCard } from "@/components/site/IntegrationCard";
import { CTASection } from "@/components/site/CTASection";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { features, integrations } from "@/data/mock";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — FlowPilot" },
      { name: "description", content: "Tour every part of FlowPilot — meeting recaps, the workflow builder, smart task routing, team analytics, and 80+ native integrations." },
      { property: "og:title", content: "Features — FlowPilot" },
      { property: "og:description", content: "Meeting recaps, workflow automation, smart routing, and analytics — in one workspace." },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container-page relative">
          <SectionHeader
            eyebrow="Features"
            title="Every capability your team actually uses, none of the filler"
            description="FlowPilot covers the rituals modern teams already run — and quietly automates the parts no one volunteers for."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow automation deep dive */}
      <section className="border-y border-border/60 bg-card/30 py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Workflow automation</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Build a workflow the same way you'd sketch one on a whiteboard
            </h2>
            <p className="mt-4 text-muted-foreground">
              Drop in a trigger, connect the steps, hit publish. The visual
              builder turns hours of glue work and Slack reminders into one
              repeatable flow that runs across every tool you already pay for.
            </p>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {["Visual flow builder", "200+ ready-made templates", "Conditional logic and branches", "Built-in retries and error alerts"].map(
                (t) => (
                  <li key={t} className="rounded-lg border border-border/70 bg-background px-3 py-2">
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
          <DashboardPreview />
        </div>
      </section>

      {/* Analytics preview */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Analytics"
            title="Numbers your team will actually act on"
            description="Skip the vanity metrics. See where work slows down — review queues, handoffs, blocked tickets — and fix it in a click."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Weekly throughput" value="284" hint="+12% vs last week" icon={Activity} />
            <StatCard label="Avg. cycle time" value="2.1d" hint="−18% MoM" icon={Clock} />
            <StatCard label="On-time delivery" value="94%" hint="Goal: 90%" icon={Target} />
            <StatCard label="Active teammates" value="42" hint="3 over capacity" icon={Users} />
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="border-y border-border/60 bg-card/30 py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Integrations"
            title="Fits into the stack you already have"
            description="80+ native integrations plus a clean API. Your tools, finally on the same page."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((i) => (
              <IntegrationCard key={i.name} {...i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
