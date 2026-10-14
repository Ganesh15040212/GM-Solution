import { BadgeCheck, CheckCircle2, UserRound } from "lucide-react";
import { hero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

function ProfileCard({ role, skills, className }: { role: string; skills: string[]; className: string }) {
  return (
    <div
      className={`absolute w-60 overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-brand/15 ${className}`}
      aria-hidden="true"
    >
      <div className="h-14 bg-brand-gradient" />
      <div className="-mt-8 px-5 pb-5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-accent-soft">
          <UserRound className="h-8 w-8 text-brand" strokeWidth={2.2} />
        </div>
        <p className="mt-3 text-center font-display text-sm font-bold text-fg">{role}</p>
        <ul className="mt-4 space-y-2.5">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-xs text-muted">{skill}</span>
              <span className="ml-auto h-1 w-10 rounded-full bg-line" />
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-accent-soft py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand">
          <BadgeCheck className="h-3.5 w-3.5" />
          Vetted &amp; available
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [first, second, third] = hero.profiles;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-white">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-x" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[44rem] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-16 py-20 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{hero.title}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.description}</p>

          <div className="mt-9">
            <ButtonLink href={hero.cta.href} size="lg">
              {hero.cta.label}
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-fg">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto hidden h-[26rem] w-full max-w-md sm:block">
          <ProfileCard {...third} className="top-10 right-0 rotate-[8deg] opacity-70" />
          <ProfileCard {...second} className="top-4 left-0 -rotate-[8deg] opacity-85" />
          <ProfileCard {...first} className="top-0 left-1/2 -translate-x-1/2 animate-float" />
        </div>
      </Container>
    </section>
  );
}
