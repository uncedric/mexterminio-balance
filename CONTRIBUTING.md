# Contributing to Mexterminio Balance

We welcome community feedback, stat tweaks, map improvements, and hero balance proposals!

## Balance Guidelines

1. **Reasoning**: Always explain the rationale behind your balance changes in your Pull Request description (e.g. *"Reduces Buchona's primary burst damage from 20 to 18 to align her TTK with Jaguar"*).
2. **Bounds**: Stay within realistic ranges. Stats are bounded by Zod schemas (e.g., Hero speed must be between `2.0` and `30.0`, HP between `20` and `2000`).
3. **Tests**: Ensure `npm run validate` passes clean locally before opening a PR.
4. **No Code Spoilers**: Do not submit proprietary engine code or private asset paths in balance PRs.

Thank you for helping balance Mexterminio! 🇲🇽🔥
