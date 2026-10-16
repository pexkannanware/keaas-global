import Image from "next/image";
import { Reveal } from "@/components/ui";
import { leadershipTeam } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function LeadershipTeam() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {leadershipTeam.map((person, i) => (
        <li key={person.name}>
          <Reveal delay={i * 0.08} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper p-2 shadow-[0_8px_30px_rgba(17,17,17,0.045)] transition-shadow duration-300 hover:shadow-[0_16px_42px_rgba(17,17,17,0.11)]">
              <div className="img-reveal relative aspect-[4/5] overflow-hidden rounded-xl bg-mist">
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}, ${person.role} at KEAAS Global Services`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="display text-5xl text-keaas/30">
                      {initials(person.name)}
                    </span>
                  </div>
                )}
              </div>
              <div className="px-2 pb-3 pt-4 sm:px-4 sm:pb-4 sm:pt-5">
                <h3 className="text-base font-medium tracking-tight text-ink sm:text-lg">
                  {person.name}
                </h3>
                <p className="mt-1 text-[0.6rem] tracking-[0.12em] text-keaas uppercase sm:text-[0.7rem] sm:tracking-[0.14em]">
                  {person.role}
                </p>
              </div>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
