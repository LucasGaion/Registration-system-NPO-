import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window'
  },
  resolve: {
    alias: {
      'aws-amplify': 'aws-amplify/lib', // Alias para AWS Amplify
      'lodash': 'lodash-es' // Alias para lodash, garantindo que seja tratado como módulo ES
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
      external: ['lodash'] // Declarar lodash como um módulo externo
    },
  },
});
