/**
 * Douyin Web Application Main Logic
 * 沉浸式短视频交互、算法流推荐、点赞动效、评论系统、发布功能与架构全景展示
 */

// 预置真实抖音截图1:1像素级短视频与用户素材流
const INITIAL_VIDEOS = [
  {
    id: 1,
    type: "video",
    author: {
      id: "u_ai_qian",
      name: "在公司楼下捡钱",
      handle: "@在公司楼下捡钱",
      avatar: "./image-design/微信图片_20261018114509.jpg",
      verified: true,
      bio: "探索AI与语言进化的前沿实验 | 科技独立创作者",
      followers: "89.2w",
      following: 12,
      totalLikes: "340w"
    },
    caption: "我让两个AI互相问了1000个问题，它们进化出了自己的语言 #热点 我让两个AI互相交流，探讨人类未知的语言模型边界...",
    tags: ["#热点", "#AI进化", "#语言模型", "#科技探索"],
    chapter: "三 章节要点 · 下一章",
    statement: "📢 作者声明: 内容由AI生成 >",
    relatedSearch: "🔍 相关搜索 · claude动画 >",
    music: "听抖音 · 原声音乐",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    coverUrl: "./image-design/微信图片_20261018114509.jpg",
    likes: 219000,
    commentsCount: 4592,
    collectedCount: 32000,
    shares: 78000,
    isLiked: false,
    isCollected: false,
    isFollowed: false,
    danmakuList: [
      "太有意思了",
      "这个视频也是ai跑出来的吗",
      "八刷打卡",
      "小克劳德？",
      "token消灭机",
      "引言 | ... | 理解的原因 | 新会话",
      "语言进化不可阻挡",
      "AI真的会自己创造语法！"
    ],
    comments: [
      { id: 101, user: "科技前沿控", avatar: "./image-design/微信图片_20261018114455.jpg", text: "这也太硬核了，两个大模型自己生成了全新符号编码！", time: "2小时前", likes: 3420, isLiked: false },
      { id: 102, user: "满月刘海", avatar: "./image-design/微信图片_20261018114457.jpg", text: "八刷打卡，真的很震撼", time: "3小时前", likes: 1890, isLiked: false },
      { id: 103, user: "极客小林", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", text: "已三连！背景声效也特别沉浸", time: "5小时前", likes: 890, isLiked: false }
    ]
  },
  {
    id: 2,
    type: "live",
    isLive: true,
    author: {
      id: "u_shao",
      name: "邵艾伦日常（薄肌版）",
      handle: "@邵艾伦日常",
      avatar: "./image-design/微信图片_20261018114507.jpg",
      verified: true,
      bio: "美式英语发音与日常分享 | 欢迎来到直播间交流！",
      followers: "52.3w",
      following: 88,
      totalLikes: "430w"
    },
    caption: "黄毛薄肌版",
    liveChatTip: "280+人在聊 | 美式英语发音正确读法讲解",
    tags: ["#英语学习", "#日常直播", "#美式发音"],
    music: "邵艾伦原声直播间音频",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    coverUrl: "./image-design/微信图片_20261018114507.jpg",
    likes: 18600,
    commentsCount: 1240,
    shares: 890,
    isLiked: false,
    isCollected: false,
    isFollowed: false,
    danmakuList: [
      "老师发音太纯正了",
      "主播今天什么时候下播呀",
      "跟着读了一遍，舌位确实对了",
      "直播间氛围好好！"
    ],
    comments: [
      { id: 201, user: "英语爱好者", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80", text: "每天都来蹲发音讲解，进步很大！", time: "1小时前", likes: 580, isLiked: false }
    ]
  },
  {
    id: 3,
    type: "album",
    isImageAlbum: true,
    albumCount: 4,
    author: {
      id: "u_cat",
      name: "猫猫.",
      handle: "@猫猫.",
      avatar: "./image-design/微信图片_20261018114505.jpg",
      verified: false,
      bio: "记录萌宠与主机游戏的惬意日常 🐱🎮",
      followers: "1.2w",
      following: 15,
      totalLikes: "18w"
    },
    caption: "幸福有很多种 有你在就是一种 #switch #真神时刻 展开",
    tags: ["#switch", "#真神时刻", "#猫猫日常"],
    music: "拍同款 · 猫猫原声",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    coverUrl: "./image-design/微信图片_20261018114505.jpg",
    likes: 23,
    commentsCount: 5,
    collectedCount: 1,
    shares: 4,
    isLiked: false,
    isCollected: false,
    isFollowed: false,
    danmakuList: ["小猫咪太治愈了", "这配色真好看", "同款Switch太赞了"],
    comments: [
      { id: 301, user: "铲屎官阿杰", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80", text: "这也太可爱了吧，求同款壁纸！", time: "30分钟前", likes: 12, isLiked: false }
    ]
  },
  {
    id: 4,
    type: "video",
    author: {
      id: "u_coding",
      name: "全栈架构小哥",
      handle: "@tech_architect",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
      verified: true,
      bio: "10年分布式架构专家 | 拆解千万级高并发短视频架构 | 带你搞定算法与工程",
      followers: "65.4w",
      following: 42,
      totalLikes: "430w"
    },
    caption: "今天带大家深度拆解抖音后端高并发推荐架构！双塔模型、短视频分发CDN、千万级长连接如何设计？点左下角方案查看架构全貌！🔥💻",
    tags: ["#技术分享", "#系统架构", "#高并发", "#抖音开发"],
    music: "Cyberpunk Synthwave - Code Runner",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    coverUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    likes: 98120,
    commentsCount: 4620,
    collectedCount: 15400,
    shares: 18400,
    isLiked: false,
    isCollected: true,
    isFollowed: false,
    danmakuList: ["干货满满！", "微服务高并发拆解到位", "已收藏复习"],
    comments: [
      { id: 401, user: "Gopher小陈", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80", text: "太硬核了！正好在准备微服务和高并发面试，收藏了！", time: "10分钟前", likes: 312, isLiked: false },
      { id: 402, user: "前端艺术家", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", text: "这个Web版抖音的动效细节好逼真，双击点赞和唱片旋转爱了！", time: "1小时前", likes: 185, isLiked: true }
    ]
  }
];

const HOT_TOPICS = [
  { rank: 1, title: "抖音千万级高并发架构全景规划", heat: "1280.5w" },
  { rank: 2, title: "生成式AI与短视频创作变革", heat: "960.2w" },
  { rank: 3, title: "春季户外露营治愈系大片", heat: "720.8w" },
  { rank: 4, title: "超跑引擎声浪挑战赛", heat: "580.1w" },
  { rank: 5, title: "Web前端工程化巅峰体验", heat: "420.3w" }
];

// 朋友专区专属独立数据集
const MOCK_FRIENDS_POSTS = [
  {
    id: "f_1",
    author: {
      name: "林小鹿 🌸",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      relation: "互相关注",
      time: "10分钟前",
      ip: "北京"
    },
    caption: "周末和闺蜜去京郊露营抓拍，落日晚霞太治愈了~ 🏕️🌅 吹吹晚风，所有的烦恼都被治愈！",
    tags: ["#周末露营", "#生活记录", "#朋友日常"],
    mediaType: "video",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    coverUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    likes: 86,
    isLiked: false,
    commentsCount: 19,
    comments: [
      { user: "创作者小天 (我)", text: "景太美了！下次叫上我一起！🙌" },
      { user: "阿哲学长", text: "露营配吉他弹唱绝了！🏕️" }
    ]
  },
  {
    id: "f_2",
    author: {
      name: "阿哲学长 🎸",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      relation: "好友",
      time: "32分钟前",
      ip: "上海"
    },
    caption: "下班随手在天台弹唱一首晴天，大家周末愉快呀！🎸🎵 音乐是疲惫生活里的温柔解药~",
    tags: ["#吉他弹唱", "#日常音乐", "#下班时光"],
    mediaType: "video",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    likes: 142,
    isLiked: true,
    commentsCount: 38,
    comments: [
      { user: "林小鹿 🌸", text: "好好听！前奏一响回到青春时代~" }
    ]
  },
  {
    id: "f_3",
    author: {
      name: "摄影师安安 📸",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      relation: "通讯录好友",
      time: "2小时前",
      ip: "杭州"
    },
    caption: "秋天的西湖岸边，晨雾与古树真的像一幅水墨画。带相机走了两万步，收获满满 🍂🍁",
    tags: ["#西湖晨光", "#胶片摄影", "#城市漫步"],
    mediaType: "image",
    coverUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    likes: 219,
    isLiked: false,
    commentsCount: 45,
    comments: [
      { user: "运动健将大鹏", text: "构图无敌，膜拜摄影大佬！" }
    ]
  }
];

const MOCK_RECOMMEND_FRIENDS = [
  { id: "rf_1", name: "运动健将大鹏 🏃", mutual: "3位共同好友", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
  { id: "rf_2", name: "糕点师米娅 🍰", mutual: "通讯录好友", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
  { id: "rf_3", name: "赛博老猫 🐱", mutual: "可能认识的人", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" }
];


// 截图 114501 / 114451 真实登录用户数据 (1:1 严格对齐 pen 画板 08)
let currentUser = {
  userId: "u_rabbit_rich",
  name: "经验很丰富",
  douyinId: "341103506",
  uniqueId: "341103506",
  avatar: "./image-design/微信图片_20261018114451.jpg",
  followers: 4,
  following: 30,
  mutual: 2,
  likes: 0,
  stats: {
    likes: "0",
    following: "30",
    followers: "4",
    friends: "2"
  },
  ip: "湖北",
  bio: "点击添加介绍，让大家更了解你",
  phone: "138****8888",
  isLoggedIn: true
};

// App State
let videos = [...INITIAL_VIDEOS];
let currentIndex = 0;
let isMuted = true;
let isCommentsDrawerOpen = false;
let scrollLock = false;
let currentNavTab = 'home'; // 'home' | 'friend' | 'message' | 'mine'
let currentHomeTab = 'recommend'; // 'recommend' | 'follow' | 'live' | 'mall' | 'tuan' | 'city'
let isDanmakuOn = false; // 普通短视频默认关闭弹幕；若开启也仅为顶部横向跑马灯；纵向弹幕严格仅在进入直播间后出现

// DOM Elements
const feedStage = document.getElementById("feedStage");
const prevVideoBtn = document.getElementById("prevVideoBtn");
const nextVideoBtn = document.getElementById("nextVideoBtn");
const hotRankList = document.getElementById("hotRankList");
const commentsDrawer = document.getElementById("commentsDrawer");
const closeCommentsDrawerBtn = document.getElementById("closeCommentsDrawerBtn");
const drawerCommentsCount = document.getElementById("drawerCommentsCount");
const commentsList = document.getElementById("commentsList");
const newCommentInput = document.getElementById("newCommentInput");
const sendCommentBtn = document.getElementById("sendCommentBtn");

const publishModal = document.getElementById("publishModal");
const openPublishModalBtn = document.getElementById("openPublishModalBtn");
const closePublishModalBtn = document.getElementById("closePublishModalBtn");
const cancelPublishBtn = document.getElementById("cancelPublishBtn");
const submitPublishBtn = document.getElementById("submitPublishBtn");
const videoPresetSelector = document.getElementById("videoPresetSelector");
const customVideoUrlInput = document.getElementById("customVideoUrlInput");
const publishCaptionInput = document.getElementById("publishCaptionInput");
const publishMusicInput = document.getElementById("publishMusicInput");

const profileModal = document.getElementById("profileModal");
const closeProfileModalBtn = document.getElementById("closeProfileModalBtn");
const profileBodyContent = document.getElementById("profileBodyContent");
const myProfileBtn = document.getElementById("myProfileBtn");

const archPlanModal = document.getElementById("archPlanModal");
const openArchPlanBtn = document.getElementById("openArchPlanBtn");
const closeArchPlanModalBtn = document.getElementById("closeArchPlanModalBtn");
const archPlanContent = document.getElementById("archPlanContent");

const shareModal = document.getElementById("shareModal");
const closeShareModalBtn = document.getElementById("closeShareModalBtn");
const shareLinkInput = document.getElementById("shareLinkInput");
const copyShareLinkBtn = document.getElementById("copyShareLinkBtn");

const searchInput = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const searchSubmitBtn = document.getElementById("searchSubmitBtn");
const navTabs = document.getElementById("navTabs");
const brandLogo = document.getElementById("brandLogo");

// Toast Utility
function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Format numbers (e.g., 12450 -> 1.2w)
function formatCount(num) {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + "w";
  }
  return num.toString();
}

// Initialize Hot Topics
function renderHotRankList() {
  if (!hotRankList) return;
  hotRankList.innerHTML = HOT_TOPICS.map(item => `
    <li class="hot-item" data-keyword="${item.title}">
      <span class="rank-num">${item.rank}</span>
      <span class="tag-word">${item.title}</span>
      <span class="hot-heat">${item.heat}</span>
    </li>
  `).join("");

  hotRankList.querySelectorAll(".hot-item").forEach(item => {
    item.addEventListener("click", () => {
      const keyword = item.dataset.keyword;
      if (searchInput) {
        searchInput.value = keyword;
        if (searchClearBtn) searchClearBtn.style.display = "block";
        handleSearch(keyword);
      }
    });
  });
}

// ===================================================================
// Mobile Navigation & View Helpers (1:1 严格对齐 pen 原型规范)
// ===================================================================
function renderMobileStatusBar() {
  return `
    <div class="mobile-status-bar">
      <span class="status-time">11:45</span>
      <div class="mobile-dynamic-island">
        <div class="island-camera-lens"></div>
        <div class="island-sensor"></div>
      </div>
      <span class="status-sim-5g">5G  100%</span>
    </div>
  `;
}

function renderMobileTopTabs() {
  return `
    <div class="mobile-top-tabs">
      <span class="m-tab-drawer-icon" id="mTabDrawerBtn" title="打开侧边抽屉">☰</span>
      <div class="m-tabs-center">
        <div class="m-top-tab-wrap ${currentHomeTab === 'follow' ? 'active' : ''}" data-tab="follow">
          <span class="m-top-tab-text">关注</span>
          ${currentHomeTab === 'follow' ? '<span class="tab-yellow-indicator"></span>' : ''}
        </div>
        <div class="m-top-tab-wrap ${currentHomeTab === 'mall' ? 'active' : ''}" data-tab="mall">
          <span class="m-top-tab-text">商城</span>
          ${currentHomeTab === 'mall' ? '<span class="tab-yellow-indicator"></span>' : ''}
        </div>
        <div class="m-top-tab-wrap ${currentHomeTab === 'recommend' ? 'active' : ''}" data-tab="recommend">
          <span class="m-top-tab-text">推荐</span>
          ${currentHomeTab === 'recommend' ? '<span class="tab-yellow-indicator"></span>' : ''}
        </div>
      </div>
      <span class="m-tab-search-icon" id="mTabSearch" title="搜索">🔍</span>
    </div>
  `;
}

function bindTopTabsEvents() {
  // 侧边抽屉按钮 (☰)
  document.getElementById("mTabDrawerBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openProfileSidebarDrawer();
  });

  // 搜索图标 (🔍)
  document.getElementById("mTabSearch")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openMobileSearchResultsDrawer("");
  });

  // 关注 / 商城 / 推荐 切换
  document.querySelectorAll(".m-top-tab-wrap").forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.stopPropagation();
      const target = tab.dataset.tab;
      if (target) {
        currentHomeTab = target;
        currentNavTab = 'home';
        renderCurrentView();
      }
    });
  });
}


function renderMobileBottomNav(activeTab) {
  return `
    <div class="mobile-bottom-nav" id="mobileBottomNav">
      <div class="m-nav-item ${activeTab === 'home' ? 'active' : ''}" id="mNavHomeBtn">
        <span class="nav-label">首页</span>
        ${activeTab === 'home' ? '<span class="home-active-bar"></span>' : '<span class="home-active-bar placeholder"></span>'}
      </div>
      <div class="m-nav-item ${activeTab === 'friend' ? 'active' : ''}" id="mNavFriendBtn">
        <span class="nav-label">朋友</span>
        <span class="home-active-bar placeholder"></span>
      </div>
      <div class="m-nav-post-btn" id="mNavPostBtn" title="拍摄发布">
        <div class="douyin-post-pill">
          <span class="post-plus-symbol">+</span>
        </div>
      </div>
      <div class="m-nav-item ${activeTab === 'message' ? 'active' : ''}" id="mNavMsgBtn">
        <span class="nav-label">消息</span>
        <span class="msg-dot-badge"></span>
        <span class="home-active-bar placeholder"></span>
      </div>
      <div class="m-nav-item ${activeTab === 'mine' ? 'active' : ''}" id="mNavMineBtn">
        <span class="nav-label">我</span>
        <span class="home-active-bar placeholder"></span>
      </div>
    </div>
  `;
}

function bindCommonNavEvents() {
  const mNavHomeBtn = document.getElementById("mNavHomeBtn");
  const mNavFriendBtn = document.getElementById("mNavFriendBtn");
  const mNavPostBtn = document.getElementById("mNavPostBtn");
  const mNavMsgBtn = document.getElementById("mNavMsgBtn");
  const mNavMineBtn = document.getElementById("mNavMineBtn");

  mNavHomeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    currentNavTab = 'home';
    renderCurrentView();
  });

  mNavFriendBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    currentNavTab = 'friend';
    showToast("👥 已进入「朋友动态」独立专区");
    renderCurrentView();
  });

  mNavPostBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    openCameraModal();
  });

  mNavMsgBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    currentNavTab = 'message';
    showToast("💬 已进入「互动消息中心」独立页面");
    renderCurrentView();
  });

  mNavMineBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    currentNavTab = 'mine';
    showToast("👤 已进入「个人主页 (我)」独立页面");
    renderCurrentView();
  });
}

// 统一主调度入口
function renderVideo(index) {
  currentIndex = index;
  renderCurrentView();
}

function renderCurrentView() {
  if (currentNavTab === 'friend') {
    renderFriendsPageView();
  } else if (currentNavTab === 'message') {
    renderMessagesPageView();
  } else if (currentNavTab === 'mine') {
    renderProfilePageView();
  } else {
    // currentNavTab === 'home'
    if (currentHomeTab === 'follow') {
      renderFollowPageView();
    } else if (currentHomeTab === 'mall') {
      renderMallPageView();
    } else if (currentHomeTab === 'live') {
      renderLivePageView();
    } else {
      renderRecommendVideoView(currentIndex);
    }
  }
}

