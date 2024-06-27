import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'aws-amplify': 'aws-amplify/lib', // Alias for AWS Amplify
      'lodash-es': 'lodash-es' // Alias for lodash-es
    }
  },
  optimizeDeps: {
    include: ['aws-amplify', 'lodash-es']
  },
  build: {
    outDir: 'dist', // Output directory
    assetsDir: '.', // Assets directory
    rollupOptions: {
      input: {
        main: './index.html',
        admin: './admin.html',
        forms: './forms.html',
        user: './user.html',
      },
      external: ['lodash-es'] // Declare lodash-es as an external module
    },
  },
});
