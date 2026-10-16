import { Check, X } from "lucide-react";
import { explainer } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoMark } from "@/components/ui/Logo";

export function Explainer() {
  const { comparison } = explainer;

  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow={explainer.eyebrow} title={explainer.title} align="left" />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted text-justify-prose indent-[2em] sm:text-lg">
            {explainer.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="gradient-ring rounded-3xl bg-card p-5 sm:p-8">
          <h3 className="text-center text-lg font-semibold text-fg sm:text-xl">{comparison.title}</h3>
          <table className="mt-6 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="w-1/4 pb-4">
                  <span className="sr-only">Criteria</span>
                </th>
                <th scope="col" className="w-[37.5%] pb-4 text-xs font-semibold uppercase tracking-wider text-subtle">
                  {comparison.columns.traditional}
                </th>
                <th scope="col" className="w-[37.5%] pb-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                    <LogoMark className="h-5 w-5 shrink-0" />
                    {comparison.columns.augmented}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3.5 pr-2 text-[11px] font-semibold uppercase tracking-wider text-brand sm:text-xs">
                    {row.label}
                  </th>
                  <td className="py-3.5 pr-2 text-muted">
                    <span className="flex items-start gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-subtle" aria-hidden="true" />
                      {row.traditional}
                    </span>
                  </td>
                  <td className="py-3.5 text-fg">
                    <span className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {row.augmented}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
