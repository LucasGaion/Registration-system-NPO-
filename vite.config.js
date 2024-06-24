import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window'
  },
  resolve: {
    alias: {
      'aws-amplify': 'aws-amplify/lib'
    }
  },
  optimizeDeps: {
    include: ['aws-amplify']
  },
  build: {
    outDir: 'dist', // Diretório de saída
    assetsDir: '.', // Diretório dos assets
    rollupOptions: {
      external: ['lodash'], // Declarar lodash como um módulo externo
      input: {
        main: './index.html',
        admin: './admin.html',
        forms: './forms.html',
        user: './user.html',
        app: './app.mjs', // Incluir o arquivo app.mjs como um input
      },
    },
  },
});
