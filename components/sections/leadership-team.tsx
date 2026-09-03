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
    <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {leadershipTeam.map((person, i) => (
        <li key={person.name} className="bg-paper">
          <Reveal delay={i * 0.08} className="h-full">
            <article className="group flex h-full flex-col">
              <div className="img-reveal relative aspect-[4/5] overflow-hidden bg-mist">
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}, ${person.role} at KEAAS`}
                    fill
                    className="object-cover grayscale-[15%] transition-all duration-500 group-hover:grayscale-0"
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
              <div className="border-t border-line px-6 py-6">
                <h3 className="text-lg font-medium tracking-tight text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 text-[0.7rem] tracking-[0.14em] text-keaas uppercase">
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
