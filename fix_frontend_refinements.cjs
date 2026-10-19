const fs = require('fs');

// 1. 修复 index.html
let html = fs.readFileSync('index.html', 'utf8');

// 修复重复 style 属性
html = html.replace(
  'data-pencil-name="红色关注大按钮" id="userProfileFollowBtn" style="cursor: pointer; pointer-events: auto;"\n              style="',
  'data-pencil-name="红色关注大按钮" id="userProfileFollowBtn" style="cursor: pointer; pointer-events: auto; '
);

html = html.replace(
  'data-pencil-name="返回按钮" id="closeUserProfileBtn" style="cursor: pointer; pointer-events: auto;"\n            style="',
  'data-pencil-name="返回按钮" id="closeUserProfileBtn" style="cursor: pointer; pointer-events: auto; '
);

html = html.replace(
  'data-pencil-name="求更新按钮" id="askUpdateBtn" style="cursor: pointer; pointer-events: auto;"\n              style="',
  'data-pencil-name="求更新按钮" id="askUpdateBtn" style="cursor: pointer; pointer-events: auto; '
);

html = html.replace(
  'data-pencil-name="抖音号行" id="copyDouyinIdBtn" style="cursor: pointer; pointer-events: auto;" title="点击复制"\n            style="',
  'data-pencil-name="抖音号行" id="copyDouyinIdBtn" style="cursor: pointer; pointer-events: auto; '
);

// 替换 &amp; 为 &
html = html.replace(/background-image:\s*url\('([^']*)'\)/g, (match, url) => {
  return `background-image: url('${url.replace(/&amp;/g, '&')}')`;
});

fs.writeFileSync('index.html', html);
console.log('Fixed styles and image URLs in index.html');

// 2. 优化 style.css 确保全屏页面居中且不溢出
let css = fs.readFileSync('style.css', 'utf8');

// 确保 mobile-app-shell 隐藏溢出
const shellOverflowRule = `
.mobile-app-shell {
  overflow: hidden !important;
  position: relative !important;
}

.user-profile-fullscreen-page {
  display: none !important;
}

.user-profile-fullscreen-page.open {
  display: block !important;
  transform: translateX(0) !important;
  pointer-events: auto !important;
}
`;

if (!css.includes('.user-profile-fullscreen-page.open {')) {
  css += shellOverflowRule;
} else {
  css = css.replace(
    /\.user-profile-fullscreen-page\s*\{[\s\S]*?\.user-profile-fullscreen-page\.open\s*\{[\s\S]*?\}/,
    `
.mobile-app-shell {
  overflow: hidden !important;
  position: relative !important;
}

.user-profile-fullscreen-page {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background-color: #ffffff !important;
  border-radius: 44px !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  z-index: 60 !important;
  display: none !important;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.5) !important;
}

.user-profile-fullscreen-page.open {
  display: block !important;
  pointer-events: auto !important;
  animation: slideInRight 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
}

@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0.8; }
  to { transform: translateX(0); opacity: 1; }
}
`
  );
}

fs.writeFileSync('style.css', css);
console.log('Updated style.css with clean display and slide animations');
