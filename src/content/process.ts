import { Handshake, LifeBuoy, Rocket, Search, type LucideIcon } from "lucide-react";

export type ProcessPhase = {
  title: string;
  icon: LucideIcon;
  summary: string;
  details: string;
  steps: { title: string; description: string }[];
};

export const processPhases: ProcessPhase[] = [
  {
    title: "Discovery & Alignment",
    icon: Search,
    summary: "Share your goals, tech stack, and the skills you're missing.",
    details:
      "Every engagement starts with a requirement discussion. We learn what you're building, where your team is stretched, and agree on the role, seniority, working hours, and engagement model that fits.",
    steps: [
      {
        title: "Requirement Discussion",
        description: "We map your project goals, tech stack, team setup, and the exact skills you need.",
      },
    ],
  },
  {
    title: "Talent Matching",
    icon: Handshake,
    summary: "Review pre-vetted resumes within 24 hours and interview the engineers you like.",
    details:
      "We match your requirements against engineers who have already passed our technical screening. You get a focused shortlist instead of a pile of resumes — and the final call is always yours.",
    steps: [
      { title: "Résumé Sharing (24 hours)", description: "Matched, pre-vetted profiles in your inbox within a day." },
      { title: "Technical Screening", description: "Coding and domain assessments confirm every candidate's skills." },
      { title: "Client Interview", description: "You interview your preferred candidates on your schedule." },
    ],
  },
  {
    title: "Seamless Onboarding",
    icon: Rocket,
    summary: "Your engineers join your tools, rituals, and codebase in 48–72 hours.",
    details:
      "Once you've chosen your engineers, we handle the paperwork and setup so they can focus on getting productive — working as part of your team, not as a separate vendor.",
    steps: [
      { title: "Developer Selection", description: "You confirm the engineers who will join your team." },
      { title: "NDA", description: "NDA and IP protection are signed before any access is granted." },
      { title: "Onboarding", description: "Access to your Slack or Teams, repositories, and project tracker." },
    ],
  },
  {
    title: "Continuous Support",
    icon: LifeBuoy,
    summary: "Daily reporting, direct communication, and fast replacement if a fit isn't right.",
    details:
      "After kickoff we stay involved. You get daily reporting and direct access to your engineers, and we scale the team up or down — or replace an engineer immediately — as your needs change.",
    steps: [
      {
        title: "Project Kickoff",
        description: "Your engineers start delivering, with daily reporting and regular check-ins from us.",
      },
    ],
  },
];
