import type { Metadata } from "next";
import { Church, Landmark, Smartphone } from "lucide-react";
import { Eyebrow, PageHeader, Placeholder } from "@/components/ui";

export const metadata: Metadata = {
  title: "Give",
  description: "Support the work of the church through tithes, offerings, missions and the building fund.",
};

const funds = [
  { name: "Tithe", text: "Honouring God with the first tenth." },
  { name: "Offering", text: "Freewill gifts for the life of the church." },
  { name: "Missions", text: "Reaching Berlin, Germany and the nations." },
  { name: "Building Fund", text: "A home for the church family to grow." },
];

export default function GivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Give"
        title="Partner With What God Is Doing"
        intro="Every gift helps us nurture, equip and release believers to impact Berlin, Germany and the nations. Thank you for your generosity."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Eyebrow className="text-bronze">Where your gift goes</Eyebrow>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {funds.map((f) => (
            <li key={f.name} className="rounded-lg border-t-4 border-gold-400 bg-white p-6 shadow-sm">
              <h2 className="font-caps text-xl font-semibold text-navy-900">{f.name}</h2>
              <p className="mt-2 text-ink/80">{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-cream-100">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <Landmark className="size-8 text-bronze" aria-hidden="true" />
            <h2 className="mt-3 font-display text-2xl font-bold text-navy-900">Bank transfer</h2>
            <dl className="mt-3 space-y-1 text-sm text-ink/85">
              <div><dt className="inline font-semibold">Account holder: </dt><dd className="inline"><Placeholder>name</Placeholder></dd></div>
              <div><dt className="inline font-semibold">IBAN: </dt><dd className="inline"><Placeholder>IBAN</Placeholder></dd></div>
              <div><dt className="inline font-semibold">BIC: </dt><dd className="inline"><Placeholder>BIC</Placeholder></dd></div>
              <div><dt className="inline font-semibold">Reference: </dt><dd className="inline">Tithe, Offering, Missions or Building Fund</dd></div>
            </dl>
          </article>
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <Church className="size-8 text-bronze" aria-hidden="true" />
            <h2 className="mt-3 font-display text-2xl font-bold text-navy-900">In person</h2>
            <p className="mt-3 text-ink/85">Give during Sunday Worship (10:00 – 12:30) at Angerburger Allee 56, 14055 Berlin.</p>
          </article>
          <article className="rounded-lg bg-navy-900 p-6 text-white shadow-sm">
            <Smartphone className="size-8 text-gold-400" aria-hidden="true" />
            <h2 className="mt-3 font-display text-2xl font-bold">Online (coming soon)</h2>
            <p className="mt-3 text-white/80">
              Card, Apple Pay and Google Pay giving, one-time or recurring, is coming with our mobile app. Every gift gets an
              email receipt.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
