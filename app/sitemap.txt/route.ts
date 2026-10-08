import { CV_PDF_PATH, PAGES, url } from "../lib/site";

// Plain-text sitemap: one absolute URL per line.
export function GET() {
  const body =
    [...PAGES.map((page) => url(page.path)), url(CV_PDF_PATH)].join("\n") +
    "\n";

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
