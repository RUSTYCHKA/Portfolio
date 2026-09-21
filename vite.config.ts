import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' — относительные пути, поэтому сайт работает и по адресу
// https://<user>.github.io/<repo>/, и как user-site https://<user>.github.io/
export default defineConfig({
  base: './',
  plugins: [react()],
});
