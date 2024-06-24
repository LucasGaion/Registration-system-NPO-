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
    outDir: 'dist', 
    assetsDir: '.', 
    rollupOptions: {
      input: {
        main: './index.html',
        admin: './admin.html',
        forms: './forms.html',
        user: './user.html',
      },
    },
  },
});
