import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ArrowUpRight from "./ArrowUpRight";

const ROLES = [
  {
    role: "Co-Founder",
    org: "SwiftGigs",
    period: "2025 to Present",
    description:
      "Co-founding a service marketplace startup connecting skilled gig workers with clients, handling product and engineering.",
    href: "https://swiftgigs.com.ng",
  },
  {
    role: "Technical Founding Lead",
    org: "KnightShield Wallet",
    period: "Present",
    description:
      "Current technical founding lead, building KnightShield, an installable PWA Midnight wallet live at knightshieldedwallet.tech, together with Matt Cobbert. Owning engineering across the wallet app and its open-source codebase.",
    href: "https://knightshieldedwallet.tech",
  },
  {
    role: "Co-Founder & Lead Midnight Blockchain Developer",
    org: "LucentLabs",
    period: "Jan 2025 to Present",
    description:
      "Co-founded LucentLabs and lead a team of 3 Midnight blockchain developers across multiple privacy-preserving DeFi products, including Statera, HydraStake, Midnight Launchpad, FundAGoal, and ckb-dex, owning architecture, code review, and Compact smart contract implementation.",
    href: "https://lucentlabs.tech",
  },
  {
    role: "Smart Contract Developer (Intern)",
    org: "Fluid Tokens",
    period: "Feb 2025 to Present",
    description:
      "Built on-chain lending logic for a fully shielded lending protocol (loan creation, liquidity provision, borrowing, and repayment) with testnet-driven testing that cut contract failure risk by 95%.",
    href: "https://github.com/FluidTokens/ft-midnight-lending-sc",
  },
  {
    role: "Lead Developer",
    org: "CQRE Studios",
    period: "Earlier",
    description:
      "Led backend engineering with Node.js and Express, and drove SEO strategy for client sites (including detopsyelectricalshops.com), improving search visibility and organic traffic. Containerized services with Docker for lightweight, repeatable deployment and hosting.",
    href: "https://github.com/Cqre-Digital-Academy",
  },
  {
    role: "Frontend Developer",
    org: "HNG Internship (i11)",
    period: "Jun 2024 to Aug 2024",
    certificate:
      "https://drive.google.com/file/d/1B0b2Va-PofoLic0JqLiifrs2LQc5ULPc/view?usp=sharing",
    description:
      "Finished top two frontend developer out of 24,234 applicants; helped ship Remote Bingo, a real-time multiplayer game room, using RESTful APIs, WebSockets, and modern state management.",
    href: null,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="divide-y divide-line border-t border-line">
          {ROLES.map((item, i) => (
            <Reveal key={`${item.role}-${item.org}`} delay={(i % 3) * 80}>
              <div className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-[1fr_2.2fr] sm:gap-8">
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink/60">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-ink/20 underline-offset-4 hover:decoration-ink"
                      >
                        {item.org}
                      </a>
                    ) : (
                      item.org
                    )}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-ink/40">
                    {item.period}
                  </p>
                </div>

                <div>
                  <p className="max-w-2xl text-sm leading-relaxed text-ink/65">
                    {item.description}
                  </p>
                  {"certificate" in item && item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs font-medium text-ink/60 underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-ink"
                    >
                      View certificate <ArrowUpRight />
                    </a>
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
