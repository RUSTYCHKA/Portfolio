import type { Evidence, L, Project, SkillGroup } from '../types';

/**
 * ВСЁ СОДЕРЖИМОЕ САЙТА ЛЕЖИТ В ЭТОМ ФАЙЛЕ.
 * Тексты — на двух языках: l('по-русски', 'in English').
 * Меняете текст здесь — сайт обновляется целиком.
 */

const l = (ru: string, en: string): L => ({ ru, en });
const same = (s: string): L => ({ ru: s, en: s });

/* ------------------------------------------------------------------ */
/* Личные данные                                                       */
/* ------------------------------------------------------------------ */

export const person = {
  firstName: l('Арсений', 'Arseny'),
  lastName: l('Кармаенков', 'Karmaenkov'),
  role: 'Python / Backend Developer',
  lead: l(
    'Создаю backend-системы, автоматизацию и цифровые продукты — от архитектуры и API до баз данных, интеграций и deployment.',
    'I build backend systems, automation and digital products — from architecture and APIs to databases, integrations and deployment.',
  ),
  status: l(
    'Открыт к backend-стажировкам и интересным инженерным задачам.',
    'Open to backend internships and interesting engineering problems.',
  ),
  /** Слова для «печатающейся» строки в hero. Массивы — стабильные ссылки, не создавайте их заново */
  building: {
    ru: ['backend-системы', 'Telegram-автоматизацию', 'API и интеграции', 'AI-инструменты', 'цифровые продукты'],
    en: ['backend systems', 'Telegram automation', 'APIs and integrations', 'AI tools', 'digital products'],
  },
  city: l('Москва, Россия', 'Moscow, Russia'),
  telegram: { handle: '@RUSTYCHKA', href: 'https://t.me/RUSTYCHKA' },
  github: { handle: 'github.com/RUSTYCHKA', href: 'https://github.com/RUSTYCHKA' },
  email: 'karmaenkov.arseniy@gmail.com',
};

/* ------------------------------------------------------------------ */
/* Интерфейсные строки                                                 */
/* ------------------------------------------------------------------ */

export const ui = {
  siteTitle: l(
    'Арсений Кармаенков — Python / Backend Developer',
    'Arseny Karmaenkov — Python / Backend Developer',
  ),
  nav: {
    projects: l('Проекты', 'Projects'),
    skills: l('Навыки', 'Skills'),
    about: l('Обо мне', 'About'),
    contact: l('Контакты', 'Contact'),
  },
  langSwitch: l('Язык', 'Language'),
  pipelineCaption: l(
    'Как вырос TeleRocket: от Telegram-бота до коммерческой системы',
    'How TeleRocket grew: from a Telegram bot to a commercial system',
  ),
  building: l('Делаю:', 'Building:'),
  viewCase: l('Смотреть кейс', 'View case study'),
  backToProjects: l('Все проекты', 'All projects'),
  nextProject: l('Следующий проект', 'Next project'),
  stack: l('Стек', 'Stack'),
  links: l('Ссылки', 'Links'),
  screenshots: l('Скриншоты', 'Screenshots'),
  closedSource: l('Исходный код закрыт.', 'Source code is private.'),
  productsTitle: l('Экосистема X Rocket', 'X Rocket ecosystem'),
  productsNote: l(
    'Коммерческие продукты, исходный код закрыт.',
    'Commercial products, source code is private.',
  ),
  sections: {
    projects: l('Проекты', 'Projects'),
    skills: l('Навыки', 'Skills'),
    about: l('Обо мне', 'About'),
    contact: l('Контакты', 'Contact'),
  },
  evidenceTitle: l('Где это подтверждено', 'Where it is proven'),
  pathTitle: l('Мой путь', 'My path'),
  freelanceTitle: l('Фриланс', 'Freelance'),
  educationTitle: l('Образование', 'Education'),
  achievementsTitle: l('Достижения', 'Achievements'),
  notFoundTitle: l('Страница не найдена', 'Page not found'),
  notFoundBack: l('На главную', 'Back to home'),
  footer: l('', ''),
};

/* ------------------------------------------------------------------ */
/* Эволюция TeleRocket (используется в hero и в кейсе)                 */
/* ------------------------------------------------------------------ */

