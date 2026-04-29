import { useEffect, useState } from "react";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    id: "dSfkJLblCYI",
    artist: "eric benét & keri hilson",
    title: `"can't wait"`,
  },
  {
    id: "Lwj2cGj1xGU",
    artist: "joe leone",
    title: `"invited"`,
  },
  {
    id: "mZF--_OTZLo",
    artist: "autumn paige",
    title: `"let ya" — featuring flyana boss`,
  },
];

const SLIDE_MS = 6500;
const FADE_MS = 900;

function poster(id: string) {
  // Highest-quality YouTube thumbnail (falls back gracefully if maxres unavailable)
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}

function watchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export default function VideoHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % VIDEOS.length);
    }, SLIDE_MS);
    return () => window.clearInterval(t);
  }, []);

  const slide = VIDEOS[index];

  return (
    <section className="bg-black border-b border-white/15">
      <div className="w-full">
        <div className="relative w-full aspect-video overflow-hidden bg-black select-none">
          {/* Ken Burns animated poster slideshow */}
          {VIDEOS.map((v, i) => (
            <img
              key={`poster-${v.id}`}
              src={poster(v.id)}
              alt={`${v.artist} — ${v.title}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: i === index ? 1 : 0,
                transition: `opacity ${FADE_MS}ms ease-in-out`,
                animation:
                  i === index ? `jbrKenBurns ${SLIDE_MS}ms ease-out both` : "none",
                transformOrigin: "center",
                pointerEvents: "none",
                userSelect: "none",
              }}
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
              onError={(e) => {
                // Fallback to hqdefault if maxresdefault unavailable
                const img = e.currentTarget;
                if (!img.dataset.fallback) {
                  img.dataset.fallback = "1";
                  img.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
                }
              }}
            />
          ))}

          {/* Bottom caption + watch link */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
            <p
              key={`a-${slide.artist}`}
              className="text-xs md:text-sm font-bold tracking-[0.2em] text-stone-200 mb-2 uppercase"
              style={{ animation: "jbrFadeUp 600ms ease-out both" }}
            >
              {slide.artist}
            </p>
            <div className="flex items-end justify-between gap-6">
              <h3
                key={`t-${slide.title}`}
                className="text-2xl md:text-5xl font-black tracking-tighter text-white leading-none lowercase"
                style={{ animation: "jbrFadeUp 700ms ease-out both" }}
              >
                {slide.title}
              </h3>
              <a
                key={`w-${slide.id}`}
                href={watchUrl(slide.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 bg-white text-black px-5 py-3 text-xs font-bold tracking-tight hover:bg-stone-200 transition-colors"
                style={{ animation: "jbrFadeUp 800ms ease-out both" }}
              >
                <Play className="w-4 h-4" fill="currentColor" />
                watch on youtube
              </a>
            </div>
            <a
              href={watchUrl(slide.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden mt-4 inline-flex items-center gap-2 bg-white text-black px-4 py-2.5 text-xs font-bold tracking-tight hover:bg-stone-200 transition-colors"
            >
              <Play className="w-3.5 h-3.5" fill="currentColor" />
              watch on youtube
            </a>
          </div>

          {/* Slide indicator dots */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex gap-2">
            {VIDEOS.map((v, i) => (
              <button
                key={`dot-${v.id}`}
                type="button"
                aria-label={`show ${v.artist}`}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all ${
                  i === index ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes jbrFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes jbrKenBurns {
          from { transform: scale(1.0); }
          to   { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
