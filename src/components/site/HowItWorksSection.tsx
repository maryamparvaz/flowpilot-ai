import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Connect your stack",
    body: "Sign in with Google or email, then connect Slack, Linear, Notion, GitHub, and Gmail in a few clicks. Nothing to migrate.",
  },
  {
    n: "02",
    title: "Map how your team actually works",
    body: "FlowPilot reads your existing projects and rituals, then suggests the first three workflows worth turning on.",
  },
  {
    n: "03",
    title: "Let the routine run itself",
    body: "Tasks route to the right person, recaps land in Slack, and your weekly update is in your inbox every Friday morning.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="How it works"
          title="From sign-in to first workflow in one afternoon"
          description="No six-week rollout. No implementation invoice. Connect your tools, pick a template, and let it run."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border/70 bg-background p-6">
              <span className="font-display text-5xl font-semibold text-gradient-brand">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
