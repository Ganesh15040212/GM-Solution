import type { ComponentPropsWithoutRef } from "react";
import { ScrollLink } from "./ScrollLink";

type Variant = "primary" | "accent" | "inverse" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-sm shadow-brand/20 hover:bg-accent",
  accent: "bg-accent text-white shadow-sm shadow-accent/20 hover:bg-brand",
  inverse: "bg-white text-brand hover:bg-accent-soft",
  ghost: "border border-line-strong bg-white text-fg hover:border-brand hover:text-brand",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

type StyleProps = { variant?: Variant; size?: Size; className?: string };

export function buttonClasses({ variant = "primary", size = "md", className = "" }: StyleProps = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof ScrollLink> & StyleProps) {
  return <ScrollLink className={buttonClasses({ variant, size, className })} {...props} />;
}

export function Button({
  variant,
  size,
  className,
  ...props
}: ComponentPropsWithoutRef<"button"> & StyleProps) {
  return <button className={buttonClasses({ variant, size, className })} {...props} />;
}
