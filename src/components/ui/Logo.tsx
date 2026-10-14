import { site } from "@/content/site";
import { ScrollLink } from "./ScrollLink";

type Tone = "dark" | "light";

export function LogoMark({ className = "h-8 w-8", tone = "dark" }: { className?: string; tone?: Tone }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="7" fill={tone === "dark" ? "#012060" : "#ffffff"} />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontFamily="'Public Sans', Arial, sans-serif"
        fontWeight="800"
        fontSize="13"
        fill={tone === "dark" ? "#ffffff" : "#012060"}
      >
        GM
      </text>
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: Tone }) {
  return (
    <ScrollLink href="/#home" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
      <LogoMark className="h-8 w-8 shrink-0" tone={tone} />
      <span
        className={`whitespace-nowrap font-display text-xl font-bold tracking-tight ${
          tone === "dark" ? "text-brand" : "text-white"
        }`}
      >
        {site.name}
      </span>
    </ScrollLink>
  );
}
