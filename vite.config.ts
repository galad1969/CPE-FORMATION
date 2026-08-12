import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/CPE-FORMATION/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
