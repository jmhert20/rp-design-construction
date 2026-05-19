"use client";

import { useLang } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-[#111111] py-24 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — info */}
        <div>
          <p className="text-[11px] tracking-[0.4em] text-[#6B7A42] uppercase mb-3">
            {t.contact.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase mb-4">
            {t.contact.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#6B7A42] mb-8" />
          <p className="text-sm text-white/50 leading-relaxed mb-10">
            {t.contact.description}
          </p>

          {/* Contact details */}
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="text-[#6B7A42] mt-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-0.5">{t.contact.phone}</p>
                <a href="tel:8624091988" className="text-sm text-white hover:text-[#6B7A42] transition-colors">
                  862-409-1988
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#6B7A42] mt-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-0.5">{t.contact.email}</p>
                <a href="mailto:info@rpdesignconstruction.com" className="text-sm text-white hover:text-[#6B7A42] transition-colors">
                  info@rpdesignconstruction.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#6B7A42] mt-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-0.5">{t.contact.location}</p>
                <span className="text-sm text-white">New Jersey, USA</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#6B7A42] mt-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={1.5} />
                  <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth={0} />
                </svg>
              </span>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-0.5">{t.contact.social}</p>
                <a
                  href="https://instagram.com/rpdesignconstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-[#6B7A42] transition-colors"
                >
                  @rpdesignconstruction
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Right — CTA card */}
        <div className="border border-white/10 p-10 flex flex-col items-start">
          <div className="w-10 h-10 border border-[#6B7A42] flex items-center justify-center mb-6">
            <span className="font-serif text-xl font-bold text-[#6B7A42]">RP</span>
          </div>
          <p className="text-xs tracking-[0.25em] text-white/40 uppercase mb-2">
            RP Design & Construction
          </p>
          <p className="text-[11px] tracking-[0.2em] text-[#6B7A42] uppercase mb-6">
            Design + Build Solutions
          </p>
          <p className="text-sm text-white/50 leading-relaxed mb-8">
            New Jersey · 862-409-1988
          </p>
          <a
            href="tel:8624091988"
            className="bg-[#6B7A42] text-white text-[11px] tracking-[0.25em] uppercase px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
          >
            {t.contact.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
