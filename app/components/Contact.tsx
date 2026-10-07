import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SOCIALS = [
  {
    label: "Email",
    handle: "elliotlucky509@gmail.com",
    href: "mailto:elliotlucky509@gmail.com",
  },
  {
    label: "GitHub",
    handle: "@codeBigInt",
    href: "https://github.com/codeBigInt",
  },
  {
    label: "X / Twitter",
    handle: "@codebigint_01",
    href: "https://x.com/codebigint_01",
  },
  {
    label: "LinkedIn",
    handle: "elliot-lucky",
    href: "https://www.linkedin.com/in/elliot-lucky-9a98562a7/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Get in touch" title="Contact" />

        <Reveal>
          <h3
            className="font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-6xl"
            style={{ textShadow: "5px 5px 0 rgba(20,20,20,0.08)" }}
          >
            LET&apos;S BUILD
            <br />
            SOMETHING.
          </h3>

          <div className="mt-10 space-y-0.5 text-sm text-ink/55">
            <p>( Elliot Lucky )</p>
            <p>( Co-Founder &amp; Lead Developer @ LucentLabs )</p>
            <p>( Based in Nigeria, working remote )</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col divide-y divide-line border-y border-line sm:flex-row sm:divide-x sm:divide-y-0">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 flex-col gap-1 px-1 py-5 transition-colors hover:bg-ink/[0.03] sm:px-6"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-ink/40">
                  {social.label}
                </span>
                <span className="text-sm font-medium text-ink">
                  {social.handle}{" "}
                  <span className="text-ink/30 transition-transform group-hover:translate-x-1 inline-block">
                    ↗
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <a
            href="/cv"
            className="mt-10 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-wider text-paper transition-opacity hover:opacity-80"
          >
            View my CV
          </a>
        </Reveal>
      </div>
    </section>
  );
}
