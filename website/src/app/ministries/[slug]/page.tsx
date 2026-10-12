import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  HandHeart,
  Heart,
  House,
  Megaphone,
  MessageCircle,
  Mic,
  Music,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";
import { LiquidReveal } from "@/components/liquid-reveal";
import { ButtonLink, Eyebrow, WithPlaceholders } from "@/components/ui";
import { ministries, ministryDetails, site, type MinistryDetail } from "@/lib/site";

const icons: Record<MinistryDetail["highlights"][number]["icon"], typeof BookOpen> = {
  book: BookOpen,
  music: Music,
  users: Users,
  sparkles: Sparkles,
  heart: Heart,
  message: MessageCircle,
  graduation: GraduationCap,
  calendar: Calendar,
  hands: HandHeart,
  megaphone: Megaphone,
  home: House,
  mic: Mic,
};

type Props = { params: Promise<{ slug: string }> };

// Every real ministry is prerendered from generateStaticParams, so those navigations are instant already;
// only unknown slugs (which 404) would wait on the URL, so skip the instant-navigation check here.
export const instant = false;

export function generateStaticParams() {
  return ministries.map((m) => ({ slug: m.slug }));
}

function find(slug: string) {
  const ministry = ministries.find((m) => m.slug === slug);
  return ministry ? { ministry, detail: ministryDetails[ministry.slug] } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = find((await params).slug);
  if (!found) return {};
  return { title: found.ministry.name, description: `${found.ministry.kind}. ${found.detail.tagline}` };
}

export default async function MinistryPage({ params }: Props) {
  const found = find((await params).slug);
  if (!found) notFound();
  const { ministry: m, detail: d } = found;
  const { accent, accent2, tint, ink } = m.theme;
  const others = ministries.filter((o) => o.slug !== m.slug);
  const joinHref = `mailto:${site.email}?subject=${encodeURIComponent(`Getting involved: ${m.name}`)}`;

  return (
    <>
      {/* Hero, in this ministry's own colours */}
      <section className="relative overflow-hidden" style={{ backgroundColor: tint, borderTop: `6px solid ${accent}` }}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="liquid-blob -top-24 -right-20 size-96 opacity-30" style={{ backgroundColor: accent2 }} />
          <div className="liquid-blob -bottom-32 left-1/4 size-80 opacity-25 [animation-delay:-8s]" style={{ backgroundColor: accent }} />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:py-20">
          <div>
            <Link href="/ministries" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline" style={{ color: ink }}>
              <ArrowLeft className="size-4" aria-hidden="true" /> All ministries
            </Link>
            <p className="mt-6 font-caps text-sm font-semibold tracking-[0.3em] uppercase" style={{ color: ink }}>
              {m.kind}
            </p>
            <h1 className="mt-2 font-caps text-4xl leading-tight font-extrabold text-navy-900 uppercase sm:text-5xl">{m.name}</h1>
            <p className="mt-4 font-display text-2xl text-ink/90 italic">{d.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={joinHref} variant="navy">
                Get involved
              </ButtonLink>
              <ButtonLink href="/visit" variant="outline-dark" arrow={false}>
                Plan your visit
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl" style={{ outline: `4px solid ${accent2}`, outlineOffset: "6px" }}>
            <Image src={m.image} alt="" fill preload sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[3fr_2fr]">
        <div>
          <Eyebrow className="text-bronze">About</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">What {m.name} is about</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink/85">
            {d.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <dl className="self-start rounded-lg bg-white p-6 shadow-sm" style={{ borderTop: `4px solid ${accent}` }}>
          <div className="flex gap-3">
            <UserRound className="mt-0.5 size-5 shrink-0" style={{ color: ink }} aria-hidden="true" />
            <div>
              <dt className="font-semibold text-navy-900">Who it’s for</dt>
              <dd className="text-ink/80">
                <WithPlaceholders text={d.forWho} />
              </dd>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <Clock className="mt-0.5 size-5 shrink-0" style={{ color: ink }} aria-hidden="true" />
            <div>
              <dt className="font-semibold text-navy-900">When we meet</dt>
              <dd className="text-ink/80">
                <WithPlaceholders text={d.when} />
              </dd>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <Users className="mt-0.5 size-5 shrink-0" style={{ color: ink }} aria-hidden="true" />
            <div>
              <dt className="font-semibold text-navy-900">Leader</dt>
              <dd className="text-ink/80">
                <WithPlaceholders text="[Name – once leaders have agreed to be listed]" />
              </dd>
            </div>
          </div>
        </dl>
      </section>

      {/* Highlights */}
      <section style={{ backgroundColor: tint }}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Eyebrow className="text-bronze">What we do</Eyebrow>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {d.highlights.map((h) => {
              const Icon = icons[h.icon];
              return (
                <li key={h.title} className="rounded-lg bg-white p-6 shadow-sm">
                  <span className="flex size-12 items-center justify-center rounded-full" style={{ backgroundColor: tint, color: ink, border: `2px solid ${accent}` }}>
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-navy-900">{h.title}</h3>
                  <p className="mt-2 text-ink/80">
                    <WithPlaceholders text={h.text} />
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {d.extra && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">{d.extra.title}</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {d.extra.items.map((it) => (
              <li key={it.title} className="rounded-lg border border-line bg-white p-6" style={{ borderLeft: `4px solid ${accent}` }}>
                <h3 className="font-display text-xl font-bold text-navy-900">{it.title}</h3>
                <p className="mt-2 text-ink/80">
                  <WithPlaceholders text={it.text} />
                </p>
              </li>
            ))}
          </ul>
          {m.slug === "hungry-seekers" && (
            <ButtonLink href="/discipleship" variant="navy" className="mt-8">
              See the full discipleship pathway
            </ButtonLink>
          )}
        </section>
      )}

      {/* Verse */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <blockquote className="font-display text-2xl leading-relaxed italic sm:text-3xl">“{d.verse.text}”</blockquote>
          <p className="mt-4 font-caps text-sm tracking-widest text-gold-300">
            {d.verse.ref}
          </p>
          <ButtonLink href={joinHref} className="mt-8">
            Get involved in {m.name}
          </ButtonLink>
        </div>
      </section>

      {/* Other ministries */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Eyebrow className="text-bronze">Explore more</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900">Other ministries</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/ministries/${o.slug}`}
                className="group block h-full overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md"
                style={{ borderTop: `4px solid ${o.theme.accent}` }}
              >
                <div className="relative aspect-[16/10]">
                  <Image src={o.image} alt="" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-caps text-sm font-semibold text-navy-900 uppercase group-hover:underline">{o.name}</p>
                  <p className="text-xs text-muted">{o.kind}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <LiquidReveal subtle />
    </>
  );
}
