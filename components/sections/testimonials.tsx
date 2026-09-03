import { Container, Reveal } from "@/components/ui";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const featured = testimonials[0];
  const supporting = testimonials.slice(1);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-paper"
    >
      <Container className="py-20 md:py-24 lg:py-32">
        <Reveal>
          <h2
            id="testimonials-heading"
            className="display max-w-4xl text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            Trusted by System Integrators Worldwide
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <blockquote className="relative">
              <span
                aria-hidden="true"
                className="display text-5xl leading-none text-keaas/20 sm:text-7xl"
              >
                “
              </span>
              <p className="display -mt-4 break-words text-2xl leading-snug text-ink sm:-mt-8 sm:text-3xl md:text-[2.35rem] md:leading-[1.25]">
                {featured.quote}
              </p>
              <footer className="mt-10">
                <p className="text-[0.7rem] tracking-[0.2em] text-keaas uppercase">
                  {featured.company}
                </p>
                <p className="mt-2 text-sm text-muted">{featured.role}</p>
              </footer>
            </blockquote>
          </Reveal>

          <div className="flex flex-col justify-end gap-10 lg:col-span-5">
            {supporting.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.08}>
                <blockquote className="border-t border-line pt-8">
                  <p className="text-lg leading-8 text-ink-2">“{item.quote}”</p>
                  <footer className="mt-6">
                    <p className="text-[0.68rem] tracking-[0.18em] text-keaas uppercase">
                      {item.company}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.role}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
