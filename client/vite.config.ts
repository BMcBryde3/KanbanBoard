import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Bind to 0.0.0.0 to listen on all interfaces (needed for Render)
    port: 3000,
    allowedHosts: ['one3-candidate-search-9d2e.onrender.com'], // Add this host to allowed hosts
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
    },
    
  },
});
