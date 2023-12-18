import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert({ hosts: ['localhost', 'localhost.aretelending.xyz'] })],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
    https: true
  },
  define: {
    global: 'window'
  },
  build: {
    commonjsOptions: { include: [] }
  },
  optimizeDeps: {
    disabled: false
  }
});