export const teleRocketEvolution = [
  'Telegram Bot',
  'WebApp',
  'Admin Panel',
  'Desktop App',
  'Docker',
  'PostgreSQL',
];

/* ------------------------------------------------------------------ */
/* Проекты                                                             */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  /* ---------------------------- TeleRocket ---------------------------- */
  {
    slug: 'telerocket',
    name: 'TeleRocket',
    type: l('Коммерческий продукт', 'Commercial product'),
    tagline: l('Платформа автоматизации Telegram', 'Telegram automation platform'),
    summary: l(
      'Система для работы с пользовательскими Telegram-аккаунтами: парсинг, рассылки, stories, управление сессиями. Выросла из Telegram-бота в WebApp, админ-панель и desktop-приложение.',
      'A system for working with user Telegram accounts: parsing, mailings, stories, session management. It grew from a Telegram bot into a WebApp, an admin panel and a desktop application.',
    ),
    stack: [
      'Python',
      'Telethon',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'Telegram WebApp',
      'WebSocket',
      'Nginx',
      'Inno Setup',
    ],
    metrics: [
      { value: '~1,5', label: l('года разработки', 'years of development') },
      { value: '~100', label: l('пользователей', 'users') },
      { value: '~30k', label: l('строк кода', 'lines of code') },
    ],
    links: [],
    closedSource: true,
    screenshots: [],
    blocks: [
      {
        kind: 'text',
        title: l('Обзор', 'Overview'),
        paragraphs: [
          l(
            'TeleRocket — не учебный pet-проект, а коммерческий продукт, который делался для реальных пользователей. Разрабатывался около полутора лет, доступ продаётся по платной подписке.',
            'TeleRocket is not a study pet project but a commercial product built for real users. It was developed for about a year and a half and is sold by paid subscription.',
          ),
          l('Роль: разработчик.', 'Role: developer.'),
        ],
      },
      {
        kind: 'flow',
        title: l('Как рос проект', 'How it evolved'),
        nodes: teleRocketEvolution,
        note: l(
          'Из относительно простого Telegram-инструмента проект постепенно превратился в полноценную программную систему.',
          'A relatively simple Telegram tool gradually turned into a full software system.',
        ),
      },
      {
        kind: 'flow',
        title: l('Архитектура', 'Architecture'),
        nodes: [
          'Telegram',
          'Telethon',
          'Python backend',
          'FastAPI',
          'PostgreSQL',
          'WebApp / Desktop',
          'Admin Panel',
        ],
        note: l(
          'В отдельных частях синхронизация между компонентами идёт через WebSocket.',
          'In some parts the components are kept in sync over WebSocket.',
        ),
      },
      {
        kind: 'list',
        title: l('Возможности', 'Features'),
        items: [
          l('Парсинг', 'Parsing'),
          l('Рассылки и упоминания', 'Mailings and mentions'),
          l('Stories', 'Stories'),
          l('Работа с чатами', 'Working with chats'),
          l('Управление аккаунтами и сессиями', 'Account and session management'),
          l('Конвертация TData ↔ session.json', 'TData ↔ session.json conversion'),
          l('Открытие аккаунта в web', 'Opening an account in the web client'),
          l('Отдельный Telegram-бот с похожей функциональностью', 'A separate Telegram bot with similar features'),
        ],
        note: l('Всего около 20 функций.', 'About 20 features in total.'),
      },
      {
        kind: 'terms',
        title: l('Технические задачи', 'Engineering challenges'),
        items: [
          {
            term: l('Telegram-сессии', 'Telegram sessions'),
            text: l(
              'Не отправка сообщений через Bot API, а полноценная работа с пользовательскими аккаунтами.',
              'Not just sending messages through the Bot API, but full work with user accounts.',
            ),
          },
          {
            term: l('Мультиаккаунтность', 'Multi-account'),
            text: l(
              'Нужно работать сразу с несколькими аккаунтами и управлять состоянием каждого.',
              'Several accounts have to be handled at once, each with its own state.',
            ),
          },
          {
            term: l('Долгие операции', 'Long-running operations'),
            text: l(
              'Часть операций не укладывается в схему «запрос → ответ» и выполняется долго, поэтому для неё нужна отдельная backend-логика.',
              'Some operations do not fit the “request → response” model and run for a long time, so they need dedicated backend logic.',
            ),
          },
          {
            term: l('Синхронизация', 'Synchronisation'),
            text: l(
              'Backend, WebApp и desktop-приложение должны согласованно работать друг с другом.',
              'The backend, the WebApp and the desktop application have to work together consistently.',
            ),
          },
          {
            term: l('Desktop-клиент', 'Desktop client'),
            text: l(
              'Backend-логику нужно было интегрировать с отдельным desktop-клиентом и упаковать его установщиком (Inno Setup).',
              'The backend logic had to be integrated with a separate desktop client and shipped with an installer (Inno Setup).',
            ),
          },
          {
            term: l('Deployment', 'Deployment'),
            text: l(
              'Проект прошёл путь от разработки до серверного развёртывания в Docker.',
              'The project went from development all the way to server deployment in Docker.',
            ),
          },
        ],
      },
      {
        kind: 'text',
        title: l('Результат', 'Result'),
        paragraphs: [
          l(
            'Коммерческое использование: около 100 пользователей и платные подписки.',
            'Commercial use: around 100 users and paid subscriptions.',
          ),
        ],
      },
    ],
  },

  /* ----------------------------- TrendLab ----------------------------- */
  {
    slug: 'trendlab',
    name: 'TrendLab',
    type: l('Коммерческий проект', 'Commercial project'),
    tagline: l('Платформа контент-аналитики для SMM', 'Content intelligence platform for SMM'),
    summary: l(
      'Система анализа контента и поиска трендов: собирает данные из Instagram, YouTube и TikTok, отбирает видео по вовлечённости и помогает переработать их с помощью AI.',
      'A content analysis and trend discovery system: it collects data from Instagram, YouTube and TikTok, ranks videos by engagement and helps rework them with AI.',
    ),
    stack: [
      'Python',
      'FastAPI',
      'Celery',
      'MySQL',
      'Gemini API',
      'Whisper',
      'Telegram Bot',
      'Nginx',
      'Docker',
      'CI/CD',
    ],
    metrics: [
      { value: '3', label: l('платформы-источника', 'source platforms') },
      { value: 'ER', label: l('своя метрика вовлечённости', 'custom engagement metric') },
    ],
    links: [],
    closedSource: true,
    screenshots: [],
    blocks: [
      {
        kind: 'text',
        title: l('Обзор', 'Overview'),
        paragraphs: [
          l(
            'Пользователь задаёт аккаунты Instagram, YouTube и TikTok или нишу по ключевым словам. Система анализирует контент и помогает находить самые интересные видео.',
            'A user sets Instagram, YouTube and TikTok accounts or a niche by keywords. The system analyses the content and helps find the most interesting videos.',
          ),
          l('Роль: backend-разработка в команде.', 'Role: backend development in a team.'),
        ],
      },
      {
        kind: 'text',
        title: l('Анализ контента', 'Content analysis'),
        paragraphs: [
          l(
            'Для отбора используется собственная метрика в духе engagement rate (ER). Главный критерий — не просмотры, а вовлечённость аудитории.',
            'Selection relies on a custom metric in the spirit of engagement rate (ER). The main criterion is not views but audience engagement.',
          ),
        ],
      },
      {
        kind: 'list',
        title: l('AI в проекте', 'AI in the project'),
        items: [
          l('Переработка сценариев', 'Reworking scripts'),
          l('Анализ контента', 'Content analysis'),
          l('Генерация новых вариантов', 'Generating new variants'),
          l('Работа с brand profile', 'Working with a brand profile'),
          l('Обработка информации из базы знаний', 'Processing information from the knowledge base'),
          l('Whisper — работа с аудио и транскрибация', 'Whisper — audio work and transcription'),
        ],
        note: l('Используется Gemini API.', 'Powered by the Gemini API.'),
      },
      {
        kind: 'list',
        title: l('Внутри системы', 'Inside the system'),
        items: [
          l('База знаний', 'Knowledge base'),
          l('Approval workflow — согласование результатов', 'Approval workflow'),
          l('HR onboarding и квизы', 'HR onboarding and quizzes'),
          l('Отчёты', 'Reports'),
          l('Telegram-бот и сайт', 'Telegram bot and website'),
          l('Автоматизированные процессы', 'Automated processes'),
        ],
        note: l(
          'Это внутренняя рабочая система, а не просто бот с подключённой языковой моделью.',
          'This is an internal working system, not just a bot wired to a language model.',
        ),
      },
      {
        kind: 'flow',
        title: l('Архитектура', 'Architecture'),
        nodes: [
          'Instagram / YouTube / TikTok',
          'Data collection',
          'FastAPI',
          'MySQL',
          'Celery',
          'AI processing',
          'Knowledge base',
          'Approval workflow',
        ],
      },
    ],
  },

  /* -------------------------- Deposit Tracker ------------------------- */
  {
    slug: 'deposit-tracker',
    name: 'Deposit Tracker',
    type: l('Личный проект', 'Personal project'),
    tagline: l('Сравнение вкладов с учётом реальной доходности', 'Comparing deposits by real yield'),
    summary: l(
      'Статический сервис для сравнения банковских вкладов и накопительных продуктов. Считает не только ставку, но и эффективную доходность с учётом условий и инфляции.',
      'A static service for comparing bank deposits and savings products. It calculates not just the rate but the effective yield, taking conditions and inflation into account.',
    ),
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'Python', 'ETL', 'JSON', 'GitHub Pages'],
    metrics: [{ value: '0', label: l('серверов при работе сайта', 'servers at runtime') }],
    // TODO: добавьте сюда ссылки на демо и репозиторий, например:
    // links: [
    //   { label: l('Демо', 'Live demo'), href: 'https://rustychka.github.io/deposit-tracker/' },
    //   { label: l('Код на GitHub', 'Code on GitHub'), href: 'https://github.com/RUSTYCHKA/deposit-tracker' },
    // ],
    links: [],
    closedSource: false,
    screenshots: [],
    blocks: [
      {
        kind: 'text',
        title: l('Идея', 'Idea'),
        paragraphs: [
          l(
            'Ставка «18% годовых» не всегда означает +18% к реальной покупательной способности. Поэтому сервис показывает путь от номинальной доходности к доходности с учётом условий и дальше — к реальной доходности с учётом инфляции.',
            'A rate of “18% per year” does not always mean +18% of real purchasing power. So the service shows the way from nominal yield, to yield with conditions applied, to real yield adjusted for inflation.',
          ),
        ],
      },
      {
        kind: 'flow',
        title: l('Data pipeline', 'Data pipeline'),
        nodes: [
          'Official data',
          'Python ETL',
          'JSON',
          'React',
          'Filters / sorting',
          'Calculator',
          'Static website',
          'GitHub Pages',
        ],
      },
      {
        kind: 'text',
        title: l('Архитектура', 'Architecture'),
        paragraphs: [
          l(
            'Проект построен как static-first приложение: данные заранее готовит ETL-скрипт на Python, поэтому backend для работы сайта не нужен.',
            'The project is a static-first application: an ETL script in Python prepares the data in advance, so the site needs no backend at runtime.',
          ),
          l(
            'Frontend разделён по слоям: pages, features, widgets, entities, shared.',
            'The frontend is split into layers: pages, features, widgets, entities, shared.',
          ),
        ],
      },
      {
        kind: 'list',
        title: l('Что умеет сервис', 'What it does'),
        items: [
          l('Просмотр, сравнение, фильтрация и сортировка вкладов', 'Browsing, comparing, filtering and sorting deposits'),
          l('Расчёт доходности с капитализацией', 'Yield calculation with capitalisation'),
          l('Учёт пополнения и частичного снятия', 'Top-ups and partial withdrawals'),
          l('Анализ дополнительных условий', 'Analysis of additional conditions'),
          l('Эффективная ставка и поправка на инфляцию', 'Effective rate and inflation adjustment'),
        ],
      },
      {
        kind: 'list',
        title: l('Что показывает проект', 'What it demonstrates'),
        items: [
          l('Frontend на React и TypeScript', 'Frontend in React and TypeScript'),
          l('ETL и обработка данных', 'ETL and data processing'),
          l('Работа с финансовыми данными и расчётами', 'Working with financial data and calculations'),
          l('Структурированная архитектура React-приложения', 'A structured React application architecture'),
          l('Статический деплой на GitHub Pages', 'Static deployment on GitHub Pages'),
        ],
      },
    ],
  },

  /* ----------------------------- FLHunter ----------------------------- */
  {
    slug: 'flhunter',
    name: 'FLHunter',
    type: l('Инструмент автоматизации', 'Automation tool'),
    tagline: l('Мониторинг заказов на фриланс-бирже', 'Freelance order monitoring'),
    summary: l(
      'Telegram-бот следит за новыми заказами на FL.ru, фильтрует их, анализирует с помощью AI и присылает подходящие прямо в Telegram.',
      'A Telegram bot watches new orders on FL.ru, filters them, analyses them with AI and sends the suitable ones straight to Telegram.',
    ),
    stack: [
      'Python',
      'aiogram',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'Redis',
      'APScheduler',
      'Playwright',
      'Docker',
    ],
    metrics: [],
    links: [],
    closedSource: false,
    screenshots: [],
    blocks: [
      {
        kind: 'flow',
        title: l('Как это работает', 'How it works'),
        nodes: ['FL.ru', 'Parser', 'Filtering', 'AI analysis', 'Telegram notification'],
      },
      {
        kind: 'list',
        title: l('Что делает', 'What it does'),
        items: [
          l('Мониторит новые заказы', 'Monitors new orders'),
          l('Получает подробную информацию о заказе', 'Fetches the details of each order'),
          l('Фильтрует заказы', 'Filters orders'),
          l('Анализирует предложения с помощью AI и готовит черновики откликов', 'Analyses offers with AI and drafts replies'),
          l('Отправляет подходящие результаты в Telegram', 'Sends suitable results to Telegram'),
        ],
      },
      {
        kind: 'text',
        title: l('Зачем в портфолио', 'Why it is here'),
        paragraphs: [
          l(
            'Небольшой проект, в котором собраны автоматизация, парсинг, AI и Telegram.',
            'A small project that brings together automation, parsing, AI and Telegram.',
          ),
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Экосистема X Rocket                                                 */
/* ------------------------------------------------------------------ */

export const ecosystem: { name: string; text?: L }[] = [
  {
    name: 'VkRocket',
    text: l(
      'Продвижение и автоматизация во ВКонтакте: рассылки, сбор целевой аудитории, stories, приглашения, парсинг.',
      'Promotion and automation on VK: mailings, audience collection, stories, invitations, parsing.',
    ),
  },
  {
    name: 'TeleRocket',
    text: l('То же для Telegram — подробный кейс выше.', 'The same for Telegram — see the case study above.'),
  },
  { name: 'RocketCRM' },
];

/* ------------------------------------------------------------------ */
/* Навыки                                                              */
/* ------------------------------------------------------------------ */

export const skillGroups: SkillGroup[] = [
  {
    title: l('Backend', 'Backend'),
    items: ['Python', 'FastAPI', 'Flask', 'aiogram', 'Telethon', 'SQLAlchemy', 'REST API'],
  },
  { title: l('Базы данных', 'Databases'), items: ['PostgreSQL', 'MySQL', 'Redis'] },
  {
    title: l('Инфраструктура', 'Infrastructure'),
    items: ['Linux', 'Docker', 'Nginx', 'Git', 'GitHub', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: l('Frontend', 'Frontend'),
    items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'React Router', 'HTML', 'CSS'],
  },
  {
    title: l('AI и данные', 'AI & Data'),
    items: ['Gemini API', 'Whisper', 'ETL', 'Data processing', 'Automation', 'Machine Learning'],
  },
];

const proof = (name: string, slug?: string) => ({ label: same(name), slug });

export const evidence: Evidence[] = [
  {
    skill: 'Python',
    proof: [
      proof('TeleRocket', 'telerocket'),
      proof('TrendLab', 'trendlab'),
      proof('FLHunter', 'flhunter'),
      proof('Deposit Tracker (ETL)', 'deposit-tracker'),
    ],
  },
  {
    skill: 'FastAPI',
    proof: [proof('TeleRocket', 'telerocket'), proof('TrendLab', 'trendlab'), proof('FLHunter', 'flhunter')],
  },
  { skill: 'PostgreSQL', proof: [proof('TeleRocket', 'telerocket'), proof('FLHunter', 'flhunter')] },
  { skill: 'MySQL', proof: [proof('TrendLab', 'trendlab')] },
  {
    skill: 'React',
    proof: [
      proof('Deposit Tracker', 'deposit-tracker'),
      { label: l('этот сайт', 'this website') },
    ],
  },
  {
    skill: 'AI',
    proof: [
      proof('TrendLab', 'trendlab'),
      proof('FLHunter', 'flhunter'),
      { label: l('рекомендательная система фильмов (ML)', 'movie recommender (ML)') },
    ],
  },
  {
    skill: 'Docker',
    proof: [proof('TeleRocket', 'telerocket'), { label: l('серверные проекты', 'server projects') }],
  },
  {
    skill: 'Telegram',
    proof: [
      proof('TeleRocket', 'telerocket'),
      proof('TrendLab', 'trendlab'),
      proof('FLHunter', 'flhunter'),
      { label: l('другие проекты автоматизации', 'other automation projects') },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Обо мне                                                             */
/* ------------------------------------------------------------------ */

export const about = {
  paragraphs: [
    l(
      'Я Python-разработчик, специализируюсь на backend-разработке, автоматизации и создании цифровых продуктов.',
      'I am a Python developer specialising in backend development, automation and building digital products.',
    ),
    l(
      'Начав с небольших программ и автоматизации, я постепенно перешёл к более сложным системам: API, базы данных, фоновые задачи, интеграции, AI и deployment.',
      'Starting with small programs and automation, I gradually moved on to more complex systems: APIs, databases, background jobs, integrations, AI and deployment.',
    ),
    l(
      'Работал над коммерческими продуктами, внутренними системами и собственными проектами. Сейчас мой основной фокус — backend-разработка на Python и создание полноценных программных продуктов.',
      'I have worked on commercial products, internal systems and personal projects. My main focus now is backend development in Python and building complete software products.',
    ),
  ],
  path: ['C++ / Robotics', 'Python', 'Automation', 'Telegram', 'Backend', 'Digital products'],
  freelance: l(
    'Около года коммерческой разработки на фрилансе, 20+ клиентов и проектов: Python и автоматизация, Telegram-боты, backend и API, парсинг, интеграции, базы данных, небольшие веб-сервисы, AI-инструменты, поддержка чужих проектов.',
    'About a year of commercial freelance development, 20+ clients and projects: Python and automation, Telegram bots, backend and APIs, parsing, integrations, databases, small web services, AI tools, maintaining existing projects.',
  ),
  school: l('МАОУ «Лицей № 3», Чебоксары, выпуск 2026', 'MAOU Lyceum No. 3, Cheboksary, class of 2026'),
  scores: [
    { subject: l('Информатика', 'Informatics'), score: '90' },
    { subject: l('Профильная математика', 'Mathematics (advanced)'), score: '83' },
    { subject: l('Русский язык', 'Russian'), score: '83' },
  ],
  english: l('Английский — B2: документация, API, GitHub, технические материалы.', 'English — B2: documentation, APIs, GitHub, technical materials.'),
  achievements: [
    l(
      'Победитель НПК с проектом по Machine Learning — рекомендательная система фильмов.',
      'Winner of a scientific-practical conference with a Machine Learning project — a movie recommender.',
    ),
    l(
      'Победитель НПК с проектом по C++ и робототехнике (5–6 класс).',
      'Winner of a scientific-practical conference with a C++ and robotics project (grades 5–6).',
    ),
    l('Призёр муниципального уровня по физике.', 'Prize-winner at municipal level in physics.'),
    l('Призёр муниципального уровня по математике (9 класс).', 'Prize-winner at municipal level in mathematics (grade 9).'),
    l(
      'Командная олимпиада по программированию: первый тур пройден, следующий этап — в Иннополисе.',
      'Team programming olympiad: passed the first round and advanced to the next stage in Innopolis.',
    ),
  ],
};

/* ------------------------------------------------------------------ */
/* Контакты                                                            */
/* ------------------------------------------------------------------ */

export const contact = {
  title: l('Давайте работать вместе.', 'Let’s build something useful.'),
  text: l(
    'Открыт к backend-стажировкам, разработке программного обеспечения и интересным инженерным задачам.',
    'Open to backend internships, software development opportunities and interesting engineering problems.',
  ),
};
