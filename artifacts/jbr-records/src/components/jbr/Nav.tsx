import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\//, "")}`;
const home = (hash?: string) =>
  hash ? `${BASE.replace(/\/$/, "")}/#${hash}` : BASE;
const musicHref = `${BASE.replace(/\/$/, "")}/music`;

type Props = {
  showPromo?: boolean;
};

export default function Nav({ showPromo = true }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const onHome = location === "/" || location === "";
  const wrapRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (!wrapRef.current) return;
    const update = () => {
      if (wrapRef.current) setNavHeight(wrapRef.current.offsetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrapRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [showPromo, mobileMenuOpen]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (onHome) {
      e.preventDefault();
      try {
        window.history.replaceState(null, "", BASE);
      } catch {}
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Off-home: let Wouter Link handle navigation; ScrollToTop in App will reset scroll.
  };

  const goSection =
    (id: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      if (onHome) {
        scrollToId(id);
        return;
      }
      // Off-home: navigate via Wouter (no full page reload), then scroll once
      // the home page mounts and the section exists.
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

  return (
    <>
      <div style={{ height: navHeight }} aria-hidden="true" />
      <div ref={wrapRef} className="fixed top-0 left-0 right-0 z-50">
      {showPromo && (
        <div className="bg-[#1F4E7C] text-white py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
          new — duets, the eric benét + chanté moore collaborative album, out
          now.{" "}
          <a
            href={home("new")}
            onClick={goSection("new")}
            className="underline font-bold hover:no-underline"
          >
            listen now.
          </a>
        </div>
      )}

      <nav className="bg-black border-b border-white/10 px-6 py-4 md:py-6">
        <div className="max-w-[120rem] mx-auto flex items-center justify-between">
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden md:flex flex-1 items-center gap-8 text-sm font-semibold tracking-tight">
            <Link
              href="/"
              onClick={goHome}
              className={`hover:text-stone-400 transition-colors ${
                onHome ? "text-[#C7332E]" : ""
              }`}
            >
              home
            </Link>
            <Link
              href="/about"
              className={`hover:text-stone-400 transition-colors ${
                location === "/about" ? "text-[#C7332E]" : ""
              }`}
            >
              about
            </Link>
            <a
              href={home("artists")}
              onClick={goSection("artists")}
              className="hover:text-stone-400 transition-colors"
            >
              artists
            </a>
            <Link
              href="/music"
              className={`hover:text-stone-400 transition-colors ${
                location === "/music" ? "text-[#C7332E]" : ""
              }`}
            >
              music
            </Link>
          </div>

          <Link
            href="/"
            onClick={goHome}
            className="flex-shrink-0 cursor-pointer text-center md:flex-1 md:flex md:justify-center"
            aria-label="jbr creative group — home"
          >
            <img
              src={asset("images/jbr/jbr-logo-color.png")}
              alt="jbr creative group"
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-6 text-sm font-semibold tracking-tight">
            <div className="hidden md:flex gap-8 mr-8">
              <a
                href={home("news")}
                onClick={goSection("news")}
                className="hover:text-stone-400 transition-colors"
              >
                news
              </a>
              <Link
                href="/contact"
                className={`hover:text-stone-400 transition-colors ${
                  location === "/contact" ? "text-[#C7332E]" : ""
                }`}
              >
                contact
              </Link>
            </div>
            <button
              className="hover:text-stone-400 transition-colors"
              aria-label="search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="hover:text-stone-400 transition-colors hidden md:block"
              aria-label="account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              className="hover:text-stone-400 transition-colors"
              aria-label="cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl shadow-black">
            <Link
              href="/"
              onClick={goHome}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              home
            </Link>
            <Link
              href="/about"
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              about
            </Link>
            <a
              href={home("artists")}
              onClick={goSection("artists")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              artists
            </a>
            <Link
              href="/music"
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              music
            </Link>
            <a
              href={home("news")}
              onClick={goSection("news")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              news
            </a>
            <Link
              href="/contact"
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              contact
            </Link>
          </div>
        )}
      </nav>
      </div>
    </>
  );
}
