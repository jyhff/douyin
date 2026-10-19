import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import '../../models/video_model.dart';
import '../../../../core/theme/app_theme.dart';
import '../../../../shared/widgets/flying_heart_burst.dart';
import '../../../comments/presentation/comments_sheet.dart';
import '../../../profile/presentation/profile_screen.dart';

class VideoPlayerItem extends StatefulWidget {
  final VideoItem video;
  final bool isCurrent;

  const VideoPlayerItem({
    super.key,
    required this.video,
    required this.isCurrent,
  });

  @override
  State<VideoPlayerItem> createState() => _VideoPlayerItemState();
}

class _VideoPlayerItemState extends State<VideoPlayerItem> with SingleTickerProviderStateMixin {
  VideoPlayerController? _controller;
  bool _isInitialized = false;
  bool _isPlaying = true;
  final List<Offset> _heartPositions = [];
  late AnimationController _discAnimationController;

  @override
  void initState() {
    super.initState();
    _discAnimationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 6),
    )..repeat();

    _initPlayer();
  }

  void _initPlayer() {
    _controller = VideoPlayerController.networkUrl(Uri.parse(widget.video.videoUrl))
      ..setLooping(true)
      ..initialize().then((_) {
        if (mounted) {
          setState(() {
            _isInitialized = true;
          });
          if (widget.isCurrent) {
            _controller?.play();
          }
        }
      });
  }

  @override
  void didUpdateWidget(covariant VideoPlayerItem oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.isCurrent != oldWidget.isCurrent) {
      if (widget.isCurrent) {
        _controller?.play();
        _discAnimationController.repeat();
      } else {
        _controller?.pause();
        _discAnimationController.stop();
      }
    }
  }

  @override
  void dispose() {
    _controller?.dispose();
    _discAnimationController.dispose();
    super.dispose();
  }

  void _handleDoubleTap(TapDownDetails details) {
    setState(() {
      _heartPositions.add(details.localPosition);
      if (!widget.video.isLiked) {
        widget.video.isLiked = true;
        widget.video.likes += 1;
      }
    });
  }

  void _togglePlayPause() {
    if (_controller == null) return;
    setState(() {
      if (_controller!.value.isPlaying) {
        _controller!.pause();
        _isPlaying = false;
        _discAnimationController.stop();
      } else {
        _controller!.play();
        _isPlaying = true;
        _discAnimationController.repeat();
      }
    });
  }

  String _formatCount(int count) {
    if (count >= 10000) {
      return "${(count / 10000).toStringAsFixed(1)}w";
    }
    return count.toString();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Stack(
      children: [
        // Background Video / Cover
        Positioned.fill(
          child: GestureDetector(
            onTap: _togglePlayPause,
            onDoubleTapDown: _handleDoubleTap,
            onDoubleTap: () {},
            child: Container(
              color: isDark ? Colors.black : const Color(0xFFF0F2F5),
              child: _isInitialized && _controller != null
                  ? Center(
                      child: AspectRatio(
                        aspectRatio: _controller!.value.aspectRatio,
                        child: VideoPlayer(_controller!),
                      ),
                    )
                  : Image.network(
                      widget.video.coverUrl,
                      fit: BoxFit.cover,
                      errorBuilder: (_, __, ___) => Container(color: Colors.black26),
                    ),
            ),
          ),
        ),

        // Gradient Overlay
        Positioned.fill(
          child: IgnorePointer(
            child: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [
                    Colors.black.withOpacity(0.3),
                    Colors.transparent,
                    Colors.transparent,
                    Colors.black.withOpacity(0.75),
                  ],
                  stops: const [0.0, 0.2, 0.6, 1.0],
                ),
              ),
            ),
          ),
        ),

        // Play/Pause central indicator
        if (!_isPlaying)
          Center(
            child: Container(
              width: 72,
              height: 72,
              decoration: BoxDecoration(
                color: Colors.black.withOpacity(0.5),
                shape: BoxShape.circle,
              ),
              child: const Icon(
                Icons.play_arrow_rounded,
                size: 48,
                color: Colors.white,
              ),
            ),
          ),

        // Double tap flying heart bursts
        ..._heartPositions.map(
          (pos) => FlyingHeartBurst(
            position: pos,
            onComplete: () {
              setState(() {
                _heartPositions.remove(pos);
              });
            },
          ),
        ),

        // Bottom Info Area
        Positioned(
          left: 16,
          bottom: 24,
          right: 80,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              // Author Nickname
              Row(
                children: [
                  Text(
                    widget.video.author.nickname,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      shadows: [Shadow(color: Colors.black54, blurRadius: 4)],
                    ),
                  ),
                  if (widget.video.author.isVerified) ...[
                    const SizedBox(width: 4),
                    Container(
                      padding: const EdgeInsets.all(2),
                      decoration: const BoxDecoration(
                        color: AppTheme.brandYellow,
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(Icons.check, size: 10, color: Colors.black),
                    ),
                  ],
                ],
              ),
              const SizedBox(height: 8),

              // Caption
              Text(
                widget.video.caption,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 13,
                  height: 1.35,
                  shadows: [Shadow(color: Colors.black54, blurRadius: 4)],
                ),
                maxLines: 3,
                overflow: TextOverflow.ellipsis,
              ),
              const SizedBox(height: 6),

              // Hashtags
              Wrap(
                spacing: 6,
                children: widget.video.tags.map((tag) {
                  return Text(
                    tag,
                    style: const TextStyle(
                      color: AppTheme.brandCyan,
                      fontSize: 13,
                      fontWeight: FontWeight.w600,
                      shadows: [Shadow(color: Colors.black54, blurRadius: 4)],
                    ),
                  );
                }).toList(),
              ),
              const SizedBox(height: 8),

              // Music Marquee Row
              GestureDetector(
                onTap: _showMusicDetailSheet,
                child: Row(
                  children: [
                    const Icon(Icons.music_note, size: 15, color: Colors.white70),
                    const SizedBox(width: 4),
                    Expanded(
                      child: Text(
                        widget.video.musicName,
                        style: const TextStyle(
                          color: Colors.white70,
                          fontSize: 12,
                          shadows: [Shadow(color: Colors.black54, blurRadius: 4)],
                        ),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 8),

              // E-commerce Yellow Cart Tag
              GestureDetector(
                onTap: _showProductDetailSheet,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: AppTheme.brandPink.withOpacity(0.15),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: AppTheme.brandPink.withOpacity(0.5), width: 1),
                  ),
                  child: const Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.shopping_bag_outlined, size: 14, color: AppTheme.brandPink),
                      SizedBox(width: 4),
                      Text(
                        "视频同款精选好物 · 券后包邮",
                        style: TextStyle(
                          color: AppTheme.brandPink,
                          fontSize: 11,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),

        // Right Floating Action Toolbar
        Positioned(
          right: 12,
          bottom: 24,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Avatar & Follow
              GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => ProfileScreen(author: widget.video.author),
                    ),
                  );
                },
                child: Stack(
                  clipBehavior: Clip.none,
                  children: [
                    CircleAvatar(
                      radius: 24,
                      backgroundColor: Colors.white,
                      child: CircleAvatar(
                        radius: 22,
                        backgroundImage: NetworkImage(widget.video.author.avatarUrl),
                      ),
                    ),
                    Positioned(
                      bottom: -6,
                      left: 14,
                      child: GestureDetector(
                        onTap: () {
                          setState(() {
                            widget.video.isFollowed = !widget.video.isFollowed;
                          });
                        },
                        child: Container(
                          width: 20,
                          height: 20,
                          decoration: BoxDecoration(
                            color: widget.video.isFollowed ? Colors.white38 : AppTheme.brandPink,
                            shape: BoxShape.circle,
                            border: Border.all(color: Colors.black, width: 1.5),
                          ),
                          child: Icon(
                            widget.video.isFollowed ? Icons.check : Icons.add,
                            size: 14,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 18),

              // Like Button
              _buildActionButton(
                icon: widget.video.isLiked ? Icons.favorite : Icons.favorite,
                iconColor: widget.video.isLiked ? AppTheme.brandPink : Colors.white,
                label: _formatCount(widget.video.likes),
                onTap: () {
                  setState(() {
                    widget.video.isLiked = !widget.video.isLiked;
                    widget.video.likes += widget.video.isLiked ? 1 : -1;
                  });
                },
              ),
              const SizedBox(height: 16),

              // Comments Button (无气泡尖嘴，采用原生官方圆润胶囊三点规范)
              _buildCommentButton(
                label: _formatCount(widget.video.commentsCount),
                onTap: () {
                  CommentsBottomSheet.show(context, widget.video, (newCommentText) {
                    setState(() {
                      widget.video.comments.insert(
                        0,
                        VideoComment(
                          id: DateTime.now().millisecondsSinceEpoch.toString(),
                          userName: "创作者小天 (我)",
                          avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                          content: newCommentText,
                          timeAgo: "刚刚",
                        ),
                      );
                      widget.video.commentsCount += 1;
                    });
                  });
                },
              ),
              const SizedBox(height: 16),

              // Favorite/Collect Button
              _buildActionButton(
                icon: widget.video.isCollected ? Icons.star_rounded : Icons.star_border_rounded,
                iconColor: widget.video.isCollected ? AppTheme.brandYellow : Colors.white,
                label: _formatCount(widget.video.collects),
                onTap: () {
                  setState(() {
                    widget.video.isCollected = !widget.video.isCollected;
                    widget.video.collects += widget.video.isCollected ? 1 : -1;
                  });
                },
              ),
              const SizedBox(height: 16),

              // Share Button
              _buildActionButton(
                icon: Icons.share_rounded,
                iconColor: Colors.white,
                label: _formatCount(widget.video.shares),
                onTap: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text("分享链接已复制到剪贴板！")),
                  );
                },
              ),
              const SizedBox(height: 18),

              // Rotating Vinyl Disc with tap to open music detail
              GestureDetector(
                onTap: _showMusicDetailSheet,
                child: RotationTransition(
                  turns: _discAnimationController,
                  child: Container(
                    width: 44,
                    height: 44,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: const Color(0xFF1E1E24),
                      border: Border.all(color: const Color(0xFF33333E), width: 5),
                      boxShadow: const [BoxShadow(color: Colors.black45, blurRadius: 6)],
                    ),
                    child: Center(
                      child: CircleAvatar(
                        radius: 12,
                        backgroundImage: NetworkImage(widget.video.author.avatarUrl),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),

        // Progress indicator at the very bottom
        if (_controller != null && _isInitialized)
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: VideoProgressIndicator(
              _controller!,
              allowScrubbing: true,
              colors: const VideoProgressColors(
                playedColor: AppTheme.brandPink,
                bufferedColor: Colors.white24,
                backgroundColor: Colors.transparent,
              ),
            ),
          ),
      ],
    );
  }

  Widget _buildCommentButton({
    required String label,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Column(
        children: [
          SizedBox(
            width: 44,
            height: 38,
            child: Center(
              child: Container(
                width: 32,
                height: 22,
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(11),
                  boxShadow: const [
                    BoxShadow(color: Colors.black45, blurRadius: 4, offset: Offset(0, 2)),
                  ],
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(width: 3, height: 3, decoration: const BoxDecoration(color: Colors.black87, shape: BoxShape.circle)),
                    const SizedBox(width: 3),
                    Container(width: 3, height: 3, decoration: const BoxDecoration(color: Colors.black87, shape: BoxShape.circle)),
                    const SizedBox(width: 3),
                    Container(width: 3, height: 3, decoration: const BoxDecoration(color: Colors.black87, shape: BoxShape.circle)),
                  ],
                ),
              ),
            ),
          ),
          const SizedBox(height: 3),
          Text(
            label,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 11,
              fontWeight: FontWeight.bold,
              shadows: [Shadow(color: Colors.black54, blurRadius: 4)],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildActionButton({
    required IconData icon,
    required Color iconColor,
    required String label,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Column(
        children: [
          SizedBox(
            width: 44,
            height: 38,
            child: Center(
              child: Icon(
                icon,
                size: 38,
                color: iconColor,
                shadows: const [
                  Shadow(color: Colors.black54, blurRadius: 4, offset: Offset(0, 2)),
                ],
              ),
            ),
          ),
          const SizedBox(height: 3),
          Text(
            label,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 11,
              fontWeight: FontWeight.bold,
              shadows: [Shadow(color: Colors.black54, blurRadius: 4)],
            ),
          ),
        ],
      ),
    );
  }

  void _showMusicDetailSheet() {
    showModalBottomSheet(
      context: context,
      backgroundColor: Colors.transparent,
      isScrollControlled: true,
      builder: (ctx) {
        return Container(
          height: MediaQuery.of(context).size.height * 0.7,
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
              Row(
                children: [
                  CircleAvatar(
                    radius: 36,
                    backgroundImage: NetworkImage(widget.video.author.avatarUrl),
                  ),
                  const SizedBox(width: 16),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          widget.video.musicName,
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          "原声创作者 · ${widget.video.author.nickname}",
                          style: const TextStyle(color: Colors.white54, fontSize: 13),
                        ),
                        const SizedBox(height: 4),
                        const Text(
                          "🔥 18.6w 人使用此原声创作",
                          style: TextStyle(color: AppTheme.brandCyan, fontSize: 12),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              Row(
                children: [
                  Expanded(
                    child: ElevatedButton.icon(
                      onPressed: () {
                        Navigator.pop(ctx);
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text("⭐ 已收藏原声音频至个人主页！")),
                        );
                      },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFF282830),
                        foregroundColor: Colors.white,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                      ),
                      icon: const Icon(Icons.star_border, size: 18),
                      label: const Text("收藏音乐"),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: ElevatedButton.icon(
                      onPressed: () {
                        Navigator.pop(ctx);
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text("🎵 已套用同款配乐，进入拍摄！")),
                        );
                      },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppTheme.brandPink,
                        foregroundColor: Colors.white,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                      ),
                      icon: const Icon(Icons.camera_alt, size: 18),
                      label: const Text("拍同款"),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              const Text(
                "原声聚合视频",
                style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 14),
              ),
              const SizedBox(height: 10),
              Expanded(
                child: GridView.builder(
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 3,
                    crossAxisSpacing: 6,
                    mainAxisSpacing: 6,
                    childAspectRatio: 9 / 16,
                  ),
                  itemCount: 6,
                  itemBuilder: (_, i) {
                    return ClipRRect(
                      borderRadius: BorderRadius.circular(6),
                      child: Image.network(
                        widget.video.coverUrl,
                        fit: BoxFit.cover,
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  void _showProductDetailSheet() {
    showModalBottomSheet(
      context: context,
      backgroundColor: Colors.transparent,
      isScrollControlled: true,
      builder: (ctx) {
        return Container(
          height: MediaQuery.of(context).size.height * 0.65,
          decoration: const BoxDecoration(
            color: Color(0xFF1E1E24),
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
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.network(
                  widget.video.coverUrl,
                  height: 160,
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(height: 12),
              const Row(
                children: [
                  Text("¥", style: TextStyle(color: AppTheme.brandPink, fontSize: 16, fontWeight: FontWeight.bold)),
                  Text("99", style: TextStyle(color: AppTheme.brandPink, fontSize: 26, fontWeight: FontWeight.bold)),
                  SizedBox(width: 8),
                  Text("¥299", style: TextStyle(color: Colors.white38, decoration: TextDecoration.lineThrough, fontSize: 13)),
                  Spacer(),
                  Chip(
                    label: Text("券后立减200", style: TextStyle(color: AppTheme.brandPink, fontSize: 11)),
                    backgroundColor: Color(0x33FE2C55),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              const Text(
                "极客赛博机械光影氛围灯 | 智能声光同频联动",
                style: TextStyle(color: Colors.white, fontSize: 15, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 4),
              const Text("已售 3.6万件 · 99.8% 好评率", style: TextStyle(color: Colors.white54, fontSize: 12)),
              const Spacer(),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () {
                        Navigator.pop(ctx);
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text("🛒 已加入购物车！")),
                        );
                      },
                      style: OutlinedButton.styleFrom(
                        foregroundColor: Colors.white,
                        side: const BorderSide(color: Colors.white24),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
                        padding: const EdgeInsets.symmetric(vertical: 12),
                      ),
                      child: const Text("加入购物车"),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: ElevatedButton(
                      onPressed: () {
                        Navigator.pop(ctx);
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text("🎉 领券成功！已为你生成极速免密支付订单！")),
                        );
                      },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppTheme.brandPink,
                        foregroundColor: Colors.white,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
                        padding: const EdgeInsets.symmetric(vertical: 12),
                      ),
                      child: const Text("立即领券购买"),
                    ),
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }
}
