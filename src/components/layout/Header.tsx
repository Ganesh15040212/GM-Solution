"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, sectionHref, type SectionId } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ScrollLink } from "@/components/ui/ScrollLink";

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    if (!enabled) return;
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(pathname === "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open ? "border-line bg-white/90 shadow-sm shadow-brand/5 backdrop-blur-lg" : "border-transparent bg-white/60 backdrop-blur-sm"
        }`}
      >
        <Container className="flex h-16 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    href={sectionHref(item.id)}
                    aria-current={active === item.id ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active === item.id ? "text-brand" : "text-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${
                        active === item.id ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ButtonLink href={sectionHref("contact")}>Contact Us</ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain bg-white lg:hidden"
        >
          <Container className="py-6">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <ScrollLink
                      href={sectionHref(item.id)}
                      onClick={close}
                      aria-current={active === item.id ? "true" : undefined}
                      className={`block border-b border-line py-4 font-display text-lg ${
                        active === item.id ? "text-brand" : "text-fg"
                      }`}
                    >
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ButtonLink href={sectionHref("contact")} size="lg" className="mt-8 w-full" onClick={close}>
              Contact Us
            </ButtonLink>
          </Container>
        </div>
      )}
    </>
  );
}
