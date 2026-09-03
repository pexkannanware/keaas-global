import type { Metadata } from "next";
import { Container, PageIntro } from "@/components/ui";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy">
        How KEAAS handles information submitted through this website.
      </PageIntro>
      <Container className="max-w-3xl space-y-6 py-16 text-base leading-8 text-muted">
        <p>
          KEAAS collects only the information you choose to provide through the
          contact form — typically your name, work email, company, telephone
          number and a description of the expertise you require.
        </p>
        <p>
          That information is used solely to respond to your enquiry and, where
          relevant, to prepare a proposed engagement. We do not sell personal
          data. We do not use the form for marketing lists.
        </p>
        <p>
          Enquiry records are retained for as long as needed to manage the
          conversation and any subsequent engagement, then deleted or archived
          according to our internal retention schedule.
        </p>
        <p>
          To request access, correction or deletion of information you have
          submitted, write to hello@keaas.com.
        </p>
      </Container>
    </>
  );
}
