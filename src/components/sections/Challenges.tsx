import Image from "next/image";
import { AlertCircle, ArrowRight } from "lucide-react";
import { challenges } from "@/content/home";
import { sectionHref } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollLink } from "@/components/ui/ScrollLink";

export function Challenges() {
  return (
    <section className="border-y border-line bg-surface py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[20rem_1fr] lg:gap-20">
        <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-brand/10">
          <div className="bg-accent-soft pt-6">
            <Image
              src="/images/challenges.svg"
              alt="Illustration of a professional shrugging, unsure how to solve a hiring problem"
              width={320}
              height={288}
              unoptimized
              className="mx-auto h-72 w-full object-contain object-bottom"
            />
          </div>
          <figcaption className="bg-brand-gradient py-6 text-center font-display text-2xl font-bold text-white">
            {challenges.imageLabel}
          </figcaption>
        </figure>

        <div>
          <SectionHeading
            eyebrow={challenges.eyebrow}
            title={challenges.title}
            description={challenges.description}
            align="left"
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {challenges.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-line border-l-4 border-l-accent bg-white px-4 py-3.5 text-sm text-fg transition-colors duration-300 hover:border-brand/60 hover:text-brand"
              >
                <AlertCircle className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 flex flex-col gap-3 text-muted sm:flex-row sm:items-center sm:gap-4">
            {challenges.resolution}
            <ScrollLink
              href={sectionHref("contact")}
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand hover:text-accent"
            >
              Talk to us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ScrollLink>
          </p>
        </div>
      </Container>
    </section>
  );
}