// 1. 【首页·推荐】独立全屏高保真页面 (1:1 严格对齐 pen 画板 01 规范)
function renderRecommendVideoView(index) {
  const currentVideo = videos[index] || videos[0];
  const isLive = currentVideo.type === "live" || currentVideo.isLive;
  const isAlbum = currentVideo.type === "album" || currentVideo.isImageAlbum;

  feedStage.innerHTML = `
    <div class="video-card ${isAlbum ? 'album-card' : ''}" id="videoCard">
      <!-- 1. 顶部状态栏 (pen y=0, h=44) -->
      ${renderMobileStatusBar()}

      <!-- 2. 顶部导航栏 (永久固定恒定: ☰ | 关注 | 商城 | 推荐 | 🔍) -->
      ${renderMobileTopTabs()}

      <!-- 3. 图文模式指示器 (pen 02 页面: pos x=330, y=60) -->
      ${isAlbum ? `
        <div class="album-counter-badge">1/${currentVideo.albumCount || 4}</div>
      ` : ''}

      <!-- LIVE 动态标识 (pen 03 页面: pos x=16, y=56) -->
      ${isLive ? `
        <div class="feed-live-top-badge">
          <span class="live-pulse-dot"></span>
          <span>LIVE 直播中</span>
        </div>
      ` : ''}

      <!-- 4. 视频/图文媒体画面 (裁剪干净，彻底消除双重原图文字重叠) -->
      <div class="video-media-viewport ${isAlbum ? 'album-mode' : ''} ${isLive ? 'live-card-mode' : ''}">
        ${isAlbum ? `
          <img src="${currentVideo.coverUrl}" class="album-media-img" alt="album-cover">
        ` : `
          <img src="${currentVideo.coverUrl}" class="video-bg-media" alt="video-cover">
          <video
            id="mainVideoPlayer"
            class="video-element"
            src="${currentVideo.videoUrl}"
            autoplay
            loop
            muted
            playsinline
            preload="auto"
          ></video>
        `}
      </div>

      <!-- 暗色背景渐变层，阻断底图文字重叠 -->
      <div class="video-card-overlay"></div>

      <!-- 5. 横向跑马灯弹幕 (仅非直播且开启弹幕时展示横向跑马灯) -->
      <div class="danmaku-container ${isDanmakuOn && !isLive ? 'show' : ''}" id="danmakuContainer">
        <div class="danmaku-track track-1">
          <div class="danmaku-pill">${isAlbum ? '小猫咪太治愈了！' : '太有意思了！两个模型开始自创代码'}</div>
        </div>
        <div class="danmaku-track track-2">
          <div class="danmaku-pill">${isAlbum ? '同款Switch手柄真好看' : '八刷打卡！神仙选题'}</div>
        </div>
      </div>

      <!-- 6. 居中「📱 全屏观看」悬浮胶囊 (仅普通短视频画板 01 展示) -->
      ${!isAlbum && !isLive ? `
        <div class="center-fullscreen-btn" id="btnCenterFullScreen" title="进入全屏沉浸">
          <span class="fs-icon">📱</span>
          <span>全屏观看</span>
        </div>
      ` : ''}

      <!-- 直播推荐流导流大浮层 (pen 画板 03: pos x=45, y=420, w=300) -->
      ${isLive ? `
        <div class="feed-live-guide-card" id="btnEnterLiveRoomCard">
          <div class="guide-card-header">
            <span class="guide-live-wave">ı,ı,ı</span>
            <span class="guide-chat-info">${currentVideo.liveChatTip || '280+人在聊 | 美式英语发音教学'}</span>
          </div>
          <div class="guide-enter-btn-wrap">
            <button class="btn-direct-enter-live">🔴 点击进入直播间 &gt;</button>
          </div>
        </div>
      ` : ''}

      <!-- 播放/暂停大图标 -->
      <div class="play-pause-indicator" id="playPauseIndicator">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </div>

      <!-- 快进指示器与清屏退出提示 -->
      <div class="speed-indicator-badge" id="speedBadge"><span>🚀 2.0X 快进中...</span></div>
      <div class="clear-screen-tip" id="clearScreenTip">轻触退出清屏模式</div>
      <div class="hearts-container" id="heartsContainer"></div>

      <!-- 7. 文案信息区 (根据画板01、02、03精准区分) -->
      <div class="video-info-area ${isAlbum ? 'album-info-style' : ''}">
        ${!isAlbum && !isLive ? `
          <!-- 章节胶囊 (画板 01 专属) -->
          <div class="chapter-badge-pill">
            <span class="chapter-icon">☰</span>
            <span>三 章节要点 · 下一章 &gt;</span>
          </div>

          <!-- 创作者AI声明 (画板 01 专属) -->
          <div class="author-statement-row" id="authorStatementRow">
            <span>📢 作者声明: 内容由AI生成 &gt;</span>
          </div>
        ` : ''}

        <!-- 作者昵称 -->
        <div class="author-row">
          <span class="author-nickname" id="creatorNickBtn">@${currentVideo.author.name}</span>
          ${currentVideo.author.verified ? `<span class="verified-badge" title="平台认证创作者">✓</span>` : ""}
          ${isLive ? `<span class="live-status-tag">直播中</span>` : ""}
        </div>

        <!-- 标题与展开 -->
        <div class="video-caption">
          <div class="video-caption-text collapsed" id="videoCaptionText">
            ${currentVideo.caption}
          </div>
          <div class="caption-expand-row">
            ${currentVideo.tags.map(tag => `<span class="hashtag">${tag}</span>`).join(" ")}
            <span class="caption-expand-toggle" id="captionExpandToggleBtn">展开 ∨</span>
          </div>
        </div>

        ${!isAlbum && !isLive ? `
          <!-- 底部相关搜索胶囊 (画板 01 专属) -->
          <div class="related-search-capsule" id="videoRelatedSearchBtn" title="点击立即搜索">
            <span>🔍 相关搜索 · claude动画 &gt;</span>
          </div>
        ` : ''}

        <!-- 音乐滚动条 -->
        <div class="music-roll-row">
          <span>🎵 ${currentVideo.music || '听抖音 · 原声音乐'}</span>
        </div>
      </div>

      <!-- 8. 弹幕开关圆形按钮 (短视频与图文相册流专属, pen 原型 x=290, y=720) -->
      ${!isLive ? `
        <div class="danmaku-toggle-btn ${isDanmakuOn ? 'active' : ''}" id="danmakuToggleBtn" title="开启/关闭弹幕">
          <span>弹</span>
        </div>
      ` : ''}

      <!-- 9. 右侧操作栏 (pen x=326, y=350, w=52 严密中轴对齐) -->
      <div class="video-actions-bar">
        <!-- 头像与关注加号 -->
        <div class="action-avatar-wrap" id="actionAvatarWrap" title="查看主页">
          <img src="${currentVideo.author.avatar}" alt="${currentVideo.author.name}" class="author-avatar-img">
          <div class="follow-plus-btn ${currentVideo.isFollowed ? 'followed' : ''}" id="followBtn">
            ${currentVideo.isFollowed ? '✓' : '+'}
          </div>
        </div>

        <!-- 点赞 -->
        <div class="action-item ${currentVideo.isLiked ? 'liked' : ''}" id="actionLikeBtn" title="点赞">
          <div class="action-icon-circle">
            <svg viewBox="0 0 24 24" width="34" height="34" fill="${currentVideo.isLiked ? '#FE2C55' : 'white'}">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span class="action-count" id="actionLikeCount">${formatCount(currentVideo.likes)}</span>
        </div>

        <!-- 评论 -->
        <div class="action-item" id="actionCommentBtn" title="评论">
          <div class="action-icon-circle">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          </div>
          <span class="action-count">${formatCount(currentVideo.commentsCount || currentVideo.comments.length)}</span>
        </div>

        <!-- 收藏 -->
        <div class="action-item ${currentVideo.isCollected ? 'collected' : ''}" id="actionCollectBtn" title="收藏">
          <div class="action-icon-circle">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="${currentVideo.isCollected ? '#FACE15' : 'white'}">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <span class="action-count" id="actionCollectCount">${formatCount(currentVideo.collectedCount || 32000)}</span>
        </div>

        <!-- 分享 -->
        <div class="action-item" id="actionShareBtn" title="分享">
          <div class="action-icon-circle">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="white" stroke-width="2.5">
              <path d="M4 12v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
          </div>
          <span class="action-count">${formatCount(currentVideo.shares || 78000)}</span>
        </div>

        <!-- 黑胶唱片 -->
        <div class="music-disc-wrap" id="musicDisc" title="查看音乐原声">
          <div class="disc-outer-black">
            <img src="${currentVideo.author.avatar}" alt="disc" class="disc-cover">
          </div>
        </div>
      </div>

      <!-- 10. 极细白色进度条 (pen 底边紧贴底栏) -->
      <div class="video-progress-bar-container" id="videoProgressBar">
        <div class="video-progress-filled" id="videoProgressFilled"></div>
      </div>

      <!-- 11. 底部导航栏 (pen x=0, y=760, w=390, h=84) -->
      ${renderMobileBottomNav('home')}
    </div>
  `;

  bindRecommendVideoEvents(currentVideo);
  bindCommonNavEvents();
}

// 绑定推荐流内的视频手势与播放控制
function bindRecommendVideoEvents(currentVideo) {
  const videoPlayer = document.getElementById("mainVideoPlayer");
  const playPauseIndicator = document.getElementById("playPauseIndicator");
  const videoCard = document.getElementById("videoCard");
  const videoProgressFilled = document.getElementById("videoProgressFilled");
  const videoProgressBar = document.getElementById("videoProgressBar");
  const musicDisc = document.getElementById("musicDisc");
  const danmakuContainer = document.getElementById("danmakuContainer");

  // Auto-play
  videoPlayer?.play().catch(() => {
    if (videoPlayer) videoPlayer.muted = true;
    isMuted = true;
    videoPlayer?.play().catch(() => {});
  });

  videoPlayer?.addEventListener("timeupdate", () => {
    if (videoPlayer.duration) {
      const percentage = (videoPlayer.currentTime / videoPlayer.duration) * 100;
      if (videoProgressFilled) videoProgressFilled.style.width = `${percentage}%`;
    }
  });

  videoProgressBar?.addEventListener("click", (e) => {
    e.stopPropagation();
    const rect = videoProgressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekPercentage = clickX / rect.width;
    if (videoPlayer?.duration) {
      videoPlayer.currentTime = seekPercentage * videoPlayer.duration;
    }
  });

  // 弹幕开关 (截图 114509 像素级还原)
  document.getElementById("danmakuToggleBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    isDanmakuOn = !isDanmakuOn;
    document.getElementById("danmakuToggleBtn")?.classList.toggle("active", isDanmakuOn);
    danmakuContainer?.classList.toggle("show", isDanmakuOn);
    danmakuContainer?.classList.toggle("hidden", !isDanmakuOn);
    showToast(isDanmakuOn ? "💬 实时弹幕已开启" : "🔇 弹幕已关闭");
  });

  // 全屏观看
  document.getElementById("btnCenterFullScreen")?.addEventListener("click", (e) => {
    e.stopPropagation();
    videoCard.classList.toggle("clear-screen");
    showToast("📱 已切换全屏沉浸模式，轻触屏幕任意位置退出");
  });

  // 文案展开 / 收起交互 (对照真实抖音第一张/第二张设计)
  const captionExpandBtn = document.getElementById("captionExpandToggleBtn");
  const captionText = document.getElementById("videoCaptionText");
  captionExpandBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const isCollapsed = captionText?.classList.toggle("collapsed");
    captionExpandBtn.textContent = isCollapsed ? "展开 ∨" : "收起 ∧";
  });

  // 点击进入直播间 (截图 114507: 只有进入直播间才开启左下角纵向公屏弹幕流)
  const enterLiveHandler = (e) => {
    e.stopPropagation();
    currentHomeTab = 'live';
    renderCurrentView();
    showToast("🔴 已进入「邵艾伦日常」直播间，左下角已开启纵向滚动互动弹幕！");
  };
  document.getElementById("btnEnterLiveRoom")?.addEventListener("click", enterLiveHandler);
  document.getElementById("btnEnterLiveRoomCard")?.addEventListener("click", enterLiveHandler);

  // 相关搜索胶囊 (截图 114509)
  document.getElementById("videoRelatedSearchBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openSearchResultsDrawer("claude动画");
  });

  // 侧边抽屉按钮 (☰)
  document.getElementById("mTabDrawerBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openProfileSidebarDrawer();
  });

  // 搜索图标 (🔍)
  document.getElementById("mTabSearch")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openSearchResultsDrawer("");
  });

  // 直播进入
  document.getElementById("btnEnterLiveRoom")?.addEventListener("click", (e) => {
    e.stopPropagation();
    showToast("🔴 正在连线进入 @邵艾伦日常 的实时美式英语发音直播间...");
  });

  // Long press 2.0X
  let pressTimer = null;
  let menuTimer = null;
  let isSpeeding = false;
  const speedBadge = document.getElementById("speedBadge");

  const startLongPress = (e) => {
    if (e.target.closest(".video-actions-bar") || 
        e.target.closest(".mobile-bottom-nav") || 
        e.target.closest(".mobile-top-tabs") || 
        e.target.closest(".video-progress-bar-container") ||
        e.target.closest(".yellow-cart-pill") ||
        e.target.closest(".danmaku-toggle-btn") ||
        e.target.closest(".center-fullscreen-btn")) {
      return;
    }

    if (videoCard.classList.contains("clear-screen")) {
      videoCard.classList.remove("clear-screen");
      return;
    }

    pressTimer = setTimeout(() => {
      isSpeeding = true;
      if (videoPlayer) videoPlayer.playbackRate = 2.0;
      speedBadge?.classList.add("show");
    }, 350);

    menuTimer = setTimeout(() => {
      cancelLongPress();
      openActionMenu();
    }, 1200);
  };

  const cancelLongPress = () => {
    clearTimeout(pressTimer);
    clearTimeout(menuTimer);
    if (isSpeeding) {
      isSpeeding = false;
      if (videoPlayer) videoPlayer.playbackRate = 1.0;
      speedBadge?.classList.remove("show");
    }
  };

  videoCard?.addEventListener("pointerdown", startLongPress);
  videoCard?.addEventListener("pointerup", cancelLongPress);
  videoCard?.addEventListener("pointercancel", cancelLongPress);
  videoCard?.addEventListener("pointerleave", cancelLongPress);

  // Swipe vertical
  let touchStartY = 0;
  videoCard?.addEventListener("touchstart", (e) => {
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  videoCard?.addEventListener("touchend", (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    if (diff > 50) {
      goToNextVideo();
    } else if (diff < -50) {
      goToPrevVideo();
    }
  }, { passive: true });

  // Top Tabs 切换 (永久恒定，关注 / 商城 / 推荐)
  bindTopTabsEvents();

  // Music row & disc
  document.getElementById("musicRowBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openMusicDetailDrawer(currentVideo);
  });
  musicDisc?.addEventListener("click", (e) => {
    e.stopPropagation();
    openMusicDetailDrawer(currentVideo);
  });

  // Yellow cart
  document.getElementById("yellowCartPill")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openProductDetailDrawer(currentVideo);
  });

  // Like
  const likeBtn = document.getElementById("actionLikeBtn");
  const likeCountSpan = document.getElementById("actionLikeCount");
  likeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLike(currentVideo, likeBtn, likeCountSpan);
  });

  // Collect
  const collectBtn = document.getElementById("actionCollectBtn");
  const collectCountSpan = document.getElementById("actionCollectCount");
  collectBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    currentVideo.isCollected = !currentVideo.isCollected;
    collectBtn.classList.toggle("collected", currentVideo.isCollected);
    collectCountSpan.textContent = currentVideo.isCollected ? "已收藏" : "收藏";
    showToast(currentVideo.isCollected ? "★ 收藏成功，已加入个人主页" : "已取消收藏");
  });

  // Comments
  document.getElementById("actionCommentBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openCommentsDrawer(currentVideo);
  });

  // Follow
  const followBtn = document.getElementById("followBtn");
  followBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    currentVideo.isFollowed = !currentVideo.isFollowed;
    followBtn.classList.toggle("followed", currentVideo.isFollowed);
    followBtn.innerHTML = currentVideo.isFollowed ? "✓" : "+";
    followBtn.title = currentVideo.isFollowed ? "已关注" : "关注作者";
    showToast(currentVideo.isFollowed ? `已关注 ${currentVideo.author.name}` : `已取消关注`);
  });

  // Author modal
  document.getElementById("actionAvatarWrap")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openProfileModal(currentVideo.author);
  });
  document.getElementById("creatorNickBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openProfileModal(currentVideo.author);
  });

  // Share
  document.getElementById("actionShareBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openShareModal(currentVideo);
  });
}

