import { ArrowDownRight, ArrowUpRight, CheckCircle2, Circle, Sparkles } from "lucide-react";
import { dashboardStats } from "@/data/mock";

export function DashboardPreview() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-4 shadow-[var(--shadow-card)] sm:p-6">
      {/* Window chrome */}
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-xs text-muted-foreground">app.flowpilot.ai / workspace</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {dashboardStats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border/70 bg-card/60 p-3">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="mt-1 font-display text-xl font-semibold">{s.value}</p>
            <p className={"mt-1 flex items-center gap-1 text-xs " + (s.positive ? "text-emerald-500" : "text-red-500")}>
              {s.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {s.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="mt-4 grid gap-3 lg:grid-cols-5">
        {/* Tasks */}
        <div className="rounded-xl border border-border/70 bg-card/60 p-4 lg:col-span-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold">Today's flow</p>
            <span className="text-xs text-muted-foreground">8 tasks</span>
          </div>
          <ul className="space-y-2 text-sm">
            {[
              { d: true, t: "Send weekly digest to investors", who: "AI" },
              { d: true, t: "Triage support inbox", who: "Maya" },
              { d: false, t: "Review Q3 roadmap doc", who: "You" },
              { d: false, t: "Approve marketing site copy", who: "Daniel" },
              { d: false, t: "Schedule design crit", who: "AI" },
            ].map((row, i) => (
              <li key={i} className="flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-accent/50">
                {row.d ? (
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                ) : (
                  <Circle className="h-4 w-4 text-muted-foreground" />
                )}
                <span className={row.d ? "text-muted-foreground line-through" : ""}>{row.t}</span>
                <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                  {row.who}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI panel */}
        <div className="rounded-xl border border-border/70 bg-gradient-to-br from-card/70 to-brand-soft/30 p-4 lg:col-span-2">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="h-4 w-4 text-brand" />
            FlowPilot suggests
          </div>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg bg-background/70 p-3">
              <p className="text-xs text-muted-foreground">Bottleneck detected</p>
              <p>3 PRs waiting on review from Alex — reassign?</p>
            </div>
            <div className="rounded-lg bg-background/70 p-3">
              <p className="text-xs text-muted-foreground">Auto-summary ready</p>
              <p>Customer call · 32 min · 5 decisions</p>
            </div>
            <div className="rounded-lg bg-background/70 p-3">
              <p className="text-xs text-muted-foreground">Focus time</p>
              <p>Block 9–11am tomorrow for the launch doc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
