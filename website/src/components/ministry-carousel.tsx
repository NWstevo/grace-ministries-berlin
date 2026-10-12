"use client";

import { Children, useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SPEED = 32; // px per second: a slow, cinematic drift
const COPIES = 3; // enough repeats to cover very wide screens while looping
const GAP = 24;

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * An endless strip that drifts slowly from right to left and never resets: its position wraps around one
 * copy of the cards, and the copies are identical, so the loop is seamless. The arrows glide it one card
 * either way while it keeps moving; it can also be dragged, swiped or scrolled sideways on a trackpad.
 * It holds still while a keyboard user is focused inside it, and for visitors who prefer reduced motion.
 */
export function MinistryCarousel({ children, label }: { children: ReactNode; label: string }) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const firstCopy = useRef<HTMLDivElement>(null);
  const nudge = useRef(0); // distance still to glide after an arrow click
  // Visitors who prefer reduced motion get a still strip they move with the arrows or by dragging.
  const paused = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const vp = viewport.current;
    const tr = track.current;
    const copy = firstCopy.current;
    if (!vp || !tr || !copy) return;

    let offset = 0;
    let last = performance.now();
    let frame = 0;
    let focused = false;
    let dragging: { x: number; moved: number } | null = null;

    const wrap = () => {
      const loop = copy.offsetWidth;
      if (loop > 0) offset = ((offset % loop) + loop) % loop;
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      if (!pausedRef.current && !focused && !dragging) offset += SPEED * dt;
      if (nudge.current !== 0) {
        const step = Math.abs(nudge.current) < 0.5 ? nudge.current : nudge.current * (1 - Math.exp(-dt * 7));
        offset += step;
        nudge.current -= step;
      }
      wrap();
      tr.style.transform = `translate3d(${-offset}px, 0, 0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    // Drag / swipe
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = { x: e.clientX, moved: 0 };
      nudge.current = 0;
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - dragging.x;
      dragging.x = e.clientX;
      dragging.moved += Math.abs(dx);
      if (dragging.moved > 6 && !vp.hasPointerCapture(e.pointerId)) vp.setPointerCapture(e.pointerId);
      offset -= dx;
    };
    const onUp = () => {
      // A real drag should not also count as a click on the card's link.
      if (dragging && dragging.moved > 6) {
        const swallow = (ev: Event) => {
          ev.preventDefault();
          ev.stopPropagation();
        };
        vp.addEventListener("click", swallow, { capture: true, once: true });
        window.setTimeout(() => vp.removeEventListener("click", swallow, { capture: true }), 0);
      }
      dragging = null;
    };
    // Sideways trackpad / shift+wheel scrolling
    const onWheel = (e: WheelEvent) => {
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
      if (!dx) return;
      e.preventDefault();
      offset += dx;
    };
    const onFocusIn = () => (focused = true);
    const onFocusOut = (e: FocusEvent) => {
      if (!vp.contains(e.relatedTarget as Node)) focused = false;
    };

    vp.addEventListener("pointerdown", onDown);
    vp.addEventListener("pointermove", onMove);
    vp.addEventListener("pointerup", onUp);
    vp.addEventListener("pointercancel", onUp);
    vp.addEventListener("wheel", onWheel, { passive: false });
    vp.addEventListener("focusin", onFocusIn);
    vp.addEventListener("focusout", onFocusOut);
    return () => {
      cancelAnimationFrame(frame);
      vp.removeEventListener("pointerdown", onDown);
      vp.removeEventListener("pointermove", onMove);
      vp.removeEventListener("pointerup", onUp);
      vp.removeEventListener("pointercancel", onUp);
      vp.removeEventListener("wheel", onWheel);
      vp.removeEventListener("focusin", onFocusIn);
      vp.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const card = track.current?.querySelector<HTMLElement>("[data-carousel-item]");
    if (card) nudge.current += dir * (card.offsetWidth + GAP);
  };

  const items = Children.toArray(children);

  return (
    <div className="relative" role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={viewport}
        className="touch-pan-y overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div ref={track} className="flex w-max will-change-transform">
          {Array.from({ length: COPIES }, (_, c) => (
            <div key={c} ref={c === 0 ? firstCopy : undefined} className="flex shrink-0 gap-6 pr-6" inert={c > 0}>
              {items.map((child, i) => (
                <div key={i} data-carousel-item className="w-[19rem] shrink-0 sm:w-[23rem]">
                  {child}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous ministries"
          className="flex size-11 items-center justify-center rounded-full border border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next ministries"
          className="flex size-11 items-center justify-center rounded-full border border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
