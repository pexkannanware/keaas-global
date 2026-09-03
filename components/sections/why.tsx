import { Quote } from "lucide-react";
import { Button, Container, Eyebrow, Reveal } from "@/components/ui";
import { OutcomeCards } from "@/components/sections/outcome-cards";
import { testimonials } from "@/lib/data";

export function Why() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="why-keaas" aria-labelledby="why-heading" className="bg-paper">
      <Container className="py-20 md:py-24 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Why KEAAS</Eyebrow>
            <h2
              id="why-heading"
              className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
            >
              Why System Integrators
              <br />
              choose KEAAS.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <p className="max-w-md text-base leading-8 text-muted">
              Faster access to scarce SAP expertise — measured in operating
              cost, productivity and time to value.
            </p>
          </Reveal>
        </div>

        <div className="mt-16">
          <OutcomeCards />
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="eyebrow text-keaas">Testimonials</p>
            <h3 className="display mt-4 max-w-3xl text-3xl text-ink sm:text-4xl md:text-5xl">
              Delivery-ready experts,
              <br />
              in the programmes we join.
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-12">
              <blockquote className="relative overflow-hidden bg-ink px-8 py-10 text-white sm:px-12 sm:py-14">
                <Quote
                  className="absolute top-8 right-8 h-16 w-16 text-white/10"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <p className="display max-w-4xl text-2xl leading-snug sm:text-3xl md:text-[2.15rem] md:leading-[1.25]">
                  {featured.quote}
                </p>
                <footer className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <p className="text-[0.7rem] tracking-[0.2em] text-white/70 uppercase">
                    {featured.company}
                  </p>
                  <p className="text-sm text-white/50">{featured.role}</p>
                </footer>
              </blockquote>
            </Reveal>

            {rest.map((item, i) => (
              <Reveal key={`${item.company}-${i}`} delay={i * 0.05} className="lg:col-span-6">
                <blockquote className="flex h-full flex-col border border-line bg-mist p-8">
                  <Quote className="h-6 w-6 text-keaas" strokeWidth={1.5} aria-hidden="true" />
                  <p className="mt-6 flex-1 text-base leading-7 text-ink-2">
                    {item.quote}
                  </p>
                  <footer className="mt-8 border-t border-line pt-5">
                    <p className="text-[0.68rem] tracking-[0.16em] text-keaas uppercase">
                      {item.company}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.role}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/why-keaas">Why KEAAS</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
