import { Reveal } from "@/components/ui";
import { whyOutcomes } from "@/lib/data";

export function OutcomeCards() {
  return (
    <Reveal>
      <div className="grid items-stretch gap-5 md:grid-cols-3">
        {whyOutcomes.map((item) => (
          <article
            key={item.stat}
            className="flex h-full flex-col border border-line bg-paper p-8 lg:p-10"
          >
            <p className="display flex h-[4.5rem] items-end whitespace-nowrap text-[2.75rem] leading-none tracking-[-0.05em] text-keaas tabular-nums sm:text-[3.15rem]">
              {item.stat}
            </p>
            <p className="mt-8 text-base leading-8 text-ink-2">
              {item.lead ? (
                <strong className="font-semibold text-ink">{item.lead} </strong>
              ) : null}
              {item.rest}{" "}
              {item.emphasis ? (
                <strong className="font-semibold text-ink">{item.emphasis} </strong>
              ) : null}
              {item.mid ? `${item.mid} ` : null}
              <span className="font-semibold text-ink">{item.stat}</span>{" "}
              {item.trail}
            </p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
