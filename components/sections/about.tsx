import Image from "next/image";
import { Button, Container, Eyebrow, Reveal } from "@/components/ui";
import { AboutStats } from "@/components/sections/about-stats";
import { aboutIntro } from "@/lib/data";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-paper">
      <Container className="py-20 md:py-24 lg:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>About KEAAS</Eyebrow>
              <p className="mt-4 inline-flex border-l-2 border-keaas pl-3 text-xs font-semibold tracking-[0.12em] text-ink-2 uppercase">
                A Kannanware Group company
              </p>
              <h2
                id="about-heading"
                className="display mt-5 text-4xl text-ink sm:text-5xl md:text-[3.4rem]"
              >
                Knowledge &amp; Expertise
                <br />
                as a Service
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-muted">
                {aboutIntro}
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                KEAAS staffs System Integrator programmes with specialist SAP
                talent and complete delivery teams. We integrate with your
                teams to accelerate delivery, reduce risk and maximise value.
              </p>
              <div className="mt-10">
                <Button href="/about">Discover KEAAS</Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <figure>
                <div className="img-reveal relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src="/images/about-expertise.jpg"
                    alt="SAP consultants collaborating around a table as a delivery team"
                    fill
                    className="object-cover object-[50%_30%]"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <AboutStats />
        </div>
      </Container>
    </section>
  );
}
