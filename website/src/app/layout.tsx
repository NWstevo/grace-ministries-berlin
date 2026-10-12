import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel, Cormorant_Garamond, Great_Vibes, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});
const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const greatVibes = Great_Vibes({ variable: "--font-great-vibes", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: `${site.branch} | ${site.fullName}`,
    template: `%s | ${site.branch}`,
  },
  description:
    "A place to encounter God, be transformed and reveal His glory. Sunday Worship 10:00–12:30 at Angerburger Allee 56, 14055 Berlin.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${manrope.variable} ${cormorant.variable} ${cinzel.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-navy-900"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        {/* Lets the CSS hide content until the scroll animations have tagged it (see app/template.tsx). */}
        <Script id="reveal-js" strategy="beforeInteractive">
          {"document.documentElement.classList.add('reveal-js')"}
        </Script>
      </body>
    </html>
  );
}
