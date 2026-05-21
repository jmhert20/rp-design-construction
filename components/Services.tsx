"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { SERVICE_ITEMS, GALLERY_ITEMS } from "@/translations";

const icons: Record<string, React.ReactElement> = {
  driveway: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="8" y="30" width="24" height="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 30 L16 10 H24 L28 30" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="20" y1="10" x2="20" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  ),
  walkway: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="13" y="6" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="14" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="22" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="30" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  patio: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="6" y="18" width="28" height="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 18 C6 18 10 10 20 10 C30 10 34 18 34 18" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="10" x2="20" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="25" x2="34" y2="25" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  concrete: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="6" y="8" width="28" height="24" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="8" x2="20" y2="32" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  drainage: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M20 6 L20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 14 L20 6 L26 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <ellipse cx="20" cy="31" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  retaining: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="6" y="20" width="28" height="6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="26" width="28" height="6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="14" width="20" height="6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  hardscape: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="6" y="24" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="24" width="16" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="12" width="16" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="24" y="12" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  outdoor: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 34 C8 26 12 22 20 22 C28 22 32 26 32 34" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "3d": (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M20 6 L34 14 L34 28 L20 36 L6 28 L6 14 Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 6 L20 36" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M6 14 L34 14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  ),
  designbuild: (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M8 30 L8 14 L20 8 L32 14 L32 30 L20 36 Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14 L20 20 L32 14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20 L20 36" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="bg-[#111111]">
      {/* Services icons grid */}
      <div className="py-20 px-6">
        <div className="flex items-center gap-4 justify-center mb-14">
          <div className="flex-1 max-w-[100px] h-px bg-[#6B7A42]/60" />
          <p className="text-[11px] tracking-[0.4em] text-[#6B7A42] uppercase font-medium">
            {t.services.label}
          </p>
          <div className="flex-1 max-w-[100px] h-px bg-[#6B7A42]/60" />
        </div>
        <p className="text-center text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-12">
          {t.services.title}
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 gap-8 md:gap-10">
          {SERVICE_ITEMS.map((service) => (
            <div key={service.icon} className="flex flex-col items-center gap-3 group cursor-default">
              <div className="text-white/50 group-hover:text-[#6B7A42] transition-colors duration-300">
                {icons[service.icon]}
              </div>
              <span className="text-[10px] tracking-[0.12em] text-white/40 uppercase text-center leading-tight group-hover:text-white/70 transition-colors duration-300">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.label} className="relative group overflow-hidden aspect-[4/5]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#6B7A42] py-3 px-4">
              <span className="text-[10px] tracking-[0.3em] text-white uppercase font-medium">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
