const DEFAULT_SITE_URL = "https://gmsolllc.com";

function resolveSiteUrl(value: string | undefined) {
  for (const candidate of (value ?? "").split(/[\s,]+/)) {
    try {
      const url = new URL(candidate);
      if (url.protocol === "https:" || url.protocol === "http:") return url.origin;
    } catch {}
  }
  return DEFAULT_SITE_URL;
}

export const site = {
  name: "GM Solution LLC",
  shortName: "GM Solution",
  domain: "gmsolllc.com",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  tagline: "IT Staff Augmentation Services",
  description:
    "Scale your engineering team with pre-vetted developers across .NET, Java, Python, React, AI, Cloud, and DevOps. Get matched resumes in 24 hours and onboard experienced engineers in 48–72 hours with GM Solution LLC.",
  email: "accounts@gmsolllc.com",
  phone: { display: "+1 (718) 902-4586", href: "tel:+17189024586" },
  address: {
    street: "16192 Coastal Highway",
    city: "Lewes",
    region: "Delaware",
    regionCode: "DE",
    postalCode: "19958",
    country: "United States",
    countryCode: "US",
  },
  // [PLACEHOLDER] Replace with the real LinkedIn company page URL.
  linkedin: "https://www.linkedin.com/company/gm-solution-llc",
  copyright: "© 2025 GM Solution LLC",
  keywords: [
    "IT staff augmentation",
    "staff augmentation services",
    "hire dedicated developers",
    "offshore development center",
    "team extension",
    "remote development team",
    "contract staffing",
    "GM Solution LLC",
  ],
} as const;

export const navigation = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "How It Works", id: "how-it-works" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
] as const;

export type SectionId = (typeof navigation)[number]["id"];

export const sectionHref = (id: SectionId) => `/#${id}`;
