import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@types': './src/types',
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@services': '/src/services',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
    },
  },
});
