import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { UseCase } from "@/data/mock";

export function UseCaseCard({ uc }: { uc: UseCase }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-brand/40">
      {/* <Badge variant="outline" className="w-fit rounded-full border-brand/30 bg-brand-soft/40 text-brand-foreground">
        {uc.badge}
      </Badge> */}
      <h3 className="mt-4 font-display text-xl font-semibold">{uc.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{uc.description}</p>
      <ul className="mt-5 space-y-2 text-sm">
        {uc.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-brand" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
