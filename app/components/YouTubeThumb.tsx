"use client";

import Image from "next/image";
import { useState } from "react";

export default function YouTubeThumb({
  videoId,
  title,
  duration,
}: {
  videoId: string;
  title: string;
  duration?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden border border-line bg-ink/5">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden border border-line bg-ink/5 text-left"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover grayscale contrast-110 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-black/50 text-white transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-black">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-0.5 h-5 w-5"
          >
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </span>
      </div>

      {duration && (
        <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] text-white/90">
          {duration}
        </span>
      )}

      <p className="absolute bottom-2 left-2 right-16 line-clamp-2 text-xs font-medium text-white">
        {title}
      </p>
    </button>
  );
}
