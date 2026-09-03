import Image from "next/image";
import { Button, Container, Reveal } from "@/components/ui";
import { whyOutcomes } from "@/lib/data";

export function Partners() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="bg-ink text-white"
    >
      <Container className="grid items-center gap-16 py-20 md:py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-6">
          <Reveal>
            <h2
              id="partners-heading"
              className="display text-4xl sm:text-5xl md:text-6xl"
            >
              Your Trusted
              <br />
              Growth Partner
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-white/65">
              We help global System Integrators extend delivery capacity with
              individual SAP specialists or complete, ready-to-integrate teams.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-0 sm:grid-cols-2">
            {whyOutcomes.map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.05}>
                <article
                  className={`border-white/12 py-6 ${
                    i % 2 === 0 ? "sm:pr-8" : "sm:border-l sm:pl-8"
                  } ${i < 2 ? "border-b" : ""}`}
                >
                  <h3 className="text-[0.72rem] leading-5 font-medium tracking-[0.14em] uppercase">
                    {item.stat}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {[item.lead, item.rest, item.emphasis, item.mid, item.stat, item.trail]
                      .filter(Boolean)
                      .join(" ")}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/contact" variant="light">
              Partner with KEAAS
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/collaboration.jpg"
                alt="Indian delivery partners confirming a KEAAS engagement"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
