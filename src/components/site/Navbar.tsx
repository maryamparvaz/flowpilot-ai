import { Link } from "@tanstack/react-router";
import { Menu, Plane } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-brand)] text-white shadow-[var(--shadow-glow)]">
            <Plane className="h-4 w-4" />
          </span>
          <span>FlowPilot<span className="text-brand"> AI</span></span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "text-foreground font-medium bg-brand-soft/40 after:absolute after:left-3 after:right-3 after:-bottom-[2px] after:h-[2px] after:rounded-full after:bg-[var(--gradient-brand)]",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button size="sm" className="hidden sm:inline-flex">
            Start free
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <MobileMenu open={open} onOpenChange={setOpen} links={links} />
    </header>
  );
}
