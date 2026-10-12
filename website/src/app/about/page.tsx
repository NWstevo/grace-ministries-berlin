import type { Metadata } from "next";
import { Pillars, VisionMission } from "@/components/sections";
import { ButtonLink, Eyebrow, PageHeader, Placeholder } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Who we are: ${site.fullName}, ${site.branch}. Grace, Truth & Power.`,
};

const values = [
  { word: "Grace", text: "We live from God’s unearned favour, and we extend that same grace to everyone who walks through our doors." },
  { word: "Truth", text: "The Scriptures are our foundation. We teach the Word plainly so that every believer can stand on it." },
  { word: "Power", text: "We depend on the Holy Spirit to transform lives and to reveal the glory of God in Berlin and beyond." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A Place to Encounter God"
        intro={`${site.fullName} – ${site.branch} is a family of believers in Berlin, called to be transformed and to reveal His glory.`}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Eyebrow className="text-bronze">Who we are</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">From glory to glory</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink/85">
            <p>
              We are a Christ-centred church committed to worship, biblical teaching, prayer, discipleship, fellowship
              and compassionate service. Our desire is to see people encounter Christ, grow into His likeness and reveal
              His love, truth and glory in everyday life.
            </p>
            <p>
              Our guiding pathway is simple: <strong className="text-navy-900">See Him → Become Like Him → Show Him</strong>.
              Our burden is to move from revelation to transformation, and from transformation to manifestation
              (2 Corinthians 3:18; Colossians 1:27; Romans 8:19; John 15:4–8).
            </p>
            <p>
              <Placeholder>Our story: the church’s roots in Berlin and its international heritage</Placeholder>
            </p>
          </div>
        </div>
        <blockquote className="self-start rounded-lg border-l-4 border-gold-400 bg-cream-100 p-6 font-display text-xl leading-relaxed text-navy-900 italic">
          “{site.verse.text}”
          <footer className="mt-3 font-sans text-sm font-semibold not-italic text-bronze">{site.verse.ref}</footer>
        </blockquote>
      </section>

      <VisionMission />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <Eyebrow className="text-bronze">Our values</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Grace · Truth · Power</h2>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <li key={v.word} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="font-caps text-xl font-semibold text-navy-900">{v.word}</h3>
              <p className="mt-2 text-ink/80">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <Pillars />

      <section id="beliefs" className="mx-auto max-w-6xl scroll-mt-6 px-4 pt-16 sm:px-6">
        <Eyebrow className="text-bronze">What we believe</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Rooted in the Word</h2>
        <p className="mt-3 max-w-3xl text-lg text-ink/85">
          We are a Bible-centred church. <Placeholder>Statement of faith, once approved by the church leadership</Placeholder>
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Eyebrow className="text-bronze">Leadership</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Our pastors</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Senior Pastor", "Assistant Pastor", "Ministry Leader"].map((role) => (
            <li key={role} className="flex items-center gap-4 rounded-lg border border-line bg-white p-5">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-cream-200 font-caps text-navy-900">
                ?
              </span>
              <span>
                <span className="block font-semibold">
                  <Placeholder>Name</Placeholder>
                </span>
                <span className="text-sm text-muted">{role}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/visit">Plan Your Visit</ButtonLink>
          <ButtonLink href="/contact" variant="outline-dark">
            Contact us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
