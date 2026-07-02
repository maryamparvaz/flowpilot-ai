import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--shadow-card)]">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--gradient-brand)] opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
      <div className="relative">
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-brand shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
