"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Container } from "@/components/ui";

const EarthGlobe = dynamic(
  () => import("@/components/earth-globe").then((mod) => mod.EarthGlobe),
  {
    ssr: false,
    loading: () => <div className="h-full min-h-[320px] w-full bg-transparent" />,
  },
);

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-paper"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(180,0,0,0.035),transparent_40%)]"
      />
      <Container className="relative grid min-h-[100svh] items-center pt-32 pb-10 sm:pt-36 sm:pb-14 lg:min-h-[760px] lg:grid-cols-12 lg:pt-28 lg:pb-16">
        <div className="relative z-10 lg:col-span-5 xl:col-span-5">
          <p className="text-xs font-semibold text-keaas">Experts as a Service (EaaS)</p>
          <h1
            id="hero-heading"
            className="mt-4 text-[3.55rem] leading-[0.91] font-semibold tracking-[-0.055em] text-ink sm:text-[4.65rem] lg:text-[5rem] xl:text-[5.55rem]"
          >
            Expertise
            <br />
            <span className="text-keaas">Delivered.</span>
          </h1>
          <p className="mt-6 max-w-sm text-base leading-7 text-muted sm:text-lg sm:leading-8">
            On-demand SAP experts and complete delivery teams for System
            Integrators worldwide.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row">
            <Link
              href="/approach"
              className="inline-flex min-h-12 items-center justify-center border border-keaas bg-keaas px-7 text-[0.68rem] font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-keaas-deep"
            >
              How KEAAS works
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-keaas px-7 text-[0.68rem] font-semibold tracking-[0.08em] text-ink uppercase transition-colors hover:bg-keaas hover:text-white"
            >
              Talk to us
            </Link>
          </div>
        </div>

        <div className="relative -mx-14 mt-4 h-[350px] min-[430px]:-mx-20 min-[430px]:h-[430px] sm:-mx-24 sm:h-[500px] lg:absolute lg:inset-y-[8%] lg:right-[-7%] lg:mt-0 lg:h-auto lg:w-[66%] xl:right-[-6%] xl:w-[65%]">
          <EarthGlobe />
        </div>
      </Container>
    </section>
  );
}
