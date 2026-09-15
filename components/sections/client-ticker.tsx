"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Container } from "@/components/ui";
import { clients } from "@/lib/data";

export function ClientLogos() {
  const [activeClient, setActiveClient] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ pointerId: -1, startX: 0, startOffset: 0 });
  const tickerClients = [...clients, ...clients];

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (!trackRef.current) return;
    const transform = window.getComputedStyle(trackRef.current).transform;
    const currentOffset = transform === "none" ? 0 : new DOMMatrix(transform).m41;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startOffset: currentOffset,
    };
    trackRef.current.setPointerCapture(event.pointerId);
    setDragOffset(currentOffset);
    setIsDragging(true);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging || event.pointerId !== dragRef.current.pointerId) return;
    setDragOffset(dragRef.current.startOffset + event.clientX - dragRef.current.startX);
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerId !== dragRef.current.pointerId) return;
    if (trackRef.current?.hasPointerCapture(event.pointerId)) {
      trackRef.current.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
    dragRef.current.pointerId = -1;
  }

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) && !event.shiftKey) return;
    const transform = window.getComputedStyle(event.currentTarget).transform;
    const currentOffset = transform === "none" ? 0 : new DOMMatrix(transform).m41;
    const movement = event.deltaX || event.deltaY;

    event.preventDefault();
    setDragOffset(currentOffset - movement);
    setIsDragging(true);
  }

  return (
    <section
      aria-label="Selected clients"
      className={`client-ticker relative z-30 border-y border-line bg-paper ${isDragging ? "is-interacting" : ""}`}
    >
      <Container className="client-ticker-viewport overflow-visible py-5 sm:py-7">
        <div
          ref={trackRef}
          className="client-ticker-track"
          style={dragOffset === null ? undefined : { transform: `translate3d(${dragOffset}px, 0, 0)` }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
        >
        {tickerClients.map((client, index) => {
          const hasTestimonial = "testimonial" in client;
          const isActive = activeClient === client.name;
          const isDuplicate = index >= clients.length;

          return (
            <figure
              key={`${client.name}-${index}`}
              className={`group relative flex h-24 w-[10rem] shrink-0 items-center justify-center overflow-visible border-l border-line px-5 first:border-l-0 sm:h-28 sm:w-[12rem] sm:px-7 ${isActive ? "z-40" : "z-0"}`}
              tabIndex={hasTestimonial && !isDuplicate ? 0 : undefined}
              onMouseEnter={() => hasTestimonial && !isDuplicate && setActiveClient(client.name)}
              onMouseLeave={() => setActiveClient(null)}
              onFocus={() => hasTestimonial && !isDuplicate && setActiveClient(client.name)}
              onBlur={() => setActiveClient(null)}
            >
              <Image
                src={client.src}
                alt={client.name}
                width={260}
                height={120}
                className="max-h-14 w-auto max-w-full object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out group-hover:scale-105 group-focus:scale-105 sm:max-h-16"
              />
              {hasTestimonial && !isDuplicate ? (
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
      </Container>
    </section>
  );
}
