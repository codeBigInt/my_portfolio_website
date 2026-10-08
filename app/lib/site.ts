// Single source of truth for SEO: metadata, sitemap, robots and llms.txt.
// Set NEXT_PUBLIC_SITE_URL in the hosting environment to the live domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://elliotlucky.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Elliot Lucky";
export const SITE_TITLE = "Elliot Lucky | Full-Stack & Blockchain Developer";
export const SITE_DESCRIPTION =
  "Portfolio of Elliot Lucky (codeBigInt), a full-stack and blockchain developer from Nigeria. Co-founder of LucentLabs, technical founding lead of KnightShield Wallet, and Midnight Aliit Fellow, building with Rust, TypeScript, React, Next.js and Compact on Midnight and CKB.";

export const KEYWORDS = [
  "Elliot Lucky",
  "codeBigInt",
  "Lucky Elliot",
  "full-stack developer",
  "blockchain developer",
  "Midnight Network developer",
  "Midnight blockchain",
  "Compact smart contracts",
  "Midnight Aliit Fellow",
  "CKB developer",
  "Rust developer",
  "TypeScript developer",
  "React developer",
  "Next.js developer",
  "zero-knowledge proofs",
  "privacy-preserving DeFi",
  "smart contract developer",
  "LucentLabs",
  "KnightShield Wallet",
  "Fluid Tokens",
  "SwiftGigs",
  "nite-api",
  "nite-zk-profiler",
  "Compact VS Code extension",
  "npm packages",
  "Nigeria developer",
  "African blockchain developer",
];

export const PROFILES = {
  github: "https://github.com/codeBigInt",
  x: "https://x.com/codebigint_01",
  linkedin: "https://www.linkedin.com/in/elliot-lucky-9a98562a7/",
  medium: "https://medium.com/@elliotlucky509",
  devto: "https://dev.to/codebigint_01",
  youtube: "https://www.youtube.com/@midnight-simplified",
};

// Bump when content changes meaningfully; used as sitemap lastModified.
export const LAST_UPDATED = "2026-10-08";

export const PAGES = [
  {
    path: "/",
    title: "Home",
    description:
      "Overview, experience, achievements, articles and selected work.",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/portfolio",
    title: "Portfolio",
    description:
      "Open-source contributions, merged pull requests and personal projects.",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/cv",
    title: "CV",
    description: "Curriculum vitae with experience, education and skills.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
];

export const CV_PDF_PATH = "/elliot-lucky-cv.pdf";

export const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;
