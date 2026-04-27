import { useEffect, useState, type FormEvent } from "react";

/* ─── Carousel ──────────────────────────────────────────────────── */

interface CarouselSlide {
  src: string;
  alt: string;
  caption?: string;
}

const HERO_SLIDES: CarouselSlide[] = [
  { src: "/carousel/01-eric-benet.jpg", alt: "Eric Benét", caption: "ERIC BENÉT" },
  { src: "/carousel/02-chante-moore.jpg", alt: "Chanté Moore", caption: "CHANTÉ MOORE" },
  { src: "/carousel/03-autumn-paige.jpg", alt: "Autumn Paige", caption: "AUTUMN PAIGE" },
  { src: "/carousel/04-joe-leone.jpg", alt: "Joe Leone on stage with guitar", caption: "JOE LEONE" },
  { src: "/carousel/05-jbr-team.png", alt: "JBR team", caption: "JBR CREATIVE GROUP" },
  { src: "/carousel/06-portrait.jpg", alt: "Studio session", caption: "IN THE STUDIO" },
];

function Carousel({ slides, interval = 5000 }: { slides: CarouselSlide[]; interval?: number }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, interval, slides.length]);

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
            <img src={s.src} alt={s.alt} loading={i === 0 ? "eager" : "lazy"} />
            {s.caption && <div className="carousel-caption">{s.caption}</div>}
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

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="#top" className="brand" onClick={closeMobile}>
          <div className="mark">
            <span className="j">J</span>
            <span className="b">B</span>
            <span className="r">R</span>
          </div>
          <div className="word">Creative Group</div>
        </a>
        <nav className="topnav">
          <a href="#about">About</a>
          <a href="#roster">Roster</a>
          <a href="#releases">Releases</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="top-utility">
          <a href="mailto:info@jbrcreativegroup.com" className="contact-btn">
            info@jbrcreativegroup.com
          </a>
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
          <a href="#about" onClick={closeMobile}>About</a>
          <a href="#roster" onClick={closeMobile}>Roster</a>
          <a href="#releases" onClick={closeMobile}>Releases</a>
          <a href="#news" onClick={closeMobile}>News</a>
          <a href="#contact" onClick={closeMobile}>Contact</a>
          <a href="mailto:info@jbrcreativegroup.com" onClick={closeMobile}>
            info@jbrcreativegroup.com
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero (Artist Collage) ─────────────────────────────────────── */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-eyebrow">JBR CREATIVE GROUP <span className="dot">●</span> LOS ANGELES</div>
          <h1 className="hero-title">
            PRODUCING<br />THE FUTURE<br />OF ENTERTAINMENT.
          </h1>
          <p className="hero-blurb">
            A multidisciplinary powerhouse pioneering change in music, film/TV,
            and tech — and championing an equal playing field for the artists
            who make the work.
          </p>
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

/* ─── About ─────────────────────────────────────────────────────── */

function About() {
  return (
    <section className="section section--paper" id="about">
      <div className="section-inner about-grid">
        <div>
          <div className="section-eyebrow">ABOUT</div>
          <h2 className="about-headline">
            Combining over three decades of industry experience to uplift
            artists through innovative technology.
          </h2>
        </div>
        <div className="about-body">
          <p>
            JBR Creative Group is the brainchild of Grammy-nominated neo-soul
            act <strong>Eric Benét</strong> and veteran entertainment executive
            {" "}<strong>Alison Ball</strong>. Together, they are pioneering
            significant change across music, film/TV, and tech — with an
            emphasis on empowering the creative community and championing an
            equal playing field.
          </p>
          <p>
            Since its inception, the agency has routinely shared knowledge and
            resources with the online community, introducing state-of-the-art
            solutions to the challenges that emerging artists and legacy acts
            face in today's industry.
          </p>
          <div className="about-leaders">
            <div className="leader">
              <div className="leader-name">ERIC BENÉT</div>
              <div className="leader-role">President</div>
            </div>
            <div className="leader">
              <div className="leader-name">ALISON BALL</div>
              <div className="leader-role">CEO</div>
            </div>
          </div>
        </div>
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
  },
  {
    name: "AUTUMN PAIGE",
    role: "Recording Artist",
    photo: "/photos/autumn-paige-jbr.jpg",
    href: "#roster",
  },
  {
    name: "JOE LEONE",
    role: "Recording Artist",
    photo: "/photos/joe-leone-jbr.jpg",
    href: "https://joeleone.lnk.to/music",
  },
];

function RosterSection() {
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
            const isExternal = a.href.startsWith("http");
            return (
              <a
                key={a.name}
                className="roster-card"
                href={a.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                <div className="roster-cover">
                  <img src={a.photo} alt={a.name} />
                </div>
                <div className="roster-name">{a.name}</div>
                <div className="roster-role">{a.role}</div>
              </a>
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

/* ─── Newsletter ────────────────────────────────────────────────── */

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="newsletter" id="contact">
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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner footer-inner--simple">
        <div className="footer-mark">
          <div className="mark">
            <span className="j">J</span>
            <span className="b">B</span>
            <span className="r">R</span>
          </div>
          <div className="word">Creative Group</div>
          <div className="footer-addr">
            Los Angeles, CA<br />
            <a href="mailto:info@jbrcreativegroup.com">
              info@jbrcreativegroup.com
            </a>
          </div>
        </div>
        <div>
          <h4>EXPLORE</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#roster">Roster</a></li>
            <li><a href="#releases">Releases</a></li>
            <li><a href="#news">News</a></li>
          </ul>
        </div>
        <div>
          <h4>ARTISTS</h4>
          <ul>
            <li>
              <a href="https://ericbenet.lnk.to/music" target="_blank" rel="noopener noreferrer">
                Eric Benét
              </a>
            </li>
            <li>
              <a href="https://joeleone.lnk.to/music" target="_blank" rel="noopener noreferrer">
                Joe Leone
              </a>
            </li>
            <li><a href="#roster">Autumn Paige</a></li>
          </ul>
        </div>
        <div>
          <h4>FOLLOW</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/jbrcreativegroup1/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="mailto:info@jbrcreativegroup.com">Email</a>
            </li>
          </ul>
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
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Releases />
        <RosterSection />
        <NewsSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
