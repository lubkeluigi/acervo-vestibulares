import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import listsHandler from './api/lists.js';

function customListsApiPlugin() {
  const middleware = (req, res, next) => {
    const urlPath = (req.url || '').split('?')[0];
    if (urlPath === '/api/lists' || urlPath === '/api/lists/') {
      listsHandler(req, res);
      return;
    }
    next();
  };
  return {
    name: 'custom-lists-api',
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig({
  plugins: [react(), customListsApiPlugin()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/src/data/studySheets')) {
            return 'data-sheets';
          }
          if (id.includes('/src/data/famerp2015') || id.includes('/src/data/famerp2016') || id.includes('/src/data/famerp2017') || id.includes('/src/data/famerp2018')) {
            return 'data-famerp-1';
          }
          if (id.includes('/src/data/famerp2019') || id.includes('/src/data/famerp2020') || id.includes('/src/data/famerp2021') || id.includes('/src/data/famerp2022')) {
            return 'data-famerp-2';
          }
          if (id.includes('/src/data/famerp')) {
            return 'data-famerp-3';
          }
          if (id.includes('/src/data/famema')) {
            return 'data-famema';
          }
          if (id.includes('/src/data/uea')) {
            return 'data-uea';
          }
          if (id.includes('/src/data/santacasa') || id.includes('/src/data/fuvest') || id.includes('/src/data/uerj')) {
            return 'data-sp-rj';
          }
          if (id.includes('/src/data/ufpr')) {
            return 'data-ufpr';
          }
          if (id.includes('/src/data/')) {
            return 'data-others';
          }
          if (id.includes('/src/components/')) {
            return 'components';
          }
        },
      },
    },
  },
});
