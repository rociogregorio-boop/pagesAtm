import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rollupOptions:{
      input:{
        main: resolve(__dirname,'index.html'),
        blog: resolve(__dirname,'pages/blog-card.html'),
        qr: resolve(__dirname, 'pages/qr-card.html'),
        reto9: resolve(__dirname,'pages/reto9.html'),
        js: resolve(__dirname,'pages/mainj.html'),
        estructurajs: resolve(__dirname,'pages/estructuta.html'),
        atmjs: resolve(__dirname,'pages/atm.html')

        
      }
    }
  }
})