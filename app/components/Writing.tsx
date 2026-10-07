import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ArrowUpRight from "./ArrowUpRight";

const POSTS = [
  {
    title: "Journey into Blockchain Development the Easy Way",
    platform: "Medium",
    href: "https://medium.com/@elliotlucky509/journey-into-blockchain-development-the-easy-way-84e077d2cc4f",
  },
  {
    title: "Shielded Token Contracts on Midnight: Real Errors, Real Fixes",
    platform: "DEV",
    href: "https://dev.to/codebigint_01/shielded-token-contracts-on-midnight-real-errors-real-fixes-4fc7",
  },
  {
    title: "Build a Private Vault DApp Smart Contract on Midnight with Compact",
    platform: "DEV",
    href: "https://dev.to/codebigint_01/build-a-private-vault-dapp-smart-contract-on-midnight-with-compact-53od",
  },
];

const PROFILES = [
  { label: "Medium", href: "https://medium.com/@elliotlucky509" },
  { label: "DEV Community", href: "https://dev.to/codebigint_01" },
];

export default function Writing() {
  return (
    <section id="writing" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Open-source writing" title="Articles" />

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/60 sm:text-base">
          I write publicly about what I learn building on Midnight and getting
          started in blockchain development: tutorials, real errors, and the
          fixes that worked.
        </p>

        <div className="divide-y divide-line border-t border-line">
          {POSTS.map((post, i) => (
            <Reveal key={post.href} delay={(i % 3) * 80}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-6"
              >
                <div className="min-w-0">
                  <span className="text-xs font-medium uppercase tracking-wider text-ink/40">
                    {post.platform}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-ink sm:text-lg">
                    {post.title}
                  </h3>
                </div>
                <span className="shrink-0 text-ink/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink">
                  <ArrowUpRight />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {PROFILES.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/60 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              More on {p.label} <ArrowUpRight />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
