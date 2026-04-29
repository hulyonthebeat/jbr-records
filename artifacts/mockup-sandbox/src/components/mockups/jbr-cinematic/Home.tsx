import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, Instagram, Twitter, Youtube, Disc3, Mic2, Radio, PlayCircle } from "lucide-react";

// --- Data ---
const ROSTER = [
  {
    name: "Eric Benét",
    role: "R&B Icon",
    image: "/__mockup/images/jbr/eric-benet-portrait.jpg",
    bio: "Grammy-nominated R&B legend, known for his timeless vocal delivery and unmatched stage presence.",
  },
  {
    name: "Chanté Moore",
    role: "R&B Legend",
    image: "/__mockup/images/jbr/chante-moore.jpg",
    bio: "A voice that defines an era. Chanté brings unparalleled grace and power to the JBR roster.",
  },
  {
    name: "Joe Leone",
    role: "Contemporary Crooner",
    image: "/__mockup/images/jbr/joe-leone-jbr.jpg",
    bio: "Carrying the torch of the great Italian-American crooners with a modern soul sensibility.",
  },
  {
    name: "Alison Ball",
    role: "Rising Soul Vocalist",
    image: "/__mockup/images/jbr/alison-ball.jpg",
    bio: "Raw, unfiltered emotion. Alison is the new voice of contemporary soul.",
  },
  {
    name: "Autumn Paige",
    role: "Singer-Songwriter",
    image: "/__mockup/images/jbr/autumn-paige-portrait.jpg",
    bio: "Intimate storytelling layered over rich, analog instrumentation.",
  },
];

const NEWS = [
  {
    date: "10.12.24",
    title: "Eric Benét & Chanté Moore Announce 'Duets' Collaborative Album",
    source: "Billboard",
  },
  {
    date: "09.28.24",
    title: "Joe Leone's 'Discipline' Debuts at #1 on Traditional Jazz Charts",
    source: "Jazz Times",
  },
  {
    date: "08.15.24",
    title: "JBR Creative Group Launches as a New Sanctuary for Analog Soul",
    source: "Variety",
  }
];

// --- Components ---

const FilmGrain = () => (
  <div 
    className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

const CinematicImage = ({ src, alt, className = "", imgClassName = "" }: { src: string, alt: string, className?: string, imgClassName?: string }) => (
  <div className={`relative overflow-hidden ${className}`}>
    {/* Base image */}
    <img 
      src={src} 
      alt={alt} 
      className={`absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-[1.2] brightness-90 saturate-[1.1] ${imgClassName}`}
    />
    {/* Modern cinema grade: Cool shadows, clean highlights */}
    <div className="absolute inset-0 bg-[#0a1118] mix-blend-multiply opacity-50" />
    <div className="absolute inset-0 bg-[#1c2b36] mix-blend-color opacity-30" />
    {/* Very subtle teal/orange pop */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#02111d]/40 to-[#cc6633]/10 mix-blend-overlay opacity-60" />
    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
  </div>
);

const SceneMarker = ({ scene, title }: { scene: string, title: string }) => (
  <div className="flex items-center gap-4 mb-8 font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">
    <span>SC. {scene}</span>
    <div className="w-8 h-[1px] bg-stone-700" />
    <span className="text-stone-300">{title}</span>
  </div>
);

const Timecode = () => {
  const [time, setTime] = useState("00:00:00:00");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const ms = String(Math.floor(now.getMilliseconds() / 33)).padStart(2, '0'); // ~30fps
      setTime(`${h}:${m}:${s}:${ms}`);
    }, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] tracking-widest text-stone-500 tabular-nums">
      {time}
    </div>
  );
}

