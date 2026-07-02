import { Star } from "lucide-react";
import type { Testimonial } from "@/data/mock";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card p-6">
      <div className="flex gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
        "{t.quote}"
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-brand)] text-sm font-semibold text-white">
          {t.initials}
        </span>
        <div>
          <p className="text-sm font-medium">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
        </div>
      </figcaption>
    </figure>
  );
}
