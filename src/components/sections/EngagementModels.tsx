import { Check } from "lucide-react";
import { engagementModels, engagementOptions } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EngagementModels() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-[0.07]" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Engagement models"
          title="Choose how your team scales"
          description="Commit long-term or add capacity for a single project. You can switch as your needs change."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {engagementModels.map((model, i) => (
            <article
              key={model.name}
              className={`flex flex-col rounded-3xl bg-card p-8 sm:p-10 ${
                i === 0 ? "gradient-ring" : "border border-line-strong"
              }`}
            >
              <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                {model.tag}
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-fg sm:text-3xl">{model.name}</h3>
              <p className="mt-3 text-muted text-justify-prose">{model.summary}</p>
              <ul className="mt-7 space-y-3.5">
                {model.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-fg sm:text-base">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-line pt-6 text-sm text-muted text-justify-prose">
                <span className="font-semibold text-fg">Best for: </span>
                {model.bestFor}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-subtle">
            Flexible engagement options
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {engagementOptions.map((option) => (
              <li
                key={option.name}
                className="rounded-2xl border border-line bg-card/80 p-5 text-center transition-colors duration-300 hover:border-brand/60"
              >
                <p className="font-display text-sm font-semibold text-fg">{option.name}</p>
                <p className="mt-1.5 text-xs text-muted">{option.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
