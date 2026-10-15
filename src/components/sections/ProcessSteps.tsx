import { processPhases } from "@/content/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pad = (n: number) => String(n).padStart(2, "0");

const stepOffsets = processPhases.reduce<number[]>(
  (offsets, phase, i) => [...offsets, i === 0 ? 0 : offsets[i - 1] + processPhases[i - 1].steps.length],
  [],
);

export function ProcessSteps() {
  return (
    <section className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Our hiring process"
          description="Four phases and eight steps, from your first call to a fully staffed team, with you in control at every step."
        />

        <ol className="mt-14 space-y-6 lg:space-y-8">
          {processPhases.map((phase, i) => (
            <li
              key={phase.title}
              className="grid gap-6 rounded-3xl border border-line bg-card p-7 sm:p-10 lg:grid-cols-[auto_1fr_20rem] lg:gap-10"
            >
              <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                <span className="font-display text-5xl font-semibold text-gradient">{pad(i + 1)}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <phase.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">Phase {i + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-fg sm:text-3xl">{phase.title}</h3>
                <p className="mt-3 text-lg text-fg/90">{phase.summary}</p>
                <p className="mt-4 leading-relaxed text-muted text-justify-prose">{phase.details}</p>
              </div>

              <ol className="space-y-3 self-start">
                {phase.steps.map((step, s) => (
                  <li key={step.title} className="flex gap-4 rounded-2xl border border-line bg-white/60 bg-lines p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand font-display text-xs font-semibold text-brand">
                      {pad(stepOffsets[i] + s + 1)}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-fg">{step.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
