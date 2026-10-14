import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-lines" aria-hidden="true" />
      <Container className="relative flex flex-col items-center py-32 text-center">
        <p className="font-display text-7xl font-semibold text-gradient">404</p>
        <h1 className="mt-6 text-3xl font-semibold">This page doesn&apos;t exist</h1>
        <p className="mt-4 max-w-md text-muted">The link may be broken or the page may have moved.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/#contact" size="lg" variant="ghost">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
