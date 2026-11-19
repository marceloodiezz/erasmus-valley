import { defineConfig } from 'vite';

// Configuración de Vite para Erasmus Valley: Salerno Edition
// Con 'base: ./' para compatibilidad directa con GitHub Pages en cualquier subdirectorio
export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
