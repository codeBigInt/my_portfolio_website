import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow?: string;
}) {
  return (
    <Reveal className="mb-10">
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/45">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-14 bg-ink/70" />
    </Reveal>
  );
}
