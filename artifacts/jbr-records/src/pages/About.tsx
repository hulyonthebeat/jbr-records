import { useEffect } from "react";
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

      <section className="px-4 md:px-8 py-24 md:py-32 max-w-[120rem] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-[#F8B830] mb-6 uppercase">
              the label
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
              records,<br />made with<br />intention.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg leading-relaxed text-stone-300 font-medium max-w-2xl"
          >
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
