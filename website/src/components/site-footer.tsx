import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";
import { featuredEvent, nav, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./icons";
import { NewsletterForm } from "./newsletter-form";

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: site.social.youtube, Icon: YoutubeIcon },
].filter((s) => s.href);

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Impressum", href: "/impressum" },
  { label: "Safeguarding", href: "/safeguarding" },
  { label: "Contact", href: "/contact" },
];

function ColTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 text-sm font-bold tracking-wide text-gold-400">{children}</h2>;
}

export function SiteFooter() {
  // Background: black on the far left, blending smoothly into the brand navy.
  return (
    <footer className="mt-auto border-t-2 border-gold-400 bg-navy-900 bg-[linear-gradient(to_right,#000000_0%,#020f1d_30%,#04203b_70%)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr_1.2fr]">
        <div className="flex items-start gap-4">
          <Image
            src="/images/logo.png"
            alt=""
            width={800}
            height={800}
            className="size-20 shrink-0 rounded-full"
          />
          <div>
            <p className="text-sm leading-relaxed text-white/90">
              {site.fullName}
              <br />
              {site.branch}
            </p>
            <p className="mt-3 font-display text-lg font-semibold">{site.tagline}</p>
          </div>
        </div>

        <div>
          <ColTitle>Quick Links</ColTitle>
          <ul className="space-y-1.5 text-sm text-white/85">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-gold-300">
                  {n.label === "Our Ministries" ? "Ministries" : n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ColTitle>Connect With Us</ColTitle>
          <ul className="space-y-2 text-sm text-white/85">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-300">
                  <Icon className="size-4" /> {label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Smartphone className="size-4" aria-hidden="true" /> Mobile App (Coming Soon)
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phone.href} className="hover:text-gold-300">
                {site.phone.display}
              </a>
            </li>
          </ul>
          <p className="mt-3 text-sm text-white/70">
            Part of our Grand Finale launch
            <br />
            {featuredEvent.date.replace("Sunday, ", "")}
          </p>
        </div>

        <div>
          <ColTitle>Worship With Us</ColTitle>
          <ul className="space-y-1 text-sm text-white/85">
            {site.serviceTimes.map((s) => (
              <li key={s.day}>
                {s.day}
                <br />
                {s.time}
              </li>
            ))}
          </ul>
          <address className="mt-3 text-sm text-white/85 not-italic">
            {site.address.street},
            <br />
            {site.address.city}, {site.address.country}
          </address>
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-10 items-center gap-2 rounded-md bg-gold-400 px-4 text-sm font-semibold text-navy-900 hover:bg-gold-300"
          >
            Get Directions <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div>
          <ColTitle>Newsletter</ColTitle>
          <p className="mb-3 text-sm text-white/85">Stay connected with updates, events and inspiration.</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="bg-cream-100 text-navy-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs sm:px-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-bronze hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>
            © 2026 {site.fullName} – {site.branch}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
