import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/jbr/Nav";
import Footer from "@/components/jbr/Footer";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\//, "")}`;
const home = (hash?: string) =>
  hash ? `${BASE.replace(/\/$/, "")}/#${hash}` : BASE;

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden lowercase">
      <Nav showPromo={false} />

      {/* Hero — giant title left, founders photo right */}
      <section className="relative px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-20 md:pb-28 border-b border-white/10">
        <div className="max-w-[120rem] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Title + body copy */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-black tracking-tighter leading-[0.85] uppercase"
            >
              jbr<br />creative<br />group
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 md:mt-14 space-y-5 text-base md:text-lg leading-relaxed text-stone-300 font-medium max-w-2xl"
            >
              <p>
                jbr creative group is a multidisciplinary powerhouse that's
                revolutionizing the future of entertainment. combining over
                three decades of industry experience, jbr is the brainchild of
                grammy-nominated neo-soul act eric benét and veteran
                entertainment executive alison ball. together, benét and ball
                are pioneering a significant change in the music, film/tv, and
                tech industries.
              </p>
              <p>
                with an emphasis on empowering the creative community, jbr
                champions an equal playing field and aims to uplift artists
                through innovative technology. since its inception, the agency
                has routinely shared knowledge and resources with the online
                community, introducing state-of-the-art solutions to the many
                challenges that emerging artists and legacy acts face as a
                result of the recent paradigm shift in the music industry.
              </p>
              <p>
                the highlight of their cutting-edge approach lies in the
                development of their new acts joe leone and autumn paige.
                through collaboration on an ambitious venture, jbr is uplifting
                the creator economy by fostering transparency and serving as a
                beacon of trail-blazing innovation. with a shared determination
                to create real change, jbr creative group is making a lasting
                impact on the culture at large.
              </p>
            </motion.div>
          </div>

          {/* Founders duo photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-900">
              <img
                src={asset("images/jbr/about/founders-duo.png")}
                alt="eric benét and alison ball, founders of jbr creative group"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-stone-950 border-b border-white/10">
        <div className="max-w-[120rem] mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-[#C7332E] mb-10 md:mb-14 uppercase">
            leadership
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl">
            {[
              {
                name: "eric benét",
                title: "president",
                img: "images/jbr/about/eric-benet-portrait.jpg",
              },
              {
                name: "alison ball",
                title: "ceo",
                img: "images/jbr/about/alison-ball-portrait.jpg",
              },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-900 mb-5">
                  <img
                    src={asset(person.img)}
                    alt={person.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                  {person.name}
                </h3>
                <p className="text-sm md:text-base text-stone-400 font-semibold tracking-tight mt-1">
                  {person.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roster cross-link */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-[120rem] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#C7332E] mb-4 uppercase">
              the roster
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
              eric benét. joe leone.
              <br />
              autumn paige.
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
