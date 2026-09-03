import { Container, Reveal } from "@/components/ui";
import { ProcessRoadmap } from "@/components/sections/process-roadmap";

export function Process({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <section
      id="how-we-work"
      aria-labelledby={hideTitle ? undefined : "process-heading"}
      className="bg-paper"
    >
      <Container className={hideTitle ? "pb-8 lg:pb-12" : "py-20 md:py-24 lg:py-32"}>
        {hideTitle ? null : (
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-keaas">Partner in progress</p>
            <h2
              id="process-heading"
              className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
            >
              More than resources.
              <br />
              A true partner.
            </h2>
          </Reveal>
        )}

        <div className={hideTitle ? "mt-4" : "mt-16 lg:mt-20"}>
          <ProcessRoadmap />
        </div>
      </Container>
    </section>
  );
}
