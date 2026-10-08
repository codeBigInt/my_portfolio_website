import type { MetadataRoute } from "next";
import { CV_PDF_PATH, LAST_UPDATED, PAGES, url } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LAST_UPDATED);
  return [
    ...PAGES.map((page) => ({
      url: url(page.path),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    {
      url: url(CV_PDF_PATH),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];
}
