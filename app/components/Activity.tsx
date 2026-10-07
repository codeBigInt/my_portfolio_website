import { Suspense } from "react";
import ContributionGraph from "./ContributionGraph";
import SectionHeading from "./SectionHeading";

export default function Activity() {
  return (
    <section id="activity" className="border-b border-line px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Open source" title="Contributions" />
        <Suspense
          fallback={
            <div className="h-40 animate-pulse rounded-sm bg-ink/[0.05]" />
          }
        >
          <ContributionGraph />
        </Suspense>
      </div>
    </section>
  );
}
