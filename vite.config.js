// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/github-portfolio/',
  define: {
    'process.env': process.env,
  },
  plugins: [react(), tailwindcss()],
});
