import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PricingPlan } from "@/data/mock";

interface Props {
  plan: PricingPlan;
  yearly: boolean;
}

export function PricingCard({ plan, yearly }: Props) {
  const price = yearly ? plan.yearly : plan.monthly;
  return (
    <div
      className={
        "relative flex h-full flex-col rounded-2xl border bg-card p-7 transition-colors " +
        (plan.highlighted
          ? "border-brand/60 shadow-[var(--shadow-glow)]"
          : "border-border/70 hover:border-brand/30")
      }
    >
      {plan.highlighted && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gradient-brand)] text-white">
          Most popular
        </Badge>
      )}
      <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-4xl font-semibold tracking-tight">${price}</span>
        <span className="text-sm text-muted-foreground">/ user / mo</span>
      </div>
      {yearly && (
        <p className="mt-1 text-xs text-brand">Billed annually</p>
      )}
      <Button
        className="mt-6 w-full"
        variant={plan.highlighted ? "default" : "outline"}
      >
        {plan.cta}
      </Button>
      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-brand" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
