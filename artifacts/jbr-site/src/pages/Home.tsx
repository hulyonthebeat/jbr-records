import { useState, type FormEvent } from "react";

/* ─── SVG Album Covers ─────────────────────────────────────────── */

function CoverAutumnPaige() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#2475B7" />
      <text x="150" y="135" fontFamily="Bebas Neue, sans-serif" fontSize="60" letterSpacing="-1" fill="#f4f1ea" textAnchor="middle">AUTUMN</text>
      <text x="150" y="190" fontFamily="Bebas Neue, sans-serif" fontSize="60" letterSpacing="-1" fill="#f4f1ea" textAnchor="middle">PAIGE</text>
      <text x="150" y="220" fontFamily="DM Mono, monospace" fontSize="10" letterSpacing="6" fill="#f4f1ea" textAnchor="middle">— S/T —</text>
    </svg>
  );
}

function CoverAutumnPaigeLarge() {
  return (
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Autumn Paige — self-titled debut cover">
      <rect width="600" height="600" fill="#2475B7" />
      <g fill="#f4f1ea">
        <rect x="40" y="40" width="520" height="2" />
        <rect x="40" y="558" width="520" height="2" />
        <rect x="40" y="40" width="2" height="520" />
        <rect x="558" y="40" width="2" height="520" />
      </g>
      <text x="300" y="220" fontFamily="Bebas Neue, sans-serif" fontSize="120" letterSpacing="-2" fill="#f4f1ea" textAnchor="middle">AUTUMN</text>
      <text x="300" y="340" fontFamily="Bebas Neue, sans-serif" fontSize="120" letterSpacing="-2" fill="#f4f1ea" textAnchor="middle">PAIGE</text>
      <text x="300" y="400" fontFamily="DM Mono, monospace" fontSize="14" letterSpacing="14" fill="#f4f1ea" textAnchor="middle">— S/T —</text>
      <line x1="60" y1="500" x2="540" y2="500" stroke="#f4f1ea" strokeWidth="0.5" />
      <text x="60" y="525" fontFamily="DM Mono, monospace" fontSize="11" letterSpacing="3" fill="#f4f1ea" opacity="0.85">JBR-039</text>
      <text x="540" y="525" fontFamily="DM Mono, monospace" fontSize="11" letterSpacing="3" fill="#f4f1ea" opacity="0.85" textAnchor="end">SUMMER 2026</text>
    </svg>
  );
}

function CoverSunsetSessions() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#e9d8a6" />
      <rect x="40" y="40" width="220" height="220" fill="none" stroke="#0f0f0f" strokeWidth="2" />
      <text x="150" y="155" fontFamily="Bebas Neue, sans-serif" fontSize="24" letterSpacing="3" fill="#0f0f0f" textAnchor="middle">SUNSET</text>
      <text x="150" y="180" fontFamily="Bebas Neue, sans-serif" fontSize="24" letterSpacing="3" fill="#0f0f0f" textAnchor="middle">SESSIONS</text>
      <text x="150" y="210" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="4" fill="#0f0f0f" textAnchor="middle">VOL. II</text>
      <text x="150" y="248" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="2" fill="#888" textAnchor="middle">JBR-035</text>
    </svg>
  );
}

function CoverBsides() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#1a1a1a" />
      <text x="150" y="120" fontFamily="Bebas Neue, sans-serif" fontSize="26" letterSpacing="4" fill="#f4f1ea" textAnchor="middle">ERIC BENÉT</text>
      <text x="150" y="165" fontFamily="Bebas Neue, sans-serif" fontSize="40" letterSpacing="1" fill="#a13238" textAnchor="middle">B-SIDES</text>
      <text x="150" y="198" fontFamily="Bebas Neue, sans-serif" fontSize="22" letterSpacing="3" fill="#f4f1ea" textAnchor="middle">&amp; RARITIES</text>
      <text x="150" y="240" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="3" fill="#666" textAnchor="middle">2xLP · JBR-029</text>
    </svg>
  );
}

