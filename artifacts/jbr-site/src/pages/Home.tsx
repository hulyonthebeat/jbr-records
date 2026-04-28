import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation } from "wouter";

/** Returns "#section" on the home route, or "/#section" elsewhere, so in-page nav works from any route. */
function useHashHref() {
  const [location] = useLocation();
  const onHome = location === "/" || location === "";
  return (anchor: string) => (onHome ? `#${anchor}` : `/#${anchor}`);
}

/* ─── Carousel ──────────────────────────────────────────────────── */

interface CarouselSlide {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
}

const HERO_SLIDES: CarouselSlide[] = [
  { src: "/carousel/01-eric-benet.jpeg", alt: "Eric Benét", caption: "ERIC BENÉT", position: "center 32%" },
  { src: "/carousel/02-chante-moore.jpg", alt: "Chanté Moore", caption: "CHANTÉ MOORE", position: "center 22%" },
  { src: "/carousel/03-autumn-paige.jpg", alt: "Autumn Paige", caption: "AUTUMN PAIGE", position: "center 30%" },
  { src: "/carousel/04-joe-leone.jpg", alt: "Joe Leone on stage with guitar", caption: "JOE LEONE", position: "center 25%" },
  { src: "/carousel/05-jbr-team.jpg", alt: "JBR team in the studio", caption: "JBR CREATIVE GROUP" },
];

function Carousel({ slides, interval = 5000 }: { slides: CarouselSlide[]; interval?: number }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(
    typeof document !== "undefined" ? document.hidden : false
  );

  // Always start on the first photo when this component mounts.
  useEffect(() => {
    setIdx(0);
  }, []);

  // Pause rotation when the page (or canvas iframe) isn't visible,
  // and reset to the first photo when it becomes visible again so
  // visitors always land on slide 1.
  useEffect(() => {
    const onVisibility = () => {
      const isHidden = document.hidden;
      setHidden(isHidden);
      if (!isHidden) setIdx(0);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (paused || hidden || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, hidden, interval, slides.length]);

  const go = (next: number) => setIdx((next + slides.length) % slides.length);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="JBR Creative Group artists"
    >
      <div className="carousel-stage">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`carousel-slide${i === idx ? " is-active" : ""}`}
            aria-hidden={i !== idx}
          >
            <img
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              style={s.position ? { objectPosition: s.position } : undefined}
            />
          </div>
        ))}
        <button
          type="button"
          className="carousel-arrow prev"
          aria-label="Previous slide"
          onClick={() => go(idx - 1)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          className="carousel-arrow next"
          aria-label="Next slide"
          onClick={() => go(idx + 1)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <div className="carousel-dots" role="tablist" aria-label="Carousel pagination">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === idx}
            aria-label={`Show slide ${i + 1}: ${s.alt}`}
            className={`carousel-dot${i === idx ? " is-active" : ""}`}
            onClick={() => go(i)}
          />
        ))}
        <span className="carousel-counter">
          {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ─── Header ────────────────────────────────────────────────────── */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);
  const h = useHashHref();
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand" onClick={() => { closeMobile(); window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }} aria-label="JBR Creative Group home">
          <img className="brand-logo" src="/brand/jbr-logo.png" alt="JBR Creative Group" />
        </Link>
        <nav className="topnav">
          <Link href="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}>Home</Link>
          <Link href="/about">About</Link>
          <Link href="/roster">Roster</Link>
          <a href={h("news")}>News</a>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="top-utility">
          <NavSocials />
        </div>
        <button
          className="mobile-menu-btn"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`hamburger${mobileOpen ? " is-open" : ""}`}>
            <span /><span /><span />
          </span>
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-nav">
          <Link href="/" onClick={() => { closeMobile(); window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }}>Home</Link>
          <Link href="/about" onClick={closeMobile}>About</Link>
          <Link href="/roster" onClick={closeMobile}>Roster</Link>
          <a href={h("news")} onClick={closeMobile}>News</a>
          <Link href="/contact" onClick={closeMobile}>Contact</Link>
          <div className="mobile-socials" onClick={closeMobile}>
            <NavSocials />
          </div>
        </div>
      )}
    </header>
  );
}

