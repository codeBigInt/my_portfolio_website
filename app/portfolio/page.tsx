import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContributionGraph from "../components/ContributionGraph";
import ArrowUpRight from "../components/ArrowUpRight";

export const metadata: Metadata = {
  title: "Portfolio and Open Source Work",
  description:
    "Open-source contributions and personal projects by Elliot Lucky: merged pull requests to Midnight, Statera, CKB and more, plus a live GitHub contribution graph.",
  keywords: [
    "Elliot Lucky portfolio",
    "open source contributions",
    "Midnight Network projects",
    "Compact smart contract projects",
    "GitHub contributions",
  ],
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    url: "/portfolio",
    title: "Portfolio and Open Source Work | Elliot Lucky",
    description:
      "Open-source contributions and personal projects by Elliot Lucky.",
  },
};

const STATS = [
  { value: "47", label: "Public repos" },
  { value: "48", label: "Merged PRs, external repos" },
  { value: "10", label: "Repos contributed to" },
  { value: "2022", label: "On GitHub since" },
];

const CONTRIBUTIONS = [
  {
    repo: "Knight-Shield-Wallet/wallet-v2",
    org: "KnightShield Wallet",
    title:
      "Technical founding lead, building the installable PWA Midnight wallet at knightshieldedwallet.tech with Matt Cobbert",
    href: "https://github.com/Knight-Shield-Wallet/wallet-v2",
    tag: "Lead",
  },
  {
    repo: "midnightntwrk/midnight-awesome-dapps",
    org: "Midnight Network (official)",
    title: "Added nite-zk-profiler to the Developer Tools directory",
    href: "https://github.com/midnightntwrk/midnight-awesome-dapps/pull/178",
    tag: "Merged",
  },
  {
    repo: "statera-protocol/statera-protocol-midnight",
    org: "Statera Protocol",
    title:
      "CI/CD pipeline, automated deployment, and liquidation monitoring bot: 16 merged PRs",
    href: "https://github.com/statera-protocol/statera-protocol-midnight/pulls?q=is%3Apr+author%3AcodeBigInt+is%3Amerged",
    tag: "16 merged",
  },
  {
    repo: "LucentLabss/ckb-dex",
    org: "LucentLabs",
    title:
      "Frontend layout, faucet drip, deserialization fixes, and deployment: 5 merged PRs",
    href: "https://github.com/LucentLabss/ckb-dex/pulls?q=is%3Apr+author%3AcodeBigInt+is%3Amerged",
    tag: "5 merged",
  },
  {
    repo: "scisamir/fiber-dev-kit",
    org: "Community",
    title:
      "TypeScript test client, example demo, and documentation: 10 merged PRs",
    href: "https://github.com/scisamir/fiber-dev-kit/pulls?q=is%3Apr+author%3AcodeBigInt+is%3Amerged",
    tag: "10 merged",
  },
  {
    repo: "statera-protocol/hydra-stake-protocol",
    org: "Statera Protocol",
    title: "User interface for liquid staking contract interaction",
    href: "https://github.com/statera-protocol/hydra-stake-protocol",
    tag: "Merged",
  },
];

const PERSONAL_PROJECTS = [
  {
    name: "nite-api",
    description:
      "Published npm package: a dynamic contract API wrapper for Midnight Compact smart contracts.",
    href: "https://github.com/nite-framework/nite-api",
  },
  {
    name: "nite-zk-profiler",
    description:
      "Published npm package (@nite-framework/nite-zk-profiler): see what a Compact circuit costs to prove, without generating proving keys.",
    href: "https://github.com/nite-framework/nite-zk-profiler",
  },
  {
    name: "nite-compact-language-vsc-extension",
    description:
      "Nite Compact, a VS Code extension published on Open VSX with live compiler-backed diagnostics, completion, symbols and formatting for Compact.",
    href: "https://github.com/nite-framework/nite-compact-language-vsc-extension",
  },
  {
    name: "fundagoal",
    description:
      "Privacy-focused campaign funding DApp on Midnight. Winner, African Blockchain Championship.",
    href: "https://github.com/codeBigInt/fundagoal",
  },
  {
    name: "veil-credit-scoring",
    description:
      "Cross-chain reputation and credit scoring protocol built on Midnight and CKB.",
    href: "https://github.com/codeBigInt/veil-credit-scoring",
  },
  {
    name: "midnight-simplified-tutorial-dapps",
    description:
      "Companion code for the midnight-simplified YouTube series teaching Compact and Midnight DApps.",
    href: "https://github.com/codeBigInt/midnight-simplified-tutorial-dapps",
  },
  {
    name: "my_redis",
    description:
      "A from-scratch implementation of Redis in Rust, built to understand in-memory data store internals.",
    href: "https://github.com/codeBigInt/my_redis",
  },
  {
    name: "token-mint",
    description:
      "A token minting application on the Midnight Network, covering deployment and issuance flows.",
    href: "https://github.com/codeBigInt/token-mint",
  },
  {
    name: "usetenth",
    description:
      "Hackathon-built chatbot that auto-invests spare income for freelancers.",
    href: "https://github.com/codeBigInt/usetenth",
  },
  {
    name: "tokio-basic",
    description:
      "Fundamentals of async Rust. Learning project on Tokio and TCP servers.",
    href: "https://github.com/codeBigInt/tokio-basic",
  },
  {
    name: "chat-pdf-ai",
    description:
      "An AI chat interface for querying and summarizing PDF documents.",
    href: "https://github.com/codeBigInt/chat-pdf-ai",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line px-6 py-4">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-ink/60 transition-colors hover:text-ink"
          >
            ← Back to portfolio
          </Link>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="/cv"
              className="rounded-full border border-ink/25 px-4 py-2 text-xs font-medium uppercase tracking-wider text-ink transition-colors hover:border-ink"
            >
              CV
            </a>
            <a
              href="https://github.com/codeBigInt"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-paper transition-opacity hover:opacity-80"
            >
              GitHub <ArrowUpRight />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink/45">
          Open source &amp; projects
        </p>
        <h1
          className="font-display text-5xl leading-[0.9] tracking-tight text-ink sm:text-7xl"
          style={{ textShadow: "5px 5px 0 rgba(20,20,20,0.08)" }}
        >
          THE WORK
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
          A closer look at what I&apos;ve shipped, contributed, and maintained
          in the open, from the official Midnight Network repo to community
          tooling and my own experiments.
        </p>

        <div className="mt-12">
          <Suspense
            fallback={
              <div className="h-40 animate-pulse rounded-sm bg-ink/[0.05]" />
            }
          >
            <ContributionGraph />
          </Suspense>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-y border-line py-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-ink sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Open-Source Contributions
          </h2>
          <div className="mt-3 h-px w-14 bg-ink/70" />

          <div className="mt-8 divide-y divide-line border-t border-line">
            {CONTRIBUTIONS.map((item) => (
              <a
                key={item.repo}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 items-baseline gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-6"
              >
                <div>
                  <p className="text-sm font-medium text-ink/50">{item.org}</p>
                  <h3 className="mt-1 text-base font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-ink">
                    {item.repo}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink/65">
                    {item.title}
                  </p>
                </div>
                <span className="inline-block w-fit rounded-full border border-ink/25 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink/70">
                  {item.tag}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Personal Projects
          </h2>
          <div className="mt-3 h-px w-14 bg-ink/70" />

          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {PERSONAL_PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-b border-line pb-6"
              >
                <h3 className="font-medium text-ink underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-ink">
                  {project.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {project.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://github.com/codeBigInt?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/60 underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-ink"
            >
              See all 47 repositories on GitHub <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
