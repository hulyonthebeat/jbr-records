import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, User, ArrowRight, ChevronRight, Instagram, Twitter, Youtube, Menu, X } from "lucide-react";

const ROSTER = [
  {
    name: "eric benét",
    image: "/__mockup/images/jbr/eric-benet-portrait.jpg",
  },
  {
    name: "joe leone",
    image: "/__mockup/images/jbr/joe-leone-jbr.jpg",
  },
  {
    name: "autumn paige",
    image: "/__mockup/images/jbr/autumn-paige-portrait.jpg",
  },
];

const NEWS = [
  {
    date: "10.12.24",
    title: "eric benét & chanté moore announce 'duets' collaborative album",
    image: "/__mockup/images/jbr/eric-benet.jpg",
  },
  {
    date: "09.28.24",
    title: "joe leone's 'discipline' debuts at #1 on traditional jazz charts",
    image: "/__mockup/images/jbr/joe-leone.jpg",
  },
  {
    date: "08.15.24",
    title: "jbr creative group launches as a new sanctuary for analog soul",
    image: "/__mockup/images/jbr/jbr-banner.png",
  }
];

export function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden lowercase">
      
      {/* Top Promo Strip */}
      <div className="bg-[#F8B830] text-black py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
        new — duets, the eric benét + chanté moore collaborative album, out now. <a href="#" className="underline font-bold hover:no-underline">listen now.</a>
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-black border-b border-white/10 px-6 py-4 md:py-6">
        <div className="max-w-[120rem] mx-auto flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo (Left on mobile, Center on desktop - Wait, client wants centered logo, spread out nav. Let's do left nav, center logo, right icons for desktop) */}
          <div className="hidden md:flex flex-1 items-center gap-8 text-sm font-semibold tracking-tight">
            <a href="#about" className="hover:text-stone-400 transition-colors">about</a>
            <a href="#new" className="hover:text-stone-400 transition-colors">new</a>
            <a href="#artists" className="hover:text-stone-400 transition-colors">artists</a>
            <a href="#music" className="hover:text-stone-400 transition-colors">music</a>
          </div>

          <div className="flex-shrink-0 cursor-pointer text-center md:flex-1 md:flex md:justify-center">
            {/* Using text logo to match Republic's simple lowercase wordmark, or original image if preferred. Client said: "use a clean lowercase wordmark 'jbr creative group' in white text" */}
            <span className="text-2xl md:text-3xl font-black tracking-tighter">jbr creative group</span>
          </div>

          <div className="flex flex-1 items-center justify-end gap-6 text-sm font-semibold tracking-tight">
            <div className="hidden md:flex gap-8 mr-8">
              <a href="#news" className="hover:text-stone-400 transition-colors">news</a>
              <a href="#contact" className="hover:text-stone-400 transition-colors">contact</a>
            </div>
            <button className="hover:text-stone-400 transition-colors"><Search className="w-5 h-5" /></button>
            <button className="hover:text-stone-400 transition-colors hidden md:block"><User className="w-5 h-5" /></button>
            <button className="hover:text-stone-400 transition-colors"><ShoppingCart className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl shadow-black">
            <a href="#about" className="text-lg font-bold hover:text-stone-400 transition-colors">about</a>
            <a href="#new" className="text-lg font-bold hover:text-stone-400 transition-colors">new</a>
            <a href="#artists" className="text-lg font-bold hover:text-stone-400 transition-colors">artists</a>
            <a href="#music" className="text-lg font-bold hover:text-stone-400 transition-colors">music</a>
            <a href="#news" className="text-lg font-bold hover:text-stone-400 transition-colors">news</a>
            <a href="#contact" className="text-lg font-bold hover:text-stone-400 transition-colors">contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh] w-full bg-stone-900 group cursor-pointer overflow-hidden">
        <img 
          src="/__mockup/images/jbr/eric-benet-hero.jpg" 
          alt="eric benét & chanté moore" 
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%] transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-6 md:p-16 max-w-4xl z-10">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#F8B830] mb-4 uppercase">new release</p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.85] mb-3 drop-shadow-lg">
            duets
          </h1>
          <p className="text-lg md:text-2xl font-semibold tracking-tight mb-8 text-white/90 drop-shadow">
            eric benét with chanté moore
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-4 text-sm font-bold tracking-tight hover:bg-stone-200 transition-colors rounded-none">
              listen to duets
            </button>
            <button className="border-2 border-white text-white bg-transparent px-8 py-4 text-sm font-bold tracking-tight hover:bg-white hover:text-black transition-colors rounded-none">
              buy vinyl
            </button>
          </div>
        </div>
      </section>

      {/* Artists Carousel — Republic-style row */}
      <section id="artists" className="py-16 md:py-20 bg-black relative">
        <div className="px-4 md:px-8 max-w-[120rem] mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">

              {/* Lead "explore" card */}
              <motion.a
                href="#artists"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col bg-black border border-white/10 hover:border-white/30 transition-colors"
              >
                <div className="flex-1 flex flex-col justify-center p-8 md:p-10 min-h-[18rem] md:min-h-[22rem]">
                  <p className="text-xs font-bold tracking-[0.2em] text-[#F8B830] mb-4 uppercase">explore</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white">
                    our<br />artists
                  </h2>
                </div>
                <div className="bg-white text-black px-6 py-5 text-center text-sm font-bold tracking-tight group-hover:bg-stone-200 transition-colors">
                  explore all
                </div>
              </motion.a>

              {/* Artist cards */}
              {ROSTER.map((artist, i) => (
                <motion.a
                  href="#"
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
                      shop now
                    </span>
                  </div>
                </motion.a>
              ))}

            </div>

            {/* Right-side scroll cue (decorative, like Republic's chevron) */}
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

      {/* Featured Release */}
      <section className="py-12 px-4 md:px-8 max-w-[120rem] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-[21/9] overflow-hidden bg-stone-900 group cursor-pointer"
        >
          <img 
            src="/__mockup/images/jbr/autumn-paige.jpg" 
            alt="autumn paige featured" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-16">
            <p className="text-sm font-bold tracking-widest text-[#F8B830] mb-4">new release</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              autumn paige<br />the studio sessions
            </h2>
            <button className="bg-white text-black px-8 py-4 text-sm font-bold tracking-tight hover:bg-stone-200 transition-colors rounded-none">
              explore collection
            </button>
          </div>
        </motion.div>
      </section>

      {/* News Grid */}
      <section id="news" className="py-24 px-4 md:px-8 max-w-[120rem] mx-auto">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12">news & releases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {NEWS.map((item, i) => (
            <motion.a 
              href="#"
              key={i}
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
              <p className="text-stone-500 font-bold text-sm mb-3">{item.date}</p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight group-hover:text-stone-300 transition-colors">
                {item.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-4 md:px-8 bg-stone-900 border-y border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">get the latest.</h2>
          <p className="text-stone-400 font-medium mb-10">sign up for exclusive updates, early access to vinyl drops, and tour pre-sales.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="email address" 
              className="bg-black border border-white/20 px-6 py-4 flex-1 max-w-md text-white placeholder:text-stone-600 focus:outline-none focus:border-white transition-colors rounded-none text-sm font-bold tracking-wide"
              required
            />
            <button type="submit" className="bg-white text-black px-10 py-4 text-sm font-bold tracking-tight hover:bg-stone-200 transition-colors rounded-none whitespace-nowrap">
              subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-4 md:px-8 max-w-[120rem] mx-auto border-t border-white/10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter mb-6">jbr creative group</h3>
            <p className="text-stone-500 font-medium text-sm leading-relaxed mb-8">
              an independent label dedicated to modern artists making timeless records. based in los angeles, ca.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-stone-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white hover:text-stone-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-white hover:text-stone-400 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-stone-500 mb-6">artists</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#" className="hover:text-stone-400 transition-colors">eric benét</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">joe leone</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">autumn paige</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-500 mb-6">store</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#" className="hover:text-stone-400 transition-colors">music</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">merch</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">new arrivals</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">best sellers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-500 mb-6">support</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#" className="hover:text-stone-400 transition-colors">contact us</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">faq</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">shipping & returns</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">privacy policy</a></li>
              <li><a href="#" className="hover:text-stone-400 transition-colors">terms of service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-stone-600 pt-8 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} jbr creative group. all rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">do not sell my personal info</a>
            <a href="#" className="hover:text-white transition-colors">accessibility</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
