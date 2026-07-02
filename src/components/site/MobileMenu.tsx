import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: ReadonlyArray<{ to: string; label: string }>;
}

export function MobileMenu({ open, onOpenChange, links }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="font-display">FlowPilot AI</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1 px-4" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => onOpenChange(false)}
              className="rounded-md px-3 py-3 text-base text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-2 px-4">
          <Button variant="outline">Log in</Button>
          <Button>Start free trial</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
