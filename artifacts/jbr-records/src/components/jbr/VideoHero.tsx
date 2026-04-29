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
    loop: "1",
    playlist: id,
    enablejsapi: "0",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export default function VideoHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % VIDEOS.length);
    }, SLIDE_MS);
    return () => window.clearInterval(t);
  }, []);

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
        <div className="relative w-full aspect-video overflow-hidden bg-black">
          {/* Static poster fallback (shows until iframe paints) */}
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
              }}
              draggable={false}
            />
          ))}

          {/* Live YouTube iframes — all 3 mounted, only active one visible */}
          {VIDEOS.map((v, i) => (
            <iframe
              key={`yt-${v.id}`}
              src={embedSrc(v.id, v.start)}
              title={`${v.artist} — ${v.title}`}
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: i === index ? 1 : 0,
                transition: `opacity ${FADE_MS}ms ease-in-out`,
                transform: "scale(1.35)",
                transformOrigin: "center",
                border: 0,
                pointerEvents: "none",
              }}
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="eager"
              allowFullScreen={false}
              tabIndex={-1}
            />
          ))}

          {/* Click-blocker: prevents any clicks from reaching the YT player */}
          <div
            className="absolute inset-0 z-10"
            style={{ background: "transparent" }}
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

          {/* Top tag */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 bg-[#C7332E] text-white text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase px-2.5 py-1.5 pointer-events-none">
            now playing
          </div>

          {/* Top-right counter */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-black/70 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase px-2.5 py-1.5 pointer-events-none">
            {String(index + 1).padStart(2, "0")} / {String(VIDEOS.length).padStart(2, "0")}
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
