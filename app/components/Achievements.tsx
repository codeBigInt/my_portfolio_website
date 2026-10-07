import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ACHIEVEMENTS = [
  {
    title: "Midnight Aliit Fellow — Cohort 0",
    org: "Midnight Network",
    period: "Nov 2025 — Present",
    description:
      "Selected on merit as the only Aliit Fellowship Ambassador representing Nigeria and Africa in the inaugural cohort, contributing open-source DApps, reference implementations, and educational content to the Midnight ecosystem.",
    tag: "Fellowship",
    links: [
      {
        label: "Read announcement",
        href: "https://midnight.network/blog/introducing-cohort-0-of-the-midnight-aliit-fellowship",
      },
      {
        label: "Watch midnight-simplified",
        href: "https://www.youtube.com/@midnight-simplified",
      },
    ],
  },
  {
    title: "Finance Track Winner — HydraStake",
    org: "Midnight London Summit Hackathon",
    period: "Nov 2025",
    description:
      "Won the Finance Track building HydraStake, a privacy-preserving liquid staking protocol with derivative staking tokens, as part of the LucentLabs team.",
    tag: "1st Place",
    links: [
      {
        label: "View repo",
        href: "https://github.com/statera-protocol/hydra-stake-protocol",
      },
    ],
  },
  {
    title: "Overall Winner — Statera",
    org: "Midnight Mini-DApps Hackathon",
    period: "Aug 2025",
    description:
      "1st place with a 4-member LucentLabs team building Statera, an overcollateralized DeFi stablecoin protocol with fully private user metadata.",
    tag: "1st Place",
    links: [
      {
        label: "View repo",
        href: "https://github.com/statera-protocol/statera-protocol-midnight",
      },
    ],
  },
  {
    title: "Won the African Blockchain Championship — FundAGoal",
    org: "African Blockchain Championship, Midnight Track",
    period: "Jul 2025",
    description:
      "Won 1st place in the Midnight track of the African Blockchain Championship with FundAGoal, a privacy-focused campaign funding DApp enabling 95% anonymous campaign creation and funding.",
    tag: "1st Place",
    links: [
      {
        label: "Official announcement",
        href: "https://x.com/AfBlockChamp/status/1949803415590019160",
      },
      {
        label: "FundAGoal on GitHub",
        href: "https://github.com/codeBigInt/fundagoal",
      },
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Recognition" title="Achievements" />

        <div className="divide-y divide-line border-t border-line">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-[1fr_2.2fr] sm:gap-8">
                <div>
                  <span className="inline-block rounded-full border border-ink/25 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-ink/70">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink/60">{item.org}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-ink/40">
                    {item.period}
                  </p>
                </div>

                <div className="max-w-2xl">
                  <p className="text-sm leading-relaxed text-ink/65">
                    {item.description}
                  </p>
                  {item.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-ink/60 underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-ink"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