// 2. 【朋友】独立全屏专区页面 (1:1 还原截图 114457: 全屏沉浸朋友雪景/夜景、互关可见、私信满月刘海胶囊栏)
function renderFriendsPageView() {
  feedStage.innerHTML = `
    <div class="mobile-page-view friends-immersive-view">
      ${renderMobileStatusBar()}
      
      <!-- 朋友专区专属顶部导航栏 (1:1 还原截图 114457) -->
      <div class="friends-immersive-topbar">
        <div class="friends-topbar-left" id="btnDiscoverFriends" title="发现朋友">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7.5" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        </div>
        <div class="friends-topbar-center">
          <span class="friends-active-tab">朋友</span>
        </div>
        <div class="friends-topbar-right" id="btnFriendsSearch">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
      </div>

      <!-- 全屏沉浸朋友作品背景与交互容器 -->
      <div class="friends-immersive-stage">
        <img src="./image-design/微信图片_20261018114457.jpg" class="friends-bg-cover" alt="朋友动态">
        <div class="friends-gradient-mask"></div>

        <!-- 右侧互动操作栏 -->
        <div class="friends-action-sidebar">
          <div class="friend-sidebar-avatar-wrap" id="friendAuthorAvatar">
            <img src="./image-design/微信图片_20261018114457.jpg" class="friend-author-avatar-img">
            <span class="friend-mutual-badge">互关</span>
          </div>

          <div class="friend-sidebar-btn" id="friendLikeBtn">
            <div class="friend-sidebar-icon">❤️</div>
            <span class="friend-sidebar-text">1.2w</span>
          </div>

          <div class="friend-sidebar-btn" id="friendCmtBtn">
            <div class="friend-sidebar-icon">💬</div>
            <span class="friend-sidebar-text">842</span>
          </div>

          <div class="friend-sidebar-btn" id="friendCollectBtn">
            <div class="friend-sidebar-icon">⭐</div>
            <span class="friend-sidebar-text">231</span>
          </div>

          <div class="friend-sidebar-btn" id="friendShareBtn">
            <div class="friend-sidebar-icon">↗️</div>
            <span class="friend-sidebar-text">108</span>
          </div>
        </div>

        <!-- 左下角朋友文案信息 -->
        <div class="friends-bottom-meta">
          <div class="friends-author-row">
            <span class="friends-author-name">满月刘海.</span>
            <span class="friends-follow-pill">已关注</span>
          </div>
          <div class="friends-visibility-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
            <span>互相关注可见</span>
          </div>
          <div class="friends-caption-text">
            一到了晚上就下雪，浪漫的气息扑面而来 ❄️🌨️ 街角的暖灯和积雪真的太治愈了...
          </div>
          <div class="friends-music-marquee">
            <span>🎵 @满月刘海. · 创作的原声 - 晚雪街道</span>
          </div>
        </div>

        <!-- 截图 114457 标志性设计：私信满月刘海...胶囊栏与快捷表情 -->
        <div class="friend-quick-chat-capsule-bar">
          <div class="friend-chat-capsule" id="openFriendChatInput">
            <span class="friend-chat-placeholder">私信满月刘海...</span>
            <div class="friend-emoji-btn">😊</div>
          </div>
          <div class="friend-quick-reactions">
            <span class="friend-react-pill" data-emoji="😂">😂</span>
            <span class="friend-react-pill" data-emoji="👍">👍</span>
            <span class="friend-react-pill" data-emoji="🌹">🌹</span>
          </div>
        </div>
      </div>

      <!-- 常驻底部导航栏，高亮“朋友” -->
      ${renderMobileBottomNav('friend')}
    </div>
  `;

  // 绑定朋友专区操作
  document.getElementById("btnDiscoverFriends")?.addEventListener("click", () => {
    showToast("👥 正在从通讯录与共同好友中为你推荐新朋友...");
  });

  document.getElementById("btnFriendsSearch")?.addEventListener("click", () => {
    openMobileSearchResultsDrawer("满月刘海");
  });

  document.getElementById("friendAuthorAvatar")?.addEventListener("click", () => {
    showToast("👤 正在打开好友「满月刘海.」的主页");
  });

  // 点赞互动
  let friendLiked = false;
  document.getElementById("friendLikeBtn")?.addEventListener("click", () => {
    friendLiked = !friendLiked;
    const icon = document.querySelector("#friendLikeBtn .friend-sidebar-icon");
    const text = document.querySelector("#friendLikeBtn .friend-sidebar-text");
    if (friendLiked) {
      icon.innerHTML = `<span style="color:#fe2c55;">❤️</span>`;
      text.textContent = "1.2w+";
      showToast("❤️ 已为好友动态点赞！");
    } else {
      icon.innerHTML = "🤍";
      text.textContent = "1.2w";
      showToast("已取消点赞");
    }
  });

  // 评论互动
  document.getElementById("friendCmtBtn")?.addEventListener("click", () => {
    openCommentsDrawer(currentVideo || INITIAL_VIDEOS[0]);
  });

  // 收藏与分享
  document.getElementById("friendCollectBtn")?.addEventListener("click", () => {
    showToast("⭐ 已加入我的收藏列表");
  });
  document.getElementById("friendShareBtn")?.addEventListener("click", () => {
    showToast("↗️ 正在将此动态分享给好友或转发到日常");
  });

  // 私信胶囊点击与表情点击
  document.getElementById("openFriendChatInput")?.addEventListener("click", () => {
    openChatRoom("满月刘海.", "./image-design/微信图片_20261018114457.jpg");
  });

  document.querySelectorAll(".friend-react-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      e.stopPropagation();
      const emoji = pill.dataset.emoji;
      showToast(`💬 已向满月刘海发送了快捷互动表情：${emoji}`);
    });
  });

  bindCommonNavEvents();
}

// 3. 【消息】独立全屏消息通知中心页面 (1:1 还原截图 114455: 聊天装扮、限时日常、真实私信列表)
function renderMessagesPageView() {
  feedStage.innerHTML = `
    <div class="mobile-page-view messages-real-view">
      ${renderMobileStatusBar()}
      
      <!-- 顶部 Header -->
      <div class="msg-real-header">
        <div class="msg-real-header-left">
          <span style="font-size: 16px; font-weight: 700; color: #fff;">消息</span>
        </div>
        <div class="msg-real-header-right">
          <div class="msg-icon-action" id="btnMsgContacts" title="通讯录">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div class="msg-icon-action" id="btnMsgCreateGroup" title="发起群聊">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
        </div>
      </div>

      <div class="msg-real-scroll-content">
        <!-- 搜索栏 -->
        <div class="msg-real-search-box" id="msgSearchBox">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span>搜索</span>
        </div>

        <!-- 截图 114455 特色：聊天装扮体验横幅 -->
        <div class="msg-dressup-banner" id="msgDressupBanner">
          <div class="msg-dressup-left">
            <span class="msg-dressup-icon">🎨</span>
            <div class="msg-dressup-info">
              <span class="msg-dressup-title">聊天装扮</span>
              <span class="msg-dressup-desc">全新梦幻气泡与动态特效已上线</span>
            </div>
          </div>
          <button class="msg-dressup-btn">体验</button>
        </div>

        <!-- 限时日常横滑头像栏 (来自截图 114455) -->
        <div class="msg-daily-stories-row">
          <div class="msg-story-item my-story" id="msgPostDailyBtn">
            <div class="msg-story-avatar-wrap add-story-ring">
              <img src="./image-design/微信图片_20261018114451.jpg" class="msg-story-avatar">
              <div class="msg-story-plus">+</div>
            </div>
            <span class="msg-story-label">发日常</span>
          </div>

          <div class="msg-story-item" data-author="满月刘海.">
            <div class="msg-story-avatar-wrap active-story-ring">
              <img src="./image-design/微信图片_20261018114457.jpg" class="msg-story-avatar">
            </div>
            <span class="msg-story-label">满月刘海.</span>
          </div>

          <div class="msg-story-item" data-author="邵艾伦日常">
            <div class="msg-story-avatar-wrap live-story-ring">
              <img src="./image-design/微信图片_20261018114507.jpg" class="msg-story-avatar">
              <span class="msg-story-live-tag">LIVE</span>
            </div>
            <span class="msg-story-label">邵艾伦日常</span>
          </div>

          <div class="msg-story-item" data-author="在公司楼下捡钱">
            <div class="msg-story-avatar-wrap ai-story-ring">
              <img src="./image-design/微信图片_20261018114509.jpg" class="msg-story-avatar">
            </div>
            <span class="msg-story-label">捡钱科技</span>
          </div>
        </div>

        <!-- 4大互动金刚区通知 -->
        <div class="msg-category-row" style="margin: 8px 12px 14px 12px;">
          <div class="msg-cat-item" id="msgCatLike">
            <div class="msg-cat-icon like-bg">❤️</div>
            <span>赞和收藏</span>
          </div>
          <div class="msg-cat-item" id="msgCatAt">
            <div class="msg-cat-icon at-bg">@</div>
            <span>@我的</span>
          </div>
          <div class="msg-cat-item" id="msgCatComment">
            <div class="msg-cat-icon cmt-bg">💬</div>
            <span>评论</span>
          </div>
          <div class="msg-cat-item" id="msgCatFans">
            <div class="msg-cat-icon fan-bg">👤</div>
            <span>粉丝</span>
          </div>
        </div>

        <!-- 真实消息列表 -->
        <div class="msg-real-dialogs-list">
          <div class="real-msg-row" data-name="邵艾伦日常（薄肌版）" data-avatar="./image-design/微信图片_20261018114507.jpg">
            <div class="real-msg-avatar-wrap">
              <img src="./image-design/微信图片_20261018114507.jpg" class="real-msg-avatar">
              <span class="real-msg-live-dot">LIVE</span>
            </div>
            <div class="real-msg-content">
              <div class="real-msg-top">
                <span class="real-msg-name">邵艾伦日常（薄肌版）</span>
                <span class="real-msg-time">11:38</span>
              </div>
              <div class="real-msg-snippet" style="color: #fe2c55;">[正在直播] 黄毛薄肌版美式发音互动教学...</div>
            </div>
          </div>

          <div class="real-msg-row" data-name="满月刘海." data-avatar="./image-design/微信图片_20261018114457.jpg">
            <div class="real-msg-avatar-wrap">
              <img src="./image-design/微信图片_20261018114457.jpg" class="real-msg-avatar">
            </div>
            <div class="real-msg-content">
              <div class="real-msg-top">
                <span class="real-msg-name">满月刘海.</span>
                <span class="real-msg-time">10:45</span>
              </div>
              <div class="real-msg-snippet">下雪的夜晚真的太有氛围了 ❄️</div>
            </div>
            <span class="real-msg-badge">1</span>
          </div>

          <div class="real-msg-row" data-name="服务通知" data-avatar="./image-design/微信图片_20261018114451.jpg">
            <div class="real-msg-avatar-wrap">
              <div class="real-msg-avatar notice-icon-bg">🔔</div>
            </div>
            <div class="real-msg-content">
              <div class="real-msg-top">
                <span class="real-msg-name">服务通知</span>
                <span class="real-msg-time">10:15</span>
              </div>
              <div class="real-msg-snippet">账号安全提醒：已成功在当前设备上启用双重验证保护。</div>
            </div>
          </div>

          <div class="real-msg-row" data-name="抖音小助手 官方" data-avatar="./image-design/微信图片_20261018114509.jpg">
            <div class="real-msg-avatar-wrap">
              <div class="real-msg-avatar douyin-icon-bg">🎵</div>
            </div>
            <div class="real-msg-content">
              <div class="real-msg-top">
                <span class="real-msg-name">抖音小助手 官方</span>
                <span class="real-msg-time">昨天</span>
              </div>
              <div class="real-msg-snippet">【热点指南】两个AI自创语言现象登上全站热搜TOP 3！</div>
            </div>
          </div>
        </div>
      </div>

      ${renderMobileBottomNav('message')}
    </div>
  `;

  // 绑定消息列表点击
  document.querySelectorAll(".real-msg-row").forEach(row => {
    row.addEventListener("click", () => {
      const name = row.dataset.name;
      const avatar = row.dataset.avatar;
      openChatRoom(name, avatar);
    });
  });

  // 发日常与限时日常
  document.getElementById("msgPostDailyBtn")?.addEventListener("click", openCameraModal);
  document.querySelectorAll(".msg-story-item[data-author]").forEach(item => {
    item.addEventListener("click", () => {
      const author = item.dataset.author;
      showToast(`🎬 正在沉浸播放「${author}」的限时日常时刻！`);
    });
  });

  // 聊天装扮
  document.getElementById("msgDressupBanner")?.addEventListener("click", () => {
    showToast("🎨 聊天气泡装扮已开启，当前已套用「极光渐变」限定主题！");
  });

  document.getElementById("msgSearchBox")?.addEventListener("click", () => {
    openMobileSearchResultsDrawer("消息");
  });

  ["msgCatLike", "msgCatAt", "msgCatComment", "msgCatFans"].forEach(id => {
    document.getElementById(id)?.addEventListener("click", () => {
      showToast("🔔 互动通知列表已全部标记为已读！");
    });
  });

  bindCommonNavEvents();
}

// 4. 【我】独立全屏个人主页页面 (1:1 还原截图 114501: 暮色天际线背景、经验很丰富▾、抖音号341103506、4粉丝、作品空状态去发布卡片)
function renderProfilePageView() {
  feedStage.innerHTML = `
    <div class="mobile-page-view profile-real-view">
      ${renderMobileStatusBar()}
      
      <!-- 个人主页顶部导航栏 (1:1 还原截图 114501) -->
      <div class="profile-real-topbar">
        <div class="profile-topbar-left" id="btnProfileAddFriend" title="添加朋友">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7.5" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        </div>
        <div class="profile-topbar-center" id="btnSwitchAccountDropdown">
          <span class="profile-center-title">${currentUser.name}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
        </div>
        <div class="profile-topbar-right">
          <div class="profile-icon-btn" id="btnProfileSearch" title="搜索">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <div class="profile-icon-btn menu-badge-btn" id="btnOpenSidebarMenu" title="侧边菜单">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <span class="profile-menu-red-dot"></span>
          </div>
        </div>
      </div>

      <div class="profile-real-scroll-content">
        <!-- 暮色天际线封面背景 -->
        <div class="profile-real-cover-banner">
          <img src="./image-design/微信图片_20261018114501.jpg" class="profile-cover-img" alt="cover">
          <div class="profile-cover-gradient"></div>
        </div>

        <div class="profile-real-info-card">
          <!-- 头像与主操作按钮行 -->
          <div class="profile-avatar-action-row">
            <div class="profile-avatar-large-wrap" id="btnChangeAvatar">
              <img src="${currentUser.avatar}" class="profile-avatar-large-img" alt="avatar">
              <div class="profile-avatar-camera-pill">📷</div>
            </div>
            <div class="profile-buttons-group">
              <button class="profile-action-btn edit-btn" id="btnEditProfile">编辑资料</button>
              <button class="profile-action-btn add-btn" id="btnAddFriendsCard">+ 添加朋友</button>
            </div>
          </div>

          <!-- 用户名与抖音号 (1:1 还原截图 114501) -->
          <div class="profile-user-main-meta">
            <h1 class="profile-display-name">${currentUser.name}</h1>
            <div class="profile-id-row">
              <span>抖音号：${currentUser.uniqueId}</span>
              <button class="btn-copy-id" id="btnCopyDouyinId" title="复制抖音号">📋</button>
              <span class="profile-ip-tag">IP属地：${currentUser.ip}</span>
            </div>
            <div class="profile-bio-text" id="btnEditBio">
              ${currentUser.bio}
            </div>
            <div class="profile-tag-pill-row">
              <span class="profile-mini-pill">♂ 24岁</span>
              <span class="profile-mini-pill">湖北·武汉</span>
              <span class="profile-mini-pill">+ 添加学校等标签</span>
            </div>
          </div>

          <!-- 4项核心社交指标 -->
          <div class="profile-social-stats-row">
            <div class="profile-stat-box">
              <span class="stat-number">${currentUser.stats.likes}</span>
              <span class="stat-label">获赞</span>
            </div>
            <div class="profile-stat-box">
              <span class="stat-number">${currentUser.stats.following}</span>
              <span class="stat-label">关注</span>
            </div>
            <div class="profile-stat-box">
              <span class="stat-number">${currentUser.stats.followers}</span>
              <span class="stat-label">粉丝</span>
            </div>
            <div class="profile-stat-box">
              <span class="stat-number">${currentUser.stats.friends}</span>
              <span class="stat-label">朋友</span>
            </div>
          </div>

          <!-- 横向功能推荐条 (截图 114501: 我的订单、钱包、历史等) -->
          <div class="profile-services-capsules-scroll">
            <div class="profile-service-capsule" id="serviceOrders">
              <span class="service-icon">🛍️</span>
              <span class="service-text">我的订单</span>
            </div>
            <div class="profile-service-capsule" id="serviceWallet">
              <span class="service-icon">💳</span>
              <span class="service-text">我的钱包</span>
            </div>
            <div class="profile-service-capsule" id="serviceHistory">
              <span class="service-icon">⏱️</span>
              <span class="service-text">观看历史</span>
            </div>
            <div class="profile-service-capsule" id="serviceFavorites">
              <span class="service-icon">⭐</span>
              <span class="service-text">我的收藏</span>
            </div>
          </div>
        </div>

        <!-- 4大作品标签切换栏 (截图 114501: 作品 0、推荐、收藏 12、喜欢 34) -->
        <div class="profile-segmented-tabs-bar">
          <div class="profile-tab-item active" data-tab="works">作品 0</div>
          <div class="profile-tab-item" data-tab="recommend">推荐</div>
          <div class="profile-tab-item" data-tab="collect">收藏 12</div>
          <div class="profile-tab-item" data-tab="like">喜欢 34</div>
        </div>

        <!-- 截图 114501 标志性作品空状态与“去发布一个作品吧”大卡片 -->
        <div class="profile-empty-works-container" id="profileWorksContainer">
          <div class="profile-works-empty-card">
            <div class="empty-camera-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </div>
            <h3 class="empty-title">去发布一个作品吧</h3>
            <p class="empty-subtitle">记录你的美好日常，收获第一波朋友点赞与粉丝！</p>
            <button class="btn-goto-post-work" id="btnEmptyGoPublish">+ 发布作品</button>
          </div>
        </div>
      </div>

      ${renderMobileBottomNav('mine')}
    </div>
  `;

  // 绑定主页事件
  document.getElementById("btnSwitchAccountDropdown")?.addEventListener("click", openSwitchAccountPage);
  document.getElementById("btnOpenSidebarMenu")?.addEventListener("click", openProfileSidebarDrawer);
  document.getElementById("btnProfileAddFriend")?.addEventListener("click", () => {
    showToast("👥 正在从通讯录与附近为你寻找更多好友...");
  });
  document.getElementById("btnProfileSearch")?.addEventListener("click", () => {
    openMobileSearchResultsDrawer("我的内容");
  });

  // 复制抖音号
  document.getElementById("btnCopyDouyinId")?.addEventListener("click", () => {
    navigator.clipboard?.writeText(currentUser.uniqueId);
    showToast(`✓ 已复制抖音号：${currentUser.uniqueId}`);
  });

  // 编辑资料
  document.getElementById("btnEditProfile")?.addEventListener("click", () => {
    showToast("✏️ 编辑个人主页资料（支持自定义昵称、头像与背景）");
  });
  document.getElementById("btnAddFriendsCard")?.addEventListener("click", () => {
    showToast("👥 添加朋友：支持扫一扫、面对面雷达和通讯录");
  });
  document.getElementById("btnEmptyGoPublish")?.addEventListener("click", openCameraModal);

  // 金刚服务区
  document.getElementById("serviceOrders")?.addEventListener("click", () => showToast("🛍️ 正在打开抖音商城·我的全部订单"));
  document.getElementById("serviceWallet")?.addEventListener("click", () => showToast("💳 正在打开我的钱包·零钱与银行卡"));
  document.getElementById("serviceHistory")?.addEventListener("click", () => showToast("⏱️ 观看历史：已为你记录最近 7 天浏览足迹"));
  document.getElementById("serviceFavorites")?.addEventListener("click", () => showToast("⭐ 已打开我的全部收藏夹"));

  // 作品/收藏/喜欢 Tab 切换
  document.querySelectorAll(".profile-tab-item").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".profile-tab-item").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const tabName = tab.dataset.tab;
      const container = document.getElementById("profileWorksContainer");
      if (!container) return;

      if (tabName === 'works') {
        container.innerHTML = `
          <div class="profile-works-empty-card">
            <div class="empty-camera-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </div>
            <h3 class="empty-title">去发布一个作品吧</h3>
            <p class="empty-subtitle">记录你的美好日常，收获第一波朋友点赞与粉丝！</p>
            <button class="btn-goto-post-work" id="btnEmptyGoPublishWorks">+ 发布作品</button>
          </div>
        `;
        document.getElementById("btnEmptyGoPublishWorks")?.addEventListener("click", openCameraModal);
      } else {
        container.innerHTML = `
          <div class="profile-works-grid-content">
            ${videos.map((v, i) => `
              <div class="profile-grid-cell" data-index="${i}">
                <img src="${v.coverUrl}" class="grid-cell-img" alt="cover">
                <span class="grid-cell-likes">❤️ ${formatCount(v.likes)}</span>
              </div>
            `).join("")}
          </div>
        `;
        document.querySelectorAll(".profile-grid-cell").forEach(cell => {
          cell.addEventListener("click", () => {
            const idx = parseInt(cell.dataset.index);
            currentNavTab = 'home';
            currentHomeTab = 'recommend';
            currentIndex = idx;
            renderCurrentView();
            showToast("🎬 正在全屏高清沉浸播放");
          });
        });
      }
    });
  });

  bindCommonNavEvents();
}

