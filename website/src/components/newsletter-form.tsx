"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

// No mailing-list provider is connected yet, so nothing is stored or sent.
// Swap the submit handler for a real provider (e.g. a Server Action) before launch.
export function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="rounded-md bg-white/10 p-3 text-sm text-white/90" role="status">
        Newsletter sign-up opens soon. Until then, email us at{" "}
        <a className="text-gold-300 underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-2.5"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Your email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        placeholder="Your email address"
        className="h-11 rounded-md border border-white/20 bg-white px-3 text-sm text-ink placeholder:text-muted"
      />
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold-400 text-sm font-semibold text-navy-900 hover:bg-gold-300"
      >
        Subscribe <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}
