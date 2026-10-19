import { defineConfig } from 'vite';

export default defineConfig({
  // 使用相对路径，确保无论是部署在 GitHub Pages 根目录还是子路径，资源都能正确加载
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});
