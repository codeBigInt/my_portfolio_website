import { cacheLife } from "next/cache";

export const GITHUB_USER = "codeBigInt";

export type ContributionDay = { date: string; count: number; level: number };

export type ContributionData = {
  year: number;
  total: number;
  days: ContributionDay[];
};

// Reads GitHub's public contribution calendar for the current year, so the
// graph follows the profile automatically. Refreshed at most hourly.
export async function getContributions(): Promise<ContributionData | null> {
  "use cache";
  cacheLife("hours");

  const year = new Date().getUTCFullYear();
  try {
    const res = await fetch(
      `https://github.com/users/${GITHUB_USER}/contributions?from=${year}-01-01&to=${year}-12-31`,
      { headers: { "User-Agent": "portfolio-contributions" } },
    );
    if (!res.ok) return null;
    const html = await res.text();

    const counts = new Map<string, number>();
    for (const m of html.matchAll(
      /<tool-tip[^>]*\bfor="([^"]+)"[^>]*>\s*([^<]*?)\s*<\/tool-tip>/g,
    )) {
      const n = m[2].match(/^(\d+) contribution/);
      counts.set(m[1], n ? Number(n[1]) : 0);
    }

    const days: ContributionDay[] = [];
    for (const m of html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)) {
      const tag = m[0];
      const date = tag.match(/data-date="([^"]+)"/)?.[1];
      const id = tag.match(/\bid="([^"]+)"/)?.[1];
      const level = Number(tag.match(/data-level="(\d)"/)?.[1] ?? 0);
      if (!date || !id) continue;
      days.push({ date, level, count: counts.get(id) ?? 0 });
    }
    if (days.length === 0) return null;

    days.sort((a, b) => a.date.localeCompare(b.date));
    const total = days.reduce((sum, d) => sum + d.count, 0);
    return { year, total, days };
  } catch {
    return null;
  }
}
