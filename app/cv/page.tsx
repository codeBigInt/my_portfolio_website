import type { Metadata } from "next";
import Link from "next/link";
import ArrowUpRight from "../components/ArrowUpRight";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "CV of Elliot Lucky, full-stack and Midnight blockchain developer. Experience at LucentLabs, KnightShield Wallet, Fluid Tokens and SwiftGigs. View online or download the PDF.",
  keywords: [
    "Elliot Lucky CV",
    "blockchain developer resume",
    "Midnight developer CV",
    "full-stack developer resume",
  ],
  alternates: { canonical: "/cv" },
  openGraph: {
    type: "profile",
    url: "/cv",
    title: "Curriculum Vitae | Elliot Lucky",
    description:
      "Experience, education, achievements and skills of Elliot Lucky, full-stack and Midnight blockchain developer.",
  },
};

const CV_PDF = "/elliot-lucky-cv.pdf";
const CV_DOWNLOAD = "/cv/download";

const HNG_CERTIFICATE =
  "https://drive.google.com/file/d/1B0b2Va-PofoLic0JqLiifrs2LQc5ULPc/view?usp=sharing";

const ORG_LINKS: Record<string, string> = {
  "KnightShield Wallet": "https://knightshieldedwallet.tech",
  LucentLabs: "https://lucentlabs.tech",
  SwiftGigs: "https://swiftgigs.com.ng",
  "CQRE Studios": "https://github.com/Cqre-Digital-Academy",
};

const ARTICLES = [
  {
    title: "Journey into Blockchain Development the Easy Way",
    href: "https://medium.com/@elliotlucky509/journey-into-blockchain-development-the-easy-way-84e077d2cc4f",
  },
  {
    title: "Shielded Token Contracts on Midnight: Real Errors, Real Fixes",
    href: "https://dev.to/codebigint_01/shielded-token-contracts-on-midnight-real-errors-real-fixes-4fc7",
  },
  {
    title: "Build a Private Vault DApp Smart Contract on Midnight with Compact",
    href: "https://dev.to/codebigint_01/build-a-private-vault-dapp-smart-contract-on-midnight-with-compact-53od",
  },
];

const EXPERIENCE = [
  {
    role: "Co-Founder",
    org: "SwiftGigs",
    period: "2025 to Present",
    bullets: [
      "Co-founded a service marketplace startup connecting skilled gig workers with clients across Nigeria.",
    ],
  },
  {
    role: "Technical Founding Lead",
    org: "KnightShield Wallet",
    period: "Present",
    bullets: [
      "Current technical founding lead of KnightShield, an installable PWA Midnight wallet (knightshieldedwallet.tech), building it with Matt Cobbert.",
      "Open-source codebase at github.com/Knight-Shield-Wallet/wallet-v2.",
    ],
  },
  {
    role: "Co-Founder & Lead Midnight Blockchain Developer",
    org: "LucentLabs",
    period: "Jan 2025 to Present",
    bullets: [
      "Co-founded LucentLabs and lead a team of 3 Midnight blockchain developers across privacy-preserving DeFi products: Statera, HydraStake, Midnight Launchpad, FundAGoal, and ckb-dex.",
      "Own architecture decisions, code review, and Compact smart contract implementation.",
    ],
  },
  {
    role: "Smart Contract Developer (Intern)",
    org: "Fluid Tokens",
    period: "Feb 2025 to Present",
    bullets: [
      "Built on-chain lending logic for a fully shielded lending protocol: positions, liquidity, borrowing, repayment.",
      "Reduced contract failure risk by 95% through on-chain testnet testing with a CLI DApp interface.",
    ],
  },
  {
    role: "Lead Developer",
    org: "CQRE Studios",
    period: "Earlier",
    bullets: [
      "Led backend engineering with Node.js and Express; drove SEO strategy for client sites including detopsyelectricalshops.com.",
      "Containerized services with Docker for lightweight, repeatable deployment and hosting.",
    ],
  },
  {
    role: "Frontend Developer",
    org: "HNG Internship (i11)",
    period: "Jun 2024 to Aug 2024",
    certificate: HNG_CERTIFICATE,
    bullets: [
      "Finished top two frontend developer out of 24,234 applicants.",
      "Helped ship Remote Bingo, a real-time multiplayer game room, using REST APIs, WebSockets, and modern state management.",
    ],
  },
];

const ACHIEVEMENTS = [
  "Midnight Aliit Fellow, Cohort 0: only ambassador representing Nigeria and Africa (Nov 2025)",
  "Winner, Midnight London Summit Hackathon: Finance Track, HydraStake (Nov 2025)",
  "Winner, Midnight Mini-DApps Hackathon: Statera (Aug 2025)",
  "Winner, African Blockchain Championship: Midnight Track, FundAGoal (Jul 2025)",
  "Finalist, HNG Internship i11: top two of 24,234 applicants (2024)",
];

