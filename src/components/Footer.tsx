import { useLang } from '../i18n';
import { person, ui } from '../data/content';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>
          © {new Date().getFullYear()} {t(person.firstName)} {t(person.lastName)}
        </span>
        <span>{t(ui.footer)}</span>
      </div>
    </footer>
  );
}