export function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <div className="min-h-screen bg-[#020202] text-stone-300 font-sans selection:bg-stone-200 selection:text-black overflow-x-hidden">
      <FilmGrain />

      {/* Fixed UI Overlays */}
      <div className="fixed top-0 left-0 right-0 z-40 p-6 md:p-8 flex justify-between items-start mix-blend-difference pointer-events-none">
        <div className="w-24 md:w-32 pointer-events-auto cursor-pointer">
          <img src="/__mockup/images/jbr/jbr-logo.png" alt="JBR Creative Group" className="w-full h-auto opacity-100 filter invert" />
        </div>
        <div className="hidden md:flex flex-col items-end gap-2 pointer-events-auto">
          <div className="flex gap-8 font-mono text-[10px] tracking-[0.25em] uppercase text-stone-300">
            <a href="#ethos" className="hover:text-white transition-colors duration-300">Ethos</a>
            <a href="#roster" className="hover:text-white transition-colors duration-300">Roster</a>
            <a href="#news" className="hover:text-white transition-colors duration-300">News</a>
          </div>
          <Timecode />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 p-6 md:p-8 flex justify-between items-end mix-blend-difference pointer-events-none hidden md:flex">
        <div className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">
          REC <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse ml-2" />
        </div>
        <div className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">
          2.39:1 / 24FPS
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black py-16 px-4 md:px-12">
        <motion.div 
          style={{ y: heroY, scale: heroScale }}
          className="relative w-full h-full max-h-[85vh] overflow-hidden"
        >
          {/* Letterbox Frame */}
          <div className="absolute inset-0 z-20 pointer-events-none border-y-[10vh] border-black" />
          
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <CinematicImage 
              src="/__mockup/images/jbr/eric-benet-hero.jpg" 
              alt="Studio" 
              className="w-full h-full"
              imgClassName="object-cover object-[50%_40%]"
            />
          </motion.div>
        </motion.div>

        {/* Hero Copy overlaying the image */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 1, duration: 1.5, ease: [0.7, 0, 0.3, 1] }}
            >
              <h1 
                className="text-4xl md:text-6xl lg:text-[7rem] text-white font-bold tracking-tighter uppercase leading-[0.85] mix-blend-overlay drop-shadow-2xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                SOUND, MADE
                <br />
                DELIBERATELY.
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ethos Section */}
      <section id="ethos" className="relative py-32 md:py-48 px-6 md:px-12 max-w-[100rem] mx-auto overflow-hidden">
        <SceneMarker scene="01" title="ETHOS" />
        
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 md:col-start-2 space-y-10"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight uppercase leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The studio<br/>is the story.
            </h2>
            <div className="space-y-8 text-stone-400 text-base md:text-lg leading-relaxed font-light max-w-lg">
              <p>
                Founded by Joey Battaglia, JBR Creative Group operates on a single truth: great records take time. We reject the playlist-factory model in favor of deliberate craftsmanship.
              </p>
              <p>
                We are an independent home for working contemporary artists. From established R&B voices to rising adult contemporary talent, our roster is united by vocal excellence and a commitment to the album format.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 md:col-start-8 relative aspect-[4/5] w-full"
          >
            <CinematicImage 
              src="/__mockup/images/jbr/joe-leone-jbr.jpg" 
              alt="In the studio" 
              className="w-full h-full object-cover"
            />
            {/* Minimal framing corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30" />
            <div className="absolute -bottom-4 right-0 font-mono text-[8px] tracking-widest text-stone-600">ROLL 01 / TAKE 04</div>
          </motion.div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 border-y border-stone-900/50 bg-[#040404] relative">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <SceneMarker scene="02" title="METHOD" />
          
          <div className="grid md:grid-cols-3 gap-16 md:gap-12 mt-16">
            {[
              { num: "01", title: "THE RECORD", desc: "Albums as complete narratives. No filler, no algorithms. Just the story." },
              { num: "02", title: "THE CAPTURE", desc: "Real musicians in the room. Capturing the performance, not constructing it." },
              { num: "03", title: "THE GRADE", desc: "Analog warmth mixed with modern precision. A sound that is both current and timeless." },
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="font-mono text-xs text-stone-600">{item.num}</div>
                <h3 className="text-xl text-white font-bold tracking-tight uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roster Spotlight */}
      <section id="roster" className="py-32 md:py-48 relative z-10">
        <div className="px-6 md:px-12 max-w-[100rem] mx-auto mb-24">
          <SceneMarker scene="03" title="THE ROSTER" />
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tighter uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            ARTISTS
          </h2>
        </div>

        {/* Scrollable cinematic roster */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-20 px-6 md:px-12 gap-6 md:gap-12 w-full">
          {ROSTER.map((artist, i) => (
            <motion.div 
              key={artist.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] snap-center group cursor-pointer flex-shrink-0"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-[#040404]">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <CinematicImage 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="font-mono text-[10px] tracking-widest text-stone-400 uppercase mb-2">{artist.role}</p>
                    <h3 className="text-3xl text-white font-bold tracking-tight uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{artist.name}</h3>
                  </div>
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/30 backdrop-blur-md">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Release / Cinematic Trailer style */}
      <section className="relative py-48 border-y border-stone-900/50 bg-[#040404] overflow-hidden flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <CinematicImage 
            src="/__mockup/images/jbr/autumn-paige.jpg" 
            alt="Studio Session" 
            className="w-full h-full opacity-30"
            imgClassName="object-center scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 text-center md:text-left relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-6 md:max-w-2xl"
          >
            <div className="font-mono text-[10px] tracking-widest text-stone-400 uppercase mb-8">
              IN PRODUCTION / FALL 2024
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              ERIC BENÉT &<br />
              CHANTÉ MOORE
            </h2>
            <div className="pt-4 flex items-center gap-6 justify-center md:justify-start">
              <button className="flex items-center gap-3 bg-white text-black px-6 py-4 font-mono text-xs tracking-widest uppercase hover:bg-stone-200 transition-colors">
                <PlayCircle className="w-4 h-4" /> PLAY TEASER
              </button>
            </div>
          </motion.div>
          
          <div className="hidden md:block w-[30vw] aspect-video border border-white/10 relative p-2 bg-black/20 backdrop-blur-sm">
            <CinematicImage src="/__mockup/images/jbr/eric-benet.jpg" alt="Preview" className="w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Play className="w-12 h-12 text-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* News & Press */}
      <section id="news" className="py-32 md:py-48 px-6 md:px-12 max-w-[100rem] mx-auto">
        <SceneMarker scene="04" title="PRESS" />
        
        <div className="space-y-0 mt-16 md:w-3/4 mx-auto">
          {NEWS.map((item, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="block group py-8 border-b border-stone-800 hover:border-stone-500 transition-colors duration-300 relative"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12 relative z-10">
                <div className="font-mono text-stone-500 text-[10px] tracking-widest uppercase shrink-0 pt-2">
                  {item.date}
                </div>
                <h3 className="text-xl md:text-3xl text-stone-300 group-hover:text-white transition-colors duration-300 flex-1 font-bold tracking-tight uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.title}
                </h3>
                <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 font-mono text-[10px] text-stone-500 pt-2 uppercase">
                  <span>{item.source}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-32 pb-16 px-6 md:px-12 relative border-t border-stone-900/50">
        <div className="max-w-[100rem] mx-auto grid md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-5 space-y-12">
            <h2 className="text-3xl text-white font-bold tracking-tighter uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              JBR CREATIVE GROUP
            </h2>
            <p className="text-stone-500 font-light text-sm max-w-sm leading-relaxed">
              An independent label dedicated to modern artists making timeless records. Based in Los Angeles, CA.
            </p>
            <form className="flex flex-col gap-4 max-w-xs pt-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-stone-800 px-0 py-3 font-mono text-xs tracking-widest focus:outline-none focus:border-white transition-colors text-white placeholder:text-stone-700 uppercase"
              />
              <button type="submit" className="self-start text-white font-mono text-[10px] tracking-widest uppercase py-2 hover:text-stone-400 transition-colors border-b border-transparent hover:border-stone-400">
                SUBSCRIBE TO UPDATES
              </button>
            </form>
          </div>
          
          <div className="md:col-span-3 md:col-start-7 space-y-8">
            <h4 className="font-mono text-stone-600 text-[10px] tracking-widest uppercase">Directory</h4>
            <ul className="space-y-4 font-mono text-stone-400 text-xs tracking-wider uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Artists</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Releases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Method</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="font-mono text-stone-600 text-[10px] tracking-widest uppercase">Contact</h4>
            <ul className="space-y-6 font-mono text-stone-400 text-xs tracking-wider uppercase">
              <li>
                <a href="mailto:info@jbrcreativegroup.com" className="hover:text-white transition-colors block">info@jbrcreativegroup.com</a>
              </li>
              <li>
                <a href="mailto:mgmt@jbrcreativegroup.com" className="hover:text-white transition-colors block">mgmt@jbrcreativegroup.com</a>
              </li>
            </ul>
            <div className="flex gap-6 pt-4">
              <a href="#" className="text-stone-500 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-stone-500 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-stone-500 hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="max-w-[100rem] mx-auto mt-32 pt-8 border-t border-stone-900/50 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] tracking-widest uppercase text-stone-600">
          <p>&copy; {new Date().getFullYear()} JBR Creative Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
