import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
   theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.3)',
        md: '2px 2px 4px rgba(0,0,0,0.4)',
        lg: '4px 4px 8px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        roboto: ['"Roboto Flex"', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindcss(),
     require('tailwindcss-textshadow'),

  react()],
})

