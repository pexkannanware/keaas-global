import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button, Container } from "@/components/ui";
import { insights } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <article>
      <header className="bg-mist">
        <Container className="pt-32 pb-12 md:pt-40">
          <p className="eyebrow text-keaas">{article.category}</p>
          <h1 className="display mt-5 max-w-4xl text-4xl text-ink sm:text-5xl md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 text-sm tracking-[0.1em] text-muted uppercase">
            {article.date} · {article.readTime} read
          </p>
        </Container>
        <div className="relative mx-auto aspect-[16/10] max-w-[1440px] overflow-hidden sm:aspect-[16/8]">
          <Image
            src={article.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </header>
      <Container className="max-w-3xl py-16">
        {article.body.map((paragraph) => (
          <p key={paragraph} className="mb-6 text-lg leading-8 text-ink-2">
            {paragraph}
          </p>
        ))}
        <div className="mt-12">
          <Button href="/contact">Talk to KEAAS</Button>
        </div>
      </Container>
    </article>
  );
}
