import 'dart:math';
import 'package:flutter/material.dart';

class FlyingHeartBurst extends StatefulWidget {
  final Offset position;
  final VoidCallback onComplete;

  const FlyingHeartBurst({
    super.key,
    required this.position,
    required this.onComplete,
  });

  @override
  State<FlyingHeartBurst> createState() => _FlyingHeartBurstState();
}

class _FlyingHeartBurstState extends State<FlyingHeartBurst> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _scaleAnimation;
  late Animation<double> _opacityAnimation;
  late Animation<double> _yOffsetAnimation;
  late double _rotationAngle;

  @override
  void initState() {
    super.initState();
    _rotationAngle = (Random().nextDouble() - 0.5) * 0.6; // -17 to +17 degrees

    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 800),
    );

    _scaleAnimation = TweenSequence<double>([
      TweenSequenceItem(tween: Tween(begin: 0.3, end: 1.4).chain(CurveTween(curve: Curves.easeOutBack)), weight: 40),
      TweenSequenceItem(tween: Tween(begin: 1.4, end: 1.0).chain(CurveTween(curve: Curves.easeInOut)), weight: 60),
    ]).animate(_controller);

    _yOffsetAnimation = Tween<double>(begin: 0, end: -120).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeOut),
    );

    _opacityAnimation = TweenSequence<double>([
      TweenSequenceItem(tween: Tween(begin: 1.0, end: 1.0), weight: 60),
      TweenSequenceItem(tween: Tween(begin: 1.0, end: 0.0), weight: 40),
    ]).animate(_controller);

    _controller.forward().then((_) => widget.onComplete());
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
      left: widget.position.dx - 40,
      top: widget.position.dy - 40,
      child: AnimatedBuilder(
        animation: _controller,
        builder: (context, child) {
          return Transform.translate(
            offset: Offset(0, _yOffsetAnimation.value),
            child: Transform.rotate(
              angle: _rotationAngle,
              child: Transform.scale(
                scale: _scaleAnimation.value,
                child: Opacity(
                  opacity: _opacityAnimation.value,
                  child: const Icon(
                    Icons.favorite,
                    size: 80,
                    color: Color(0xFFFE2C55),
                    shadows: [
                      Shadow(
                        color: Color(0x99FE2C55),
                        blurRadius: 16,
                      ),
                    ],
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
