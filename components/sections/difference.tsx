import { Container, Reveal } from "@/components/ui";
import { ProcessRoadmap } from "@/components/sections/process-roadmap";

export function Difference() {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="bg-mist"
    >
      <Container className="py-20 md:py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-keaas">Partner in progress</p>
          <h2
            id="difference-heading"
            className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            More than resources.
            <br />
            A true partner.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            Eight steps from the first requirement to weekly quality governance
            — the operating path System Integrators actually run.
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-20">
          <ProcessRoadmap />
        </div>
      </Container>
    </section>
  );
}
