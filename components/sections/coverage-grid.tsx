import {
  BarChart3,
  Brain,
  Car,
  ClipboardCheck,
  Cloud,
  Coins,
  Cog,
  Factory,
  Fuel,
  Headset,
  Landmark,
  LineChart,
  Sprout,
  TrendingUp,
  Truck,
  User,
  Utensils,
  Wallet,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";
import { domains, industries, skills } from "@/lib/data";

const icons: Record<string, ReactNode> = {
  landmark: <Landmark strokeWidth={1.5} className="h-4 w-4" />,
  factory: <Factory strokeWidth={1.5} className="h-4 w-4" />,
  fuel: <Fuel strokeWidth={1.5} className="h-4 w-4" />,
  car: <Car strokeWidth={1.5} className="h-4 w-4" />,
  utensils: <Utensils strokeWidth={1.5} className="h-4 w-4" />,
  sprout: <Sprout strokeWidth={1.5} className="h-4 w-4" />,
  wallet: <Wallet strokeWidth={1.5} className="h-4 w-4" />,
  headset: <Headset strokeWidth={1.5} className="h-4 w-4" />,
  "clipboard-check": <ClipboardCheck strokeWidth={1.5} className="h-4 w-4" />,
  truck: <Truck strokeWidth={1.5} className="h-4 w-4" />,
  user: <User strokeWidth={1.5} className="h-4 w-4" />,
  coins: <Coins strokeWidth={1.5} className="h-4 w-4" />,
  "trending-up": <TrendingUp strokeWidth={1.5} className="h-4 w-4" />,
  "bar-chart": <BarChart3 strokeWidth={1.5} className="h-4 w-4" />,
  "line-chart": <LineChart strokeWidth={1.5} className="h-4 w-4" />,
  cog: <Cog strokeWidth={1.5} className="h-4 w-4" />,
  brain: <Brain strokeWidth={1.5} className="h-4 w-4" />,
  cloud: <Cloud strokeWidth={1.5} className="h-4 w-4" />,
};

const sets = [
  {
    title: "Industry",
    kicker: "Where we deliver",
    items: industries,
    header: "bg-ink text-white",
    chip: "bg-mist text-ink",
    icon: "text-keaas",
  },
  {
    title: "Domain",
    kicker: "Processes we run",
    items: domains,
    header: "bg-keaas text-white",
    chip: "bg-[#fff5f5] text-ink",
    icon: "text-keaas",
  },
  {
    title: "Skills",
    kicker: "SAP capabilities",
    items: skills,
    header: "bg-ink-2 text-white",
    chip: "bg-mist text-ink",
    icon: "text-keaas",
  },
] as const;

export function CoverageGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {sets.map((set, i) => (
        <Reveal key={set.title} delay={i * 0.08} className="h-full">
          <article className="flex h-full flex-col overflow-hidden border border-line bg-paper">
            <header className={`px-7 py-6 ${set.header}`}>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase opacity-70">
                {set.kicker}
              </p>
              <div className="mt-2 flex items-baseline justify-between gap-4">
                <h3 className="text-2xl tracking-tight">{set.title}</h3>
                <span className="text-[0.7rem] tracking-[0.16em] tabular-nums uppercase opacity-70">
                  {String(set.items.length).padStart(2, "0")}
                </span>
              </div>
            </header>
            <ul className="flex flex-1 flex-col gap-2 p-5">
              {set.items.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center gap-3 px-4 py-3 ${set.chip}`}
                >
                  <span className={`shrink-0 ${set.icon}`}>{icons[item.icon]}</span>
                  <span className="text-sm font-medium tracking-wide">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
