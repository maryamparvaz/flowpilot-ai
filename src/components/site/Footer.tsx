import { Link } from "@tanstack/react-router";
import { Plane, Github, Twitter, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/pricing", label: "Pricing" },
      { to: "/", label: "Changelog" },
      { to: "/", label: "Roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "/", label: "Careers" },
      { to: "/", label: "Press kit" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/", label: "Documentation" },
      { to: "/", label: "Help center" },
      { to: "/", label: "Community" },
      { to: "/", label: "Status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/", label: "Privacy" },
      { to: "/", label: "Terms" },
      { to: "/", label: "Security" },
      { to: "/", label: "DPA" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-brand)] text-white">
                <Plane className="h-4 w-4" />
              </span>
              FlowPilot<span className="text-brand"> AI</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              FlowPilot helps startups, agencies, and remote teams turn meetings,
              tasks, and weekly updates into clear, automated workflows.
            </p>
            <div className="mt-6 flex gap-3 text-muted-foreground">
              <a aria-label="Twitter" href="#" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
              <a aria-label="GitHub" href="#" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
              <a aria-label="LinkedIn" href="#" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-foreground">{c.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l, i) => (
                  <li key={`${c.title}-${i}`}>
                    <Link to={l.to} className="transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} FlowPilot, Inc. All rights reserved.</p>
          <p>Built for the work behind the work.</p>
        </div>
      </div>
    </footer>
  );
}
