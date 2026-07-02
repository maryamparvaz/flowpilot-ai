import {
  Sparkles,
  Workflow,
  ListChecks,
  FileText,
  BarChart3,
  Plug,
  Slack,
  Github,
  Mail,
  Calendar,
  Figma,
  Chrome,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Sparkles,
    title: "Meeting notes, written for you",
    description:
      "FlowPilot joins your calls, captures the transcript, and writes a clean recap with decisions, owners, and next steps.",
  },
  {
    icon: Workflow,
    title: "Visual workflow builder",
    description:
      "Map the steps your team already follows — intake, review, handoff — and let FlowPilot run them in the background.",
  },
  {
    icon: ListChecks,
    title: "Tasks that route themselves",
    description:
      "Assign work based on who's available, what they're good at, and what's on their plate this week — no manual triage.",
  },
  {
    icon: FileText,
    title: "Weekly updates, on autopilot",
    description:
      "Every Friday, FlowPilot drafts a clear weekly update from real project activity so leads stop chasing status.",
  },
  {
    icon: BarChart3,
    title: "Honest team analytics",
    description:
      "See where work actually slows down — handoffs, reviews, blocked tickets — with dashboards your team will trust.",
  },
  {
    icon: Plug,
    title: "Works with the tools you have",
    description:
      "Slack, Notion, Linear, GitHub, Gmail, HubSpot — connect once and FlowPilot keeps both sides in sync.",
  },
];

export interface PricingPlan {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  highlighted?: boolean;
  cta: string;
  features: string[];
}

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "For small teams getting their first workflows in place.",
    monthly: 12,
    yearly: 9,
    cta: "Start free",
    features: [
      "Up to 5 teammates",
      "10 active workflows",
      "5 hours of meeting transcription / month",
      "Core analytics dashboard",
      "Email support",
    ],
  },
  {
    name: "Pro",
    tagline: "For growing teams running multiple projects in parallel.",
    monthly: 29,
    yearly: 24,
    highlighted: true,
    cta: "Start free",
    features: [
      "Up to 25 teammates",
      "Unlimited workflows",
      "Unlimited meeting transcription",
      "Advanced analytics and weekly reports",
      "All 80+ integrations",
      "Priority email and chat support",
    ],
  },
  {
    name: "Scale",
    tagline: "For agencies and operations teams that need more control.",
    monthly: 79,
    yearly: 64,
    cta: "Talk to sales",
    features: [
      "Unlimited teammates",
      "Custom workflow templates",
      "SSO, SCIM, and granular roles",
      "Custom report builder",
      "Dedicated success manager",
      "99.9% uptime SLA and audit logs",
    ],
  },
];

export interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  pro: string | boolean;
  scale: string | boolean;
}

export const comparison: ComparisonRow[] = [
  { feature: "Teammates", starter: "5", pro: "25", scale: "Unlimited" },
  { feature: "Active workflows", starter: "10", pro: "Unlimited", scale: "Unlimited" },
  { feature: "Meeting transcription", starter: "5 hrs / mo", pro: "Unlimited", scale: "Unlimited" },
  { feature: "Weekly reports", starter: true, pro: true, scale: true },
  { feature: "Advanced analytics", starter: false, pro: true, scale: true },
  { feature: "Integrations", starter: "20", pro: "All 80+", scale: "All 80+ and custom" },
  { feature: "SSO and SCIM", starter: false, pro: false, scale: true },
  { feature: "Audit logs", starter: false, pro: false, scale: true },
  { feature: "Dedicated success manager", starter: false, pro: false, scale: true },
  { feature: "Support", starter: "Email", pro: "Priority", scale: "Dedicated" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We replaced three separate tools with FlowPilot and our weekly review went from 90 minutes to 20. The recaps alone are worth the price.",
    name: "Maya Okafor",
    role: "Head of Operations",
    company: "Northwind Labs",
    initials: "MO",
  },
  {
    quote:
      "Running twelve client projects used to mean a spreadsheet I dreaded opening. Now the workload view tells me who's stretched before they have to.",
    name: "Daniel Kovac",
    role: "Founder",
    company: "Studio Lumen",
    initials: "DK",
  },
  {
    quote:
      "Setup took an afternoon. The Friday digest goes straight to our board now — same numbers, no manual writing.",
    name: "Priya Raman",
    role: "Chief Operating Officer",
    company: "Arclight",
    initials: "PR",
  },
];

