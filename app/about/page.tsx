import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, PageIntro, Reveal } from "@/components/ui";
import { AboutStats } from "@/components/sections/about-stats";
import { aboutIntro } from "@/lib/data";

export const metadata: Metadata = {
  title: "About KEAAS",
  description:
    "KEAAS provides specialist SAP talent and complete delivery teams to System Integrators.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About KEAAS" title="Knowledge & Expertise as a Service">
        {aboutIntro}
      </PageIntro>

      <Container className="grid items-start gap-14 py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="mb-6 inline-flex border-l-2 border-keaas pl-3 text-xs font-semibold tracking-[0.12em] text-ink-2 uppercase">
            A Kannanware Group company
          </p>
          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image
              src="/images/about-expertise.jpg"
              alt="SAP consultants collaborating around a table as a delivery team"
              fill
              className="object-cover object-[50%_30%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-lg leading-8 text-ink-2">
            KEAAS exists for a precise reason: System Integrators are asked to
            deliver more specialised SAP work, on tighter plans, with benches
            that cannot hold every scarce skill permanently.
          </p>
          <p className="mt-6 text-base leading-8 text-muted">
            KEAAS staffs System Integrator programmes with curated SAP
            specialists — or complete teams — that have already delivered
            inside enterprise ecosystems. We hold ourselves to the same
            operating discipline as the SI partner they join.
          </p>
          <p className="mt-6 text-base leading-8 text-muted">
            Local presence, global expertise. The result is quiet: workstreams
            move, risk reduces, and the client never feels the seam between
            your team and ours.
          </p>
          <div className="mt-10">
            <Button href="/contact">Talk to us</Button>
          </div>
        </div>
      </Container>

      <section className="border-t border-line bg-mist">
        <Container className="py-20">
          <AboutStats />
        </Container>
      </section>
    </>
  );
}