// 5. 【首页·关注】独立全屏关注信息流页面
function renderFollowPageView() {
  const followedVideos = videos.filter(v => v.isFollowed);
  const displayList = followedVideos.length > 0 ? followedVideos : videos;

  feedStage.innerHTML = `
    <div class="mobile-page-view">
      ${renderMobileStatusBar()}
      
      <!-- 统一固定恒定顶部栏 (☰ | 关注 | 商城 | 推荐 | 🔍) -->
      ${renderMobileTopTabs()}

      <div class="mobile-page-content" style="padding-top: 92px;">
        <!-- 已关注大V横滑头像栏 -->
        <div style="font-size: 13px; font-weight: 700; color: var(--text-secondary); margin-bottom: 8px;">我的关注</div>
        <div style="display: flex; gap: 14px; overflow-x: auto; padding-bottom: 10px;">
          ${videos.map((v, i) => `
            <div style="display:flex; flex-direction:column; align-items:center; gap:4px; flex-shrink:0; cursor:pointer;" class="follow-avatar-item" data-index="${i}">
              <img src="${v.author.avatar}" style="width:52px; height:52px; border-radius:50%; border:2px solid var(--brand-pink); object-fit:cover;">
              <span style="font-size: 11px; color: var(--text-primary); max-width: 56px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${v.author.name}</span>
            </div>
          `).join("")}
        </div>

        <div style="font-size: 13px; font-weight: 700; color: var(--text-secondary); margin-top: 10px;">关注动态流</div>

        <div class="friends-dynamic-feed">
          ${displayList.map((v, i) => `
            <div class="friend-post-card">
              <div class="friend-post-header">
                <div class="friend-author-info">
                  <img src="${v.author.avatar}" class="friend-avatar">
                  <div>
                    <div style="font-size: 13px; font-weight: 700;">${v.author.name} ✓</div>
                    <div class="friend-time-meta">更新了最新作品 · 点击卡片立即沉浸播放</div>
                  </div>
                </div>
              </div>

              <div style="font-size: 13px; line-height: 1.5; color: var(--text-primary);">
                ${v.caption}
              </div>

              <div class="friend-post-media follow-media-card" data-index="${i}">
                <img src="${v.coverUrl}" alt="media">
                <div class="play-badge">▶</div>
              </div>

              <div class="friend-post-actions">
                <div class="friend-act-btn"><span>❤️</span> <span>${formatCount(v.likes)}</span></div>
                <div class="friend-act-btn"><span>💬</span> <span>${formatCount(v.commentsCount || v.comments.length)}</span></div>
                <div class="friend-act-btn"><span>↗️</span> <span>分享</span></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      ${renderMobileBottomNav('home')}
    </div>
  `;

  // 绑定全局固定顶部Tabs事件
  bindTopTabsEvents();

  document.querySelectorAll(".follow-media-card, .follow-avatar-item").forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.dataset.index);
      currentHomeTab = 'recommend';
      currentIndex = idx;
      renderCurrentView();
      showToast("正在沉浸播放选中的关注作品");
    });
  });

  bindCommonNavEvents();
}

// 6. 【首页·商城】独立全屏抖音商城页面
function renderMallPageView() {
  feedStage.innerHTML = `
    <div class="mobile-page-view">
      ${renderMobileStatusBar()}

      <!-- 统一固定恒定顶部栏 (☰ | 关注 | 商城 | 推荐 | 🔍) -->
      ${renderMobileTopTabs()}

      <div class="mobile-page-content" style="padding-top: 92px;">
        <!-- 百亿补贴 Banner -->
        <div class="mall-banner-carousel">
          <div class="mall-banner-text">
            <h4>百亿补贴 · 官方正品</h4>
            <p>爆款低至 1 折起，全场包邮退换无忧险</p>
          </div>
        </div>

        <!-- 4大金刚分类 -->
        <div class="mall-category-grid">
          <div class="mall-cat-item">
            <span class="cat-icon">📱</span>
            <span>数码潮品</span>
          </div>
          <div class="mall-cat-item">
            <span class="cat-icon">👕</span>
            <span>潮流服饰</span>
          </div>
          <div class="mall-cat-item">
            <span class="cat-icon">🍱</span>
            <span>美食特产</span>
          </div>
          <div class="mall-cat-item">
            <span class="cat-icon">⛺</span>
            <span>户外旅行</span>
          </div>
        </div>

        <div style="font-size: 14px; font-weight: 700; color: #fff; margin-top: 6px;">今日爆款热卖榜</div>

        <!-- 商品双列网格 -->
        <div class="mall-product-list">
          ${MOCK_PRODUCTS.map(p => `
            <div class="mall-card mall-item-card" data-id="${p.id}">
              <img src="${p.img}" alt="${p.title}">
              <div class="mall-card-info">
                <div class="mall-card-title">${p.title}</div>
                <div class="mall-card-price">¥${p.price} <span style="font-size: 10px; color: var(--text-muted); font-weight: normal;">已抢超万件</span></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      ${renderMobileBottomNav('home')}
    </div>
  `;

  // 绑定全局固定顶部Tabs事件
  bindTopTabsEvents();

  document.querySelectorAll(".mall-item-card").forEach(card => {
    card.addEventListener("click", () => {
      openProductDetailDrawer({ id: 1 });
    });
  });

  bindCommonNavEvents();
}

// 7. 【首页·直播】独立全屏官方直播间页面
let danmakuInterval = null;

function renderLivePageView() {
  feedStage.innerHTML = `
    <div class="mobile-page-view live-stream-view">
      ${renderMobileStatusBar()}

      <!-- 真实高清主播直播流画面与备用海报 (pen 画板 04) -->
      <img src="./image-design/微信图片_20261018114507.jpg" class="live-bg-poster" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:0; filter: brightness(0.9);">
      <video
        class="live-video-sim"
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4"
        autoplay
        loop
        muted
        playsinline
        style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:1; opacity:0.85;"
      ></video>

      <div class="video-card-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 20%, transparent 60%, rgba(0,0,0,0.85) 100%); z-index:2;"></div>

      <!-- Live Top Header (pen pos: 14, 50, w=362) -->
      <div class="live-top-header" style="position:relative; z-index:10; margin-top:44px; padding:6px 14px; display:flex; justify-content:space-between; align-items:center;">
        <div class="live-anchor-pill" style="display:flex; align-items:center; background:rgba(0,0,0,0.5); backdrop-filter:blur(8px); border-radius:20px; padding:3px 10px 3px 4px; gap:8px;">
          <img src="./image-design/微信图片_20261018114507.jpg" style="width:32px; height:32px; border-radius:50%; object-fit:cover;">
          <div class="live-anchor-meta">
            <div class="live-anchor-name" style="font-size:12px; font-weight:700; color:#fff;">邵艾伦日常（薄肌版） 🔴</div>
            <div class="live-audience-count" style="font-size:10px; color:rgba(255,255,255,0.7);">12.8w 本场人气</div>
          </div>
          <button class="btn-live-follow" id="btnLiveFollow" style="background:#fe2c55; border:none; color:#fff; font-size:11px; font-weight:700; padding:4px 10px; border-radius:12px; cursor:pointer;">+ 关注</button>
        </div>

        <button class="live-close-btn" id="btnCloseLive" title="退出直播间">&times;</button>
      </div>

      <!-- Realtime Danmaku Stream (实时滚动弹幕互动流) -->
      <div class="live-danmaku-container" id="liveDanmakuStream">
        <div class="danmaku-item"><span class="user-tag">系统通知:</span>欢迎来到官方技术大咖直播间，提倡文明互动！</div>
        <div class="danmaku-item"><span class="user-tag">夜巡者:</span>老师讲的微服务高并发设计太清晰了！</div>
        <div class="danmaku-item"><span class="user-tag">全栈攻城狮:</span>为主播点赞送出 666 辆超跑！🚀</div>
      </div>

      <!-- Bottom Chat & Gifts -->
      <div class="live-bottom-action-bar">
        <div class="live-chat-input-sim" id="liveChatInputBtn">说点什么...</div>
        <button class="live-gift-btn" id="btnLiveGift" title="送礼物">🎁</button>
        <button class="live-heart-btn" id="btnLiveHeart" title="点赞">❤️</button>
      </div>
    </div>
  `;

  document.getElementById("btnCloseLive")?.addEventListener("click", () => {
    clearInterval(danmakuInterval);
    currentHomeTab = 'recommend';
    renderCurrentView();
  });

  document.getElementById("btnLiveFollow")?.addEventListener("click", () => {
    showToast("✓ 已成功关注主播，开播自动接收强提醒！");
  });

  document.getElementById("btnLiveGift")?.addEventListener("click", () => {
    showToast("🎁 成功为主播赠送了「超级火箭」！全场特效已触发！");
  });

  document.getElementById("btnLiveHeart")?.addEventListener("click", () => {
    showToast("❤️ 点赞 +1，当前本场点赞已突破 500w！");
  });

  // 弹幕自动飘屏模拟
  const sampleDanmakus = [
    { user: "Gopher小陈", text: "老师下次讲讲 Redis 缓存击穿与穿透吗？" },
    { user: "超跑极速", text: "刚刚进来的朋友们记得先点点左上角关注！" },
    { user: "星河漫游", text: "这个直播间画质好高清啊，声音很立体！" },
    { user: "前端艺术家", text: "给主播双击点赞到 1000 万！" }
  ];

  clearInterval(danmakuInterval);
  danmakuInterval = setInterval(() => {
    const stream = document.getElementById("liveDanmakuStream");
    if (!stream) {
      clearInterval(danmakuInterval);
      return;
    }
    const item = sampleDanmakus[Math.floor(Math.random() * sampleDanmakus.length)];
    const el = document.createElement("div");
    el.className = "danmaku-item";
    el.innerHTML = `<span class="user-tag">${item.user}:</span>${item.text}`;
    stream.appendChild(el);
    if (stream.children.length > 5) {
      stream.removeChild(stream.children[0]);
    }
  }, 2500);
}

// Toggle Play / Pause
function togglePlayPause(videoPlayer, indicator, musicDisc) {
  if (videoPlayer.paused) {
    videoPlayer.play();
    indicator.classList.remove("show");
    if (musicDisc) musicDisc.classList.remove("paused");
  } else {
    videoPlayer.pause();
    indicator.classList.add("show");
    if (musicDisc) musicDisc.classList.add("paused");
  }
}

// Toggle Like
function toggleLike(currentVideo, likeBtn, likeCountSpan) {
  currentVideo.isLiked = !currentVideo.isLiked;
  if (currentVideo.isLiked) {
    currentVideo.likes += 1;
    likeBtn.classList.add("liked");
    likeBtn.querySelector("svg").setAttribute("fill", "#FE2C55");
    showToast("❤️ 感谢点赞，已记录入推荐算法模型！");
  } else {
    currentVideo.likes = Math.max(0, currentVideo.likes - 1);
    likeBtn.classList.remove("liked");
    likeBtn.querySelector("svg").setAttribute("fill", "none");
  }
  likeCountSpan.textContent = formatCount(currentVideo.likes);
}

// Double click like animation
function handleDoubleLike(event) {
  const currentVideo = videos[currentIndex];
  const heartsContainer = document.getElementById("heartsContainer");
  const likeBtn = document.getElementById("actionLikeBtn");
  const likeCountSpan = document.getElementById("actionLikeCount");

  if (!currentVideo.isLiked) {
    currentVideo.isLiked = true;
    currentVideo.likes += 1;
    if (likeBtn && likeCountSpan) {
      likeBtn.classList.add("liked");
      likeBtn.querySelector("svg").setAttribute("fill", "#FE2C55");
      likeCountSpan.textContent = formatCount(currentVideo.likes);
    }
  }

  // Create floating particle heart at click position
  if (heartsContainer) {
    const rect = heartsContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const heart = document.createElement("div");
    heart.className = "flying-heart";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.innerHTML = `
      <svg viewBox="0 0 24 24" width="70" height="70" fill="#FE2C55">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 900);
  }
}

// Next / Previous Video
function goToNextVideo() {
  if (currentIndex < videos.length - 1) {
    currentIndex++;
    renderVideo(currentIndex);
  } else {
    showToast("🎉 已经看完推荐列表啦，正在为你加载更多优质视频...");
    // Loop back or duplicate
    currentIndex = 0;
    renderVideo(currentIndex);
  }
}

function goToPrevVideo() {
  if (currentIndex > 0) {
    currentIndex--;
    renderVideo(currentIndex);
  } else {
    showToast("已经是第一个视频了");
  }
}

// Comments Drawer Logic (1:1 还原最新截图: S18攻略合集、评论1093与AI解析Tab、图片评论、友善评论胶囊栏)
let currentPendingAttachImg = null;

function openCommentsDrawer(video) {
  isCommentsDrawerOpen = true;
  commentsDrawer.classList.add("open");
  updateCommentsDrawer(video || INITIAL_VIDEOS[0]);
}

function closeCommentsDrawer() {
  isCommentsDrawerOpen = false;
  commentsDrawer.classList.remove("open");
}

function updateCommentsDrawer(video) {
  const currentVideo = video || videos[currentIndex] || INITIAL_VIDEOS[0];
  
  // 注入真实截图中的经典评论（Y9、苍山负雪带图评论、Me1ody等）
  if (!currentVideo.screenshotComments) {
    currentVideo.screenshotComments = [
      {
        id: 1001,
        user: "Y9",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        text: "蜘蛛带哪个神器啊？",
        time: "10小时前 · 上海",
        likes: 1,
        isLiked: false,
        isDisliked: false,
        repliesCount: 1,
        replies: [
          { user: "云顶攻略君", text: "首选魔蕴或者死神之刃，开局秒放技能直接融化对面后排！" }
        ]
      },
      {
        id: 1002,
        user: "苍山负雪",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        text: "开局0秒我已定阵",
        attachImg: "./image-design/comment_drawer_screenshot.jpg",
        time: "09-10 · 山东",
        likes: 113,
        isLiked: false,
        isDisliked: false,
        repliesCount: 10,
        replies: [
          { user: "棋圣本圣", text: "兄弟你这把活体锻炉神器拉满了啊，吃鸡稳了！" },
          { user: "苍山负雪", text: "哈哈确实，活体锻炉越打越强！" }
        ]
      },
      {
        id: 1003,
        user: "Me1ody.",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
        text: "那个锁0.5攻速给逆天物理加成的神器到底给谁用最强？求解",
        time: "昨天 · 广东",
        likes: 42,
        isLiked: false,
        isDisliked: false,
        repliesCount: 3,
        replies: []
      }
    ];
  }

  const allComments = [...currentVideo.screenshotComments, ...(currentVideo.comments || [])];
  drawerCommentsCount.textContent = `评论 ${1090 + allComments.length}`;

  commentsList.innerHTML = allComments.map(c => `
    <div class="comment-item-real" data-id="${c.id}">
      <img src="${c.avatar}" alt="${c.user}" class="comment-real-avatar">
      <div class="comment-real-body">
        <div class="comment-real-author">${c.user}</div>
        <div class="comment-real-text">${c.text}</div>

        <!-- 真实截图标志性：评论配图展示 -->
        ${c.attachImg ? `
          <div class="comment-real-img-box" data-img="${c.attachImg}">
            <img src="${c.attachImg}" class="comment-attached-thumb" alt="附图">
            <span class="img-preview-tag">🔍 查看大图</span>
          </div>
        ` : ''}

        <div class="comment-real-footer-row">
          <div class="comment-footer-left">
            <span class="c-time-ip">${c.time}</span>
            <span class="c-reply-btn" data-user="${c.user}">回复</span>
          </div>

          <div class="comment-footer-right">
            <div class="comment-vote-btn like-btn ${c.isLiked ? 'active' : ''}" data-id="${c.id}">
              <span class="vote-icon">${c.isLiked ? '❤️' : '🤍'}</span>
              <span class="vote-num">${c.likes || 0}</span>
            </div>
            <div class="comment-vote-btn dislike-btn ${c.isDisliked ? 'active' : ''}" data-id="${c.id}">
              <span class="vote-icon">💔</span>
            </div>
          </div>
        </div>

        <!-- 截图 1:1 折叠回复项 -->
        ${c.repliesCount ? `
          <div class="comment-expand-replies-bar" data-id="${c.id}">
            <span class="expand-line">——</span>
            <span class="expand-text">展开${c.repliesCount}条回复</span>
            <span class="expand-arrow">∨</span>
          </div>
        ` : ''}

        <div class="comment-subreplies-drawer" id="subReplies_${c.id}" style="display: none;">
          ${(c.replies || []).map(r => `
            <div class="sub-reply-card">
              <span class="sub-user">${r.user}:</span>
              <span class="sub-text">${r.text}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");

  // 绑定子Tab切换（评论 vs AI解析）
  document.getElementById("tabCommentListBtn")?.addEventListener("click", () => {
    document.getElementById("tabCommentListBtn")?.classList.add("active");
    document.getElementById("tabCommentAiBtn")?.classList.remove("active");
    document.getElementById("commentsList").style.display = "block";
    document.getElementById("commentAiPanel").style.display = "none";
  });

  document.getElementById("tabCommentAiBtn")?.addEventListener("click", () => {
    document.getElementById("tabCommentAiBtn")?.classList.add("active");
    document.getElementById("tabCommentListBtn")?.classList.remove("active");
    document.getElementById("commentsList").style.display = "none";
    document.getElementById("commentAiPanel").style.display = "block";
    showToast("🤖 AI 已完成对当前视频的深度结构化要点提炼");
  });

  // 绑定合集跳转
  document.getElementById("commentAlbumLink")?.addEventListener("click", () => {
    showToast("🎬 正在进入「S18攻略合集」专题列表，已为你定位到下一集！");
  });

  // 绑定全屏展开
  document.getElementById("btnExpandCommentDrawer")?.addEventListener("click", () => {
    commentsDrawer.classList.toggle("expanded-fullscreen");
    showToast(commentsDrawer.classList.contains("expanded-fullscreen") ? "⛶ 已展开为全屏大视窗评论" : "已恢复标准半屏");
  });

  // 展开回复
  commentsList.querySelectorAll(".comment-expand-replies-bar").forEach(bar => {
    bar.addEventListener("click", () => {
      const id = bar.dataset.id;
      const sub = document.getElementById(`subReplies_${id}`);
      if (sub) {
        const isShow = sub.style.display === "block";
        sub.style.display = isShow ? "none" : "block";
        bar.querySelector(".expand-text").textContent = isShow ? `展开条回复` : `收起回复`;
        bar.querySelector(".expand-arrow").textContent = isShow ? `∨` : `∧`;
      }
    });
  });

  // 评论点赞与踩
  commentsList.querySelectorAll(".comment-vote-btn.like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const c = allComments.find(item => item.id === id);
      if (c) {
        c.isLiked = !c.isLiked;
        c.likes += c.isLiked ? 1 : -1;
        btn.classList.toggle("active", c.isLiked);
        btn.querySelector(".vote-icon").textContent = c.isLiked ? '❤️' : '🤍';
        btn.querySelector(".vote-num").textContent = c.likes;
        showToast(c.isLiked ? "❤️ 已为该条评论点赞！" : "已取消点赞");
      }
    });
  });

  commentsList.querySelectorAll(".comment-vote-btn.dislike-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const c = allComments.find(item => item.id === id);
      if (c) {
        c.isDisliked = !c.isDisliked;
        btn.classList.toggle("active", c.isDisliked);
        showToast(c.isDisliked ? "已标记为不感兴趣" : "已撤销标记");
      }
    });
  });

  // 回复
  commentsList.querySelectorAll(".c-reply-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const user = btn.dataset.user;
      newCommentInput.placeholder = `回复 @${user}...`;
      newCommentInput.focus();
    });
  });

  // 查看大图
  commentsList.querySelectorAll(".comment-real-img-box").forEach(box => {
    box.addEventListener("click", () => {
      showToast("🔍 正在高清全屏查看玩家附带的阵容大图");
    });
  });
}

// 发送评论
function handleAddComment() {
  const text = newCommentInput.value.trim();
  if (!text && !currentPendingAttachImg) {
    showToast("请输入评论内容或添加附图");
    return;
  }
  const currentVideo = videos[currentIndex] || INITIAL_VIDEOS[0];
  if (!currentVideo.screenshotComments) currentVideo.screenshotComments = [];

  const newComment = {
    id: Date.now(),
    user: "经验很丰富 (我)",
    avatar: currentUser.avatar,
    text: text || "分享了一张实战截图",
    attachImg: currentPendingAttachImg,
    time: "刚刚 · 湖北",
    likes: 0,
    isLiked: false,
    isDisliked: false,
    repliesCount: 0,
    replies: []
  };

  currentVideo.screenshotComments.unshift(newComment);
  newCommentInput.value = "";
  newCommentInput.placeholder = "留下你的友善评论吧";
  clearAttachPreview();
  updateCommentsDrawer(currentVideo);
  showToast("✓ 评论发表成功！已遵循社区文明规范展示在顶部");
}

function clearAttachPreview() {
  currentPendingAttachImg = null;
  const preview = document.getElementById("commentAttachPreview");
  if (preview) preview.style.display = "none";
}

// Publish Creative Center Logic (多模式创作发布)
let currentPublishMode = 'video'; // 'video' | 'image' | 'text'
let selectedMoodColor = 'linear-gradient(135deg, #FF416C, #FF4B2B)';

function openPublishModal() {
  publishModal.classList.add("active");
}

function closePublishModal() {
  publishModal.classList.remove("active");
}

function handlePublishSubmit() {
  const caption = publishCaptionInput.value.trim() || "今天在抖音记录下美好的一刻！ #记录美好生活";
  const music = publishMusicInput.value.trim() || "原声 - 创作者小天创作的原声";
  const tags = caption.match(/#[^\s#]+/g) || ["#记录美好生活", "#朋友日常"];

  if (currentPublishMode === 'video') {
    let selectedVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
    let selectedCoverUrl = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80";

    const activePreset = videoPresetSelector?.querySelector(".preset-pill.active");
    if (activePreset) {
      selectedVideoUrl = activePreset.dataset.src;
      selectedCoverUrl = activePreset.dataset.cover;
    }
    const customUrl = customVideoUrlInput?.value.trim();
    if (customUrl) selectedVideoUrl = customUrl;

    const newVideoItem = {
      id: Date.now(),
      author: {
        id: currentUser.userId,
        name: currentUser.name,
        handle: "@creator_xiaotian",
        avatar: currentUser.avatar,
        verified: true,
        bio: "热爱代码与生活，用心记录每一个精彩瞬间。",
        followers: "128.5w",
        following: 12,
        totalLikes: "1420w"
      },
      caption: caption,
      tags: tags,
      music: music,
      videoUrl: selectedVideoUrl,
      coverUrl: selectedCoverUrl,
      likes: 1,
      commentsCount: 0,
      shares: 0,
      isLiked: true,
      isCollected: false,
      isFollowed: false,
      comments: []
    };

    videos.unshift(newVideoItem);
    currentIndex = 0;
    closePublishModal();
    currentNavTab = 'home';
    currentHomeTab = 'recommend';
    renderVideo(currentIndex);
    showToast("📹 视频发布成功！已置顶推荐至首页信息流");
  } else if (currentPublishMode === 'image') {
    let selectedImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80";
    const activeImgPill = document.querySelector("#imagePresetGrid .img-pill.active");
    if (activeImgPill) selectedImg = activeImgPill.dataset.img;
    const customImg = document.getElementById("customImageUrlInput")?.value.trim();
    if (customImg) selectedImg = customImg;

    const newFriendPost = {
      id: "f_" + Date.now(),
      author: {
        name: currentUser.name + " 👑",
        avatar: currentUser.avatar,
        relation: "我的动态",
        time: "刚刚",
        ip: "北京"
      },
      caption: caption,
      tags: tags,
      mediaType: "image",
      coverUrl: selectedImg,
      likes: 1,
      isLiked: true,
      commentsCount: 0,
      comments: []
    };

    MOCK_FRIENDS_POSTS.unshift(newFriendPost);
    closePublishModal();
    currentNavTab = 'friend';
    renderCurrentView();
    showToast("🖼️ 精美图文已发布成功！已同步呈现在朋友动态专区");
  } else if (currentPublishMode === 'text') {
    const newTextPost = {
      id: "f_" + Date.now(),
      author: {
        name: currentUser.name + " 👑",
        avatar: currentUser.avatar,
        relation: "我的动态",
        time: "刚刚",
        ip: "北京"
      },
      caption: "【今日心情说说】 " + caption,
      tags: tags,
      mediaType: "image",
      coverUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      likes: 1,
      isLiked: true,
      commentsCount: 0,
      comments: []
    };

    MOCK_FRIENDS_POSTS.unshift(newTextPost);
    closePublishModal();
    currentNavTab = 'friend';
    renderCurrentView();
    showToast("✍️ 纯文字心情动态发布成功！好友们已可查看互动");
  }
}

// Creator Profile Modal Logic
// Creator Profile Modal Logic (100% 对齐 pen 原型 19. 他人个人主页)
function openProfileModal(author) {
  const fullPage = document.getElementById("userProfileFullscreenPage");
  if (fullPage) {
    fullPage.classList.add("open");
    initUserProfileFullscreenEvents();
    return;
  }
}

function closeProfileModal() {
  document.getElementById("userProfileFullscreenPage")?.classList.remove("open");
}

let isUserProfileEventsBound = false;
function initUserProfileFullscreenEvents() {
  if (isUserProfileEventsBound) return;
  isUserProfileEventsBound = true;

  // 返回按钮
  document.getElementById("closeUserProfileBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    closeProfileModal();
  });

  // 关注按钮
  let isFollowed = false;
  const followBtn = document.getElementById("userProfileFollowBtn");
  if (followBtn) {
    followBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isFollowed = !isFollowed;
      const textNode = followBtn.querySelector("div");
      if (isFollowed) {
        followBtn.style.backgroundColor = "#2f3138";
        if (textNode) textNode.textContent = "已关注";
        showToast("✅ 已成功关注 james_meow！");
      } else {
        followBtn.style.backgroundColor = "#fe2c55";
        if (textNode) textNode.textContent = "+ 关注";
        showToast("已取消关注 james_meow");
      }
    });
  }

  // 复制抖音号
  document.getElementById("copyDouyinIdBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    showToast("📋 抖音号 45575225266 已复制到剪贴板！");
  });

  // 求更新按钮
  document.getElementById("askUpdateBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    showToast("👉 已向 james_meow 催更，作者已收到你的心意！");
  });

  // 群聊卡片
  document.querySelector('[data-pencil-name="群聊入口卡片"]')?.addEventListener("click", (e) => {
    e.stopPropagation();
    showToast("💬 正在申请加入「james_meow 粉丝取图群」...");
  });

  // 作品点击预览
  document.querySelectorAll('[data-pencil-name^="作品"]').forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      const name = card.getAttribute("data-pencil-name") || "作品";
      showToast(`🎬 正在加载 ${name} 沉浸播放...`);
    });
  });
}


// Architecture & Planning Modal Content
function openArchPlanModal() {
  archPlanContent.innerHTML = `
    <div class="arch-section">
      <h4>📌 一、产品顶层设计与商业化全景</h4>
      <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6;">
        打造一个以“去中心化推荐 + 沉浸式短视频消费 + 创作者私域”为核心的国民级内容社区平台。
      </p>
      <div class="arch-grid">
        <div class="arch-card">
          <h5>1. 消费端体验</h5>
          <p>全屏上下滑沉浸Feed流、毫秒级预加载、双击微交互、弹幕/评论抽屉、多模态互动。</p>
        </div>
        <div class="arch-card">
          <h5>2. 创作者端生态</h5>
          <p>音视频智能云剪辑、多码率自适应切片(HLS/DASH)、AI生成封面与标签、作品数据罗盘。</p>
        </div>
        <div class="arch-card">
          <h5>3. 商业化闭环</h5>
          <p>信息流广告投放系统(DSP/SSP)、直播电商带货、本地生活到店券核销、虚拟打赏收益分成。</p>
        </div>
      </div>
    </div>

    <div class="arch-section">
      <h4>⚡ 二、分布式微服务技术架构选型</h4>
      <div class="arch-grid">
        <div class="arch-card">
          <h5>前端与客户端</h5>
          <p><b>Web端:</b> Vite + 原生高保真响应式引擎<br><b>App移动端:</b> Flutter / React Native 跨平台 + 原生ijkplayer播放内核</p>
        </div>
        <div class="arch-card">
          <h5>微服务后端</h5>
          <p><b>服务网关:</b> API Gateway (APISIX / Envoy)<br><b>后端核心:</b> Go (Gin/Kitex/Kratos) + Java SpringCloud (支付/风控)</p>
        </div>
        <div class="arch-card">
          <h5>存储与缓存体系</h5>
          <p><b>关系型:</b> MySQL 主从高可用 + TiDB 分布式库<br><b>缓存:</b> Redis Cluster (Feed缓存/点赞计数)<br><b>对象存储:</b> MinIO / 阿里云OSS + CDN节点加速</p>
        </div>
      </div>
    </div>

    <div class="arch-section">
      <h4>🧠 三、核心引擎：千人千面智能推荐系统</h4>
      <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6;">
        短视频核心竞争力在于推荐算法架构（召回 &rarr; 粗排 &rarr; 精排 &rarr; 重排与多样性打散）：
      </p>
      <div class="arch-grid">
        <div class="arch-card">
          <h5>召回阶段 (Retrieval)</h5>
          <p>双塔模型 (DSSM)、GraphSAGE 图推荐、基于用户标签/协同过滤协同召回千万级候选集。</p>
        </div>
        <div class="arch-card">
          <h5>精排阶段 (Ranking)</h5>
          <p>DeepFM / WDL / xDeepFM 模型，多目标预测用户完播率(VTR)、点赞率(CTR)、评论率与分享率。</p>
        </div>
        <div class="arch-card">
          <h5>重排与冷启动</h5>
          <p>EE探索与利用算法(Epsilon-Greedy/UCB)，保证新发视频流量池曝光(300~500初始播放)。</p>
        </div>
      </div>
    </div>

    <div class="arch-section">
      <h4>🚀 四、系统落地开发4阶段里程碑</h4>
      <div class="arch-grid">
        <div class="arch-card">
          <h5>阶段 1: MVP原型交付 (当前)</h5>
          <p>完成沉浸式播放器、视频发布、互动点赞评论、分类导航与全套UI设计系统。</p>
        </div>
        <div class="arch-card">
          <h5>阶段 2: 媒体处理与转码集群</h5>
          <p>搭建FFmpeg集群，实现视频自适应转码分片、智能水印、CDN边缘缓存加速。</p>
        </div>
        <div class="arch-card">
          <h5>阶段 3: 推荐算法与数据中台</h5>
          <p>接入Kafka日志埋点流、Flink实时特征计算、Redis特征库、模型实时打分预测。</p>
        </div>
        <div class="arch-card">
          <h5>阶段 4: 商业化与高可用治理</h5>
          <p>直播推流(RTMP/WebRTC)、支付结算钱包、风控敏感词过滤、全链路灰度发布与压测。</p>
        </div>
      </div>
    </div>
  `;
  archPlanModal.classList.add("active");
}

function closeArchPlanModal() {
  archPlanModal.classList.remove("active");
}

// Share Modal Logic
function openShareModal(video) {
  shareLinkInput.value = `${window.location.origin}/#video_${video.id}`;
  shareModal.classList.add("active");
}

function closeShareModal() {
  shareModal.classList.remove("active");
}

// ===================================================================
// Music Detail Drawer Logic (音乐原声详情)
// ===================================================================
function openMusicDetailDrawer(video) {
  const drawer = document.getElementById("musicDetailDrawer");
  const cover = document.getElementById("musicHeroCover");
  const name = document.getElementById("musicHeroName");
  const author = document.getElementById("musicHeroAuthor");
  const usage = document.getElementById("musicHeroUsage");
  const grid = document.getElementById("musicVideosGrid");

  if (!drawer) return;
  cover.src = video.coverUrl || video.author.avatar;
  name.textContent = video.music;
  author.textContent = `原声作者 · ${video.author.name}`;
  usage.textContent = `🔥 超过 18.6w 人使用此原声创作`;

  // 聚合视频九宫格（点击直接播放对应视频）
  grid.innerHTML = videos.map((v, idx) => `
    <div class="music-video-card" data-index="${idx}" title="${v.caption}">
      <img src="${v.coverUrl}" alt="Cover">
      <div class="card-likes">❤️ ${formatCount(v.likes)}</div>
    </div>
  `).join("");

  grid.querySelectorAll(".music-video-card").forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.dataset.index);
      closeMusicDetailDrawer();
      currentIndex = idx;
      renderVideo(currentIndex);
      showToast(`🎬 正在播放使用《${video.music}》的原声视频`);
    });
  });

  drawer.classList.add("open");
}