function CoverWindows() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#c8d8e8" />
      <text x="150" y="110" fontFamily="DM Mono, monospace" fontSize="11" letterSpacing="5" fill="#0f0f0f" textAnchor="middle">AUTUMN PAIGE</text>
      <text x="150" y="175" fontFamily="Bebas Neue, sans-serif" fontSize="72" letterSpacing="-1" fill="#0f0f0f" textAnchor="middle">WIN-</text>
      <text x="150" y="232" fontFamily="Bebas Neue, sans-serif" fontSize="72" letterSpacing="-1" fill="#0f0f0f" textAnchor="middle">DOWS</text>
      <text x="150" y="268" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="4" fill="#555" textAnchor="middle">7" SINGLE</text>
    </svg>
  );
}

function CoverLiveTroubadour() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#0f0f0f" />
      <text x="150" y="90" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="3" fill="#888" textAnchor="middle">JOE LEONE QUARTET</text>
      <text x="150" y="145" fontFamily="Bebas Neue, sans-serif" fontSize="28" letterSpacing="2" fill="#f4f1ea" textAnchor="middle">LIVE AT THE</text>
      <text x="150" y="185" fontFamily="Bebas Neue, sans-serif" fontSize="28" letterSpacing="2" fill="#f4f1ea" textAnchor="middle">TROUBADOUR</text>
      <text x="150" y="225" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="3" fill="#a13238" textAnchor="middle">DIRECT-TO-2-TRACK · 2xLP</text>
      <text x="150" y="260" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="3" fill="#555" textAnchor="middle">VALENTINE'S DAY 2026</text>
    </svg>
  );
}

function CoverDubSeries() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#dcd0b4" />
      <text x="150" y="100" fontFamily="DM Mono, monospace" fontSize="10" letterSpacing="3" fill="#0f0f0f" textAnchor="middle">VARIOUS ARTISTS</text>
      <text x="150" y="170" fontFamily="Bebas Neue, sans-serif" fontSize="56" fill="#0f0f0f" textAnchor="middle">04</text>
      <text x="150" y="220" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="4" fill="#0f0f0f" textAnchor="middle">JBR DUB SERIES · 04</text>
    </svg>
  );
}

function CoverALittleLonger() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#f4f1ea" />
      <text x="150" y="110" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="4" fill="#888" textAnchor="middle">CHANTÉ MOORE</text>
      <text x="150" y="170" fontFamily="Bebas Neue, sans-serif" fontSize="34" letterSpacing="1" fill="#0f0f0f" textAnchor="middle">A LITTLE</text>
      <text x="150" y="210" fontFamily="Bebas Neue, sans-serif" fontSize="34" letterSpacing="1" fill="#0f0f0f" textAnchor="middle">LONGER</text>
      <text x="150" y="255" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="3" fill="#a13238" textAnchor="middle">VINYL · JBR-018</text>
    </svg>
  );
}

function CoverHiddenTrack() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#1a1a1a" />
      <text x="150" y="100" fontFamily="Bebas Neue, sans-serif" fontSize="18" letterSpacing="6" fill="#f4f1ea" textAnchor="middle">ERIC BENÉT</text>
      <text x="150" y="165" fontFamily="Bebas Neue, sans-serif" fontSize="42" letterSpacing="2" fill="#a13238" textAnchor="middle">HIDDEN</text>
      <text x="150" y="208" fontFamily="Bebas Neue, sans-serif" fontSize="42" letterSpacing="2" fill="#a13238" textAnchor="middle">TRACK</text>
      <text x="150" y="255" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="3" fill="#555" textAnchor="middle">VINYL REISSUE</text>
    </svg>
  );
}

function CoverDemosOuttakes() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#ebe7dd" />
      <text x="30" y="60" fontFamily="DM Mono, monospace" fontSize="10" letterSpacing="2" fill="#888">JOE LEONE</text>
      <text x="30" y="140" fontFamily="Bebas Neue, sans-serif" fontSize="48" letterSpacing="-1" fill="#0f0f0f">DEMOS</text>
      <text x="30" y="185" fontFamily="Bebas Neue, sans-serif" fontSize="48" letterSpacing="-1" fill="#0f0f0f">&amp; OUT-</text>
      <text x="30" y="230" fontFamily="Bebas Neue, sans-serif" fontSize="48" letterSpacing="-1" fill="#0f0f0f">TAKES</text>
      <text x="30" y="268" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="2" fill="#a13238">LP · JBR-022</text>
    </svg>
  );
}

