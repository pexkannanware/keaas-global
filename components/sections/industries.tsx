import { Container, Eyebrow, Reveal } from "@/components/ui";
import { CoverageGrid } from "@/components/sections/coverage-grid";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-paper"
    >
      <Container className="py-20 md:py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <Eyebrow>Coverage</Eyebrow>
          <h2
            id="industries-heading"
            className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            One partner.
            <br />
            Multiple capabilities.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            Industry landscapes, process domains and SAP skills — staffed as
            one complementary bench for System Integrators.
          </p>
        </Reveal>

        <div className="mt-16">
          <CoverageGrid />
        </div>
      </Container>
    </section>
  );
}
