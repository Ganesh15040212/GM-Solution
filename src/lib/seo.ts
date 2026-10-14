import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetaInput = {
  title?: string;
  description?: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`;
  const desc = description ?? site.description;

  return {
    title: title ?? { absolute: fullTitle },
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      title: fullTitle,
      description: desc,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.svg`,
    email: site.email,
    telephone: site.phone.href.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.regionCode,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    description: site.description,
    sameAs: [site.linkedin],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone.href.replace("tel:", ""),
        availableLanguage: ["English"],
      },
    ],
    knowsAbout: ["IT staff augmentation", "Software engineering", "Dedicated development teams"],
  };
}
