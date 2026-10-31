import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://agron-gojcaj.github.io/dev-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/dev-portfolio/',
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
});
