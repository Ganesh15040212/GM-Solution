import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, sectionHref, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Address } from "@/components/ui/Address";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { ScrollLink } from "@/components/ui/ScrollLink";

const linkClass = "inline-flex items-start gap-2.5 text-white/70 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand text-white">
      <div className="pointer-events-none absolute inset-0 bg-lines-light" aria-hidden="true" />
      <Container className="relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr]">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Pre-vetted engineers who join your team, follow your process, and help you ship — on your terms.
          </p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name} on LinkedIn`}
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white hover:text-brand"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Company</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.id}>
                <ScrollLink href={sectionHref(item.id)} className="text-white/70 transition-colors hover:text-white">
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-2.5 text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <Address />
            </li>
            <li>
              <a href={site.phone.href} className={linkClass}>
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}. All rights reserved.</p>
          <p>{site.domain}</p>
        </Container>
      </div>
    </footer>
  );
}
