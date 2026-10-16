import Image from "next/image";
import { roles, serviceModels } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceModels() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-[0.07]" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Services"
          title="Our staff augmentation services"
          description="Choose the model that fits how you want to work, from a single dedicated developer to a fully managed team."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceModels.map((service) => (
            <li
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-300 hover:border-brand/60"
            >
              <div className="flex h-40 items-center justify-center bg-white p-4">
                <Image
                  src={service.image}
                  alt=""
                  width={320}
                  height={200}
                  unoptimized
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 border-t-2 border-brand p-6">
                <h3 className="text-lg font-semibold text-fg">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted text-justify-prose">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Roles() {
  return (
    <section className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Roles we staff"
          title="The engineers your roadmap needs"
          description="Fill any gap in your team, from a single specialist to a complete product squad."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <li
              key={role.title}
              className="group flex flex-col rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-brand/60"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <role.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-fg">{role.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted text-justify-prose">{role.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${role.title} skills`}>
                {role.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-line-strong px-2.5 py-0.5 text-[11px] text-muted">
                    {skill}
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
