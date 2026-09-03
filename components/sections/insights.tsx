import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Container, Eyebrow, Reveal } from "@/components/ui";
import { insights } from "@/lib/data";

export function Insights() {
  const [lead, ...rest] = insights;

  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="bg-mist"
    >
      <Container className="py-20 md:py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow>Insights</Eyebrow>
            <h2
              id="insights-heading"
              className="display mt-5 text-4xl text-ink sm:text-5xl md:text-6xl"
            >
              Ideas That Move
              <br />
              Enterprise Delivery Forward.
            </h2>
          </Reveal>
          <Button href="/insights" className="self-start md:self-auto">
            View all insights
          </Button>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ArticleBlock article={lead} featured />
          </Reveal>
          <div className="flex flex-col gap-10 lg:col-span-5">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.08}>
                <ArticleBlock article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ArticleBlock({
  article,
  featured = false,
}: {
  article: (typeof insights)[number];
  featured?: boolean;
}) {
  return (
    <article className={featured ? "" : "grid gap-5 md:grid-cols-5"}>
      <Link
        href={`/insights/${article.slug}`}
        className={`group relative block overflow-hidden bg-paper ${
          featured ? "aspect-[16/10]" : "aspect-[16/11] md:col-span-2"
        }`}
      >
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "280px"}
        />
        {featured ? (
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-6 pt-16 pb-5 text-white">
            <span className="block text-[0.65rem] tracking-[0.18em] text-white/80 uppercase">
              {article.category}
            </span>
            <span className="mt-2 block break-words text-2xl tracking-tight md:text-3xl">
              {article.title}
            </span>
          </span>
        ) : null}
      </Link>
      <div className={featured ? "mt-5" : "md:col-span-3"}>
        {featured ? (
          <h3 className="sr-only">{article.title}</h3>
        ) : (
          <>
            <p className="text-[0.65rem] tracking-[0.18em] text-keaas uppercase">
              {article.category}
            </p>
            <h3 className="mt-2 text-xl tracking-tight text-ink">
              <Link href={`/insights/${article.slug}`} className="hover:text-keaas">
                {article.title}
              </Link>
            </h3>
          </>
        )}
        <p className="text-xs tracking-[0.08em] text-muted uppercase">
          {article.date} · {article.readTime} read
        </p>
        <Link
          href={`/insights/${article.slug}`}
          className="group mt-4 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.16em] text-ink uppercase"
        >
          Read article
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
