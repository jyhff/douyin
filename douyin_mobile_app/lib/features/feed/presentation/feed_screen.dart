import 'package:flutter/material.dart';
import '../models/video_model.dart';
import '../data/mock_video_repository.dart';
import 'widgets/video_player_item.dart';
import '../../../core/theme/app_theme.dart';
import '../../profile/presentation/profile_screen.dart';
import '../../publish/presentation/camera_screen.dart';

class FeedScreen extends StatefulWidget {
  const FeedScreen({super.key});

  @override
  State<FeedScreen> createState() => _FeedScreenState();
}

class _FeedScreenState extends State<FeedScreen> {
  late PageController _pageController;
  List<VideoItem> _videos = [];
  int _currentIndex = 0;
  int _currentNavIndex = 0; // 0:首页, 1:朋友, 2:+, 3:消息, 4:我
  String _currentHomeTab = "推荐"; // "关注" | "商城" | "推荐" | "直播"

  @override
  void initState() {
    super.initState();
    _pageController = PageController();
    _videos = MockVideoRepository.getInitialVideos();
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  void _onPageChanged(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      backgroundColor: isDark ? Colors.black : const Color(0xFFF8F9FA),
      body: _buildCurrentBody(),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentNavIndex,
        onTap: (index) {
          if (index == 2) {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => const CameraScreen()),
            );
          } else {
            setState(() {
              _currentNavIndex = index;
            });
          }
        },
        items: [
          const BottomNavigationBarItem(
            icon: Icon(Icons.home_filled),
            label: '首页',
          ),
          const BottomNavigationBarItem(
            icon: Icon(Icons.people_outline),
            label: '朋友',
          ),
          BottomNavigationBarItem(
            icon: Container(
              width: 44,
              height: 28,
              decoration: BoxDecoration(
                color: isDark ? Colors.white : Colors.black,
                borderRadius: BorderRadius.circular(8),
              ),
              child: Icon(
                Icons.add,
                size: 20,
                color: isDark ? Colors.black : Colors.white,
              ),
            ),
            label: '',
          ),
          const BottomNavigationBarItem(
            icon: Icon(Icons.message_outlined),
            label: '消息',
          ),
          const BottomNavigationBarItem(
            icon: Icon(Icons.person_outline),
            label: '我',
          ),
        ],
      ),
    );
  }

  Widget _buildCurrentBody() {
    if (_currentNavIndex == 1) {
      return _buildFriendsPage();
    } else if (_currentNavIndex == 3) {
      return _buildMessagesPage();
    } else if (_currentNavIndex == 4) {
      return _buildProfilePage();
    } else {
      // 首页根据顶部子Tab渲染不同独立页面
      if (_currentHomeTab == "关注") {
        return _buildFollowPage();
      } else if (_currentHomeTab == "商城") {
        return _buildMallPage();
      } else if (_currentHomeTab == "直播") {
        return _buildLivePage();
      } else {
        return _buildRecommendFeedPage();
      }
    }
  }

  // 1. 首页·推荐视频流独立页面
  Widget _buildRecommendFeedPage() {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Stack(
      children: [
        PageView.builder(
          controller: _pageController,
          scrollDirection: Axis.vertical,
          onPageChanged: _onPageChanged,
          itemCount: _videos.length,
          itemBuilder: (context, index) {
            return VideoPlayerItem(
              video: _videos[index],
              isCurrent: index == _currentIndex,
            );
          },
        ),

        // Top Navigation Bar
        Positioned(
          top: MediaQuery.of(context).padding.top + 8,
          left: 16,
          right: 16,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              GestureDetector(
                onTap: _showSearchModal,
                child: const Icon(Icons.search, size: 26, color: Colors.white),
              ),
              Row(
                children: [
                  GestureDetector(
                    onTap: () => setState(() => _currentHomeTab = "关注"),
                    child: _buildTopTab("关注", _currentHomeTab == "关注"),
                  ),
                  const SizedBox(width: 16),
                  GestureDetector(
                    onTap: () => setState(() => _currentNavIndex = 1),
                    child: _buildTopTab("朋友", false),
                  ),
                  const SizedBox(width: 16),
                  GestureDetector(
                    onTap: () => setState(() => _currentHomeTab = "商城"),
                    child: _buildTopTab("商城", _currentHomeTab == "商城"),
                  ),
                  const SizedBox(width: 16),
                  GestureDetector(
                    onTap: () => setState(() => _currentHomeTab = "推荐"),
                    child: _buildTopTab("推荐", _currentHomeTab == "推荐"),
                  ),
                  const SizedBox(width: 16),
                  GestureDetector(
                    onTap: () => setState(() => _currentHomeTab = "直播"),
                    child: const Text(
                      "直播",
                      style: TextStyle(
                        color: AppTheme.brandYellow,
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
              GestureDetector(
                onTap: () => ThemeController.instance.toggleTheme(),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: Colors.black45,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: Colors.white24, width: 1),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(
                        isDark ? Icons.wb_sunny_rounded : Icons.nightlight_round,
                        size: 14,
                        color: isDark ? Colors.amber : Colors.lightBlueAccent,
                      ),
                      const SizedBox(width: 4),
                      Text(
                        isDark ? "亮色" : "暗色",
                        style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildTopTab(String title, bool isSelected) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          title,
          style: TextStyle(
            color: isSelected ? Colors.white : Colors.white70,
            fontSize: isSelected ? 17 : 15,
            fontWeight: isSelected ? FontWeight.bold : FontWeight.w500,
            shadows: const [Shadow(color: Colors.black54, blurRadius: 4)],
          ),
        ),
        if (isSelected)
          Container(
            margin: const EdgeInsets.only(top: 4),
            width: 20,
            height: 2.5,
            decoration: BoxDecoration(
              color: AppTheme.brandPink,
              borderRadius: BorderRadius.circular(2),
            ),
          ),
      ],
    );
  }

  Widget _buildFriendsStoriesBar() {
    return Container(
      height: 85,
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          _buildStoryAvatar("发日常", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80", true, Colors.white),
          const SizedBox(width: 14),
          _buildStoryAvatar("极客架构师", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80", false, AppTheme.brandPink),
          const SizedBox(width: 14),
          _buildStoryAvatar("极速超跑", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80", false, AppTheme.brandCyan),
          const SizedBox(width: 14),
          _buildStoryAvatar("全栈攻城狮", "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80", false, Colors.white60),
        ],
      ),
    );
  }

  Widget _buildStoryAvatar(String name, String avatarUrl, bool isAdd, Color borderColor) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Stack(
          children: [
            Container(
              padding: const EdgeInsets.all(2.5),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(color: borderColor, width: 2),
              ),
              child: CircleAvatar(
                radius: 24,
                backgroundImage: NetworkImage(avatarUrl),
              ),
            ),
            if (isAdd)
              Positioned(
                bottom: 0,
                right: 0,
                child: Container(
                  width: 18,
                  height: 18,
                  decoration: BoxDecoration(
                    color: AppTheme.brandPink,
                    shape: BoxShape.circle,
                    border: Border.all(color: Colors.black, width: 2),
                  ),
                  child: const Center(
                    child: Icon(Icons.add, size: 12, color: Colors.white),
                  ),
                ),
              ),
          ],
        ),
        const SizedBox(height: 4),
        Text(
          name,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 11,
            fontWeight: FontWeight.w600,
            shadows: [Shadow(color: Colors.black54, blurRadius: 4)],
          ),
        ),
      ],
    );
  }

  void _showSearchModal() {
    showModalBottomSheet(
      context: context,
      backgroundColor: Colors.transparent,
      isScrollControlled: true,
      builder: (ctx) {
        return Container(
          height: MediaQuery.of(context).size.height * 0.8,
          decoration: const BoxDecoration(
            color: Color(0xFF16161A),
            borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
          ),
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Container(
                  width: 36,
                  height: 4,
                  decoration: BoxDecoration(
                    color: Colors.white24,
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
              ),
              const SizedBox(height: 16),
              // Search input
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12),
                decoration: BoxDecoration(
                  color: const Color(0xFF24242E),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: const TextField(
                  style: TextStyle(color: Colors.white),
                  decoration: InputDecoration(
                    hintText: "搜索精彩视频、创作者或话题...",
                    hintStyle: TextStyle(color: Colors.white38, fontSize: 13),
                    border: InputBorder.none,
                    icon: Icon(Icons.search, color: Colors.white54, size: 20),
                  ),
                ),
              ),
              const SizedBox(height: 20),
              const Text("大家都在搜", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 14)),
              const SizedBox(height: 12),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  _buildSearchTag("🔥 赛博极光夜都市"),
                  _buildSearchTag("🔥 顶级超跑机械声浪"),
                  _buildSearchTag("🏔️ 治愈系冰川日出"),
                  _buildSearchTag("💻 Flutter 移动端高保真全栈"),
                  _buildSearchTag("✨ 记录美好生活"),
                ],
              ),
              const SizedBox(height: 24),
              const Text("历史搜索", style: TextStyle(color: Colors.white70, fontSize: 13)),
              const SizedBox(height: 8),
              ListTile(
                contentPadding: EdgeInsets.zero,
                leading: const Icon(Icons.history, color: Colors.white38, size: 20),
                title: const Text("极客架构师短视频", style: TextStyle(color: Colors.white, fontSize: 13)),
                trailing: const Icon(Icons.close, color: Colors.white38, size: 16),
                onTap: () {
                  Navigator.pop(ctx);
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text("🔍 正在载入「极客架构师短视频」搜索结果")),
                  );
                },
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildSearchTag(String text) {
    return GestureDetector(
      onTap: () {
        Navigator.pop(context);
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text("🔍 搜索关键词：$text")),
        );
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: const Color(0xFF282832),
          borderRadius: BorderRadius.circular(16),
        ),
        child: Text(text, style: const TextStyle(color: Colors.white, fontSize: 12)),
      ),
    );
  }

  void _showMallModal() {
    showModalBottomSheet(
      context: context,
      backgroundColor: Colors.transparent,
      isScrollControlled: true,
      builder: (ctx) {
        return Container(
          height: MediaQuery.of(context).size.height * 0.8,
          decoration: const BoxDecoration(
            color: Color(0xFF16161A),
            borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
          ),
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Container(
                  width: 36,
                  height: 4,
                  decoration: BoxDecoration(
                    color: Colors.white24,
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
              ),
              const SizedBox(height: 16),
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [Color(0xFFFF416C), Color(0xFFFF4B2B)]),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: const Row(
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text("百亿补贴 · 官方正品", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16)),
                          SizedBox(height: 4),
                          Text("全网爆款低至 1 折起，全场包邮退换无忧", style: TextStyle(color: Colors.white70, fontSize: 11)),
                        ],
                      ),
                    ),
                    Icon(Icons.local_mall, color: Colors.white, size: 36),
                  ],
                ),
              ),
              const SizedBox(height: 16),
              const Text("精选好物爆款", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 14)),
              const SizedBox(height: 10),
              Expanded(
                child: GridView.count(
                  crossAxisCount: 2,
                  crossAxisSpacing: 10,
                  mainAxisSpacing: 10,
                  childAspectRatio: 0.85,
                  children: [
                    _buildMallCard("极客赛博光影氛围灯", "¥99", "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80"),
                    _buildMallCard("1:18 原厂授权合金超跑车模", "¥168", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80"),
                    _buildMallCard("钛合金双层户外保温杯", "¥129", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80"),
                    _buildMallCard("分布式高并发实战体系课", "¥69", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"),
                  ],
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildMallCard(String title, String price, String imgUrl) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF22222B),
        borderRadius: BorderRadius.circular(10),
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(child: Image.network(imgUrl, width: double.infinity, fit: BoxFit.cover)),
          Padding(
            padding: const EdgeInsets.all(8),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w600), maxLines: 1, overflow: TextOverflow.ellipsis),
                const SizedBox(height: 4),
                Text(price, style: const TextStyle(color: AppTheme.brandPink, fontWeight: FontWeight.bold, fontSize: 14)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // 2. 【朋友】独立全屏专区页面 (专属好友数据与全套独立社交系统)
  Widget _buildFriendsPage() {
    final friendsList = [
      {
        "name": "林小鹿 🌸",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        "relation": "互相关注",
        "time": "10分钟前 · IP:北京 · 🔒 仅朋友可见",
        "caption": "周末和闺蜜去京郊露营抓拍，落日晚霞太治愈了~ 🏕️🌅 吹吹晚风，所有的烦恼都被治愈！",
        "cover": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "likes": "86",
        "comments": "19",
      },
      {
        "name": "阿哲学长 🎸",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        "relation": "好友",
        "time": "32分钟前 · IP:上海 · 🔒 仅朋友可见",
        "caption": "下班随手在天台弹唱一首晴天，大家周末愉快呀！🎸🎵 音乐是疲惫生活里的温柔解药~",
        "cover": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "likes": "142",
        "comments": "38",
      },
      {
        "name": "摄影师安安 📸",
        "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
        "relation": "通讯录好友",
        "time": "2小时前 · IP:杭州 · 🔒 仅朋友可见",
        "caption": "秋天的西湖岸边，晨雾与古树真的像一幅水墨画。带相机走了两万步，收获满满 🍂🍁",
        "cover": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        "likes": "219",
        "comments": "45",
      },
    ];

    return SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Row(
                  children: [
                    Text("朋友专区", style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
                    SizedBox(width: 8),
                    Text("动态", style: TextStyle(color: AppTheme.brandPink, fontSize: 13, fontWeight: FontWeight.bold)),
                  ],
                ),
                Row(
                  children: [
                    IconButton(
                      icon: const Icon(Icons.person_add_alt, color: Colors.white, size: 22),
                      onPressed: () => ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("已开启通讯录同步与附近朋友雷达探测"))),
                    ),
                    IconButton(
                      icon: const Icon(Icons.search, color: Colors.white, size: 22),
                      onPressed: _showSearchModal,
                    ),
                  ],
                ),
              ],
            ),
          ),
          _buildFriendsStoriesBar(),
          const SizedBox(height: 8),
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              itemCount: friendsList.length,
              itemBuilder: (context, index) {
                final f = friendsList[index];
                return Container(
                  margin: const EdgeInsets.only(bottom: 16),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: const Color(0xFF1E1E26),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: Colors.white10),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          CircleAvatar(radius: 20, backgroundImage: NetworkImage(f["avatar"]!)),
                          const SizedBox(width: 10),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  children: [
                                    Text(f["name"]!, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 13)),
                                    const SizedBox(width: 6),
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 1),
                                      decoration: BoxDecoration(color: AppTheme.brandPink.withOpacity(0.2), borderRadius: BorderRadius.circular(4)),
                                      child: Text(f["relation"]!, style: const TextStyle(color: AppTheme.brandPink, fontSize: 9, fontWeight: FontWeight.bold)),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 2),
                                Text(f["time"]!, style: const TextStyle(color: Colors.white38, fontSize: 10)),
                              ],
                            ),
                          ),
                          const Icon(Icons.more_horiz, color: Colors.white38, size: 18),
                        ],
                      ),
                      const SizedBox(height: 10),
                      Text(f["caption"]!, style: const TextStyle(color: Colors.white, fontSize: 13, height: 1.4)),
                      const SizedBox(height: 10),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(8),
                        child: Stack(
                          alignment: Alignment.center,
                          children: [
                            Image.network(f["cover"]!, height: 180, width: double.infinity, fit: BoxFit.cover),
                            Container(
                              width: 44,
                              height: 44,
                              decoration: const BoxDecoration(color: Colors.black54, shape: BoxShape.circle),
                              child: const Icon(Icons.play_arrow_rounded, color: Colors.white, size: 28),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 10),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          Row(children: [const Icon(Icons.favorite_border, size: 16, color: Colors.white70), const SizedBox(width: 4), Text(f["likes"]!, style: const TextStyle(color: Colors.white70, fontSize: 12))]),
                          Row(children: [const Icon(Icons.chat_bubble_outline, size: 16, color: Colors.white70), const SizedBox(width: 4), Text(f["comments"]!, style: const TextStyle(color: Colors.white70, fontSize: 12))]),
                          const Row(children: [Icon(Icons.share, size: 16, color: Colors.white70), SizedBox(width: 4), Text("私信", style: TextStyle(color: Colors.white70, fontSize: 12))]),
                        ],
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }

  // 3. 【消息】独立全屏消息通知中心页面
  Widget _buildMessagesPage() {
    return SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text("消息中心", style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
                IconButton(
                  icon: const Icon(Icons.mark_chat_read_outlined, color: Colors.white, size: 22),
                  onPressed: () => ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("已一键将所有未读消息标记为已读"))),
                ),
              ],
            ),
          ),
          // 4大互动金刚区
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                _buildMsgCatIcon("赞和收藏", Icons.favorite, Colors.redAccent),
                _buildMsgCatIcon("@我的", Icons.alternate_email, Colors.blueAccent),
                _buildMsgCatIcon("评论互动", Icons.chat_bubble, Colors.teal),
                _buildMsgCatIcon("新增粉丝", Icons.person_add, Colors.amber),
              ],
            ),
          ),
          const SizedBox(height: 16),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16),
            child: Align(
              alignment: Alignment.centerLeft,
              child: Text("最近对话", style: TextStyle(color: Colors.white70, fontSize: 13, fontWeight: FontWeight.bold)),
            ),
          ),
          const SizedBox(height: 8),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: [
                _buildMsgTile("极客全栈架构师 ✓", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80", "微服务架构完整方案已同步！", "10:32", 2),
                _buildMsgTile("极速超跑集结", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", "这期V12发动机声浪太纯粹了！", "昨天", 0),
                _buildMsgTile("抖音小助手", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", "恭喜你的作品进入全站热门流量池！", "前天", 1),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMsgCatIcon(String label, IconData icon, Color color) {
    return GestureDetector(
      onTap: () => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("正在打开「$label」详细列表"))),
      child: Column(
        children: [
          Container(
            width: 50,
            height: 50,
            decoration: BoxDecoration(color: color.withOpacity(0.2), borderRadius: BorderRadius.circular(16)),
            child: Icon(icon, color: color, size: 24),
          ),
          const SizedBox(height: 6),
          Text(label, style: const TextStyle(color: Colors.white, fontSize: 11)),
        ],
      ),
    );
  }

  Widget _buildMsgTile(String name, String avatar, String lastMsg, String time, int badge) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: const Color(0xFF1E1E26), borderRadius: BorderRadius.circular(12), border: Border.all(color: Colors.white10)),
      child: Row(
        children: [
          CircleAvatar(radius: 24, backgroundImage: NetworkImage(avatar)),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 14)),
                    Text(time, style: const TextStyle(color: Colors.white38, fontSize: 11)),
                  ],
                ),
                const SizedBox(height: 4),
                Text(lastMsg, style: const TextStyle(color: Colors.white60, fontSize: 12), maxLines: 1, overflow: TextOverflow.ellipsis),
              ],
            ),
          ),
          if (badge > 0)
            Container(
              margin: const EdgeInsets.only(left: 8),
              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
              decoration: BoxDecoration(color: AppTheme.brandPink, borderRadius: BorderRadius.circular(10)),
              child: Text(badge.toString(), style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.bold)),
            ),
        ],
      ),
    );
  }

  // 4. 【我】独立全屏个人主页页面
  Widget _buildProfilePage() {
    return ProfileScreen(
      author: _videos.isNotEmpty ? _videos.first.author : AuthorInfo(
        userId: "u_me",
        nickname: "创作者小天 (我)",
        handle: "@creator_xiaotian",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        isVerified: true,
        bio: "全栈开发者 | 抖音深度用户与内容共创者",
        followers: "128.5w",
      ),
    );
  }

  // 5. 【首页·关注】独立全屏关注信息流页面
  Widget _buildFollowPage() {
    return SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                GestureDetector(onTap: _showSearchModal, child: const Icon(Icons.search, size: 26, color: Colors.white)),
                Row(
                  children: [
                    _buildTopTab("关注", true),
                    const SizedBox(width: 16),
                    GestureDetector(onTap: () => setState(() => _currentHomeTab = "商城"), child: _buildTopTab("商城", false)),
                    const SizedBox(width: 16),
                    GestureDetector(onTap: () => setState(() => _currentHomeTab = "推荐"), child: _buildTopTab("推荐", false)),
                    const SizedBox(width: 16),
                    GestureDetector(onTap: () => setState(() => _currentHomeTab = "直播"), child: const Text("直播", style: TextStyle(color: AppTheme.brandYellow, fontSize: 14, fontWeight: FontWeight.bold))),
                  ],
                ),
                const SizedBox(width: 26),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              itemCount: _videos.length,
              itemBuilder: (context, index) {
                final v = _videos[index];
                return Container(
                  margin: const EdgeInsets.only(bottom: 14),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(color: const Color(0xFF1E1E26), borderRadius: BorderRadius.circular(12), border: Border.all(color: Colors.white10)),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          CircleAvatar(radius: 20, backgroundImage: NetworkImage(v.author.avatarUrl)),
                          const SizedBox(width: 10),
                          Text(v.author.nickname, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 13)),
                        ],
                      ),
                      const SizedBox(height: 8),
                      Text(v.caption, style: const TextStyle(color: Colors.white, fontSize: 13)),
                      const SizedBox(height: 8),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(8),
                        child: Image.network(v.coverUrl, height: 160, width: double.infinity, fit: BoxFit.cover),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }

  // 6. 【首页·商城】独立全屏抖音商城页面
  Widget _buildMallPage() {
    return SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                GestureDetector(onTap: _showSearchModal, child: const Icon(Icons.search, size: 26, color: Colors.white)),
                Row(
                  children: [
                    GestureDetector(onTap: () => setState(() => _currentHomeTab = "关注"), child: _buildTopTab("关注", false)),
                    const SizedBox(width: 16),
                    _buildTopTab("商城", true),
                    const SizedBox(width: 16),
                    GestureDetector(onTap: () => setState(() => _currentHomeTab = "推荐"), child: _buildTopTab("推荐", false)),
                    const SizedBox(width: 16),
                    GestureDetector(onTap: () => setState(() => _currentHomeTab = "直播"), child: const Text("直播", style: TextStyle(color: AppTheme.brandYellow, fontSize: 14, fontWeight: FontWeight.bold))),
                  ],
                ),
                const Icon(Icons.shopping_cart_outlined, color: Colors.white, size: 24),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: [
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(colors: [Color(0xFFFF416C), Color(0xFFFF4B2B)]),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Row(
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text("百亿补贴 · 官方正品", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16)),
                            SizedBox(height: 4),
                            Text("全网爆款低至 1 折起，全场包邮退换无忧", style: TextStyle(color: Colors.white70, fontSize: 11)),
                          ],
                        ),
                      ),
                      Icon(Icons.local_mall, color: Colors.white, size: 36),
                    ],
                  ),
                ),
                const SizedBox(height: 16),
                const Text("精选好物爆款", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 15)),
                const SizedBox(height: 10),
                GridView.count(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  crossAxisCount: 2,
                  crossAxisSpacing: 10,
                  mainAxisSpacing: 10,
                  childAspectRatio: 0.85,
                  children: [
                    _buildMallCard("极客赛博光影氛围灯", "¥99", "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80"),
                    _buildMallCard("1:18 原厂授权合金超跑车模", "¥168", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80"),
                    _buildMallCard("钛合金双层户外保温杯", "¥129", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80"),
                    _buildMallCard("分布式高并发实战体系课", "¥69", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // 7. 【首页·直播】独立全屏官方直播间页面
  Widget _buildLivePage() {
    return Stack(
      children: [
        Positioned.fill(
          child: Image.network(
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
            fit: BoxFit.cover,
          ),
        ),
        Positioned.fill(child: Container(color: Colors.black45)),
        SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(20)),
                  child: Row(
                    children: [
                      const CircleAvatar(radius: 14, backgroundImage: NetworkImage("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80")),
                      const SizedBox(width: 6),
                      const Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text("极客架构师 🔴", style: TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.bold)),
                          Text("12.8w 本场人气", style: TextStyle(color: AppTheme.brandCyan, fontSize: 10)),
                        ],
                      ),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(color: AppTheme.brandPink, borderRadius: BorderRadius.circular(10)),
                        child: const Text("+关注", style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.bold)),
                      ),
                    ],
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.close, color: Colors.white, size: 24),
                  onPressed: () => setState(() => _currentHomeTab = "推荐"),
                ),
              ],
            ),
          ),
        ),
        Positioned(
          bottom: 20,
          left: 16,
          right: 16,
          child: Row(
            children: [
              Expanded(
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(20)),
                  child: const Text("说点什么...", style: TextStyle(color: Colors.white70, fontSize: 13)),
                ),
              ),
              const SizedBox(width: 10),
              CircleAvatar(backgroundColor: Colors.black54, child: IconButton(icon: const Icon(Icons.card_giftcard, color: Colors.amber, size: 20), onPressed: () => ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("🎁 送出「梦幻城堡」大礼！"))))),
              const SizedBox(width: 6),
              CircleAvatar(backgroundColor: Colors.black54, child: IconButton(icon: const Icon(Icons.favorite, color: AppTheme.brandPink, size: 20), onPressed: () => ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("❤️ 点赞 +1"))))),
            ],
          ),
        ),
      ],
    );
  }

  String _formatCount(int count) {
    if (count >= 10000) {
      return "${(count / 10000).toStringAsFixed(1)}w";
    }
    return count.toString();
  }

}
