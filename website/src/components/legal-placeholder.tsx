import { PageHeader, Placeholder } from "./ui";
import { site } from "@/lib/site";

// Legal texts must come from the church (and be checked by someone qualified); nothing here is legal advice.
export function LegalPlaceholder({ title, note }: { title: string; note: string }) {
  return (
    <>
      <PageHeader eyebrow={site.branch} title={title} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-lg text-ink/85">
          <Placeholder>{note}</Placeholder>
        </p>
        <p className="mt-6 text-ink/80">
          Questions in the meantime:{" "}
          <a href={`mailto:${site.email}`} className="underline hover:text-bronze">
            {site.email}
          </a>
        </p>
      </section>
    </>
  );
}
