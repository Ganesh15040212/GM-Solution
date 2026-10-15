import {
  BrainCircuit,
  Bug,
  Infinity as InfinityIcon,
  Layers,
  type LucideIcon,
  Monitor,
  PenTool,
  Server,
  Smartphone,
} from "lucide-react";

export const serviceModels = [
  {
    title: "Dedicated Developers",
    description: "Full-time engineers who work exclusively on your product as part of your team.",
    image: "/services/dedicated-developers.svg",
  },
  {
    title: "Team Extension",
    description: "Add skilled engineers to your existing team to close skill gaps and boost velocity.",
    image: "/services/team-extension.svg",
  },
  {
    title: "Offshore Development Center",
    description: "A dedicated offshore engineering center that runs as an extension of your company.",
    image: "/services/offshore.svg",
  },
  {
    title: "Remote Development Team",
    description: "A complete remote team of developers, QA, and leads, working inside your processes.",
    image: "/services/remote.svg",
  },
  {
    title: "Contract Staffing",
    description: "Engineers on fixed-term contracts for defined projects or temporary demand.",
    image: "/services/contract.svg",
  },
  {
    title: "Build Operate Transfer",
    description: "We build and run your engineering team, then transfer it to you when you're ready.",
    image: "/services/build-operate-transfer.svg",
  },
  {
    title: "Project-based Team",
    description: "A self-contained team assembled for one project, from kickoff to delivery.",
    image: "/services/project-team.svg",
  },
  {
    title: "Managed Team",
    description: "A fully managed team with delivery oversight. You get outcomes without the management overhead.",
    image: "/services/managed-team.svg",
  },
];

export type Role = {
  title: string;
  icon: LucideIcon;
  summary: string;
  skills: string[];
};

export const roles: Role[] = [
  {
    title: "Frontend Engineers",
    icon: Monitor,
    summary: "Ship fast, accessible interfaces your users love.",
    skills: ["React", "Angular", "Vue", "Next.js"],
  },
  {
    title: "Backend Engineers",
    icon: Server,
    summary: "Build secure, scalable APIs and services that hold up under load.",
    skills: [".NET", "Java", "Node.js", "Python", "PHP / Laravel"],
  },
  {
    title: "Full-Stack Engineers",
    icon: Layers,
    summary: "Move features from database to UI with a single engineer.",
    skills: ["React", "Node.js", ".NET", "Python"],
  },
  {
    title: "Mobile Engineers",
    icon: Smartphone,
    summary: "Launch and maintain native and cross-platform apps.",
    skills: ["Flutter", "React Native", "Android", "iOS"],
  },
  {
    title: "DevOps Engineers",
    icon: InfinityIcon,
    summary: "Automate deployments and keep your infrastructure reliable.",
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
  },
  {
    title: "QA Engineers",
    icon: Bug,
    summary: "Catch defects before your customers do.",
    skills: ["Selenium", "Cypress", "Playwright", "JMeter"],
  },
  {
    title: "Data & AI Engineers",
    icon: BrainCircuit,
    summary: "Turn your data into pipelines, insights, and AI-powered features.",
    skills: ["Python", "Machine Learning", "OpenAI", "LangChain", "RAG"],
  },
  {
    title: "UI/UX Designers",
    icon: PenTool,
    summary: "Design products that are intuitive to use and easy to build.",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
  },
];

export const techStack = [
  { name: "React", logo: "/tech/react.svg" },
  { name: "Node.js", logo: "/tech/nodejs.svg" },
  { name: "Python", logo: "/tech/python.svg" },
  { name: "Java", logo: "/tech/java.svg" },
  { name: ".NET", logo: "/tech/dotnet.svg" },
  { name: "AWS", logo: "/tech/aws.svg" },
  { name: "Azure", logo: "/tech/azure.svg" },
  { name: "Google Cloud", logo: "/tech/gcp.svg" },
];

export const techCategories = [
  { name: "Microsoft", items: [".NET", "Azure", "Power Platform", "SharePoint", "Dynamics 365"] },
  { name: "Frontend", items: ["React", "Angular", "Vue", "Next.js"] },
  { name: "Backend", items: ["Java", "Node.js", "Python", "PHP", "Laravel"] },
  { name: "Mobile", items: ["Flutter", "React Native", "Android", "iOS"] },
  { name: "Ecommerce", items: ["Magento", "Shopify", "WooCommerce", "BigCommerce"] },
  { name: "Cloud", items: ["AWS", "Azure", "GCP"] },
  { name: "DevOps", items: ["Docker", "Kubernetes", "Jenkins", "Terraform"] },
  { name: "QA", items: ["Selenium", "Cypress", "Playwright", "JMeter"] },
  { name: "AI", items: ["OpenAI", "LangChain", "Python", "RAG", "Machine Learning"] },
];
