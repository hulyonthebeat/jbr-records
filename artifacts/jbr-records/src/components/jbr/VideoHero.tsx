import { useEffect, useState } from "react";

const VIDEOS = [
  {
    id: "dSfkJLblCYI",
    artist: "eric benét & keri hilson",
    title: `"can't wait"`,
    start: 30,
  },
  {
    id: "Lwj2cGj1xGU",
    artist: "joe leone",
    title: `"invited"`,
    start: 30,
  },
  {
    id: "mZF--_OTZLo",
    artist: "autumn paige",
    title: `"let ya" — featuring flyana boss`,
    start: 15,
  },
];

const CLIP_SECONDS = 20;
const SLIDE_MS = CLIP_SECONDS * 1000;
const FADE_MS = 800;

function embedSrc(id: string, start: number) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    iv_load_policy: "3",
    fs: "0",
    disablekb: "1",
    showinfo: "0",
    cc_load_policy: "0",
    start: String(start),
    end: String(start + CLIP_SECONDS),
    enablejsapi: "0",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export default function VideoHero() {
  const [index, setIndex] = useState(0);
  // Per-video activation count — bumping this forces the iframe to remount
  // and start fresh whenever that video becomes active again. Initialize
  // index 0 to 1 so the first video starts fresh on initial paint.
  const [activations, setActivations] = useState<number[]>(() =>
    VIDEOS.map((_, i) => (i === 0 ? 1 : 0)),
  );

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % VIDEOS.length;
        setActivations((acts) =>
          acts.map((c, i) => (i === next ? c + 1 : c)),
        );
        return next;
      });
    }, SLIDE_MS);
    return () => window.clearInterval(t);
  }, []);

  const slide = VIDEOS[index];

  const swallow = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section className="bg-black border-b border-white/15 py-16 md:py-24">
      <div className="w-full">
        {/* Stage */}
        <div className="relative w-full aspect-video overflow-hidden bg-black select-none">
          {/* Static poster fallback (visible until iframe paints, and during reloads) */}
          {VIDEOS.map((v, i) => (
            <img
              key={`poster-${v.id}`}
              src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: i === index ? 1 : 0,
                transition: `opacity ${FADE_MS}ms ease-in-out`,
                transform: "scale(1.06)",
                transformOrigin: "center",
                pointerEvents: "none",
                userSelect: "none",
              }}
              draggable={false}
            />
          ))}

          {/* Live YouTube iframes — wrapped so we can fully disable interaction */}
          <div
            className="absolute inset-0"
            style={{
              pointerEvents: "none",
              touchAction: "none",
              userSelect: "none",
            }}
            aria-hidden="true"
          >
            {VIDEOS.map((v, i) => (
              <iframe
                key={`yt-${v.id}-${activations[i]}`}
                src={embedSrc(v.id, v.start)}
                title={`${v.artist} — ${v.title}`}
                className="absolute inset-0 w-full h-full"
                style={{
                  opacity: i === index ? 1 : 0,
                  transition: `opacity ${FADE_MS}ms ease-in-out`,
                  transform: "scale(1.4)",
                  transformOrigin: "center",
                  border: 0,
                  pointerEvents: "none",
                  touchAction: "none",
                }}
                allow="autoplay; encrypted-media"
                loading="eager"
                allowFullScreen={false}
                tabIndex={-1}
              />
            ))}
          </div>

          {/* Bulletproof click/touch blocker — sits above iframes, swallows everything */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "transparent",
              touchAction: "none",
              userSelect: "none",
              cursor: "default",
              WebkitTapHighlightColor: "transparent",
            }}
            onClick={swallow}
            onMouseDown={swallow}
            onTouchStart={swallow}
            onTouchEnd={swallow}
            onTouchMove={swallow}
            onPointerDown={swallow}
            onContextMenu={swallow}
            aria-hidden="true"
          />

          {/* Bottom caption */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none">
            <p
              key={`a-${slide.artist}`}
              className="text-xs md:text-sm font-bold tracking-[0.2em] text-stone-200 mb-2 uppercase"
              style={{ animation: "jbrFadeUp 600ms ease-out both" }}
            >
              {slide.artist}
            </p>
            <h3
              key={`t-${slide.title}`}
              className="text-2xl md:text-5xl font-black tracking-tighter text-white leading-none lowercase"
              style={{ animation: "jbrFadeUp 700ms ease-out both" }}
            >
              {slide.title}
            </h3>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes jbrFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
