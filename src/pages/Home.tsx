import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import {
  about,
  contact,
  ecosystem,
  evidence,
  person,
  projects,
  skillGroups,
  teleRocketEvolution,
  ui,
} from '../data/content';
import type { Project } from '../types';
import { Flow } from '../components/Flow';
import { Metrics, Stack } from '../components/Stack';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Typewriter } from '../components/Typewriter';
import { Marquee } from '../components/Marquee';
import { Arrow } from '../components/Arrow';
import { useCardFx } from '../hooks/useCardFx';
import { useMagnetic } from '../hooks/useMagnetic';
import { useInView } from '../hooks/useInView';
import { delay, idx } from '../lib/style';

/* ------------------------------ Hero ------------------------------ */

function Hero() {
  const { t, lang } = useLang();
  const heroRef = useCardFx<HTMLElement>();
  const telegramRef = useMagnetic<HTMLAnchorElement>();
  const githubRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__blob hero__blob--a" />
        <div className="hero__blob hero__blob--b" />
        <div className="hero__blob hero__blob--c" />
        <div className="hero__spot" />
      </div>

      <div className="container hero__content">
        <h1>
          <span className="line">
            <span className="line__in">{t(person.firstName)}</span>
          </span>
          <span className="line">
            <span className="line__in" style={delay(130)}>
              {t(person.lastName)}
            </span>
          </span>
        </h1>

        <p className="hero__role rise" style={delay(550)}>
          {person.role}
        </p>
        <p className="hero__build rise" style={delay(680)}>
          <span>{t(ui.building)}</span> <Typewriter words={person.building[lang]} />
        </p>
        <p className="hero__lead rise" style={delay(820)}>
          {t(person.lead)}
        </p>
        <p className="hero__status rise" style={delay(940)}>
          {t(person.status)}
        </p>

        <div className="hero__actions rise" style={delay(1060)}>
          <a
            ref={telegramRef}
            className="btn btn--primary"
            href={person.telegram.href}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a ref={githubRef} className="btn" href={person.github.href} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <div className="pipeline">
          <p className="pipeline__caption rise" style={delay(1200)}>
            <span>{t(ui.pipelineCaption)}</span>
            <Link className="cta" to="/projects/telerocket">
              {t(ui.viewCase)} <Arrow />
            </Link>
          </p>
          <Flow
            nodes={teleRocketEvolution}
            variant="row"
            animate
            loop
            baseDelay={1300}
            label={t(ui.pipelineCaption)}
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Projects ---------------------------- */

function FeaturedProject({ project }: { project: Project }) {
  const { t } = useLang();
  const ref = useCardFx<HTMLElement>(true);
  return (
    <article ref={ref} className="featured fx fx--tilt">
      <div className="head-row">
        <h3>
          <Link to={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <span className="tag">{t(project.type)}</span>
      </div>
      <p className="featured__tagline">{t(project.tagline)}</p>
      <p>{t(project.summary)}</p>
      <Metrics items={project.metrics} />
      <Stack items={project.stack} />
      <p className="featured__cta">
        <Link className="cta" to={`/projects/${project.slug}`}>
          {t(ui.viewCase)} <Arrow />
        </Link>
      </p>
    </article>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const { t } = useLang();
  const ref = useCardFx<HTMLDivElement>();
  return (
    <div ref={ref} className="row fx">
      <div className="row__head">
        <h3>
          <Link to={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <span className="tag">{t(project.type)}</span>
      </div>
      <div className="row__body">
        <p className="row__tagline">{t(project.tagline)}</p>
        <p>{t(project.summary)}</p>
        <Stack items={project.stack} />
        <p className="row__cta">
          <Link className="cta" to={`/projects/${project.slug}`}>
            {t(ui.viewCase)} <Arrow />
          </Link>
        </p>
      </div>
    </div>
  );
}

function Projects() {
  const { t } = useLang();
  const [featured, ...rest] = projects;
  return (
    <Section id="projects" title={t(ui.sections.projects)}>
      <Reveal>
        <FeaturedProject project={featured} />
      </Reveal>

      <ul className="rows">
        {rest.map((p) => (
          <li key={p.slug}>
            <Reveal>
              <ProjectRow project={p} />
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="ecosystem">
        <h3>{t(ui.productsTitle)}</h3>
        <ul className="ecosystem__list">
          {ecosystem.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>
              {item.text ? <span>{t(item.text)}</span> : null}
            </li>
          ))}
        </ul>
        <p className="muted">{t(ui.productsNote)}</p>
      </Reveal>
    </Section>
  );
}

/* ------------------------------ Skills ----------------------------- */

function Skills() {
  const { t } = useLang();
  const [tableRef, tableInView] = useInView<HTMLTableElement>();
  return (
    <Section id="skills" title={t(ui.sections.skills)}>
      <dl className="skillgroups">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title.en} className="skillgroup" delayMs={i * 70}>
            <dt>{t(group.title)}</dt>
            <dd>
              <Stack items={group.items} />
            </dd>
          </Reveal>
        ))}
      </dl>

      <table ref={tableRef} className={tableInView ? 'evidence io is-in' : 'evidence io'}>
        <caption>{t(ui.evidenceTitle)}</caption>
        <tbody>
          {evidence.map((row, i) => (
            <tr key={row.skill} className="stagger" style={idx(i)}>
              <th scope="row">{row.skill}</th>
              <td>
                {row.proof.map((p, j) => (
                  <Fragment key={p.label.en}>
                    {j > 0 ? ', ' : null}
                    {p.slug ? <Link to={`/projects/${p.slug}`}>{t(p.label)}</Link> : t(p.label)}
                  </Fragment>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}

/* ------------------------------- About ------------------------------ */

function About() {
  const { t } = useLang();
  return (
    <Section id="about" title={t(ui.sections.about)}>
      <Reveal className="prose">
        {about.paragraphs.map((p) => (
          <p key={p.en}>{t(p)}</p>
        ))}
      </Reveal>

      <Reveal className="subblock">
        <h3>{t(ui.pathTitle)}</h3>
        <Flow nodes={about.path} variant="row" label={t(ui.pathTitle)} />
      </Reveal>

      <Reveal className="subblock">
        <h3>{t(ui.freelanceTitle)}</h3>
        <p>{t(about.freelance)}</p>
      </Reveal>

      <Reveal className="subblock">
        <h3>{t(ui.educationTitle)}</h3>
        <p>{t(about.school)}</p>
        <table className="scores">
          <caption className="sr-only">{t(ui.educationTitle)}</caption>
          <tbody>
            {about.scores.map((s) => (
              <tr key={s.subject.en}>
                <th scope="row">{t(s.subject)}</th>
                <td>{s.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>{t(about.english)}</p>
      </Reveal>

      <Reveal className="subblock" self={false}>
        <h3 className="stagger">{t(ui.achievementsTitle)}</h3>
        <ul className="list">
          {about.achievements.map((a, i) => (
            <li key={a.en} className="stagger" style={idx(i + 1)}>
              {t(a)}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

/* ------------------------------ Contact ----------------------------- */

function Contact() {
  const { t } = useLang();
  return (
    <Section id="contact" title={t(ui.sections.contact)}>
      <Reveal>
        <p className="contact__title">{t(contact.title)}</p>
        <p className="contact__text">{t(contact.text)}</p>
      </Reveal>
      <Reveal self={false}>
        <dl className="contacts">
          <div className="stagger" style={idx(0)}>
            <dt>Telegram</dt>
            <dd>
              <a href={person.telegram.href} target="_blank" rel="noreferrer">
                {person.telegram.handle}
              </a>
            </dd>
          </div>
          <div className="stagger" style={idx(1)}>
            <dt>GitHub</dt>
            <dd>
              <a href={person.github.href} target="_blank" rel="noreferrer">
                {person.github.handle}
              </a>
            </dd>
          </div>
          <div className="stagger" style={idx(2)}>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </dd>
          </div>
          <div className="stagger" style={idx(3)}>
            <dt>{t({ ru: 'Город', en: 'Location' })}</dt>
            <dd>{t(person.city)}</dd>
          </div>
        </dl>
      </Reveal>
    </Section>
  );
}

/* -------------------------------- Page ------------------------------ */

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
