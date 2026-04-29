import { useEffect, useState } from "react";

const VIDEOS = [
  {
    id: "dSfkJLblCYI",
    artist: "eric benét",
    title: "duets — official video",
    watchUrl: "https://www.youtube.com/watch?v=dSfkJLblCYI",
  },
  {
    id: "Lwj2cGj1xGU",
    artist: "joe leone",
    title: "official music video",
    watchUrl: "https://www.youtube.com/watch?v=Lwj2cGj1xGU",
  },
  {
    id: "mZF--_OTZLo",
    artist: "autumn paige",
    title: "in the studio",
    watchUrl: "https://www.youtube.com/watch?v=mZF--_OTZLo&t=15s",
  },
];

const SLIDE_MS = 6000;
const FADE_MS = 800;

export default function VideoHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % VIDEOS.length);
    }, SLIDE_MS);
    return () => window.clearInterval(t);
  }, [paused]);

  const slide = VIDEOS[index];

  return (
    <section className="bg-black border-b border-white/15 px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-[120rem] mx-auto">
        {/* Header bar */}
        <div className="flex items-end justify-between mb-8 md:mb-12 gap-6 flex-wrap">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#C7332E] mb-2 uppercase">
              in motion
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none lowercase">
              watch
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {VIDEOS.map((v, i) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`view ${v.artist}`}
                className={`h-1 transition-all duration-500 ${
                  i === index
                    ? "w-12 bg-white"
                    : "w-6 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stage */}
        <a
          href={slide.watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="group relative block w-full aspect-video overflow-hidden bg-black"
        >
          {/* Crossfading thumbnails */}
          {VIDEOS.map((v, i) => (
            <img
              key={`poster-${v.id}`}
              src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
              onError={(e) => {
                const el = e.currentTarget;
                if (!el.dataset.fallback) {
                  el.dataset.fallback = "1";
                  el.src = `https://i.ytimg.com/vi/${v.id}/sddefault.jpg`;
                }
              }}
              alt={`${v.artist} — ${v.title}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: i === index ? 1 : 0,
                transition: `opacity ${FADE_MS}ms ease-in-out, transform 8000ms ease-out`,
                transform:
                  i === index ? "scale(1.06)" : "scale(1.0)",
                transformOrigin: "center",
              }}
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
            />
          ))}

          {/* Subtle dark vignette to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/40 pointer-events-none" />

          {/* Center play badge */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 text-black transition-all duration-500 group-hover:bg-[#C7332E] group-hover:text-white group-hover:scale-110 shadow-2xl"
            >
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="currentColor"
                aria-hidden="true"
                className="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Bottom caption */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 pointer-events-none">
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

          {/* Top tag */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#C7332E] text-white text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase px-2.5 py-1.5 pointer-events-none">
            now playing
          </div>

          {/* Top-right counter */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/70 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase px-2.5 py-1.5 pointer-events-none">
            {String(index + 1).padStart(2, "0")} / {String(VIDEOS.length).padStart(2, "0")}
          </div>
        </a>
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
