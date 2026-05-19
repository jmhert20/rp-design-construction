"use client";

import { useLang } from "@/context/LanguageContext";

const icons: Record<string, React.ReactElement> = {
  driveway: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="8" y="30" width="24" height="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 30 L16 10 H24 L28 30" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="20" y1="10" x2="20" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  ),
  walkway: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="13" y="6" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="14" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="22" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="30" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  patio: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="6" y="18" width="28" height="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 18 C6 18 10 10 20 10 C30 10 34 18 34 18" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="10" x2="20" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="25" x2="34" y2="25" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  concrete: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="6" y="8" width="28" height="24" stroke="currentColor" strokeWidth="1.5" />
      <line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="8" x2="20" y2="32" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  drainage: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M20 6 L20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 14 L20 6 L26 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <ellipse cx="20" cy="31" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="22" x2="12" y2="28" stroke="currentColor" strokeWidth="1" />
      <line x1="24" y1="22" x2="28" y2="28" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  retaining: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="6" y="20" width="28" height="6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="26" width="28" height="6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="14" width="20" height="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 14 Q10 8 20 8 Q30 8 34 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  hardscape: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <rect x="6" y="24" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="24" width="16" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="12" width="16" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="24" y="12" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  outdoor: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 34 C8 26 12 22 20 22 C28 22 32 26 32 34" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="6" x2="20" y2="4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="28" y1="10" x2="30" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="10" x2="10" y2="8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "3d": (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M20 6 L34 14 L34 28 L20 36 L6 28 L6 14 Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 6 L20 36" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M6 14 L34 14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M20 6 L6 14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 6 L34 14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  designbuild: (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path d="M8 30 L8 14 L20 8 L32 14 L32 30 L20 36 Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14 L20 20 L32 14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20 L20 36" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
    </svg>
  ),
};

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="bg-[#111111] py-24 px-6">
      {/* Header */}
      <div className="flex items-center gap-4 justify-center mb-16">
        <div className="flex-1 max-w-[120px] h-px bg-[#6B7A42]" />
        <h2 className="text-[11px] tracking-[0.4em] text-[#6B7A42] uppercase font-medium">
          {t.services.title}
        </h2>
        <div className="flex-1 max-w-[120px] h-px bg-[#6B7A42]" />
      </div>

      {/* Services grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 md:gap-12">
        {t.services.items.map((service) => (
          <div
            key={service.icon}
            className="flex flex-col items-center gap-3 group cursor-default"
          >
            <div className="text-white/60 group-hover:text-[#6B7A42] transition-colors duration-300">
              {icons[service.icon]}
            </div>
            <span className="text-[10px] tracking-[0.15em] text-white/50 uppercase text-center leading-tight group-hover:text-white/80 transition-colors duration-300">
              {service.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
