import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, PageIntro, Reveal } from "@/components/ui";
import { insights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights",
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow="Insights" title="Ideas that move enterprise delivery forward.">
        Briefings for System Integrator leaders on expertise, delivery and the
        platforms that still decide programmes.
      </PageIntro>
      <Container className="grid gap-14 py-20 lg:grid-cols-12">
        {insights.map((article, i) => (
          <Reveal
            key={article.slug}
            delay={i * 0.05}
            className={i === 0 ? "lg:col-span-12" : "lg:col-span-6"}
          >
            <article className={i === 0 ? "grid gap-8 lg:grid-cols-2" : ""}>
              <Link
                href={`/insights/${article.slug}`}
                className={`relative block overflow-hidden bg-mist ${
                  i === 0 ? "aspect-[16/10]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={article.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </Link>
              <div className={i === 0 ? "flex flex-col justify-center" : "mt-5"}>
                <p className="text-[0.65rem] tracking-[0.18em] text-keaas uppercase">
                  {article.category}
                </p>
                <h2 className="mt-3 text-2xl tracking-tight text-ink md:text-3xl">
                  <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="mt-3 text-sm text-muted">
                  {article.date} · {article.readTime} read
                </p>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                  {article.excerpt}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </Container>
    </>
  );
}
