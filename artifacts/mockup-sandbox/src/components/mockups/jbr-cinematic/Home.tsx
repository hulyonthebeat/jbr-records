import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, Instagram, Twitter, Youtube, Music, Disc3, Mic2, Radio } from "lucide-react";

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
    date: "OCT 12, 2024",
    title: "Eric Benét & Chanté Moore Announce 'Duets' Collaborative Album",
    source: "Billboard",
  },
  {
    date: "SEP 28, 2024",
    title: "Joe Leone's 'Discipline' Debuts at #1 on Traditional Jazz Charts",
    source: "Jazz Times",
  },
  {
    date: "AUG 15, 2024",
    title: "JBR Creative Group Launches as a New Sanctuary for Analog Soul",
    source: "Variety",
  }
];

// --- Components ---

const FilmGrain = () => (
  <div 
    className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

const CinematicImage = ({ src, alt, className = "", imgClassName = "" }: { src: string, alt: string, className?: string, imgClassName?: string }) => (
  <div className={`relative overflow-hidden ${className}`}>
    {/* Base image */}
    <img 
      src={src} 
      alt={alt} 
      className={`absolute inset-0 w-full h-full object-cover grayscale brightness-75 contrast-[1.1] mix-blend-luminosity ${imgClassName}`}
    />
    {/* Amber/Gold color tint overlay */}
    <div className="absolute inset-0 bg-[#3a1a00] mix-blend-color opacity-[0.85]" />
    <div className="absolute inset-0 bg-[#1a0a00] mix-blend-multiply opacity-40" />
    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,2,0,0.8)_100%)]" />
  </div>
);

