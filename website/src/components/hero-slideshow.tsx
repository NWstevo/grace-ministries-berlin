"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

const SLIDE_MS = 1600; // matches the .hero-slide transition in globals.css
const HOLD_MS = 10_000; // each picture stays fully in view for 10 seconds
const INTERVAL_MS = SLIDE_MS + HOLD_MS;

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * Hero background that keeps sliding to the next picture, right to left, forever. Only the incoming and
 * outgoing slides animate; the rest wait off to the right. Visitors who prefer reduced motion see the first
 * picture only.
 */
export function HeroSlideshow({ slides, className = "" }: { slides: { src: string; alt: string }[]; className?: string }) {
  const [{ index, previous }, setSlide] = useState<{ index: number; previous: number | null }>({ index: 0, previous: null });
  const reducedMotion = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);

  useEffect(() => {
    if (reducedMotion || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setSlide(({ index: i }) => ({ index: (i + 1) % slides.length, previous: i }));
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [reducedMotion, slides.length]);

  return (
    <div className={`absolute inset-0 ${className}`} data-reveal-skip>
      {slides.map((slide, i) => {
        const state = i === index ? "active" : i === previous ? "leaving" : "waiting";
        return (
          <div key={slide.src} className="hero-slide" data-state={state} aria-hidden={state !== "active"}>
            <Image
              src={slide.src}
              alt={state === "active" ? slide.alt : ""}
              fill
              preload={i === 0}
              loading={i === 0 ? undefined : "eager"}
              sizes="100vw"
              className="object-cover object-[70%_center]"
            />
          </div>
        );
      })}
    </div>
  );
}
