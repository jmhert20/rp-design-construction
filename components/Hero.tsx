"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function Hero() {
  const { t } = useLang();
  const { open } = useModal();

  return (
    <section id="home" className="relative min-h-screen flex items-end md:items-center">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90"
        alt="Luxury outdoor living space with fire pit"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24 md:pb-0 w-full">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-[10px] tracking-[0.4em] text-[#6B7A42] uppercase mb-6">
            RP Design &amp; Construction
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white mb-2 uppercase tracking-tight">
            {t.hero.line1}{" "}
            <em className="not-italic text-[#6B7A42]">{t.hero.line1italic}</em>
          </h1>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white mb-8 uppercase tracking-tight">
            {t.hero.line2}{" "}
            <em className="not-italic text-[#6B7A42]">{t.hero.line2italic}</em>
          </h1>

          <p className="text-sm md:text-base text-white/60 leading-relaxed mb-10 max-w-sm">
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={open}
              className="bg-[#6B7A42] text-white text-[11px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300"
            >
              {t.hero.cta}
            </button>
            <a
              href="#services"
              className="border border-white/40 text-white text-[11px] tracking-[0.25em] uppercase px-8 py-4 hover:border-white hover:bg-white/10 transition-colors duration-300"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
