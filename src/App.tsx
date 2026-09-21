import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LangProvider } from './i18n';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import NotFound from './pages/NotFound';

/** Прокрутка: к секции (если передали state.scrollTo) или наверх при смене страницы */
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    const el = target ? document.getElementById(target) : null;
    if (el) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.key]);

  return null;
}

/** Маршруты с плавной сменой страницы: key заставляет анимацию проигрываться заново */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <LangProvider>
        <ScrollManager />
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </LangProvider>
    </HashRouter>
  );
}
