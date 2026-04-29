import { useEffect, useState } from "react";
import { Play, ChevronDown, X } from "lucide-react";

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
const FADE_MS = 1500;

function watchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

function getOrigin() {
  return typeof window !== "undefined"
    ? window.location.origin
    : "https://jbrcreativegroup.com";
}

// Background autoplay player — muted, looped, no controls. Lives behind the
// poster fade. Sends `origin` + `widget_referrer` so YouTube recognises this
// as a real website embed.
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

// Fullscreen lightbox player — autoplay with sound, full controls.
function embedUrl(id: string) {
  const origin = getOrigin();
  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    enablejsapi: "1",
    origin,
    widget_referrer: origin,
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

export default function VideoHero() {
  const [index, setIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    if (playingId) return;
    const t = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % VIDEOS.length);
    }, SLIDE_MS);
    return () => window.clearInterval(t);
  }, [playingId]);

  useEffect(() => {
    const onScroll = () => setShowHint(window.scrollY < 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!playingId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlayingId(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [playingId]);

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

          {/* Center play button — click to launch the actual video with sound */}
          <button
            type="button"
            onClick={() => setPlayingId(slide.id)}
            aria-label={`play ${slide.artist} — ${slide.title}`}
            className="absolute inset-0 z-10 flex items-center justify-center group cursor-pointer"
          >
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            <span className="relative flex items-center justify-center h-20 w-20 md:h-28 md:w-28 bg-white/90 group-hover:bg-white text-black transition-all duration-300 group-hover:scale-105 shadow-2xl">
              <Play className="w-8 h-8 md:w-12 md:h-12 ml-1" fill="currentColor" />
            </span>
          </button>

          {/* Bottom caption + watch link */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none">
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
              <button
                key={`w-${slide.id}`}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPlayingId(slide.id);
                }}
                className="hidden md:inline-flex items-center gap-2 bg-white text-black px-5 py-3 text-xs font-bold tracking-tight hover:bg-stone-200 transition-colors pointer-events-auto"
                style={{ animation: "jbrFadeUp 800ms ease-out both" }}
              >
                <Play className="w-4 h-4" fill="currentColor" />
                play video
              </button>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPlayingId(slide.id);
              }}
              className="md:hidden mt-4 inline-flex items-center gap-2 bg-white text-black px-4 py-2.5 text-xs font-bold tracking-tight hover:bg-stone-200 transition-colors pointer-events-auto"
            >
              <Play className="w-3.5 h-3.5" fill="currentColor" />
              play video
            </button>
          </div>

          {/* Slide indicator dots */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex gap-2">
            {VIDEOS.map((v, i) => (
              <button
                key={`dot-${v.id}`}
                type="button"
                aria-label={`show ${v.artist}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
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

      {/* Lightbox: actual video plays here on click. Loading the iframe on a
          user click avoids YouTube's autoplay bot-wall and gives a cinema feel. */}
      {playingId && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          onClick={() => setPlayingId(null)}
          role="dialog"
          aria-modal="true"
          aria-label="video player"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setPlayingId(null);
            }}
            aria-label="close video"
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex items-center justify-center h-11 w-11 bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative w-full max-w-[1400px] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={embedUrl(playingId)}
              title="jbr creative group video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
            />
          </div>
          <a
            href={watchUrl(playingId)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60 hover:text-white tracking-widest uppercase font-semibold"
          >
            open on youtube
          </a>
        </div>
      )}

      <style>{`
        @keyframes jbrFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes jbrHeroSettle {
          0%   { transform: scale(1.22); filter: blur(4px); }
          55%  { filter: blur(0); }
          100% { transform: scale(1.0); filter: blur(0); }
        }
        @keyframes jbrScrollBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="jbrHeroSettle"] {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
