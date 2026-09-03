import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { Container, PageIntro, Reveal } from "@/components/ui";
import { OutcomeCards } from "@/components/sections/outcome-cards";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why KEAAS",
  description:
    "How KEAAS improves SAP operating costs, productivity and ROI for System Integrators and their clients.",
};

export default function WhyPage() {
  const [featured, ...rest] = testimonials;

  return (
    <>
      <PageIntro
        eyebrow="Why KEAAS"
        title="Why System Integrators choose KEAAS."
      >
        Faster access to scarce SAP expertise — without months of recruitment.
      </PageIntro>

      <Container className="py-20">
        <OutcomeCards />
      </Container>

      <section className="border-t border-line bg-mist">
        <Container className="py-20">
          <Reveal>
            <h2 className="display max-w-3xl text-3xl text-ink sm:text-4xl md:text-5xl">
              Delivery-ready experts, in the programmes we join.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-12">
              <blockquote className="relative overflow-hidden bg-ink px-8 py-10 text-white sm:px-12 sm:py-14">
                <Quote
                  className="absolute top-8 right-8 h-16 w-16 text-white/10"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <p className="display max-w-4xl text-2xl leading-snug sm:text-3xl">
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
                <blockquote className="flex h-full flex-col border border-line bg-paper p-8">
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
        </Container>
      </section>
    </>
  );
}
