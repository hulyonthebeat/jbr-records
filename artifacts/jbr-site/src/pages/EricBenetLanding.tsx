import { Link } from "wouter";

interface ServiceLink {
  name: string;
  href: string;
  action?: string;
}

interface VideoCard {
  title: string;
  href: string;
  thumb?: string;
  cta?: string;
}

const SERVICES: ServiceLink[] = [
  { name: "Apple Music", href: "https://music.apple.com/us/album/1758851489" },
  { name: "Amazon Music", href: "https://music.amazon.com/albums/B0D9XC7N3T" },
  { name: "Spotify", href: "https://open.spotify.com/album/34lwRHpFW4m8x0bxfSoiBO" },
  { name: "iTunes", href: "https://music.apple.com/us/album/1758851489?app=itunes", action: "Download" },
  { name: "YouTube Music", href: "https://music.youtube.com/playlist?list=OLAK5uy_ngk8Qv3jIrjdZB9zfeWb8Fkw4Slhi2Q-Q" },
  { name: "Deezer", href: "https://www.deezer.com/album/619169601" },
  { name: "Qobuz", href: "https://open.qobuz.com/album/lsa8rlo8m605b" },
  { name: "SoundCloud", href: "https://soundcloud.com/eric-benet-official/sets/duets-795264070" },
  { name: "Tidal", href: "http://www.tidal.com/album/376808044" },
  { name: "Audiomack", href: "https://audiomack.com/album/eric-benet/duets" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/ericbenet" },
  { label: "Facebook", href: "https://www.facebook.com/ericbenetmusic" },
  { label: "X / Twitter", href: "https://twitter.com/ebenet" },
  { label: "YouTube", href: "https://www.youtube.com/c/EricBenetTV" },
  { label: "TikTok", href: "https://tiktok.com/@ericbenetofficial" },
];

const VIDEOS: VideoCard[] = [
  {
    title: 'Watch "You\'re The Only One" Live',
    href: "https://youtu.be/UL4cM9m0M1s",
    cta: "Watch on YouTube",
  },
  {
    title: "Eric Benét & Corinne Bailey Rae — Behind The Scenes",
    href: "https://youtu.be/8N0o9zXMKoc",
    cta: "Watch BTS",
  },
  {
    title: "Watch Eric Benét & Tamar Braxton Live",
    href: "https://youtu.be/glrSrc0tkp4",
    cta: "Watch Performance",
  },
  {
    title: 'Official Music Video — "Something We Can Make Love To"',
    href: "https://youtu.be/kQCCftEPl4M",
    cta: "Watch Video",
  },
  {
    title: 'Watch "Spend My Life With You" (Live)',
    href: "https://youtu.be/jSAJ8vk7Wkk",
    cta: "Watch Live",
  },
  {
    title: "Eric Benét DJ Mix — Songs to Make Love To",
    href: "https://www.mixcloud.com/JBRCreativeGroup/songs-to-make-love-to-by-eric-benét-hosted-by-dj-rere-and-dj-mk/",
    cta: "Listen on Mixcloud",
  },
];

export default function EricBenetLanding() {
  const base = import.meta.env.BASE_URL;
  return (
    <main className="lnk-page">
      <div className="lnk-shell">
        <Link href="/#roster" className="lnk-back">
          &larr; Back to Roster
        </Link>

        {/* Hero */}
        <header className="lnk-hero">
          <div className="lnk-hero-cover">
            <img
              src={`${base}covers/eric-benet-hub.jpg`}
              alt="Eric Benét"
            />
          </div>
          <h1 className="lnk-artist">Eric Benét</h1>
          <p className="lnk-subtitle">New Music & Tour Dates</p>
        </header>

        {/* Socials */}
        <nav className="lnk-socials" aria-label="Eric Benét social links">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="lnk-social"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Featured Release */}
        <section className="lnk-card">
          <div className="lnk-release">
            <div className="lnk-release-cover">
              <img
                src={`${base}covers/eric-benet-duets-440.jpg`}
                alt="Eric Benét — Duets EP"
              />
            </div>
            <div className="lnk-release-meta">
              <div className="lnk-release-eyebrow">FEATURED RELEASE</div>
              <h2 className="lnk-release-title">Eric Benét — Duets EP</h2>
              <p className="lnk-release-note">Available everywhere now</p>
            </div>
          </div>

          <ul className="lnk-services">
            {SERVICES.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lnk-service"
                >
                  <span className="lnk-service-name">{s.name}</span>
                  <span className="lnk-service-cta">
                    {s.action ?? "Play"} &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* More from Eric */}
        <section className="lnk-section">
          <div className="lnk-section-eyebrow">MORE FROM ERIC</div>
          <ul className="lnk-videos">
            {VIDEOS.map((v) => (
              <li key={v.href}>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lnk-video"
                >
                  <div className="lnk-video-title">{v.title}</div>
                  <div className="lnk-video-cta">{v.cta} &rarr;</div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Official site */}
        <section className="lnk-section">
          <a
            className="lnk-bigcta"
            href="https://ericbenet.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website & Tour Tickets &rarr;
          </a>
        </section>

        <footer className="lnk-footer">
          <div>
            Promoted by <strong>JBR Creative Group</strong>. This page may
            contain affiliate links.
          </div>
        </footer>
      </div>
    </main>
  );
}
