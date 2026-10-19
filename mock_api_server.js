import http from 'http';
import url from 'url';

const PORT = 8080;

let mockVideos = [
  {
    id: "v_101",
    title: "赛博极光夜都市",
    caption: "穿行在赛博朋克夜都市！光影流转间的极致震撼，戴上耳机享受立体环绕原声 ✨",
    tags: ["#赛博朋克", "#4K超清壁纸", "#Flutter", "#Pencil原型"],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    coverUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    musicName: "Alan Walker - Faded (Cyberpunk Remix 2026)",
    author: {
      userId: "u_cyber",
      nickname: "极客全栈架构师",
      handle: "@geek_architect",
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      isVerified: true,
      bio: "10年分布式架构专家 | 拆解千万级移动端架构",
      followers: "128.5w"
    },
    likes: 128400,
    commentsCount: 4210,
    shares: 5620,
    collects: 18900,
    isLiked: false,
    comments: [
      {
        id: "c_1",
        userName: "全栈攻城狮 👑",
        avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
        content: "Flutter 原生渲染效果太顶了！手势切集完全零延迟，亮色暗色切换很丝滑！",
        timeAgo: "10分钟前",
        likes: 1240,
        isLiked: false
      }
    ]
  },
  {
    id: "v_102",
    title: "超跑破风疾驰时刻",
    caption: "百公里加速2.6秒！V12自然吸气引擎高转咆哮，男人的终极机械浪漫 🚀💨",
    tags: ["#顶级超跑", "#速度与激情", "#机械声浪", "#移动端抖音"],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    coverUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    musicName: "Tokyo Drift - Fast & Furious Theme Track",
    author: {
      userId: "u_speed",
      nickname: "极速声浪俱乐部",
      handle: "@speed_beasts",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      isVerified: true,
      bio: "引擎轰鸣，速度即信仰！顶级超跑第一视角",
      followers: "89.2w"
    },
    likes: 98400,
    commentsCount: 3120,
    shares: 14200,
    collects: 9800,
    isLiked: false,
    comments: []
  }
];

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // GET /api/v1/feed
  if (pathname === '/api/v1/feed' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      code: 0,
      cursor: Date.now(),
      has_more: true,
      items: mockVideos
    }));
    return;
  }

  // POST /api/v1/videos/:id/like
  if (pathname.startsWith('/api/v1/videos/') && pathname.endsWith('/like') && req.method === 'POST') {
    const parts = pathname.split('/');
    const videoId = parts[4];
    const video = mockVideos.find(v => v.id === videoId);
    if (video) {
      video.isLiked = !video.isLiked;
      video.likes += video.isLiked ? 1 : -1;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        code: 0,
        is_liked: video.isLiked,
        total_likes: video.likes
      }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ code: 404, message: "Video not found" }));
    }
    return;
  }

  // Default 404
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ code: 404, message: "Endpoint not found" }));
});

server.listen(PORT, () => {
  console.log(`🚀 Mock API Server running at http://localhost:${PORT}/api/v1/feed`);
});
