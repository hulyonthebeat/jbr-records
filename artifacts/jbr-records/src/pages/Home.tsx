import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShoppingCart,
  User,
  ChevronRight,
  Instagram,
  Twitter,
  Youtube,
  Menu,
  X,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\//, "")}`;

const LISTEN = {
  ericBenet: "https://ericbenet.lnk.to/music",
  joeLeone: "https://joeleone.lnk.to/music",
  autumnPaige: "https://autumnpaige.lnk.to/music",
};

const ROSTER = [
  {
    name: "eric benét",
    image: asset("images/jbr/eric-benet-portrait.jpg"),
    listen: LISTEN.ericBenet,
  },
  {
    name: "joe leone",
    image: asset("images/jbr/joe-leone-jbr.jpg"),
    listen: LISTEN.joeLeone,
  },
  {
    name: "autumn paige",
    image: asset("images/jbr/autumn-paige-portrait.jpg"),
    listen: LISTEN.autumnPaige,
  },
];

const RELEASES = [
  {
    title: "duets",
    artist: "eric benét with chanté moore",
    image: asset("images/jbr/eric-benet.jpg"),
    tag: "new",
    listen: LISTEN.ericBenet,
  },
  {
    title: "discipline",
    artist: "joe leone",
    image: asset("images/jbr/joe-leone.jpg"),
    tag: "out now",
    listen: LISTEN.joeLeone,
  },
  {
    title: "the studio sessions",
    artist: "autumn paige",
    image: asset("images/jbr/autumn-paige.jpg"),
    tag: "out now",
    listen: LISTEN.autumnPaige,
  },
  {
    title: "lost & found",
    artist: "eric benét",
    image: asset("images/jbr/eric-benet-hero.jpg"),
    tag: "catalog",
    listen: LISTEN.ericBenet,
  },
];

