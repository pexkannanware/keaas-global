import type { Metadata } from "next";
import { Button, Container, PageIntro, Reveal } from "@/components/ui";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro eyebrow="Case Studies" title="Outcomes, not occupancy.">
        Selected programmes where KEAAS experts joined a System Integrator
        team and moved the critical path.
      </PageIntro>
      <Container className="py-20">
        <ol className="divide-y divide-line border-y border-line">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.05}>
              <li className="grid gap-4 py-12 md:grid-cols-12">
                <p className="text-[0.7rem] tracking-[0.16em] text-keaas uppercase md:col-span-3">
                  {study.client}
                </p>
                <div className="md:col-span-8">
                  <h2 className="text-2xl tracking-tight text-ink md:text-3xl">
                    {study.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-muted">
                    {study.result}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-14">
          <Button href="/contact">Discuss a programme</Button>
        </div>
      </Container>
    </>
  );
}
