import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        inter: ['InterVariable', 'Inter', 'sans-serif'],
      },
    },
  },
});