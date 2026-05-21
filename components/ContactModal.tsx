"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { SERVICE_ITEMS } from "@/translations";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const EMPTY: FormData = { name: "", email: "", phone: "", service: "", message: "" };

export default function ContactModal() {
  const { t } = useLang();
  const { isOpen, close } = useModal();
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setStatus("idle");
      setForm(EMPTY);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId || formspreeId === "YOUR_FORM_ID") {
      window.location.href = `mailto:info@rpdesignconstruction.com?subject=Cotización - ${form.service}&body=Nombre: ${form.name}%0AEmail: ${form.email}%0ATeléfono: ${form.phone}%0AMensaje: ${form.message}`;
      close();
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#F8F8F4] border border-black/10 px-4 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:border-[#6B7A42] transition-colors";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />

      {/* Panel */}
      <div className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-[#111111] px-8 py-6 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-black tracking-tight text-white uppercase">
              {t.modal.title}
            </h2>
            <p className="text-[11px] text-white/40 mt-1">{t.modal.subtitle}</p>
          </div>
          <button
            onClick={close}
            className="text-white/40 hover:text-white transition-colors ml-4 mt-0.5"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-[#6B7A42]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#6B7A42]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-base font-bold text-black tracking-tight">{t.modal.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                required
                placeholder={t.modal.name}
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                required
                placeholder={t.modal.email}
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                name="phone"
                type="tel"
                placeholder={t.modal.phone}
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">{t.modal.selectService}</option>
                {SERVICE_ITEMS.map((s) => (
                  <option key={s.icon} value={s.name}>{s.name}</option>
                ))}
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder={t.modal.message}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              {status === "error" && (
                <p className="text-red-500 text-xs">{t.modal.error}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#6B7A42] text-white text-[11px] tracking-[0.25em] uppercase py-4 hover:bg-black transition-colors duration-300 disabled:opacity-60"
              >
                {status === "loading" ? "..." : t.modal.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
