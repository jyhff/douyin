import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 8000;
const BUILD_DIR = path.resolve('c:/Users/Admin/Desktop/DouYin/douyin_mobile_app/build/web');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.wasm': 'application/wasm',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let cleanUrl = req.url.split('?')[0];
  if (cleanUrl === '/' || cleanUrl === '') cleanUrl = '/index.html';
  const filePath = path.join(BUILD_DIR, cleanUrl);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      // SPA Fallback
      fs.readFile(path.join(BUILD_DIR, 'index.html'), (fallbackErr, indexHtml) => {
        if (fallbackErr) {
          res.writeHead(404);
          res.end('Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(indexHtml);
        }
      });
    } else {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Flutter Native Web App running at http://localhost:${PORT}`);
});