const NAV_SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/jbrcreativegroup/",
    path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.22 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.27.83-.39.39-.63.76-.83 1.27-.15.39-.33.97-.38 2.04C2.67 8.5 2.66 8.85 2.66 12s.01 3.5.08 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.15.97.33 2.04.38 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.27-.83.39-.39.63-.76.83-1.27.15-.39.33-.97.38-2.04.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 0 0-.83-1.27 3.4 3.4 0 0 0-1.27-.83c-.39-.15-.97-.33-2.04-.38C15.5 4.07 15.15 4 12 4Zm0 3.04a4.96 4.96 0 1 1 0 9.92 4.96 4.96 0 0 1 0-9.92Zm0 1.8a3.16 3.16 0 1 0 0 6.32 3.16 3.16 0 0 0 0-6.32Zm5.16-2.05a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/jbrcreativegroup1/",
    path: "M13.5 21.5v-8h2.7l.4-3.1h-3.1V8.4c0-.9.25-1.5 1.55-1.5h1.65V4.13a22 22 0 0 0-2.4-.13c-2.38 0-4 1.45-4 4.1v2.3H7.6v3.1h2.7v8h3.2Z",
  },
  {
    label: "X",
    href: "https://twitter.com/jbrcreativegrp",
    path: "M18.244 3H21l-6.55 7.49L22 21h-6.05l-4.74-6.2L5.78 21H3l7.02-8.02L2.5 3h6.18l4.28 5.66L18.24 3Zm-2.12 16.2h1.68L7.97 4.7H6.18l9.94 14.5Z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@JBRcreativegroup",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77c.27-1.57.4-3.16.4-4.8a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@jbrcreativegroup",
    path: "M19.6 8.34a6.5 6.5 0 0 1-3.78-1.2 6.46 6.46 0 0 1-2.55-3.6h-3.1v11.05a2.65 2.65 0 1 1-2.65-2.65c.27 0 .53.04.78.12V8.94a5.85 5.85 0 1 0 5.07 5.8V9.83a9.5 9.5 0 0 0 5.78 1.95l.45-.01V8.34Z",
  },
];

