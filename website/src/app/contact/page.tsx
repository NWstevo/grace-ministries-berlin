import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { ButtonLink, Eyebrow, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch: ${site.email}, ${site.address.street}, ${site.address.city}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="We’d Love to Hear From You" intro="Questions, prayer requests, or want to get involved? Reach out any time." />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
        <article className="rounded-lg bg-white p-6 shadow-sm">
          <MapPin className="size-7 text-bronze" aria-hidden="true" />
          <h2 className="mt-3 font-display text-2xl font-bold text-navy-900">Visit</h2>
          <address className="mt-2 text-ink/85 not-italic">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.country}
          </address>
          <ButtonLink href={site.directionsUrl} external size="sm" className="mt-4">
            Get Directions
          </ButtonLink>
        </article>
        <article className="rounded-lg bg-white p-6 shadow-sm">
          <Clock className="size-7 text-bronze" aria-hidden="true" />
          <h2 className="mt-3 font-display text-2xl font-bold text-navy-900">Worship with us</h2>
          <ul className="mt-2 text-ink/85">
            {site.serviceTimes.map((s) => (
              <li key={s.day}>
                {s.day} · {s.time}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-lg bg-white p-6 shadow-sm">
          <Mail className="size-7 text-bronze" aria-hidden="true" />
          <h2 className="mt-3 font-display text-2xl font-bold text-navy-900">Email &amp; phone</h2>
          <a href={`mailto:${site.email}`} className="mt-2 block break-all text-ink/85 underline hover:text-bronze">
            {site.email}
          </a>
          <a href={site.phone.href} className="mt-1 block text-ink/85 underline hover:text-bronze">
            {site.phone.display}
          </a>
        </article>
      </section>

      <section id="message" className="scroll-mt-6 bg-navy-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <Eyebrow className="text-gold-400">Send a message</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Prayer requests &amp; questions</h2>
            <p className="mt-3 text-white/80">
              Email us and a member of our pastoral team will get back to you. Prayer requests are kept confidential and
              shared only with our pastors.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              { label: "Send a prayer request", subject: "Prayer request" },
              { label: "Ask a question", subject: "Question" },
              { label: "I want to get involved", subject: "Getting involved" },
            ].map((m) => (
              <li key={m.subject}>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(m.subject)}`}
                  className="flex min-h-14 items-center justify-between rounded-md border border-white/20 px-5 font-semibold hover:border-gold-400 hover:text-gold-300"
                >
                  {m.label}
                  <Mail className="size-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
