import 'package:flutter/material.dart';
import '../../../../core/theme/app_theme.dart';

class CameraScreen extends StatefulWidget {
  const CameraScreen({super.key});

  @override
  State<CameraScreen> createState() => _CameraScreenState();
}

class _CameraScreenState extends State<CameraScreen> with SingleTickerProviderStateMixin {
  bool _isRecording = false;
  late AnimationController _pulseController;

  @override
  void initState() {
    super.initState();
    _pulseController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1000),
    )..repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulseController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          // Simulated Camera Viewfinder
          Positioned.fill(
            child: Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Color(0xFF1A1A24), Color(0xFF0D0D12)],
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                ),
              ),
              child: Center(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(
                      Icons.camera_alt_outlined,
                      size: 64,
                      color: Colors.white.withOpacity(0.3),
                    ),
                    const SizedBox(height: 12),
                    Text(
                      "高清取景器预览中",
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.4),
                        fontSize: 14,
                        letterSpacing: 1.2,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),

          // Top Header Tools
          Positioned(
            top: MediaQuery.of(context).padding.top + 10,
            left: 16,
            right: 16,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                IconButton(
                  icon: const Icon(Icons.close, color: Colors.white, size: 28),
                  onPressed: () => Navigator.pop(context),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                  decoration: BoxDecoration(
                    color: Colors.black54,
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: const Row(
                    children: [
                      Icon(Icons.music_note, color: Colors.white, size: 16),
                      SizedBox(width: 4),
                      Text("选择音乐", style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600)),
                    ],
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.flip_camera_ios_outlined, color: Colors.white, size: 26),
                  onPressed: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(duration: Duration(milliseconds: 800), content: Text("已翻转前后摄像头")),
                    );
                  },
                ),
              ],
            ),
          ),

          // Right Filter Sidebar
          Positioned(
            top: 120,
            right: 16,
            child: Column(
              children: [
                _buildToolIcon(Icons.speed, "倍速"),
                const SizedBox(height: 18),
                _buildToolIcon(Icons.face_retouching_natural, "美颜"),
                const SizedBox(height: 18),
                _buildToolIcon(Icons.filter_vintage_outlined, "滤镜"),
                const SizedBox(height: 18),
                _buildToolIcon(Icons.timer_outlined, "倒计时"),
              ],
            ),
          ),

          // Bottom Shutter Button & Modes
          Positioned(
            bottom: 40,
            left: 0,
            right: 0,
            child: Column(
              children: [
                // Mode Select
                const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text("拍照", style: TextStyle(color: Colors.white54, fontSize: 14)),
                    SizedBox(width: 24),
                    Text("15秒", style: TextStyle(color: Colors.white, fontSize: 15, fontWeight: FontWeight.bold)),
                    SizedBox(width: 24),
                    Text("60秒", style: TextStyle(color: Colors.white54, fontSize: 14)),
                    SizedBox(width: 24),
                    Text("快拍", style: TextStyle(color: Colors.white54, fontSize: 14)),
                  ],
                ),
                const SizedBox(height: 28),

                // Record Button
                GestureDetector(
                  onTap: () {
                    setState(() {
                      _isRecording = !_isRecording;
                    });
                    if (!_isRecording) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text("🚀 视频录制完成，已进入发布编辑流！")),
                      );
                      Navigator.pop(context);
                    }
                  },
                  child: Container(
                    width: 80,
                    height: 80,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(color: Colors.white, width: 4),
                    ),
                    padding: const EdgeInsets.all(6),
                    child: Container(
                      decoration: BoxDecoration(
                        color: _isRecording ? Colors.red : AppTheme.brandPink,
                        shape: _isRecording ? BoxShape.rectangle : BoxShape.circle,
                        borderRadius: _isRecording ? BorderRadius.circular(8) : null,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildToolIcon(IconData icon, String label) {
    return Column(
      children: [
        Icon(icon, color: Colors.white, size: 26),
        const SizedBox(height: 2),
        Text(
          label,
          style: const TextStyle(color: Colors.white, fontSize: 11, shadows: [Shadow(color: Colors.black54, blurRadius: 4)]),
        ),
      ],
    );
  }
}
