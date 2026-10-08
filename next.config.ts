import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    // Keep a single canonical host for search engines.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "elliotlucky.vercel.app" }],
        destination: "https://elliotlucky.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  allowedDevOrigins: ['rident-nonservilely-belva.ngrok-free.dev']
};

export default nextConfig;
