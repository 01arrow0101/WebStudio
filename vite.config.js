import { fileURLToPath, URL } from 'node:url';
import svgLoader from 'vite-svg-loader';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/deploy',
  plugins: [
    vue(),
    svgLoader({
      svgoConfig: {
        //
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsDir: 'assets', // Убедитесь, что этот параметр соответствует вашей структуре папок
  }
});
