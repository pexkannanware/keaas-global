import { Globe, Link2, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { services } from "@/lib/data";

const marks = [
  <Zap key="agile" strokeWidth={1.75} className="h-14 w-14" aria-hidden="true" />,
  <Link2 key="int" strokeWidth={1.75} className="h-14 w-14" aria-hidden="true" />,
  <Globe key="glob" strokeWidth={1.75} className="h-14 w-14" aria-hidden="true" />,
  <ShieldCheck key="trust" strokeWidth={1.75} className="h-14 w-14" aria-hidden="true" />,
  <TrendingUp key="res" strokeWidth={1.75} className="h-14 w-14" aria-hidden="true" />,
];

export function Value() {
  return (
    <section
      id="value"
      aria-labelledby="value-heading"
      className="bg-keaas text-white"
    >
      <Container className="py-20 lg:py-24">
        <Reveal>
          <h2
            id="value-heading"
            className="display max-w-4xl text-3xl sm:text-4xl md:text-5xl"
          >
            Built for the way expertise is delivered today.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-0">
          {services.map((item, i) => (
            <Reveal
              key={item.slug}
              delay={i * 0.06}
              className="border-t border-white/20 pt-8 sm:px-3 lg:border-t-0 lg:border-l lg:px-6 lg:pt-2 lg:first:border-l-0 xl:px-8"
            >
              <div className="flex h-16 w-16 items-center justify-center text-white">
                {marks[i]}
              </div>
              <span className="mt-8 block text-[0.68rem] tracking-[0.2em] text-white/55">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-sm font-medium tracking-[0.18em] uppercase">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[16rem] text-sm leading-6 text-white/75">
                {item.summary}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
