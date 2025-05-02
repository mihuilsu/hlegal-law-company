import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        publications: resolve(__dirname, 'publications.html'),
        about: resolve(__dirname, 'about.html'),
        team: resolve(__dirname, 'team.html')
      },
    },
  },
});
