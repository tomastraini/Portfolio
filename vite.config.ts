import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this repo from /Portfolio, and the Pages source is the
// docs/ folder on the default branch — so the build writes straight into docs/.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
});
