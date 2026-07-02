import { Check, Minus } from "lucide-react";
import { comparison } from "@/data/mock";

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-brand" />
    ) : (
      <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

export function FeatureComparisonTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border/70 bg-muted/40">
            <th className="px-5 py-4 text-sm font-semibold">Compare plans</th>
            <th className="px-5 py-4 text-center text-sm font-semibold">Starter</th>
            <th className="px-5 py-4 text-center text-sm font-semibold text-brand">Pro</th>
            <th className="px-5 py-4 text-center text-sm font-semibold">Scale</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((row, i) => (
            <tr key={row.feature} className={i % 2 === 0 ? "bg-background/40" : ""}>
              <td className="px-5 py-3 text-sm">{row.feature}</td>
              <td className="px-5 py-3 text-center"><Cell value={row.starter} /></td>
              <td className="px-5 py-3 text-center"><Cell value={row.pro} /></td>
              <td className="px-5 py-3 text-center"><Cell value={row.scale} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
