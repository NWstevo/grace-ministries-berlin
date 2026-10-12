import type { Metadata } from "next";
import { Church, CreditCard, ExternalLink, Landmark, Smartphone, Wallet } from "lucide-react";
import { Eyebrow, PageHeader, Placeholder } from "@/components/ui";
import { giving } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
  description: "Give online with PayPal, Google Pay, Apple Pay or card, by bank transfer, or in person on Sunday.",
};

const funds = [
  { name: "Tithe", text: "Honouring God with the first tenth." },
  { name: "Offering", text: "Freewill gifts for the life of the church." },
  { name: "Missions", text: "Reaching Berlin, Germany and the nations." },
  { name: "Building Fund", text: "A home for the church family to grow." },
];

// Each option goes live as soon as its link is added to `giving` in src/lib/site.ts.
const online = [
  {
    name: "PayPal",
    text: "Give with your PayPal account, or as a guest with a card through PayPal.",
    href: giving.paypal,
    Icon: Wallet,
    cta: "Give with PayPal",
    todo: "PayPal donate link",
  },
  {
    name: "Google Pay",
    text: "Quick and secure giving from your phone or browser with Google Pay.",
    href: giving.googlePay,
    Icon: Smartphone,
    cta: "Give with Google Pay",
    todo: "Google Pay link",
  },
  {
    name: "Apple Pay",
    text: "Give in a tap from your iPhone, iPad or Mac with Apple Pay.",
    href: giving.applePay,
    Icon: Smartphone,
    cta: "Give with Apple Pay",
    todo: "Apple Pay link",
  },
  {
    name: "Card",
    text: "Give one-time or monthly with a debit or credit card, processed securely by Stripe. You get an email receipt for every gift.",
    href: giving.stripe,
    Icon: CreditCard,
    cta: "Give by card",
    todo: "Stripe giving link (set up later)",
  },
];

export default function GivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Give"
        title="Partner With What God Is Doing"
        intro="Every gift helps us nurture, equip and release believers to impact Berlin, Germany and the nations. Thank you for your generosity."
      />

      {/* Give online */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Eyebrow className="text-bronze">Give online</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">Choose how you’d like to give</h2>
        <p className="mt-3 max-w-2xl text-ink/80">
          Please add the fund you are giving to (Tithe, Offering, Missions or Building Fund) in the note or reference.
        </p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {online.map(({ name, text, href, Icon, cta, todo }) => (
            <li key={name} className="flex flex-col rounded-lg border-t-4 border-gold-400 bg-white p-6 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-full bg-cream-100 text-bronze">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-navy-900">{name}</h3>
              <p className="mt-2 mb-6 text-ink/80">{text}</p>
              <div className="mt-auto">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-gold-400 px-6 font-semibold text-navy-900 hover:bg-gold-300"
                  >
                    {cta} <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                ) : (
                  <>
                    <span
                      aria-disabled="true"
                      className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-md bg-navy-900/10 px-6 font-semibold text-navy-900/60"
                    >
                      Coming soon
                    </span>
                    <p className="mt-2 text-center text-xs">
                      <Placeholder>{todo}</Placeholder>
                    </p>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Funds */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Eyebrow className="text-bronze">Where your gift goes</Eyebrow>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {funds.map((f) => (
              <li key={f.name} className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="font-caps text-xl font-semibold text-navy-900">{f.name}</h2>
                <p className="mt-2 text-ink/80">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other ways */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Eyebrow className="text-bronze">Other ways to give</Eyebrow>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
        </div>
      </section>
    </>
  );
}
