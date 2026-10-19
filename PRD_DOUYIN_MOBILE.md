# 抖音移动端 App 产品需求规格说明书 (PRD)

| 项目名称 | 抖音移动端核心体验重构与工程化实现 | 版本号 | v1.0.0-MVP |
| :--- | :--- | :--- | :--- |
| **文档作者** | 架构与产品工程团队 | **适用端** | iOS / Android (Flutter 跨平台) |
| **设计原型** | [douyin_mobile_prototype.pen](file:///c:/Users/Admin/Desktop/DouYin/douyin_mobile_prototype.pen) | **状态** | 需求基线已锁定 |

---

## 一、 产品背景与目标
打造一款以移动端**竖屏 9:16** 为核心视口的国民级沉浸式短视频应用。
- **核心体验指标**：
  - 视频首帧秒开耗时 $< 200\text{ms}$
  - 上下滑动切集无感卡顿（掉帧率 $< 0.5\%$）
  - 双击点赞响应延迟 $< 16\text{ms}$（60fps 动效满帧）

---

## 二、 移动端核心页面与功能矩阵 (Features)

```mermaid
graph TD
    App[抖音移动端 App] --> TabFeed[1. 首页沉浸式Feed]
    App --> TabFriend[2. 朋友与同城]
    App --> TabPublish[3. 居中发布拍摄]
    App --> TabMessage[4. 消息与通知中心]
    App --> TabProfile[5. 个人主页 我]

    TabFeed --> F1[全屏竖屏上下滑切视频 PageView]
    TabFeed --> F2[双击屏幕触发粒子爱心迸发]
    TabFeed --> F3[右侧悬浮互动栏: 头像/点赞/评论/收藏/分享/旋转唱片]
    TabFeed --> F4[底部作者昵称/文案/#话题标签展开/BGM]

    TabFeed --> BottomSheet[半屏评论抽屉 BottomSheet]
    BottomSheet --> C1[二级折叠评论展开]
    BottomSheet --> C2[评论点赞与@好友]
    BottomSheet --> C3[即时输入框与Emoji表情包]

    TabPublish --> P1[摄像头预览与前后镜头翻转]
    TabPublish --> P2[视频倒计时/多倍速录制]
    TabPublish --> P3[本地相册多选视频/图片导入]
    TabPublish --> P4[添加BGM音频剪辑与配乐]

    TabProfile --> U1[个性封面墙与头像展示]
    TabProfile --> U2[获赞数/关注数/粉丝数数据面板]
    TabProfile --> U3[作品/私密/喜欢 Tab三栏切换]
```

---

## 三、 用户核心交互手势定义 (Gestures)

| 手势动作 | 作用区域 | 交互反馈 |
| :--- | :--- | :--- |
| **垂直向上滑动 (Swipe Up)** | 屏幕任意区域 | 切换至推荐列表的下一个视频，前一个视频立即释放解码资源，后后视频静默预加载 |
| **垂直向下滑动 (Swipe Down)** | 屏幕任意区域 | 切换回上一个视频，恢复播放进度 |
| **屏幕双击 (Double Tap)** | 视频画面任意位置 | 在手指触控坐标处迸发红粉色爱心粒子飞升动效，点赞数实时 +1 |
| **单击 (Single Tap)** | 视频画面中心 | 暂停/继续播放，屏幕中央短暂浮现半透明大三角形播放图标 |
| **长按 (Long Press)** | 视频画面 | 唤起底部「不感兴趣 / 缓存视频 / 投屏 / 举报」弹窗 |
| **点击评论图标** | 右侧工具栏 | 底部向上滑出半屏评论 BottomSheet，视频画面缩小上移或保持背景 |

---

## 四、 非功能性工程质量指标 (NFR)
1. **网络弱网适配**：在 3G / 地铁高丢包环境下自动降码率至 540P，保障音频不间断。
2. **功耗与发热**：硬件解码（MediaCodec / VideoToolbox）优先，降低 CPU 占用至 $15\%$ 以下。
3. **缓存上限管理**：移动端本地视频分块缓存 LRU 上限限制为 $1.5\text{GB}$，超出自动淘汰最远播放内容。
