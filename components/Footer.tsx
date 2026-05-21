"use client";

import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] border-t border-white/10 py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + tagline */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-serif text-3xl font-bold text-white leading-none">RP</span>
            <div className="border-l border-white/20 pl-3">
              <p className="text-[9px] tracking-[0.22em] uppercase text-white/50 leading-tight">
                DESIGN +<br />CONSTRUCTION
              </p>
              <p className="text-[8px] tracking-[0.2em] text-[#6B7A42] uppercase mt-0.5">
                Design + Build Solutions
              </p>
            </div>
          </div>
          <p className="text-[11px] text-white/35 leading-relaxed max-w-[200px]">
            {t.footer.tagline}
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-4">
            {t.footer.contactTitle}
          </p>
          <ul className="space-y-2.5">
            <li>
              <a href="mailto:info@rpdesignconstruction.com" className="text-[12px] text-white/55 hover:text-[#6B7A42] transition-colors">
                info@rpdesignconstruction.com
              </a>
            </li>
            <li>
              <a href="tel:8624091988" className="text-[12px] text-white/55 hover:text-[#6B7A42] transition-colors">
                862-409-1988
              </a>
            </li>
          </ul>
        </div>

        {/* Service area */}
        <div>
          <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-4">
            {t.footer.serviceTitle}
          </p>
          <p className="text-[12px] text-white/55">{t.contact.locationValue}</p>
        </div>

        {/* Social */}
        <div>
          <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase mb-4">
            {t.footer.followTitle}
          </p>
          <a
            href="https://instagram.com/rpdesignconstruction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/55 hover:text-[#6B7A42] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={1.5} />
              <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" strokeWidth={0} />
            </svg>
            <span className="text-[12px]">@rpdesignconstruction</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-10 pt-6 flex items-center justify-between">
        <p className="text-[10px] text-white/25 tracking-wide">
          © {year} RP Design & Construction LLC. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
