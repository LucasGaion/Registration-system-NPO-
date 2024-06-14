// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: '.', // Diretório para arquivos de asset (relativo a outDir)
    rollupOptions: {
      input: {
        main: './index.html',
        admin: './admin.html', // Arquivo HTML adicional (exemplo)
        forms: './forms.html', // Arquivo HTML adicional (exemplo)
        user: './user.html', // Arquivo HTML adicional (exemplo)
      },
    },
  },
});
