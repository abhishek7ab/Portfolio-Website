<div align="center">

# 🏓 Neon Ping Pong — Arcade Edition

> A high-performance, retro-futuristic arcade Ping Pong game built in Python using Pygame, featuring dynamic AI difficulty, particle collision effects, and smooth 60 FPS mechanics.

[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Pygame](https://img.shields.io/badge/Pygame-2.5+-E10098?style=for-the-badge&logo=game-and-watch&logoColor=white)](https://www.pygame.org/)
[![Platform](https://img.shields.io/badge/Platform-Windows%20|%20macOS%20|%20Linux-0078D6?style=for-the-badge)](https://github.com/abhishek7ab/Ping_Pong)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

- **🎮 60 FPS Fluid Physics Engine**: Precision velocity, angle rebounds, and smooth collision detection for competitive rallies.
- **⚡ Dynamic Acceleration**: Ball speed incrementally ramps up (`+0.8` per rally) to test player reflexes.
- **🤖 Intelligent AI Paddle**: Responsive computer opponent with natural reaction tracking for engaging single-player gameplay.
- **✨ Particle Rebound Effects**: Eye-catching visual bursts upon ball-to-paddle and ball-to-wall collisions.
- **🏆 Complete Game State System**: Clean menu transitions, in-game scoreboard, pause state, and victory sequence (First to 15 points wins!).

---

## 🕹️ Controls

| Action | Left Player (Player 1) | Right Player (Player 2 / AI) |
| :--- | :--- | :--- |
| **Move Up** | <kbd>W</kbd> | <kbd>Up Arrow ↑</kbd> |
| **Move Down** | <kbd>S</kbd> | <kbd>Down Arrow ↓</kbd> |
| **Pause / Resume** | <kbd>Space</kbd> or <kbd>P</kbd> | <kbd>Space</kbd> or <kbd>P</kbd> |
| **Restart Game** | <kbd>R</kbd> | <kbd>R</kbd> |
| **Exit** | <kbd>Esc</kbd> | <kbd>Esc</kbd> |

---

## 🚀 Quick Start

### Prerequisites
Make sure you have Python 3.8 or higher installed:
```bash
python --version
```

### 1. Clone the Repository
```bash
git clone https://github.com/abhishek7ab/Ping_Pong.git
cd Ping_Pong
```

### 2. Install Pygame
```bash
pip install pygame
```

### 3. Launch the Game
```bash
python Ping_Pong.py
```

---

## 🏗️ Architecture & Logic

```text
Ping_Pong/
├── Ping_Pong.py        # Core Pygame loop, physics engine, particle system, and UI
└── README.md           # Documentation
```

- **Collision Mechanics**: Uses bounding box intersection (`pygame.Rect.colliderect`) combined with delta offset angle calculations.
- **AI Logic**: Tracks ball Y-intercept with configurable tracking velocity to mimic human anticipation.
- **Particle System**: Spawns velocity-decaying RGB particles upon collision events.

---

## 📜 License

This project is licensed under the MIT License - feel free to modify, fork, and enhance!