export function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="min-h-screen bg-[#050302] text-stone-300 font-sans selection:bg-[#b58900] selection:text-[#050302] overflow-x-hidden">
      <FilmGrain />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-8 py-8 flex justify-between items-center mix-blend-difference text-stone-200">
        <div className="w-32 md:w-40 transition-transform hover:scale-105 duration-700 cursor-pointer origin-left">
          <img src="/__mockup/images/jbr/jbr-logo.png" alt="JBR Creative Group" className="w-full h-auto opacity-90" />
        </div>
        <div className="hidden md:flex gap-10 text-[10px] md:text-xs tracking-[0.25em] uppercase font-light">
          <a href="#ethos" className="hover:text-[#b58900] transition-colors duration-500">Ethos</a>
          <a href="#roster" className="hover:text-[#b58900] transition-colors duration-500">Roster</a>
          <a href="#news" className="hover:text-[#b58900] transition-colors duration-500">News</a>
          <a href="#contact" className="hover:text-[#b58900] transition-colors duration-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0 origin-bottom"
        >
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="w-full h-full"
          >
            <CinematicImage 
              src="/__mockup/images/jbr/eric-benet-hero.jpg" 
              alt="Eric Benet" 
              className="w-full h-full opacity-90"
              imgClassName="object-[50%_30%]"
            />
          </motion.div>
        </motion.div>

        {/* Cinematic Letterboxing Borders */}
        <div className="absolute top-0 inset-x-0 h-[10vh] bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[20vh] bg-gradient-to-t from-[#050302] to-transparent z-10 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="text-[#b58900] tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-8 font-medium"
          >
            Independent Music Label
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1.5, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-stone-100 leading-[0.9] tracking-tight drop-shadow-2xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Real Voices.<br />
            <span className="italic text-stone-400 font-light drop-shadow-2xl">Real Records.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 96 }}
            transition={{ delay: 2.5, duration: 1.5, ease: "easeInOut" }}
            className="mt-20 w-[1px] bg-gradient-to-b from-[#b58900] to-transparent overflow-hidden"
          >
            <motion.div 
              animate={{ y: [0, 96, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="w-full h-1/3 bg-white"
            />
          </motion.div>
        </div>
      </section>

      {/* Ethos Section */}
      <section id="ethos" className="relative py-32 md:py-48 px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-12 gap-16 md:gap-8 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="md:col-span-5 space-y-12"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#b58900]" />
              <span className="text-[#b58900] text-xs tracking-[0.3em] uppercase">The Foundation</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-stone-100 leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Craftsmanship <br/>
              <span className="text-stone-500 italic font-light">Over Content.</span>
            </h2>
            <div className="space-y-8 text-stone-400 text-lg leading-relaxed font-light">
              <p>
                Founded by industry veteran Joey Battaglia, JBR Creative Group was built on a singular premise: great music requires time, space, and analog soul.
              </p>
              <p>
                We are not a playlist factory. We are a sanctuary for artists who still believe in the album format, the studio band, and the raw power of an unedited vocal take. From R&B legends to rising contemporary stars, our roster is united by a commitment to timeless musicality.
              </p>
            </div>
            <button className="group flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-stone-200 mt-12 pb-3 border-b border-stone-800 hover:border-[#b58900] transition-colors duration-500">
              <span>Read Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500 text-[#b58900]" />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="md:col-span-6 md:col-start-7 relative aspect-[3/4] w-full max-w-lg mx-auto"
          >
            <CinematicImage 
              src="/__mockup/images/jbr/joe-leone-jbr.jpg" 
              alt="In the studio" 
              className="w-full h-full object-cover"
            />
            {/* Decorative film frame corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#b58900]/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#b58900]/50" />
            
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#050302] border border-stone-800 flex items-center justify-center rounded-full p-6 z-10 hidden md:flex">
              <motion.img 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                src="/__mockup/images/jbr/jbr-logo.png" 
                alt="JBR Mark" 
                className="w-full opacity-30" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Process / Analog */}
      <section className="py-24 bg-[#0a0705] border-y border-stone-900 relative">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12 text-center md:text-left">
          {[
            { icon: Disc3, title: "The Record", desc: "We believe in albums as complete thoughts, meant to be experienced from start to finish." },
            { icon: Mic2, title: "The Take", desc: "No auto-tune grids. We capture the raw, emotional performance exactly as it happened in the room." },
            { icon: Radio, title: "The Sound", desc: "Warm tubes, real instruments, and analog mixing for a sonic depth that streaming algorithms can't replicate." },
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="space-y-6"
            >
              <item.icon className="w-8 h-8 text-[#b58900] mx-auto md:mx-0 opacity-80" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-stone-200" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roster Spotlight */}
      <section id="roster" className="py-32 md:py-48 relative z-10">
        <div className="px-8 max-w-7xl mx-auto mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#b58900]" />
              <span className="text-[#b58900] text-xs tracking-[0.3em] uppercase">Artists</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-100 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The <span className="italic text-[#b58900] font-light">Roster</span>
            </h2>
          </div>
          <div className="hidden md:block flex-1 max-w-md h-[1px] bg-stone-800 mb-6" />
        </div>

        {/* Horizontal scroll on mobile, staggered grid on desktop */}
        <div className="flex md:grid md:grid-cols-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-20 px-8 max-w-[100rem] mx-auto gap-8 md:gap-x-12 md:gap-y-32">
          {ROSTER.map((artist, i) => {
            // Determine desktop grid placement for staggered look
            const colSpan = i % 3 === 0 ? 'col-span-6' : (i % 3 === 1 ? 'col-span-5 col-start-8' : 'col-span-7 col-start-3');
            const mt = i === 1 ? 'md:mt-32' : (i === 2 ? 'md:-mt-24' : '');
            
            return (
            <motion.div 
              key={artist.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 1.2, ease: "easeOut" }}
              className={`min-w-[85vw] snap-center group cursor-pointer ${colSpan} ${mt}`}
            >
              <div className={`relative ${i % 2 === 0 ? 'aspect-[4/5]' : 'aspect-square'} mb-8 overflow-hidden bg-[#0a0705]`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <CinematicImage 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050302] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <p className="text-[#b58900] text-[10px] tracking-[0.3em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{artist.role}</p>
                    <h3 className="font-serif text-3xl md:text-5xl text-stone-100 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{artist.name}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-stone-600 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#b58900] transition-all duration-500 shrink-0 bg-[#050302]/50 backdrop-blur-sm">
                    <ArrowRight className="w-5 h-5 text-[#b58900]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </section>

      {/* Featured Release / Parallax Banner */}
      <section className="relative py-48 md:py-64 border-y border-stone-900 bg-[#050302] overflow-hidden flex items-center justify-center min-h-[80vh]">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <CinematicImage 
            src="/__mockup/images/jbr/autumn-paige.jpg" 
            alt="Studio Session" 
            className="w-full h-full opacity-20"
            imgClassName="object-center"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="space-y-10"
          >
            <p className="text-[#b58900] text-xs tracking-[0.4em] uppercase font-medium">New Release</p>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-100 leading-[1.1] tracking-tight drop-shadow-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Eric Benét & Chanté Moore<br/>
              <span className="italic text-stone-400 font-light mt-4 block">"Duets"</span>
            </h2>
            <p className="text-stone-300 font-light text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              Two of the most defining voices in R&B history come together for an unforgettable collaborative album recorded live in Los Angeles.
            </p>
            <div className="pt-8">
              <button className="bg-stone-100 text-[#050302] px-10 py-5 text-xs tracking-[0.25em] uppercase hover:bg-[#b58900] hover:text-white transition-all duration-500">
                Listen Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News & Press */}
      <section id="news" className="py-32 md:py-48 px-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <div className="w-12 h-[1px] bg-[#b58900]" />
          <span className="text-[#b58900] text-xs tracking-[0.3em] uppercase">Press & News</span>
        </div>
        
        <div className="space-y-0">
          {NEWS.map((item, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="block group py-10 md:py-16 border-b border-stone-800 hover:border-[#b58900] transition-colors duration-500 relative"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-12 relative z-10">
                <div className="text-stone-500 text-xs tracking-[0.2em] uppercase shrink-0 w-32">
                  {item.date}
                </div>
                <h3 className="font-serif text-2xl md:text-4xl text-stone-200 group-hover:text-white transition-colors duration-500 flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 w-32 text-stone-500">
                  <span className="text-xs uppercase tracking-wider">{item.source}</span>
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:text-[#b58900] group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-[#b58900] transition-colors pb-1 border-b border-transparent hover:border-[#b58900]">
            View All Journal Entries
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-[#0a0705] border-y border-stone-900">
        <div className="max-w-3xl mx-auto px-8 text-center space-y-10">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100" style={{ fontFamily: "'Playfair Display', serif" }}>Join the Inner Circle</h2>
          <p className="text-stone-500 font-light">Exclusive pressings, early access to tickets, and notes from the studio.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto pt-6">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-transparent border-b border-stone-700 px-4 py-4 text-sm tracking-widest text-center md:text-left focus:outline-none focus:border-[#b58900] transition-colors text-stone-200 placeholder:text-stone-600"
            />
            <button type="submit" className="px-8 py-4 bg-stone-900 text-stone-300 text-xs tracking-[0.2em] uppercase hover:bg-[#b58900] hover:text-[#050302] transition-colors border border-stone-800 hover:border-[#b58900]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#050302] pt-32 pb-16 px-8 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-4 space-y-10">
            <img src="/__mockup/images/jbr/jbr-logo.png" alt="JBR Creative Group" className="w-40 opacity-80" />
            <p className="text-stone-500 font-light text-sm max-w-xs leading-relaxed">
              An independent music label dedicated to real voices, real bands, and real records. Established in Los Angeles, California.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-7 space-y-8">
            <h4 className="text-stone-300 text-xs tracking-[0.3em] uppercase">Label</h4>
            <ul className="space-y-4 text-stone-500 text-sm font-light">
              <li><a href="#" className="hover:text-[#b58900] transition-colors">Artists</a></li>
              <li><a href="#" className="hover:text-[#b58900] transition-colors">Releases</a></li>
              <li><a href="#" className="hover:text-[#b58900] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#b58900] transition-colors">Journal</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-8">
            <h4 className="text-stone-300 text-xs tracking-[0.3em] uppercase">Contact</h4>
            <ul className="space-y-6 text-stone-500 text-sm font-light">
              <li>
                <span className="block text-xs tracking-widest uppercase mb-1">General Inquiries</span>
                <a href="mailto:info@jbrcreativegroup.com" className="text-stone-300 hover:text-[#b58900] transition-colors">info@jbrcreativegroup.com</a>
              </li>
              <li>
                <span className="block text-xs tracking-widest uppercase mb-1">Management & Booking</span>
                <a href="mailto:mgmt@jbrcreativegroup.com" className="text-stone-300 hover:text-[#b58900] transition-colors">mgmt@jbrcreativegroup.com</a>
              </li>
            </ul>
            <div className="flex gap-6 pt-6">
              <a href="#" className="text-stone-500 hover:text-[#b58900] transition-colors"><Instagram className="w-5 h-5" strokeWidth={1.5} /></a>
              <a href="#" className="text-stone-500 hover:text-[#b58900] transition-colors"><Twitter className="w-5 h-5" strokeWidth={1.5} /></a>
              <a href="#" className="text-stone-500 hover:text-[#b58900] transition-colors"><Youtube className="w-5 h-5" strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest uppercase text-stone-600 font-light">
          <p>&copy; {new Date().getFullYear()} JBR Creative Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Global CSS for hide-scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
