export type Lang = 'ru' | 'en';

/** Строка на двух языках */
export type L = Record<Lang, string>;

export interface Metric {
  value: string;
  label: L;
}

export interface Term {
  term: L;
  text: L;
}

/** Блоки, из которых собирается страница кейса */
export type Block =
  | { kind: 'text'; title: L; paragraphs: L[] }
  | { kind: 'list'; title: L; items: L[]; note?: L }
  | { kind: 'flow'; title: L; nodes: string[]; note?: L }
  | { kind: 'terms'; title: L; items: Term[] };

export interface ProjectLink {
  label: L;
  href: string;
}

export interface Screenshot {
  /** Путь относительно папки public, например 'screenshots/teleroket-admin.png' */
  src: string;
  alt: L;
}

export interface Project {
  slug: string;
  name: string;
  type: L;
  tagline: L;
  summary: L;
  stack: string[];
  metrics: Metric[];
  links: ProjectLink[];
  closedSource: boolean;
  screenshots: Screenshot[];
  blocks: Block[];
}

export interface Proof {
  label: L;
  /** Если указан — ссылка на страницу кейса */
  slug?: string;
}

export interface Evidence {
  skill: string;
  proof: Proof[];
}

export interface SkillGroup {
  title: L;
  items: string[];
}
