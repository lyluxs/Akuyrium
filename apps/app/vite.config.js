import { defineConfig } from 'vite';

export default defineConfig({
  // Keep the existing single-file application intact during the first migration.
  // Assets and scripts will be extracted in later, separately tested steps.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
