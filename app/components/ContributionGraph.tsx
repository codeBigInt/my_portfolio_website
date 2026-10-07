import { GITHUB_USER, getContributions } from "../lib/github-contributions";
import Reveal from "./Reveal";
import ArrowUpRight from "./ArrowUpRight";

const LEVEL_COLORS = [
  "rgba(20,20,20,0.07)",
  "rgba(20,20,20,0.25)",
  "rgba(20,20,20,0.48)",
  "rgba(20,20,20,0.72)",
  "rgba(20,20,20,0.95)",
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDay(date: string, count: number) {
  const label = new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
  return `${count === 0 ? "No" : count} contribution${count === 1 ? "" : "s"} on ${label}`;
}

export default async function ContributionGraph() {
  const data = await getContributions();
  const profile = `https://github.com/${GITHUB_USER}`;

  if (!data) {
    return (
      <a
        href={profile}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-ink/60 underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-ink"
      >
        See my contributions on GitHub <ArrowUpRight />
      </a>
    );
  }

  // Pad the first week so rows line up Sunday → Saturday like GitHub.
  const lead = new Date(`${data.days[0].date}T00:00:00Z`).getUTCDay();
  const cells: ((typeof data.days)[number] | null)[] = [
    ...Array<null>(lead).fill(null),
    ...data.days,
  ];
  const weeks = Math.ceil(cells.length / 7);

  // Label a month at the first week that contains the 1st–7th of that month.
  const labels: { col: number; text: string }[] = [];
  data.days.forEach((d, i) => {
    const day = Number(d.date.slice(8));
    if (day <= 7) {
      const col = Math.floor((i + lead) / 7);
      const text = MONTHS[Number(d.date.slice(5, 7)) - 1];
      if (!labels.some((l) => l.text === text)) labels.push({ col, text });
    }
  });

  return (
    <Reveal>
      <div className="rounded-sm border border-line p-3 sm:p-6">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="text-base font-semibold text-ink sm:text-lg">
            {data.total.toLocaleString("en-US")} contributions in {data.year}
          </p>
          <a
            href={profile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink/55 underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-ink"
          >
            @{GITHUB_USER} on GitHub <ArrowUpRight />
          </a>
        </div>

        <div
          role="img"
          aria-label={`${data.total} GitHub contributions in ${data.year}`}
        >
          <div
            className="mb-1 grid gap-[2px] text-[9px] leading-none text-ink/45 sm:gap-[3px] sm:text-[11px]"
            style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
          >
            {labels.map((l) => (
              <span
                key={l.text}
                className="overflow-visible whitespace-nowrap"
                style={{ gridColumnStart: l.col + 1 }}
              >
                {l.text}
              </span>
            ))}
          </div>

          <div
            className="grid grid-rows-7 gap-[2px] sm:gap-[3px]"
            style={{
              gridAutoFlow: "column",
              gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))`,
            }}
          >
            {cells.map((d, i) =>
              d ? (
                <span
                  key={d.date}
                  title={formatDay(d.date, d.count)}
                  className="aspect-square w-full rounded-[2px]"
                  style={{ backgroundColor: LEVEL_COLORS[d.level] }}
                />
              ) : (
                <span key={`pad-${i}`} className="aspect-square w-full" />
              ),
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end gap-1.5 text-[11px] text-ink/45">
          Less
          {LEVEL_COLORS.map((c) => (
            <span
              key={c}
              className="h-2.5 w-2.5 rounded-[2px]"
              style={{ backgroundColor: c }}
            />
          ))}
          More
        </div>
      </div>
    </Reveal>
  );
}
