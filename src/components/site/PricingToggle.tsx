interface Props {
  yearly: boolean;
  onChange: (yearly: boolean) => void;
}

export function PricingToggle({ yearly, onChange }: Props) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card p-1 text-sm">
      <button
        onClick={() => onChange(false)}
        className={
          "rounded-full px-4 py-1.5 transition-colors " +
          (!yearly ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground")
        }
      >
        Monthly
      </button>
      <button
        onClick={() => onChange(true)}
        className={
          "rounded-full px-4 py-1.5 transition-colors " +
          (yearly ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground")
        }
      >
        Yearly <span className="ml-1 text-xs text-brand">−20%</span>
      </button>
    </div>
  );
}
