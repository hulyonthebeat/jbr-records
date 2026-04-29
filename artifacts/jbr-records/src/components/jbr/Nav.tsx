import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\//, "")}`;
const home = (hash?: string) =>
  hash ? `${BASE.replace(/\/$/, "")}/#${hash}` : BASE;

type Props = {
  showPromo?: boolean;
};

export default function Nav({ showPromo = true }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const onHome = location === "/" || location === "";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const goSection =
    (id: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!onHome) return; // let browser navigate to /#id
      e.preventDefault();
      setMobileMenuOpen(false);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

  return (
    <>
      {showPromo && (
        <div className="bg-[#F8B830] text-black py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
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

      <nav className="sticky top-0 z-50 bg-black border-b border-white/10 px-6 py-4 md:py-6">
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
            <a
              href={home("new")}
              onClick={goSection("new")}
              className="hover:text-stone-400 transition-colors"
            >
              new
            </a>
            <a
              href={home("artists")}
              onClick={goSection("artists")}
              className="hover:text-stone-400 transition-colors"
            >
              artists
            </a>
            <a
              href={home("music")}
              onClick={goSection("music")}
              className="hover:text-stone-400 transition-colors"
            >
              music
            </a>
          </div>

          <Link
            href="/"
            className="flex-shrink-0 cursor-pointer text-center md:flex-1 md:flex md:justify-center"
            aria-label="jbr creative group — home"
          >
            <img
              src={asset("images/jbr/jbr-logo-color.png")}
              alt="jbr creative group"
              className="h-11 md:h-14 w-auto"
            />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-6 text-sm font-semibold tracking-tight">
            <div className="hidden md:flex gap-8 mr-8">
              <Link
                href="/about"
                className={`hover:text-stone-400 transition-colors ${
                  location === "/about" ? "text-[#F8B830]" : ""
                }`}
              >
                about
              </Link>
              <a
                href={home("contact")}
                onClick={goSection("contact")}
                className="hover:text-stone-400 transition-colors"
              >
                contact
              </a>
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
            <a
              href={home("new")}
              onClick={goSection("new")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              new
            </a>
            <a
              href={home("artists")}
              onClick={goSection("artists")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              artists
            </a>
            <a
              href={home("music")}
              onClick={goSection("music")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              music
            </a>
            <Link
              href="/about"
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              about
            </Link>
            <a
              href={home("contact")}
              onClick={goSection("contact")}
              className="text-lg font-bold hover:text-stone-400 transition-colors"
            >
              contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
