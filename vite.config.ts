import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
    },
  },
  server: {
    hmr: true,
    fs: {
      strict: false, // Enable fallback for serving routes
    },
  },
});
