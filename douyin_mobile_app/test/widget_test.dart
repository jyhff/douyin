import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:douyin_mobile_app/core/theme/app_theme.dart';
import 'package:douyin_mobile_app/features/feed/data/mock_video_repository.dart';

void main() {
  group('Douyin Mobile App Unit Tests', () {
    test('ThemeController toggles between Dark and Light mode correctly', () {
      final controller = ThemeController.instance;
      expect(controller.themeMode, ThemeMode.dark);
      expect(controller.isDarkMode, true);

      controller.toggleTheme();
      expect(controller.themeMode, ThemeMode.light);
      expect(controller.isDarkMode, false);

      controller.toggleTheme();
      expect(controller.themeMode, ThemeMode.dark);
      expect(controller.isDarkMode, true);
    });

    test('MockVideoRepository returns valid initial videos with comments', () {
      final videos = MockVideoRepository.getInitialVideos();
      expect(videos.isNotEmpty, true);
      expect(videos.length, greaterThanOrEqualTo(3));

      final firstVideo = videos.first;
      expect(firstVideo.id, 'v_101');
      expect(firstVideo.author.nickname, '极客全栈架构师');
      expect(firstVideo.likes, greaterThan(100000));
      expect(firstVideo.comments.isNotEmpty, true);
    });
  });
}
