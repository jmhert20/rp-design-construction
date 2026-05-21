"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const { open } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="font-serif text-2xl font-bold text-white leading-none">RP</span>
          <span className="hidden sm:block text-[9px] font-light tracking-[0.22em] text-white/50 leading-tight uppercase">
            Design &<br />Construction
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] tracking-[0.18em] text-white/60 hover:text-[#6B7A42] uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: lang toggle + CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 border border-white/20 hover:border-[#6B7A42] rounded px-2.5 py-1.5 transition-colors duration-200"
          >
            <span className={`text-[10px] font-semibold tracking-widest ${lang === "es" ? "text-[#6B7A42]" : "text-white/35"}`}>ES</span>
            <span className="text-white/25 text-[10px]">|</span>
            <span className={`text-[10px] font-semibold tracking-widest ${lang === "en" ? "text-[#6B7A42]" : "text-white/35"}`}>EN</span>
          </button>

          <button
            onClick={open}
            className="hidden md:block bg-[#6B7A42] text-white text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-white hover:text-black transition-colors duration-200"
          >
            {t.nav.cta}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-[0.2em] text-white/60 hover:text-[#6B7A42] uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); open(); }}
            className="self-start bg-[#6B7A42] text-white text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 mt-2"
          >
            {t.nav.cta}
          </button>
        </div>
      )}
    </nav>
  );
}
