import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Lang } from "@/content/site";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof dict)["uz"] };

const LangContext = createContext<Ctx>({ lang: "uz", setLang: () => {}, t: dict.uz });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    const stored = window.localStorage.getItem("nufuz-lang");
    if (stored === "en" || stored === "uz") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("nufuz-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] as (typeof dict)["uz"] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
