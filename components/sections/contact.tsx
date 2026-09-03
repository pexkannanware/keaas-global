import { Container } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-line bg-paper"
    >
      <Container className="grid items-start gap-14 py-20 md:py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <h2
            id="contact-heading"
            className="display text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            Let&apos;s Build Something
            <br />
            Great Together.
          </h2>
          <p className="mt-8 max-w-md text-base leading-8 text-muted">
            Tell us about your project and discover how KEAAS can help.
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="border border-line bg-white px-6 py-8 shadow-[0_1px_0_#e6e6e6] sm:px-10 sm:py-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
