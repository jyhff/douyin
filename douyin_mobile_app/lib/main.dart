import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'core/theme/app_theme.dart';
import 'features/feed/presentation/feed_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  // Set transparent status bar on mobile
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
    ),
  );
  runApp(const DouyinApp());
}

class DouyinApp extends StatefulWidget {
  const DouyinApp({super.key});

  @override
  State<DouyinApp> createState() => _DouyinAppState();
}

class _DouyinAppState extends State<DouyinApp> {
  @override
  void initState() {
    super.initState();
    ThemeController.instance.addListener(_handleThemeChange);
  }

  @override
  void dispose() {
    ThemeController.instance.removeListener(_handleThemeChange);
    super.dispose();
  }

  void _handleThemeChange() {
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '抖音 (Douyin Mobile)',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeController.instance.themeMode,
      home: const FeedScreen(),
    );
  }
}
