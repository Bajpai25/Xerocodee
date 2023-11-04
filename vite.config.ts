/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
   globals: true, // < ==
  },
  plugins: [
    react(),
    checker({ typescript: true }),
    // You can also disable type checking when running testing with Vitest
    // !process.env.VITEST ? checker({ typescript: true }) : undefined,
  ],
})
