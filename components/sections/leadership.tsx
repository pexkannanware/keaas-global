import { Button, Container, Reveal } from "@/components/ui";

export function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="bg-paper"
    >
      <Container className="grid items-start gap-14 py-20 md:py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-6">
          <Reveal>
            <h2
              id="leadership-heading"
              className="display text-4xl text-ink sm:text-5xl md:text-6xl"
            >
              Vision. Experience.
              <br />
              Commitment.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="text-base leading-8 text-muted">
              KEAAS is built on decades of collective experience in technology,
              consulting and enterprise delivery. The standard is simple:
              expertise that joins a live programme and raises its quality.
            </p>
            <div className="mt-10">
              <Button href="/leadership">Our leadership standard</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
