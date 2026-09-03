"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui";
import { clients } from "@/lib/data";

export function ClientLogos() {
  const [activeClient, setActiveClient] = useState<string | null>(null);
  const tickerClients = [...clients, ...clients];

  return (
    <section
      aria-label="Selected clients"
      className="client-ticker border-y border-line bg-paper"
    >
      <Container className="client-ticker-viewport overflow-visible py-5 sm:py-7">
        <div className="client-ticker-track">
        {tickerClients.map((client, index) => {
          const hasTestimonial = "testimonial" in client;
          const isActive = activeClient === client.name;
          const isDuplicate = index >= clients.length;

          return (
            <figure
              key={`${client.name}-${index}`}
              className="group relative z-0 flex h-24 w-[10rem] shrink-0 items-center justify-center overflow-visible border-l border-line px-5 first:border-l-0 sm:h-28 sm:w-[12rem] sm:px-7"
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
                    className={`pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-50 w-[17.5rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 border border-line bg-paper px-4 py-3.5 text-left shadow-[0_10px_28px_rgba(0,0,0,0.1)] transition-all duration-200 ${
                    isActive
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1 opacity-0"
                  }`}
                >
                  <p className="text-[0.8125rem] leading-6 text-ink-2">
                    <span className="text-keaas">“</span>
                    {client.testimonial}
                    <span className="text-keaas">”</span>
                  </p>
                  <span className="mt-2.5 block text-[0.625rem] tracking-[0.14em] text-muted uppercase">
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
