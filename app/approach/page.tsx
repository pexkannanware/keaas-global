import type { Metadata } from "next";
import { Button, Container, PageIntro, Reveal } from "@/components/ui";
import { Process } from "@/components/sections/process";
import { approachCommitments, approachPrinciples } from "@/lib/data";

export const metadata: Metadata = {
  title: "Approach",
};

export default function ApproachPage() {
  return (
    <>
      <PageIntro eyebrow="Approach" title="More than resources. A true partner.">
        Partner in progress — eight stages from requirement gathering to weekly
        quality governance.
      </PageIntro>

      <section className="border-b border-line bg-mist">
        <Container className="py-20">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-keaas">How we work with SIs</p>
            <h2 className="display mt-5 text-3xl text-ink sm:text-4xl md:text-5xl">
              A delivery model built for System Integrator programmes.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted">
              KEAAS does not drop résumés into your inbox. We run a structured
              partner-in-progress model — from understanding the requirement
              through deployment and ongoing quality governance — so every
              expert arrives ready to operate inside your delivery system.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {approachPrinciples.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="flex h-full flex-col border border-line bg-paper p-8">
                  <p className="text-[0.65rem] tracking-[0.2em] text-keaas uppercase tabular-nums">
                    0{i + 1}
                  </p>
                  <h3 className="mt-4 text-xl tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-muted">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Process hideTitle />

      <section className="border-t border-line bg-paper">
        <Container className="py-20 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-keaas">Operating commitments</p>
            <h2 className="display mt-5 text-3xl text-ink sm:text-4xl md:text-5xl">
              What you can expect from day one.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted">
              The roadmap above is the path. These are the standards we hold
              ourselves to once an expert is placed — the same discipline we
              expect from the SI partners we join.
            </p>
          </Reveal>

          <dl className="mt-14 divide-y divide-line border-y border-line">
            {approachCommitments.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.04}>
                <div className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
                  <dt className="text-sm font-medium tracking-[0.12em] text-keaas uppercase md:col-span-4">
                    {item.label}
                  </dt>
                  <dd className="text-base leading-7 text-muted md:col-span-8">
                    {item.detail}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-line bg-mist">
        <Container className="py-20">
          <Reveal className="max-w-2xl">
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Ready to place the right expert?
            </h2>
            <p className="mt-6 text-base leading-8 text-muted">
              Tell us the workstream, the module depth and the timeline. We will
              map the requirement, validate profiles internally and submit
              candidates who are ready to join your programme.
            </p>
            <div className="mt-10">
              <Button href="/contact">Start a conversation</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
