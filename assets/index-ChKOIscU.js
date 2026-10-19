(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerPolicy&&(l.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?l.credentials="include":c.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(c){if(c.ep)return;c.ep=!0;const l=a(c);fetch(c.href,l)}})();const le=[{id:1,type:"video",author:{id:"u_ai_qian",name:"在公司楼下捡钱",handle:"@在公司楼下捡钱",avatar:"./image-design/微信图片_20261018114509.jpg",verified:!0,bio:"探索AI与语言进化的前沿实验 | 科技独立创作者",followers:"89.2w",following:12,totalLikes:"340w"},caption:"我让两个AI互相问了1000个问题，它们进化出了自己的语言 #热点 我让两个AI互相交流，探讨人类未知的语言模型边界...",tags:["#热点","#AI进化","#语言模型","#科技探索"],chapter:"三 章节要点 · 下一章",statement:"📢 作者声明: 内容由AI生成 >",relatedSearch:"🔍 相关搜索 · claude动画 >",music:"听抖音 · 原声音乐",videoUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",coverUrl:"./image-design/微信图片_20261018114509.jpg",likes:219e3,commentsCount:4592,collectedCount:32e3,shares:78e3,isLiked:!1,isCollected:!1,isFollowed:!1,danmakuList:["太有意思了","这个视频也是ai跑出来的吗","八刷打卡","小克劳德？","token消灭机","引言 | ... | 理解的原因 | 新会话","语言进化不可阻挡","AI真的会自己创造语法！"],comments:[{id:101,user:"科技前沿控",avatar:"./image-design/微信图片_20261018114455.jpg",text:"这也太硬核了，两个大模型自己生成了全新符号编码！",time:"2小时前",likes:3420,isLiked:!1},{id:102,user:"满月刘海",avatar:"./image-design/微信图片_20261018114457.jpg",text:"八刷打卡，真的很震撼",time:"3小时前",likes:1890,isLiked:!1},{id:103,user:"极客小林",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",text:"已三连！背景声效也特别沉浸",time:"5小时前",likes:890,isLiked:!1}]},{id:2,type:"live",isLive:!0,author:{id:"u_shao",name:"邵艾伦日常（薄肌版）",handle:"@邵艾伦日常",avatar:"./image-design/微信图片_20261018114507.jpg",verified:!0,bio:"美式英语发音与日常分享 | 欢迎来到直播间交流！",followers:"52.3w",following:88,totalLikes:"430w"},caption:"黄毛薄肌版",liveChatTip:"280+人在聊 | 美式英语发音正确读法讲解",tags:["#英语学习","#日常直播","#美式发音"],music:"邵艾伦原声直播间音频",videoUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",coverUrl:"./image-design/微信图片_20261018114507.jpg",likes:18600,commentsCount:1240,shares:890,isLiked:!1,isCollected:!1,isFollowed:!1,danmakuList:["老师发音太纯正了","主播今天什么时候下播呀","跟着读了一遍，舌位确实对了","直播间氛围好好！"],comments:[{id:201,user:"英语爱好者",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",text:"每天都来蹲发音讲解，进步很大！",time:"1小时前",likes:580,isLiked:!1}]},{id:3,type:"album",isImageAlbum:!0,albumCount:4,author:{id:"u_cat",name:"猫猫.",handle:"@猫猫.",avatar:"./image-design/微信图片_20261018114505.jpg",verified:!1,bio:"记录萌宠与主机游戏的惬意日常 🐱🎮",followers:"1.2w",following:15,totalLikes:"18w"},caption:"幸福有很多种 有你在就是一种 #switch #真神时刻 展开",tags:["#switch","#真神时刻","#猫猫日常"],music:"拍同款 · 猫猫原声",videoUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",coverUrl:"./image-design/微信图片_20261018114505.jpg",likes:23,commentsCount:5,collectedCount:1,shares:4,isLiked:!1,isCollected:!1,isFollowed:!1,danmakuList:["小猫咪太治愈了","这配色真好看","同款Switch太赞了"],comments:[{id:301,user:"铲屎官阿杰",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",text:"这也太可爱了吧，求同款壁纸！",time:"30分钟前",likes:12,isLiked:!1}]},{id:4,type:"video",author:{id:"u_coding",name:"全栈架构小哥",handle:"@tech_architect",avatar:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",verified:!0,bio:"10年分布式架构专家 | 拆解千万级高并发短视频架构 | 带你搞定算法与工程",followers:"65.4w",following:42,totalLikes:"430w"},caption:"今天带大家深度拆解抖音后端高并发推荐架构！双塔模型、短视频分发CDN、千万级长连接如何设计？点左下角方案查看架构全貌！🔥💻",tags:["#技术分享","#系统架构","#高并发","#抖音开发"],music:"Cyberpunk Synthwave - Code Runner",videoUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",coverUrl:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",likes:98120,commentsCount:4620,collectedCount:15400,shares:18400,isLiked:!1,isCollected:!0,isFollowed:!1,danmakuList:["干货满满！","微服务高并发拆解到位","已收藏复习"],comments:[{id:401,user:"Gopher小陈",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",text:"太硬核了！正好在准备微服务和高并发面试，收藏了！",time:"10分钟前",likes:312,isLiked:!1},{id:402,user:"前端艺术家",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",text:"这个Web版抖音的动效细节好逼真，双击点赞和唱片旋转爱了！",time:"1小时前",likes:185,isLiked:!0}]}],is=[{rank:1,title:"抖音千万级高并发架构全景规划",heat:"1280.5w"},{rank:2,title:"生成式AI与短视频创作变革",heat:"960.2w"},{rank:3,title:"春季户外露营治愈系大片",heat:"720.8w"},{rank:4,title:"超跑引擎声浪挑战赛",heat:"580.1w"},{rank:5,title:"Web前端工程化巅峰体验",heat:"420.3w"}];let b={userId:"u_rabbit_rich",name:"经验很丰富",uniqueId:"341103506",avatar:"./image-design/微信图片_20261018114451.jpg",stats:{likes:"0",following:"30",followers:"4",friends:"2"},ip:"湖北",bio:"点击添加介绍，让大家更了解你",phone:"138****8888",isLoggedIn:!0},C=[...le],E=0,h="home",k="recommend",oe=!1;const ve=document.getElementById("feedStage"),Je=document.getElementById("prevVideoBtn"),Ze=document.getElementById("nextVideoBtn"),et=document.getElementById("hotRankList"),Ye=document.getElementById("commentsDrawer"),tt=document.getElementById("closeCommentsDrawerBtn"),os=document.getElementById("drawerCommentsCount"),ue=document.getElementById("commentsList"),j=document.getElementById("newCommentInput"),st=document.getElementById("sendCommentBtn"),zt=document.getElementById("publishModal"),at=document.getElementById("openPublishModalBtn"),nt=document.getElementById("closePublishModalBtn"),it=document.getElementById("cancelPublishBtn"),ot=document.getElementById("submitPublishBtn"),me=document.getElementById("videoPresetSelector"),_e=document.getElementById("customVideoUrlInput"),gt=document.getElementById("publishCaptionInput"),cs=document.getElementById("publishMusicInput");document.getElementById("profileModal");const ct=document.getElementById("closeProfileModalBtn");document.getElementById("profileBodyContent");const dt=document.getElementById("myProfileBtn"),Ot=document.getElementById("archPlanModal"),lt=document.getElementById("openArchPlanBtn"),rt=document.getElementById("closeArchPlanModalBtn"),ds=document.getElementById("archPlanContent"),Gt=document.getElementById("shareModal"),mt=document.getElementById("closeShareModalBtn"),Re=document.getElementById("shareLinkInput"),vt=document.getElementById("copyShareLinkBtn"),D=document.getElementById("searchInput"),ce=document.getElementById("searchClearBtn"),pt=document.getElementById("searchSubmitBtn"),ze=document.getElementById("navTabs"),ut=document.getElementById("brandLogo");function s(e){const t=document.getElementById("toastContainer"),a=document.createElement("div");a.className="toast",a.textContent=e,t.appendChild(a),setTimeout(()=>{a.remove()},3e3)}function _(e){return e>=1e4?(e/1e4).toFixed(1)+"w":e.toString()}function ls(){et&&(et.innerHTML=is.map(e=>`
    <li class="hot-item" data-keyword="${e.title}">
      <span class="rank-num">${e.rank}</span>
      <span class="tag-word">${e.title}</span>
      <span class="hot-heat">${e.heat}</span>
    </li>
  `).join(""),et.querySelectorAll(".hot-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.keyword;D&&(D.value=t,ce&&(ce.style.display="block"),je(t))})}))}function pe(){return`
    <div class="mobile-status-bar">
      <span class="status-time">11:45</span>
      <div class="mobile-dynamic-island">
        <div class="island-camera-lens"></div>
        <div class="island-sensor"></div>
      </div>
      <span class="status-sim-5g">5G  100%</span>
    </div>
  `}function Lt(){return`
    <div class="mobile-top-tabs">
      <span class="m-tab-drawer-icon" id="mTabDrawerBtn" title="打开侧边抽屉">☰</span>
      <div class="m-tabs-center">
        <div class="m-top-tab-wrap ${k==="follow"?"active":""}" data-tab="follow">
          <span class="m-top-tab-text">关注</span>
          ${k==="follow"?'<span class="tab-yellow-indicator"></span>':""}
        </div>
        <div class="m-top-tab-wrap ${k==="mall"?"active":""}" data-tab="mall">
          <span class="m-top-tab-text">商城</span>
          ${k==="mall"?'<span class="tab-yellow-indicator"></span>':""}
        </div>
        <div class="m-top-tab-wrap ${k==="recommend"?"active":""}" data-tab="recommend">
          <span class="m-top-tab-text">推荐</span>
          ${k==="recommend"?'<span class="tab-yellow-indicator"></span>':""}
        </div>
      </div>
      <span class="m-tab-search-icon" id="mTabSearch" title="搜索">🔍</span>
    </div>
  `}function kt(){var e,t;(e=document.getElementById("mTabDrawerBtn"))==null||e.addEventListener("click",a=>{a.stopPropagation(),openProfileSidebarDrawer()}),(t=document.getElementById("mTabSearch"))==null||t.addEventListener("click",a=>{a.stopPropagation(),openMobileSearchResultsDrawer("")}),document.querySelectorAll(".m-top-tab-wrap").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();const c=a.dataset.tab;c&&(k=c,h="home",g())})})}function Le(e){return`
    <div class="mobile-bottom-nav" id="mobileBottomNav">
      <div class="m-nav-item ${e==="home"?"active":""}" id="mNavHomeBtn">
        <span class="nav-label">首页</span>
        ${e==="home"?'<span class="home-active-bar"></span>':'<span class="home-active-bar placeholder"></span>'}
      </div>
      <div class="m-nav-item ${e==="friend"?"active":""}" id="mNavFriendBtn">
        <span class="nav-label">朋友</span>
        <span class="home-active-bar placeholder"></span>
      </div>
      <div class="m-nav-post-btn" id="mNavPostBtn" title="拍摄发布">
        <div class="douyin-post-pill">
          <span class="post-plus-symbol">+</span>
        </div>
      </div>
      <div class="m-nav-item ${e==="message"?"active":""}" id="mNavMsgBtn">
        <span class="nav-label">消息</span>
        <span class="msg-dot-badge"></span>
        <span class="home-active-bar placeholder"></span>
      </div>
      <div class="m-nav-item ${e==="mine"?"active":""}" id="mNavMineBtn">
        <span class="nav-label">我</span>
        <span class="home-active-bar placeholder"></span>
      </div>
    </div>
  `}function ke(){const e=document.getElementById("mNavHomeBtn"),t=document.getElementById("mNavFriendBtn"),a=document.getElementById("mNavPostBtn"),i=document.getElementById("mNavMsgBtn"),c=document.getElementById("mNavMineBtn");e==null||e.addEventListener("click",l=>{l.stopPropagation(),h="home",g()}),t==null||t.addEventListener("click",l=>{l.stopPropagation(),h="friend",s("👥 已进入「朋友动态」独立专区"),g()}),a==null||a.addEventListener("click",l=>{l.stopPropagation(),be()}),i==null||i.addEventListener("click",l=>{l.stopPropagation(),h="message",s("💬 已进入「互动消息中心」独立页面"),g()}),c==null||c.addEventListener("click",l=>{l.stopPropagation(),h="mine",s("👤 已进入「个人主页 (我)」独立页面"),g()})}function H(e){E=e,g()}function g(){h==="friend"?vs():h==="message"?ps():h==="mine"?us():k==="follow"?gs():k==="mall"?hs():k==="live"?fs():rs(E)}function rs(e){const t=C[e]||C[0],a=t.type==="live"||t.isLive,i=t.type==="album"||t.isImageAlbum;ve.innerHTML=`
    <div class="video-card ${i?"album-card":""}" id="videoCard">
      <!-- 1. 顶部状态栏 (pen y=0, h=44) -->
      ${pe()}

      <!-- 2. 顶部导航栏 (永久固定恒定: ☰ | 关注 | 商城 | 推荐 | 🔍) -->
      ${Lt()}

      <!-- 3. 图文模式指示器 (pen 02 页面: pos x=330, y=60) -->
      ${i?`
        <div class="album-counter-badge">1/${t.albumCount||4}</div>
      `:""}

      <!-- LIVE 动态标识 (pen 03 页面: pos x=16, y=56) -->
      ${a?`
        <div class="feed-live-top-badge">
          <span class="live-pulse-dot"></span>
          <span>LIVE 直播中</span>
        </div>
      `:""}

      <!-- 4. 视频/图文媒体画面 (裁剪干净，彻底消除双重原图文字重叠) -->
      <div class="video-media-viewport ${i?"album-mode":""} ${a?"live-card-mode":""}">
        ${i?`
          <img src="${t.coverUrl}" class="album-media-img" alt="album-cover">
        `:`
          <img src="${t.coverUrl}" class="video-bg-media" alt="video-cover">
          <video
            id="mainVideoPlayer"
            class="video-element"
            src="${t.videoUrl}"
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
      <div class="danmaku-container ${oe&&!a?"show":""}" id="danmakuContainer">
        <div class="danmaku-track track-1">
          <div class="danmaku-pill">${i?"小猫咪太治愈了！":"太有意思了！两个模型开始自创代码"}</div>
        </div>
        <div class="danmaku-track track-2">
          <div class="danmaku-pill">${i?"同款Switch手柄真好看":"八刷打卡！神仙选题"}</div>
        </div>
      </div>

      <!-- 6. 居中「📱 全屏观看」悬浮胶囊 (仅普通短视频画板 01 展示) -->
      ${!i&&!a?`
        <div class="center-fullscreen-btn" id="btnCenterFullScreen" title="进入全屏沉浸">
          <span class="fs-icon">📱</span>
          <span>全屏观看</span>
        </div>
      `:""}

      <!-- 直播推荐流导流大浮层 (pen 画板 03: pos x=45, y=420, w=300) -->
      ${a?`
        <div class="feed-live-guide-card" id="btnEnterLiveRoomCard">
          <div class="guide-card-header">
            <span class="guide-live-wave">ı,ı,ı</span>
            <span class="guide-chat-info">${t.liveChatTip||"280+人在聊 | 美式英语发音教学"}</span>
          </div>
          <div class="guide-enter-btn-wrap">
            <button class="btn-direct-enter-live">🔴 点击进入直播间 &gt;</button>
          </div>
        </div>
      `:""}

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
      <div class="video-info-area ${i?"album-info-style":""}">
        ${!i&&!a?`
          <!-- 章节胶囊 (画板 01 专属) -->
          <div class="chapter-badge-pill">
            <span class="chapter-icon">☰</span>
            <span>三 章节要点 · 下一章 &gt;</span>
          </div>

          <!-- 创作者AI声明 (画板 01 专属) -->
          <div class="author-statement-row" id="authorStatementRow">
            <span>📢 作者声明: 内容由AI生成 &gt;</span>
          </div>
        `:""}

        <!-- 作者昵称 -->
        <div class="author-row">
          <span class="author-nickname" id="creatorNickBtn">@${t.author.name}</span>
          ${t.author.verified?'<span class="verified-badge" title="平台认证创作者">✓</span>':""}
          ${a?'<span class="live-status-tag">直播中</span>':""}
        </div>

        <!-- 标题与展开 -->
        <div class="video-caption">
          <div class="video-caption-text collapsed" id="videoCaptionText">
            ${t.caption}
          </div>
          <div class="caption-expand-row">
            ${t.tags.map(c=>`<span class="hashtag">${c}</span>`).join(" ")}
            <span class="caption-expand-toggle" id="captionExpandToggleBtn">展开 ∨</span>
          </div>
        </div>

        ${!i&&!a?`
          <!-- 底部相关搜索胶囊 (画板 01 专属) -->
          <div class="related-search-capsule" id="videoRelatedSearchBtn" title="点击立即搜索">
            <span>🔍 相关搜索 · claude动画 &gt;</span>
          </div>
        `:""}

        <!-- 音乐滚动条 -->
        <div class="music-roll-row">
          <span>🎵 ${t.music||"听抖音 · 原声音乐"}</span>
        </div>
      </div>

      <!-- 8. 弹幕开关圆形按钮 (短视频与图文相册流专属, pen 原型 x=290, y=720) -->
      ${a?"":`
        <div class="danmaku-toggle-btn ${oe?"active":""}" id="danmakuToggleBtn" title="开启/关闭弹幕">
          <span>弹</span>
        </div>
      `}

      <!-- 9. 右侧操作栏 (pen x=326, y=350, w=52 严密中轴对齐) -->
      <div class="video-actions-bar">
        <!-- 头像与关注加号 -->
        <div class="action-avatar-wrap" id="actionAvatarWrap" title="查看主页">
          <img src="${t.author.avatar}" alt="${t.author.name}" class="author-avatar-img">
          <div class="follow-plus-btn ${t.isFollowed?"followed":""}" id="followBtn">
            ${t.isFollowed?"✓":"+"}
          </div>
        </div>

        <!-- 点赞 -->
        <div class="action-item ${t.isLiked?"liked":""}" id="actionLikeBtn" title="点赞">
          <div class="action-icon-circle">
            <svg viewBox="0 0 24 24" width="34" height="34" fill="${t.isLiked?"#FE2C55":"white"}">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span class="action-count" id="actionLikeCount">${_(t.likes)}</span>
        </div>

        <!-- 评论 -->
        <div class="action-item" id="actionCommentBtn" title="评论">
          <div class="action-icon-circle">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          </div>
          <span class="action-count">${_(t.commentsCount||t.comments.length)}</span>
        </div>

        <!-- 收藏 -->
        <div class="action-item ${t.isCollected?"collected":""}" id="actionCollectBtn" title="收藏">
          <div class="action-icon-circle">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="${t.isCollected?"#FACE15":"white"}">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <span class="action-count" id="actionCollectCount">${_(t.collectedCount||32e3)}</span>
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
          <span class="action-count">${_(t.shares||78e3)}</span>
        </div>

        <!-- 黑胶唱片 -->
        <div class="music-disc-wrap" id="musicDisc" title="查看音乐原声">
          <div class="disc-outer-black">
            <img src="${t.author.avatar}" alt="disc" class="disc-cover">
          </div>
        </div>
      </div>

      <!-- 10. 极细白色进度条 (pen 底边紧贴底栏) -->
      <div class="video-progress-bar-container" id="videoProgressBar">
        <div class="video-progress-filled" id="videoProgressFilled"></div>
      </div>

      <!-- 11. 底部导航栏 (pen x=0, y=760, w=390, h=84) -->
      ${Le("home")}
    </div>
  `,ms(t),ke()}function ms(e){var U,W,V,Y,K,X,Q,J,Z,ee,te,se,ae,ne;const t=document.getElementById("mainVideoPlayer");document.getElementById("playPauseIndicator");const a=document.getElementById("videoCard"),i=document.getElementById("videoProgressFilled"),c=document.getElementById("videoProgressBar"),l=document.getElementById("musicDisc"),d=document.getElementById("danmakuContainer");t==null||t.play().catch(()=>{t&&(t.muted=!0),t==null||t.play().catch(()=>{})}),t==null||t.addEventListener("timeupdate",()=>{if(t.duration){const m=t.currentTime/t.duration*100;i&&(i.style.width=`${m}%`)}}),c==null||c.addEventListener("click",m=>{m.stopPropagation();const P=c.getBoundingClientRect(),re=(m.clientX-P.left)/P.width;t!=null&&t.duration&&(t.currentTime=re*t.duration)}),(U=document.getElementById("danmakuToggleBtn"))==null||U.addEventListener("click",m=>{var P;m.stopPropagation(),oe=!oe,(P=document.getElementById("danmakuToggleBtn"))==null||P.classList.toggle("active",oe),d==null||d.classList.toggle("show",oe),d==null||d.classList.toggle("hidden",!oe),s(oe?"💬 实时弹幕已开启":"🔇 弹幕已关闭")}),(W=document.getElementById("btnCenterFullScreen"))==null||W.addEventListener("click",m=>{m.stopPropagation(),a.classList.toggle("clear-screen"),s("📱 已切换全屏沉浸模式，轻触屏幕任意位置退出")});const o=document.getElementById("captionExpandToggleBtn"),p=document.getElementById("videoCaptionText");o==null||o.addEventListener("click",m=>{m.stopPropagation();const P=p==null?void 0:p.classList.toggle("collapsed");o.textContent=P?"展开 ∨":"收起 ∧"});const u=m=>{m.stopPropagation(),k="live",g(),s("🔴 已进入「邵艾伦日常」直播间，左下角已开启纵向滚动互动弹幕！")};(V=document.getElementById("btnEnterLiveRoom"))==null||V.addEventListener("click",u),(Y=document.getElementById("btnEnterLiveRoomCard"))==null||Y.addEventListener("click",u),(K=document.getElementById("videoRelatedSearchBtn"))==null||K.addEventListener("click",m=>{m.stopPropagation(),Ne("claude动画")}),(X=document.getElementById("mTabDrawerBtn"))==null||X.addEventListener("click",m=>{m.stopPropagation(),openProfileSidebarDrawer()}),(Q=document.getElementById("mTabSearch"))==null||Q.addEventListener("click",m=>{m.stopPropagation(),Ne("")}),(J=document.getElementById("btnEnterLiveRoom"))==null||J.addEventListener("click",m=>{m.stopPropagation(),s("🔴 正在连线进入 @邵艾伦日常 的实时美式英语发音直播间...")});let L=null,I=null,w=!1;const x=document.getElementById("speedBadge"),q=m=>{if(!(m.target.closest(".video-actions-bar")||m.target.closest(".mobile-bottom-nav")||m.target.closest(".mobile-top-tabs")||m.target.closest(".video-progress-bar-container")||m.target.closest(".yellow-cart-pill")||m.target.closest(".danmaku-toggle-btn")||m.target.closest(".center-fullscreen-btn"))){if(a.classList.contains("clear-screen")){a.classList.remove("clear-screen");return}L=setTimeout(()=>{w=!0,t&&(t.playbackRate=2),x==null||x.classList.add("show")},350),I=setTimeout(()=>{A(),openActionMenu()},1200)}},A=()=>{clearTimeout(L),clearTimeout(I),w&&(w=!1,t&&(t.playbackRate=1),x==null||x.classList.remove("show"))};a==null||a.addEventListener("pointerdown",q),a==null||a.addEventListener("pointerup",A),a==null||a.addEventListener("pointercancel",A),a==null||a.addEventListener("pointerleave",A);let f=0;a==null||a.addEventListener("touchstart",m=>{f=m.changedTouches[0].clientY},{passive:!0}),a==null||a.addEventListener("touchend",m=>{const P=m.changedTouches[0].clientY,N=f-P;N>50?ge():N<-50&&Fe()},{passive:!0}),kt(),(Z=document.getElementById("musicRowBtn"))==null||Z.addEventListener("click",m=>{m.stopPropagation(),_t(e)}),l==null||l.addEventListener("click",m=>{m.stopPropagation(),_t(e)}),(ee=document.getElementById("yellowCartPill"))==null||ee.addEventListener("click",m=>{m.stopPropagation(),Qt(e)});const $=document.getElementById("actionLikeBtn"),O=document.getElementById("actionLikeCount");$==null||$.addEventListener("click",m=>{m.stopPropagation(),Es(e,$,O)});const R=document.getElementById("actionCollectBtn"),G=document.getElementById("actionCollectCount");R==null||R.addEventListener("click",m=>{m.stopPropagation(),e.isCollected=!e.isCollected,R.classList.toggle("collected",e.isCollected),G.textContent=e.isCollected?"已收藏":"收藏",s(e.isCollected?"★ 收藏成功，已加入个人主页":"已取消收藏")}),(te=document.getElementById("actionCommentBtn"))==null||te.addEventListener("click",m=>{m.stopPropagation(),wt(e)});const M=document.getElementById("followBtn");M==null||M.addEventListener("click",m=>{m.stopPropagation(),e.isFollowed=!e.isFollowed,M.classList.toggle("followed",e.isFollowed),M.innerHTML=e.isFollowed?"✓":"+",M.title=e.isFollowed?"已关注":"关注作者",s(e.isFollowed?`已关注 ${e.author.name}`:"已取消关注")}),(se=document.getElementById("actionAvatarWrap"))==null||se.addEventListener("click",m=>{m.stopPropagation(),ft(e.author)}),(ae=document.getElementById("creatorNickBtn"))==null||ae.addEventListener("click",m=>{m.stopPropagation(),ft(e.author)}),(ne=document.getElementById("actionShareBtn"))==null||ne.addEventListener("click",m=>{m.stopPropagation(),ws(e)})}function vs(){var t,a,i,c,l,d,o,p;ve.innerHTML=`
    <div class="mobile-page-view friends-immersive-view">
      ${pe()}
      
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
      ${Le("friend")}
    </div>
  `,(t=document.getElementById("btnDiscoverFriends"))==null||t.addEventListener("click",()=>{s("👥 正在从通讯录与共同好友中为你推荐新朋友...")}),(a=document.getElementById("btnFriendsSearch"))==null||a.addEventListener("click",()=>{openMobileSearchResultsDrawer("满月刘海")}),(i=document.getElementById("friendAuthorAvatar"))==null||i.addEventListener("click",()=>{s("👤 正在打开好友「满月刘海.」的主页")});let e=!1;(c=document.getElementById("friendLikeBtn"))==null||c.addEventListener("click",()=>{e=!e;const u=document.querySelector("#friendLikeBtn .friend-sidebar-icon"),L=document.querySelector("#friendLikeBtn .friend-sidebar-text");e?(u.innerHTML='<span style="color:#fe2c55;">❤️</span>',L.textContent="1.2w+",s("❤️ 已为好友动态点赞！")):(u.innerHTML="🤍",L.textContent="1.2w",s("已取消点赞"))}),(l=document.getElementById("friendCmtBtn"))==null||l.addEventListener("click",()=>{wt(currentVideo||le[0])}),(d=document.getElementById("friendCollectBtn"))==null||d.addEventListener("click",()=>{s("⭐ 已加入我的收藏列表")}),(o=document.getElementById("friendShareBtn"))==null||o.addEventListener("click",()=>{s("↗️ 正在将此动态分享给好友或转发到日常")}),(p=document.getElementById("openFriendChatInput"))==null||p.addEventListener("click",()=>{es("满月刘海.","./image-design/微信图片_20261018114457.jpg")}),document.querySelectorAll(".friend-react-pill").forEach(u=>{u.addEventListener("click",L=>{L.stopPropagation();const I=u.dataset.emoji;s(`💬 已向满月刘海发送了快捷互动表情：${I}`)})}),ke()}function ps(){var e,t,a;ve.innerHTML=`
    <div class="mobile-page-view messages-real-view">
      ${pe()}
      
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

      ${Le("message")}
    </div>
  `,document.querySelectorAll(".real-msg-row").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.name,l=i.dataset.avatar;es(c,l)})}),(e=document.getElementById("msgPostDailyBtn"))==null||e.addEventListener("click",be),document.querySelectorAll(".msg-story-item[data-author]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.author;s(`🎬 正在沉浸播放「${c}」的限时日常时刻！`)})}),(t=document.getElementById("msgDressupBanner"))==null||t.addEventListener("click",()=>{s("🎨 聊天气泡装扮已开启，当前已套用「极光渐变」限定主题！")}),(a=document.getElementById("msgSearchBox"))==null||a.addEventListener("click",()=>{openMobileSearchResultsDrawer("消息")}),["msgCatLike","msgCatAt","msgCatComment","msgCatFans"].forEach(i=>{var c;(c=document.getElementById(i))==null||c.addEventListener("click",()=>{s("🔔 互动通知列表已全部标记为已读！")})}),ke()}function us(){var e,t,a,i,c,l,d,o,p,u,L,I;ve.innerHTML=`
    <div class="mobile-page-view profile-real-view">
      ${pe()}
      
      <!-- 个人主页顶部导航栏 (1:1 还原截图 114501) -->
      <div class="profile-real-topbar">
        <div class="profile-topbar-left" id="btnProfileAddFriend" title="添加朋友">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7.5" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        </div>
        <div class="profile-topbar-center" id="btnSwitchAccountDropdown">
          <span class="profile-center-title">${b.name}</span>
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
              <img src="${b.avatar}" class="profile-avatar-large-img" alt="avatar">
              <div class="profile-avatar-camera-pill">📷</div>
            </div>
            <div class="profile-buttons-group">
              <button class="profile-action-btn edit-btn" id="btnEditProfile">编辑资料</button>
              <button class="profile-action-btn add-btn" id="btnAddFriendsCard">+ 添加朋友</button>
            </div>
          </div>

          <!-- 用户名与抖音号 (1:1 还原截图 114501) -->
          <div class="profile-user-main-meta">
            <h1 class="profile-display-name">${b.name}</h1>
            <div class="profile-id-row">
              <span>抖音号：${b.uniqueId}</span>
              <button class="btn-copy-id" id="btnCopyDouyinId" title="复制抖音号">📋</button>
              <span class="profile-ip-tag">IP属地：${b.ip}</span>
            </div>
            <div class="profile-bio-text" id="btnEditBio">
              ${b.bio}
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
              <span class="stat-number">${b.stats.likes}</span>
              <span class="stat-label">获赞</span>
            </div>
            <div class="profile-stat-box">
              <span class="stat-number">${b.stats.following}</span>
              <span class="stat-label">关注</span>
            </div>
            <div class="profile-stat-box">
              <span class="stat-number">${b.stats.followers}</span>
              <span class="stat-label">粉丝</span>
            </div>
            <div class="profile-stat-box">
              <span class="stat-number">${b.stats.friends}</span>
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

      ${Le("mine")}
    </div>
  `,(e=document.getElementById("btnSwitchAccountDropdown"))==null||e.addEventListener("click",openSwitchAccountPage),(t=document.getElementById("btnOpenSidebarMenu"))==null||t.addEventListener("click",openProfileSidebarDrawer),(a=document.getElementById("btnProfileAddFriend"))==null||a.addEventListener("click",()=>{s("👥 正在从通讯录与附近为你寻找更多好友...")}),(i=document.getElementById("btnProfileSearch"))==null||i.addEventListener("click",()=>{openMobileSearchResultsDrawer("我的内容")}),(c=document.getElementById("btnCopyDouyinId"))==null||c.addEventListener("click",()=>{var w;(w=navigator.clipboard)==null||w.writeText(b.uniqueId),s(`✓ 已复制抖音号：${b.uniqueId}`)}),(l=document.getElementById("btnEditProfile"))==null||l.addEventListener("click",()=>{s("✏️ 编辑个人主页资料（支持自定义昵称、头像与背景）")}),(d=document.getElementById("btnAddFriendsCard"))==null||d.addEventListener("click",()=>{s("👥 添加朋友：支持扫一扫、面对面雷达和通讯录")}),(o=document.getElementById("btnEmptyGoPublish"))==null||o.addEventListener("click",be),(p=document.getElementById("serviceOrders"))==null||p.addEventListener("click",()=>s("🛍️ 正在打开抖音商城·我的全部订单")),(u=document.getElementById("serviceWallet"))==null||u.addEventListener("click",()=>s("💳 正在打开我的钱包·零钱与银行卡")),(L=document.getElementById("serviceHistory"))==null||L.addEventListener("click",()=>s("⏱️ 观看历史：已为你记录最近 7 天浏览足迹")),(I=document.getElementById("serviceFavorites"))==null||I.addEventListener("click",()=>s("⭐ 已打开我的全部收藏夹")),document.querySelectorAll(".profile-tab-item").forEach(w=>{w.addEventListener("click",()=>{var A;document.querySelectorAll(".profile-tab-item").forEach(f=>f.classList.remove("active")),w.classList.add("active");const x=w.dataset.tab,q=document.getElementById("profileWorksContainer");q&&(x==="works"?(q.innerHTML=`
          <div class="profile-works-empty-card">
            <div class="empty-camera-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </div>
            <h3 class="empty-title">去发布一个作品吧</h3>
            <p class="empty-subtitle">记录你的美好日常，收获第一波朋友点赞与粉丝！</p>
            <button class="btn-goto-post-work" id="btnEmptyGoPublishWorks">+ 发布作品</button>
          </div>
        `,(A=document.getElementById("btnEmptyGoPublishWorks"))==null||A.addEventListener("click",be)):(q.innerHTML=`
          <div class="profile-works-grid-content">
            ${C.map((f,$)=>`
              <div class="profile-grid-cell" data-index="${$}">
                <img src="${f.coverUrl}" class="grid-cell-img" alt="cover">
                <span class="grid-cell-likes">❤️ ${_(f.likes)}</span>
              </div>
            `).join("")}
          </div>
        `,document.querySelectorAll(".profile-grid-cell").forEach(f=>{f.addEventListener("click",()=>{const $=parseInt(f.dataset.index);h="home",k="recommend",E=$,g(),s("🎬 正在全屏高清沉浸播放")})})))})}),ke()}function gs(){const e=C.filter(a=>a.isFollowed),t=e.length>0?e:C;ve.innerHTML=`
    <div class="mobile-page-view">
      ${pe()}
      
      <!-- 统一固定恒定顶部栏 (☰ | 关注 | 商城 | 推荐 | 🔍) -->
      ${Lt()}

      <div class="mobile-page-content" style="padding-top: 92px;">
        <!-- 已关注大V横滑头像栏 -->
        <div style="font-size: 13px; font-weight: 700; color: var(--text-secondary); margin-bottom: 8px;">我的关注</div>
        <div style="display: flex; gap: 14px; overflow-x: auto; padding-bottom: 10px;">
          ${C.map((a,i)=>`
            <div style="display:flex; flex-direction:column; align-items:center; gap:4px; flex-shrink:0; cursor:pointer;" class="follow-avatar-item" data-index="${i}">
              <img src="${a.author.avatar}" style="width:52px; height:52px; border-radius:50%; border:2px solid var(--brand-pink); object-fit:cover;">
              <span style="font-size: 11px; color: var(--text-primary); max-width: 56px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${a.author.name}</span>
            </div>
          `).join("")}
        </div>

        <div style="font-size: 13px; font-weight: 700; color: var(--text-secondary); margin-top: 10px;">关注动态流</div>

        <div class="friends-dynamic-feed">
          ${t.map((a,i)=>`
            <div class="friend-post-card">
              <div class="friend-post-header">
                <div class="friend-author-info">
                  <img src="${a.author.avatar}" class="friend-avatar">
                  <div>
                    <div style="font-size: 13px; font-weight: 700;">${a.author.name} ✓</div>
                    <div class="friend-time-meta">更新了最新作品 · 点击卡片立即沉浸播放</div>
                  </div>
                </div>
              </div>

              <div style="font-size: 13px; line-height: 1.5; color: var(--text-primary);">
                ${a.caption}
              </div>

              <div class="friend-post-media follow-media-card" data-index="${i}">
                <img src="${a.coverUrl}" alt="media">
                <div class="play-badge">▶</div>
              </div>

              <div class="friend-post-actions">
                <div class="friend-act-btn"><span>❤️</span> <span>${_(a.likes)}</span></div>
                <div class="friend-act-btn"><span>💬</span> <span>${_(a.commentsCount||a.comments.length)}</span></div>
                <div class="friend-act-btn"><span>↗️</span> <span>分享</span></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      ${Le("home")}
    </div>
  `,kt(),document.querySelectorAll(".follow-media-card, .follow-avatar-item").forEach(a=>{a.addEventListener("click",()=>{const i=parseInt(a.dataset.index);k="recommend",E=i,g(),s("正在沉浸播放选中的关注作品")})}),ke()}function hs(){ve.innerHTML=`
    <div class="mobile-page-view">
      ${pe()}

      <!-- 统一固定恒定顶部栏 (☰ | 关注 | 商城 | 推荐 | 🔍) -->
      ${Lt()}

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
          ${We.map(e=>`
            <div class="mall-card mall-item-card" data-id="${e.id}">
              <img src="${e.img}" alt="${e.title}">
              <div class="mall-card-info">
                <div class="mall-card-title">${e.title}</div>
                <div class="mall-card-price">¥${e.price} <span style="font-size: 10px; color: var(--text-muted); font-weight: normal;">已抢超万件</span></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      ${Le("home")}
    </div>
  `,kt(),document.querySelectorAll(".mall-item-card").forEach(e=>{e.addEventListener("click",()=>{Qt({id:1})})}),ke()}let Oe=null;function fs(){var t,a,i,c;ve.innerHTML=`
    <div class="mobile-page-view live-stream-view">
      ${pe()}

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
  `,(t=document.getElementById("btnCloseLive"))==null||t.addEventListener("click",()=>{clearInterval(Oe),k="recommend",g()}),(a=document.getElementById("btnLiveFollow"))==null||a.addEventListener("click",()=>{s("✓ 已成功关注主播，开播自动接收强提醒！")}),(i=document.getElementById("btnLiveGift"))==null||i.addEventListener("click",()=>{s("🎁 成功为主播赠送了「超级火箭」！全场特效已触发！")}),(c=document.getElementById("btnLiveHeart"))==null||c.addEventListener("click",()=>{s("❤️ 点赞 +1，当前本场点赞已突破 500w！")});const e=[{user:"Gopher小陈",text:"老师下次讲讲 Redis 缓存击穿与穿透吗？"},{user:"超跑极速",text:"刚刚进来的朋友们记得先点点左上角关注！"},{user:"星河漫游",text:"这个直播间画质好高清啊，声音很立体！"},{user:"前端艺术家",text:"给主播双击点赞到 1000 万！"}];clearInterval(Oe),Oe=setInterval(()=>{const l=document.getElementById("liveDanmakuStream");if(!l){clearInterval(Oe);return}const d=e[Math.floor(Math.random()*e.length)],o=document.createElement("div");o.className="danmaku-item",o.innerHTML=`<span class="user-tag">${d.user}:</span>${d.text}`,l.appendChild(o),l.children.length>5&&l.removeChild(l.children[0])},2500)}function ys(e,t,a){e.paused?(e.play(),t.classList.remove("show"),a&&a.classList.remove("paused")):(e.pause(),t.classList.add("show"),a&&a.classList.add("paused"))}function Es(e,t,a){e.isLiked=!e.isLiked,e.isLiked?(e.likes+=1,t.classList.add("liked"),t.querySelector("svg").setAttribute("fill","#FE2C55"),s("❤️ 感谢点赞，已记录入推荐算法模型！")):(e.likes=Math.max(0,e.likes-1),t.classList.remove("liked"),t.querySelector("svg").setAttribute("fill","none")),a.textContent=_(e.likes)}function ge(){E<C.length-1?(E++,H(E)):(s("🎉 已经看完推荐列表啦，正在为你加载更多优质视频..."),E=0,H(E))}function Fe(){E>0?(E--,H(E)):s("已经是第一个视频了")}let Ue=null;function wt(e){Ye.classList.add("open"),Vt(e||le[0])}function Wt(){Ye.classList.remove("open")}function Vt(e){var i,c,l,d;const t=e||C[E]||le[0];t.screenshotComments||(t.screenshotComments=[{id:1001,user:"Y9",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",text:"蜘蛛带哪个神器啊？",time:"10小时前 · 上海",likes:1,isLiked:!1,isDisliked:!1,repliesCount:1,replies:[{user:"云顶攻略君",text:"首选魔蕴或者死神之刃，开局秒放技能直接融化对面后排！"}]},{id:1002,user:"苍山负雪",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",text:"开局0秒我已定阵",attachImg:"./image-design/comment_drawer_screenshot.jpg",time:"09-10 · 山东",likes:113,isLiked:!1,isDisliked:!1,repliesCount:10,replies:[{user:"棋圣本圣",text:"兄弟你这把活体锻炉神器拉满了啊，吃鸡稳了！"},{user:"苍山负雪",text:"哈哈确实，活体锻炉越打越强！"}]},{id:1003,user:"Me1ody.",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",text:"那个锁0.5攻速给逆天物理加成的神器到底给谁用最强？求解",time:"昨天 · 广东",likes:42,isLiked:!1,isDisliked:!1,repliesCount:3,replies:[]}]);const a=[...t.screenshotComments,...t.comments||[]];os.textContent=`评论 ${1090+a.length}`,ue.innerHTML=a.map(o=>`
    <div class="comment-item-real" data-id="${o.id}">
      <img src="${o.avatar}" alt="${o.user}" class="comment-real-avatar">
      <div class="comment-real-body">
        <div class="comment-real-author">${o.user}</div>
        <div class="comment-real-text">${o.text}</div>

        <!-- 真实截图标志性：评论配图展示 -->
        ${o.attachImg?`
          <div class="comment-real-img-box" data-img="${o.attachImg}">
            <img src="${o.attachImg}" class="comment-attached-thumb" alt="附图">
            <span class="img-preview-tag">🔍 查看大图</span>
          </div>
        `:""}

        <div class="comment-real-footer-row">
          <div class="comment-footer-left">
            <span class="c-time-ip">${o.time}</span>
            <span class="c-reply-btn" data-user="${o.user}">回复</span>
          </div>

          <div class="comment-footer-right">
            <div class="comment-vote-btn like-btn ${o.isLiked?"active":""}" data-id="${o.id}">
              <span class="vote-icon">${o.isLiked?"❤️":"🤍"}</span>
              <span class="vote-num">${o.likes||0}</span>
            </div>
            <div class="comment-vote-btn dislike-btn ${o.isDisliked?"active":""}" data-id="${o.id}">
              <span class="vote-icon">💔</span>
            </div>
          </div>
        </div>

        <!-- 截图 1:1 折叠回复项 -->
        ${o.repliesCount?`
          <div class="comment-expand-replies-bar" data-id="${o.id}">
            <span class="expand-line">——</span>
            <span class="expand-text">展开${o.repliesCount}条回复</span>
            <span class="expand-arrow">∨</span>
          </div>
        `:""}

        <div class="comment-subreplies-drawer" id="subReplies_${o.id}" style="display: none;">
          ${(o.replies||[]).map(p=>`
            <div class="sub-reply-card">
              <span class="sub-user">${p.user}:</span>
              <span class="sub-text">${p.text}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join(""),(i=document.getElementById("tabCommentListBtn"))==null||i.addEventListener("click",()=>{var o,p;(o=document.getElementById("tabCommentListBtn"))==null||o.classList.add("active"),(p=document.getElementById("tabCommentAiBtn"))==null||p.classList.remove("active"),document.getElementById("commentsList").style.display="block",document.getElementById("commentAiPanel").style.display="none"}),(c=document.getElementById("tabCommentAiBtn"))==null||c.addEventListener("click",()=>{var o,p;(o=document.getElementById("tabCommentAiBtn"))==null||o.classList.add("active"),(p=document.getElementById("tabCommentListBtn"))==null||p.classList.remove("active"),document.getElementById("commentsList").style.display="none",document.getElementById("commentAiPanel").style.display="block",s("🤖 AI 已完成对当前视频的深度结构化要点提炼")}),(l=document.getElementById("commentAlbumLink"))==null||l.addEventListener("click",()=>{s("🎬 正在进入「S18攻略合集」专题列表，已为你定位到下一集！")}),(d=document.getElementById("btnExpandCommentDrawer"))==null||d.addEventListener("click",()=>{Ye.classList.toggle("expanded-fullscreen"),s(Ye.classList.contains("expanded-fullscreen")?"⛶ 已展开为全屏大视窗评论":"已恢复标准半屏")}),ue.querySelectorAll(".comment-expand-replies-bar").forEach(o=>{o.addEventListener("click",()=>{const p=o.dataset.id,u=document.getElementById(`subReplies_${p}`);if(u){const L=u.style.display==="block";u.style.display=L?"none":"block",o.querySelector(".expand-text").textContent=L?"展开条回复":"收起回复",o.querySelector(".expand-arrow").textContent=L?"∨":"∧"}})}),ue.querySelectorAll(".comment-vote-btn.like-btn").forEach(o=>{o.addEventListener("click",()=>{const p=parseInt(o.dataset.id),u=a.find(L=>L.id===p);u&&(u.isLiked=!u.isLiked,u.likes+=u.isLiked?1:-1,o.classList.toggle("active",u.isLiked),o.querySelector(".vote-icon").textContent=u.isLiked?"❤️":"🤍",o.querySelector(".vote-num").textContent=u.likes,s(u.isLiked?"❤️ 已为该条评论点赞！":"已取消点赞"))})}),ue.querySelectorAll(".comment-vote-btn.dislike-btn").forEach(o=>{o.addEventListener("click",()=>{const p=parseInt(o.dataset.id),u=a.find(L=>L.id===p);u&&(u.isDisliked=!u.isDisliked,o.classList.toggle("active",u.isDisliked),s(u.isDisliked?"已标记为不感兴趣":"已撤销标记"))})}),ue.querySelectorAll(".c-reply-btn").forEach(o=>{o.addEventListener("click",()=>{const p=o.dataset.user;j.placeholder=`回复 @${p}...`,j.focus()})}),ue.querySelectorAll(".comment-real-img-box").forEach(o=>{o.addEventListener("click",()=>{s("🔍 正在高清全屏查看玩家附带的阵容大图")})})}function Ke(){const e=j.value.trim();if(!e&&!Ue){s("请输入评论内容或添加附图");return}const t=C[E]||le[0];t.screenshotComments||(t.screenshotComments=[]);const a={id:Date.now(),user:"经验很丰富 (我)",avatar:b.avatar,text:e||"分享了一张实战截图",attachImg:Ue,time:"刚刚 · 湖北",likes:0,isLiked:!1,isDisliked:!1,repliesCount:0,replies:[]};t.screenshotComments.unshift(a),j.value="",j.placeholder="留下你的友善评论吧",Yt(),Vt(t),s("✓ 评论发表成功！已遵循社区文明规范展示在顶部")}function Yt(){Ue=null;const e=document.getElementById("commentAttachPreview");e&&(e.style.display="none")}let de="video",Ft="linear-gradient(135deg, #FF416C, #FF4B2B)";function ht(){zt.classList.add("active")}function He(){zt.classList.remove("active")}function bs(){var i;const e=gt.value.trim()||"今天在抖音记录下美好的一刻！ #记录美好生活",t=cs.value.trim()||"原声 - 创作者小天创作的原声",a=e.match(/#[^\s#]+/g)||["#记录美好生活","#朋友日常"];if(de==="video"){let c="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",l="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80";const d=me==null?void 0:me.querySelector(".preset-pill.active");d&&(c=d.dataset.src,l=d.dataset.cover);const o=_e==null?void 0:_e.value.trim();o&&(c=o);const p={id:Date.now(),author:{id:b.userId,name:b.name,handle:"@creator_xiaotian",avatar:b.avatar,verified:!0,bio:"热爱代码与生活，用心记录每一个精彩瞬间。",followers:"128.5w",following:12,totalLikes:"1420w"},caption:e,tags:a,music:t,videoUrl:c,coverUrl:l,likes:1,commentsCount:0,shares:0,isLiked:!0,isCollected:!1,isFollowed:!1,comments:[]};C.unshift(p),E=0,He(),h="home",k="recommend",H(E),s("📹 视频发布成功！已置顶推荐至首页信息流")}else if(de==="image"){const c=document.querySelector("#imagePresetGrid .img-pill.active");c&&c.dataset.img,(i=document.getElementById("customImageUrlInput"))==null||i.value.trim(),He(),h="friend",g(),s("🖼️ 精美图文已发布成功！已同步呈现在朋友动态专区")}else de==="text"&&(He(),h="friend",g(),s("✍️ 纯文字心情动态发布成功！好友们已可查看互动"))}function ft(e){const t=document.getElementById("userProfileFullscreenPage");if(t){t.classList.add("open"),Ls();return}}function Kt(){var e;(e=document.getElementById("userProfileFullscreenPage"))==null||e.classList.remove("open")}let jt=!1;function Ls(){var a,i,c,l;if(jt)return;jt=!0,(a=document.getElementById("closeUserProfileBtn"))==null||a.addEventListener("click",d=>{d.stopPropagation(),Kt()});let e=!1;const t=document.getElementById("userProfileFollowBtn");t&&t.addEventListener("click",d=>{d.stopPropagation(),e=!e;const o=t.querySelector("div");e?(t.style.backgroundColor="#2f3138",o&&(o.textContent="已关注"),s("✅ 已成功关注 james_meow！")):(t.style.backgroundColor="#fe2c55",o&&(o.textContent="+ 关注"),s("已取消关注 james_meow"))}),(i=document.getElementById("copyDouyinIdBtn"))==null||i.addEventListener("click",d=>{d.stopPropagation(),s("📋 抖音号 45575225266 已复制到剪贴板！")}),(c=document.getElementById("askUpdateBtn"))==null||c.addEventListener("click",d=>{d.stopPropagation(),s("👉 已向 james_meow 催更，作者已收到你的心意！")}),(l=document.querySelector('[data-pencil-name="群聊入口卡片"]'))==null||l.addEventListener("click",d=>{d.stopPropagation(),s("💬 正在申请加入「james_meow 粉丝取图群」...")}),document.querySelectorAll('[data-pencil-name^="作品"]').forEach(d=>{d.style.cursor="pointer",d.addEventListener("click",o=>{o.stopPropagation();const p=d.getAttribute("data-pencil-name")||"作品";s(`🎬 正在加载 ${p} 沉浸播放...`)})})}function Xt(){ds.innerHTML=`
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
  `,Ot.classList.add("active")}function ks(){Ot.classList.remove("active")}function ws(e){Re.value=`${window.location.origin}/#video_${e.id}`,Gt.classList.add("active")}function Bs(){Gt.classList.remove("active")}function _t(e){const t=document.getElementById("musicDetailDrawer"),a=document.getElementById("musicHeroCover"),i=document.getElementById("musicHeroName"),c=document.getElementById("musicHeroAuthor"),l=document.getElementById("musicHeroUsage"),d=document.getElementById("musicVideosGrid");t&&(a.src=e.coverUrl||e.author.avatar,i.textContent=e.music,c.textContent=`原声作者 · ${e.author.name}`,l.textContent="🔥 超过 18.6w 人使用此原声创作",d.innerHTML=C.map((o,p)=>`
    <div class="music-video-card" data-index="${p}" title="${o.caption}">
      <img src="${o.coverUrl}" alt="Cover">
      <div class="card-likes">❤️ ${_(o.likes)}</div>
    </div>
  `).join(""),d.querySelectorAll(".music-video-card").forEach(o=>{o.addEventListener("click",()=>{const p=parseInt(o.dataset.index);yt(),E=p,H(E),s(`🎬 正在播放使用《${e.music}》的原声视频`)})}),t.classList.add("open"))}function yt(){var e;(e=document.getElementById("musicDetailDrawer"))==null||e.classList.remove("open")}const We=[{id:"p1",title:"极客赛博机械光影氛围灯 | 智能声光同频",price:99,originalPrice:"¥299",sales:"已售 3.6万件 · 99.8% 好评率",img:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"},{id:"p2",title:"1:18 顶级跑车合金收藏车模 | 原厂授权声光版",price:168,originalPrice:"¥499",sales:"已售 1.2万件 · 99.2% 好评率",img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"},{id:"p3",title:"户外冰川探索双层保温水壶 | 航天级钛合金",price:129,originalPrice:"¥259",sales:"已售 4.8万件 · 100% 好评率",img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"},{id:"p4",title:"全栈分布式高并发架构实战教程 (附源码实操)",price:69,originalPrice:"¥399",sales:"已售 8.9万件 · 99.9% 好评率",img:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"}];function Qt(e){const t=document.getElementById("productDetailDrawer");if(!t)return;const a=We[(e.id-1)%We.length]||We[0];document.getElementById("productImg").src=a.img,document.getElementById("productTitle").textContent=a.title,document.getElementById("productPrice").textContent=a.price,document.getElementById("productOriginalPrice").textContent=a.originalPrice,document.getElementById("productSales").textContent=a.sales,t.classList.add("open")}function Ht(){var e;(e=document.getElementById("productDetailDrawer"))==null||e.classList.remove("open")}function Is(){var e;(e=document.getElementById("douyinMallDrawer"))==null||e.classList.remove("open")}let Ve=!1,Et=null,he=0;function be(){const e=document.getElementById("cameraRecordingModal");e&&(e.classList.add("open"),Jt())}function ye(){const e=document.getElementById("cameraRecordingModal");e&&(e.classList.remove("open"),Jt())}function Jt(){clearInterval(Et),Ve=!1,he=0;const e=document.getElementById("recordingTimer"),t=document.getElementById("cameraShutterBtn");e==null||e.classList.remove("active"),t==null||t.classList.remove("recording"),e&&(e.textContent="00:00")}function Zt(){const e=document.getElementById("recordingTimer"),t=document.getElementById("cameraShutterBtn");Ve?(clearInterval(Et),Ve=!1,e.classList.remove("active"),t.classList.remove("recording"),s("🎬 录制完成！已载入拍摄素材，立即前往发布"),ye(),ht()):(Ve=!0,he=0,e.classList.add("active"),t.classList.add("recording"),s("🔴 正在录制短视频中... (点击快门停止并进入发布)"),Et=setInterval(()=>{he++;const a=Math.floor(he/60).toString().padStart(2,"0"),i=(he%60).toString().padStart(2,"0");e.textContent=`${a}:${i}`,he>=15&&Zt()},1e3))}function Ne(e){const t=document.getElementById("mobileSearchResultsDrawer"),a=document.getElementById("searchResultsInput"),i=document.getElementById("searchResultsList");if(!t)return;a&&(a.value=e);const c=e.toLowerCase().trim(),l=C.filter(d=>d.caption.toLowerCase().includes(c)||d.author.name.toLowerCase().includes(c)||d.tags.some(o=>o.toLowerCase().includes(c))||d.music.toLowerCase().includes(c));l.length>0?(i.innerHTML=l.map((d,o)=>`
      <div class="search-result-video-card" data-id="${d.id}">
        <img src="${d.coverUrl}" alt="cover">
        <div class="search-res-info">
          <div class="search-res-caption">${d.caption}</div>
          <div class="search-res-author">
            <img src="${d.author.avatar}" alt="avatar">
            <span>${d.author.name} · ❤️ ${_(d.likes)}</span>
          </div>
        </div>
      </div>
    `).join(""),i.querySelectorAll(".search-result-video-card").forEach(d=>{d.addEventListener("click",()=>{const o=parseInt(d.dataset.id),p=C.findIndex(u=>u.id===o);p!==-1&&(E=p,H(E),as(),s("正在播放选中的搜索视频"))})})):i.innerHTML=`
      <div style="text-align: center; color: var(--text-muted); padding: 40px 10px;">
        <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
        <p>暂无与「${e}」直接相关的视频</p>
        <p style="font-size: 12px; margin-top: 4px;">建议换个关键词试试，如“赛博”、“超跑”、“风景”、“架构”</p>
      </div>
    `,t.classList.add("open")}let F={name:"极客全栈架构师 ✓",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"};const Xe={"极客全栈架构师 ✓":[{id:1,sender:"target",text:"你好！欢迎交流短视频架构与微服务实战！🤝",time:"10:30"},{id:2,sender:"target",text:"你之前提问的关于 Kafka 分区与消费者负载均衡，我们这套方案是按用户 ID Hash 保证顺序消费的。",time:"10:31"},{id:3,sender:"me",text:"老师讲解得太透彻了！已成功解决高并发 Feed 流堆积的问题！🚀",time:"10:32"}],极速超跑集结:[{id:1,sender:"target",text:"周末天门山赛道日集结，车队还缺几台跑车，一起来玩吗？🏎️",time:"昨天"},{id:2,sender:"me",text:"可以的！我带上专业相机给大伙拍弯道声浪大片！📸",time:"昨天"}],"抖音小助手 官方":[{id:1,sender:"target",text:"恭喜！你的作品《极光赛博夜都市》已进入全站热门推荐流量池，已向 50w+ 同城观众推荐！🎉",time:"前天"}]};function es(e,t){const a=document.getElementById("chatRoomDrawer");if(!a)return;F.name=e||"极客全栈架构师 ✓",F.avatar=t||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80";const i=document.getElementById("chatTargetAvatar"),c=document.getElementById("chatTargetName");i&&(i.src=F.avatar),c&&(c.textContent=F.name),Xe[F.name]||(Xe[F.name]=[{id:Date.now(),sender:"target",text:`你好，我是${F.name}，很高兴认识你！支持发文字、表情和图片哦！✨`,time:"刚刚"}]),bt(),a.classList.add("open")}function xs(){var e;(e=document.getElementById("chatRoomDrawer"))==null||e.classList.remove("open")}function bt(){const e=document.getElementById("chatMessagesFlow");if(!e)return;const t=Xe[F.name]||[];e.innerHTML=t.map(a=>{const i=a.sender==="me";return`
      <div class="chat-bubble-row ${i?"msg-me":"msg-target"}">
        ${i?"":`<img src="${F.avatar}" class="chat-bubble-avatar">`}
        <div class="chat-bubble-content">
          ${a.img?`<img src="${a.img}" class="chat-media-img" onclick="showToast('正在查看高清大图')">`:""}
          ${a.text?`<div class="chat-text-bubble">${a.text}</div>`:""}
          <div class="chat-time-tag">${a.time}</div>
        </div>
        ${i?`<img src="${b.avatar}" class="chat-bubble-avatar">`:""}
      </div>
    `}).join(""),e.scrollTop=e.scrollHeight}function Ge(e,t=null){if(!e&&!t)return;const a=Xe[F.name]||[],i=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});a.push({id:Date.now(),sender:"me",text:e||"",img:t,time:i}),bt(),setTimeout(()=>{const c=["收到你的私信了！消息已安全加密传输 ✨","哈哈赞同！点赞了你的最新动态 👍","太棒了，期待下一次的精彩内容共创！🚀","感谢留言！已互相关注，常联系哦！🤝"],l=c[Math.floor(Math.random()*c.length)];a.push({id:Date.now()+1,sender:"target",text:l,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),bt()},1200)}let fe=!0;function ts(){const e=document.getElementById("settingsDrawer");e&&(ss(),e.classList.add("open"))}function Ee(){var e;(e=document.getElementById("settingsDrawer"))==null||e.classList.remove("open")}function Cs(){fe=!fe,fe?(document.documentElement.removeAttribute("data-theme"),document.body.removeAttribute("data-theme")):(document.documentElement.setAttribute("data-theme","light"),document.body.setAttribute("data-theme","light")),ss(),s(fe?"🌙 已切换为深色护眼模式":"☀️ 已切换为极简明亮模式")}function ss(){const e=document.getElementById("settingsThemeIcon"),t=document.getElementById("settingsThemeText");e&&t&&(e.textContent=fe?"🌙":"☀️",t.textContent=fe?"当前: 深色模式":"当前: 浅色明亮模式")}function Ss(){s("🧹 正在清理本地视频与离线数据缓存..."),setTimeout(()=>{s("✅ 已成功清理 24.8MB 缓存垃圾，运行更流畅！")},800)}function Ut(){var e;(e=document.getElementById("authModal"))==null||e.classList.add("active")}function Bt(){var e;(e=document.getElementById("authModal"))==null||e.classList.remove("active")}function $s(){var t;const e=((t=document.getElementById("authPhoneInput"))==null?void 0:t.value.trim())||"13800138000";b.isLoggedIn=!0,b.name="创作者小天 (已登录)",b.phone=e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),Bt(),It(),s("🎉 登录成功！欢迎回来，"+b.name)}function Ps(){b.isLoggedIn=!0,b.name="极客VIP体验官",b.phone="188****9999",Bt(),It(),s("⚡ 已通过一键免密授权，登录成功！")}function As(){b.isLoggedIn=!1,b.name="未登录游客",b.phone="点击前往登录",Ee(),It(),s("🚪 已退出登录状态，可随时重新登录体验全量功能")}function It(){const e=document.querySelector(".user-nickname");e&&(e.textContent=b.name);const t=document.getElementById("settingsUserName");t&&(t.textContent=b.name);const a=document.getElementById("settingsUserPhone");a&&(a.textContent="绑定手机: "+b.phone)}function as(){var e;(e=document.getElementById("mobileSearchResultsDrawer"))==null||e.classList.remove("open")}function je(e){const t=e.toLowerCase().trim();if(!t){C=[...le],E=0,H(E);return}if(document.body.classList.contains("mobile-mode")){Ne(t);return}const a=le.filter(i=>i.caption.toLowerCase().includes(t)||i.author.name.toLowerCase().includes(t)||i.tags.some(c=>c.toLowerCase().includes(t))||i.music.toLowerCase().includes(t));a.length>0?(C=a,E=0,H(E),s(`🔍 找到 ${a.length} 条与「${e}」相关的视频`)):s(`未找到「${e}」相关内容，已展示推荐流`)}function Ts(){var W,V,Y,K,X,Q,J,Z,ee,te,se,ae,ne,m,P,N,re,we,Be,Ie,xe,Ce,Se,$e,Pe,Ae,Te,Me,De,qe,v,y,B,T,z,ie,Ct,St,$t,Pt,At,Tt,Mt,Dt,qt,Rt;Ze==null||Ze.addEventListener("click",ge),Je==null||Je.addEventListener("click",Fe),window.addEventListener("keydown",n=>{var r;if(!["INPUT","TEXTAREA"].includes((r=document.activeElement)==null?void 0:r.tagName)){if(n.key==="ArrowDown"||n.key==="s"||n.key==="S")n.preventDefault(),ge();else if(n.key==="ArrowUp"||n.key==="w"||n.key==="W")n.preventDefault(),Fe();else if(n.key===" "){n.preventDefault();const S=document.getElementById("mainVideoPlayer"),Qe=document.getElementById("playPauseIndicator"),ns=document.getElementById("musicDisc");S&&ys(S,Qe,ns)}}});let e=0;window.addEventListener("wheel",n=>{if(n.target.closest(".comments-drawer")||n.target.closest(".modal-card")||n.target.closest(".settings-drawer")||n.target.closest(".mobile-search-drawer"))return;const r=Date.now();r-e<600||(n.deltaY>50?(e=r,ge()):n.deltaY<-50&&(e=r,Fe()))},{passive:!0});let t=0,a=0;window.addEventListener("touchstart",n=>{t=n.touches[0].clientY},{passive:!0}),window.addEventListener("touchend",n=>{a=n.changedTouches[0].clientY;const r=a-t;Math.abs(r)>60&&(r<0?ge():Fe())},{passive:!0}),(W=ze==null?void 0:ze.querySelectorAll(".nav-tab"))==null||W.forEach(n=>{n.addEventListener("click",()=>{ze.querySelectorAll(".nav-tab").forEach(S=>S.classList.remove("active")),n.classList.add("active");const r=n.dataset.tab;r==="follow"?(h="home",k="follow",g(),s("📱 已切换至「我的关注」独立信息流页面")):r==="friend"?(h="friend",g(),s("👥 已进入「朋友动态」独立专区")):r==="live"?(h="home",k="live",g(),s("🔴 已连线进入官方高码率「直播间」独立页面")):r==="hot"||r==="knowledge"?(h="home",k="mall",g(),s("🛒 已切换至「抖音商城与热门好物」独立页面")):(h="home",k="recommend",g(),s("🎬 已切换至「首页推荐」沉浸视频流"))})}),document.querySelectorAll(".sidebar-menu .menu-item").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".sidebar-menu .menu-item").forEach(S=>S.classList.remove("active")),n.classList.add("active");const r=n.dataset.route;r==="feed"?(h="home",k="recommend",g()):r==="friend"?(h="friend",g()):r==="follow"?(h="home",k="follow",g()):r==="explore"?(h="home",k="mall",g()):(r==="likes"||r==="history")&&(h="mine",g())})}),(V=document.getElementById("notifyBtn"))==null||V.addEventListener("click",()=>{h="message",g(),s("💬 已进入「互动消息中心」独立页面")}),D==null||D.addEventListener("input",n=>{ce&&(ce.style.display=n.target.value?"block":"none")}),ce==null||ce.addEventListener("click",()=>{D&&(D.value=""),ce.style.display="none",je("")}),pt==null||pt.addEventListener("click",()=>{D&&je(D.value)}),D==null||D.addEventListener("keydown",n=>{n.key==="Enter"&&je(D.value)}),tt==null||tt.addEventListener("click",Wt),st==null||st.addEventListener("click",Ke),j==null||j.addEventListener("keydown",n=>{n.key==="Enter"&&Ke()}),at==null||at.addEventListener("click",ht),nt==null||nt.addEventListener("click",He),it==null||it.addEventListener("click",He),ot==null||ot.addEventListener("click",bs),(Y=me==null?void 0:me.querySelectorAll(".preset-pill"))==null||Y.forEach(n=>{n.addEventListener("click",()=>{me.querySelectorAll(".preset-pill").forEach(r=>r.classList.remove("active")),n.classList.add("active"),_e&&(_e.value="")})}),document.querySelectorAll(".quick-tag").forEach(n=>{n.addEventListener("click",()=>{gt&&(gt.value+=` ${n.dataset.tag} `)})}),ct==null||ct.addEventListener("click",Kt),dt==null||dt.addEventListener("click",()=>{ft()}),lt==null||lt.addEventListener("click",Xt),rt==null||rt.addEventListener("click",ks),mt==null||mt.addEventListener("click",Bs),vt==null||vt.addEventListener("click",()=>{var n;Re&&((n=navigator.clipboard)==null||n.writeText(Re.value)),s("📋 视频分享链接已复制到剪贴板！")}),["shareWechat","shareMoments","shareQQ","shareCopyLink"].forEach(n=>{var r;(r=document.getElementById(n))==null||r.addEventListener("click",()=>{var S;Re&&((S=navigator.clipboard)==null||S.writeText(Re.value)),s("✅ 分享链接已生成，快去发给好友吧！")})}),ut==null||ut.addEventListener("click",()=>{C=[...le],E=0,H(E),s("已刷新推荐信息流")});const i=document.getElementById("btnViewMobile"),c=document.getElementById("btnViewDesktop");i==null||i.addEventListener("click",()=>{document.body.classList.add("mobile-mode"),i.classList.add("active"),c.classList.remove("active"),s("📱 已切换至移动端真机视图 (iPhone 390x844)")}),c==null||c.addEventListener("click",()=>{document.body.classList.remove("mobile-mode"),c.classList.add("active"),i.classList.remove("active"),s("🖥️ 已切换至桌面端宽屏视图")});const l=document.getElementById("btnThemeToggle"),d=document.getElementById("themeToggleIcon"),o=document.getElementById("themeToggleText");let p=!1;l==null||l.addEventListener("click",()=>{p=!p,document.body.classList.toggle("theme-light",p),document.body.classList.toggle("theme-dark",!p),p?(d.textContent="🌙",o.textContent="暗色模式",s("☀️ 已切换至「亮色/浅色模式」清新视觉")):(d.textContent="☀️",o.textContent="亮色模式",s("🌙 已切换至「暗色模式」经典黑曜石视觉"))});const u=document.getElementById("mobileSearchDrawer"),L=document.getElementById("btnCancelMobileSearch"),I=document.getElementById("mobileSearchInput"),w=document.getElementById("mobileSearchClear");L==null||L.addEventListener("click",()=>{u==null||u.classList.remove("open")}),I==null||I.addEventListener("input",()=>{w&&(w.style.display=I.value?"block":"none")}),w==null||w.addEventListener("click",()=>{I.value="",w.style.display="none"}),document.querySelectorAll(".hot-tag-pill").forEach(n=>{n.addEventListener("click",()=>{const r=n.textContent.replace(/^[🔥🏔️💻✨]\s*/,"");u==null||u.classList.remove("open"),je(r)})});const x=document.getElementById("mobileMessagesDrawer"),q=document.getElementById("closeMessagesDrawerBtn"),A=document.getElementById("notifyBtn");A==null||A.addEventListener("click",()=>{x==null||x.classList.add("open")}),q==null||q.addEventListener("click",()=>{x==null||x.classList.remove("open")});const f=document.getElementById("videoActionMenuModal"),$=document.getElementById("closeActionMenuBtn"),O=document.getElementById("btnToggleClearScreen"),R=document.getElementById("btnDownloadVideo"),G=document.getElementById("btnNotInterested"),M=document.getElementById("btnReportVideo");$==null||$.addEventListener("click",()=>{f==null||f.classList.remove("active")}),O==null||O.addEventListener("click",()=>{f==null||f.classList.remove("active");const n=document.getElementById("videoCard");n==null||n.classList.add("clear-screen"),s("👁️ 已开启清屏模式，轻触屏幕任意区域即可退出")}),R==null||R.addEventListener("click",()=>{f==null||f.classList.remove("active"),s("📥 已开始将 1080P 超清视频保存至本地相册！")}),G==null||G.addEventListener("click",()=>{f==null||f.classList.remove("active"),s("🚫 已记录偏好，将减少此类推荐！"),ge()}),M==null||M.addEventListener("click",()=>{f==null||f.classList.remove("active"),s("⚠️ 已收到内容违规举报，安全审核团队将在2小时内核查！")}),document.querySelectorAll(".speed-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".speed-btn").forEach(Qe=>Qe.classList.remove("active")),n.classList.add("active");const r=parseFloat(n.dataset.speed||"1.0"),S=document.getElementById("mainVideoPlayer");S&&(S.playbackRate=r),f==null||f.classList.remove("active"),s(`⚡ 已将播放倍速调整为 ${r}X`)})}),document.querySelectorAll(".quick-emoji-item").forEach(n=>{n.addEventListener("click",()=>{j.value+=n.textContent,j.focus()})});const U=document.querySelector(".m-tab-live");U==null||U.addEventListener("click",()=>{s("🔴 正在连线进入官方高码率「直播间」，开启互动弹幕！")}),(K=document.getElementById("closeMusicDetailBtn"))==null||K.addEventListener("click",yt),(X=document.getElementById("btnCollectMusic"))==null||X.addEventListener("click",()=>{s("⭐ 音乐收藏成功！已同步至个人主页-收藏音乐库")}),(Q=document.getElementById("btnShootSame"))==null||Q.addEventListener("click",()=>{yt(),be(),s("🎵 已载入当前背景配乐，开始拍摄同款！")}),(J=document.getElementById("shareMusicBtn"))==null||J.addEventListener("click",()=>{s("↗ 已复制原声音频分享卡片！")}),(Z=document.getElementById("closeProductDrawerBtn"))==null||Z.addEventListener("click",Ht),(ee=document.getElementById("btnAddCartBtn"))==null||ee.addEventListener("click",()=>{s("🛒 成功加入抖音购物车！可在商城查看")}),(te=document.getElementById("btnBuyNowBtn"))==null||te.addEventListener("click",()=>{s("🎉 领券成功！已为你生成极速免密支付订单！"),setTimeout(Ht,800)}),(se=document.getElementById("closeMallDrawerBtn"))==null||se.addEventListener("click",Is),(ae=document.getElementById("mallCartBtn"))==null||ae.addEventListener("click",()=>{s("🛒 购物车已有 3 件超值好物待结算")}),(ne=document.getElementById("closeCameraBtn"))==null||ne.addEventListener("click",ye),(m=document.getElementById("cameraShutterBtn"))==null||m.addEventListener("click",Zt),(P=document.getElementById("cameraFlipBtn"))==null||P.addEventListener("click",()=>{s("🔄 摄像头已翻转至前置/后置高清镜头")}),(N=document.getElementById("cameraSoundPicker"))==null||N.addEventListener("click",()=>{s("🎵 抖音热门配乐榜：1. 原声流行 2. 赛博电音 3. 治愈纯音")}),(re=document.getElementById("cameraFilterBtn"))==null||re.addEventListener("click",()=>{s("✨ 胶片滤镜已开启：富士经典色彩模拟")}),(we=document.getElementById("cameraBeautyBtn"))==null||we.addEventListener("click",()=>{s("💄 智能微皮美颜已调整至 50%")}),(Be=document.getElementById("cameraTimerBtn"))==null||Be.addEventListener("click",()=>{s("⏱️ 3秒倒计时拍摄已就绪")}),(Ie=document.getElementById("cameraSpeedBtn"))==null||Ie.addEventListener("click",()=>{s("⚡ 当前拍摄速率：标准 1.0X")}),(xe=document.getElementById("cameraAlbumBtn"))==null||xe.addEventListener("click",()=>{ye(),ht()}),(Ce=document.getElementById("cameraPropBtn"))==null||Ce.addEventListener("click",()=>{s("🎭 爆款道具特技已加载：赛博墨镜")}),(Se=document.getElementById("closeSearchResultsBtn"))==null||Se.addEventListener("click",as),($e=document.getElementById("searchSubmitAction"))==null||$e.addEventListener("click",()=>{var r;const n=(r=document.getElementById("searchResultsInput"))==null?void 0:r.value;n&&Ne(n)}),(Pe=document.getElementById("searchResultsInput"))==null||Pe.addEventListener("keydown",n=>{n.key==="Enter"&&n.target.value&&Ne(n.target.value)}),(Ae=document.getElementById("btnHeaderLogin"))==null||Ae.addEventListener("click",Ut),(Te=document.getElementById("closeAuthModalBtn"))==null||Te.addEventListener("click",Bt),(Me=document.getElementById("btnAuthSubmit"))==null||Me.addEventListener("click",$s),(De=document.getElementById("btnQuickGuest"))==null||De.addEventListener("click",Ps),(qe=document.getElementById("tabSmsLogin"))==null||qe.addEventListener("click",()=>{var n,r;(n=document.getElementById("tabSmsLogin"))==null||n.classList.add("active"),(r=document.getElementById("tabPwdLogin"))==null||r.classList.remove("active"),document.getElementById("groupSmsCode").style.display="block",document.getElementById("groupPassword").style.display="none"}),(v=document.getElementById("tabPwdLogin"))==null||v.addEventListener("click",()=>{var n,r;(n=document.getElementById("tabPwdLogin"))==null||n.classList.add("active"),(r=document.getElementById("tabSmsLogin"))==null||r.classList.remove("active"),document.getElementById("groupSmsCode").style.display="none",document.getElementById("groupPassword").style.display="block"}),(y=document.getElementById("btnSendSms"))==null||y.addEventListener("click",()=>{const n=document.getElementById("btnSendSms");n.disabled=!0;let r=60;n.textContent=`${r}s`,s("📩 验证码已发送至手机：8888");const S=setInterval(()=>{r--,n.textContent=`${r}s`,r<=0&&(clearInterval(S),n.disabled=!1,n.textContent="获取验证码")},1e3)}),(B=document.getElementById("closeSettingsBtn"))==null||B.addEventListener("click",Ee),(T=document.getElementById("btnSettingsThemeToggle"))==null||T.addEventListener("click",Cs),(z=document.getElementById("btnClearCache"))==null||z.addEventListener("click",Ss),(ie=document.getElementById("btnSettingsLogout"))==null||ie.addEventListener("click",As),(Ct=document.getElementById("btnSwitchAccount"))==null||Ct.addEventListener("click",()=>{Ee(),Ut()}),(St=document.getElementById("chkFollowSystem"))==null||St.addEventListener("change",n=>{s(n.target.checked?"已开启跟随系统深浅外观":"已关闭跟随系统")}),($t=document.getElementById("closeChatRoomBtn"))==null||$t.addEventListener("click",xs),(Pt=document.getElementById("btnChatMore"))==null||Pt.addEventListener("click",()=>{s("⚙️ 私聊设置：置顶聊天、消息免打扰、拉黑")}),(At=document.getElementById("btnChatSend"))==null||At.addEventListener("click",()=>{const n=document.getElementById("chatTextInput");n&&n.value.trim()&&(Ge(n.value.trim()),n.value="")}),(Tt=document.getElementById("chatTextInput"))==null||Tt.addEventListener("keydown",n=>{n.key==="Enter"&&n.target.value.trim()&&(Ge(n.target.value.trim()),n.target.value="")}),(Mt=document.getElementById("btnChatToggleEmoji"))==null||Mt.addEventListener("click",()=>{const n=document.getElementById("chatEmojiPanel");n&&(n.style.display=n.style.display==="none"?"flex":"none")}),document.querySelectorAll("#chatEmojiPanel span").forEach(n=>{n.addEventListener("click",()=>{const r=document.getElementById("chatTextInput");r&&(r.value+=n.textContent,r.focus())})}),(Dt=document.getElementById("btnChatPickImage"))==null||Dt.addEventListener("click",()=>{const n=["https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"],r=n[Math.floor(Math.random()*n.length)];Ge("[分享了一张图片]",r),s("📷 发送了一张照片至私聊会话")}),(qt=document.getElementById("btnChatToggleVoice"))==null||qt.addEventListener("click",()=>{s("🎙️ 正在录制语音... 松开立即发送"),setTimeout(()=>{Ge("🎙️ [语音消息 4秒]")},1500)}),document.querySelectorAll("#publishModeTabs .pub-mode-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("#publishModeTabs .pub-mode-btn").forEach(r=>r.classList.remove("active")),n.classList.add("active"),de=n.dataset.mode,document.getElementById("paneVideo").style.display=de==="video"?"block":"none",document.getElementById("paneImage").style.display=de==="image"?"block":"none",document.getElementById("paneText").style.display=de==="text"?"block":"none",document.getElementById("groupMusic").style.display=de==="text"?"none":"block"})}),document.querySelectorAll("#imagePresetGrid .img-pill").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("#imagePresetGrid .img-pill").forEach(r=>r.classList.remove("active")),n.classList.add("active")})}),document.querySelectorAll("#moodColorBar .mood-color-circle").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("#moodColorBar .mood-color-circle").forEach(S=>S.classList.remove("active")),n.classList.add("active"),Ft=n.dataset.color;const r=document.getElementById("moodPreviewCard");r&&(r.style.background=Ft)})}),(Rt=document.getElementById("publishCaptionInput"))==null||Rt.addEventListener("input",n=>{const r=document.getElementById("moodPreviewText");r&&(r.textContent=n.target.value.trim()||"在此输入你的今日心情动态与生活感悟...")}),Ms()}function Ms(){var q,A,f,$,O,R,G,M,U,W,V,Y,K,X,Q,J,Z,ee,te,se,ae,ne,m,P,N,re,we,Be,Ie,xe,Ce,Se,$e,Pe,Ae,Te,Me,De,qe;const e=document.getElementById("profileSidebarDrawer"),t=document.getElementById("closeSidebarDrawerOverlay");window.openProfileSidebarDrawer=()=>{e==null||e.classList.add("open")},window.closeProfileSidebarDrawer=()=>{e==null||e.classList.remove("open")},t==null||t.addEventListener("click",v=>{v.stopPropagation(),closeProfileSidebarDrawer()}),e==null||e.addEventListener("click",v=>{v.target.closest(".sidebar-drawer-content")||closeProfileSidebarDrawer()}),(q=document.getElementById("btnDrawerSettings"))==null||q.addEventListener("click",()=>{closeProfileSidebarDrawer(),ts()}),(A=document.getElementById("btnDrawerScan"))==null||A.addEventListener("click",()=>{s("📷 正在打开扫一扫：支持扫描朋友二维码名片与核销码")}),(f=document.getElementById("cellOrders"))==null||f.addEventListener("click",()=>{s("🛍️ 正在打开抖音商城：查看待付款、待发货与退款订单")}),($=document.getElementById("cellWallet"))==null||$.addEventListener("click",()=>{s("💳 我的钱包：已安全绑定，零钱余额 ¥128.50")}),(O=document.getElementById("cellHistory"))==null||O.addEventListener("click",()=>{s("⏱️ 观看历史：已加载你最近浏览的 38 个视频作品")}),(R=document.getElementById("cellCreatorCenter"))==null||R.addEventListener("click",()=>{s("📈 创作者服务中心：作品播放分析与流量扶持指南")}),(G=document.getElementById("cellService"))==null||G.addEventListener("click",()=>{s("🎧 我的客服：7x24小时智能在线解答")}),(M=document.getElementById("cellMyQr"))==null||M.addEventListener("click",()=>{s("㗊 我的二维码：已生成高清电子名片")});const a=document.getElementById("settingsDrawer");window.openSettingsDrawer=()=>a==null?void 0:a.classList.add("open"),window.closeSettingsDrawer=()=>a==null?void 0:a.classList.remove("open"),(U=document.getElementById("closeSettingsBtn"))==null||U.addEventListener("click",Ee),(W=document.getElementById("btnSwitchAccount"))==null||W.addEventListener("click",()=>{Ee(),openSwitchAccountPage()}),(V=document.getElementById("btnSettingsLogout"))==null||V.addEventListener("click",()=>{s("🚪 已退出当前登录状态"),Ee()}),(Y=document.getElementById("board10AiInput"))==null||Y.addEventListener("keydown",v=>{if(v.key==="Enter"){const y=v.target.value.trim();y&&(s(`✨ AI 助手已解析：「${y}」，正在为你定位最优配置...`),v.target.value="")}});const i=document.getElementById("switchAccountPage");window.openSwitchAccountPage=()=>i==null?void 0:i.classList.add("active"),window.closeSwitchAccountPage=()=>i==null?void 0:i.classList.remove("active"),(K=document.getElementById("closeSwitchAccountBtn"))==null||K.addEventListener("click",closeSwitchAccountPage),(X=document.getElementById("openCreateAccountSheetBtn"))==null||X.addEventListener("click",()=>{openCreateAccountSheet()}),(Q=document.getElementById("accCardCurrent"))==null||Q.addEventListener("click",()=>{s("✓ 当前已在「创作者小天」账号")}),(J=document.getElementById("accCardSub"))==null||J.addEventListener("click",()=>{s("🔄 正在切换至「极客科技副号」..."),setTimeout(()=>{s("🎉 已成功切换至「极客科技副号」！"),closeSwitchAccountPage()},600)});const c=document.getElementById("createAccountSheet");window.openCreateAccountSheet=()=>c==null?void 0:c.classList.add("active"),window.closeCreateAccountSheet=()=>c==null?void 0:c.classList.remove("active"),(Z=document.getElementById("btnCloseCreateSheet"))==null||Z.addEventListener("click",closeCreateAccountSheet),(ee=document.getElementById("closeCreateAccountMask"))==null||ee.addEventListener("click",closeCreateAccountSheet),(te=document.getElementById("btnOneKeyRegister"))==null||te.addEventListener("click",()=>{s("⚡ 本机号码一键授权注册中..."),setTimeout(()=>{s("🎉 注册成功！已为您建立新创作者账号"),closeCreateAccountSheet()},800)}),(se=document.getElementById("btnOtherPhoneRegister"))==null||se.addEventListener("click",()=>{closeCreateAccountSheet(),openSelectRegisterTypePage()});const l=document.getElementById("selectRegisterTypePage");window.openSelectRegisterTypePage=()=>l==null?void 0:l.classList.add("active"),window.closeSelectRegisterTypePage=()=>l==null?void 0:l.classList.remove("active"),(ae=document.getElementById("closeRegisterTypeBtn"))==null||ae.addEventListener("click",closeSelectRegisterTypePage),(ne=document.getElementById("btnBoard13GetCode"))==null||ne.addEventListener("click",()=>{const v=document.getElementById("board13PhoneInput");if(!(v!=null&&v.value)||v.value.length<11){s("📱 请输入11位有效手机号码");return}s("📨 验证码已发送至你的手机"),setTimeout(()=>{closeSelectRegisterTypePage(),openPhoneLoginPage()},600)});const d=document.getElementById("phoneLoginPage");window.openPhoneLoginPage=()=>d==null?void 0:d.classList.add("active"),window.closePhoneLoginPage=()=>d==null?void 0:d.classList.remove("active"),(m=document.getElementById("closePhoneLoginBtn"))==null||m.addEventListener("click",closePhoneLoginPage),document.querySelectorAll(".ios-kb-key").forEach(v=>{v.addEventListener("click",()=>{const y=v.dataset.digit;if(!y)return;const B=document.getElementById("board14TypedNumber");if(!B)return;let T=B.textContent.replace(/\s+/g,"");y==="backspace"?T=T.slice(0,-1):T.length<11&&(T+=y);let z="";for(let ie=0;ie<T.length;ie++)(ie===3||ie===7)&&(z+=" "),z+=T[ie];B.textContent=z||" "})});const o=document.getElementById("cameraRecordingModal");window.openCameraModal=()=>{o==null||o.classList.add("open")},window.closeCameraModal=()=>{o==null||o.classList.remove("open")},(P=document.getElementById("closeCameraBtn"))==null||P.addEventListener("click",ye),(N=document.getElementById("cameraTopMusic"))==null||N.addEventListener("click",()=>{s("🎵 正在打开音乐库：听抖音热歌榜、原声流行推荐")});const p={cameraToolFlip:"🔄 已切换前后置摄像头",cameraToolSpeed:"⚡ 拍摄快慢速调节：0.5x / 1x / 2x",cameraToolBeauty:"✨ 美颜滤镜已开启：磨皮70% 大眼40%",cameraToolFilter:"🎨 滤镜调色：青橙 / 复古胶片 / 暮光",cameraToolTimer:"⏱️ 倒计时拍摄已设为 3 秒",cameraToolFlash:"💡 补光灯已开启",cameraToolWide:"📐 超广角镜头已启动",cameraToolMore:"⚙️ 更多拍摄辅助设置：防抖、网格参考线"};for(const[v,y]of Object.entries(p))(re=document.getElementById(v))==null||re.addEventListener("click",()=>s(y));document.querySelectorAll("#cameraCaptureModes .capture-mode-item").forEach(v=>{v.addEventListener("click",()=>{document.querySelectorAll("#cameraCaptureModes .capture-mode-item").forEach(T=>T.classList.remove("active")),v.classList.add("active");const y=v.dataset.mode;s(`已切换至拍摄模式：${v.textContent}`);const B=document.getElementById("cameraShutterBtn");B&&(B.className=`camera-shutter-btn mode-${y}`)})});let u=!1;(we=document.getElementById("cameraShutterBtn"))==null||we.addEventListener("click",()=>{var y;if((((y=document.querySelector("#cameraCaptureModes .capture-mode-item.active"))==null?void 0:y.dataset.mode)||"photo")==="photo")s("📸 咔嚓！照片已生成，正在进入作品编辑预览..."),setTimeout(()=>{ye(),s("✓ 照片已自动保存并成功发布到作品流！")},1e3);else{u=!u;const B=document.getElementById("cameraShutterBtn");u?(B==null||B.classList.add("recording"),s("🔴 正在高清录制中... 再次点击停止录制并发布")):(B==null||B.classList.remove("recording"),s("🎬 录制完成！正在生成作品并推送到推荐流..."),setTimeout(()=>{ye(),s("✓ 视频作品已成功发布！")},1200))}}),(Be=document.getElementById("cameraEffectBtn"))==null||Be.addEventListener("click",()=>{s("🎭 正在加载热门 AI 变脸与复古画风道具")}),(Ie=document.getElementById("cameraAlbumBtn"))==null||Ie.addEventListener("click",()=>{s("🖼️ 正在打开本地相册，支持选取照片与视频一键导入")});const L=document.getElementById("mobileSearchResultsDrawer"),I=document.getElementById("searchHomeView"),w=document.getElementById("searchResultsView"),x=document.getElementById("searchResultsInput");window.openMobileSearchResultsDrawer=(v="")=>{L==null||L.classList.add("open"),x&&(x.value=v),v?(I&&(I.style.display="none"),w&&(w.style.display="block")):(I&&(I.style.display="block"),w&&(w.style.display="none"))},window.closeMobileSearchResultsDrawer=()=>{L==null||L.classList.remove("open")},(xe=document.getElementById("closeSearchResultsBtn"))==null||xe.addEventListener("click",closeMobileSearchResultsDrawer),(Ce=document.getElementById("mobileDrawerSearchInput"))==null||Ce.addEventListener("keydown",v=>{if(v.key==="Enter"){const y=v.target.value.trim();y&&(Nt(y),s(`🔍 正在为你全网检索「${y}」最新内容...`))}}),document.querySelectorAll(".search-history-chip, .search-hot-row").forEach(v=>{v.addEventListener("click",()=>{var z;const B=(v.dataset.keyword||((z=v.querySelector(".hot-row-title"))==null?void 0:z.textContent)||v.textContent).trim().replace(/^[\d\s]+/,""),T=document.getElementById("mobileDrawerSearchInput");T&&(T.value=B),Nt(B),s(`🔍 已搜索：「${B}」`)})}),(Se=document.getElementById("btnAiFollowupSend"))==null||Se.addEventListener("click",()=>{const v=document.getElementById("aiFollowupInput"),y=v==null?void 0:v.value.trim();if(!y){s("请输入你想向 AI 追问的内容");return}s(`🤖 AI 正在深入思考追问：「${y}」...`),setTimeout(()=>{s(`💡 AI 解答：针对「${y}」，建议结合齿轮转矩与限滑差速器原理进行理解！`),v&&(v.value="")},1200)}),($e=document.getElementById("btnAttachCommentImg"))==null||$e.addEventListener("click",()=>{Ue="./image-design/comment_drawer_screenshot.jpg";const v=document.getElementById("commentAttachPreview"),y=document.getElementById("commentPreviewImg");v&&y&&(y.src=Ue,v.style.display="flex",s("🖼️ 已选取对局阵容实战截图，附图将在评论中一并展示！"))}),(Pe=document.getElementById("btnRemoveAttachImg"))==null||Pe.addEventListener("click",()=>{Yt(),s("已移除附图")}),(Ae=document.getElementById("btnAtFriendInComment"))==null||Ae.addEventListener("click",()=>{const v=document.getElementById("newCommentInput");v&&(v.value+="@满月刘海. ",v.focus())}),(Te=document.getElementById("btnCommentEmoji"))==null||Te.addEventListener("click",()=>{const v=document.getElementById("newCommentInput"),y=["😂","👍","🔥","❤️","🥺","✨"],B=y[Math.floor(Math.random()*y.length)];v&&(v.value+=B,v.focus())}),(Me=document.getElementById("sendCommentBtn"))==null||Me.addEventListener("click",Ke),(De=document.getElementById("newCommentInput"))==null||De.addEventListener("keydown",v=>{v.key==="Enter"&&Ke()}),(qe=document.getElementById("closeCommentsDrawerBtn"))==null||qe.addEventListener("click",Wt)}function Nt(e){const t=document.getElementById("searchWaterfallGrid");if(!t)return;const a=[{title:`${e}工作原理解析：机械师3D动画演示带你彻底看懂！`,author:"机械大玩家",avatar:"./image-design/微信图片_20261018114509.jpg",likes:"12.8w",cover:"./image-design/微信图片_20261018114534.jpg",tag:"精选解析"},{title:`为什么转弯时两边车轮转速不一样？${e}的作用太绝了`,author:"汽车知识局",avatar:"./image-design/微信图片_20261018114507.jpg",likes:"8.4w",cover:"./image-design/微信图片_20261018114504.jpg",tag:"热搜第一"},{title:`两分钟搞懂托森、开放式与自锁式${e}的区别`,author:"硬核工科生",avatar:"./image-design/微信图片_20261018114457.jpg",likes:"5.1w",cover:"./image-design/微信图片_20261018114509.jpg",tag:"科普"},{title:`${e}实拆体验：纯机械构造的精妙之美`,author:"汽修老李",avatar:"./image-design/微信图片_20261018114455.jpg",likes:"3.2w",cover:"./image-design/微信图片_20261018114505.jpg",tag:"实拍"}];t.innerHTML=a.map(i=>`
    <div class="search-waterfall-card">
      <div class="wf-cover-wrap">
        <img src="${i.cover}" class="wf-cover-img" alt="${i.title}">
        <span class="wf-tag-pill">${i.tag}</span>
        <span class="wf-likes">❤️ ${i.likes}</span>
      </div>
      <div class="wf-info-wrap">
        <div class="wf-title">${i.title}</div>
        <div class="wf-author-row">
          <img src="${i.avatar}" class="wf-author-avatar">
          <span class="wf-author-name">${i.author}</span>
        </div>
      </div>
    </div>
  `).join(""),document.querySelectorAll(".search-waterfall-card").forEach(i=>{i.addEventListener("click",()=>{s("🎬 正在全屏播放搜索精选视频"),closeMobileSearchResultsDrawer()})})}function Ds(){const e=document.getElementById("btnOpenShowcase"),t=document.getElementById("showcaseDrawer"),a=document.getElementById("showcaseBackdrop"),i=document.getElementById("closeShowcaseBtn"),c=()=>t==null?void 0:t.classList.add("open"),l=()=>t==null?void 0:t.classList.remove("open");e==null||e.addEventListener("click",c),a==null||a.addEventListener("click",l),i==null||i.addEventListener("click",l),document.querySelectorAll(".showcase-card").forEach(d=>{d.addEventListener("click",()=>{const o=d.dataset.screen;l(),xt(o)})})}function xt(e){var i,c,l,d;switch(document.body.classList.add("mobile-mode"),{1:"feed-video",2:"feed-album",3:"feed-live-card",4:"live-room",5:"comment-drawer",6:"friends-page",7:"messages-page",8:"profile-page",9:"profile-sidebar",10:"standalone-settings",11:"switch-account",12:"create-account",13:"register-mode",14:"keyboard-login",15:"camera-studio",16:"search-home",17:"search-waterfall"}[e]||e){case"feed-video":h="home",k="recommend",E=0,g(),s("📱 已切换至「01. 推荐流短视频」");break;case"feed-album":h="home",k="recommend",E=2,g(),s("🖼️ 已切换至「02. 图文相册轮播流」");break;case"feed-live-card":h="home",k="recommend",E=1,g(),s("🔴 已切换至「03. 推荐流直播推荐卡片」");break;case"live-room":h="home",k="live",g(),s("📡 已进入「04. 全屏沉浸直播间 (专属纵向公屏弹幕)」");break;case"comment-drawer":h="home",E=0,g(),setTimeout(()=>{wt(C[0]),s("💬 已弹出「05. 真实视频评论区抽屉 (含S18攻略合集与阵容图)」")},300);break;case"friends-page":h="friend",g(),s("❄️ 已进入「06. 朋友专区沉浸流 (雪夜夜景与私信胶囊)」");break;case"messages-page":h="message",g(),s("💬 已进入「07. 消息互动中心 (彩圈发日常与通知)」");break;case"profile-page":h="mine",g(),s("👤 已进入「08. 个人主页「我」(空状态创作大卡片)」");break;case"profile-sidebar":h="mine",g(),setTimeout(()=>{openProfileSidebarDrawer(),s("📑 已滑出「09. 个人中心侧边抽屉」")},300);break;case"standalone-settings":ts(),s("⚙️ 已打开「10. 独立设置页 (含AI智能提问卡片)」");break;case"switch-account":(i=window.openSwitchAccountPage)==null||i.call(window),s("👥 已进入「11. 切换账号页」");break;case"create-account":(c=window.openCreateAccountSheet)==null||c.call(window),s("📋 已唤起「12. 创建新账号半屏浮层」");break;case"register-mode":(l=window.openSelectRegisterTypePage)==null||l.call(window),s("📱 已打开「13. 选择注册方式」");break;case"keyboard-login":(d=window.openPhoneLoginPage)==null||d.call(window),s("⌨️ 已调出「14. 手机号与iOS 9宫格实体数字软键盘」");break;case"camera-studio":be(),s("📷 已打开「15. 相机拍摄工作台 (8项工具与快门)」");break;case"search-home":openMobileSearchResultsDrawer(""),s("🔍 已打开「16. 搜索中心与实时热点榜」");break;case"search-waterfall":openMobileSearchResultsDrawer("claude动画"),s("✨ 已进入「17. 双列瀑布流与AI深度提炼追问」");break;case"design-system":Xt(),s("📐 已展示「18. 全局复用设计系统规范」");break;default:g()}}window.navigateToScreen=xt;async function qs(){document.body.classList.add("mobile-mode"),ls(),Ts(),Ds();const t=new URLSearchParams(window.location.search).get("screen");t?xt(t):H(E),console.log("Douyin Web & Mobile Simulation App initialized successfully.")}document.addEventListener("DOMContentLoaded",qs);
