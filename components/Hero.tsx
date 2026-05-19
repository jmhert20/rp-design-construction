"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row">
      {/* Left panel */}
      <div className="flex-1 bg-[#F8F8F4] flex flex-col justify-center px-10 md:px-16 lg:px-24 py-32 md:py-20">
        {/* RP Logo */}
        <div className="mb-8">
          <h1 className="font-serif text-[7rem] md:text-[9rem] font-bold leading-none text-black tracking-tight">
            RP
          </h1>
          <div className="border-t border-black/20 pt-3 mt-1">
            <p className="text-sm md:text-base font-light tracking-[0.3em] text-black uppercase">
              DESIGN &amp; CONSTRUCTION
            </p>
            <div className="h-px bg-black/20 my-2" />
            <p className="text-[11px] tracking-[0.35em] text-[#6B7A42] uppercase font-medium">
              {t.hero.tagline}
            </p>
          </div>
        </div>

        {/* Headline */}
        <div className="mb-6">
          <div className="w-8 h-0.5 bg-black/30 mb-5" />
          <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight text-black uppercase">
            {t.hero.headline1}
            <br />
            {t.hero.headline2}
            <br />
            <span className="text-[#6B7A42]">{t.hero.headline3}</span>
          </h2>
          <div className="w-8 h-0.5 bg-black/30 mt-5" />
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-black/60 leading-relaxed max-w-xs mb-8">
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#services"
            className="bg-black text-white text-[11px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#6B7A42] transition-colors duration-300"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="border border-black text-black text-[11px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-black hover:text-white transition-colors duration-300"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>

      {/* Right panel — hero image */}
      <div className="flex-1 relative min-h-[50vh] md:min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85"
          alt="Luxury outdoor living space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </section>
  );
}
