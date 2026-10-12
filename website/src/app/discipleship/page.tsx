import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, HandHeart } from "lucide-react";
import { ButtonLink, Eyebrow, PageHeader, Placeholder } from "@/components/ui";
import { pathway, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Discipleship",
  description: "The Hungry Seekers: See Him, Become Like Him, Show Him. Discipleship and spiritual formation in Berlin.",
};

const cohorts = [
  {
    name: "Cohort 1",
    when: "June – September 2026",
    text: "Weekly Friday study through the book of Romans, chapters 1–16.",
  },
  {
    name: "Cohort 2",
    when: "From October 2026",
    text: "Ephesians, Colossians, Acts, Hebrews and John 14–17.",
  },
];

const foundations = ["2 Corinthians 3:18", "Romans 8:29", "John 15:4–8", "Ephesians 4:11–13", "Colossians 1:27–28"];

export default function DiscipleshipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Discipleship"
        title="See Him. Become Like Him. Show Him."
        intro="Christianity is more than attending church services. It is a lifelong journey of knowing Jesus Christ, growing in His likeness and allowing His life to find expression through us."
      />

      <section id="pathway" className="mx-auto max-w-6xl scroll-mt-6 px-4 py-16 sm:px-6">
        <Eyebrow className="text-bronze">Discipleship pathway</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          From revelation to transformation to manifestation
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {pathway.map((p, i) => (
            <li key={p.step} className="relative rounded-lg border border-line bg-white p-6 shadow-sm">
              <span className="font-caps text-4xl text-gold-500">0{i + 1}</span>
              <h3 className="mt-2 font-caps text-2xl font-semibold text-navy-900 uppercase">{p.step}</h3>
              <p className="mt-2 text-ink/80">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="hungry-seekers" className="scroll-mt-6 bg-navy-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[2fr_3fr]">
          <div className="relative min-h-64 overflow-hidden rounded-lg">
            <Image
              src="/images/ministries/hungry-seekers.jpg"
              alt="Members studying the Bible together"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow className="text-gold-400">Discipleship &amp; Spiritual Formation</Eyebrow>
            <h2 className="mt-2 font-caps text-3xl font-semibold text-gold-300 uppercase sm:text-4xl">The Hungry Seekers</h2>
            <p className="mt-2 font-display text-2xl italic">Growing in Christ. Becoming like Him. Revealing His glory.</p>
            <p className="mt-4 text-white/85">
              The Hungry Seekers is our discipleship and spiritual formation ministry, dedicated to raising believers who
              are rooted in God’s Word, established in relationship with Christ and equipped to live out their faith.
            </p>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="font-caps text-sm tracking-widest text-gold-400 uppercase">Vision</dt>
                <dd className="mt-1 text-white/85">
                  Raise spiritually mature disciples who know Christ intimately, walk in the Spirit, demonstrate His
                  character and become vessels through whom His glory finds expression.
                </dd>
              </div>
              <div>
                <dt className="font-caps text-sm tracking-widest text-gold-400 uppercase">Mission</dt>
                <dd className="mt-1 text-white/85">
                  Nurture believers through systematic Bible study, intentional spiritual formation, prayer,
                  accountability, fellowship and practical Christian living, and equip them to disciple others.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Eyebrow className="text-bronze">Formation journey</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Studying the Word together</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {cohorts.map((c) => (
            <li key={c.name} className="flex gap-4 rounded-lg border border-line bg-white p-6 shadow-sm">
              <BookOpen className="mt-1 size-7 shrink-0 text-gold-600" aria-hidden="true" />
              <div>
                <h3 className="font-display text-2xl font-bold text-navy-900">{c.name}</h3>
                <p className="text-sm font-semibold text-bronze">{c.when}</p>
                <p className="mt-2 text-ink/85">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-ink/80">
          We learn through biblical understanding, reflection, discussion, prayer, real-life obedience, service and
          multiplying disciples. Meeting day and time for Cohort 2: <Placeholder>please confirm</Placeholder>
        </p>
        <div className="mt-8 rounded-lg bg-cream-100 p-6">
          <p className="font-display text-xl text-navy-900 italic">
            Our goal is not merely informed believers, but transformed lives; not merely church attendees, but committed
            disciples; not merely people who speak about Christ, but people through whom Christ is revealed.
          </p>
          <p className="mt-4 text-sm text-ink/75">
            <span className="font-semibold">Biblical foundations:</span> {foundations.join(" · ")}
          </p>
        </div>
        <div className="mt-8">
          <ButtonLink
            href={`mailto:${site.email}?subject=${encodeURIComponent("Joining The Hungry Seekers")}`}
            variant="navy"
          >
            Join the next cohort
          </ButtonLink>
        </div>
      </section>

      <section id="grace-academy" className="scroll-mt-6 bg-cream-100">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[3fr_2fr] md:items-center">
          <div>
            <Eyebrow className="text-bronze">Learning &amp; Leadership Development</Eyebrow>
            <h2 className="mt-2 font-caps text-3xl font-semibold text-navy-900 uppercase">Grace Academy</h2>
            <p className="mt-3 text-lg text-ink/85">Equipping believers for ministry and everyday life.</p>
            <p className="mt-3 text-sm text-ink/70">
              <Placeholder>Courses, dates and how to register</Placeholder>
            </p>
          </div>
          <div className="relative h-56 overflow-hidden rounded-lg">
            <Image src="/images/ministries/grace-academy.jpg" alt="" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="prayer" className="scroll-mt-6 bg-navy-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <span className="flex size-20 shrink-0 items-center justify-center rounded-full border-2 border-gold-400 text-gold-400">
            <HandHeart className="size-10" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div className="flex-1">
            <Eyebrow className="text-gold-400">Prayer</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold">We would love to pray with you</h2>
            <p className="mt-2 text-white/80">
              Prayer Group meets Mondays and Thursdays, 18:00 – 19:00. Gethsemane fasting and prayer takes place on the
              first weekend of every month.
            </p>
          </div>
          <ButtonLink href="/contact#message">Send a prayer request</ButtonLink>
        </div>
      </section>
    </>
  );
}