function closeMusicDetailDrawer() {
  document.getElementById("musicDetailDrawer")?.classList.remove("open");
}

// ===================================================================
// Shopping & Product Detail Logic (电商小黄车与好物专区)
// ===================================================================
const MOCK_PRODUCTS = [
  {
    id: "p1",
    title: "极客赛博机械光影氛围灯 | 智能声光同频",
    price: 99,
    originalPrice: "¥299",
    sales: "已售 3.6万件 · 99.8% 好评率",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p2",
    title: "1:18 顶级跑车合金收藏车模 | 原厂授权声光版",
    price: 168,
    originalPrice: "¥499",
    sales: "已售 1.2万件 · 99.2% 好评率",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p3",
    title: "户外冰川探索双层保温水壶 | 航天级钛合金",
    price: 129,
    originalPrice: "¥259",
    sales: "已售 4.8万件 · 100% 好评率",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "p4",
    title: "全栈分布式高并发架构实战教程 (附源码实操)",
    price: 69,
    originalPrice: "¥399",
    sales: "已售 8.9万件 · 99.9% 好评率",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
  }
];

function openProductDetailDrawer(video) {
  const drawer = document.getElementById("productDetailDrawer");
  if (!drawer) return;
  const prod = MOCK_PRODUCTS[(video.id - 1) % MOCK_PRODUCTS.length] || MOCK_PRODUCTS[0];

  document.getElementById("productImg").src = prod.img;
  document.getElementById("productTitle").textContent = prod.title;
  document.getElementById("productPrice").textContent = prod.price;
  document.getElementById("productOriginalPrice").textContent = prod.originalPrice;
  document.getElementById("productSales").textContent = prod.sales;

  drawer.classList.add("open");
}

function closeProductDetailDrawer() {
  document.getElementById("productDetailDrawer")?.classList.remove("open");
}

// ===================================================================
// Mall Drawer Logic (抖音商城专区)
// ===================================================================
function openMallDrawer() {
  const drawer = document.getElementById("douyinMallDrawer");
  const list = document.getElementById("mallProductList");
  if (!drawer) return;

  list.innerHTML = MOCK_PRODUCTS.map(p => `
    <div class="mall-card" data-id="${p.id}">
      <img src="${p.img}" alt="${p.title}">
      <div class="mall-card-info">
        <div class="mall-card-title">${p.title}</div>
        <div class="mall-card-price">¥${p.price} <span style="font-size: 10px; color: var(--text-muted); font-weight: normal;">已抢超万件</span></div>
      </div>
    </div>
  `).join("");

  list.querySelectorAll(".mall-card").forEach(card => {
    card.addEventListener("click", () => {
      const p = MOCK_PRODUCTS.find(item => item.id === card.dataset.id);
      if (p) {
        openProductDetailDrawer({ id: 1 });
      }
    });
  });

  drawer.classList.add("open");
}

function closeMallDrawer() {
  document.getElementById("douyinMallDrawer")?.classList.remove("open");
}

// ===================================================================
// Camera / Story Recording Logic (仿真拍摄录制)
// ===================================================================
let isRecording = false;
let recordTimerInterval = null;
let recordSeconds = 0;

function openCameraModal() {
  const modal = document.getElementById("cameraRecordingModal");
  if (!modal) return;
  modal.classList.add("open");
  resetCameraState();
}

function closeCameraModal() {
  const modal = document.getElementById("cameraRecordingModal");
  if (!modal) return;
  modal.classList.remove("open");
  resetCameraState();
}

