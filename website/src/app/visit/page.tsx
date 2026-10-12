import type { Metadata } from "next";
import { Baby, Clock, Coffee, MapPin, Music, Train } from "lucide-react";
import { ButtonLink, Eyebrow, PageHeader, Placeholder } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description: "What to expect on a Sunday at Tabernacle of Glory Berlin, 10:00–12:30 at Angerburger Allee 56.",
};

const expect = [
  { Icon: Music, title: "Vibrant worship", text: "Expect heartfelt praise and worship as we encounter God’s presence together." },
  { Icon: Clock, title: "10:00 – 12:30", text: "Sunday Worship starts at 10:00. Come a few minutes early to find a seat and say hello." },
  { Icon: Baby, title: "Kids are welcome", text: "Warriors of Light, our children’s ministry, is for ages 4–12." },
  { Icon: Coffee, title: "Fellowship", text: "Stay after the service to meet people and ask any questions you have." },
];

export default function VisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Plan Your Visit"
        title="Come As You Are"
        intro="Whether it’s your first time in church or you are looking for a new church home, you are welcome here."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Eyebrow className="text-bronze">What to expect</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Your first Sunday</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expect.map(({ Icon, title, text }) => (
            <li key={title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-full border-2 border-gold-400 text-gold-600">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-900">{title}</h3>
              <p className="mt-1 text-ink/80">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink/70">
          Children’s programme times during the service: <Placeholder>please confirm</Placeholder>
        </p>
      </section>

      <section className="bg-cream-100">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <Eyebrow className="text-bronze">Where to find us</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-900">Sunday · 10:00 – 12:30</h2>
            <p className="mt-3 flex items-start gap-2 text-lg text-ink/85">
              <MapPin className="mt-1 size-5 shrink-0 text-bronze" aria-hidden="true" />
              {site.address.street}, {site.address.city}, {site.address.country}
            </p>
            <p className="mt-3 flex items-start gap-2 text-ink/85">
              <Train className="mt-1 size-5 shrink-0 text-bronze" aria-hidden="true" />
              <span>
                Public transport and parking: <Placeholder>nearest station, bus lines and parking</Placeholder>
              </span>
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <ButtonLink href={site.directionsUrl} external>
                Get Directions
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-dark">
                Questions? Contact us
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg bg-navy-900 p-8 text-white">
            <h2 className="font-display text-2xl font-bold">Let us know you’re coming</h2>
            <p className="mt-2 text-white/80">
              Send us a quick email and someone from our welcome team will look out for you on Sunday.
            </p>
            <ButtonLink
              href={`mailto:${site.email}?subject=${encodeURIComponent("Planning my first visit")}`}
              className="mt-6"
            >
              Email the welcome team
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
