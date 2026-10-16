import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Button, Container, PageIntro } from "@/components/ui";
import { CoverageGrid } from "@/components/sections/coverage-grid";

export const metadata: Metadata = pageMetadata({
  title: "SAP Domain Expertise",
  description:
    "SAP domain expertise from KEAAS Global Services across FICO, Treasury, MM, SD, PP, PM, ABAP and BTP, staffed as one bench for System Integrators.",
  path: "/experts",
  keywords: ["SAP FICO consultants", "SAP Treasury consultants", "SAP MM SD consultants", "SAP PP consultants", "SAP PM consultants", "SAP ABAP developers", "SAP BTP consultants"],
});

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
