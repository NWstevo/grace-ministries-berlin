import Image from "next/image";
import { YoutubeColorIcon } from "@/components/icons";
import { MinistryCard } from "@/components/ministry-card";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { LiquidReveal } from "@/components/liquid-reveal";
import { MinistryCarousel } from "@/components/ministry-carousel";
import { FeaturedEvent, Pillars, VisionMission } from "@/components/sections";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { ministries, pathway, site } from "@/lib/site";

// Placeholder photos (crops from the website mockup) until the church supplies real ones.
const heroSlides = [
  { src: "/images/hero.jpg", alt: "A woman worshipping with raised hands during a service" },
  { src: "/images/convention.jpg", alt: "The congregation worshipping together" },
  ...ministries.map((m) => ({ src: m.image, alt: `${m.name}, ${m.kind}` })),
];

export default function Home() {
  return (
    <>
      {/* Hero: big logo on the left (on desktop it rises over the nav bar and the hero ends at its bottom), text on the right */}
      <section className="relative bg-navy-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <HeroSlideshow className="hero-photo" slides={heroSlides} />
          <div className="absolute inset-0 bg-navy-900/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-navy-900 lg:via-navy-900/75 lg:to-navy-900/40" />
        </div>
        <div className="hero-grid relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[18rem_1fr] lg:items-center lg:gap-12 lg:py-16">
          <div className="hero-logo relative z-40 mx-auto lg:mx-0">
            <Image
              src="/images/logo.png"
              alt={`Logo of ${site.fullName}`}
              width={800}
              height={800}
              preload
              className="size-52 rounded-full shadow-2xl sm:size-64 lg:size-72 xl:size-full"
            />
          </div>
          <div className="hero-text text-center lg:text-left">
            <Eyebrow className="text-gold-400">Welcome to</Eyebrow>
            <h1 className="mt-3 font-caps text-[1.7rem] leading-[1.15] font-extrabold drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] sm:text-4xl xl:text-[38px]">
              {site.fullName}
              {/* From laptop width up, the branch name starts where the short gold line ends; on phones the line sits above it. */}
              <span className="mt-4 flex flex-col items-center gap-3 text-[1.35rem] text-gold-400 sm:text-[1.75rem] lg:flex-row lg:gap-0 xl:text-[30px]">
                <span className="h-0.5 w-16 shrink-0 bg-gold-400" aria-hidden="true" />
                {site.branch}
              </span>
            </h1>
            <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
              A place to Encounter God,
              <br />
              Be Transformed and Reveal His Glory.
            </p>
            <p className="mt-3 font-display text-xl tracking-wide text-white/90 sm:text-2xl">
              Grace <span className="px-2 text-gold-400">|</span> Truth <span className="px-2 text-gold-400">|</span> Power
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <ButtonLink href="/visit">Plan Your Visit</ButtonLink>
              <ButtonLink href={site.youtubeLiveUrl} external variant="black" arrow={false}>
                <YoutubeColorIcon className="size-[22px]" />
                Watch Live Service
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Pillars />
      <VisionMission />

      {/* Ministries */}
      <section className="bg-cream-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <Eyebrow className="text-bronze">Our Ministries</Eyebrow>
            <h2 className="mt-2 font-display text-4xl font-bold text-navy-900 italic sm:text-5xl">
              A Place for Every Generation
            </h2>
            <p className="mt-3 text-xs font-semibold tracking-[0.25em] text-navy-900 uppercase sm:text-sm">
              Worship · Discipleship · Fellowship · Service · Transformation
            </p>
          </div>
        </div>
        {/* Full-width strip that drifts slowly from right to left; swipe, scroll or use the arrows. */}
        <div className="mt-8">
          <MinistryCarousel label="Our ministries">
            {ministries.map((m) => (
              <MinistryCard key={m.slug} ministry={m} />
            ))}
          </MinistryCarousel>
        </div>
      </section>

      {/* Discipleship journey */}
      <section className="bg-cream-100 py-14">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <Eyebrow className="text-bronze">Our discipleship journey</Eyebrow>
          <h2 className="mt-2 font-caps text-3xl font-semibold text-navy-900 uppercase sm:text-4xl">The Hungry Seekers</h2>
          <p className="mt-2 font-display text-xl text-ink/85 italic">Growing in Christ. Becoming like Him. Revealing His glory.</p>
          <ol className="mt-10 grid gap-6 text-left md:grid-cols-3">
            {pathway.map((p, i) => (
              <li key={p.step} className="rounded-lg border-t-4 border-gold-400 bg-white p-6 shadow-sm">
                <span className="font-caps text-sm font-semibold text-gold-600">0{i + 1}</span>
                <h3 className="mt-1 font-caps text-xl font-semibold text-navy-900 uppercase">{p.step}</h3>
                <p className="mt-2 text-ink/80">{p.text}</p>
              </li>
            ))}
          </ol>
          <ButtonLink href="/discipleship" variant="navy" className="mt-8">
            Explore discipleship
          </ButtonLink>
        </div>
      </section>

      <FeaturedEvent />
      <LiquidReveal />
    </>
  );
}
