import {
  CV_PDF_PATH,
  PAGES,
  PROFILES,
  SITE_DESCRIPTION,
  SITE_NAME,
  url,
} from "../lib/site";

// llms.txt: a concise, link-rich summary of the site for LLM crawlers.
export function GET() {
  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

Elliot Lucky (GitHub: codeBigInt) is based in Nigeria and works remotely. Current work: co-founder and lead Midnight blockchain developer at LucentLabs, technical founding lead of KnightShield Wallet (an installable PWA wallet for Midnight, built with Matt Cobbert), Midnight developer intern at Fluid Tokens, and co-founder of SwiftGigs. Midnight Aliit Fellow (Cohort 0) and winner of several Midnight hackathons.

## Pages

${PAGES.map((page) => `- [${page.title}](${url(page.path)}): ${page.description}`).join("\n")}
- [CV (PDF)](${url(CV_PDF_PATH)}): Downloadable curriculum vitae.

## Key projects

- [KnightShield Wallet](https://knightshieldedwallet.tech): Installable PWA wallet for the Midnight network. Source: https://github.com/Knight-Shield-Wallet/wallet-v2
- [Statera](https://github.com/statera-protocol/statera-protocol-midnight): Overcollateralized DeFi stablecoin protocol with confidential user metadata. Winner, Midnight Mini-DApps Hackathon.
- [HydraStake](https://github.com/statera-protocol/hydra-stake-protocol): Privacy-preserving liquid staking protocol. Finance Track winner, Midnight London Summit Hackathon.
- [FundAGoal](https://github.com/codeBigInt/fundagoal): Privacy-focused campaign funding DApp on Midnight. Winner, African Blockchain Championship.
- [SwiftGigs](https://swiftgigs.com.ng): Service marketplace connecting gig workers with clients in Nigeria.

## Published packages

- [nite-api](https://www.npmjs.com/package/nite-api): Dynamic contract API wrapper for Midnight Compact smart contracts. Source: https://github.com/nite-framework/nite-api
- [@nite-framework/nite-zk-profiler](https://www.npmjs.com/package/@nite-framework/nite-zk-profiler): See what a Compact circuit costs to prove, without generating proving keys. Source: https://github.com/nite-framework/nite-zk-profiler
- [Nite Compact VS Code extension](https://open-vsx.org/extension/codebigint/nite-compact): Live compiler-backed diagnostics, completion, symbols and formatting for Compact. Source: https://github.com/nite-framework/nite-compact-language-vsc-extension

## Writing and video

- [Medium](${PROFILES.medium})
- [DEV Community](${PROFILES.devto})
- [midnight-simplified on YouTube](${PROFILES.youtube}): Series on Compact smart contracts and building DApps on Midnight.

## Profiles

- [GitHub](${PROFILES.github})
- [X](${PROFILES.x})
- [LinkedIn](${PROFILES.linkedin})

## Optional

- [Sitemap](${url("/sitemap.xml")})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
