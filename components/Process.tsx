"use client";

import { useLang } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function Process() {
  const { t } = useLang();
  const { open } = useModal();

  return (
    <section id="process" className="bg-[#111111] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] text-[#6B7A42] uppercase mb-3">
            {t.process.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase">
            {t.process.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#6B7A42] mx-auto mt-4" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {t.process.steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center relative">
              {/* Connector line */}
              {i < t.process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-full h-px bg-[#6B7A42]/30" />
              )}
              <div className="w-12 h-12 rounded-full border border-[#6B7A42] flex items-center justify-center mb-4 relative z-10 bg-[#111111]">
                <span className="text-[11px] tracking-widest text-[#6B7A42] font-semibold">
                  {step.number}
                </span>
              </div>
              <h3 className="text-sm font-bold tracking-wide text-white uppercase mb-2">
                {step.title}
              </h3>
              <p className="text-[12px] text-white/45 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-black text-white uppercase tracking-tight mb-6">
            {t.contact.title}
          </p>
          <button
            onClick={open}
            className="bg-[#6B7A42] text-white text-[11px] tracking-[0.25em] uppercase px-10 py-3 hover:bg-white hover:text-black transition-colors duration-300"
          >
            {t.contact.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