function CoverYearOne() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#0f0f0f" />
      <g fill="#f4f1ea">
        <rect x="40" y="60" width="220" height="3" />
        <rect x="40" y="240" width="220" height="3" />
      </g>
      <text x="150" y="160" fontFamily="Bebas Neue, sans-serif" fontSize="52" fill="#f4f1ea" textAnchor="middle">YEAR ONE</text>
      <text x="150" y="192" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="3" fill="#888" textAnchor="middle">JBR LABEL SAMPLER</text>
      <text x="150" y="222" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="3" fill="#555" textAnchor="middle">JBR FOUNDING RELEASE · 2024</text>
    </svg>
  );
}

function CoverQuietStorm() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#2475B7" />
      <text x="150" y="110" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="4" fill="#f4f1ea" textAnchor="middle">CHANTÉ MOORE</text>
      <text x="150" y="168" fontFamily="Bebas Neue, sans-serif" fontSize="44" letterSpacing="-1" fill="#f4f1ea" textAnchor="middle">QUIET</text>
      <text x="150" y="210" fontFamily="Bebas Neue, sans-serif" fontSize="44" letterSpacing="-1" fill="#f4f1ea" textAnchor="middle">STORM EP</text>
      <text x="150" y="256" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="3" fill="#f4f1ea" textAnchor="middle">12" · JBR DUB SERIES · 04</text>
    </svg>
  );
}

function CoverVariousArtists001() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#f4f1ea" />
      <path d="M90 80 L120 60 L180 60 L210 80 L210 220 L180 240 L120 240 L90 220 Z" fill="none" stroke="#0f0f0f" strokeWidth="2" />
      <text x="150" y="145" fontFamily="Bebas Neue, sans-serif" fontSize="72" fill="#0f0f0f" textAnchor="middle">001</text>
      <text x="150" y="185" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="3" fill="#f4f1ea" textAnchor="middle">JBR</text>
      <text x="150" y="185" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="3" fill="#a13238" textAnchor="middle">JBR</text>
      <text x="150" y="200" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="3" fill="#888" textAnchor="middle">CREATIVE GROUP</text>
    </svg>
  );
}

function CoverLogoTee() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#0f0f0f" />
      <text x="150" y="140" fontFamily="Bebas Neue, sans-serif" fontSize="64" letterSpacing="4" fill="#f4f1ea" textAnchor="middle">JBR</text>
      <text x="150" y="170" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="6" fill="#f4f1ea" textAnchor="middle">CREATIVE GROUP</text>
      <text x="150" y="215" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="3" fill="#555" textAnchor="middle">CLASSIC LOGO TEE</text>
      <text x="150" y="248" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="3" fill="#a13238" textAnchor="middle">JBR · TOTE</text>
    </svg>
  );
}

function CoverRiverWideTestPress() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#1a1a1a" />
      <circle cx="150" cy="150" r="100" fill="none" stroke="#333" strokeWidth="1" />
      <circle cx="150" cy="150" r="60" fill="none" stroke="#444" strokeWidth="1" />
      <circle cx="150" cy="150" r="20" fill="#555" />
      <circle cx="150" cy="150" r="6" fill="#0f0f0f" />
      <text x="150" y="272" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="3" fill="#f4f1ea" textAnchor="middle">RIVER WIDE · TEST PRESS</text>
      <text x="150" y="288" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="2" fill="#888" textAnchor="middle">JOE LEONE · NUMBERED /50</text>
    </svg>
  );
}

function CoverTote() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#ebe7dd" />
      <rect x="110" y="60" width="80" height="8" rx="4" fill="#0f0f0f" />
      <path d="M110 68 Q90 80 80 130 L80 250 Q80 260 90 260 L210 260 Q220 260 220 250 L220 130 Q210 80 190 68 Z" fill="none" stroke="#0f0f0f" strokeWidth="2" />
      <text x="150" y="170" fontFamily="Bebas Neue, sans-serif" fontSize="36" letterSpacing="3" fill="#0f0f0f" textAnchor="middle">JBR</text>
      <text x="150" y="195" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="6" fill="#888" textAnchor="middle">CANVAS TOTE</text>
    </svg>
  );
}

