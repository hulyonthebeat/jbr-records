import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight, Mail, MapPin } from "lucide-react";
import Nav from "@/components/jbr/Nav";
import Footer from "@/components/jbr/Footer";
import VideoHero from "@/components/jbr/VideoHero";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\//, "")}`;
const musicHref = (artistSlug?: string) =>
  `${BASE.replace(/\/$/, "")}/music${artistSlug ? `#${artistSlug}` : ""}`;
const artistSlugFor = (name: string) =>
  ({
    "eric benét": "eric-benet",
    "joe leone": "joe-leone",
    "autumn paige": "autumn-paige",
  })[name] || "";

const LISTEN = {
  ericBenet: "https://ericbenet.lnk.to/music",
  joeLeone: "https://joeleone.lnk.to/music",
  autumnPaige: "https://autumnpaige.lnk.to/music",
};

// Featured releases for the hero carousel — each links to its smart-link
const FEATURED = [
  {
    eyebrow: "new release",
    title: "duets",
    artist: "eric benét with chanté moore",
    cover: asset("images/jbr/releases/duets-cover.jpg"),
    listen: "https://ericbenet.lnk.to/duets",
    cta: "listen to duets",
  },
  {
    eyebrow: "out now",
    title: "invited",
    artist: "joe leone",
    cover: asset("images/jbr/releases/invited-cover.jpg"),
    coverPosition: "50% 15%",
    listen: "https://joeleone.lnk.to/invited",
    cta: "stream invited",
  },
  {
    eyebrow: "pre-save — out may 15",
    title: "money money money",
    artist: "autumn paige",
    cover: asset("images/jbr/releases/money-cover.jpg"),
    listen: "https://autumnpaige.lnk.to/money",
    cta: "pre-save now",
  },
];

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

const NEWS = [
  {
    source: "rated r&b",
    date: "09.10.24",
    title:
      "eric benét & tamar braxton's \u201csomething we can make love to\u201d hits top 10 on billboard's adult r&b airplay chart",
    image: asset("images/jbr/news/rated-rnb-billboard-top10.png"),
    href: "#",
  },
  {
    source: "rated r&b",
    date: "08.08.23",
    title: "eric benét taps chanté moore for new duets album",
    image: asset("images/jbr/news/rated-rnb-benet-moore.png"),
    href: "#",
  },
  {
    source: "billboard",
    date: "08.08.23",
    title: "eric benét, alison ball launch jbr creative group",
    image: asset("images/jbr/news/billboard-jbr-launch.png"),
    href: "#",
  },
];

