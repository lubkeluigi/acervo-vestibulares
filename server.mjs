import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import listsHandler from './api/lists.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = 4177;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

const COMPRESSIBLE = new Set(['.html', '.js', '.mjs', '.css', '.json', '.svg']);

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/api/lists' || urlPath === '/api/lists/') {
    listsHandler(req, res);
    return;
  }

  let filePath = path.join(DIST_DIR, urlPath);

  try {
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      if (fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      } else {
        filePath = path.join(DIST_DIR, 'index.html');
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const acceptEncoding = req.headers['accept-encoding'] || '';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }

      if (COMPRESSIBLE.has(ext) && acceptEncoding.includes('gzip')) {
        zlib.gzip(data, (gzErr, compressed) => {
          if (gzErr) {
            res.writeHead(200, {
              'Content-Type': contentType,
              'Content-Length': data.length,
              'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
            });
            res.end(data);
            return;
          }
          res.writeHead(200, {
            'Content-Type': contentType,
            'Content-Encoding': 'gzip',
            'Content-Length': compressed.length,
            'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
          });
          res.end(compressed);
        });
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Content-Length': data.length,
          'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
        });
        res.end(data);
      }
    });
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Error');
  }
});

server.listen(PORT, '::', () => {
  console.log(`Server listening on [::]:${PORT} with GZIP & CORS enabled`);
});