function CoverSlowPoster() {
  return (
    <svg viewBox="0 0 300 300">
      <rect width="300" height="300" fill="#0f0f0f" />
      <text x="150" y="100" fontFamily="Bebas Neue, sans-serif" fontSize="72" letterSpacing="-2" fill="#f4f1ea" textAnchor="middle">SLOW</text>
      <text x="150" y="155" fontFamily="Bebas Neue, sans-serif" fontSize="28" letterSpacing="8" fill="#a13238" textAnchor="middle">RECORDS</text>
      <line x1="50" y1="175" x2="250" y2="175" stroke="#333" strokeWidth="1" />
      <text x="150" y="220" fontFamily="DM Mono, monospace" fontSize="10" letterSpacing="4" fill="#666" textAnchor="middle">POSTER</text>
      <text x="150" y="250" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="3" fill="#555" textAnchor="middle">18×24 · JBR</text>
    </svg>
  );
}

/* ─── Ticker ────────────────────────────────────────────────────── */

function TickerContent({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <span aria-hidden={ariaHidden || undefined}>
      JOE LEONE — RIVER WIDE EP OUT NOW&nbsp;&nbsp;<span className="dot">●</span>&nbsp;&nbsp;ERIC BENÉT &amp; CHANTÉ MOORE — DUETS LP SHIPPING&nbsp;&nbsp;<span className="dot">●</span>&nbsp;&nbsp;AUTUMN PAIGE — DEBUT PRE-ORDER LIVE&nbsp;&nbsp;<span className="dot">●</span>&nbsp;&nbsp;FREE U.S. SHIPPING ON ORDERS OVER $50&nbsp;&nbsp;<span className="dot">●</span>&nbsp;&nbsp;
    </span>
  );
}

function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        <TickerContent />
        <TickerContent ariaHidden />
      </div>
    </div>
  );
}

/* ─── Header ────────────────────────────────────────────────────── */

function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="#" className="brand">
          <div className="mark">
            <span className="j">J</span>
            <span className="b">B</span>
            <span className="r">R</span>
          </div>
          <div className="word">Creative Group</div>
        </a>
        <nav className="topnav">
          <a href="#store">Store</a>
          <a href="#artists">Artists</a>
          <a href="#news">News</a>
          <a href="#tours">Tours</a>
        </nav>
        <div className="top-utility">
          <a href="#">Search</a>
          <a href="#">Account</a>
          <a href="#" className="cart-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            Cart (0)
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─── Release Poster ────────────────────────────────────────────── */

interface ReleasePosterProps {
  flip?: boolean;
  badgeLabel: string;
  badgeKind?: "default" | "preorder";
  pill: string;
  metaDate: string;
  artist: string;
  title: React.ReactNode;
  blurb: React.ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  cover: React.ReactNode;
}

function ReleasePoster({ flip = false, badgeLabel, badgeKind = "default", pill, metaDate, artist, title, blurb, primaryCta, secondaryCta, cover }: ReleasePosterProps) {
  return (
    <article className={`release-poster${flip ? " flip" : ""}`}>
      <div className="release-poster-inner">
        <div className="cover-wrap">
          <div className={`badge${badgeKind === "preorder" ? " preorder" : ""}`}>{badgeLabel}</div>
          {cover}
        </div>
        <div>
          <div className="release-meta">
            <span className="pill">{pill}</span> {metaDate}
          </div>
          <div className="release-artist">{artist}</div>
          <h2 className="release-title">{title}</h2>
          <p className="release-blurb">{blurb}</p>
          <div className="release-ctas">
            <a className="btn btn-primary" href={primaryCta.href}>{primaryCta.label}</a>
            <a className="btn" href={secondaryCta.href}>{secondaryCta.label}</a>
          </div>
        </div>
      </div>
    </article>
  );
}

