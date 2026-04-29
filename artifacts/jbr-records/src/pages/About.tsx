import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/jbr/Nav";
import Footer from "@/components/jbr/Footer";

const BASE = import.meta.env.BASE_URL;
const home = (hash?: string) =>
  hash ? `${BASE.replace(/\/$/, "")}/#${hash}` : BASE;

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden lowercase">
      <Nav showPromo={false} />

      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-24 md:pt-36 pb-16 md:pb-24 border-b border-white/10">
        <div className="max-w-[120rem] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#F8B830] mb-6 uppercase"
          >
            about jbr creative group
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] max-w-5xl"
          >
            records,<br />made with<br />intention.
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-[120rem] mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-4">
            <p className="text-xs font-bold tracking-[0.2em] text-[#F8B830] mb-6 uppercase">
              the label
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight">
              based in los angeles. built for the long catalog.
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
            <p>we are not chasing trends. we are building a catalog.</p>
            <a
              href={home("contact")}
              className="inline-flex items-center gap-2 mt-4 text-sm font-bold tracking-tight text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              get in touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 md:px-16 py-16 md:py-24 bg-stone-950 border-y border-white/10">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                k: "01",
                t: "artist-first",
                d: "creative control stays with the artist. we provide the room, the resources, and the runway — not the script.",
              },
              {
                k: "02",
                t: "real records",
                d: "long-form sessions, no rush, no algorithm-chasing. records made to live longer than a release week.",
              },
              {
                k: "03",
                t: "a catalog, not a moment",
                d: "we sign for careers, not singles. every release is a chapter we expect to still matter ten years from now.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t border-white/15 pt-6"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-[#F8B830] mb-4 uppercase">
                  {p.k}
                </p>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4">
                  {p.t}
                </h3>
                <p className="text-stone-400 leading-relaxed font-medium">
                  {p.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roster cross-link */}
      <section className="px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-[120rem] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#F8B830] mb-4 uppercase">
              the roster
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
              eric benét. joe leone.<br />autumn paige.
            </h2>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm font-bold tracking-tight bg-white text-black px-8 py-4 hover:bg-stone-200 transition-colors self-start md:self-auto"
          >
            meet our artists <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
