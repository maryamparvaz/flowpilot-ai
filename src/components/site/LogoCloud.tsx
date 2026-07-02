import { companyLogos } from "@/data/mock";

export function LogoCloud() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-12">
      <div className="container-page">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by 4,200+ operations, product, and agency teams
        </p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {companyLogos.map((name) => (
            <span
              key={name}
              className="font-display text-base font-semibold tracking-tight text-muted-foreground/80 transition-colors hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