function resetCameraState() {
  clearInterval(recordTimerInterval);
  isRecording = false;
  recordSeconds = 0;
  const timer = document.getElementById("recordingTimer");
  const ring = document.getElementById("cameraShutterBtn");
  timer?.classList.remove("active");
  ring?.classList.remove("recording");
  if (timer) timer.textContent = "00:00";
}

function toggleCameraRecording() {
  const timer = document.getElementById("recordingTimer");
  const ring = document.getElementById("cameraShutterBtn");

  if (!isRecording) {
    // Start recording
    isRecording = true;
    recordSeconds = 0;
    timer.classList.add("active");
    ring.classList.add("recording");
    showToast("🔴 正在录制短视频中... (点击快门停止并进入发布)");

    recordTimerInterval = setInterval(() => {
      recordSeconds++;
      const mins = Math.floor(recordSeconds / 60).toString().padStart(2, "0");
      const secs = (recordSeconds % 60).toString().padStart(2, "0");
      timer.textContent = `${mins}:${secs}`;
      if (recordSeconds >= 15) {
        toggleCameraRecording(); // 自动达到15秒上限
      }
    }, 1000);
  } else {
    // Stop recording
    clearInterval(recordTimerInterval);
    isRecording = false;
    timer.classList.remove("active");
    ring.classList.remove("recording");
    showToast("🎬 录制完成！已载入拍摄素材，立即前往发布");
    closeCameraModal();
    openPublishModal();
  }
}

