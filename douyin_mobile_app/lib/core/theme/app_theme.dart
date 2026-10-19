import 'package:flutter/material.dart';

/// 抖音移动端设计系统 Design Tokens
class AppTheme {
  // 品牌标志色
  static const Color brandPink = Color(0xFFFE2C55);
  static const Color brandCyan = Color(0xFF25F4EE);
  static const Color brandYellow = Color(0xFFFACE15);

  /// 🌙 黑曜石深色沉浸主题 (Dark Mode)
  static final ThemeData darkTheme = ThemeData(
    brightness: Brightness.dark,
    scaffoldBackgroundColor: const Color(0xFF000000),
    fontFamilyFallback: const ['PingFang SC', 'Microsoft YaHei', 'Heiti SC', 'sans-serif'],
    primaryColor: brandPink,
    colorScheme: const ColorScheme.dark(
      primary: brandPink,
      secondary: brandCyan,
      surface: Color(0xFF181820),
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: Colors.transparent,
      elevation: 0,
      iconTheme: IconThemeData(color: Colors.white),
    ),
    bottomNavigationBarTheme: const BottomNavigationBarThemeData(
      backgroundColor: Color(0xFF121215),
      selectedItemColor: Colors.white,
      unselectedItemColor: Color(0xFF888894),
      type: BottomNavigationBarType.fixed,
      elevation: 8,
    ),
    textTheme: const TextTheme(
      bodyLarge: TextStyle(color: Colors.white, fontSize: 16),
      bodyMedium: TextStyle(color: Color(0xFFF0F0F5), fontSize: 14),
      bodySmall: TextStyle(color: Color(0xFFA0A0AA), fontSize: 12),
      titleMedium: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16),
    ),
  );

  /// ☀️ 极简清新亮色主题 (Light Mode)
  static final ThemeData lightTheme = ThemeData(
    brightness: Brightness.light,
    scaffoldBackgroundColor: const Color(0xFFF8F9FA),
    fontFamilyFallback: const ['PingFang SC', 'Microsoft YaHei', 'Heiti SC', 'sans-serif'],
    primaryColor: brandPink,
    colorScheme: const ColorScheme.light(
      primary: brandPink,
      secondary: brandCyan,
      surface: Color(0xFFFFFFFF),
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: Colors.transparent,
      elevation: 0,
      iconTheme: IconThemeData(color: Color(0xFF111827)),
    ),
    bottomNavigationBarTheme: const BottomNavigationBarThemeData(
      backgroundColor: Color(0xFFFFFFFF),
      selectedItemColor: Color(0xFF111827),
      unselectedItemColor: Color(0xFF6B7280),
      type: BottomNavigationBarType.fixed,
      elevation: 8,
    ),
    textTheme: const TextTheme(
      bodyLarge: TextStyle(color: Color(0xFF111827), fontSize: 16),
      bodyMedium: TextStyle(color: Color(0xFF374151), fontSize: 14),
      bodySmall: TextStyle(color: Color(0xFF6B7280), fontSize: 12),
      titleMedium: TextStyle(color: Color(0xFF111827), fontWeight: FontWeight.bold, fontSize: 16),
    ),
  );
}

/// 全局响应式主题控制器
class ThemeController extends ChangeNotifier {
  static final ThemeController instance = ThemeController._internal();
  ThemeController._internal();

  ThemeMode _themeMode = ThemeMode.dark;
  ThemeMode get themeMode => _themeMode;

  bool get isDarkMode => _themeMode == ThemeMode.dark;

  void toggleTheme() {
    _themeMode = _themeMode == ThemeMode.dark ? ThemeMode.light : ThemeMode.dark;
    notifyListeners();
  }

  void setThemeMode(ThemeMode mode) {
    if (_themeMode != mode) {
      _themeMode = mode;
      notifyListeners();
    }
  }
}
