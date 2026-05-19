"use client";

import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F8F4] border-t border-black/10 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <span className="font-serif text-4xl font-bold text-black tracking-tight">RP</span>
          <div className="border-l border-black/20 pl-4">
            <p className="text-[10px] tracking-[0.25em] uppercase text-black font-medium leading-tight">
              DESIGN +<br />CONSTRUCTION
            </p>
            <p className="text-[9px] tracking-[0.2em] text-[#6B7A42] uppercase mt-0.5">
              {t.footer.tagline}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-black/40 tracking-wide text-center">
          © {year} RP Design & Construction. {t.footer.rights}
        </p>

        {/* Social */}
        <a
          href="https://instagram.com/rpdesignconstruction"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.2em] text-black/40 hover:text-[#6B7A42] uppercase transition-colors"
        >
          @rpdesignconstruction
        </a>
      </div>
    </footer>
  );
}
