import type { LucideIcon } from "lucide-react";

interface Props {
  name: string;
  category: string;
  icon: LucideIcon;
}

export function IntegrationCard({ name, category, icon: Icon }: Props) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-colors hover:border-brand/40">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{category}</p>
      </div>
    </div>
  );
}
