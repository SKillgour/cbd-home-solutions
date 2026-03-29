"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";

export default function CBDHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-primary)] shadow-lg shadow-black/20"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="font-extrabold tracking-tight text-white text-[1.05rem] md:text-[1.15rem]"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
            >
              CBD HOME SOLUTIONS
            </span>
            <span className="text-[0.65rem] text-white/60 tracking-widest uppercase mt-0.5 font-medium">
              Manawatu&apos;s Trusted Trades
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="cbd-nav-link text-white/90">
              Services
            </Link>
            <Link href="/contact" className="cbd-nav-link text-white/90">
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0800222249"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 font-semibold text-sm"
            >
              <Phone size={15} className="text-[var(--color-accent)]" />
              0800 22 22 49
            </a>
            <Link href="/contact" className="cbd-btn-primary text-sm py-2.5 px-5">
              Get a Quote
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={[
                "block w-6 h-0.5 bg-white transition-transform duration-200",
                menuOpen ? "rotate-45 translate-y-2" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-0.5 bg-white transition-opacity duration-200",
                menuOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-0.5 bg-white transition-transform duration-200",
                menuOpen ? "-rotate-45 -translate-y-2" : "",
              ].join(" ")}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[var(--color-primary)] border-t border-white/10 py-4 flex flex-col gap-4">
            <Link
              href="/services"
              className="text-white/90 font-medium px-2 py-1.5 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white/90 font-medium px-2 py-1.5 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:0800222249"
              className="flex items-center gap-2 text-white/90 font-semibold px-2 py-1.5 hover:text-white transition-colors"
            >
              <Phone size={15} className="text-[var(--color-accent)]" />
              0800 22 22 49
            </a>
            <Link
              href="/contact"
              className="cbd-btn-primary text-sm mx-2"
              onClick={() => setMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
