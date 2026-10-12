import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/legal-placeholder";

export const metadata: Metadata = { title: "Impressum" };

export default function Page() {
  return <LegalPlaceholder title="Impressum" note="Impressum (legal notice required for German websites): responsible person, registered association details and contact, to be provided by the church" />;
}
