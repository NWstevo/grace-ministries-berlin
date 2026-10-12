import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/legal-placeholder";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return <LegalPlaceholder title="Privacy Policy" note="Privacy policy (Datenschutzerklärung) to be provided by the church, covering GDPR / DSGVO" />;
}
