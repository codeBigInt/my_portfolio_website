import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  { title: "Languages", items: ["Rust", "TypeScript", "JavaScript"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  {
    title: "Blockchain",
    items: ["Midnight Network", "Compact", "Smart Contracts", "ZK Proofs"],
  },
  { title: "Tooling", items: ["Git", "Docker", "Linux"] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Toolbox" title="Skills" />

        <div className="space-y-7">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="flex flex-col gap-3 border-b border-line pb-6 last:border-b-0 sm:flex-row sm:items-center sm:gap-8">
                <h3 className="w-32 shrink-0 text-sm font-medium text-ink/50">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink/25 px-4 py-1.5 text-sm text-ink/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
