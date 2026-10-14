import Image from "next/image";
import { trustBar } from "@/content/home";
import { Container } from "@/components/ui/Container";

export function TrustBar() {
  return (
    <section aria-labelledby="trust-title" className="border-y border-line bg-surface py-14">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
          <h2 id="trust-title" className="text-sm font-medium uppercase tracking-[0.2em] text-subtle">
            {trustBar.title}
          </h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {trustBar.logos.map((logo) => (
              <li
                key={logo.name}
                className="group flex h-16 w-44 items-center justify-center rounded-xl bg-white/95 px-6 transition-colors duration-300 hover:bg-white"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-7 w-auto object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {trustBar.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center bg-card px-4 py-7 text-center ${
                i === trustBar.stats.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <dt className="order-2 mt-2 text-xs uppercase tracking-wider text-muted">{stat.label}</dt>
              <dd className="order-1 font-display text-3xl font-semibold text-gradient sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
