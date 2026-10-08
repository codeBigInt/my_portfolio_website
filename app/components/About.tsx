import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FACTS = [
  { label: "Location", value: "Nigeria" },
  {
    label: "Current role",
    value:
      "Lead Midnight Blockchain Developer, LucentLabs and Lead Midnight Intern at Fluid Tokens",
  },
  { label: "Core stack", value: "Rust, TypeScript, Compact" },
  {
    label: "Also building",
    value:
      "SwiftGigs (co-founder), KnightShield Wallet (technical founding lead)",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Who I am" title="About" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-ink/70 sm:text-lg">
            <p>
              I&apos;m a developer who likes making things that are both fast
              and correct. I co-founded and currently lead a team of Midnight
              blockchain developers at{" "}
              <span className="font-medium text-ink">LucentLabs</span>, a
              software outsourcing agency, architecting privacy-preserving DeFi
              protocols in Rust and Compact.
            </p>
            <p>
              Alongside that, I&apos;m co-founding{" "}
              <span className="font-medium text-ink">SwiftGigs</span>, a service
              marketplace startup. On the web side I cover the full stack: React
              and Next.js on the frontend, Node.js and Express on the backend,
              and I&apos;m comfortable containerizing services with Docker for
              lightweight deployment and hosting.
            </p>
            <p>
              I was selected on merit as the only{" "}
              <span className="font-medium text-ink">
                Midnight Aliit Fellow representing Nigeria and Africa
              </span>{" "}
              in Cohort 0, and I share what I learn through open-source DApps
              and a YouTube series on building with Midnight.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <dl className="space-y-5 border-t border-line pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
              {FACTS.map((fact) => (
                <div key={fact.label} className="border-b border-line pb-4">
                  <dt className="text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-base font-medium text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
