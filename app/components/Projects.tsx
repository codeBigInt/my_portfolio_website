import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ArrowUpRight from "./ArrowUpRight";

const PROJECTS = [
  {
    name: "KnightShield Wallet",
    description:
      "An installable PWA wallet for Midnight, live at knightshieldedwallet.tech. I'm the current technical founding lead, building it with Matt Cobbert.",
    stack: "Midnight · PWA · Wallet",
    href: "https://knightshieldedwallet.tech",
  },
  {
    name: "SwiftGigs",
    description:
      "A service marketplace startup I'm co-founding, connecting skilled gig workers with clients across Nigeria.",
    stack: "Startup · Next.js · Marketplace",
    href: "https://swiftgigs.com.ng",
  },
  {
    name: "usetenth",
    description:
      "A hackathon-built chatbot that auto-invests spare income for freelancers, turning stray cash into consistent savings.",
    stack: "TypeScript · Hackathon · AI",
    href: "https://usetenth.vercel.app",
  },
  {
    name: "HydraStake",
    description:
      "A privacy-preserving liquid staking protocol on Midnight. Finance Track winner at the Midnight London Summit Hackathon.",
    stack: "Midnight · Compact · DeFi",
    href: "https://github.com/statera-protocol/hydra-stake-protocol",
  },
  {
    name: "Statera",
    description:
      "An overcollateralized DeFi stablecoin protocol with fully confidential user metadata, built with a 4-person LucentLabs team.",
    stack: "Midnight · Compact · Stablecoin",
    href: "https://github.com/statera-protocol/statera-protocol-midnight",
  },
  {
    name: "FundAGoal",
    description:
      "A privacy-focused campaign funding DApp on Midnight, enabling 95% anonymous campaign creation and funding. Winner, African Blockchain Championship.",
    stack: "Midnight · Compact · DeFi",
    href: "https://github.com/codeBigInt/fundagoal",
  },
  {
    name: "ckb-dex",
    description:
      "A decentralized exchange protocol built on Nervos CKB as part of my work at LucentLabs.",
    stack: "CKB · DEX · LucentLabs",
    href: "https://github.com/LucentLabss/ckb-dex",
  },
  {
    name: "Veil: Reputation Scoring",
    description:
      "A cross-chain reputation and credit scoring protocol built on Midnight and CKB for privacy-preserving DeFi.",
    stack: "TypeScript · Midnight · CKB",
    href: "https://github.com/codeBigInt/veil-credit-scoring",
  },
  {
    name: "my_redis",
    description:
      "A personal, from-scratch implementation of Redis in Rust, built to understand the internals of in-memory data stores.",
    stack: "Rust · Systems · TCP",
    href: "https://github.com/codeBigInt/my_redis",
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="A few builds" title="Selected Work" />

        <div className="divide-y divide-line border-t border-line">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 80}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 items-baseline gap-2 py-6 transition-colors sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
              >
                <span className="text-sm text-ink/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-ink">
                    {project.name}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink/60">
                    {project.description}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-ink/60">
                    {project.stack}
                  </p>
                </div>
                <span className="text-ink/30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink">
                  <ArrowUpRight />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="/portfolio"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-wider text-paper transition-opacity hover:opacity-80"
          >
            View full portfolio
          </a>
          <a
            href="https://github.com/codeBigInt?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink/60 underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-ink"
          >
            All repositories on GitHub <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
