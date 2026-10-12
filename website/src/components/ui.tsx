import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { LiquidBlobs } from "./liquid-blobs";
import { LiquidReveal } from "./liquid-reveal";

type Variant = "gold" | "outline-light" | "bronze" | "navy" | "outline-dark" | "black";

const variants: Record<Variant, string> = {
  gold: "bg-gold-400 text-navy-900 hover:bg-gold-300",
  "outline-light": "border border-white/80 text-white hover:bg-white/10",
  bronze: "bg-bronze text-cream-50 hover:bg-[#654510]",
  navy: "bg-navy-900 text-white hover:bg-navy-800",
  "outline-dark": "border border-navy-900/30 text-navy-900 hover:bg-navy-900/5",
  black: "bg-black text-white hover:bg-neutral-800",
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  size = "md",
  arrow = true,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md";
  arrow?: boolean;
  external?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors ${
    size === "sm" ? "min-h-10 px-4 text-sm" : "min-h-12 px-6 text-base"
  } ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4" aria-hidden="true" />}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-caps text-sm font-semibold tracking-[0.3em] uppercase ${className}`}>{children}</p>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`h-0.5 w-16 bg-gold-400 ${className}`} aria-hidden="true" />;
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  subtleReveal = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  /** Quieter scroll animations for this page. */
  subtleReveal?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,183,109,0.18),transparent_60%)]"
        aria-hidden="true"
      />
      <LiquidBlobs />
      {/* Starts the page's scroll animations once this page has hydrated. */}
      <LiquidReveal subtle={subtleReveal} />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Eyebrow className="text-gold-400">{eyebrow}</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        <GoldRule className="mt-5" />
        {intro && <p className="mt-5 max-w-2xl text-lg text-white/80">{intro}</p>}
      </div>
    </section>
  );
}

/** Marks content the church still has to provide, so it is easy to spot before launch. */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-gold-200/60 px-1.5 py-0.5 text-[0.95em] text-bronze">[{children}]</span>
  );
}

/** Renders text, turning any [bracketed] part into a Placeholder tag. */
export function WithPlaceholders({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") ? <Placeholder key={i}>{part.slice(1, -1)}</Placeholder> : <span key={i}>{part}</span>,
      )}
    </>
  );
}
