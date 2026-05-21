"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function About() {
  const { t } = useLang();
  const { open } = useModal();

  const lines = t.about.headline.split("\n");

  return (
    <section id="about" className="bg-[#F8F8F4] py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-stretch">
        {/* Left — image */}
        <div className="relative min-h-[420px] md:min-h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
            alt="Stone walkway with elegant lighting"
            fill
            className="object-cover"
          />
        </div>

        {/* Right — content */}
        <div className="bg-white px-10 md:px-14 py-14 flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.35em] text-[#6B7A42] uppercase mb-5">
            {t.about.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight text-black mb-6 uppercase">
            {lines[0]}
            <br />
            {lines[1]}
          </h2>
          <div className="w-10 h-0.5 bg-[#6B7A42] mb-6" />
          <p className="text-sm text-black/60 leading-relaxed mb-8">
            {t.about.description}
          </p>

          {/* Why Us pillars preview */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {t.whyUs.items.slice(0, 4).map((item) => (
              <div key={item.title} className="flex items-start gap-2">
                <span className="text-[#6B7A42] mt-0.5 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[11px] text-black/60 leading-snug">{item.title}</span>
              </div>
            ))}
          </div>

          <button
            onClick={open}
            className="self-start bg-[#6B7A42] text-white text-[11px] tracking-[0.2em] uppercase px-7 py-3 hover:bg-black transition-colors duration-300"
          >
            {t.about.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
