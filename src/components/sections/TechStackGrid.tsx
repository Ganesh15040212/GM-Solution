import Image from "next/image";
import { techCategories, techStack } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStackGrid() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Technologies"
          title="Technologies we provide"
          description="Engineers fluent in the frameworks, platforms, and clouds modern teams rely on."
        />

        <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-3 rounded-full border border-line bg-card py-2 pr-5 pl-2 transition-colors duration-300 hover:border-brand/60"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white p-1.5">
                <Image src={tech.logo} alt="" width={24} height={24} unoptimized className="h-6 w-6 object-contain" />
              </span>
              <span className="text-sm font-medium text-fg">{tech.name}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category) => (
            <li
              key={category.name}
              className="rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-brand/60"
            >
              <h3 className="text-base font-semibold text-fg">{category.name}</h3>
              <div className="my-4 h-px bg-brand-gradient opacity-50" aria-hidden="true" />
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item} className="rounded-full bg-brand/10 px-3 py-1 text-xs text-brand">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
