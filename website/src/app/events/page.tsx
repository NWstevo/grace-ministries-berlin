import type { Metadata } from "next";
import { Clock, MapPin, Smartphone } from "lucide-react";
import { FeaturedEvent } from "@/components/sections";
import { ButtonLink, Eyebrow, PageHeader, Placeholder } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Sunday services, the Convention & Anniversary on 8 November 2026, and more.",
};


export default function EventsPage() {
  return (
    <>
      <PageHeader eyebrow="Events" title="Gather With Us" intro="Worship, celebrations and gatherings for the whole church family." />

      <FeaturedEvent />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Eyebrow className="text-bronze">Regular gatherings</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Worship, prayer &amp; fasting</h2>
        <ul className="mt-8 divide-y divide-line overflow-hidden rounded-lg border border-line bg-white">
          {site.gatherings.map((g) => (
            <li key={g.name} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-display text-xl font-bold text-navy-900">{g.name}</h3>
              <span className="flex items-center gap-2 text-sm text-ink/80">
                <Clock className="size-4 text-gold-600" aria-hidden="true" />
                {g.when}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex items-center gap-2 text-sm text-ink/75">
          <MapPin className="size-4 text-gold-600" aria-hidden="true" />
          Sunday Worship: {site.address.street}, {site.address.city}. Venues for other gatherings:{" "}
          <Placeholder>please confirm</Placeholder>
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-lg bg-cream-100 p-6 sm:flex-row sm:items-center">
          <Smartphone className="size-8 shrink-0 text-bronze" aria-hidden="true" />
          <p className="flex-1 text-ink/85">
            Our mobile app is coming soon. You will be able to RSVP to events, get reminders and watch services live.
          </p>
          <ButtonLink href="/contact" size="sm" variant="navy">
            Ask about an event
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
