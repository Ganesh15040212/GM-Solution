import { Eye, Handshake, Target, type LucideIcon } from "lucide-react";

export const about = {
  intro: {
    eyebrow: "About GM Solution",
    title: "Engineering capacity you can count on",
    description:
      "We help software teams ship more by giving them fast, flexible access to experienced engineers — without the overhead of traditional hiring.",
  },
  story: {
    title: "Who we are",
    paragraphs: [
      "GM Solution LLC helps companies scale their engineering teams with pre-vetted developers — without the cost, delay, and risk of traditional hiring. With more than 10 years of delivery experience, 50+ engineers, and 100+ projects delivered, we know what it takes to add the right people to a team and keep projects moving.",
      "Our engineers cover .NET, Java, Python, React, Angular, Magento, Salesforce, SAP, AI, data engineering, QA, cloud, and DevOps. You interview and approve every engineer, keep complete control of your project, and get daily reporting and direct communication from day one.",
      "95% of our clients stay with us — because we stay involved after onboarding and adapt the team as their needs change.",
    ],
    facts: [
      { label: "Years of experience", value: "10+" },
      { label: "Engineers", value: "50+" },
      { label: "Projects delivered", value: "100+" },
      { label: "Client retention", value: "95%" },
    ],
  },
  mission: {
    title: "Our mission",
    statement:
      "To help every software team scale with confidence — by connecting them with skilled engineers who integrate quickly, communicate clearly, and deliver from day one.",
  },
  values: [
    {
      title: "Outcomes first",
      description: "We measure success by what your team ships, not by how many people we place.",
      icon: Target,
    },
    {
      title: "Complete transparency",
      description: "Daily reporting, honest timelines, and direct access to the engineers on your project.",
      icon: Eye,
    },
    {
      title: "Long-term partnership",
      description: "We stay involved after onboarding, adapting the team as your needs evolve.",
      icon: Handshake,
    },
  ] satisfies { title: string; description: string; icon: LucideIcon }[],
  team: {
    title: "Our team",
    description:
      "A 50+ strong team of developers, QA engineers, DevOps specialists, designers, and AI engineers — each vetted for technical depth and clear communication.",
    expertise: [
      "Microsoft & .NET",
      "Java & Python",
      "React & Angular",
      "Mobile",
      "Magento & Ecommerce",
      "Salesforce & SAP",
      "AI & Data Engineering",
      "Cloud & DevOps",
      "QA & Automation",
    ],
  },
  presence: {
    title: "Our office",
    description: "Reach our team at our U.S. headquarters.",
    officeName: "Headquarters — USA",
  },
};