export default function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSent, setContactSent] = useState(false);
  const [shopIndex, setShopIndex] = useState(0);
  const [musicIndex, setMusicIndex] = useState(0);

  // Honor #section URLs on first load (e.g. /#contact from another page)
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
      <Nav />

      {/* Hero — auto-rotating YouTube clips */}
      <VideoHero />


      {/* Shop — Eric Benét merch (3-up carousel) */}
      {(() => {
        const shopItems = [
          {
            category: "real r+b is back (tour)",
            name: "tour t-shirt",
            price: "$35",
            img: "images/jbr/shop/tour-tee.png",
          },
          {
            category: "real r+b is back (tour)",
            name: "portrait t-shirt",
            price: "$35",
            img: "images/jbr/shop/portrait-tee.png",
          },
          {
            category: "real r+b is back (tour)",
            name: "trucker hat — black + khaki",
            price: "$35",
            img: "images/jbr/shop/trucker-khaki.png",
          },
          {
            category: "real r+b is back (tour)",
            name: "trucker hat — khaki + red",
            price: "$35",
            img: "images/jbr/shop/trucker-red.png",
          },
          {
            category: "real r+b is back (tour)",
            name: "tour poster",
            price: "$10",
            img: "images/jbr/shop/tour-poster.png",
          },
          {
            category: "real r+b is back (tour)",
            name: "koozie",
            price: "$6",
            img: "images/jbr/shop/koozie.png",
          },
        ];
        const VISIBLE = 3;
        const maxIndex = Math.max(0, shopItems.length - VISIBLE);
        const clamped = Math.min(Math.max(shopIndex, 0), maxIndex);
        const goPrev = () => setShopIndex((i) => Math.max(0, i - 1));
        const goNext = () =>
          setShopIndex((i) => Math.min(maxIndex, i + 1));

        return (
          <section
            id="shop"
            className="py-16 md:py-24 px-4 md:px-8 bg-black border-b border-white/15"
          >
            <div className="max-w-[120rem] mx-auto">
              {/* Header bar — like reference: tag + title left, "shop all" right */}
              <div className="border border-white/15 px-6 md:px-10 py-6 md:py-8 flex items-center justify-between gap-6 flex-wrap">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-[#C7332E] mb-2 uppercase">
                    new in
                  </p>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                    new arrivals
                  </h2>
                </div>
                <a
                  href="https://ericbenet.merchtable.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold tracking-tight bg-white text-black px-6 py-3 hover:bg-stone-200 transition-colors"
                >
                  shop all
                </a>
              </div>

              {/* Carousel viewport with edge arrows */}
              <div className="relative">
                <div className="overflow-hidden border-x border-b border-white/15">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${
                        (clamped * 100) / VISIBLE
                      }%)`,
                    }}
                  >
                    {shopItems.map((item, idx) => (
                      <a
                        key={item.name}
                        href="https://ericbenet.merchtable.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group block shrink-0 ${
                          idx !== shopItems.length - 1
                            ? "border-r border-white/15"
                            : ""
                        }`}
                        style={{ width: `${100 / VISIBLE}%` }}
                      >
                        <div className="relative aspect-[4/3] md:aspect-square bg-black overflow-hidden">
                          <img
                            src={asset(item.img)}
                            alt={item.name}
                            className="w-full h-full object-contain p-6 md:p-10 group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="border-t border-white/15 px-5 md:px-7 py-5 md:py-6">
                          <p className="text-[0.65rem] md:text-xs font-bold tracking-[0.18em] text-stone-500 uppercase mb-2">
                            {item.category}
                          </p>
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-sm md:text-base font-bold tracking-tight leading-snug">
                              {item.name}
                            </h3>
                            <span className="text-sm md:text-base font-bold text-stone-300 shrink-0">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Edge arrows — circular, partially overlapping */}
                {clamped > 0 && (
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="previous products"
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-stone-900 border border-white/25 items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                {clamped < maxIndex && (
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="next products"
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-stone-900 border border-white/25 items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Mobile arrows below carousel */}
              <div className="flex md:hidden justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={clamped === 0}
                  aria-label="previous products"
                  className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={clamped === maxIndex}
                  aria-label="next products"
                  className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        );
      })()}


      {/* Artists Carousel — Republic-style row */}
      <section
        id="artists"
        className="py-16 md:py-20 bg-black relative border-y border-white/15"
      >
        <div className="px-4 md:px-8 max-w-[120rem] mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 items-start">
              {/* Lead card */}
              <motion.a
                href="#artists"
                onClick={handleNavClick("artists")}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col bg-black"
              >
                <div className="flex flex-col justify-center p-8 md:p-10 min-h-[14rem]">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white">
                    our<br />artists
                  </h2>
                </div>
              </motion.a>

              {/* Artist cards */}
              {ROSTER.map((artist, i) => (
                <motion.a
                  href={musicHref(artistSlugFor(artist.name))}
                  key={artist.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 1) * 0.08, duration: 0.5 }}
                  className="group flex flex-col bg-black"
                >
                  <div className="overflow-hidden">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="block w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
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

          </div>
        </div>
      </section>

      {/* Featured releases — auto-advancing carousel */}
      <HeroCarousel />

      {/* Music — releases carousel (mirrors shop carousel pattern) */}
      {(() => {
        const musicItems = [
          { title: "the co-star", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/the-co-star.webp"), tag: "new", listen: "https://ericbenet.net/music/the-co-star/" },
          { title: "can't wait", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/cant-wait.webp"), tag: "new", listen: "https://ericbenet.net/music/cant-wait/" },
          { title: "duets", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/duets.webp"), tag: "album", listen: "https://ericbenet.net/music/duets/" },
          { title: "so distracted (live)", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/so-distracted-live.webp"), tag: "live", listen: "https://ericbenet.net/music/so-distracted-live/" },
          { title: "so distracted", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/so-distracted.webp"), tag: "single", listen: "https://ericbenet.net/music/so-distracted/" },
          { title: "work it out", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/work-it-out.webp"), tag: "single", listen: "https://ericbenet.net/music/work-it-out/" },
          { title: "fly away", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/fly-away.webp"), tag: "single", listen: "https://ericbenet.net/music/fly-away/" },
          { title: "something we can make love to", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/something-we-can-make-love-to.webp"), tag: "single", listen: "https://ericbenet.net/music/something-we-can-make-love-to/" },
          { title: "can i spend my life with you", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/can-i-spend-my-life-with-you.webp"), tag: "single", listen: "https://ericbenet.net/music/can-i-spend-my-life-with-you/" },
          { title: "spend my life with you (remix)", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/spend-my-life-with-you-remix.webp"), tag: "remix", listen: "https://ericbenet.net/music/spend-my-life-with-you-remix/" },
          { title: "lady", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/lady.webp"), tag: "single", listen: "https://ericbenet.net/music/lady/" },
          { title: "last train", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/last-train.webp"), tag: "single", listen: "https://ericbenet.net/music/last-train/" },
          { title: "we could have been", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/we-could-have-been.webp"), tag: "single", listen: "https://ericbenet.net/music/we-could-have-been/" },
          { title: "can't stop", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/cant-stop.webp"), tag: "single", listen: "https://ericbenet.net/music/cant-stop/" },
          { title: "everything", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/everything.webp"), tag: "single", listen: "https://ericbenet.net/music/everything/" },
          { title: "insane", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/insane.webp"), tag: "single", listen: "https://ericbenet.net/music/insane/" },
          { title: "sunshine (radio edit)", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/sunshine-radio-edit.webp"), tag: "single", listen: "https://ericbenet.net/music/sunshine-radio-edit/" },
          { title: "정말 사랑했을까", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/_ec_a0_95_eb_a7_90-_ec_82_ac_eb_9e_91_ed_96_88_ec_9d_84_ea_b9_8c.webp"), tag: "single", listen: "https://ericbenet.net/music/%ec%a0%95%eb%a7%90-%ec%82%ac%eb%9e%91%ed%96%88%ec%9d%84%ea%b9%8c/" },
          { title: "the other one: pt. 1", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/the-other-one-pt-1.webp"), tag: "single", listen: "https://ericbenet.net/music/the-other-one-pt-1/" },
          { title: "the other one (revisited by the afropeans)", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/the-other-one-revisited-by-the-afropeans.webp"), tag: "remix", listen: "https://ericbenet.net/music/the-other-one-revisited-by-the-afropeans/" },
          { title: "news for you (remix)", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/news-for-you-remix.webp"), tag: "remix", listen: "https://ericbenet.net/music/news-for-you-remix/" },
          { title: "white christmas", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/white-christmas.webp"), tag: "holiday", listen: "https://ericbenet.net/music/white-christmas/" },
          { title: "christmas without you", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/christmas-without-you.webp"), tag: "holiday", listen: "https://ericbenet.net/music/christmas-without-you/" },
          { title: "eric benét (self-titled)", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/eric-benet.webp"), tag: "album", listen: "https://ericbenet.net/music/eric-benet/" },
          { title: "the one", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/the-one.webp"), tag: "album", listen: "https://ericbenet.net/music/the-one/" },
          { title: "lost in time", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/lost-in-time.webp"), tag: "album", listen: "https://ericbenet.net/music/lost-in-time/" },
          { title: "love & life", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/love-life.webp"), tag: "album", listen: "https://ericbenet.net/music/love-life/" },
          { title: "hurricane", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/hurricane.webp"), tag: "album", listen: "https://ericbenet.net/music/hurricane/" },
          { title: "true to myself", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/true-to-myself.webp"), tag: "album", listen: "https://ericbenet.net/music/true-to-myself/" },
          { title: "pretty baby", artist: "eric benét", image: asset("images/jbr/releases/eric-catalog/pretty-baby.webp"), tag: "single", listen: "https://ericbenet.net/music/pretty-baby/" },
          {
            title: "the gift",
            artist: "joe leone",
            image: asset("images/jbr/releases/lnkto/joe-thegift.jpg"),
            tag: "ep",
            listen: LISTEN.joeLeone,
          },
          {
            title: "invited",
            artist: "joe leone",
            image: asset("images/jbr/releases/lnkto/joe-invited.jpg"),
            tag: "single",
            listen: LISTEN.joeLeone,
          },
          {
            title: "god's favorite",
            artist: "joe leone",
            image: asset("images/jbr/releases/lnkto/joe-gods-favorite.jpg"),
            tag: "single",
            listen: LISTEN.joeLeone,
          },
          {
            title: "where have you been",
            artist: "joe leone",
            image: asset("images/jbr/releases/lnkto/joe-wherehaveyoubeen.jpg"),
            tag: "single",
            listen: LISTEN.joeLeone,
          },
          {
            title: "discipline",
            artist: "joe leone",
            image: asset("images/jbr/releases/lnkto/joe-discipline.jpg"),
            tag: "single",
            listen: LISTEN.joeLeone,
          },
          {
            title: "over under / save face",
            artist: "joe leone",
            image: asset("images/jbr/releases/lnkto/joe-overunder.jpg"),
            tag: "single",
            listen: LISTEN.joeLeone,
          },
          {
            title: "money money money",
            artist: "autumn paige",
            image: asset("images/jbr/releases/lnkto/autumn-money.jpg"),
            tag: "pre-save",
            listen: LISTEN.autumnPaige,
          },
          {
            title: "let ya",
            artist: "autumn paige",
            image: asset("images/jbr/releases/lnkto/autumn-let-ya.jpg"),
            tag: "single",
            listen: LISTEN.autumnPaige,
          },
          {
            title: "down the rabbit hole",
            artist: "autumn paige",
            image: asset("images/jbr/releases/lnkto/autumn-rabbithole.jpg"),
            tag: "single",
            listen: LISTEN.autumnPaige,
          },
          {
            title: "down the rabbit hole — acoustics",
            artist: "autumn paige",
            image: asset("images/jbr/releases/lnkto/autumn-rabbithole-acoustic.jpg"),
            tag: "acoustic",
            listen: LISTEN.autumnPaige,
          },
          {
            title: "baggage",
            artist: "autumn paige",
            image: asset("images/jbr/releases/lnkto/autumn-baggage.jpg"),
            tag: "single",
            listen: "https://www.deezer.com/album/703802421",
          },
          {
            title: "topless",
            artist: "autumn paige",
            image: asset("images/jbr/releases/lnkto/autumn-topless.jpg"),
            tag: "single",
            listen: "https://open.spotify.com/track/3xugpe72CNOypPnJwGaRmG",
          },
          {
            title: "altar",
            artist: "autumn paige",
            image: asset("images/jbr/releases/lnkto/autumn-altar.jpg"),
            tag: "debut",
            listen: "https://open.spotify.com/album/2s7AHuMbdbEN3GWKyFrIEo",
          },
        ];
        const VISIBLE = 3;
        const maxIndex = Math.max(0, musicItems.length - VISIBLE);
        const clamped = Math.min(Math.max(musicIndex, 0), maxIndex);
        const goPrev = () => setMusicIndex((i) => Math.max(0, i - 1));
        const goNext = () => setMusicIndex((i) => Math.min(maxIndex, i + 1));

        return (
          <section
            id="music"
            className="py-16 md:py-24 px-4 md:px-8 bg-black border-b border-white/15"
          >
            <div className="max-w-[120rem] mx-auto">
              {/* Header bar — matches shop carousel */}
              <div className="border border-white/15 px-6 md:px-10 py-6 md:py-8 flex items-center justify-between gap-6 flex-wrap">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-[#C7332E] mb-2 uppercase">
                    releases
                  </p>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                    music
                  </h2>
                </div>
                <a
                  href={musicHref()}
                  className="inline-flex items-center text-sm font-bold tracking-tight bg-white text-black px-6 py-3 hover:bg-stone-200 transition-colors"
                >
                  listen all
                </a>
              </div>

              {/* Carousel viewport with edge arrows */}
              <div className="relative">
                <div className="overflow-hidden border-x border-b border-white/15">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${
                        (clamped * 100) / VISIBLE
                      }%)`,
                    }}
                  >
                    {musicItems.map((item, idx) => (
                      <a
                        key={item.title + item.artist}
                        href={musicHref(artistSlugFor(item.artist))}
                        className={`group block shrink-0 ${
                          idx !== musicItems.length - 1
                            ? "border-r border-white/15"
                            : ""
                        }`}
                        style={{ width: `${100 / VISIBLE}%` }}
                      >
                        <div className="relative aspect-square bg-stone-900 overflow-hidden">
                          <img
                            src={item.image}
                            alt={`${item.title} by ${item.artist}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="border-t border-white/15 px-5 md:px-7 py-5 md:py-6">
                          <p className="text-[0.65rem] md:text-xs font-bold tracking-[0.18em] text-stone-500 uppercase mb-2">
                            {item.artist}
                          </p>
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-sm md:text-base font-bold tracking-tight leading-snug">
                              {item.title}
                            </h3>
                            <span className="text-xs md:text-sm font-bold text-stone-400 group-hover:text-white shrink-0 transition-colors">
                              listen →
                            </span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Edge arrows — match shop carousel */}
                {clamped > 0 && (
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="previous releases"
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-stone-900 border border-white/25 items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                {clamped < maxIndex && (
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="next releases"
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-stone-900 border border-white/25 items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Mobile arrows */}
              <div className="flex md:hidden justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={clamped === 0}
                  aria-label="previous releases"
                  className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={clamped === maxIndex}
                  aria-label="next releases"
                  className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        );
      })()}

      {/* News Grid */}
      <section
        id="news"
        className="py-24 md:py-32 px-4 md:px-8 max-w-[120rem] mx-auto border-t border-white/10"
      >
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#C7332E] mb-4 uppercase">
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
              href={item.href}
              key={item.title}
              target={item.href !== "#" ? "_blank" : undefined}
              rel={item.href !== "#" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group block"
            >
              <div className="aspect-square overflow-hidden bg-white mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-black tracking-[0.2em] text-[#C7332E] uppercase">
                  {item.source}
                </span>
                <span className="h-px w-6 bg-stone-700" />
                <span className="text-stone-500 font-bold text-sm">
                  {item.date}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold tracking-tight leading-tight group-hover:text-stone-300 transition-colors">
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
            <p className="text-xs font-bold tracking-[0.2em] text-[#C7332E] mb-6 uppercase">
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

      <Footer />
    </div>
  );
}

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = FEATURED.length;
  const slide = FEATURED[index];

  const go = (next: number) => setIndex(((next % total) + total) % total);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  return (
    <section
      id="new"
      className="relative h-[85vh] md:h-[90vh] w-full bg-stone-900 overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background — full-bleed cover artwork */}
      <AnimatePresence mode="sync">
        <motion.img
          key={slide.cover}
          src={slide.cover}
          alt={`${slide.title} — ${slide.artist}`}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: slide.coverPosition ?? "center" }}
        />
      </AnimatePresence>
      {/* Gradient overlays — keep text legible without hiding the artwork */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="px-6 md:px-16 pb-20 md:pb-28">
          <div className="max-w-[120rem] mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#C7332E] mb-4 uppercase">
                  {slide.eyebrow}
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.85] mb-3 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base md:text-2xl font-semibold tracking-tight mb-8 text-white/90 drop-shadow">
                  {slide.artist}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={slide.listen}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black px-8 py-4 text-sm font-bold tracking-tight hover:bg-stone-200 transition-colors rounded-none"
                  >
                    {slide.cta}
                  </a>
                  <a
                    href={musicHref()}
                    className="inline-block border-2 border-white text-white bg-transparent px-8 py-4 text-sm font-bold tracking-tight hover:bg-white hover:text-black transition-colors rounded-none"
                  >
                    all releases
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls row */}
        <div className="absolute bottom-6 md:bottom-8 left-0 right-0 px-6 md:px-16">
          <div className="max-w-[120rem] mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-tight text-white/80">
              <span className="text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="w-12 md:w-24 h-px bg-white/30 relative overflow-hidden">
                <motion.span
                  key={index + (paused ? "-p" : "")}
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? "0%" : "100%" }}
                  transition={{ duration: paused ? 0 : 6, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-white"
                />
              </span>
              <span className="text-white/60">
                {String(total).padStart(2, "0")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="previous release"
                className="w-10 h-10 md:w-11 md:h-11 border border-white/20 hover:bg-white hover:text-black flex items-center justify-center transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="next release"
                className="w-10 h-10 md:w-11 md:h-11 border border-white/20 hover:bg-white hover:text-black flex items-center justify-center transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
