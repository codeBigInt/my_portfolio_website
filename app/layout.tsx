import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import {
  KEYWORDS,
  PROFILES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "./lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: `${SITE_NAME} Portfolio`,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${SITE_NAME} Portfolio`,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@codebigint_01",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${SITE_NAME} Portfolio`,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      alternateName: ["codeBigInt", "Lucky Elliot"],
      url: SITE_URL,
      image: `${SITE_URL}/avatar.jpg`,
      jobTitle: "Full-Stack & Blockchain Developer",
      description: SITE_DESCRIPTION,
      address: { "@type": "PostalAddress", addressCountry: "NG" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Ahmadu Bello University",
      },
      worksFor: [
        {
          "@type": "Organization",
          name: "LucentLabs",
          url: "https://lucentlabs.tech",
        },
        {
          "@type": "Organization",
          name: "KnightShield Wallet",
          url: "https://knightshieldedwallet.tech",
        },
        { "@type": "Organization", name: "Fluid Tokens" },
      ],
      knowsAbout: [
        "Midnight Network",
        "Compact smart contracts",
        "Zero-knowledge proofs",
        "Rust",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Blockchain development",
      ],
      sameAs: Object.values(PROFILES),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
