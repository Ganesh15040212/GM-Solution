import { benefits } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Benefits"
          title="Why choose us?"
          description="Everything you need from an in-house hire, minus the cost, delay, and risk."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="group bg-white p-8 transition-colors hover:bg-surface">
              <benefit.icon
                className="h-7 w-7 text-accent transition-colors group-hover:text-brand"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-lg font-semibold text-fg">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted text-justify-prose">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
