
import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return{
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api/yelp': {
          target: 'https://api.yelp.com/v3',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/yelp/, ''),
          headers: {
            Authorization: 'Bearer ' + process.env.VITE_YELP_KEY,
          },
        },
          '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
          },
      },
    },
  };
});
