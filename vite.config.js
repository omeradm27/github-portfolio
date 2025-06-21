// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/github-portfolio/',
  server: {
    open: true,
    port: 5173,
  },
  plugins: [react(), tailwindcss()],
});
