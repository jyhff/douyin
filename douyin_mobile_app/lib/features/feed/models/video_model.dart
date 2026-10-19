/// 视频实体模型 (对应 api_contract.yaml)
class VideoItem {
  final String id;
  final String title;
  final String caption;
  final List<String> tags;
  final String videoUrl;
  final String coverUrl;
  final String musicName;
  final AuthorInfo author;
  int likes;
  int commentsCount;
  int shares;
  int collects;
  bool isLiked;
  bool isCollected;
  bool isFollowed;
  final List<VideoComment> comments;

  VideoItem({
    required this.id,
    required this.title,
    required this.caption,
    required this.tags,
    required this.videoUrl,
    required this.coverUrl,
    required this.musicName,
    required this.author,
    required this.likes,
    required this.commentsCount,
    required this.shares,
    required this.collects,
    this.isLiked = false,
    this.isCollected = false,
    this.isFollowed = false,
    required this.comments,
  });
}

class AuthorInfo {
  final String userId;
  final String nickname;
  final String handle;
  final String avatarUrl;
  final bool isVerified;
  final String bio;
  final String followers;

  AuthorInfo({
    required this.userId,
    required this.nickname,
    required this.handle,
    required this.avatarUrl,
    this.isVerified = false,
    required this.bio,
    required this.followers,
  });
}

class VideoComment {
  final String id;
  final String userName;
  final String avatarUrl;
  final String content;
  final String timeAgo;
  int likes;
  bool isLiked;

  VideoComment({
    required this.id,
    required this.userName,
    required this.avatarUrl,
    required this.content,
    required this.timeAgo,
    this.likes = 0,
    this.isLiked = false,
  });
}
