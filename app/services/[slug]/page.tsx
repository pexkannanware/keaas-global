import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, Container, PageIntro } from "@/components/ui";
import { services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageIntro eyebrow="Services" title={service.title}>
        {service.summary}
      </PageIntro>
      <Container className="max-w-3xl py-16">
        <ul className="space-y-4 border-y border-line py-8">
          {service.points.map((point) => (
            <li
              key={point}
              className="border-l-2 border-keaas pl-5 text-base leading-7 text-ink-2"
            >
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-lg leading-8 text-ink-2">{service.detail}</p>
        <div className="mt-12">
          <Button href="/contact">Request this capability</Button>
        </div>
      </Container>
    </>
  );
}
