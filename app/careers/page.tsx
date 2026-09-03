import type { Metadata } from "next";
import { Button, Container, PageIntro, Reveal } from "@/components/ui";
import { careers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <>
      <PageIntro eyebrow="Careers" title="Join the KEAAS bench.">
        We look for professionals who have already delivered inside complex
        enterprise programmes — and who can raise the standard of the room they
        enter.
      </PageIntro>
      <Container className="py-20">
        <ul className="divide-y divide-line border-y border-line">
          {careers.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.04}>
              <li className="flex flex-col justify-between gap-4 py-8 md:flex-row md:items-center">
                <div>
                  <h2 className="text-xl tracking-tight text-ink">{role.title}</h2>
                  <p className="mt-2 text-sm text-muted">
                    {role.location} · {role.type}
                  </p>
                </div>
                <Button href="/contact" variant="secondary">
                  Enquire
                </Button>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </>
  );
}
