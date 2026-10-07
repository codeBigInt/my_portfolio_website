import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative border-b border-line px-6 pt-14 sm:pt-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="hero-in mb-10 flex flex-wrap items-start justify-between gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/45">
            Portfolio — 2026
          </p>
          <div className="space-y-0.5 text-right text-sm text-ink/55">
            <p>( Elliot Lucky )</p>
            <p>( elliotlucky509@gmail.com )</p>
            <p>( Based in Nigeria )</p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div
            className="hero-in flex flex-col justify-center pb-14 sm:pb-20"
            style={{ animationDelay: "120ms" }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-ink/50">
              Full-Stack &amp; Blockchain Developer
            </p>
            <h1
              className="font-display text-[14vw] leading-[0.88] tracking-tight text-ink sm:text-[5.5rem] md:text-[4.6rem] lg:text-[5.5rem]"
              style={{ textShadow: "6px 6px 0 rgba(20,20,20,0.08)" }}
            >
              ELLIOT
              <br />
              LUCKY
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60 sm:text-lg">
              I build reliable, well-crafted software across the stack —
              currently shipping on Midnight and CKB, and always quick to pick
              up whatever the problem needs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-wider text-paper transition-opacity hover:opacity-80"
              >
                View my work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink/30 px-6 py-3 text-sm font-medium uppercase tracking-wider text-ink transition-colors hover:border-ink"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <SocialLink href="https://github.com/codeBigInt" label="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink
                href="https://x.com/codebigint_01"
                label="X / Twitter"
              >
                <XIcon />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/elliot-lucky-9a98562a7/"
                label="LinkedIn"
              >
                <LinkedinIcon />
              </SocialLink>
            </div>
          </div>

          <div
            className="hero-in flex items-center justify-center md:justify-end"
            style={{ animationDelay: "280ms" }}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px]">
              <div className="absolute inset-x-0 bottom-0 aspect-square w-full rounded-full bg-ink/[0.07]" />
              <Image
                src="/avatar-cutout.png"
                alt="Elliot Lucky"
                width={768}
                height={1132}
                priority
                sizes="(max-width: 640px) 340px, 460px"
                className="relative z-10 h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink/60 transition-colors hover:border-ink hover:text-ink"
    >
      {children}
    </a>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.49 10.39.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.05.66-3.69-1.3-3.69-1.3-.5-1.26-1.21-1.6-1.21-1.6-.99-.68.07-.66.07-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.67 2.55 1.19 3.17.91.1-.71.38-1.19.69-1.46-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13a10.4 10.4 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.02.74 2.05 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.76.53 4.35-1.45 7.48-5.55 7.48-10.39C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.9 1.5h3.3l-7.2 8.2 8.5 11.3h-6.6l-5.2-6.8-5.9 6.8H2.5l7.7-8.8L1.9 1.5h6.8l4.7 6.2 5.5-6.2Zm-1.2 17.6h1.8L7.4 3.3H5.5l12.2 15.8Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
