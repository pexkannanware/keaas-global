import { process } from "@/lib/data";

function Node({
  step,
  align = "left",
  index,
}: {
  step: (typeof process)[number];
  align?: "left" | "center";
  index: number;
}) {
  return (
    <div className={align === "center" ? "flex flex-col items-center text-center" : "flex gap-5"}>
      <div
        className="roadmap-node relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-keaas bg-paper text-[0.8rem] font-medium tracking-[0.12em] text-keaas tabular-nums"
        style={{ animationDelay: `${index * 1.15}s` }}
      >
        {step.id}
      </div>
      <div className={align === "center" ? "min-h-[7.5rem]" : ""}>
        <h3
          className={`text-[0.7rem] leading-5 font-medium tracking-[0.14em] text-ink uppercase ${
            align === "center" ? "mt-5 max-w-[11rem]" : "max-w-[18rem]"
          }`}
        >
          {step.title}
        </h3>
        <p
          className={`mt-2 text-sm leading-6 text-muted ${
            align === "center" ? "max-w-[14rem]" : "max-w-[20rem]"
          }`}
        >
          {step.copy}
        </p>
      </div>
    </div>
  );
}

export function ProcessRoadmap() {
  const first = process.slice(0, 4);
  const second = [...process.slice(4)].reverse();
  const route = "M125 24 H875 V248 H125";

  return (
    <div>
      <ol className="relative space-y-10 lg:hidden">
        <span
          aria-hidden="true"
          className="roadmap-rail-y absolute top-6 bottom-6 left-6 w-px -translate-x-1/2"
        />
        <span aria-hidden="true" className="roadmap-traveler-y" />
        {process.map((step, i) => (
          <li key={step.id} className="relative">
            <Node step={step} index={i} />
          </li>
        ))}
      </ol>

      <div className="relative hidden lg:block">
        <svg
          className="pointer-events-none absolute top-0 left-0 h-[17rem] w-full overflow-visible"
          viewBox="0 0 1000 272"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path d={route} stroke="rgba(180,0,0,0.14)" strokeWidth="1.5" />
          <path
            id="roadmap-route"
            className="roadmap-stroke"
            d={route}
            stroke="#b40000"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle r="5" fill="#b40000">
            <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
              <mpath href="#roadmap-route" />
            </animateMotion>
          </circle>
        </svg>

        <ol className="relative grid grid-cols-4 gap-6">
          {first.map((step, i) => (
            <li key={step.id}>
              <Node step={step} align="center" index={i} />
            </li>
          ))}
        </ol>

        <div className="h-14" aria-hidden="true" />

        <ol className="relative grid grid-cols-4 gap-6">
          {second.map((step, i) => (
            <li key={step.id}>
              <Node step={step} align="center" index={7 - i} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
