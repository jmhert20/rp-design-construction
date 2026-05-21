"use client";

import { useLang } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function Contact() {
  const { t } = useLang();
  const { open } = useModal();

  return (
    <section id="contact" className="bg-[#F8F8F4] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.4em] text-[#6B7A42] uppercase mb-3">
          {t.contact.label}
        </p>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black uppercase mb-4">
          {t.contact.title}
        </h2>
        <div className="w-12 h-0.5 bg-[#6B7A42] mx-auto mb-6" />
        <p className="text-sm text-black/50 mb-10">{t.contact.description}</p>

        <button
          onClick={open}
          className="bg-[#6B7A42] text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-black transition-colors duration-300 mb-12"
        >
          {t.contact.cta}
        </button>

        {/* Contact info row */}
        <div className="border-t border-black/10 pt-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <a
            href="mailto:info@rpdesignconstruction.com"
            className="flex items-center gap-3 text-black/60 hover:text-[#6B7A42] transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm">info@rpdesignconstruction.com</span>
          </a>

          <a
            href="https://instagram.com/rpdesignconstruction"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-black/60 hover:text-[#6B7A42] transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={1.5} />
              <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" strokeWidth={0} />
            </svg>
            <span className="text-sm">@rpdesignconstruction</span>
          </a>

          <div className="flex items-center gap-3 text-black/50">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="text-sm">{t.contact.locationValue}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
