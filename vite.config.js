import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default defineConfig({
  plugins: [react(), nodePolyfills()],
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
  resolve: {
    alias: {
      'aws-amplify': 'aws-amplify', // Remova a especificação do arquivo se o Vite estiver tratando como módulo ESM
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  define: {
    global: {},
  },
  optimizeDeps: {
    include: ['buffer', 'aws-amplify', '@aws-amplify/api']
  },
});
