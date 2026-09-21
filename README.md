# Портфолио — Арсений Кармаенков

Статический сайт на React + TypeScript + Vite. Два языка (RU/EN), страницы-кейсы проектов,
автодеплой на GitHub Pages через GitHub Actions.

## Быстрый старт

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # сборка в dist/
npm run preview    # посмотреть собранную версию
npm run typecheck  # проверка типов
```

Нужны Node.js 20+ и Git.

## Где что менять

| Что | Где |
| --- | --- |
| Все тексты, проекты, навыки, контакты | `src/data/content.ts` |
| Цвета, шрифты, отступы | `src/styles.css` (переменные в `:root`) |
| Иконка вкладки | `public/favicon.svg` |
| Скриншоты проектов | `public/screenshots/` + поле `screenshots` в `content.ts` |

### Добавить ссылки на проект

В `src/data/content.ts` у нужного проекта:

```ts
links: [
  { label: l('Демо', 'Live demo'), href: 'https://rustychka.github.io/deposit-tracker/' },
  { label: l('Код на GitHub', 'Code on GitHub'), href: 'https://github.com/RUSTYCHKA/deposit-tracker' },
],
```

### Добавить скриншоты

1. Положите файл в `public/screenshots/`, например `deposit-tracker-calculator.png`.
2. В `content.ts` у проекта:

```ts
screenshots: [
  { src: 'screenshots/deposit-tracker-calculator.png', alt: l('Калькулятор доходности', 'Yield calculator') },
],
```

Раздел «Скриншоты» появится на странице кейса автоматически.

### Добавить новый проект

Скопируйте любой объект в массиве `projects` в `content.ts`, поменяйте `slug` (латиница, без пробелов),
тексты и блоки. Страница `/#/projects/<slug>` создаётся сама.

Типы блоков кейса: `text` (абзацы), `list` (список), `flow` (цепочка/архитектура), `terms` (термин + пояснение).

## Анимации

Все анимации написаны на чистом CSS и небольших React-хуках, без сторонних библиотек.

| Эффект | Где |
| --- | --- |
| Появление имени «из-под маски», ступенчатое появление hero | `.hero h1 .line`, класс `.rise` в `styles.css` |
| Печатающаяся строка «Делаю: …» | `Typewriter.tsx`, слова в `person.building` (`content.ts`) |
| Плавающий «аврора»-фон, сетка, подсветка под курсором | `.hero__blob`, `.hero__spot` |
| Цепочка TeleRocket: подсветка узлов и бегущий импульс | `Flow.tsx` (`loop`), блок «Flow» в `styles.css` |
| Бегущие строки со стеком | `Marquee.tsx` |
| Появление блоков при прокрутке | `Reveal.tsx`, хук `useInView.ts` |
| Счётчики «~100 пользователей» | `CountUp.tsx` |
| Наклон и подсветка карточек, «магнитные» кнопки | `useCardFx.ts`, `useMagnetic.ts` |
| Липкая шапка, полоса прогресса, подсветка раздела в меню | `Header.tsx`, `ScrollProgress.tsx` |
| Плавная смена страниц | `AnimatedRoutes` в `App.tsx`, класс `.page` |

Если у пользователя в системе включено «уменьшить движение», сайт показывается без анимаций.

**Как настроить:**
- Скорость и цвета фона — переменные `--aurora-*` и `@keyframes drift-*` в `styles.css`.
- Выключить фон-аврору: удалите три `<div className="hero__blob …" />` в `Home.tsx`.
- Убрать бегущие строки: удалите `<Marquee />` в `Home.tsx`.
- Убрать наклон карточки: в `FeaturedProject` замените `useCardFx<HTMLElement>(true)` на `useCardFx<HTMLElement>()`.

## Деплой на GitHub Pages

1. Создайте на GitHub **пустой** репозиторий `portfolio` (Public, без README/.gitignore/license).
2. В репозитории: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Выполните в папке проекта:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/RUSTYCHKA/portfolio.git
git push -u origin main
```

4. Откройте вкладку **Actions** — дождитесь зелёной галочки у workflow «Deploy to GitHub Pages».
5. Сайт будет здесь: `https://rustychka.github.io/portfolio/`

Дальше любое обновление — просто:

```bash
git add .
git commit -m "Update content"
git push
```

### Сайт по адресу rustychka.github.io

Назовите репозиторий ровно `RUSTYCHKA.github.io` — тогда сайт откроется по `https://rustychka.github.io/`.
Больше ничего менять не нужно: в проекте используются относительные пути и HashRouter.

## Если что-то не работает

- **Workflow упал на шаге deploy** — не включён Pages: Settings → Pages → Source: GitHub Actions,
  затем Actions → последний запуск → Re-run all jobs.
- **Белая страница** — откройте консоль браузера (F12). Проверьте, что в `vite.config.ts` стоит `base: './'`.
- **Скриншот не отображается** — путь в `src` указывается от папки `public`, без `public/` в начале,
  регистр букв в имени файла важен.
- **Адреса вида `/#/projects/telerocket`** — это нормально: HashRouter нужен, чтобы страницы работали
  на GitHub Pages без настройки серверных редиректов.
