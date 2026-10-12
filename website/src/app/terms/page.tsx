import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/legal-placeholder";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Page() {
  return <LegalPlaceholder title="Terms of Use" note="Terms of use to be provided by the church" />;
}
