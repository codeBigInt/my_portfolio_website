import ArrowUpRight from "./ArrowUpRight";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PACKAGES = [
  {
    name: "nite-api",
    kind: "npm package",
    description:
      "A dynamic contract API wrapper for Midnight Compact smart contracts.",
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/nite-api" },
      { label: "GitHub", href: "https://github.com/nite-framework/nite-api" },
    ],
  },
  {
    name: "@nite-framework/nite-zk-profiler",
    kind: "npm package",
    description:
      "See what a Compact circuit costs to prove, without generating proving keys.",
    links: [
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@nite-framework/nite-zk-profiler",
      },
      {
        label: "GitHub",
        href: "https://github.com/nite-framework/nite-zk-profiler",
      },
    ],
  },
  {
    name: "Nite Compact",
    kind: "VS Code extension",
    description:
      "Live compiler-backed diagnostics, completion, symbols and formatting for the Midnight Compact language.",
    links: [
      {
        label: "Open VSX",
        href: "https://open-vsx.org/extension/codebigint/nite-compact",
      },
      {
        label: "GitHub",
        href: "https://github.com/nite-framework/nite-compact-language-vsc-extension",
      },
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Published tools"
          title="Open-Source Packages"
        />

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/60 sm:text-base">
          Developer tooling I publish under the{" "}
          <span className="font-medium text-ink">nite-framework</span>{" "}
          organization to make building on Midnight faster.
        </p>

        <div className="divide-y divide-line border-t border-line">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={(i % 3) * 80}>
              <div className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-[1fr_2.2fr] sm:gap-8">
                <div className="min-w-0">
                  <span className="inline-block rounded-full border border-ink/25 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-ink/70">
                    {pkg.kind}
                  </span>
                  <h3 className="mt-2 break-words text-base font-semibold text-ink">
                    {pkg.name}
                  </h3>
                </div>
                <div className="max-w-2xl">
                  <p className="text-sm leading-relaxed text-ink/65">
                    {pkg.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                    {pkg.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-ink/60 underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-ink"
                      >
                        {link.label} <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/nite-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink/60 underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-ink"
          >
            nite-framework on GitHub <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
