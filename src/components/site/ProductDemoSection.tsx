import { Check } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";

const points = [
  "One inbox for tasks, requests, and follow-ups from every tool",
  "Drag-and-drop workflow builder — no engineering ticket required",
  "Live capacity view so leads can rebalance before someone burns out",
  "Friday digest, written from real project data and ready to send",
];

export function ProductDemoSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Product</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              One workspace for the work behind the work
            </h2>
            <p className="mt-4 text-muted-foreground">
              FlowPilot pulls tasks, notes, and requests from across your stack
              into a single focused view — and quietly handles the routing,
              chasing, and reporting in the background.
            </p>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-brand-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-x-6 -inset-y-4 -z-10 rounded-3xl bg-[var(--gradient-brand)] opacity-15 blur-3xl" />
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
