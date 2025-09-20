import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ldree-real-estate-website/',
  base: '/ldree-real-estate-website/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
