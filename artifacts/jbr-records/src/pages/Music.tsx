import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import Nav from "@/components/jbr/Nav";
import Footer from "@/components/jbr/Footer";
import { ARTISTS, type Artist, type Release } from "@/data/catalog";

export default function Music() {
  const [location] = useLocation();
  const [filter, setFilter] = useState<string>("all");

  // Honor #artist-slug anchor on first load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    if (ARTISTS.some((a) => a.slug === hash)) setFilter(hash);
    requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location]);

  const visible: Artist[] = useMemo(
    () => (filter === "all" ? ARTISTS : ARTISTS.filter((a) => a.slug === filter)),
    [filter],
  );

  const totalCount = useMemo(
    () => ARTISTS.reduce((n, a) => n + a.releases.length, 0),
    [],
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden lowercase">
      <Nav showPromo={false} />

      {/* Page header */}
      <section className="px-4 md:px-8 pt-12 md:pt-16 pb-8 md:pb-10 max-w-[120rem] mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#C7332E] mb-4 uppercase">
              jbr / catalogue
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
              music
            </h1>
            <p className="mt-5 text-stone-400 font-medium text-sm md:text-base max-w-2xl">
              {totalCount} releases across {ARTISTS.length} artists. tap any
              cover to listen.
            </p>
          </div>
        </div>

        {/* Artist filter — chips */}
        <div className="mt-10 flex flex-wrap gap-2">
          <FilterChip
            active={filter === "all"}
            label={`all releases (${totalCount})`}
            onClick={() => setFilter("all")}
          />
          {ARTISTS.map((a) => (
            <FilterChip
              key={a.slug}
              active={filter === a.slug}
              label={`${a.name} (${a.releases.length})`}
              onClick={() => setFilter(a.slug)}
            />
          ))}
        </div>
      </section>

      {/* Artist sections */}
      <div className="px-4 md:px-8 max-w-[120rem] mx-auto pb-24 md:pb-32">
        {visible.map((artist) => (
          <ArtistSection key={artist.slug} artist={artist} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-xs md:text-sm font-bold tracking-tight border transition-colors ${
        active
          ? "bg-white text-black border-white"
          : "bg-transparent text-stone-300 border-white/20 hover:border-white hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function ArtistSection({ artist }: { artist: Artist }) {
  return (
    <section
      id={artist.slug}
      className="pt-16 md:pt-20 first:pt-8 md:first:pt-10 border-t border-white/10 first:border-t-0 mt-16 md:mt-20 first:mt-0"
    >
      {/* Artist header strip */}
      <div className="flex items-end justify-between gap-6 flex-wrap mb-8 md:mb-10">
        <div className="flex items-center gap-5 md:gap-6">
          <img
            src={artist.portrait}
            alt={artist.name}
            className="w-16 h-16 md:w-20 md:h-20 object-cover grayscale"
          />
          <div>
            <p className="text-[0.65rem] md:text-xs font-bold tracking-[0.2em] text-[#C7332E] uppercase mb-1.5">
              artist
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
              {artist.name}
            </h2>
            <p className="text-stone-500 text-xs md:text-sm font-bold tracking-tight mt-2">
              {artist.releases.length}{" "}
              {artist.releases.length === 1 ? "release" : "releases"}
            </p>
          </div>
        </div>
        <a
          href={artist.smartLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black text-sm font-bold tracking-tight hover:bg-stone-200 transition-colors"
        >
          all platforms →
        </a>
      </div>

      {/* Release grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {artist.releases.map((r, i) => (
          <ReleaseCard key={r.title + i} release={r} />
        ))}
      </div>
    </section>
  );
}

function ReleaseCard({ release }: { release: Release }) {
  return (
    <motion.a
      href={release.listen}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group block bg-stone-950 border border-white/10 hover:border-white/30 transition-colors"
    >
      <div className="relative aspect-square overflow-hidden bg-stone-900">
        <img
          src={release.image}
          alt={release.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#C7332E] text-white text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1.5">
          {release.tag}
        </div>
        {/* Hover overlay with listen CTA */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white text-black text-xs font-bold tracking-[0.18em] uppercase px-4 py-2.5">
            listen →
          </span>
        </div>
      </div>
      <div className="px-4 py-4 flex items-start justify-between gap-3 border-t border-white/10">
        <div className="min-w-0">
          <h3 className="text-sm md:text-base font-bold tracking-tight leading-snug truncate">
            {release.title}
          </h3>
          {release.year && (
            <p className="text-[0.65rem] md:text-xs font-bold tracking-[0.18em] text-stone-500 uppercase mt-1.5">
              {release.year}
            </p>
          )}
        </div>
        <span className="text-xs md:text-sm font-bold text-stone-500 group-hover:text-white shrink-0 transition-colors">
          →
        </span>
      </div>
    </motion.a>
  );
}
