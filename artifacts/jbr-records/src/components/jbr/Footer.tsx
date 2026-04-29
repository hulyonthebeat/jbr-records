import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Instagram, Facebook, Youtube } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\//, "")}`;
const home = (hash?: string) =>
  hash ? `${BASE.replace(/\/$/, "")}/#${hash}` : BASE;

const SOCIALS: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    href: "https://www.facebook.com/jbrcreativegroup1/",
    label: "facebook",
    Icon: Facebook,
  },
  {
    href: "https://twitter.com/jbrcreativegrp",
    label: "x (twitter)",
    Icon: XIcon,
  },
  {
    href: "https://www.instagram.com/jbrcreativegroup/",
    label: "instagram",
    Icon: Instagram,
  },
  {
    href: "https://youtube.com/@JBRcreativegroup",
    label: "youtube",
    Icon: Youtube,
  },
  {
    href: "https://tiktok.com/@jbrcreativegroup",
    label: "tiktok",
    Icon: TikTokIcon,
  },
];

export default function Footer() {
  const [location, setLocation] = useLocation();
  const onHome = location === "/" || location === "";
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const goSection =
    (id: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onHome) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      try {
        window.history.replaceState(
          null,
          "",
          `${BASE.replace(/\/$/, "")}/#${id}`,
        );
      } catch {}
      setLocation("/");
      const tryScroll = (attempts: number) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts > 0) {
          requestAnimationFrame(() => tryScroll(attempts - 1));
        }
      };
      requestAnimationFrame(() => tryScroll(20));
    };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSignedUp(true);
    setEmail("");
  };

  return (
    <footer className="bg-black border-t border-white/10 px-6 md:px-10 lg:px-14 pt-16 md:pt-20 pb-10">
      <div className="max-w-[120rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
        {/* Brand: big logo + socials + copyright */}
        <div className="md:col-span-3 flex flex-col items-start">
          <Link
            href="/"
            className="block mb-6"
            aria-label="jbr creative group — home"
          >
            <img
              src={asset("images/jbr/jbr-logo-color.png")}
              alt="jbr creative group"
              className="h-24 md:h-28 w-auto"
            />
          </Link>

          <div className="flex flex-wrap gap-5 mb-7">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-[0.7rem] md:text-xs font-bold tracking-[0.18em] uppercase text-stone-500">
            &copy; {new Date().getFullYear()} jbr creative group. all rights
            reserved.
          </p>
        </div>

        {/* Site links */}
        <nav
          className="md:col-span-2 md:col-start-5"
          aria-label="footer site links"
        >
          <ul className="space-y-4 text-sm font-bold tracking-[0.15em] uppercase text-stone-300">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                about
              </Link>
            </li>
            <li>
              <a
                href={home("news")}
                onClick={goSection("news")}
                className="hover:text-white transition-colors"
              >
                news
              </a>
            </li>
            <li>
              <a
                href={home("artists")}
                onClick={goSection("artists")}
                className="hover:text-white transition-colors"
              >
                artists
              </a>
            </li>
            <li>
              <Link
                href="/music"
                className="hover:text-white transition-colors"
              >
                music
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Help & legal */}
        <nav className="md:col-span-2" aria-label="footer help and legal">
          <ul className="space-y-4 text-sm font-bold tracking-[0.15em] uppercase text-stone-300">
            <li>
              <a
                href="mailto:info@jbrcreativegroup.com"
                className="hover:text-white transition-colors"
              >
                help &amp; support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                do not sell my personal information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                cookie choices
              </a>
            </li>
          </ul>
        </nav>

        {/* Newsletter signup */}
        <div className="md:col-span-4">
          <p className="text-sm md:text-base text-stone-200 font-medium leading-relaxed mb-5 max-w-md">
            be the first to know about new music, releases, and exclusive offers
            you can only get from jbr creative group.
          </p>

          {signedUp ? (
            <div className="border border-white/20 px-5 py-4 text-sm text-stone-200">
              <p className="font-bold tracking-tight">you&apos;re on the list.</p>
              <p className="text-stone-400 mt-1">
                thanks for subscribing — we&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4 max-w-md">
              <label className="sr-only" htmlFor="footer-email">
                email
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
                className="w-full bg-black border border-white/30 px-5 py-3.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-white transition-colors rounded-none"
              />
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-stone-400">
                get updates &amp; offers from jbr creative group
              </p>
              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3.5 text-sm font-bold tracking-tight hover:bg-stone-200 transition-colors rounded-none"
              >
                sign up
              </button>
            </form>
          )}
        </div>
      </div>
    </footer>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.91a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31Z" />
    </svg>
  );
}