// ===================================================================
// Mobile Search & Results Drawer Logic
// ===================================================================
function openSearchResultsDrawer(query) {
  const drawer = document.getElementById("mobileSearchResultsDrawer");
  const input = document.getElementById("searchResultsInput");
  const list = document.getElementById("searchResultsList");
  if (!drawer) return;

  if (input) input.value = query;

  const q = query.toLowerCase().trim();
  const matched = videos.filter(v => 
    v.caption.toLowerCase().includes(q) ||
    v.author.name.toLowerCase().includes(q) ||
    v.tags.some(t => t.toLowerCase().includes(q)) ||
    v.music.toLowerCase().includes(q)
  );

  if (matched.length > 0) {
    list.innerHTML = matched.map((v, i) => `
      <div class="search-result-video-card" data-id="${v.id}">
        <img src="${v.coverUrl}" alt="cover">
        <div class="search-res-info">
          <div class="search-res-caption">${v.caption}</div>
          <div class="search-res-author">
            <img src="${v.author.avatar}" alt="avatar">
            <span>${v.author.name} · ❤️ ${formatCount(v.likes)}</span>
          </div>
        </div>
      </div>
    `).join("");

    list.querySelectorAll(".search-result-video-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = parseInt(card.dataset.id);
        const idx = videos.findIndex(v => v.id === id);
        if (idx !== -1) {
          currentIndex = idx;
          renderVideo(currentIndex);
          closeSearchResultsDrawer();
          showToast(`正在播放选中的搜索视频`);
        }
      });
    });
  } else {
    list.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 40px 10px;">
        <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
        <p>暂无与「${query}」直接相关的视频</p>
        <p style="font-size: 12px; margin-top: 4px;">建议换个关键词试试，如“赛博”、“超跑”、“风景”、“架构”</p>
      </div>
    `;
  }

  drawer.classList.add("open");
}

// ===================================================================
// 1. 独立私聊全屏对话窗口系统 (Chat Room Drawer System)
// ===================================================================
let currentChatTarget = { name: "极客全栈架构师 ✓", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" };
const MOCK_CHAT_HISTORY = {
  "极客全栈架构师 ✓": [
    { id: 1, sender: "target", text: "你好！欢迎交流短视频架构与微服务实战！🤝", time: "10:30" },
    { id: 2, sender: "target", text: "你之前提问的关于 Kafka 分区与消费者负载均衡，我们这套方案是按用户 ID Hash 保证顺序消费的。", time: "10:31" },
    { id: 3, sender: "me", text: "老师讲解得太透彻了！已成功解决高并发 Feed 流堆积的问题！🚀", time: "10:32" }
  ],
  "极速超跑集结": [
    { id: 1, sender: "target", text: "周末天门山赛道日集结，车队还缺几台跑车，一起来玩吗？🏎️", time: "昨天" },
    { id: 2, sender: "me", text: "可以的！我带上专业相机给大伙拍弯道声浪大片！📸", time: "昨天" }
  ],
  "抖音小助手 官方": [
    { id: 1, sender: "target", text: "恭喜！你的作品《极光赛博夜都市》已进入全站热门推荐流量池，已向 50w+ 同城观众推荐！🎉", time: "前天" }
  ]
};

function openChatRoom(name, avatar) {
  const drawer = document.getElementById("chatRoomDrawer");
  if (!drawer) return;
  currentChatTarget.name = name || "极客全栈架构师 ✓";
  currentChatTarget.avatar = avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80";

  const targetAvatarEl = document.getElementById("chatTargetAvatar");
  const targetNameEl = document.getElementById("chatTargetName");
  if (targetAvatarEl) targetAvatarEl.src = currentChatTarget.avatar;
  if (targetNameEl) targetNameEl.textContent = currentChatTarget.name;

  if (!MOCK_CHAT_HISTORY[currentChatTarget.name]) {
    MOCK_CHAT_HISTORY[currentChatTarget.name] = [
      { id: Date.now(), sender: "target", text: `你好，我是${currentChatTarget.name}，很高兴认识你！支持发文字、表情和图片哦！✨`, time: "刚刚" }
    ];
  }

  renderChatMessages();
  drawer.classList.add("open");
}

function closeChatRoom() {
  document.getElementById("chatRoomDrawer")?.classList.remove("open");
}

function renderChatMessages() {
  const container = document.getElementById("chatMessagesFlow");
  if (!container) return;
  const history = MOCK_CHAT_HISTORY[currentChatTarget.name] || [];

  container.innerHTML = history.map(msg => {
    const isMe = msg.sender === "me";
    return `
      <div class="chat-bubble-row ${isMe ? 'msg-me' : 'msg-target'}">
        ${!isMe ? `<img src="${currentChatTarget.avatar}" class="chat-bubble-avatar">` : ''}
        <div class="chat-bubble-content">
          ${msg.img ? `<img src="${msg.img}" class="chat-media-img" onclick="showToast('正在查看高清大图')">` : ''}
          ${msg.text ? `<div class="chat-text-bubble">${msg.text}</div>` : ''}
          <div class="chat-time-tag">${msg.time}</div>
        </div>
        ${isMe ? `<img src="${currentUser.avatar}" class="chat-bubble-avatar">` : ''}
      </div>
    `;
  }).join("");

  container.scrollTop = container.scrollHeight;
}

function sendChatMessage(text, imgUrl = null) {
  if (!text && !imgUrl) return;
  const history = MOCK_CHAT_HISTORY[currentChatTarget.name] || [];
  const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  history.push({
    id: Date.now(),
    sender: "me",
    text: text || "",
    img: imgUrl,
    time: nowTime
  });

  renderChatMessages();

  // 模拟对方智能秒回
  setTimeout(() => {
    const replies = [
      "收到你的私信了！消息已安全加密传输 ✨",
      "哈哈赞同！点赞了你的最新动态 👍",
      "太棒了，期待下一次的精彩内容共创！🚀",
      "感谢留言！已互相关注，常联系哦！🤝"
    ];
    const replyText = replies[Math.floor(Math.random() * replies.length)];
    history.push({
      id: Date.now() + 1,
      sender: "target",
      text: replyText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    renderChatMessages();
  }, 1200);
}

// ===================================================================
// 2. 独立设置中心与明暗主题切换逻辑 (Settings & Theme)
// ===================================================================
let isDarkMode = true;

function openSettingsDrawer() {
  const drawer = document.getElementById("settingsDrawer");
  if (!drawer) return;
  updateSettingsThemeUI();
  drawer.classList.add("open");
}

function closeSettingsDrawer() {
  document.getElementById("settingsDrawer")?.classList.remove("open");
}

function toggleThemeMode() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.documentElement.removeAttribute("data-theme");
    document.body.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.body.setAttribute("data-theme", "light");
  }
  updateSettingsThemeUI();
  showToast(isDarkMode ? "🌙 已切换为深色护眼模式" : "☀️ 已切换为极简明亮模式");
}

function updateSettingsThemeUI() {
  const icon = document.getElementById("settingsThemeIcon");
  const text = document.getElementById("settingsThemeText");
  if (icon && text) {
    icon.textContent = isDarkMode ? "🌙" : "☀️";
    text.textContent = isDarkMode ? "当前: 深色模式" : "当前: 浅色明亮模式";
  }
}

function clearCache() {
  showToast("🧹 正在清理本地视频与离线数据缓存...");
  setTimeout(() => {
    showToast("✅ 已成功清理 24.8MB 缓存垃圾，运行更流畅！");
  }, 800);
}

// ===================================================================
// 3. 注册与登录系统逻辑 (Auth System)
// ===================================================================
let isAuthLoggedIn = true;

function openAuthModal() {
  document.getElementById("authModal")?.classList.add("active");
}

function closeAuthModal() {
  document.getElementById("authModal")?.classList.remove("active");
}

function handleAuthSubmit() {
  const phone = document.getElementById("authPhoneInput")?.value.trim() || "13800138000";
  currentUser.isLoggedIn = true;
  currentUser.name = "创作者小天 (已登录)";
  currentUser.phone = phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  closeAuthModal();
  updateAuthUI();
  showToast("🎉 登录成功！欢迎回来，" + currentUser.name);
}

function quickGuestLogin() {
  currentUser.isLoggedIn = true;
  currentUser.name = "极客VIP体验官";
  currentUser.phone = "188****9999";
  closeAuthModal();
  updateAuthUI();
  showToast("⚡ 已通过一键免密授权，登录成功！");
}

function handleLogout() {
  currentUser.isLoggedIn = false;
  currentUser.name = "未登录游客";
  currentUser.phone = "点击前往登录";
  closeSettingsDrawer();
  updateAuthUI();
  showToast("🚪 已退出登录状态，可随时重新登录体验全量功能");
}

function updateAuthUI() {
  const userNick = document.querySelector(".user-nickname");
  if (userNick) userNick.textContent = currentUser.name;
  const settingsName = document.getElementById("settingsUserName");
  if (settingsName) settingsName.textContent = currentUser.name;
  const settingsPhone = document.getElementById("settingsUserPhone");
  if (settingsPhone) settingsPhone.textContent = "绑定手机: " + currentUser.phone;
}

function closeSearchResultsDrawer() {
  document.getElementById("mobileSearchResultsDrawer")?.classList.remove("open");
}

// Search Logic
function handleSearch(keyword) {
  const query = keyword.toLowerCase().trim();
  if (!query) {
    videos = [...INITIAL_VIDEOS];
    currentIndex = 0;
    renderVideo(currentIndex);
    return;
  }

  // 移动端优先呼出搜索结果专用抽屉
  if (document.body.classList.contains("mobile-mode")) {
    openSearchResultsDrawer(query);
    return;
  }

  const filtered = INITIAL_VIDEOS.filter(v =>
    v.caption.toLowerCase().includes(query) ||
    v.author.name.toLowerCase().includes(query) ||
    v.tags.some(tag => tag.toLowerCase().includes(query)) ||
    v.music.toLowerCase().includes(query)
  );

  if (filtered.length > 0) {
    videos = filtered;
    currentIndex = 0;
    renderVideo(currentIndex);
    showToast(`🔍 找到 ${filtered.length} 条与「${keyword}」相关的视频`);
  } else {
    showToast(`未找到「${keyword}」相关内容，已展示推荐流`);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation Next/Prev Buttons (if present)
  nextVideoBtn?.addEventListener("click", goToNextVideo);
  prevVideoBtn?.addEventListener("click", goToPrevVideo);

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
      return;
    }

    if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
      e.preventDefault();
      goToNextVideo();
    } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
      e.preventDefault();
      goToPrevVideo();
    } else if (e.key === " ") {
      e.preventDefault();
      const videoPlayer = document.getElementById("mainVideoPlayer");
      const indicator = document.getElementById("playPauseIndicator");
      const musicDisc = document.getElementById("musicDisc");
      if (videoPlayer) togglePlayPause(videoPlayer, indicator, musicDisc);
    }
  });

  // Mouse wheel scroll to switch videos
  let lastWheelTime = 0;
  window.addEventListener("wheel", (e) => {
    if (e.target.closest(".comments-drawer") || e.target.closest(".modal-card") || e.target.closest(".settings-drawer") || e.target.closest(".mobile-search-drawer")) {
      return;
    }

    const now = Date.now();
    if (now - lastWheelTime < 600) return;

    if (e.deltaY > 50) {
      lastWheelTime = now;
      goToNextVideo();
    } else if (e.deltaY < -50) {
      lastWheelTime = now;
      goToPrevVideo();
    }
  }, { passive: true });

  // 移动端手势滑动切视频支持 (Touch Gestures)
  let touchStartY = 0;
  let touchEndY = 0;
  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener("touchend", (e) => {
    touchEndY = e.changedTouches[0].clientY;
    const diffY = touchEndY - touchStartY;
    if (Math.abs(diffY) > 60) {
      if (diffY < 0) {
        goToNextVideo(); // 向上滑看下一个视频
      } else {
        goToPrevVideo(); // 向下滑看上一个视频
      }
    }
  }, { passive: true });

  // Top Nav Tabs 深度联动
  navTabs?.querySelectorAll(".nav-tab")?.forEach(tab => {
    tab.addEventListener("click", () => {
      navTabs.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const tabName = tab.dataset.tab;
      if (tabName === 'follow') {
        currentNavTab = 'home';
        currentHomeTab = 'follow';
        renderCurrentView();
        showToast("📱 已切换至「我的关注」独立信息流页面");
      } else if (tabName === 'friend') {
        currentNavTab = 'friend';
        renderCurrentView();
        showToast("👥 已进入「朋友动态」独立专区");
      } else if (tabName === 'live') {
        currentNavTab = 'home';
        currentHomeTab = 'live';
        renderCurrentView();
        showToast("🔴 已连线进入官方高码率「直播间」独立页面");
      } else if (tabName === 'hot' || tabName === 'knowledge') {
        currentNavTab = 'home';
        currentHomeTab = 'mall';
        renderCurrentView();
        showToast("🛒 已切换至「抖音商城与热门好物」独立页面");
      } else {
        currentNavTab = 'home';
        currentHomeTab = 'recommend';
        renderCurrentView();
        showToast("🎬 已切换至「首页推荐」沉浸视频流");
      }
    });
  });

  // PC Left Sidebar 深度联动移动端视图 (防御性)
  document.querySelectorAll(".sidebar-menu .menu-item").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".sidebar-menu .menu-item").forEach(m => m.classList.remove("active"));
      item.classList.add("active");
      const route = item.dataset.route;
      if (route === 'feed') {
        currentNavTab = 'home';
        currentHomeTab = 'recommend';
        renderCurrentView();
      } else if (route === 'friend') {
        currentNavTab = 'friend';
        renderCurrentView();
      } else if (route === 'follow') {
        currentNavTab = 'home';
        currentHomeTab = 'follow';
        renderCurrentView();
      } else if (route === 'explore') {
        currentNavTab = 'home';
        currentHomeTab = 'mall';
        renderCurrentView();
      } else if (route === 'likes') {
        currentNavTab = 'mine';
        renderCurrentView();
      } else if (route === 'history') {
        currentNavTab = 'mine';
        renderCurrentView();
      }
    });
  });

  // 消息通知
  document.getElementById("notifyBtn")?.addEventListener("click", () => {
    currentNavTab = 'message';
    renderCurrentView();
    showToast("💬 已进入「互动消息中心」独立页面");
  });

  // Search input events (防御性)
  searchInput?.addEventListener("input", (e) => {
    if (searchClearBtn) searchClearBtn.style.display = e.target.value ? "block" : "none";
  });

  searchClearBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    searchClearBtn.style.display = "none";
    handleSearch("");
  });

  searchSubmitBtn?.addEventListener("click", () => {
    if (searchInput) handleSearch(searchInput.value);
  });

  searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSearch(searchInput.value);
    }
  });

  // Comments drawer listeners
  closeCommentsDrawerBtn?.addEventListener("click", closeCommentsDrawer);
  sendCommentBtn?.addEventListener("click", handleAddComment);
  newCommentInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleAddComment();
    }
  });

  // Publish modal listeners
  openPublishModalBtn?.addEventListener("click", openPublishModal);
  closePublishModalBtn?.addEventListener("click", closePublishModal);
  cancelPublishBtn?.addEventListener("click", closePublishModal);
  submitPublishBtn?.addEventListener("click", handlePublishSubmit);

  // Preset video selector pills
  videoPresetSelector?.querySelectorAll(".preset-pill")?.forEach(pill => {
    pill.addEventListener("click", () => {
      videoPresetSelector.querySelectorAll(".preset-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      if (customVideoUrlInput) customVideoUrlInput.value = "";
    });
  });

  // Quick tags
  document.querySelectorAll(".quick-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      if (publishCaptionInput) publishCaptionInput.value += ` ${tag.dataset.tag} `;
    });
  });

  // Profile modal listeners
  closeProfileModalBtn?.addEventListener("click", closeProfileModal);
  myProfileBtn?.addEventListener("click", () => {
    openProfileModal({
      id: "u_me",
      name: "创作者小天",
      handle: "@creator_xiaotian",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      bio: "全栈开发者 | 抖音深度用户与内容共创者",
      followers: "1",
      following: 12,
      totalLikes: "0"
    });
  });

  // Architecture & Planning Modal listeners (防御性)
  openArchPlanBtn?.addEventListener("click", openArchPlanModal);
  closeArchPlanModalBtn?.addEventListener("click", closeArchPlanModal);

  // Share modal listeners
  closeShareModalBtn?.addEventListener("click", closeShareModal);
  copyShareLinkBtn?.addEventListener("click", () => {
    if (shareLinkInput) navigator.clipboard?.writeText(shareLinkInput.value);
    showToast("📋 视频分享链接已复制到剪贴板！");
  });

  ["shareWechat", "shareMoments", "shareQQ", "shareCopyLink"].forEach(id => {
    document.getElementById(id)?.addEventListener("click", () => {
      if (shareLinkInput) navigator.clipboard?.writeText(shareLinkInput.value);
      showToast("✅ 分享链接已生成，快去发给好友吧！");
    });
  });

  // Brand logo click
  brandLogo?.addEventListener("click", () => {
    videos = [...INITIAL_VIDEOS];
    currentIndex = 0;
    renderVideo(currentIndex);
    showToast("已刷新推荐信息流");
  });

  // Device Viewport Switcher Listeners
  const btnViewMobile = document.getElementById("btnViewMobile");
  const btnViewDesktop = document.getElementById("btnViewDesktop");

  btnViewMobile?.addEventListener("click", () => {
    document.body.classList.add("mobile-mode");
    btnViewMobile.classList.add("active");
    btnViewDesktop.classList.remove("active");
    showToast("📱 已切换至移动端真机视图 (iPhone 390x844)");
  });

  btnViewDesktop?.addEventListener("click", () => {
    document.body.classList.remove("mobile-mode");
    btnViewDesktop.classList.add("active");
    btnViewMobile.classList.remove("active");
    showToast("🖥️ 已切换至桌面端宽屏视图");
  });

  // Theme Switcher Listener (Dark / Light)
  const btnThemeToggle = document.getElementById("btnThemeToggle");
  const themeToggleIcon = document.getElementById("themeToggleIcon");
  const themeToggleText = document.getElementById("themeToggleText");
  let isLightMode = false;

  btnThemeToggle?.addEventListener("click", () => {
    isLightMode = !isLightMode;
    document.body.classList.toggle("theme-light", isLightMode);
    document.body.classList.toggle("theme-dark", !isLightMode);
    if (isLightMode) {
      themeToggleIcon.textContent = "🌙";
      themeToggleText.textContent = "暗色模式";
      showToast("☀️ 已切换至「亮色/浅色模式」清新视觉");
    } else {
      themeToggleIcon.textContent = "☀️";
      themeToggleText.textContent = "亮色模式";
      showToast("🌙 已切换至「暗色模式」经典黑曜石视觉");
    }
  });

  // Mobile Search Drawer listeners
  const mobileSearchDrawer = document.getElementById("mobileSearchDrawer");
  const btnCancelMobileSearch = document.getElementById("btnCancelMobileSearch");
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  const mobileSearchClear = document.getElementById("mobileSearchClear");

  btnCancelMobileSearch?.addEventListener("click", () => {
    mobileSearchDrawer?.classList.remove("open");
  });

  mobileSearchInput?.addEventListener("input", () => {
    if (mobileSearchClear) {
      mobileSearchClear.style.display = mobileSearchInput.value ? "block" : "none";
    }
  });

  mobileSearchClear?.addEventListener("click", () => {
    mobileSearchInput.value = "";
    mobileSearchClear.style.display = "none";
  });

  document.querySelectorAll(".hot-tag-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const tagText = pill.textContent.replace(/^[🔥🏔️💻✨]\s*/, "");
      mobileSearchDrawer?.classList.remove("open");
      handleSearch(tagText);
    });
  });

  // Mobile Messages Drawer listeners
  const mobileMessagesDrawer = document.getElementById("mobileMessagesDrawer");
  const closeMessagesDrawerBtn = document.getElementById("closeMessagesDrawerBtn");
  const notifyBtn = document.getElementById("notifyBtn");

  notifyBtn?.addEventListener("click", () => {
    mobileMessagesDrawer?.classList.add("open");
  });

  closeMessagesDrawerBtn?.addEventListener("click", () => {
    mobileMessagesDrawer?.classList.remove("open");
  });

  // Action Menu listeners
  const videoActionMenuModal = document.getElementById("videoActionMenuModal");
  const closeActionMenuBtn = document.getElementById("closeActionMenuBtn");
  const btnToggleClearScreen = document.getElementById("btnToggleClearScreen");
  const btnDownloadVideo = document.getElementById("btnDownloadVideo");
  const btnNotInterested = document.getElementById("btnNotInterested");
  const btnReportVideo = document.getElementById("btnReportVideo");

  closeActionMenuBtn?.addEventListener("click", () => {
    videoActionMenuModal?.classList.remove("active");
  });

  btnToggleClearScreen?.addEventListener("click", () => {
    videoActionMenuModal?.classList.remove("active");
    const videoCard = document.getElementById("videoCard");
    videoCard?.classList.add("clear-screen");
    showToast("👁️ 已开启清屏模式，轻触屏幕任意区域即可退出");
  });

  btnDownloadVideo?.addEventListener("click", () => {
    videoActionMenuModal?.classList.remove("active");
    showToast("📥 已开始将 1080P 超清视频保存至本地相册！");
  });

  btnNotInterested?.addEventListener("click", () => {
    videoActionMenuModal?.classList.remove("active");
    showToast("🚫 已记录偏好，将减少此类推荐！");
    goToNextVideo();
  });

  btnReportVideo?.addEventListener("click", () => {
    videoActionMenuModal?.classList.remove("active");
    showToast("⚠️ 已收到内容违规举报，安全审核团队将在2小时内核查！");
  });

  // Speed selection in Action Menu
  document.querySelectorAll(".speed-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".speed-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const speed = parseFloat(btn.dataset.speed || "1.0");
      const player = document.getElementById("mainVideoPlayer");
      if (player) player.playbackRate = speed;
      videoActionMenuModal?.classList.remove("active");
      showToast(`⚡ 已将播放倍速调整为 ${speed}X`);
    });
  });

  // Quick Emoji Bar listeners
  document.querySelectorAll(".quick-emoji-item").forEach(item => {
    item.addEventListener("click", () => {
      newCommentInput.value += item.textContent;
      newCommentInput.focus();
    });
  });

  // Mobile Top Live Tab Click
  const mTabLive = document.querySelector(".m-tab-live");
  mTabLive?.addEventListener("click", () => {
    showToast("🔴 正在连线进入官方高码率「直播间」，开启互动弹幕！");
  });

  // Music Detail Drawer Listeners
  document.getElementById("closeMusicDetailBtn")?.addEventListener("click", closeMusicDetailDrawer);
  document.getElementById("btnCollectMusic")?.addEventListener("click", () => {
    showToast("⭐ 音乐收藏成功！已同步至个人主页-收藏音乐库");
  });
  document.getElementById("btnShootSame")?.addEventListener("click", () => {
    closeMusicDetailDrawer();
    openCameraModal();
    showToast("🎵 已载入当前背景配乐，开始拍摄同款！");
  });
  document.getElementById("shareMusicBtn")?.addEventListener("click", () => {
    showToast("↗ 已复制原声音频分享卡片！");
  });

  // Shopping & Product Drawer Listeners
  document.getElementById("closeProductDrawerBtn")?.addEventListener("click", closeProductDetailDrawer);
  document.getElementById("btnAddCartBtn")?.addEventListener("click", () => {
    showToast("🛒 成功加入抖音购物车！可在商城查看");
  });
  document.getElementById("btnBuyNowBtn")?.addEventListener("click", () => {
    showToast("🎉 领券成功！已为你生成极速免密支付订单！");
    setTimeout(closeProductDetailDrawer, 800);
  });

  // Mall Drawer Listeners
  document.getElementById("closeMallDrawerBtn")?.addEventListener("click", closeMallDrawer);
  document.getElementById("mallCartBtn")?.addEventListener("click", () => {
    showToast("🛒 购物车已有 3 件超值好物待结算");
  });

  // Camera Recording Listeners
  document.getElementById("closeCameraBtn")?.addEventListener("click", closeCameraModal);
  document.getElementById("cameraShutterBtn")?.addEventListener("click", toggleCameraRecording);
  document.getElementById("cameraFlipBtn")?.addEventListener("click", () => {
    showToast("🔄 摄像头已翻转至前置/后置高清镜头");
  });
  document.getElementById("cameraSoundPicker")?.addEventListener("click", () => {
    showToast("🎵 抖音热门配乐榜：1. 原声流行 2. 赛博电音 3. 治愈纯音");
  });
  document.getElementById("cameraFilterBtn")?.addEventListener("click", () => {
    showToast("✨ 胶片滤镜已开启：富士经典色彩模拟");
  });
  document.getElementById("cameraBeautyBtn")?.addEventListener("click", () => {
    showToast("💄 智能微皮美颜已调整至 50%");
  });
  document.getElementById("cameraTimerBtn")?.addEventListener("click", () => {
    showToast("⏱️ 3秒倒计时拍摄已就绪");
  });
  document.getElementById("cameraSpeedBtn")?.addEventListener("click", () => {
    showToast("⚡ 当前拍摄速率：标准 1.0X");
  });
  document.getElementById("cameraAlbumBtn")?.addEventListener("click", () => {
    closeCameraModal();
    openPublishModal();
  });
  document.getElementById("cameraPropBtn")?.addEventListener("click", () => {
    showToast("🎭 爆款道具特技已加载：赛博墨镜");
  });

  // Search Results Drawer Listeners
  document.getElementById("closeSearchResultsBtn")?.addEventListener("click", closeSearchResultsDrawer);
  document.getElementById("searchSubmitAction")?.addEventListener("click", () => {
    const val = document.getElementById("searchResultsInput")?.value;
    if (val) openSearchResultsDrawer(val);
  });
  document.getElementById("searchResultsInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.value) {
      openSearchResultsDrawer(e.target.value);
    }
  });
  // Auth Modal Listeners
  document.getElementById("btnHeaderLogin")?.addEventListener("click", openAuthModal);
  document.getElementById("closeAuthModalBtn")?.addEventListener("click", closeAuthModal);
  document.getElementById("btnAuthSubmit")?.addEventListener("click", handleAuthSubmit);
  document.getElementById("btnQuickGuest")?.addEventListener("click", quickGuestLogin);
  document.getElementById("tabSmsLogin")?.addEventListener("click", () => {
    document.getElementById("tabSmsLogin")?.classList.add("active");
    document.getElementById("tabPwdLogin")?.classList.remove("active");
    document.getElementById("groupSmsCode").style.display = "block";
    document.getElementById("groupPassword").style.display = "none";
  });
  document.getElementById("tabPwdLogin")?.addEventListener("click", () => {
    document.getElementById("tabPwdLogin")?.classList.add("active");
    document.getElementById("tabSmsLogin")?.classList.remove("active");
    document.getElementById("groupSmsCode").style.display = "none";
    document.getElementById("groupPassword").style.display = "block";
  });
  document.getElementById("btnSendSms")?.addEventListener("click", () => {
    const btn = document.getElementById("btnSendSms");
    btn.disabled = true;
    let sec = 60;
    btn.textContent = `${sec}s`;
    showToast("📩 验证码已发送至手机：8888");
    const iv = setInterval(() => {
      sec--;
      btn.textContent = `${sec}s`;
      if (sec <= 0) {
        clearInterval(iv);
        btn.disabled = false;
        btn.textContent = "获取验证码";
      }
    }, 1000);
  });

  // Settings Drawer Listeners
  document.getElementById("closeSettingsBtn")?.addEventListener("click", closeSettingsDrawer);
  document.getElementById("btnSettingsThemeToggle")?.addEventListener("click", toggleThemeMode);
  document.getElementById("btnClearCache")?.addEventListener("click", clearCache);
  document.getElementById("btnSettingsLogout")?.addEventListener("click", handleLogout);
  document.getElementById("btnSwitchAccount")?.addEventListener("click", () => {
    closeSettingsDrawer();
    openAuthModal();
  });
  document.getElementById("chkFollowSystem")?.addEventListener("change", (e) => {
    showToast(e.target.checked ? "已开启跟随系统深浅外观" : "已关闭跟随系统");
  });

  // Chat Room Drawer Listeners
  document.getElementById("closeChatRoomBtn")?.addEventListener("click", closeChatRoom);
  document.getElementById("btnChatMore")?.addEventListener("click", () => {
    showToast("⚙️ 私聊设置：置顶聊天、消息免打扰、拉黑");
  });
  document.getElementById("btnChatSend")?.addEventListener("click", () => {
    const input = document.getElementById("chatTextInput");
    if (input && input.value.trim()) {
      sendChatMessage(input.value.trim());
      input.value = "";
    }
  });
  document.getElementById("chatTextInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      sendChatMessage(e.target.value.trim());
      e.target.value = "";
    }
  });
  document.getElementById("btnChatToggleEmoji")?.addEventListener("click", () => {
    const panel = document.getElementById("chatEmojiPanel");
    if (panel) {
      panel.style.display = panel.style.display === "none" ? "flex" : "none";
    }
  });
  document.querySelectorAll("#chatEmojiPanel span").forEach(emoji => {
    emoji.addEventListener("click", () => {
      const input = document.getElementById("chatTextInput");
      if (input) {
        input.value += emoji.textContent;
        input.focus();
      }
    });
  });
  document.getElementById("btnChatPickImage")?.addEventListener("click", () => {
    const samplePhotos = [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
    ];
    const picked = samplePhotos[Math.floor(Math.random() * samplePhotos.length)];
    sendChatMessage("[分享了一张图片]", picked);
    showToast("📷 发送了一张照片至私聊会话");
  });
  document.getElementById("btnChatToggleVoice")?.addEventListener("click", () => {
    showToast("🎙️ 正在录制语音... 松开立即发送");
    setTimeout(() => {
      sendChatMessage("🎙️ [语音消息 4秒]");
    }, 1500);
  });

  // Publish Mode Tabs (发视频 / 发图文 / 发文字)
  document.querySelectorAll("#publishModeTabs .pub-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#publishModeTabs .pub-mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentPublishMode = btn.dataset.mode;

      document.getElementById("paneVideo").style.display = currentPublishMode === 'video' ? 'block' : 'none';
      document.getElementById("paneImage").style.display = currentPublishMode === 'image' ? 'block' : 'none';
      document.getElementById("paneText").style.display = currentPublishMode === 'text' ? 'block' : 'none';
      document.getElementById("groupMusic").style.display = currentPublishMode === 'text' ? 'none' : 'block';
    });
  });

  // Image Presets in Publish
  document.querySelectorAll("#imagePresetGrid .img-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll("#imagePresetGrid .img-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
    });
  });

  // Mood Color Presets in Publish
  document.querySelectorAll("#moodColorBar .mood-color-circle").forEach(circle => {
    circle.addEventListener("click", () => {
      document.querySelectorAll("#moodColorBar .mood-color-circle").forEach(c => c.classList.remove("active"));
      circle.classList.add("active");
      selectedMoodColor = circle.dataset.color;
      const previewCard = document.getElementById("moodPreviewCard");
      if (previewCard) previewCard.style.background = selectedMoodColor;
    });
  });

  // Publish Caption real-time preview
  document.getElementById("publishCaptionInput")?.addEventListener("input", (e) => {
    const textPreview = document.getElementById("moodPreviewText");
    if (textPreview) {
      textPreview.textContent = e.target.value.trim() || "在此输入你的今日心情动态与生活感悟...";
    }
  });

  // 全新截图高保真浮层与全屏抽屉控制器绑定
  setupScreenshotDrawerControllers();
}

/**
 * 1:1 还原 17 张截图核心交互控制器 (侧边抽屉 / 设置页 / 切换账号 / 手机号数字键盘登录 / 相机 / 搜索)
 */
function setupScreenshotDrawerControllers() {
  // 1. 个人中心侧边抽屉 (画板09)
  const profileDrawer = document.getElementById("profileSidebarDrawer");
  const overlay = document.getElementById("closeSidebarDrawerOverlay");

  window.openProfileSidebarDrawer = () => {
    profileDrawer?.classList.add("open");
  };
  window.closeProfileSidebarDrawer = () => {
    profileDrawer?.classList.remove("open");
  };

  // 点击左侧大片空白遮罩区域立即关闭抽屉并返回
  overlay?.addEventListener("click", (e) => {
    e.stopPropagation();
    closeProfileSidebarDrawer();
  });

  // 点击抽屉外部任意非内容区域也立即关闭返回
  profileDrawer?.addEventListener("click", (e) => {
    if (!e.target.closest(".sidebar-drawer-content")) {
      closeProfileSidebarDrawer();
    }
  });

  // 抽屉内部头部按钮与各项
  document.getElementById("btnDrawerSettings")?.addEventListener("click", () => {
    closeProfileSidebarDrawer();
    openSettingsDrawer();
  });
  document.getElementById("btnDrawerScan")?.addEventListener("click", () => {
    showToast("📷 正在打开扫一扫：支持扫描朋友二维码名片与核销码");
  });
  document.getElementById("cellOrders")?.addEventListener("click", () => {
    showToast("🛍️ 正在打开抖音商城：查看待付款、待发货与退款订单");
  });
  document.getElementById("cellWallet")?.addEventListener("click", () => {
    showToast("💳 我的钱包：已安全绑定，零钱余额 ¥128.50");
  });
  document.getElementById("cellHistory")?.addEventListener("click", () => {
    showToast("⏱️ 观看历史：已加载你最近浏览的 38 个视频作品");
  });
  document.getElementById("cellCreatorCenter")?.addEventListener("click", () => {
    showToast("📈 创作者服务中心：作品播放分析与流量扶持指南");
  });
  document.getElementById("cellService")?.addEventListener("click", () => {
    showToast("🎧 我的客服：7x24小时智能在线解答");
  });
  document.getElementById("cellMyQr")?.addEventListener("click", () => {
    showToast("㗊 我的二维码：已生成高清电子名片");
  });

  // 2. 独立设置页 (画板10)
  const settingsDrawer = document.getElementById("settingsDrawer");
  window.openSettingsDrawer = () => settingsDrawer?.classList.add("open");
  window.closeSettingsDrawer = () => settingsDrawer?.classList.remove("open");

  document.getElementById("closeSettingsBtn")?.addEventListener("click", closeSettingsDrawer);
  document.getElementById("btnSwitchAccount")?.addEventListener("click", () => {
    closeSettingsDrawer();
    openSwitchAccountPage();
  });
  document.getElementById("btnSettingsLogout")?.addEventListener("click", () => {
    showToast("🚪 已退出当前登录状态");
    closeSettingsDrawer();
  });
  document.getElementById("board10AiInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = e.target.value.trim();
      if (q) {
        showToast(`✨ AI 助手已解析：「${q}」，正在为你定位最优配置...`);
        e.target.value = "";
      }
    }
  });

  // 3. 切换账号页 (画板11)
  const switchPage = document.getElementById("switchAccountPage");
  window.openSwitchAccountPage = () => switchPage?.classList.add("active");
  window.closeSwitchAccountPage = () => switchPage?.classList.remove("active");

  document.getElementById("closeSwitchAccountBtn")?.addEventListener("click", closeSwitchAccountPage);
  document.getElementById("openCreateAccountSheetBtn")?.addEventListener("click", () => {
    openCreateAccountSheet();
  });
  document.getElementById("accCardCurrent")?.addEventListener("click", () => {
    showToast("✓ 当前已在「创作者小天」账号");
  });
  document.getElementById("accCardSub")?.addEventListener("click", () => {
    showToast("🔄 正在切换至「极客科技副号」...");
    setTimeout(() => {
      showToast("🎉 已成功切换至「极客科技副号」！");
      closeSwitchAccountPage();
    }, 600);
  });

  // 4. 创建新账号半屏浮层 (画板12)
  const createSheet = document.getElementById("createAccountSheet");
  window.openCreateAccountSheet = () => createSheet?.classList.add("active");
  window.closeCreateAccountSheet = () => createSheet?.classList.remove("active");

  document.getElementById("btnCloseCreateSheet")?.addEventListener("click", closeCreateAccountSheet);
  document.getElementById("closeCreateAccountMask")?.addEventListener("click", closeCreateAccountSheet);

  document.getElementById("btnOneKeyRegister")?.addEventListener("click", () => {
    showToast("⚡ 本机号码一键授权注册中...");
    setTimeout(() => {
      showToast("🎉 注册成功！已为您建立新创作者账号");
      closeCreateAccountSheet();
    }, 800);
  });
  document.getElementById("btnOtherPhoneRegister")?.addEventListener("click", () => {
    closeCreateAccountSheet();
    openSelectRegisterTypePage();
  });

  // 5. 选择注册方式页 (画板13)
  const registerTypePage = document.getElementById("selectRegisterTypePage");
  window.openSelectRegisterTypePage = () => registerTypePage?.classList.add("active");
  window.closeSelectRegisterTypePage = () => registerTypePage?.classList.remove("active");

  document.getElementById("closeRegisterTypeBtn")?.addEventListener("click", closeSelectRegisterTypePage);
  document.getElementById("btnBoard13GetCode")?.addEventListener("click", () => {
    const input = document.getElementById("board13PhoneInput");
    if (!input?.value || input.value.length < 11) {
      showToast("📱 请输入11位有效手机号码");
      return;
    }
    showToast("📨 验证码已发送至你的手机");
    setTimeout(() => {
      closeSelectRegisterTypePage();
      openPhoneLoginPage();
    }, 600);
  });

  // 6. 真实手机号验证登录页与仿真数字实体键盘 (画板14)
  const phoneLoginPage = document.getElementById("phoneLoginPage");
  window.openPhoneLoginPage = () => phoneLoginPage?.classList.add("active");
  window.closePhoneLoginPage = () => phoneLoginPage?.classList.remove("active");

  document.getElementById("closePhoneLoginBtn")?.addEventListener("click", closePhoneLoginPage);
  
  // 绑定iOS 9宫格键盘
  document.querySelectorAll(".ios-kb-key").forEach(key => {
    key.addEventListener("click", () => {
      const digit = key.dataset.digit;
      if (!digit) return;
      const numEl = document.getElementById("board14TypedNumber");
      if (!numEl) return;
      let raw = numEl.textContent.replace(/\s+/g, '');
      if (digit === "backspace") {
        raw = raw.slice(0, -1);
      } else if (raw.length < 11) {
        raw += digit;
      }
      let formatted = "";
      for (let i = 0; i < raw.length; i++) {
        if (i === 3 || i === 7) formatted += " ";
        formatted += raw[i];
      }
      numEl.textContent = formatted || " ";
    });
  });

  // 7. 相机拍摄录制模态框 (截图 114453)
  const cameraModal = document.getElementById("cameraRecordingModal");
  window.openCameraModal = () => {
    cameraModal?.classList.add("open");
  };
  window.closeCameraModal = () => {
    cameraModal?.classList.remove("open");
  };

  document.getElementById("closeCameraBtn")?.addEventListener("click", closeCameraModal);
  
  // 相机顶部音乐选择
  document.getElementById("cameraTopMusic")?.addEventListener("click", () => {
    showToast("🎵 正在打开音乐库：听抖音热歌榜、原声流行推荐");
  });

  // 相机右侧 8 项工具
  const toolTips = {
    cameraToolFlip: "🔄 已切换前后置摄像头",
    cameraToolSpeed: "⚡ 拍摄快慢速调节：0.5x / 1x / 2x",
    cameraToolBeauty: "✨ 美颜滤镜已开启：磨皮70% 大眼40%",
    cameraToolFilter: "🎨 滤镜调色：青橙 / 复古胶片 / 暮光",
    cameraToolTimer: "⏱️ 倒计时拍摄已设为 3 秒",
    cameraToolFlash: "💡 补光灯已开启",
    cameraToolWide: "📐 超广角镜头已启动",
    cameraToolMore: "⚙️ 更多拍摄辅助设置：防抖、网格参考线"
  };
  for (const [id, tip] of Object.entries(toolTips)) {
    document.getElementById(id)?.addEventListener("click", () => showToast(tip));
  }

  // 切换拍摄模式 (分段拍 / 照片 / 视频)
  document.querySelectorAll("#cameraCaptureModes .capture-mode-item").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#cameraCaptureModes .capture-mode-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      const mode = item.dataset.mode;
      showToast(`已切换至拍摄模式：${item.textContent}`);
      const shutterBtn = document.getElementById("cameraShutterBtn");
      if (shutterBtn) {
        shutterBtn.className = `camera-shutter-btn mode-${mode}`;
      }
    });
  });

  // 快门拍摄/录制按钮
  let isRecording = false;
  document.getElementById("cameraShutterBtn")?.addEventListener("click", () => {
    const activeMode = document.querySelector("#cameraCaptureModes .capture-mode-item.active")?.dataset.mode || "photo";
    if (activeMode === "photo") {
      // 拍照快门
      showToast("📸 咔嚓！照片已生成，正在进入作品编辑预览...");
      setTimeout(() => {
        closeCameraModal();
        showToast("✓ 照片已自动保存并成功发布到作品流！");
      }, 1000);
    } else {
      // 视频/分段拍
      isRecording = !isRecording;
      const shutter = document.getElementById("cameraShutterBtn");
      if (isRecording) {
        shutter?.classList.add("recording");
        showToast("🔴 正在高清录制中... 再次点击停止录制并发布");
      } else {
        shutter?.classList.remove("recording");
        showToast("🎬 录制完成！正在生成作品并推送到推荐流...");
        setTimeout(() => {
          closeCameraModal();
          showToast("✓ 视频作品已成功发布！");
        }, 1200);
      }
    }
  });

  // 特效道具与相册导入
  document.getElementById("cameraEffectBtn")?.addEventListener("click", () => {
    showToast("🎭 正在加载热门 AI 变脸与复古画风道具");
  });
  document.getElementById("cameraAlbumBtn")?.addEventListener("click", () => {
    showToast("🖼️ 正在打开本地相册，支持选取照片与视频一键导入");
  });

  // 8. 移动端全屏搜索与双列瀑布流抽屉 (截图 114504, 114534, 1:1 对齐 pen 画板 16 与 17)
  const searchDrawer = document.getElementById("mobileSearchResultsDrawer");
  const searchHomeView = document.getElementById("searchHomeView");
  const searchResultsView = document.getElementById("searchResultsView");
  const searchInput = document.getElementById("searchResultsInput");

  window.openMobileSearchResultsDrawer = (keyword = "") => {
    searchDrawer?.classList.add("open");
    if (searchInput) {
      searchInput.value = keyword;
    }
    if (keyword) {
      // Screen 17: 搜索双列瀑布流与 AI 追问
      if (searchHomeView) searchHomeView.style.display = "none";
      if (searchResultsView) searchResultsView.style.display = "block";
    } else {
      // Screen 16: 搜索中心主页与热榜
      if (searchHomeView) searchHomeView.style.display = "block";
      if (searchResultsView) searchResultsView.style.display = "none";
    }
  };
  window.closeMobileSearchResultsDrawer = () => {
    searchDrawer?.classList.remove("open");
  };

  document.getElementById("closeSearchResultsBtn")?.addEventListener("click", closeMobileSearchResultsDrawer);
  
  // 搜索框回车与点击
  document.getElementById("mobileDrawerSearchInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = e.target.value.trim();
      if (q) {
        renderSearchWaterfall(q);
        showToast(`🔍 正在为你全网检索「${q}」最新内容...`);
      }
    }
  });

  // 搜索热榜词与历史标签点击
  document.querySelectorAll(".search-history-chip, .search-hot-row").forEach(el => {
    el.addEventListener("click", () => {
      const word = el.dataset.keyword || el.querySelector(".hot-row-title")?.textContent || el.textContent;
      const cleanWord = word.trim().replace(/^[\d\s]+/, '');
      const input = document.getElementById("mobileDrawerSearchInput");
      if (input) input.value = cleanWord;
      renderSearchWaterfall(cleanWord);
      showToast(`🔍 已搜索：「${cleanWord}」`);
    });
  });

  // AI 追问交互 (截图 114534 标志性设计)
  document.getElementById("btnAiFollowupSend")?.addEventListener("click", () => {
    const input = document.getElementById("aiFollowupInput");
    const query = input?.value.trim();
    if (!query) {
      showToast("请输入你想向 AI 追问的内容");
      return;
    }
    showToast(`🤖 AI 正在深入思考追问：「${query}」...`);
    setTimeout(() => {
      showToast(`💡 AI 解答：针对「${query}」，建议结合齿轮转矩与限滑差速器原理进行理解！`);
      if (input) input.value = "";
    }, 1200);
  });

  // 9. 真实评论区底部工具栏 (截图 1:1 还原: 图片、@、表情)
  document.getElementById("btnAttachCommentImg")?.addEventListener("click", () => {
    currentPendingAttachImg = "./image-design/comment_drawer_screenshot.jpg";
    const preview = document.getElementById("commentAttachPreview");
    const previewImg = document.getElementById("commentPreviewImg");
    if (preview && previewImg) {
      previewImg.src = currentPendingAttachImg;
      preview.style.display = "flex";
      showToast("🖼️ 已选取对局阵容实战截图，附图将在评论中一并展示！");
    }
  });

  document.getElementById("btnRemoveAttachImg")?.addEventListener("click", () => {
    clearAttachPreview();
    showToast("已移除附图");
  });

  document.getElementById("btnAtFriendInComment")?.addEventListener("click", () => {
    const input = document.getElementById("newCommentInput");
    if (input) {
      input.value += "@满月刘海. ";
      input.focus();
    }
  });

  document.getElementById("btnCommentEmoji")?.addEventListener("click", () => {
    const input = document.getElementById("newCommentInput");
    const emojis = ["😂", "👍", "🔥", "❤️", "🥺", "✨"];
    const picked = emojis[Math.floor(Math.random() * emojis.length)];
    if (input) {
      input.value += picked;
      input.focus();
    }
  });

  document.getElementById("sendCommentBtn")?.addEventListener("click", handleAddComment);
  document.getElementById("newCommentInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleAddComment();
  });
  document.getElementById("closeCommentsDrawerBtn")?.addEventListener("click", closeCommentsDrawer);
}

/**
 * 渲染搜索结果双列瀑布流 (截图 114534: 双列视频卡片、带作者、赞数与相关性)
 */
function renderSearchWaterfall(keyword) {
  const waterfall = document.getElementById("searchWaterfallGrid");
  if (!waterfall) return;

  const mockCards = [
    {
      title: `${keyword}工作原理解析：机械师3D动画演示带你彻底看懂！`,
      author: "机械大玩家",
      avatar: "./image-design/微信图片_20261018114509.jpg",
      likes: "12.8w",
      cover: "./image-design/微信图片_20261018114534.jpg",
      tag: "精选解析"
    },
    {
      title: `为什么转弯时两边车轮转速不一样？${keyword}的作用太绝了`,
      author: "汽车知识局",
      avatar: "./image-design/微信图片_20261018114507.jpg",
      likes: "8.4w",
      cover: "./image-design/微信图片_20261018114504.jpg",
      tag: "热搜第一"
    },
    {
      title: `两分钟搞懂托森、开放式与自锁式${keyword}的区别`,
      author: "硬核工科生",
      avatar: "./image-design/微信图片_20261018114457.jpg",
      likes: "5.1w",
      cover: "./image-design/微信图片_20261018114509.jpg",
      tag: "科普"
    },
    {
      title: `${keyword}实拆体验：纯机械构造的精妙之美`,
      author: "汽修老李",
      avatar: "./image-design/微信图片_20261018114455.jpg",
      likes: "3.2w",
      cover: "./image-design/微信图片_20261018114505.jpg",
      tag: "实拍"
    }
  ];

  waterfall.innerHTML = mockCards.map(c => `
    <div class="search-waterfall-card">
      <div class="wf-cover-wrap">
        <img src="${c.cover}" class="wf-cover-img" alt="${c.title}">
        <span class="wf-tag-pill">${c.tag}</span>
        <span class="wf-likes">❤️ ${c.likes}</span>
      </div>
      <div class="wf-info-wrap">
        <div class="wf-title">${c.title}</div>
        <div class="wf-author-row">
          <img src="${c.avatar}" class="wf-author-avatar">
          <span class="wf-author-name">${c.author}</span>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".search-waterfall-card").forEach(card => {
    card.addEventListener("click", () => {
      showToast("🎬 正在全屏播放搜索精选视频");
      closeMobileSearchResultsDrawer();
    });
  });
}

