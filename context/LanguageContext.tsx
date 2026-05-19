"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Language, translations } from "@/translations";

type LanguageContextType = {
  lang: Language;
  t: (typeof translations)["es"];
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    const saved = localStorage.getItem("rp-lang") as Language | null;
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  const toggleLang = () => {
    const next: Language = lang === "es" ? "en" : "es";
    setLang(next);
    localStorage.setItem("rp-lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