function FeatureStack() {
  return (
    <section className="feature-stack">
      <ReleasePoster
        badgeLabel="NEW · 2026"
        pill='DOUBLE A-SIDE · 7"'
        metaDate="APRIL 26, 2026"
        artist="JOE LEONE"
        title={<>OVER UNDER<br />/ SAVE FACE</>}
        blurb={'Two songs, one 7\u2033. Joe\u2019s first release of 2026 pairs a slow-burn ballad with a wide-eyed pop song \u2014 both cut at Sunset Sound and mixed to tape.'}
        primaryCta={{ label: 'LISTEN NOW', href: "https://joeleone.lnk.to/overunder-saveface" }}
        secondaryCta={{ label: 'WATCH "OVER UNDER"', href: "https://youtu.be/pcS4FCyoD20" }}
        cover={<img src="/covers/joe-leone-over-under.png" alt="Joe Leone — Over Under / Save Face cover" />}
      />
      <ReleasePoster
        flip
        badgeLabel="NEW"
        pill="VINYL · CD · DSP"
        metaDate="SHIPPING NOW"
        artist="ERIC BENÉT"
        title="DUETS"
        blurb="A grown record. Eric Benét's long-awaited duets album — ten songs cut with the voices he's wanted to sing with for years, recorded in Burbank in the spring of 2024 and pressed to vinyl this spring."
        primaryCta={{ label: "LISTEN NOW", href: "https://ericbenet.lnk.to/duets" }}
        secondaryCta={{ label: "SPOTIFY", href: "https://open.spotify.com/album/34lwRHpFW4m8x0bxfSoiBO" }}
        cover={<img src="/covers/eric-benet-duets.png" alt="Eric Benét — Duets cover" />}
      />
      <ReleasePoster
        badgeLabel="PRE-ORDER"
        badgeKind="preorder"
        pill="DEBUT LP"
        metaDate="JULY 11, 2026"
        artist="AUTUMN PAIGE"
        title="AUTUMN PAIGE"
        blurb="A self-titled debut three years in the making. Eleven songs that pull from indie folk, late-night R&B, and the diary entries of a 23-year-old learning to write the truth."
        primaryCta={{ label: "PRE-ORDER VINYL", href: "#" }}
        secondaryCta={{ label: 'WATCH "WINDOWS"', href: "#" }}
        cover={<CoverAutumnPaigeLarge />}
      />
    </section>
  );
}

/* ─── Tile ──────────────────────────────────────────────────────── */

interface TileProps {
  href?: string;
  tag?: { kind: string; label: string };
  cover: React.ReactNode;
  title: string;
  artist: string;
  format: string;
  price: string;
  coverClassName?: string;
}

function Tile({ href = "#", tag, cover, title, artist, format, price, coverClassName = "" }: TileProps) {
  return (
    <a className="tile" href={href}>
      <div className={`tile-cover${coverClassName ? ` ${coverClassName}` : ""}`}>
        {tag && <span className={`tile-tag ${tag.kind}`}>{tag.label}</span>}
        {cover}
      </div>
      <div className="tile-title">{title}</div>
      <div className="tile-artist">{artist}</div>
      <div className="tile-format">{format} <span className="price">— {price}</span></div>
    </a>
  );
}

/* ─── New Releases Section ──────────────────────────────────────── */

