# 抖音移动端技术架构设计与选型 (RFC)

## 1. 移动端技术栈选型对比与决策

| 选型维度 | 方案 A: Flutter (当前最优推荐) | 方案 B: React Native | 方案 C: 原生 Android/iOS 双端 |
| :--- | :--- | :--- | :--- |
| **语言与生态** | Dart 3.5+ / Flutter 3.24.5 | TypeScript / React 18+ | Kotlin (Jetpack) + Swift (SwiftUI) |
| **渲染管线** | Skia / Impeller 自绘引擎，60~120fps 无掉帧 | 基于原生平台组件桥接映射 | 原生系统直接调用 GPU |
| **播放器生态** | 官方 `video_player` + `better_player` (ExoPlayer/AVPlayer 封装) | `react-native-video` | 原生 `ijkplayer` / Google `Media3` |
| **开发与维护成本** | **一套代码双端交付，团队投入产出比极高** | 一套逻辑，部分需要原生桥接原生模块 | 需要两套独立研发团队，成本翻倍 |
| **环境现状** | **本地已具备完整安装 (`E:\flutter` 3.24.5)** | 需另配 CocoaPods 与 Metro | 需完整 Xcode / Android Studio |

> **架构结论**：选定 **Flutter 3.24.5** 作为跨平台移动端核心框架，完美利用本地已有工具链并实现极致流畅的 60fps 瀑布流手势体验。

---

## 2. 移动端分层架构设计 (MVVM + BLoC)

```mermaid
graph TD
    UI[Presentation Layer 表现层] --> State[BLoC / StateNotifier 状态流]
    State --> Domain[Domain Layer 业务逻辑与用例 UseCases]
    Domain --> Repo[Repository Layer 数据仓库抽象]
    Repo --> Local[Local Cache 离线缓存 / Hive / SharedPreferences]
    Repo --> Remote[Remote API Dio 网络客户端 / WebSocket IM]

    subgraph 播放引擎与预加载子系统
        UI --> PlayerController[视频播放控制器池 (3个复用实例)]
        PlayerController --> PreloadQueue[预加载调度队列 FIFO]
        PreloadQueue --> LocalHttpProxy[移动端本地流媒体代理 127.0.0.1:8080]
        LocalHttpProxy --> RemoteCDN[CDN 边缘节点视频流]
    end
```

---

## 3. 核心技术难点与解决方案

### 3.1 视频首帧秒开与边下边播（Preload & Cache）
- **痛点**：普通网络请求切换视频时，需要建立 TCP 连接、TLS 握手并解析 MP4 MOOV 头信息，造成 800ms~1.5s 的黑屏等待。
- **解法**：
  1. **首段预加载（Pre-caching First 1MB）**：
     - 当播放第 $i$ 个视频时，网络调度器在后台向第 $i+1$ 和 $i+2$ 个视频的 URL 发送 HTTP Range 请求，静默预拉取前 `1024KB` 数据写入本地磁盘。
  2. **本地回环代理（Local Proxy Server）**：
     - 播放器播放地址重定向为 `http://127.0.0.1:8080/video_stream.mp4`，代理服务器优先从本地已缓存文件提供数据，本地不足时无缝从网络流式填充。
  3. **3个播放器实例复用池（Player Instance Pool）**：
     - 当前视频（播放中）、上一个视频（保持暂停备切）、下一个视频（提前 prepare 完成并等待 play 触发），切换时无需重新分配解码上下文。

---

## 4. 移动端工程目录规划
```
douyin_mobile_app/
├── lib/
│   ├── main.dart                      # App 入口与全局主题
│   ├── core/                          # 核心底层（网络、拦截器、本地存储、常量）
│   │   ├── network/                   # Dio 封装与 Token 自动续期
│   │   ├── cache/                     # 视频本地缓存代理
│   │   └── theme/                     # 抖音黑曜石深色设计系统配色与间距
│   ├── features/                      # 业务模块垂直切分
│   │   ├── feed/                      # 首页短视频Feed（播放器复用、手势切换、信息层）
│   │   ├── interaction/               # 点赞动效、评论抽屉 BottomSheet、收藏分享
│   │   ├── camera/                    # 拍摄与视频发布（相机预览、滤镜、BGM裁切）
│   │   └── profile/                   # 个人中心（九宫格作品、粉丝统计）
│   └── shared/widgets/                # 全局通用组件（自定义Avatar、旋转黑胶唱片、爱心迸发）
├── assets/                            # 本地静态图标与Mock视频
└── pubspec.yaml                       # Flutter 依赖配置
```
