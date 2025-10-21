import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  root: '.',  // Explicitly set root directory
  publicDir: 'public',  // Explicitly set public directory
  plugins: [
    react()
  ],
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      host: 'localhost',
      port: 3000
    },
    fs: {
      strict: true
    },
    cors: true,
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  }
});