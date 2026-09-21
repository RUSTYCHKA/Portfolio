/** Путь к файлу из папки public с учётом base из vite.config.ts */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
