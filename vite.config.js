// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Diretório de saída do build
    assetsDir: '.', // Diretório para arquivos de asset (relativo a outDir)
    rollupOptions: {
      input: {
        main: './index.html', // Ponto de entrada principal do seu aplicativo
        admin: './admin.html', // Arquivo HTML adicional (exemplo)
        forms: './forms.html', // Arquivo HTML adicional (exemplo)
        user: './user.html', // Arquivo HTML adicional (exemplo)
      },
    },
  },
});