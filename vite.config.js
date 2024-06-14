import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Definir 'src' como o diretório raiz
  build: {
    outDir: '../dist', // Saída será na pasta 'dist' no diretório raiz
    assetsDir: '.', // Diretório para arquivos de asset (relativo a outDir)
    rollupOptions: {
      input: {
        main: 'src/index.html',
        admin: 'src/admin.html',
        forms: 'src/forms.html',
        user: 'src/user.html',
      },
    },
  },
});
