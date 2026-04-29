import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\//, "")}`;

const VIDEOS = [
  {
    id: "dSfkJLblCYI",
    artist: "eric benét & keri hilson",
    title: `"can't wait"`,
    poster: asset("images/jbr/hero/erics-cant-wait.jpg"),
  },
  {
    id: "Lwj2cGj1xGU",
    artist: "joe leone",
    title: `"invited"`,
    poster: asset("images/jbr/hero/joe-invited.jpg"),
  },
  {
    id: "mZF--_OTZLo",
    artist: "autumn paige",
    title: `"let ya" — featuring flyana boss`,
    poster: asset("images/jbr/hero/autumn-let-ya.jpg"),
  },
];

const SLIDE_MS = 18000;

function getOrigin() {
  return typeof window !== "undefined"
    ? window.location.origin
    : "https://jbrcreativegroup.com";
}

// Background autoplay player — muted, looped, no controls. Sends `origin` +
// `widget_referrer` so YouTube recognises this as a real website embed.
function bgEmbedUrl(id: string) {
  const origin = getOrigin();
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id,
    controls: "0",
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    showinfo: "0",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
    enablejsapi: "1",
    origin,
    widget_referrer: origin,
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

export default function VideoHero() {
  const [index, setIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % VIDEOS.length);
    }, SLIDE_MS);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowHint(window.scrollY < 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollDown = () => {
    const target = window.innerHeight * 0.9;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const slide = VIDEOS[index];

  return (
    <section className="bg-black border-b border-white/15">
      <div className="w-full">
        <div className="relative w-full aspect-video overflow-hidden bg-black select-none">
          {/* Poster fallback — visible briefly while iframe loads */}
          <img
            key={`poster-${slide.id}`}
            src={slide.poster}
            alt={`${slide.artist} — ${slide.title}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ pointerEvents: "none", userSelect: "none" }}
            draggable={false}
          />

          {/* Background autoplay player — muted, looped, no UI. Scaled 130% so
              YouTube's player chrome is cropped offscreen. */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <iframe
              key={`bg-${slide.id}`}
              src={bgEmbedUrl(slide.id)}
              title={`${slide.artist} — ${slide.title}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%]"
              style={{ border: 0 }}
            />
          </div>

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

          {/* Scroll hint */}
          {showHint && (
            <button
              type="button"
              onClick={handleScrollDown}
              aria-label="scroll down"
              className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center text-white/80 hover:text-white transition-colors pointer-events-auto"
              style={{ animation: "jbrFadeUp 1000ms ease-out both" }}
            >
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                scroll
              </span>
              <ChevronDown
                className="w-5 h-5"
                style={{ animation: "jbrScrollBounce 1800ms ease-in-out infinite" }}
              />
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes jbrFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes jbrScrollBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}
