import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { Header, Footer } from "./Home";
import { ARTISTS, ARTIST_ORDER } from "../data/artists";

export default function Artist() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const artist = slug ? ARTISTS[slug] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!artist) {
    return (
      <>
        <Header />
        <main className="artist-page">
          <div className="section-inner" style={{ padding: "120px 28px" }}>
            <div className="section-eyebrow">404</div>
            <h1 className="section-title">ARTIST NOT FOUND</h1>
            <p style={{ marginTop: 16 }}>
              We couldn&rsquo;t find that artist.{" "}
              <Link href="/#roster" className="link-underline">
                Back to roster
              </Link>
              .
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const otherSlugs = ARTIST_ORDER.filter((s) => s !== artist.slug);

  return (
    <>
      <Header />
      <main className="artist-page">
        {/* HERO */}
        <section className="artist-hero">
          <div className="artist-hero-inner">
            <div className="artist-hero-text">
              <Link href="/#roster" className="back-link">
                &larr; ROSTER
              </Link>
              <div className="section-eyebrow">{artist.role}</div>
              <h1 className="artist-name">{artist.name}</h1>
              <div className="artist-hometown">{artist.hometown}</div>
              <p className="artist-tagline">{artist.tagline}</p>
              <div className="artist-hero-cta">
                <a
                  className="btn btn-primary"
                  href={artist.musicHubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LISTEN NOW
                </a>
                <a className="btn" href="#releases">
                  RELEASES
                </a>
              </div>
            </div>
            <div className="artist-hero-photo">
              <img src={artist.heroPhoto} alt={artist.name} />
            </div>
          </div>
        </section>

        {/* BIO */}
        <section className="section">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <div className="section-eyebrow">BIOGRAPHY</div>
                <h2 className="section-title">
                  ABOUT<span className="accent"> /</span>{" "}
                  {artist.name.split(" ")[0]}
                </h2>
              </div>
            </div>
            <div className="artist-bio-grid">
              <div className="artist-bio-photo">
                <img src={artist.portraitPhoto} alt={artist.name} />
              </div>
              <div className="artist-bio-copy">
                {artist.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RELEASES */}
        <section className="section section--alt" id="releases">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <div className="section-eyebrow">DISCOGRAPHY</div>
                <h2 className="section-title">
                  RELEASES<span className="accent"> /</span> SINGLES
                </h2>
              </div>
              <a
                className="section-link"
                href={artist.musicHubHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {artist.musicHubLabel} &rarr;
              </a>
            </div>
            <div className="disc-grid">
              {artist.releases.map((rel) => (
                <a
                  key={rel.title}
                  className="disc-card"
                  href={rel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="disc-cover">
                    <img src={rel.cover} alt={rel.title} />
                  </div>
                  <div className="disc-meta">
                    <div className="disc-title">{rel.title}</div>
                    {(rel.year || rel.note) && (
                      <div className="disc-sub">
                        {[rel.year, rel.note].filter(Boolean).join(" \u00b7 ")}
                      </div>
                    )}
                    <div className="disc-cta">LISTEN &rarr;</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIALS */}
        <section className="section section--alt">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <div className="section-eyebrow">CONNECT</div>
                <h2 className="section-title">
                  FOLLOW<span className="accent"> /</span>{" "}
                  {artist.name.split(" ")[0]}
                </h2>
              </div>
            </div>
            <div className="socials-row">
              {artist.socials.map((s) => (
                <a
                  key={s.label}
                  className="social-chip"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label} &rarr;
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER ARTISTS */}
        <section className="section">
          <div className="section-inner">
            <div className="section-head">
              <div>
                <div className="section-eyebrow">MORE ON THE ROSTER</div>
                <h2 className="section-title">
                  OTHER<span className="accent"> /</span> ARTISTS
                </h2>
              </div>
            </div>
            <div className="grid-3">
              {otherSlugs.map((s) => {
                const a = ARTISTS[s];
                return (
                  <Link key={s} href={`/artists/${s}`} className="roster-card">
                    <div className="roster-cover">
                      <img src={a.heroPhoto} alt={a.name} />
                    </div>
                    <div className="roster-name">{a.name}</div>
                    <div className="roster-role">{a.role}</div>
                    <div className="roster-cta">VIEW ARTIST &rarr;</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
