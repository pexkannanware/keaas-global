import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-40">
      <p className="eyebrow text-keaas">404</p>
      <h1 className="display mt-5 text-5xl text-ink">Page not found.</h1>
      <p className="mt-6 max-w-md text-muted">
        The page you requested is not part of the KEAAS site.
      </p>
      <div className="mt-10">
        <Button href="/">Return home</Button>
      </div>
    </Container>
  );
}
