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

  const linkClass = "hover:text-white transition-colors";
  const listClass =
    "space-y-4 text-sm font-bold tracking-[0.15em] uppercase text-stone-300";

  return (
    <footer className="bg-black border-t border-white/10 px-6 md:px-10 lg:px-14 pt-14 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-[120rem] mx-auto">
        {/* MOBILE: centered stack (Republic-style). Hidden on md+. */}
        <div className="md:hidden flex flex-col items-center text-center">
          <Link
            href="/"
            className="block mb-6"
            aria-label="jbr creative group — home"
          >
            <img
              src={asset("images/jbr/jbr-logo-color.png")}
              alt="jbr creative group"
              className="h-24 w-auto"
            />
          </Link>

          <div className="flex flex-wrap justify-center gap-5 mb-10">
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

          <nav aria-label="footer site links" className="mb-10">
            <ul className={listClass}>
              <li>
                <Link href="/about" className={linkClass}>about</Link>
              </li>
              <li>
                <a href={home("news")} onClick={goSection("news")} className={linkClass}>news</a>
              </li>
              <li>
                <a href={home("artists")} onClick={goSection("artists")} className={linkClass}>artists</a>
              </li>
              <li>
                <Link href="/music" className={linkClass}>music</Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>contact</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="footer help and legal" className="mb-10">
            <ul className={listClass}>
              <li>
                <a href="mailto:info@jbrcreativegroup.com" className={linkClass}>
                  help &amp; support
                </a>
              </li>
              <li><a href="#" className={linkClass}>terms</a></li>
              <li><a href="#" className={linkClass}>privacy</a></li>
              <li><a href="#" className={linkClass}>do not sell my personal information</a></li>
              <li><a href="#" className={linkClass}>cookie choices</a></li>
            </ul>
          </nav>

          {/* Newsletter (mobile) */}
          <div className="w-full max-w-sm mb-8">
            <p className="text-sm text-stone-200 font-medium leading-relaxed mb-5">
              be the first to know about new music, releases, and exclusive
              offers you can only get from jbr creative group.
            </p>

            {signedUp ? (
              <div className="border border-white/20 px-5 py-4 text-sm text-stone-200 text-left">
                <p className="font-bold tracking-tight">you&apos;re on the list.</p>
                <p className="text-stone-400 mt-1">
                  thanks for subscribing — we&apos;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSignup} className="space-y-4">
                <label className="sr-only" htmlFor="footer-email-m">email</label>
                <input
                  id="footer-email-m"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email"
                  className="w-full bg-black border border-white/30 px-5 py-3.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-white transition-colors rounded-none text-center"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-black px-6 py-3.5 text-sm font-bold tracking-tight hover:bg-stone-200 transition-colors rounded-none"
                >
                  sign up
                </button>
              </form>
            )}
          </div>

          <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-stone-500 mt-2">
            &copy; {new Date().getFullYear()} jbr creative group. all rights
            reserved.
          </p>
        </div>

        {/* DESKTOP: multi-column grid. Hidden on mobile. */}
        <div className="hidden md:grid grid-cols-12 gap-10">
          <div className="col-span-3 flex flex-col items-start">
            <Link
              href="/"
              className="block mb-6"
              aria-label="jbr creative group — home"
            >
              <img
                src={asset("images/jbr/jbr-logo-color.png")}
                alt="jbr creative group"
                className="h-36 lg:h-44 w-auto -ml-3 lg:-ml-5"
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
          </div>

          <nav className="col-span-2 col-start-5" aria-label="footer site links">
            <ul className={listClass}>
              <li><Link href="/about" className={linkClass}>about</Link></li>
              <li>
                <a href={home("news")} onClick={goSection("news")} className={linkClass}>news</a>
              </li>
              <li>
                <a href={home("artists")} onClick={goSection("artists")} className={linkClass}>artists</a>
              </li>
              <li><Link href="/music" className={linkClass}>music</Link></li>
              <li><Link href="/contact" className={linkClass}>contact</Link></li>
            </ul>
          </nav>

          <nav className="col-span-2" aria-label="footer help and legal">
            <ul className={listClass}>
              <li>
                <a href="mailto:info@jbrcreativegroup.com" className={linkClass}>
                  help &amp; support
                </a>
              </li>
              <li><a href="#" className={linkClass}>terms</a></li>
              <li><a href="#" className={linkClass}>privacy</a></li>
              <li><a href="#" className={linkClass}>do not sell my personal information</a></li>
              <li><a href="#" className={linkClass}>cookie choices</a></li>
            </ul>
          </nav>

          <div className="col-span-4">
            <p className="text-sm md:text-base text-stone-200 font-medium leading-relaxed mb-5 max-w-md">
              be the first to know about new music, releases, and exclusive
              offers you can only get from jbr creative group.
            </p>

            {signedUp ? (
              <div className="border border-white/20 px-5 py-4 text-sm text-stone-200 max-w-md">
                <p className="font-bold tracking-tight">you&apos;re on the list.</p>
                <p className="text-stone-400 mt-1">
                  thanks for subscribing — we&apos;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSignup} className="space-y-4 max-w-md">
                <label className="sr-only" htmlFor="footer-email-d">email</label>
                <input
                  id="footer-email-d"
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

          <p className="col-span-12 mt-10 pt-8 border-t border-white/10 text-xs font-bold tracking-[0.18em] uppercase text-stone-500">
            &copy; {new Date().getFullYear()} jbr creative group. all rights
            reserved.
          </p>
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
