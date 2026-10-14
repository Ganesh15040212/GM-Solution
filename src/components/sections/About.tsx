import { Mail, MapPin, Phone } from "lucide-react";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Address } from "@/components/ui/Address";

export function About() {
  const { intro, story, mission, values, team, presence } = about;

  return (
    <section className="border-t border-line bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} description={intro.description} />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-fg">{story.title}</h3>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-muted text-justify-prose sm:text-lg">
              {story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <dl className="grid content-start gap-4 sm:grid-cols-2">
            {story.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col rounded-2xl border border-line bg-card p-6">
                <dt className="order-2 mt-1 text-xs font-semibold uppercase tracking-wider text-subtle">{fact.label}</dt>
                <dd className="order-1 font-display text-3xl font-semibold text-gradient">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl overflow-hidden rounded-3xl bg-brand-gradient p-8 text-center shadow-xl shadow-brand/20 sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-lines-light" aria-hidden="true" />
          <h3 className="relative text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{mission.title}</h3>
          <p className="relative mt-5 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
            {mission.statement}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <li key={value.title} className="rounded-2xl border border-line bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <value.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h4 className="mt-5 text-lg font-semibold text-fg">{value.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-fg">{team.title}</h3>
            <p className="mt-3 leading-relaxed text-muted text-justify-prose">{team.description}</p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {team.expertise.map((area) => (
                <li key={area} className="rounded-full border border-line-strong bg-card px-4 py-2 text-sm text-fg">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-fg">{presence.title}</h3>
            <p className="mt-3 text-muted">{presence.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-card p-6">
                <h4 className="flex items-center gap-2 font-semibold text-fg">
                  <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {presence.officeName}
                </h4>
                <div className="my-4 h-px bg-brand-gradient opacity-50" aria-hidden="true" />
                <p className="mb-1 text-sm font-semibold text-fg">{site.name}</p>
                <Address className="text-sm text-muted" />
              </div>
              <div className="rounded-2xl border border-line bg-card p-6">
                <h4 className="font-semibold text-fg">Connect</h4>
                <div className="my-4 h-px bg-brand-gradient opacity-50" aria-hidden="true" />
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href={site.phone.href} className="inline-flex items-center gap-2 text-muted hover:text-brand">
                      <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                      {site.phone.display}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-muted hover:text-brand">
                      <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
