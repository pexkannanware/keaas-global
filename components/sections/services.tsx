import Link from "next/link";
import { ArrowRight, Network, User, Users } from "lucide-react";
import { Button, Container, Eyebrow, Reveal } from "@/components/ui";
import { services } from "@/lib/data";

const marks = [
  <User key="solo" strokeWidth={1.5} className="h-7 w-7" aria-hidden="true" />,
  <Users key="pod" strokeWidth={1.5} className="h-7 w-7" aria-hidden="true" />,
  <Network key="swat" strokeWidth={1.5} className="h-7 w-7" aria-hidden="true" />,
];

const skins = [
  "bg-paper text-ink border-line hover:border-keaas",
  "bg-ink text-white border-ink hover:bg-[#1a1a1a]",
  "bg-keaas text-white border-keaas hover:bg-keaas-deep",
] as const;

const muted = ["text-muted", "text-white/70", "text-white/80"] as const;
const accent = ["text-keaas", "text-white/55", "text-white/70"] as const;
const iconWrap = [
  "border-line text-keaas bg-mist",
  "border-white/20 text-white bg-white/5",
  "border-white/25 text-white bg-white/10",
] as const;
const rule = ["border-keaas/35", "border-white/20", "border-white/25"] as const;
const numberTone = ["text-keaas/40", "text-white/40", "text-white/50"] as const;
const headerRule = ["border-line", "border-white/15", "border-white/20"] as const;

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-mist">
      <Container className="py-20 md:py-24 lg:py-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-3xl">
            <Eyebrow>Delivery types</Eyebrow>
            <h2
              id="services-heading"
              className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
            >
              Access the right
              <br />
              expertise.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              KEAAS staffs System Integrator programmes with individual SAP
              specialists, compact client pods, or a senior task force — the
              capability you need, without a permanent bench.
            </p>
          </Reveal>
          <p className="shrink-0 text-[0.7rem] tracking-[0.2em] text-muted uppercase">
            03 ways to staff a programme
          </p>
        </div>

        <Reveal>
          <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={service.slug}
                className={`group flex h-full flex-col border p-8 transition-transform duration-300 hover:-translate-y-1 lg:min-h-[560px] lg:p-10 ${skins[i]}`}
              >
                <header
                  className={`flex h-[5.75rem] items-end justify-between gap-6 overflow-visible border-b pb-5 ${headerRule[i]}`}
                >
                  <span
                    className={`display block text-[4.5rem] leading-none tracking-[-0.07em] tabular-nums ${numberTone[i]}`}
                  >
                    0{i + 1}
                  </span>
                  <div
                    className={`mb-1 flex h-14 w-14 shrink-0 items-center justify-center border ${iconWrap[i]}`}
                  >
                    {marks[i]}
                  </div>
                </header>

                <p
                  className={`mt-10 min-h-10 text-[0.68rem] leading-5 tracking-[0.2em] uppercase ${accent[i]}`}
                >
                  {service.hook}
                </p>
                <h3 className="mt-3 min-h-16 text-2xl leading-8 tracking-tight">
                  {service.title}
                </h3>
                <ul className="mt-8 flex-1 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className={`border-l pl-4 text-sm leading-6 ${rule[i]} ${muted[i]}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group/link mt-10 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.16em] uppercase ${
                    i === 0 ? "text-ink hover:text-keaas" : "text-white"
                  }`}
                >
                  Staff this way
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="mt-12">
          <Button href="/contact">Request experts</Button>
        </div>
      </Container>
    </section>
  );
}
