import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

// 确保 screenshots 目录存在
if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
}

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9223;

console.log('1. Launching Chrome with remote debugging on port ' + PORT + '...');
const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=' + PORT,
  '--window-size=1200,950',
  'http://localhost:5173/'
]);

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getWsUrl() {
  for (let i = 0; i < 30; i++) {
    try {
      const data = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:' + PORT + '/json', res => {
          let str = '';
          res.on('data', chunk => str += chunk);
          res.on('end', () => resolve(JSON.parse(str)));
        }).on('error', reject);
      });
      if (data && data.length > 0 && data[0].webSocketDebuggerUrl) {
        return data[0].webSocketDebuggerUrl;
      }
    } catch (e) {}
    await sleep(300);
  }
  throw new Error('Chrome remote debug not ready');
}

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.callbacks = new Map();
    this.nextId = 1;
  }
  async connect() {
    return new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const cb = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) cb.reject(new Error(msg.error.message));
          else cb.resolve(msg.result);
        }
      };
    });
  }
  async send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  async eval(expr) {
    const res = await this.send('Runtime.evaluate', {
      expression: expr,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      console.error('Eval error on:', expr, res.exceptionDetails);
    }
    return res.result ? res.result.value : null;
  }
  async screenshot(filename) {
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join('screenshots', filename), Buffer.from(res.data, 'base64'));
    console.log('Saved screenshot:', filename);
  }
}

async function run() {
  try {
    const wsUrl = await getWsUrl();
    console.log('2. Connected to Chrome WS:', wsUrl);
    const client = new CDPClient(wsUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('Runtime.enable');

    // 等待页面完全加载渲染
    await sleep(2500);

    // 01. 推荐视频流
    console.log('Capturing 01_feed...');
    await client.screenshot('01_feed.png');

    // 05. 打开评论区
    console.log('Opening comments drawer...');
    await client.eval(`
      const btn = document.getElementById('commentActionBtn');
      if (btn) btn.click();
    `);
    await sleep(800);
    await client.screenshot('05_comments.png');

    // 关闭评论区
    await client.eval(`
      const closeBtn = document.querySelector('.comments-close-btn');
      if (closeBtn) closeBtn.click();
    `);
    await sleep(500);

    // 06. 朋友专区
    console.log('Navigating to Friends tab...');
    await client.eval(`
      const navs = document.querySelectorAll('.mobile-bottom-nav .nav-item');
      if (navs && navs[1]) navs[1].click();
    `);
    await sleep(800);
    await client.screenshot('06_friends.png');

    // 07. 消息中心
    console.log('Navigating to Messages tab...');
    await client.eval(`
      const navs = document.querySelectorAll('.mobile-bottom-nav .nav-item');
      if (navs && navs[3]) navs[3].click();
    `);
    await sleep(800);
    await client.screenshot('07_messages.png');

    // 08. 个人主页「我」
    console.log('Navigating to Profile tab...');
    await client.eval(`
      const navs = document.querySelectorAll('.mobile-bottom-nav .nav-item');
      if (navs && navs[4]) navs[4].click();
    `);
    await sleep(800);
    await client.screenshot('08_profile.png');

    // 09. 打开侧边栏
    console.log('Opening profile sidebar drawer...');
    await client.eval(`
      const moreBtn = document.querySelector('#profileNavMoreBtn, .profile-nav-btn');
      if (moreBtn) moreBtn.click();
    `);
    await sleep(800);
    await client.screenshot('09_sidebar.png');

    // 16. 打开搜索页面
    console.log('Testing Search Home...');
    await client.eval(`
      const closeSidebar = document.querySelector('.profile-sidebar-mask');
      if (closeSidebar) closeSidebar.click();
    `);
    await sleep(400);
    await client.eval(`
      const homeTab = document.querySelectorAll('.mobile-bottom-nav .nav-item')[0];
      if (homeTab) homeTab.click();
    `);
    await sleep(500);
    await client.eval(`
      const searchBtn = document.querySelector('.search-btn');
      if (searchBtn) searchBtn.click();
    `);
    await sleep(800);
    await client.screenshot('16_search.png');

    // 15. 相机拍摄工作台
    console.log('Testing Publish modal...');
    await client.eval(`
      const backBtn = document.querySelector('.search-back-btn');
      if (backBtn) backBtn.click();
    `);
    await sleep(400);
    await client.eval(`
      const publishBtn = document.querySelector('.nav-publish');
      if (publishBtn) publishBtn.click();
    `);
    await sleep(800);
    await client.screenshot('15_publish.png');

    console.log('All automated inspections completed successfully!');
  } catch (err) {
    console.error('Inspection failed:', err);
  } finally {
    try { chrome.kill(); } catch (e) {}
    process.exit(0);
  }
}

run();
