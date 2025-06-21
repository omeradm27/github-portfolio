// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'vite-plugin-windicss'; // Correct import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
