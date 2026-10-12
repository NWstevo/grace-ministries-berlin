import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, PageHeader, Placeholder } from "@/components/ui";
import { ministries, otherMinistries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Ministries",
  description: "A place for every generation: children, teens, discipleship, worship, leadership and more.",
};

export default function MinistriesPage() {
  return (
    <>
      <PageHeader
        subtleReveal
        eyebrow="Our Ministries"
        title="A Place for Every Generation"
        intro="Worship · Discipleship · Fellowship · Service · Transformation. Find where you and your family belong."
      />

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-16 sm:px-6">
        {ministries.map((m, i) => (
          <section
            key={m.slug}
            id={m.slug}
            className="grid scroll-mt-6 overflow-hidden rounded-lg shadow-sm md:grid-cols-[2fr_3fr]"
            style={{
              backgroundColor: m.theme.tint,
              borderTop: `6px solid ${m.theme.accent}`,
              boxShadow: `inset 0 -3px 0 ${m.theme.accent2}`,
            }}
          >
            <div className={`relative min-h-56 ${i % 2 ? "md:order-2" : ""}`}>
              <Image src={m.image} alt="" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="font-caps text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: m.theme.ink }}>
                {m.kind}
              </p>
              <h2 className="mt-2 font-caps text-2xl font-semibold text-navy-900 uppercase sm:text-3xl">{m.name}</h2>
              <p className="mt-3 font-display text-xl text-ink/90 italic">{m.text}</p>
              {m.slug === "other-ministries" ? (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {otherMinistries.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-ink/85">
                      <span className="size-1.5 rounded-full bg-gold-500" aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
              ) : (
                <dl className="mt-4 grid gap-1 text-sm text-ink/80">
                  <div className="flex gap-2">
                    <dt className="font-semibold">When:</dt>
                    <dd>
                      <Placeholder>meeting day and time</Placeholder>
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold">Leader:</dt>
                    <dd>
                      <Placeholder>name</Placeholder>
                    </dd>
                  </div>
                </dl>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={`/ministries/${m.slug}`} size="sm" variant="navy">
                  Learn more
                </ButtonLink>
                <ButtonLink href="/contact" size="sm" variant="outline-dark" arrow={false}>
                  Get involved
                </ButtonLink>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
