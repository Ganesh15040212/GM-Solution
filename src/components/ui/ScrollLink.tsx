"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type ScrollLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string };

const INTERRUPT_EVENTS = ["wheel", "touchstart", "keydown", "mousedown"] as const;
let frame = 0;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

function stopScroll() {
  cancelAnimationFrame(frame);
  frame = 0;
  INTERRUPT_EVENTS.forEach((type) => window.removeEventListener(type, stopScroll));
}

function targetY(id: string) {
  const root = document.documentElement;
  const maxY = root.scrollHeight - window.innerHeight;
  const target = id === "home" ? null : document.getElementById(id);
  if (!target) return 0;
  const offset = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
  return Math.min(maxY, Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset));
}

export function scrollToSection(id: string) {
  stopScroll();
  const from = window.scrollY;
  const distance = Math.abs(targetY(id) - from);

  if (distance < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: targetY(id), behavior: "instant" });
    return;
  }

  const duration = Math.min(900, Math.max(450, 110 * Math.sqrt(distance / 100)));
  const start = performance.now();

  const step = (now: number) => {
    const progress = Math.min(1, (now - start) / duration);
    window.scrollTo({ top: from + (targetY(id) - from) * easeInOutCubic(progress), behavior: "instant" });
    if (progress < 1) frame = requestAnimationFrame(step);
    else stopScroll();
  };

  INTERRUPT_EVENTS.forEach((type) => window.addEventListener(type, stopScroll, { passive: true }));
  frame = requestAnimationFrame(step);
}

export function ScrollLink({ href, onClick, ...props }: ScrollLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || pathname;
    const id = href.slice(hashIndex + 1);
    if (path !== pathname || !document.getElementById(id)) return;

    event.preventDefault();
    scrollToSection(id);
    window.history.replaceState(window.history.state, "", id === "home" ? pathname : `#${id}`);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