function NavSocials() {
  return (
    <ul className="nav-socials" aria-label="JBR Creative Group on social media">
      {NAV_SOCIALS.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="nav-social"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={s.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ─── Hero (Artist Collage) ─────────────────────────────────────── */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-eyebrow">JBR CREATIVE GROUP</div>
          <h1 className="hero-title">
            PRODUCING<br />THE FUTURE<br />OF ENTERTAINMENT.
          </h1>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#releases">LATEST RELEASES</a>
            <a className="btn" href="#roster">MEET THE ROSTER</a>
          </div>
        </div>
        <Carousel slides={HERO_SLIDES} />
      </div>
    </section>
  );
}

/* ─── Releases ──────────────────────────────────────────────────── */

interface ReleaseCardProps {
  flip?: boolean;
  artist: string;
  title: string;
  blurb: string;
  cover: string;
  href: string;
}

function ReleaseCard({ flip = false, artist, title, blurb, cover, href }: ReleaseCardProps) {
  return (
    <article className={`release-poster${flip ? " flip" : ""}`}>
      <div className="release-poster-inner">
        <div className="cover-wrap">
          <div className="badge">STREAMING NOW</div>
          <img src={cover} alt={`${artist} — ${title} cover`} />
        </div>
        <div>
          <div className="release-meta">
            <span className="pill">JBR CREATIVE GROUP</span>
          </div>
          <div className="release-artist">{artist}</div>
          <h2 className="release-title">{title}</h2>
          <p className="release-blurb">{blurb}</p>
          <div className="release-ctas">
            <a className="btn btn-primary" href={href} target="_blank" rel="noopener noreferrer">
              STREAM ON ALL PLATFORMS
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Releases() {
  return (
    <section className="section" id="releases">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">RELEASES</div>
            <h3 className="section-title">CURRENT<span className="accent"> /</span> CATALOG</h3>
          </div>
        </div>
      </div>
      <div className="feature-stack">
        <ReleaseCard
          artist="JOE LEONE"
          title="JOE LEONE"
          blurb={
            "Joe Leone's debut full-length on JBR Creative Group — a multi-instrumentalist with an interestingly beautiful voice making R&B that pulls from soul, gospel, and a lifetime of training. Streaming on all platforms now."
          }
          cover="/covers/joe-leone-debut-album.jpg"
          href="https://joeleone.lnk.to/music"
        />
        <ReleaseCard
          flip
          artist="ERIC BENÉT"
          title="DUETS"
          blurb={
            "Eric Benét's long-anticipated duets project. Ten songs, ten partners — the voices Eric grew up listening to, came up alongside, and always meant to call. Streaming on all platforms now."
          }
          cover="/covers/eric-benet-duets.png"
          href="https://ericbenet.lnk.to/music"
        />
      </div>
    </section>
  );
}

/* ─── Roster ────────────────────────────────────────────────────── */

const ARTISTS = [
  {
    name: "ERIC BENÉT",
    role: "President · Recording Artist",
    photo: "/photos/eric-benet-hero.jpg",
    href: "https://ericbenet.lnk.to/music",
    external: true,
  },
  {
    name: "AUTUMN PAIGE",
    role: "Recording Artist",
    photo: "/photos/autumn-paige-jbr.jpg",
    href: "https://www.autumnpaige.com/",
    external: true,
  },
  {
    name: "JOE LEONE",
    role: "Recording Artist",
    photo: "/photos/joe-leone-jbr.jpg",
    href: "https://joeleone.lnk.to/music",
    external: true,
  },
];

export function RosterSection() {
  return (
    <section className="section" id="roster">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">PROJECTS</div>
            <h3 className="section-title">ROSTER<span className="accent"> /</span> ARTISTS</h3>
          </div>
        </div>
        <div className="grid-3">
          {ARTISTS.map((a) => {
            const inner = (
              <>
                <div className="roster-cover">
                  <img src={a.photo} alt={a.name} />
                </div>
                <div className="roster-name">{a.name}</div>
                <div className="roster-role">{a.role}</div>
                <div className="roster-cta">VIEW ARTIST &rarr;</div>
              </>
            );
            return a.external ? (
              <a
                key={a.name}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="roster-card"
              >
                {inner}
              </a>
            ) : (
              <Link key={a.name} href={a.href} className="roster-card">
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── News ──────────────────────────────────────────────────────── */

const NEWS = [
  {
    image: "/news/rated-rnb-billboard.png",
    source: "RATED R&B",
    headline: 'Joe Leone Finds Love at Last on \u201cWhere Have You Been\u201d',
    href: "https://ratedrnb.com/2025/05/joe-leone-where-have-you-been/",
  },
  {
    image: "/news/billboard-jbr-launch.png",
    source: "BILLBOARD",
    headline: "Eric Benét & Alison Ball Launch JBR Creative Group",
    href: "https://www.billboard.com/pro/eric-benet-alison-ball-jbr-creative-group/",
  },
  {
    image: "/news/rated-rnb-eric-chante.png",
    source: "RATED R&B",
    headline: 'Joe Leone Shares New Song \u201cGod\u2019s Favorite\u201d',
    href: "https://ratedrnb.com/2025/08/joe-leone-shares-new-song-gods-favorite/",
  },
];

function NewsSection() {
  return (
    <section className="section section--paper" id="news">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">PRESS</div>
            <h3 className="section-title">NEWS<span className="accent"> /</span> COVERAGE</h3>
          </div>
        </div>
        <div className="grid-3 news-grid">
          {NEWS.map((n) => (
            <a
              key={n.headline}
              className="news-card"
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="news-card-image">
                <img src={n.image} alt={n.headline} />
              </div>
              <div className="news-card-source">{n.source}</div>
              <div className="news-card-headline">{n.headline}</div>
              <div className="news-card-link">READ ARTICLE →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ───────────────────────────────────────────────────── */

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and a message.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      setError("Please enter a valid email address.");
      return;
    }

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject}\n\n` +
      `${message}\n`;
    const href =
      "mailto:info@jbrcreativegroup.com" +
      `?subject=${encodeURIComponent(`[${subject}] from ${name}`)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-intro">
          <h2 className="section-title">CONTACT US</h2>
          <div className="contact-meta">
            <div>
              <div className="contact-meta-label">EMAIL</div>
              <a href="mailto:info@jbrcreativegroup.com">info@jbrcreativegroup.com</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-row">
            <label className="contact-field">
              <span>NAME</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />
            </label>
            <label className="contact-field">
              <span>EMAIL</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label className="contact-field">
            <span>SUBJECT</span>
            <select
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option>General Inquiry</option>
              <option>Demo Submission</option>
              <option>Press / Media</option>
              <option>Booking</option>
              <option>Partnership</option>
            </select>
          </label>
          <label className="contact-field">
            <span>MESSAGE</span>
            <textarea
              name="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          {error && <div className="contact-error" role="alert">{error}</div>}
          {sent && !error && (
            <div className="contact-success" role="status">
              Your email client should have opened with your message ready to send.
              If it didn&rsquo;t, please email us directly at{" "}
              <a href="mailto:info@jbrcreativegroup.com">info@jbrcreativegroup.com</a>.
            </div>
          )}

          <button type="submit" className="btn btn-primary contact-submit">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}

/* ─── Newsletter ────────────────────────────────────────────────── */

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-inner">
        <div>
          <h2>STAY IN THE LOOP.</h2>
          <p>
            New releases, press, and behind-the-scenes from the JBR roster.
            We respect your privacy.
          </p>
        </div>
        {submitted ? (
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            THANK YOU! YOU'RE ON THE LIST.
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">SIGN UP</button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner footer-inner--simple">
        <div className="footer-mark">
          <img className="footer-logo" src="/brand/jbr-logo.png" alt="JBR Creative Group" />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} JBR CREATIVE GROUP</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}

/* ─── Home Page ─────────────────────────────────────────────────── */

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    let raf1 = 0, raf2 = 0;
    const scroll = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    };
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(scroll);
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Releases />
        <NewsSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
