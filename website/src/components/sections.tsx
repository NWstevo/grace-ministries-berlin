import Image from "next/image";
import { BookOpen, Calendar, Clock, Globe, HandHeart, MapPin, Users } from "lucide-react";
import { featuredEvent, mission, pillars, vision } from "@/lib/site";
import { LiquidBlobs } from "./liquid-blobs";
import { ButtonLink, Eyebrow, GoldRule } from "./ui";

const pillarIcons = { book: BookOpen, worship: HandHeart, people: Users, globe: Globe };

export function Pillars() {
  return (
    <section aria-label="What we stand for" className="bg-gradient-to-r from-cream-100 via-white to-cream-100">
      <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-0">
        {pillars.map((p, i) => {
          const Icon = pillarIcons[p.icon];
          return (
            <li
              key={p.title}
              className={`flex items-center gap-4 lg:justify-center lg:px-4 ${i > 0 ? "lg:border-l lg:border-gold-400/40" : ""}`}
            >
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-gold-400 text-gold-600">
                <Icon className="size-8" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-caps text-base leading-tight font-semibold text-navy-900 uppercase">
                  {p.title}
                </span>
                <span className="mt-0.5 block text-sm text-muted">{p.sub}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function VisionMission() {
  return (
    // A contained, rounded panel with breathing room on both sides (not an edge-to-edge band).
    <section className="bg-cream-50 px-4 py-12 sm:px-6 lg:py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gold-400/30 bg-gradient-to-b from-[#f9e7c8] via-cream-100 to-cream-50 shadow-sm">
        <div className="grid gap-10 px-6 py-12 sm:px-10 md:grid-cols-2 md:gap-0 lg:px-14 lg:py-14">
          <div className="md:pr-10">
            <Eyebrow className="text-bronze">Our Vision</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">{vision.title}</h2>
            <p className="mt-3 text-lg text-ink/85">{vision.text}</p>
            <GoldRule className="mt-6" />
          </div>
          <div className="md:border-l md:border-gold-500/50 md:pl-10">
            <Eyebrow className="text-bronze">Our Mission</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">{mission.title}</h2>
            <p className="mt-3 text-lg text-ink/85">{mission.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedEvent({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const H = headingLevel;
  const e = featuredEvent;
  return (
    <section id={e.id} className="relative scroll-mt-4 overflow-hidden bg-navy-900 text-white">
      <LiquidBlobs />
      <div className="relative grid lg:grid-cols-[1fr_1.3fr]">
        <div className="relative z-10 px-4 py-12 sm:px-6 lg:py-14 lg:pr-0 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <Eyebrow className="text-gold-400">{e.label}</Eyebrow>
          <H className="mt-3 font-caps text-4xl leading-tight text-gold-300 uppercase sm:text-5xl">{e.title}</H>
          <p className="font-caps text-2xl text-gold-300 uppercase">{e.subtitle}</p>
          <p className="mt-3 font-display text-2xl italic">{e.strap}</p>
          <ul className="mt-5 space-y-2 text-white/90">
            <li className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-2">
                <Calendar className="size-5 text-gold-400" aria-hidden="true" />
                <time dateTime={e.dateTime}>{e.date}</time>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-5 text-gold-400" aria-hidden="true" />
                {e.time}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-5 text-gold-400" aria-hidden="true" />
              {e.place}
            </li>
          </ul>
          <ButtonLink href={`/events#${e.id}`} size="sm" className="mt-6">
            Save the Date
          </ButtonLink>
        </div>
        <div className="relative min-h-72 lg:min-h-full">
          <Image
            src={e.image}
            alt="Congregation worshipping with raised hands during a service"
            fill
            sizes="(min-width: 1024px) 57vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent lg:bg-gradient-to-r lg:to-transparent lg:from-navy-900 lg:via-navy-900/30" />
          <p className="absolute bottom-6 left-6 font-script text-4xl leading-tight text-gold-300 drop-shadow-lg sm:text-5xl">
            One Church
            <br />
            <span className="pl-8">One Family</span>
            <br />
            <span className="pl-16">One Glorious Future</span>
          </p>
        </div>
      </div>
    </section>
  );
}
