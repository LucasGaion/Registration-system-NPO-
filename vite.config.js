import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'aws-amplify': 'aws-amplify/lib', // Alias para AWS Amplify
      'lodash-es': 'lodash-es' // Corrigido para resolver lodash como módulo ES
    }
  },
  optimizeDeps: {
    include: ['aws-amplify']
  },
  build: {
    outDir: 'dist', // Diretório de saída
    assetsDir: '.', // Diretório dos assets
    rollupOptions: {
      input: {
        main: './index.html',
        admin: './admin.html',
        forms: './forms.html',
        user: './user.html',
      },
      external: ['lodash-es'] // Declarar lodash-es como um módulo externo
    },
  },
});
