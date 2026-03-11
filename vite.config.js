import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
       fontFamily: {
      roboto: ['Roboto Flex', 'sans-serif'],
      nunito: ["Nunito", "sans-serif"],
      lato: ['Lato', 'sans-serif'],
    },
      textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.3)',
        md: '2px 2px 4px rgba(0,0,0,0.4)',
        lg: '4px 4px 8px rgba(0,0,0,0.5)',
      },
    
    },
  },
  plugins: [tailwindcss(),
    

  react()],
})

