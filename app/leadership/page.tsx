import type { Metadata } from "next";
import { Button, Container, Eyebrow, PageIntro, Reveal } from "@/components/ui";
import { LeadershipTeam } from "@/components/sections/leadership-team";

export const metadata: Metadata = {
  title: "Leadership",
};

export default function LeadershipPage() {
  return (
    <>
      <PageIntro eyebrow="Leadership" title="Vision. Experience. Commitment.">
        KEAAS is guided by a simple standard: expertise that joins a live
        programme and raises its quality.
      </PageIntro>
      <Container className="max-w-3xl space-y-6 py-16 text-base leading-8 text-muted">
        <p>
          The company is built on decades of collective experience in
          technology, consulting and enterprise delivery. The work is judged by
          how programmes move — not by personalities on a page.
        </p>
        <p>
          Screening, matching, onboarding and feedback are treated as an
          operating system — repeated without theatre, and held to the same
          discipline as the System Integrator teams we join.
        </p>
      </Container>

      <Container className="pb-20 md:pb-24">
        <Reveal>
          <Eyebrow>The team</Eyebrow>
          <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">
            Leading KEAAS
          </h2>
        </Reveal>
        <div className="mt-10">
          <LeadershipTeam />
        </div>
      </Container>

      <Container className="pb-24">
        <Button href="/contact">Talk to KEAAS</Button>
      </Container>
    </>
  );
}
