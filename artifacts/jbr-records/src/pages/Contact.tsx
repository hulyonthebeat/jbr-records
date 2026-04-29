import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Nav from "@/components/jbr/Nav";
import Footer from "@/components/jbr/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden lowercase">
      <Nav />

      <section className="py-24 md:py-32 px-4 md:px-8 max-w-[120rem] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="jbr-rise text-xs font-bold tracking-[0.2em] text-[#C7332E] mb-6 uppercase">
              say hello
            </p>
            <h1 className="jbr-rise jbr-rise-delay-1 text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
              contact
            </h1>
            <div className="space-y-6 text-stone-300 font-medium">
              <div>
                <p className="text-xs font-bold tracking-[0.15em] text-stone-500 uppercase mb-2">
                  email
                </p>
                <a
                  href="mailto:info@jbrcreativegroup.com"
                  className="text-base md:text-lg flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@jbrcreativegroup.com
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            {sent ? (
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
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm font-bold tracking-tight border-b border-white/30 hover:border-white pb-1 transition-colors"
                >
                  send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold tracking-[0.15em] text-stone-500 uppercase mb-2">
                      name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
