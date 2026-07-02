import { AlertTriangle, Clock, MessagesSquare, Layers } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: MessagesSquare,
    title: "Status updates eat the week",
    body: "Standups, threads, recap docs. The work to talk about work quietly crowds out the actual work.",
  },
  {
    icon: Layers,
    title: "Your tools don't talk to each other",
    body: "Tasks live in Linear, notes in Notion, files in Drive. Context goes missing in the gaps.",
  },
  {
    icon: Clock,
    title: "Important work waits on people",
    body: "Requests sit unread in inboxes, handoffs slip a day at a time, and momentum quietly disappears.",
  },
  {
    icon: AlertTriangle,
    title: "Burnout shows up before the dashboard does",
    body: "Without a clear view of capacity, the same two or three people absorb every fire.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="The problem"
          title="Most teams aren't slow — they're stuck in coordination"
          description="You didn't start your company to manage Slack threads. FlowPilot replaces the patchwork with one place where work actually moves."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-brand/40"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-muted text-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
