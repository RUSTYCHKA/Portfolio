import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../i18n';
import { person, ui } from '../data/content';
import type { Lang } from '../types';
import { ScrollProgress } from './ScrollProgress';

const NAV = ['projects', 'skills', 'about', 'contact'] as const;
const LANGS: Lang[] = ['ru', 'en'];

export function Header() {
  const { lang, setLang, t } = useLang();
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Тень/фон шапки после прокрутки
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Подсветка текущего раздела в меню
  useEffect(() => {
    if (pathname !== '/') {
      setActive('');
      return;
    }
    const ids = ['top', ...NAV];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id === 'top' ? '' : entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="container site-header__inner">
        <Link to="/" className="brand" state={{ scrollTo: 'top' }}>
          {t(person.firstName)} {t(person.lastName)}
        </Link>

        <nav className="nav" aria-label="Main">
          {NAV.map((id) => (
            <Link
              key={id}
              to="/"
              state={{ scrollTo: id }}
              className={active === id ? 'is-active' : undefined}
              aria-current={active === id ? 'true' : undefined}
            >
              {t(ui.nav[id])}
            </Link>
          ))}
          <div className="lang" role="group" aria-label={t(ui.langSwitch)}>
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </div>
      <ScrollProgress />
    </header>
  );
}
