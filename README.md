# 🎮 Mexterminio — Public Game Balance & Map Constants

Welcome to the official public game balance and map configuration repository for **[Mexterminio](https://mexterminio.com)**, the open-source multiplayer hero shooter!

This repository contains hero stats, action tuning, beacon parameters, spawn locations, shop item prices, and AI navigation waypoints. Community members can submit Pull Requests to tweak hero balance, propose map adjustments, and adjust game mode parameters.

---

## 🔗 Official Links & Community

- 🕹️ **Play Mexterminio**: [https://mexterminio.com](https://mexterminio.com)
- 📖 **Documentation & Patch Notes**: [https://mexterminio.com/docs](https://mexterminio.com/docs)
- 💬 **Discord Community**: [https://discord.gg/mexterminio](https://discord.gg/mexterminio)
- 🎨 **3D Public Assets Repo**: [mexterminio-assets](https://github.com/your-org/mexterminio-assets)

---

## 🛠️ How to Contribute Balance Tweaks

1. **Fork this repository**.
2. **Edit balance values** in `src/heros/`, `src/constants/`, or `src/maps/`.
3. **Run local validation & tests**:
   ```bash
   npm install
   npm run validate
   ```
4. **Open a Pull Request**. Our automated CI runner will evaluate range safety schemas (Zod) and post a **Balance Comparison Report** directly on your PR!

---

## 📊 Repository Structure

- `src/heros/`: Stats, movement speeds, damage values, cooldowns, and action types for all heroes.
- `src/constants/`: Beacon capture timers, queue settings, match parameters, and vehicle stats.
- `src/maps/`: AI waypoints, spawn coordinates, and zone place definitions.
- `src/schemas/`: Zod validation schemas enforcing min/max balance boundaries.
- `tests/`: Integrity unit tests for hero assets, voice lines, and constants.

---

## 📜 License

[Apache-2.0 License](LICENSE) © Mexterminio Team
