import { ctaBand } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

type CtaBandProps = {
  title?: string;
  description?: string;
  href?: string;
};

export function CtaBand({
  title = ctaBand.title,
  description = ctaBand.description,
  href = ctaBand.cta.href,
}: CtaBandProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-14 text-center shadow-xl shadow-brand/20 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-lines-light" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-white/80 sm:text-lg">{description}</p>
            <ButtonLink href={href} size="lg" variant="inverse" className="mt-8">
              {ctaBand.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
