import type { Metadata } from "next";
import { Container, PageIntro } from "@/components/ui";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms of Service">
        Conditions that govern use of the KEAAS website.
      </PageIntro>
      <Container className="max-w-3xl space-y-6 py-16 text-base leading-8 text-muted">
        <p>
          This website is provided by KEAAS for information about our
          Experts-as-a-Service offering. Content is published in good faith and
          may be updated without notice.
        </p>
        <p>
          Submitting an enquiry does not create a contract. Any engagement of
          KEAAS experts is governed by a separate statement of work or master
          services agreement with the relevant System Integrator.
        </p>
        <p>
          All trademarks, photographs and written materials on this site are
          owned by KEAAS or used with permission. They may not be reproduced
          for commercial use without written consent.
        </p>
        <p>
          Questions about these terms may be sent to hello@keaas.com.
        </p>
      </Container>
    </>
  );
}
