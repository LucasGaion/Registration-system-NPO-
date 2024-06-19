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
        main: 'public/index.html',
        admin: 'public/admin.html',
        forms: 'public/forms.html',
        user: 'public/user.html',
      },
    },
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
    },
  },
  define: {
    global: {},
    'process.env': {},
  },
});
