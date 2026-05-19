"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="font-serif text-2xl font-bold text-white tracking-tight">
            RP
          </span>
          <span className="hidden sm:block text-[10px] font-light tracking-[0.25em] text-white/60 leading-tight uppercase">
            Design &<br />Construction
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] text-white/70 hover:text-[#6B7A42] uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: lang toggle + mobile menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 border border-white/30 hover:border-[#6B7A42] rounded px-3 py-1.5 transition-colors duration-200"
            aria-label="Change language"
          >
            <span
              className={`text-[11px] font-semibold tracking-widest transition-colors ${
                lang === "es" ? "text-[#6B7A42]" : "text-white/40"
              }`}
            >
              ES
            </span>
            <span className="text-white/30 text-[11px] mx-0.5">|</span>
            <span
              className={`text-[11px] font-semibold tracking-widest transition-colors ${
                lang === "en" ? "text-[#6B7A42]" : "text-white/40"
              }`}
            >
              EN
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-[0.2em] text-white/70 hover:text-[#6B7A42] uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
