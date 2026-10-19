import type { Metadata } from "next";
import { Button, Container, PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "CI/CD Deployment Test",
    description: "A test page to verify automatic deployment to DigitalOcean.",
    path: "/cicd/",
  }),
  robots: { index: false, follow: false },
};

export default function CicdPage() {
  return (
    <>
      <PageIntro eyebrow="Deployment test" title="Hello from CI/CD!">
        This dummy page was added to verify automatic deployment from the main
        branch to DigitalOcean.
      </PageIntro>
      <Container className="max-w-3xl space-y-6 py-16 text-base leading-8 text-muted">
        <p>
          If you can see this page at keaasglobal.com/cicd/, the deployment
          containing this test page is live.
        </p>
        <p className="border border-line bg-mist p-6 font-mono text-ink">
          Test marker: KEAAS-CICD-001
        </p>
        <Button href="/">Back to home</Button>
      </Container>
    </>
  );
}
