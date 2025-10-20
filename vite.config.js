import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],  // This line was commented out
  server: {
    port: 3000,
    open: true
  }
});