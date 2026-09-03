import type { Metadata } from "next";
import { Button, Container, PageIntro } from "@/components/ui";
import { CoverageGrid } from "@/components/sections/coverage-grid";

export const metadata: Metadata = {
  title: "Domain Expertise",
};

export default function ExpertsPage() {
  return (
    <>
      <PageIntro eyebrow="Domain expertise" title="One partner. Multiple capabilities.">
        Industry landscapes, process domains and SAP skills — staffed as one
        complementary bench for System Integrators. Every expert is screened
        for skill, enterprise exposure and cultural fit.
      </PageIntro>
      <Container className="py-20">
        <CoverageGrid />
      </Container>
      <Container className="pb-24">
        <Button href="/contact">Request domain expertise</Button>
      </Container>
    </>
  );
}
