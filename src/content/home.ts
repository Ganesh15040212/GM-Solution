import {
  BadgeCheck,
  Clock,
  Eye,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const hero = {
  eyebrow: "IT Staff Augmentation Services",
  title: "Scale Your Development Team with Expert Engineers",
  description:
    "Add pre-vetted developers across .NET, Java, Python, React, Angular, Magento, Salesforce, SAP, AI, Data Engineering, QA, Cloud, and DevOps. Onboard experienced professionals within 48–72 hours while keeping complete control over your project.",
  cta: { label: "Contact Us", href: "/#contact" },
  highlights: ["Resumes in 24 hours", "Onboard in 48–72 hours", "Complete project control"],
  profiles: [
    { role: "Senior .NET Developer", skills: [".NET Core", "Azure", "SQL Server"] },
    { role: "React Developer", skills: ["React", "Next.js", "TypeScript"] },
    { role: "DevOps Engineer", skills: ["AWS", "Kubernetes", "Terraform"] },
  ],
};

export const trustBar = {
  title: "Trusted by",
  logos: [
    { name: "Deloitte", src: "/clients/deloitte.png", width: 101, height: 22 },
    { name: "Kanini", src: "/clients/kanini.png", width: 130, height: 34 },
  ],
  stats: [
    { value: "50+", label: "Engineers" },
    { value: "100+", label: "Projects delivered" },
    { value: "10+", label: "Years of experience" },
    { value: "95%", label: "Client retention" },
    { value: "48–72 hrs", label: "Developer deployment" },
  ],
};

export const explainer = {
  eyebrow: "The basics",
  title: "What is staff augmentation?",
  paragraphs: [
    "Staff augmentation lets you add skilled engineers to your existing team on demand. Instead of running a long hiring process, you tell us the skills you need and we provide vetted professionals who work inside your team, on your tools, under your direction.",
    "You keep full control of the roadmap, the code, and day-to-day priorities. Your augmented engineers join your stand-ups, commit to your repositories, and follow your processes, while we take care of sourcing, vetting, contracts, payroll, and replacements.",
    "The result: you close skill gaps and hit deadlines without adding permanent headcount, and you can scale the team up or down as your projects change.",
  ],
  comparison: {
    title: "Why companies choose GM Solution",
    columns: { traditional: "Traditional hiring", augmented: "GM Solution" },
    rows: [
      { label: "Duration", traditional: "30–90 days", augmented: "Hire in 48⁠–⁠72 hours" },
      { label: "Cost", traditional: "High HR cost", augmented: "No recruitment cost" },
      { label: "Hiring type", traditional: "Permanent hiring", augmented: "Flexible contracts" },
      { label: "Scaling", traditional: "Difficult", augmented: "Scale anytime" },
      { label: "Replacement", traditional: "Slow re-hiring", augmented: "Immediate replacement" },
      { label: "Payroll", traditional: "Payroll management", augmented: "No payroll burden" },
    ],
  },
};

export const challenges = {
  eyebrow: "Sound familiar?",
  title: "Are you facing these challenges?",
  description:
    "Staff augmentation removes the bottlenecks that slow engineering teams down, so you can keep shipping.",
  imageLabel: "Are you facing?",
  items: [
    "Hiring delays",
    "Tight project deadlines",
    "Budget constraints",
    "Skill shortages",
    "High employee attrition",
    "Need for niche technology experts",
    "Temporary project spikes",
    "Digital transformation initiatives",
  ],
  resolution: "GM Solution solves each of these with pre-vetted engineers who join your team in 48–72 hours.",
};

export const engagementModels = [
  {
    name: "Dedicated Staff",
    tag: "Long-term",
    summary: "Professionals embedded in your team for the long haul.",
    points: [
      "Full-time engineers working exclusively on your product",
      "Join your stand-ups, tools, and code reviews",
      "Build deep product and domain knowledge over time",
    ],
    bestFor: "Ongoing roadmaps, core product work, and long-running initiatives.",
  },
  {
    name: "Flexible Staff",
    tag: "Short-term",
    summary: "Project-based capacity exactly when you need it.",
    points: [
      "Add capacity for a launch, migration, or hard deadline",
      "Scale the team up or down between project phases",
      "Bring in niche skills for a defined scope",
    ],
    bestFor: "Workload spikes, time-boxed projects, and specialist expertise.",
  },
];

export const engagementOptions = [
  { name: "Dedicated Developer", detail: "Full-time resource" },
  { name: "Team Augmentation", detail: "Extend your existing team" },
  { name: "Offshore Development Team", detail: "A complete offshore squad" },
  { name: "Fixed Cost Project", detail: "Defined scope, fixed budget" },
  { name: "Time & Material", detail: "Flexible scope, pay as you go" },
];

export type Benefit = { title: string; description: string; icon: LucideIcon };

export const benefits: Benefit[] = [
  {
    title: "Faster hiring",
    description: "Skip months of recruitment. Get matched resumes in 24 hours and engineers onboarded in 48–72 hours.",
    icon: Zap,
  },
  {
    title: "No recruitment cost",
    description: "No recruiting fees, HR overhead, or payroll burden. Pay only for the capacity you use.",
    icon: Wallet,
  },
  {
    title: "Vetted talent",
    description: "Every engineer passes technical screening, and you interview them before they join.",
    icon: BadgeCheck,
  },
  {
    title: "Flexible scaling",
    description: "Scale your team up or down based on project demand, without long-term commitments.",
    icon: SlidersHorizontal,
  },
  {
    title: "Dedicated developers",
    description: "Your engineers work exclusively for you, as part of your team and your processes.",
    icon: UserCheck,
  },
  {
    title: "Complete transparency",
    description: "Daily reporting and direct communication with every engineer on your project.",
    icon: Eye,
  },
  {
    title: "Time-zone overlap",
    description: "Working hours aligned with your team's for real-time collaboration.",
    icon: Clock,
  },
  {
    title: "Enterprise ready, no hiring risk",
    description: "NDA, IP protection, secure access, and compliance, plus immediate replacement if a fit isn't right.",
    icon: ShieldCheck,
  },
];

export const ctaBand = {
  title: "Ready to add engineers to your team?",
  description:
    "Tell us what you're building and the skills you need. You'll have matched resumes within 24 hours.",
  cta: { label: "Contact Us", href: "/#contact" },
};
