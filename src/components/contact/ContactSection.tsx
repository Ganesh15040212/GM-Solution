import { FileText, Mail, MapPin, MessageSquareText, Phone, Rocket } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Address } from "@/components/ui/Address";
import { ContactForm } from "./ContactForm";

const nextSteps = [
  { icon: MessageSquareText, text: "Tell us about your project and the skills you need." },
  { icon: FileText, text: "Receive résumés of matched, pre-vetted engineers within 24 hours." },
  { icon: Rocket, text: "Interview, select, and onboard your engineers in 48–72 hours." },
];

export function ContactSection({ id = "contact" }: { id?: string }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's discuss your project"
            description="Share a few details and we'll get back to you with the right engineering support."
            align="left"
          />

          <ol className="mt-10 space-y-5">
            {nextSteps.map((step, i) => (
              <li key={step.text} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="pt-2 text-sm text-muted">
                  <span className="font-semibold text-fg">Step {i + 1}. </span>
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-4 rounded-2xl border border-line bg-surface p-6">
            <p className="text-sm font-medium text-subtle">Prefer to reach us directly?</p>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 font-display text-lg font-semibold text-fg hover:text-accent"
            >
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-3 font-display text-lg font-semibold text-fg hover:text-accent"
            >
              <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
              {site.phone.display}
            </a>
            <div className="flex items-start gap-3 text-sm text-muted">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <Address />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-2xl shadow-brand/10 sm:p-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