const SKILLS = [
  "Rust",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Compact",
  "Midnight Network",
  "Docker",
  "Git",
];

export default function CvPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line px-6 py-4 print:hidden">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <Link
            href="/"
            className="text-sm text-ink/60 transition-colors hover:text-ink"
          >
            ← Back to portfolio
          </Link>

          <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-3">
            <a
              href="/portfolio"
              className="whitespace-nowrap rounded-full border border-ink/25 px-2 py-2 text-center text-[11px] font-medium uppercase tracking-wide text-ink transition-colors hover:border-ink sm:px-4 sm:text-xs sm:tracking-wider"
            >
              Portfolio
            </a>
            <a
              href={CV_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full border border-ink/25 px-2 py-2 text-center text-[11px] font-medium uppercase tracking-wide text-ink transition-colors hover:border-ink sm:px-4 sm:text-xs sm:tracking-wider"
            >
              Open PDF
            </a>
            <a
              href={CV_DOWNLOAD}
              download="Elliot-Lucky-CV.pdf"
              className="whitespace-nowrap rounded-full bg-ink px-2 py-2 text-center text-[11px] font-medium uppercase tracking-wide text-paper transition-opacity hover:opacity-80 sm:px-4 sm:text-xs sm:tracking-wider"
            >
              Download<span className="hidden sm:inline"> CV</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-14">
        <div className="grid grid-cols-1 items-end gap-8 border-b border-line pb-10 sm:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
              Curriculum Vitae
            </p>
            <h1
              className="font-display text-5xl leading-[0.9] tracking-tight text-ink sm:text-7xl"
              style={{ textShadow: "5px 5px 0 rgba(20,20,20,0.08)" }}
            >
              ELLIOT
              <br />
              LUCKY
            </h1>
            <p className="mt-4 text-base font-medium uppercase tracking-[0.15em] text-ink/70">
              Software &amp; Blockchain Developer
            </p>
          </div>

          <div className="sm:text-right">
            <div className="space-y-0.5 text-sm text-ink/60">
              <p>( elliotlucky509@gmail.com )</p>
              <p>( github.com/codeBigInt )</p>
              <p>( Based in Nigeria )</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 py-10 md:grid-cols-[1.4fr_1fr]">
          <section>
            <h2 className="text-xl font-semibold text-ink">Experience</h2>
            <div className="mt-2 h-px w-10 bg-ink/70" />

            <div className="mt-6 space-y-7">
              {EXPERIENCE.map((job) => (
                <div
                  key={`${job.role}-${job.org}`}
                  className="break-inside-avoid"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-sm font-semibold text-ink">
                      {job.role}{" "}
                      <span className="font-normal text-ink/60">
                        at{" "}
                        {ORG_LINKS[job.org] ? (
                          <a
                            href={ORG_LINKS[job.org]}
                            className="underline decoration-ink/20 underline-offset-2"
                          >
                            {job.org}
                          </a>
                        ) : (
                          job.org
                        )}
                      </span>
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-ink/60">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-ink/65">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {"certificate" in job && job.certificate && (
                    <a
                      href={job.certificate}
                      className="mt-2 inline-block text-xs text-ink/60 underline decoration-ink/20 underline-offset-2"
                    >
                      View certificate <ArrowUpRight />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-ink">Education</h2>
              <div className="mt-2 h-px w-10 bg-ink/70" />
              <p className="mt-4 text-sm font-medium text-ink">
                BSc. Biological Science
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Ahmadu Bello University (ABU), Zaria
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink/60">
                Dec 2019 to Sep 2025
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Achievements</h2>
              <div className="mt-2 h-px w-10 bg-ink/70" />
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink/65">
                {ACHIEVEMENTS.map((a) => (
                  <li
                    key={a}
                    className="border-b border-line pb-2.5 last:border-b-0"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Articles</h2>
              <div className="mt-2 h-px w-10 bg-ink/70" />
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink/65">
                {ARTICLES.map((a) => (
                  <li key={a.href}>
                    <a
                      href={a.href}
                      className="underline decoration-ink/20 underline-offset-2"
                    >
                      {a.title}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-ink/60">
                medium.com/@elliotlucky509 · dev.to/codebigint_01
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Skills</h2>
              <div className="mt-2 h-px w-10 bg-ink/70" />
              <div className="mt-4 flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-ink/25 px-3 py-1 text-xs text-ink/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
