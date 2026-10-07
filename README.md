# Elliot Lucky — Portfolio

Personal portfolio of Elliot Lucky (codeBigInt), a full-stack and blockchain developer currently building on Midnight and CKB.

Built with Next.js 16 (App Router, Cache Components), React 19, TypeScript and Tailwind CSS 4.

## Pages

| Route        | What it is                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| `/`          | Home: hero, about, experience, achievements, videos, articles, skills, selected work, contributions, contact |
| `/portfolio` | Open-source contributions and personal projects, with the GitHub contribution graph                     |
| `/cv`        | Online CV with links to open or download the PDF (`public/elliot-lucky-cv.pdf`)                          |

## Getting started

```bash
bun install      # or npm install
bun dev          # or npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `build`, `start` (serve the production build) and `lint`.

## Project structure

```
app/
  page.tsx              Home page, composed from the components below
  layout.tsx            Fonts (Inter, Archivo Black) and site metadata
  globals.css           Theme tokens, scroll-reveal and hero animations
  cv/page.tsx           CV page (also the source for the PDF)
  portfolio/page.tsx    Contributions and projects
  components/           Section components (Hero, About, Experience, ...)
  lib/
    github-contributions.ts   Fetches the GitHub contribution calendar
public/
  elliot-lucky-cv.pdf   Downloadable CV
```

## Editing content

Content lives in plain arrays at the top of each file, so updates are small edits:

- Experience: `app/components/Experience.tsx` (and `EXPERIENCE` in `app/cv/page.tsx`)
- Selected work: `app/components/Projects.tsx`
- Achievements: `app/components/Achievements.tsx`
- Articles: `app/components/Writing.tsx` (and `ARTICLES` in `app/cv/page.tsx`)
- Videos: `app/components/Videos.tsx`
- Open-source contributions and stats: `app/portfolio/page.tsx`

## Features

- **Responsive:** checked for horizontal overflow from 320px up to desktop widths.
- **Scroll animations:** sections fade up as they enter the viewport (`app/components/Reveal.tsx`). Animations are disabled for visitors who prefer reduced motion.
- **Live contribution graph:** reads GitHub's public contribution calendar for `GITHUB_USER` (set in `app/lib/github-contributions.ts`) for the current year, cached with `use cache` and refreshed hourly. If GitHub can't be reached, it falls back to a link to the profile. It shows only what is public on the profile.
- **Monochrome theme:** colours are defined as tokens in `app/globals.css`.

## Updating the CV PDF

The PDF is generated from the `/cv` page, so the two stay identical. After editing `app/cv/page.tsx`:

1. Build and start the site: `bun run build && bun run start`.
2. Print `/cv` to PDF at A4 with backgrounds on, zero margins and a scale of about 0.75 so it fits on one page. For example, with Playwright:

   ```js
   await page.goto("http://localhost:3000/cv", { waitUntil: "networkidle" });
   await page.pdf({
     path: "public/elliot-lucky-cv.pdf",
     format: "A4",
     printBackground: true,
     scale: 0.75,
     margin: { top: "0", bottom: "0", left: "0", right: "0" },
   });
   ```

3. Open the PDF and confirm it is one page.

