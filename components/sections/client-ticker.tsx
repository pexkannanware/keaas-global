"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui";
import { clients } from "@/lib/data";

const TICKER_SPEED = 30; // px per second
const RESUME_DELAY = 2000; // ms after the visitor stops swiping

const logoClassName =
  "max-h-10 w-auto max-w-full object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out group-hover:scale-105 group-focus:scale-105 sm:max-h-11 lg:max-h-12";

function MobileTicker() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const tickerClients = [...clients, ...clients];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let position = scroller.scrollLeft;
    let lastTime = performance.now();
    let pausedUntil = 0;
    let isTouching = false;
    let frame = 0;

    const loopWidth = () => scroller.scrollWidth / 2;

    function tick(now: number) {
      const elapsed = now - lastTime;
      lastTime = now;
      // offsetWidth is 0 while the ticker is hidden on desktop.
      if (!isTouching && now >= pausedUntil && scroller!.offsetWidth) {
        position += (TICKER_SPEED * elapsed) / 1000;
        if (position >= loopWidth()) position -= loopWidth();
        scroller!.scrollLeft = position;
      }
      frame = requestAnimationFrame(tick);
    }

    function pause() {
      isTouching = true;
    }

    function resume() {
      isTouching = false;
      pausedUntil = performance.now() + RESUME_DELAY;
    }

    // Keep the loop seamless when the visitor swipes past either end.
    function handleScroll() {
      if (!isTouching && performance.now() >= pausedUntil) return;
      const width = loopWidth();
      if (scroller!.scrollLeft >= width) scroller!.scrollLeft -= width;
      else if (scroller!.scrollLeft <= 0) scroller!.scrollLeft += width;
      position = scroller!.scrollLeft;
    }

    function handleWheel() {
      pausedUntil = performance.now() + RESUME_DELAY;
    }

    scroller.addEventListener("pointerdown", pause);
    scroller.addEventListener("touchstart", pause, { passive: true });
    scroller.addEventListener("pointerup", resume);
    scroller.addEventListener("pointercancel", resume);
    scroller.addEventListener("touchend", resume);
    scroller.addEventListener("wheel", handleWheel, { passive: true });
    scroller.addEventListener("scroll", handleScroll, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("pointerdown", pause);
      scroller.removeEventListener("touchstart", pause);
      scroller.removeEventListener("pointerup", resume);
      scroller.removeEventListener("pointercancel", resume);
      scroller.removeEventListener("touchend", resume);
      scroller.removeEventListener("wheel", handleWheel);
      scroller.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="client-ticker-viewport lg:hidden">
      <div ref={scrollerRef} className="client-ticker-scroller overflow-x-auto">
        <div className="flex w-max">
          {tickerClients.map((client, index) => (
            <figure
              key={`${client.name}-${index}`}
              className="flex h-20 w-[8.5rem] shrink-0 items-center justify-center border-l border-line px-5 first:border-l-0 sm:h-24 sm:w-[10rem]"
              aria-hidden={index >= clients.length}
            >
              <Image
                src={client.src}
                alt={index >= clients.length ? "" : `${client.name} logo`}
                width={260}
                height={120}
                draggable={false}
                className={logoClassName}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopRow() {
  const [activeClient, setActiveClient] = useState<string | null>(null);

  return (
    <div className="hidden grid-cols-5 lg:grid">
      {clients.map((client) => {
        const hasTestimonial = "testimonial" in client;
        const isActive = activeClient === client.name;

        return (
          <figure
            key={client.name}
            className={`group relative flex h-24 items-center justify-center overflow-visible border-l border-line px-7 first:border-l-0 ${isActive ? "z-40" : "z-0"}`}
            tabIndex={hasTestimonial ? 0 : undefined}
            onMouseEnter={() => hasTestimonial && setActiveClient(client.name)}
            onMouseLeave={() => setActiveClient(null)}
            onFocus={() => hasTestimonial && setActiveClient(client.name)}
            onBlur={() => setActiveClient(null)}
          >
            <Image
              src={client.src}
              alt={`${client.name} logo`}
              width={260}
              height={120}
              className={logoClassName}
            />
            {hasTestimonial ? (
              <figcaption
                aria-hidden={!isActive}
                className={`pointer-events-none absolute bottom-[calc(100%+0.75rem)] left-1/2 z-50 w-[19rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-[0.2rem] border border-[#d8c9b2] bg-[#fffdf8] px-5 py-5 text-left shadow-[0_18px_45px_rgba(38,31,23,0.18)] transition-all duration-300 ${
                  isActive
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible translate-y-2 scale-[0.98] opacity-0"
                }`}
              >
                <span className="mb-3 block h-px w-10 bg-keaas" aria-hidden="true" />
                <p className="font-serif text-[0.9375rem] leading-7 text-ink-2">
                  <span className="mr-0.5 text-2xl leading-none text-keaas">“</span>
                  {client.testimonial}
                  <span className="ml-0.5 text-2xl leading-none text-keaas">”</span>
                </p>
                <span className="mt-4 block text-[0.625rem] font-semibold tracking-[0.18em] text-keaas uppercase">
                  {client.name}
                </span>
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}

export function ClientLogos() {
  return (
    <section
      aria-label="Selected clients"
      className="relative z-30 border-y border-line bg-paper"
    >
      <Container className="py-4 sm:py-6">
        <MobileTicker />
        <DesktopRow />
      </Container>
    </section>
  );
}
