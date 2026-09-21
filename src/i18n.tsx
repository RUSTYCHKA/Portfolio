import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { L, Lang } from './types';
import { ui } from './data/content';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (value: L) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'ru' || saved === 'en') return saved;
  } catch {
    /* localStorage может быть недоступен — не страшно */
  }
  return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui.siteTitle[lang];
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, t: (v: L) => v[lang] }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
