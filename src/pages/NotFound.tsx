import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import { ui } from '../data/content';

export default function NotFound() {
  const { t } = useLang();
  return (
    <div className="container notfound">
      <h1>{t(ui.notFoundTitle)}</h1>
      <p>
        <Link className="cta" to="/">
          ← {t(ui.notFoundBack)}
        </Link>
      </p>
    </div>
  );
}
