import { Link, useLocation } from "wouter";
import { Instagram, Twitter, Youtube, Mail, MapPin } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\//, "")}`;
const home = (hash?: string) =>
  hash ? `${BASE.replace(/\/$/, "")}/#${hash}` : BASE;

const ROSTER = [
  { name: "eric benét", listen: "https://ericbenet.lnk.to/music" },
  { name: "joe leone", listen: "https://joeleone.lnk.to/music" },
  { name: "autumn paige", listen: "https://autumnpaige.lnk.to/music" },
];

export default function Footer() {
  const [location] = useLocation();
  const onHome = location === "/" || location === "";

  const goSection =
    (id: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!onHome) return;
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

  return (
    <footer className="bg-black border-t border-white/10 py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-[120rem] mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <Link
            href="/"
            className="block mb-6"
            aria-label="jbr creative group — home"
          >
            <img
              src={asset("images/jbr/jbr-logo-color.png")}
              alt="jbr creative group"
              className="h-12 w-auto"
            />
          </Link>
          <p className="text-sm text-stone-400 leading-relaxed font-medium max-w-xs">
            independent music label based in los angeles. records, made with
            intention.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors"
              aria-label="instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors"
              aria-label="twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors"
              aria-label="youtube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-stone-500 mb-6">label</h4>
          <ul className="space-y-4 font-bold text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-stone-400 transition-colors"
              >
                about
              </Link>
            </li>
            <li>
              <a
                href={home("artists")}
                onClick={goSection("artists")}
                className="hover:text-stone-400 transition-colors"
              >
                artists
              </a>
            </li>
            <li>
              <a
                href={home("contact")}
                onClick={goSection("contact")}
                className="hover:text-stone-400 transition-colors"
              >
                contact
              </a>
            </li>
            <li>
              <a
                href="mailto:info@jbrcreativegroup.com"
                className="hover:text-stone-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-3 h-3" /> press
              </a>
            </li>
          </ul>
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
                href={home("music")}
                onClick={goSection("music")}
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
                href={home("new")}
                onClick={goSection("new")}
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
                href={home("contact")}
                onClick={goSection("contact")}
                className="hover:text-stone-400 transition-colors flex items-center gap-2"
              >
                <MapPin className="w-3 h-3" /> contact us
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

      <div className="max-w-[120rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-stone-600 pt-8 border-t border-white/10">
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
  );
}
