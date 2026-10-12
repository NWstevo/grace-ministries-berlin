import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/legal-placeholder";

export const metadata: Metadata = { title: "Safeguarding" };

export default function Page() {
  return <LegalPlaceholder title="Safeguarding" note="Safeguarding policy for children and vulnerable adults, with the named safeguarding contact, to be provided by the church" />;
}
