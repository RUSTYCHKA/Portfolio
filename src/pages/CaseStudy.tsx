import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLang } from '../i18n';
import { projects, ui } from '../data/content';
import type { Block } from '../types';
import { Flow } from '../components/Flow';
import { Metrics, Stack } from '../components/Stack';
import { Reveal } from '../components/Reveal';
import { Arrow } from '../components/Arrow';
import { asset } from '../lib/asset';
import { delay, idx } from '../lib/style';
import NotFound from './NotFound';

function BlockView({ block }: { block: Block }) {
  const { t } = useLang();

  let content: ReactNode = null;
  switch (block.kind) {
    case 'text':
      content = (
        <div className="prose">
          {block.paragraphs.map((p, i) => (
            <p key={p.en} className="stagger" style={idx(i + 1)}>
              {t(p)}
            </p>
          ))}
        </div>
      );
      break;
    case 'list':
      content = (
        <>
          <ul className="list">
            {block.items.map((item, i) => (
              <li key={item.en} className="stagger" style={idx(i + 1)}>
                {t(item)}
              </li>
            ))}
          </ul>
          {block.note ? <p className="muted">{t(block.note)}</p> : null}
        </>
      );
      break;
    case 'flow':
      content = (
        <>
          <Flow nodes={block.nodes} label={t(block.title)} />
          {block.note ? <p className="muted">{t(block.note)}</p> : null}
        </>
      );
      break;
    case 'terms':
      content = (
        <dl className="terms">
          {block.items.map((item, i) => (
            <div key={item.term.en} className="stagger" style={idx(i + 1)}>
              <dt>{t(item.term)}</dt>
              <dd>{t(item.text)}</dd>
            </div>
          ))}
        </dl>
      );
      break;
  }

  return (
    <Reveal self={false} className="block">
      <div className="container block__inner">
        <h2 className="stagger" style={idx(0)}>
          {t(block.title)}
        </h2>
        <div className="block__body">{content}</div>
      </div>
    </Reveal>
  );
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLang();

  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="case">
      <header className="case__header">
        <div className="container">
          <Link className="back rise" to="/" state={{ scrollTo: 'projects' }}>
            <Arrow back /> {t(ui.backToProjects)}
          </Link>
          <div className="head-row">
            <h1 className="case__title">
              <span className="line">
                <span className="line__in">{project.name}</span>
              </span>
            </h1>
            <span className="tag rise" style={delay(300)}>
              {t(project.type)}
            </span>
          </div>
          <p className="case__tagline rise" style={delay(350)}>
            {t(project.tagline)}
          </p>
          <p className="case__summary rise" style={delay(450)}>
            {t(project.summary)}
          </p>
          <div className="rise" style={delay(550)}>
            <Metrics items={project.metrics} />
          </div>
          <div className="rise" style={delay(650)}>
            <Stack items={project.stack} />
          </div>

          {project.links.length > 0 ? (
            <p className="case__links rise" style={delay(750)}>
              {project.links.map((link) => (
                <a key={link.href} className="btn" href={link.href} target="_blank" rel="noreferrer">
                  {t(link.label)}
                </a>
              ))}
            </p>
          ) : null}
          {project.closedSource ? <p className="muted rise" style={delay(750)}>{t(ui.closedSource)}</p> : null}
        </div>
      </header>

      {project.blocks.map((block) => (
        <BlockView key={block.title.en} block={block} />
      ))}

      {project.screenshots.length > 0 ? (
        <Reveal self={false} className="block">
          <div className="container block__inner">
            <h2 className="stagger" style={idx(0)}>
              {t(ui.screenshots)}
            </h2>
            <div className="block__body shots">
              {project.screenshots.map((shot, i) => (
                <figure key={shot.src} className="stagger" style={idx(i + 1)}>
                  <img src={asset(shot.src)} alt={t(shot.alt)} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      <Reveal className="block next">
        <div className="container">
          <p className="muted">{t(ui.nextProject)}</p>
          <Link className="next__link" to={`/projects/${next.slug}`}>
            {next.name} <Arrow />
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
