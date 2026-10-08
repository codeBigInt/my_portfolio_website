import type { MetadataRoute } from "next";
import { SITE_URL, url } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cv/download"],
      },
    ],
    sitemap: [url("/sitemap.xml"), url("/sitemap.txt")],
    host: SITE_URL,
  };
}
