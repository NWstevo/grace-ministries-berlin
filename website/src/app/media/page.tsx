import type { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";
import { YoutubeIcon } from "@/components/icons";
import { ButtonLink, Eyebrow, PageHeader, Placeholder } from "@/components/ui";
import { ministries, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Media",
  description: "Watch our Sunday service live, catch up on sermons and see photos from church life.",
};

const gallery = [
  { src: "/images/hero.jpg", alt: "Worship during a Sunday service" },
  { src: "/images/convention.jpg", alt: "The congregation worshipping together" },
  ...ministries.map((m) => ({ src: m.image, alt: `${m.name}, ${m.kind}` })),
];

export default function MediaPage() {
  return (
    <>
      <PageHeader eyebrow="Media" title="Watch, Listen and Remember" intro="Join our services live, catch up on past messages and see what God is doing among us." />

      <section id="live" className="mx-auto grid max-w-6xl scroll-mt-6 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-navy-950 text-white">
          <Image src="/images/hero.jpg" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover opacity-40" />
          <span className="relative flex size-16 items-center justify-center rounded-full bg-gold-400 text-navy-900">
            <Play className="size-7 fill-current" aria-hidden="true" />
          </span>
        </div>
        <div>
          <Eyebrow className="text-bronze">Live stream</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Sunday Worship live from 10:00</h2>
          <p className="mt-3 text-lg text-ink/85">
            Can’t be with us in person? Our services stream live on YouTube, and soon in our mobile app.
          </p>
          <div className="mt-6">
            {site.social.youtube ? (
              <ButtonLink href={site.social.youtube} external>
                <YoutubeIcon className="size-5" /> Watch on YouTube
              </ButtonLink>
            ) : (
              <p className="text-sm text-ink/70">
                <Placeholder>YouTube channel link</Placeholder>
              </p>
            )}
          </div>
        </div>
      </section>

      <section id="sermons" className="scroll-mt-6 bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Eyebrow className="text-bronze">Sermons</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Recent messages</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <li key={n} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="flex aspect-video items-center justify-center bg-navy-900 text-gold-400">
                  <Play className="size-8" aria-hidden="true" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-navy-900">
                    <Placeholder>Sermon title</Placeholder>
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    <Placeholder>Speaker · date</Placeholder>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="story" className="scroll-mt-6 bg-navy-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <Eyebrow className="text-gold-400">Our story</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">One Church, One Family, One Glorious Future</h2>
          <div className="relative mx-auto mt-8 flex aspect-video max-w-3xl items-center justify-center overflow-hidden rounded-lg border border-gold-400/40 bg-navy-950">
            <Image src="/images/convention.jpg" alt="" fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover opacity-40" />
            <span className="relative rounded-md bg-navy-900/80 px-4 py-2 text-sm">
              <Placeholder>Story video goes here</Placeholder>
            </span>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl scroll-mt-6 px-4 py-16 sm:px-6">
        <Eyebrow className="text-bronze">Gallery</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Life together</h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((g, i) => (
            <li key={g.src} className={`relative overflow-hidden rounded-md ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"}`}>
              <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