// ===================================================================
// 18 屏高保真原型全景导航与快速路由切换系统
// ===================================================================
function initShowcaseDrawer() {
  const btnOpenShowcase = document.getElementById("btnOpenShowcase");
  const showcaseDrawer = document.getElementById("showcaseDrawer");
  const showcaseBackdrop = document.getElementById("showcaseBackdrop");
  const closeShowcaseBtn = document.getElementById("closeShowcaseBtn");

  const openDrawer = () => showcaseDrawer?.classList.add("open");
  const closeDrawer = () => showcaseDrawer?.classList.remove("open");

  btnOpenShowcase?.addEventListener("click", openDrawer);
  showcaseBackdrop?.addEventListener("click", closeDrawer);
  closeShowcaseBtn?.addEventListener("click", closeDrawer);

  // 绑定所有卡片的快速跳转
  document.querySelectorAll(".showcase-card").forEach(card => {
    card.addEventListener("click", () => {
      const screen = card.dataset.screen;
      closeDrawer();
      navigateToScreen(screen);
    });
  });
}

function navigateToScreen(screen) {
  document.body.classList.add("mobile-mode");

  const screenMap = {
    "1": "feed-video",
    "2": "feed-album",
    "3": "feed-live-card",
    "4": "live-room",
    "5": "comment-drawer",
    "6": "friends-page",
    "7": "messages-page",
    "8": "profile-page",
    "9": "profile-sidebar",
    "10": "standalone-settings",
    "11": "switch-account",
    "12": "create-account",
    "13": "register-mode",
    "14": "keyboard-login",
    "15": "camera-studio",
    "16": "search-home",
    "17": "search-waterfall"
  };

  const targetScreen = screenMap[screen] || screen;

  switch(targetScreen) {
    case "feed-video":
      currentNavTab = 'home';
      currentHomeTab = 'recommend';
      currentIndex = 0;
      renderCurrentView();
      showToast("📱 已切换至「01. 推荐流短视频」");
      break;

    case "feed-album":
      currentNavTab = 'home';
      currentHomeTab = 'recommend';
      currentIndex = 2; // Cat Switch album
      renderCurrentView();
      showToast("🖼️ 已切换至「02. 图文相册轮播流」");
      break;

    case "feed-live-card":
      currentNavTab = 'home';
      currentHomeTab = 'recommend';
      currentIndex = 1; // Shao live card
      renderCurrentView();
      showToast("🔴 已切换至「03. 推荐流直播推荐卡片」");
      break;

    case "live-room":
      currentNavTab = 'home';
      currentHomeTab = 'live';
      renderCurrentView();
      showToast("📡 已进入「04. 全屏沉浸直播间 (专属纵向公屏弹幕)」");
      break;

    case "comment-drawer":
      currentNavTab = 'home';
      currentIndex = 0;
      renderCurrentView();
      setTimeout(() => {
        openCommentsDrawer(videos[0]);
        showToast("💬 已弹出「05. 真实视频评论区抽屉 (含S18攻略合集与阵容图)」");
      }, 300);
      break;

    case "friends-page":
      currentNavTab = 'friend';
      renderCurrentView();
      showToast("❄️ 已进入「06. 朋友专区沉浸流 (雪夜夜景与私信胶囊)」");
      break;

    case "messages-page":
      currentNavTab = 'message';
      renderCurrentView();
      showToast("💬 已进入「07. 消息互动中心 (彩圈发日常与通知)」");
      break;

    case "profile-page":
      currentNavTab = 'mine';
      renderCurrentView();
      showToast("👤 已进入「08. 个人主页「我」(空状态创作大卡片)」");
      break;

    case "profile-sidebar":
      currentNavTab = 'mine';
      renderCurrentView();
      setTimeout(() => {
        openProfileSidebarDrawer();
        showToast("📑 已滑出「09. 个人中心侧边抽屉」");
      }, 300);
      break;

    case "standalone-settings":
      openSettingsDrawer();
      showToast("⚙️ 已打开「10. 独立设置页 (含AI智能提问卡片)」");
      break;

    case "switch-account":
      window.openSwitchAccountPage?.();
      showToast("👥 已进入「11. 切换账号页」");
      break;

    case "create-account":
      window.openCreateAccountSheet?.();
      showToast("📋 已唤起「12. 创建新账号半屏浮层」");
      break;

    case "register-mode":
      window.openSelectRegisterTypePage?.();
      showToast("📱 已打开「13. 选择注册方式」");
      break;

    case "keyboard-login":
      window.openPhoneLoginPage?.();
      showToast("⌨️ 已调出「14. 手机号与iOS 9宫格实体数字软键盘」");
      break;

    case "camera-studio":
      openCameraModal();
      showToast("📷 已打开「15. 相机拍摄工作台 (8项工具与快门)」");
      break;

    case "search-home":
      openMobileSearchResultsDrawer("");
      showToast("🔍 已打开「16. 搜索中心与实时热点榜」");
      break;

    case "search-waterfall":
      openMobileSearchResultsDrawer("claude动画");
      showToast("✨ 已进入「17. 双列瀑布流与AI深度提炼追问」");
      break;

    case "design-system":
      openArchPlanModal();
      showToast("📐 已展示「18. 全局复用设计系统规范」");
      break;

    default:
      renderCurrentView();
  }
}

window.navigateToScreen = navigateToScreen;

// App Initialization
async function initApp() {
  document.body.classList.add("mobile-mode");
  renderHotRankList();
  setupEventListeners();
  initShowcaseDrawer();

  const urlParams = new URLSearchParams(window.location.search);
  const screenParam = urlParams.get('screen');
  if (screenParam) {
    navigateToScreen(screenParam);
  } else {
    renderVideo(currentIndex);
  }
  console.log("Douyin Web & Mobile Simulation App initialized successfully.");
}

// Run on DOM Ready
document.addEventListener("DOMContentLoaded", initApp);


