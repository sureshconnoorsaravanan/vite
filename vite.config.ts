import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Adjust the alias according to your directory structure
      '@assets': '/src/assets',
      '@components': '/src/components',
    },
  },
});
