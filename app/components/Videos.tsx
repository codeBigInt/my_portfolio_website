import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import YouTubeThumb from "./YouTubeThumb";

const VIDEOS = [
  {
    videoId: "QCuO0--CO14",
    title: "Introduction to Compact and Midnight Blockchain",
    duration: "",
  },
  {
    videoId: "tXh0BUfb6dY",
    title:
      "Learn the Fundamentals of Compact — The Smart Contract Language for Midnight",
    duration: "",
  },
  {
    videoId: "vvVFUpE_KOQ",
    title:
      "Complete Setup Guide: Proof Server, Node.js (WSL) & VS Code for Compact",
    duration: "",
  },
  {
    videoId: "gpe48RHEaC4",
    title: "Build a Private Vault DApp on Midnight Using Compact (Updated)",
    duration: "1:05:41",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Open-source education"
          title="Teaching Midnight"
        />

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-ink/60 sm:text-base">
          As part of the Midnight Aliit Fellowship, I run{" "}
          <span className="font-medium text-ink">midnight-simplified</span> — a
          YouTube series walking developers through Compact smart contracts and
          building DApps on Midnight, from first principles to full projects.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {VIDEOS.map((video, i) => (
            <Reveal key={video.videoId} delay={(i % 2) * 100}>
              <YouTubeThumb
                videoId={video.videoId}
                title={video.title}
                duration={video.duration}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@midnight-simplified"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink/60 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
          >
            Watch more on midnight-simplified ↗
          </a>
        </div>
      </div>
    </section>
  );
}