function NewReleasesSection() {
  return (
    <section className="section" id="store">
      <div className="section-inner">
        <div className="section-head">
          <h3 className="section-title">NEW RELEASES<span className="accent"> /</span> 2026</h3>
          <a className="section-link" href="#">View all releases →</a>
        </div>
        <div className="grid-5">
          <Tile
            href="https://joeleone.lnk.to/overunder-saveface"
            tag={{ kind: "new", label: "NEW" }}
            cover={<img src="/covers/joe-leone-over-under.png" alt="Joe Leone — Over Under / Save Face" />}
            title="OVER UNDER / SAVE FACE"
            artist="Joe Leone"
            format='7" Single'
            price="$14"
          />
          <Tile
            tag={{ kind: "preorder", label: "PRE-ORDER" }}
            cover={<CoverAutumnPaige />}
            title="AUTUMN PAIGE"
            artist="Autumn Paige"
            format="Vinyl (Black)"
            price="$26"
          />
          <Tile
            href="https://ericbenet.lnk.to/duets"
            tag={{ kind: "new", label: "NEW" }}
            cover={<img src="/covers/eric-benet-duets.png" alt="Eric Benét — Duets" />}
            title="DUETS EP"
            artist="Eric Benét"
            format="DSP · August 23"
            price="$28"
          />
          <Tile
            href="https://joeleone.lnk.to/thegift"
            tag={{ kind: "new", label: "NEW" }}
            cover={<img src="/covers/joe-leone-the-gift.jpg" alt="Joe Leone — The Gift" />}
            title="THE GIFT (w/ ASTYN TURR)"
            artist="Joe Leone"
            format="Single"
            price="$12"
          />
          <Tile
            href="https://joeleone.lnk.to/invited"
            cover={<img src="/covers/joe-leone-invited.jpg" alt="Joe Leone — Invited" />}
            title="INVITED"
            artist="Joe Leone"
            format="Single"
            price="$12"
          />
          <Tile
            href="https://joeleone.lnk.to/gods-favorite"
            cover={<img src="/covers/joe-leone-gods-favorite.jpg" alt="Joe Leone — God's Favorite" />}
            title="GOD'S FAVORITE"
            artist="Joe Leone"
            format="Single"
            price="$12"
          />
          <Tile
            href="https://joeleone.lnk.to/wherehaveyoubeen"
            cover={<img src="/covers/joe-leone-where-have-you-been.jpg" alt="Joe Leone — Where Have You Been" />}
            title="WHERE HAVE YOU BEEN"
            artist="Joe Leone"
            format="Single"
            price="$12"
          />
          <Tile
            cover={<CoverLiveTroubadour />}
            title="LIVE AT THE TROUBADOUR"
            artist="Joe Leone Quartet"
            format="2xLP"
            price="$34"
          />
          <Tile
            href="https://joeleone.lnk.to/discipline"
            cover={<img src="/covers/joe-leone-discipline.jpg" alt="Joe Leone — Discipline" />}
            title="DISCIPLINE"
            artist="Joe Leone"
            format="Single"
            price="$12"
          />
          <Tile
            cover={<CoverALittleLonger />}
            title="A LITTLE LONGER"
            artist="Chanté Moore"
            format="Vinyl"
            price="$28"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Release ──────────────────────────────────────────── */

function FeaturedRelease() {
  return (
    <section className="featured">
      <div className="featured-inner">
        <div className="cover-wrap">
          <img src="/covers/eric-benet-duets.png" alt="Eric Benét — Duets cover" />
        </div>
        <div>
          <div className="featured-eyebrow">FEATURED RELEASE · IN-DEPTH</div>
          <h2 className="featured-title">DUETS</h2>
          <div className="featured-artist">ERIC BENÉT</div>
          <div className="featured-body">
            <p>
              <em>Duets</em> began as a list. Eric wrote down the names of every singer he'd ever wanted to share a microphone with — the ones he grew up listening to, the ones he came up alongside, the ones he'd always meant to call. Then he started calling.
            </p>
            <p>
              Ten songs, ten partners, recorded over four weeks in Burbank with a live rhythm section in the room. Cut to tape, mixed analog, mastered at Bernie Grundman. The voices you hear are the voices that showed up.
            </p>
          </div>
          <div className="featured-ctas">
            <a className="btn-light btn-light-primary" href="https://ericbenet.lnk.to/duets">LISTEN NOW</a>
            <a className="btn-light" href="https://open.spotify.com/album/34lwRHpFW4m8x0bxfSoiBO">SPOTIFY</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Deep Cuts Catalog ─────────────────────────────────────────── */

function DeepCutsSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-head">
          <h3 className="section-title">DEEP CUTS<span className="accent"> /</span> CATALOG</h3>
          <a className="section-link" href="#">Shop all vinyl →</a>
        </div>
        <div className="grid-5">
          <Tile cover={<CoverHiddenTrack />} title="HIDDEN TRACK" artist="Eric Benét" format="Vinyl Reissue" price="$32" />
          <Tile cover={<CoverDemosOuttakes />} title="DEMOS & OUTTAKES" artist="Joe Leone" format="LP" price="$26" />
          <Tile cover={<CoverYearOne />} title="YEAR ONE" artist="JBR Label Sampler" format="2xLP" price="$30" />
          <Tile cover={<CoverQuietStorm />} title="QUIET STORM EP" artist="Chanté Moore" format='12"' price="$20" />
          <Tile cover={<CoverVariousArtists001 />} title="001" artist="Various Artists" format='10"' price="$22" />
        </div>
      </div>
    </section>
  );
}

/* ─── Merch Section ─────────────────────────────────────────────── */

function MerchSection() {
  return (
    <section className="section section--paper">
      <div className="section-inner">
        <div className="section-head">
          <h3 className="section-title">MERCH<span className="accent"> /</span> APPAREL &amp; OBJECTS</h3>
          <a className="section-link" href="#">Shop all merch →</a>
        </div>
        <div className="grid-4">
          <Tile coverClassName="merch-cover is-light" cover={<CoverLogoTee />} title="JBR CLASSIC LOGO TEE" artist="JBR" format="Black" price="$32" />
          <Tile coverClassName="merch-cover" cover={<CoverRiverWideTestPress />} title="RIVER WIDE TEST PRESSING" artist="Joe Leone" format="Numbered /50" price="$80" />
          <Tile coverClassName="merch-cover" cover={<CoverTote />} title="JBR CANVAS TOTE" artist="JBR" format="Natural" price="$24" />
          <Tile coverClassName="merch-cover" cover={<CoverSlowPoster />} title="SLOW RECORDS POSTER" artist="JBR" format="18×24" price="$28" />
        </div>
      </div>
    </section>
  );
}

/* ─── Artists Section ───────────────────────────────────────────── */

const ARTISTS = [
  { name: "JOE LEONE", genre: "R&B · SOUL", photo: "/photos/joe-leone.jpg", href: "https://joeleone.lnk.to/music" },
  { name: "ERIC BENÉT", genre: "R&B · CLASSIC", photo: "/photos/eric-benet.jpg", href: "https://ericbenet.lnk.to/music" },
  { name: "CHANTÉ MOORE", genre: "R&B · NEO SOUL", photo: "/photos/chante-moore.jpg", href: "#" },
  { name: "AUTUMN PAIGE", genre: "INDIE FOLK · R&B", photo: "/photos/autumn-paige.jpg", href: "#" },
];

function ArtistsSection() {
  return (
    <section className="section" id="artists">
      <div className="section-inner">
        <div className="section-head">
          <h3 className="section-title">ARTISTS<span className="accent"> /</span> ROSTER</h3>
          <a className="section-link" href="#">All artists →</a>
        </div>
        <div className="grid-4">
          {ARTISTS.map((a) => (
            <a key={a.name} className="tile" href={a.href} target={a.href !== "#" ? "_blank" : undefined} rel="noopener noreferrer">
              <div className="tile-cover" style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                <img src={a.photo} alt={a.name} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <div className="tile-title">{a.name}</div>
              <div className="tile-artist">{a.genre}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── News Section ──────────────────────────────────────────────── */

const NEWS = [
  {
    date: "APR 22, 2026",
    headline: "JOE LEONE — RIVER WIDE EP",
    deck: "Five songs cut live to tape over three nights at Sunset Sound. Joe's closest, quietest record yet — out April 26.",
  },
  {
    date: "APR 02, 2026",
    headline: "AUTUMN PAIGE — SELF-TITLED DEBUT",
    deck: "A debut LP three years in the making. Pre-order vinyl today; full record arrives July 11.",
  },
  {
    date: "MAR 18, 2026",
    headline: "BENÉT & MOORE: ONE YEAR LATER",
    deck: "A conversation with Eric and Chanté on the year since \u201cTogether\u201d — the road, the room, and what comes next.",
  },
  {
    date: "MAR 04, 2026",
    headline: "YEAR ONE — JBR LABEL SAMPLER",
    deck: "A 14-track 2xLP gathering JBR's first year in releases, with three previously-unreleased songs.",
  },
  {
    date: "FEB 14, 2026",
    headline: "LIVE AT THE TROUBADOUR",
    deck: "The Joe Leone Quartet's sold-out Valentine's show, recorded direct-to-2-track. 2xLP shipping in May.",
  },
  {
    date: "JAN 30, 2026",
    headline: "SUNSET SESSIONS VOL. II",
    deck: "Eight artists, one room, two days. The second installment in JBR's annual session series.",
  },
];

function NewsSection() {
  return (
    <section className="section" id="news">
      <div className="section-inner">
        <div className="section-head">
          <h3 className="section-title">RECENT NEWS<span className="accent"> /</span> DISPATCH</h3>
          <a className="section-link" href="#">All news →</a>
        </div>
        <div className="news-list">
          {NEWS.map((item) => (
            <div className="news-item" key={item.headline}>
              <div className="news-date">{item.date}</div>
              <div>
                <h4 className="news-headline">{item.headline}</h4>
                <p className="news-deck">{item.deck}</p>
                <a className="news-link" href="#">READ MORE →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Tours Section ─────────────────────────────────────────────── */

const TOURS = [
  { artist: "JOE LEONE", dates: "MAY — JUL 2026 · NORTH AMERICA" },
  { artist: "ERIC BENÉT", dates: "JUN — AUG 2026 · WORLD" },
  { artist: "CHANTÉ MOORE", dates: "JUL 2026 · WEST COAST" },
  { artist: "AUTUMN PAIGE", dates: "SEP — NOV 2026 · DEBUT TOUR" },
  { artist: "JOE LEONE QUARTET", dates: "DEC 2026 · RESIDENCY" },
];

function ToursSection() {
  return (
    <section className="section section--paper" id="tours">
      <div className="section-inner">
        <div className="section-head">
          <h3 className="section-title">TOURS<span className="accent"> /</span> ON THE ROAD</h3>
          <a className="section-link" href="#">All tour dates →</a>
        </div>
        <div className="tours-list">
          {TOURS.map((t) => (
            <a className="tour-row" href="#" key={t.artist}>
              <div className="tour-artist">{t.artist}</div>
              <div className="tour-dates">{t.dates}</div>
              <div className="tour-link">VIEW DATES</div>
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
    <section className="newsletter">
      <div className="newsletter-inner">
        <div>
          <h2>SIGN UP FOR THE JBR NEWSLETTER.</h2>
          <p>No junk. Just the good stuff — releases, tours, and the occasional letter.</p>
        </div>
        {submitted ? (
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>
            YOU'RE IN. THANKS.
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">SUBSCRIBE</button>
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
      <div className="footer-inner">
        <div className="footer-mark">
          <div className="mark">
            <span className="j">J</span>
            <span className="b">B</span>
            <span className="r">R</span>
          </div>
          <div className="word">Creative Group</div>
          <div className="footer-addr">
            JBR Creative Group<br />
            1238 N Highland Ave<br />
            Los Angeles CA 90038<br />
            <br />
            info@jbrcreativegroup.com
          </div>
        </div>
        <div>
          <h4>SHOP</h4>
          <ul>
            <li><a href="#">All Vinyl</a></li>
            <li><a href="#">New Releases</a></li>
            <li><a href="#">Pre-Orders</a></li>
            <li><a href="#">Merch</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
        <div>
          <h4>LABEL</h4>
          <ul>
            <li><a href="#">Artists</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Submissions</a></li>
          </ul>
        </div>
        <div>
          <h4>FOLLOW</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Spotify</a></li>
            <li><a href="#">Apple Music</a></li>
            <li><a href="#">Bandcamp</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 JBR CREATIVE GROUP</span>
        <span>ALL RIGHTS RESERVED</span>
        <span>
          <a href="#">TERMS</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#">PRIVACY</a>
        </span>
      </div>
    </footer>
  );
}

/* ─── Home Page ─────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Header />
      <Ticker />
      <main>
        <FeatureStack />
        <NewReleasesSection />
        <FeaturedRelease />
        <DeepCutsSection />
        <MerchSection />
        <ArtistsSection />
        <NewsSection />
        <ToursSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
