import 'package:flutter/material.dart';
import '../../../../core/theme/app_theme.dart';
import '../../feed/models/video_model.dart';

class ProfileScreen extends StatelessWidget {
  final AuthorInfo author;

  const ProfileScreen({
    super.key,
    required this.author,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      backgroundColor: isDark ? Colors.black : const Color(0xFFF8F9FA),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back_ios_new, color: isDark ? Colors.white : Colors.black87),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          author.nickname,
          style: TextStyle(
            color: isDark ? Colors.white : Colors.black87,
            fontSize: 16,
            fontWeight: FontWeight.bold,
          ),
        ),
        centerTitle: true,
        actions: [
          IconButton(
            icon: Icon(Icons.share_outlined, color: isDark ? Colors.white : Colors.black87),
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text("已复制主页分享链接")),
              );
            },
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Banner Background
            Container(
              height: 120,
              width: double.infinity,
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Color(0xFF2C3E50), Color(0xFF000000)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
              ),
            ),

            // Profile Header Info
            Transform.translate(
              offset: const Offset(0, -35),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        CircleAvatar(
                          radius: 40,
                          backgroundColor: Colors.white,
                          child: CircleAvatar(
                            radius: 37,
                            backgroundImage: NetworkImage(author.avatarUrl),
                          ),
                        ),
                        const Spacer(),
                        ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppTheme.brandPink,
                            foregroundColor: Colors.white,
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(6)),
                            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 10),
                          ),
                          child: const Text("+ 关注", style: TextStyle(fontWeight: FontWeight.bold)),
                        ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    Text(
                      author.nickname,
                      style: TextStyle(
                        color: isDark ? Colors.white : Colors.black87,
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      author.handle,
                      style: TextStyle(color: isDark ? Colors.white54 : Colors.black45, fontSize: 13),
                    ),
                    const SizedBox(height: 12),
                    Text(
                      author.bio,
                      style: TextStyle(
                        color: isDark ? Colors.white70 : Colors.black87,
                        fontSize: 14,
                        height: 1.4,
                      ),
                    ),
                    const SizedBox(height: 16),

                    // Stats Row
                    Row(
                      children: [
                        _buildStatItem("获赞", "1420w", isDark),
                        const SizedBox(width: 24),
                        _buildStatItem("关注", "42", isDark),
                        const SizedBox(width: 24),
                        _buildStatItem("粉丝", author.followers, isDark),
                      ],
                    ),
                  ],
                ),
              ),
            ),

            const Divider(height: 1),

            // Works Grid Tabs
            DefaultTabController(
              length: 3,
              child: Column(
                children: [
                  TabBar(
                    labelColor: isDark ? Colors.white : Colors.black,
                    unselectedLabelColor: isDark ? Colors.white54 : Colors.black45,
                    indicatorColor: AppTheme.brandPink,
                    indicatorWeight: 2.5,
                    tabs: const [
                      Tab(text: "作品 12"),
                      Tab(text: "私密"),
                      Tab(text: "喜欢 128"),
                    ],
                  ),
                  SizedBox(
                    height: 400,
                    child: TabBarView(
                      children: [
                        _buildWorksGrid(isDark),
                        Center(child: Text("暂无私密作品", style: TextStyle(color: isDark ? Colors.white54 : Colors.black45))),
                        Center(child: Text("喜欢内容已隐藏", style: TextStyle(color: isDark ? Colors.white54 : Colors.black45))),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildStatItem(String label, String count, bool isDark) {
    return Row(
      children: [
        Text(
          count,
          style: TextStyle(
            color: isDark ? Colors.white : Colors.black,
            fontSize: 16,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(width: 4),
        Text(
          label,
          style: TextStyle(
            color: isDark ? Colors.white54 : Colors.black45,
            fontSize: 12,
          ),
        ),
      ],
    );
  }

  Widget _buildWorksGrid(bool isDark) {
    return GridView.builder(
      padding: const EdgeInsets.all(2),
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        crossAxisSpacing: 2,
        mainAxisSpacing: 2,
        childAspectRatio: 0.75,
      ),
      itemCount: 9,
      itemBuilder: (context, index) {
        return Container(
          color: isDark ? const Color(0xFF1F1F24) : const Color(0xFFE5E7EB),
          child: Stack(
            children: [
              Positioned.fill(
                child: Image.network(
                  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80",
                  fit: BoxFit.cover,
                  errorBuilder: (_, __, ___) => Container(color: Colors.black26),
                ),
              ),
              const Positioned(
                bottom: 6,
                left: 6,
                child: Row(
                  children: [
                    Icon(Icons.play_arrow_outlined, size: 14, color: Colors.white),
                    SizedBox(width: 2),
                    Text(
                      "12.4w",
                      style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w600),
                    ),
                  ],
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
