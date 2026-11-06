import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite para el proyecto.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 0.0.0.0 permite acceder desde el navegador / red local.
    host: true,
    port: 5173,
    // Vite 8 rechaza hosts desconocidos por defecto;
    // permitimos el dominio del preview para que funcione en entornos remotos.
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
