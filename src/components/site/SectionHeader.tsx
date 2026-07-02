import { Badge } from "@/components/ui/badge";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <div
      className={
        "mx-auto max-w-2xl " +
        (align === "center" ? "text-center" : "text-left mx-0")
      }
    >
      {eyebrow && (
        <Badge variant="outline" className="mb-4 rounded-full border-brand/30 bg-brand-soft/40 text-brand dark:text-brand">
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}