const NEWS = [
  {
    date: "10.12.24",
    title: "eric benét & chanté moore announce 'duets' collaborative album",
    image: asset("images/jbr/eric-benet.jpg"),
  },
  {
    date: "09.28.24",
    title: "joe leone's 'discipline' debuts at #1 on traditional jazz charts",
    image: asset("images/jbr/joe-leone.jpg"),
  },
  {
    date: "08.15.24",
    title: "jbr creative group launches as a new sanctuary for analog soul",
    image: asset("images/jbr/autumn-paige-jbr.jpg"),
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSent, setContactSent] = useState(false);

  // Honor #section URLs on first load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const handleNavClick =
    (id: string): React.MouseEventHandler<HTMLAnchorElement> =>
    (e) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSent(true);
    setNewsletterEmail("");
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim())
      return;
    setContactSent(true);
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden lowercase">
      {/* Top Promo Strip */}
      <div className="bg-[#F8B830] text-black py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
        new — duets, the eric benét + chanté moore collaborative album, out now.{" "}
        <a
          href="#new"
          onClick={handleNavClick("new")}
          className="underline font-bold hover:no-underline"
        >
          listen now.
        </a>
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-white/10 px-6 py-4 md:py-6">
        <div className="max-w-[120rem] mx-auto flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden md:flex flex-1 items-center gap-8 text-sm font-semibold tracking-tight">
            <a
              href="#about"
              onClick={handleNavClick("about")}
              className="hover:text-stone-400 transition-colors"
            >
              about
            </a>
            <a
              href="#new"
              onClick={handleNavClick("new")}
              className="hover:text-stone-400 transition-colors"
            >
              new
            </a>
            <a
              href="#artists"
              onClick={handleNavClick("artists")}
              className="hover:text-stone-400 transition-colors"
            >
              artists
            </a>
            <a
              href="#music"
              onClick={handleNavClick("music")}
              className="hover:text-stone-400 transition-colors"
            >
              music
            </a>
          </div>

          <a
            href="#new"
            onClick={handleNavClick("new")}
            className="flex-shrink-0 cursor-pointer text-center md:flex-1 md:flex md:justify-center"
            aria-label="jbr creative group — home"
          >
            <img
              src={asset("images/jbr/jbr-logo-color.png")}
              alt="jbr creative group"
              className="h-11 md:h-14 w-auto"
            />
          </a>

          <div className="flex flex-1 items-center justify-end gap-6 text-sm font-semibold tracking-tight">
            <div className="hidden md:flex gap-8 mr-8">
              <a
                href="#news"
                onClick={handleNavClick("news")}
                className="hover:text-stone-400 transition-colors"
              >
                news
              </a>
              <a
                href="#contact"
                onClick={handleNavClick("contact")}
                className="hover:text-stone-400 transition-colors"
              >
                contact
              </a>
            </div>
            <button
              className="hover:text-stone-400 transition-colors"
              aria-label="search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="hover:text-stone-400 transition-colors hidden md:block"
              aria-label="account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              className="hover:text-stone-400 transition-colors"
              aria-label="cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl shadow-black">
            <a
              href="#about"
              onClick={handleNavClick("about")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              about
            </a>
            <a
              href="#new"
              onClick={handleNavClick("new")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              new
            </a>
            <a
              href="#artists"
              onClick={handleNavClick("artists")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              artists
            </a>
            <a
              href="#music"
              onClick={handleNavClick("music")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              music
            </a>
            <a
              href="#news"
              onClick={handleNavClick("news")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              news
            </a>
            <a
              href="#contact"
              onClick={handleNavClick("contact")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="new"
        className="relative h-[85vh] md:h-[90vh] w-full bg-stone-900 group cursor-pointer overflow-hidden"
      >
        <img
          src={asset("images/jbr/eric-benet-hero.jpg")}
          alt="duets — eric benét with chanté moore"
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%] transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 md:p-16 max-w-4xl z-10">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#F8B830] mb-4 uppercase">
            new release
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.85] mb-3 drop-shadow-lg">
            duets
          </h1>
          <p className="text-lg md:text-2xl font-semibold tracking-tight mb-8 text-white/90 drop-shadow">
            eric benét with chanté moore
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={LISTEN.ericBenet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 text-sm font-bold tracking-tight hover:bg-stone-200 transition-colors rounded-none"
            >
              listen to duets
            </a>
            <a
              href="#music"
              onClick={handleNavClick("music")}
              className="inline-block border-2 border-white text-white bg-transparent px-8 py-4 text-sm font-bold tracking-tight hover:bg-white hover:text-black transition-colors rounded-none"
            >
              buy vinyl
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 md:py-32 px-4 md:px-8 max-w-[120rem] mx-auto"
      >
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-4">
            <p className="text-xs font-bold tracking-[0.2em] text-[#F8B830] mb-6 uppercase">
              the label
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
              records,<br />made with<br />intention.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg leading-relaxed text-stone-300 font-medium max-w-2xl">
            <p>
              jbr creative group is an independent music label based in los
              angeles. we sign artists we believe in and put real resources
              behind real records — songs that hold up on a turntable, in a
              car, in a small room with the lights down.
            </p>
            <p>
              our roster spans r&amp;b, soul, jazz, and singer-songwriter, and
              every release is built artist-first: long-form sessions, full
              creative control, and a release strategy that respects the work.
            </p>
            <p>
              we are not chasing trends. we are building a catalog.
            </p>
            <a
              href="#contact"
              onClick={handleNavClick("contact")}
              className="inline-flex items-center gap-2 mt-4 text-sm font-bold tracking-tight text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              get in touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Artists Carousel — Republic-style row */}
      <section
        id="artists"
        className="py-16 md:py-20 bg-black relative border-y border-white/15"
      >
        <div className="px-4 md:px-8 max-w-[120rem] mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {/* Lead card */}
              <motion.a
                href="#artists"
                onClick={handleNavClick("artists")}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col bg-black border border-white/10 hover:border-white/30 transition-colors"
              >
                <div className="flex-1 flex flex-col justify-center p-8 md:p-10 min-h-[18rem] md:min-h-[22rem]">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white">
                    our<br />artists
                  </h2>
                </div>
              </motion.a>

              {/* Artist cards */}
              {ROSTER.map((artist, i) => (
                <motion.a
                  href={artist.listen}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={artist.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 1) * 0.08, duration: 0.5 }}
                  className="group flex flex-col bg-black"
                >
                  <div className="relative flex-1 overflow-hidden bg-stone-900 min-h-[18rem] md:min-h-[22rem]">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-black border-t border-white/10 px-5 py-5 flex items-center justify-between gap-4">
                    <span className="text-base md:text-lg font-bold tracking-tight text-white truncate">
                      {artist.name}
                    </span>
                    <span className="text-xs md:text-sm font-bold tracking-tight text-stone-400 group-hover:text-white transition-colors whitespace-nowrap underline underline-offset-4 decoration-stone-600 group-hover:decoration-white">
                      listen
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Right-side scroll cue */}
            <button
              type="button"
              aria-label="next"
              className="hidden lg:flex absolute right-[-1.25rem] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/0 border border-white/20 items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Music — Releases Grid */}
      <section
        id="music"
        className="py-24 md:py-32 px-4 md:px-8 max-w-[120rem] mx-auto"
      >
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#F8B830] mb-4 uppercase">
              releases
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
              music
            </h2>
          </div>
          <a
            href="#contact"
            onClick={handleNavClick("contact")}
            className="text-sm font-bold tracking-tight text-stone-400 hover:text-white border-b border-stone-600 hover:border-white pb-1 transition-colors"
          >
            full discography
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {RELEASES.map((release, i) => (
            <motion.a
              href={release.listen}
              target="_blank"
              rel="noopener noreferrer"
              key={release.title + release.artist}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-900 mb-4">
                <img
                  src={release.image}
                  alt={`${release.title} by ${release.artist}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#F8B830] text-black text-[10px] font-bold tracking-[0.15em] uppercase px-2 py-1">
                  {release.tag}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-black tracking-tight leading-tight mb-1 group-hover:text-stone-300 transition-colors">
                {release.title}
              </h3>
              <p className="text-sm font-medium text-stone-500 mb-3">
                {release.artist}
              </p>
              <div className="flex items-center justify-between text-xs font-bold tracking-tight">
                <span className="text-white border-b border-white/40 group-hover:border-white pb-0.5 transition-colors">
                  listen everywhere
                </span>
                <span className="text-stone-500 group-hover:text-white transition-colors">
                  open →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section
        id="news"
        className="py-24 md:py-32 px-4 md:px-8 max-w-[120rem] mx-auto border-t border-white/10"
      >
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#F8B830] mb-4 uppercase">
              latest
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
              news &amp; releases
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-bold tracking-tight text-stone-400 hover:text-white border-b border-stone-600 hover:border-white pb-1 transition-colors"
          >
            all news
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {NEWS.map((item, i) => (
            <motion.a
              href="#"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-900 mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-stone-500 font-bold text-sm mb-3">
                {item.date}
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight group-hover:text-stone-300 transition-colors">
                {item.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-4 md:px-8 bg-stone-950 border-y border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            get the latest.
          </h2>
          <p className="text-stone-400 font-medium mb-10">
            sign up for exclusive updates, early access to vinyl drops, and tour
            pre-sales.
          </p>
          {newsletterSent ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block border border-white/20 px-8 py-6 text-sm font-bold tracking-tight"
            >
              thanks. you're on the list.
            </motion.div>
          ) : (
            <form
              onSubmit={handleNewsletter}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                placeholder="email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-black border border-white/20 px-6 py-4 flex-1 max-w-md text-white placeholder:text-stone-600 focus:outline-none focus:border-white transition-colors rounded-none text-sm font-bold tracking-wide"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-10 py-4 text-sm font-bold tracking-tight hover:bg-stone-200 transition-colors rounded-none whitespace-nowrap"
              >
                subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 px-4 md:px-8 max-w-[120rem] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs font-bold tracking-[0.2em] text-[#F8B830] mb-6 uppercase">
              say hello
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-8">
              contact
            </h2>
            <div className="space-y-6 text-stone-300 font-medium">
              <div>
                <p className="text-xs font-bold tracking-[0.15em] text-stone-500 uppercase mb-2">
                  general inquiries
                </p>
                <a
                  href="mailto:hello@jbrcreativegroup.com"
                  className="text-base md:text-lg flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@jbrcreativegroup.com
                </a>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.15em] text-stone-500 uppercase mb-2">
                  demos &amp; press
                </p>
                <a
                  href="mailto:press@jbrcreativegroup.com"
                  className="text-base md:text-lg flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  press@jbrcreativegroup.com
                </a>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.15em] text-stone-500 uppercase mb-2">
                  studio
                </p>
                <p className="text-base md:text-lg flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  los angeles, ca
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            {contactSent ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-white/20 p-10 text-center"
              >
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4">
                  message received.
                </h3>
                <p className="text-stone-400 font-medium">
                  thanks for reaching out — we'll be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setContactSent(false)}
                  className="mt-8 text-sm font-bold tracking-tight border-b border-white/30 hover:border-white pb-1 transition-colors"
                >
                  send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleContact} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-[0.15em] text-stone-500 uppercase mb-2">
                      name
                    </label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-black border border-white/20 px-5 py-4 text-white placeholder:text-stone-600 focus:outline-none focus:border-white transition-colors rounded-none text-sm font-medium"
                      placeholder="your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-[0.15em] text-stone-500 uppercase mb-2">
                      email
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-black border border-white/20 px-5 py-4 text-white placeholder:text-stone-600 focus:outline-none focus:border-white transition-colors rounded-none text-sm font-medium"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] text-stone-500 uppercase mb-2">
                    message
                  </label>
                  <textarea
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    rows={6}
                    className="w-full bg-black border border-white/20 px-5 py-4 text-white placeholder:text-stone-600 focus:outline-none focus:border-white transition-colors rounded-none text-sm font-medium resize-none"
                    placeholder="tell us a little about what you're working on."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-white text-black px-10 py-4 text-sm font-bold tracking-tight hover:bg-stone-200 transition-colors rounded-none"
                >
                  send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-4 md:px-8 max-w-[120rem] mx-auto border-t border-white/10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          <div className="md:col-span-1">
            <img
              src={asset("images/jbr/jbr-logo-color.png")}
              alt="jbr creative group"
              className="h-16 w-auto mb-6"
            />
            <p className="text-stone-500 font-medium text-sm leading-relaxed mb-8">
              an independent label dedicated to modern artists making timeless
              records. based in los angeles, ca.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                aria-label="instagram"
                className="text-white hover:text-stone-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="twitter"
                className="text-white hover:text-stone-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="youtube"
                className="text-white hover:text-stone-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-stone-500 mb-6">artists</h4>
            <ul className="space-y-4 font-bold text-sm">
              {ROSTER.map((a) => (
                <li key={a.name}>
                  <a
                    href={a.listen}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-400 transition-colors"
                  >
                    {a.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-500 mb-6">store</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li>
                <a
                  href="#music"
                  onClick={handleNavClick("music")}
                  className="hover:text-stone-400 transition-colors"
                >
                  music
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-400 transition-colors">
                  merch
                </a>
              </li>
              <li>
                <a
                  href="#new"
                  onClick={handleNavClick("new")}
                  className="hover:text-stone-400 transition-colors"
                >
                  new arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-400 transition-colors">
                  best sellers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-500 mb-6">support</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li>
                <a
                  href="#contact"
                  onClick={handleNavClick("contact")}
                  className="hover:text-stone-400 transition-colors"
                >
                  contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-400 transition-colors">
                  faq
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-400 transition-colors">
                  shipping &amp; returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-400 transition-colors">
                  privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-400 transition-colors">
                  terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-stone-600 pt-8 border-t border-white/10">
          <p>
            &copy; {new Date().getFullYear()} jbr creative group. all rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              do not sell my personal info
            </a>
            <a href="#" className="hover:text-white transition-colors">
              accessibility
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
