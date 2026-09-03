import { Reveal } from "@/components/ui";
import { aboutStats } from "@/lib/data";

export function AboutStats() {
  return (
    <Reveal>
      <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
        {aboutStats.map((stat) => (
          <article key={stat.value} className="flex h-full flex-col bg-paper px-6 py-8">
            <p className="display flex h-14 items-end text-4xl leading-none tracking-[-0.04em] text-keaas tabular-nums sm:text-5xl">
              {stat.value}
            </p>
            <h3 className="mt-4 min-h-12 text-sm font-medium leading-6 tracking-tight text-ink">
              {stat.title}
            </h3>
            {"subtitle" in stat && stat.subtitle ? (
              <p className="mt-1 text-sm leading-6 text-ink-2">{stat.subtitle}</p>
            ) : null}
            {"items" in stat && stat.items ? (
              <ul className="mt-4 space-y-1.5">
                {stat.items.map((item) => (
                  <li key={item} className="text-xs leading-5 text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="mt-auto pt-6 text-[0.65rem] tracking-[0.16em] text-keaas uppercase">
              {stat.tagline}
            </p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