export interface FAQ {
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
  {
    q: "Do I need a technical person to set up workflows?",
    a: "No. Workflows are built by dragging steps together in the canvas. Most teams have their first three workflows running on day one.",
  },
  {
    q: "How does meeting transcription actually work?",
    a: "Connect Zoom, Google Meet, or Microsoft Teams. FlowPilot joins as a silent participant, transcribes the call, and shares a recap with decisions, owners, and follow-ups within minutes.",
  },
  {
    q: "How do you handle our data?",
    a: "FlowPilot is SOC 2 Type II certified. Data is encrypted in transit and at rest, stays in your workspace, and is never used to train third-party models.",
  },
  {
    q: "Can I try FlowPilot before paying?",
    a: "Yes. Every plan starts with a 14-day free trial of the full product. No credit card required.",
  },
  {
    q: "Which tools does FlowPilot integrate with?",
    a: "We ship native integrations with Slack, Notion, Linear, Jira, GitHub, Google Workspace, HubSpot, Figma, and 70+ more. Anything else can be connected through our API.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes. Cancel in one click from billing settings. No phone call, no retention email, no last-minute discount.",
  },
];

export interface UseCase {
  title: string;
  description: string;
  bullets: string[];
  badge: string;
}

export const useCases: UseCase[] = [
  {
    badge: "Startups",
    title: "Replace five tools with one clear system",
    description:
      "Stop juggling tabs. Run product, ops, and weekly reviews from one workspace your whole team will actually open.",
    bullets: ["Async standups", "Investor-ready weekly updates", "Onboarding in an afternoon"],
  },
  {
    badge: "Agencies",
    title: "Run every client engagement from one place",
    description:
      "Reusable templates, time tracking, and automated client updates — built for teams billing by the hour.",
    bullets: ["Client-facing portals", "Profitability per project", "Reusable engagement templates"],
  },
  {
    badge: "Remote teams",
    title: "Stay in sync across every time zone",
    description:
      "Written recaps and time-zone-aware routing keep work moving even when half the team is offline.",
    bullets: ["Time-zone-aware assignment", "Async video recaps", "Quiet-hour rules"],
  },
];

export const companyLogos: string[] = [
  "Northwind",
  "Arclight",
  "Lumen",
  "Vertex",
  "Halcyon",
  "Pinecrest",
  "Stratify",
  "Kepler",
];

export interface Integration {
  name: string;
  category: string;
  icon: LucideIcon;
}

export const integrations: Integration[] = [
  { name: "Slack", category: "Communication", icon: Slack },
  { name: "GitHub", category: "Development", icon: Github },
  { name: "Gmail", category: "Email", icon: Mail },
  { name: "Google Calendar", category: "Scheduling", icon: Calendar },
  { name: "Figma", category: "Design", icon: Figma },
  { name: "Chrome", category: "Browser", icon: Chrome },
];

export interface Stat {
  label: string;
  value: string;
  delta: string;
  positive?: boolean;
}

export const dashboardStats: Stat[] = [
  { label: "Tasks shipped", value: "1,284", delta: "+12.4%", positive: true },
  { label: "Avg. cycle time", value: "2.1d", delta: "−18%", positive: true },
  { label: "Workflows run", value: "9,420", delta: "+34%", positive: true },
  { label: "Hours saved", value: "312", delta: "this week", positive: true },
];
