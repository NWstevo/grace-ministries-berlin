"use client";

import { useLayoutEffect } from "react";

/**
 * Scroll-triggered "liquid" reveals for the whole site.
 *
 * On every route it tags the page's content blocks with `data-reveal` (cards become "blob", photos "fill",
 * text and buttons "rise", the hero logo "pour") and reveals each one every time it scrolls into view, up or
 * down; it resets when it leaves. Elements that enter together are staggered so they flow in one after another. The look of each effect lives in
 * globals.css. Each page renders it inside its own content (via PageHeader, or directly on the homepage and
 * ministry pages), so it only runs once that page has hydrated, and on later navigations before paint.
 */

const CARD = "main li, main article, main .rounded-lg, footer .grid > div";
const TEXT = "main :is(h1, h2, h3, p, blockquote, dl, form, ol, ul), main a.inline-flex";

function tag(root: Document) {
  // Start clean, so running again (a remount, or the persistent footer on a new page) tags everything afresh.
  root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    el.removeAttribute("data-reveal");
    el.removeAttribute("data-from");
    el.classList.remove("is-revealed");
  });
  const tagged: HTMLElement[] = [];
  const mark = (el: HTMLElement, kind: string) => {
    el.dataset.reveal = kind;
    tagged.push(el);
  };
  const insideTagged = (el: Element) => !!el.parentElement?.closest("[data-reveal]");

  // Cards first (outermost), then text that is not already inside a card and holds no card.
  root.querySelectorAll<HTMLElement>(CARD).forEach((el) => {
    if (!insideTagged(el) && !el.closest("nav")) mark(el, "blob");
  });
  root.querySelectorAll<HTMLElement>(TEXT).forEach((el) => {
    if (!el.dataset.reveal && !insideTagged(el) && !el.querySelector("[data-reveal]")) mark(el, "rise");
  });
  // Photos fill upward even inside a card; the hero logo pours in.
  root.querySelectorAll<HTMLImageElement>("main img").forEach((img) => {
    if (img.closest("[data-reveal-skip]")) return; // e.g. the hero slideshow animates itself
    if (img.alt.startsWith("Logo of")) mark(img, "pour");
    else if (!img.dataset.reveal) mark(img, "fill");
  });
  return tagged;
}

/** `subtle`: gentler, quieter versions of every effect (used on the ministries pages). */
export function LiquidReveal({ subtle = false }: { subtle?: boolean }) {
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("reveal-subtle", subtle);
    const html = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      html.classList.add("reveal-ready");
      return;
    }

    // Jump straight to the hidden start state (no fade-out), then let transitions run again.
    html.classList.add("reveal-instant");
    const elements = tag(document);
    void html.offsetHeight;
    html.classList.remove("reveal-instant");
    html.classList.add("reveal-ready");
    // What the observer watches for each element. A "fill" photo starts clipped to nothing, which the browser
    // treats as zero-size and never reports as visible, so its container is watched instead.
    const watched = new Map<Element, HTMLElement[]>();
    elements.forEach((el) => {
      const target = el.dataset.reveal === "fill" ? (el.parentElement ?? el) : el;
      watched.set(target, [...(watched.get(target) ?? []), el]);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        // Entering: reveal, staggered top-to-bottom among the elements entering together.
        const entering = entries
          .filter((e) => e.isIntersecting && (e.intersectionRatio >= 0.12 || e.intersectionRect.height >= 120))
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
        entering.forEach((entry, i) => {
          watched.get(entry.target)?.forEach((el) => {
            el.style.setProperty("--reveal-delay", `${Math.min(i * (subtle ? 60 : 90), subtle ? 480 : 720)}ms`);
            el.classList.add("is-revealed");
          });
        });
        // Leaving: reset so it plays again next time. Remember which edge it left by, so it flows back in
        // from that side (from above when scrolling up, from below when scrolling down).
        entries
          .filter((e) => !e.isIntersecting)
          .forEach((entry) => {
            watched.get(entry.target)?.forEach((el) => {
              el.style.setProperty("--reveal-delay", "0ms");
              el.dataset.from = entry.boundingClientRect.top < 0 ? "top" : "bottom";
              el.classList.remove("is-revealed");
            });
          });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: [0, 0.05, 0.12, 0.25] },
    );
    watched.forEach((_, target) => observer.observe(target));

    return () => observer.disconnect();
  }, [subtle]);

  return null;
}
