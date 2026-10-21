# Pre-recording source validation

Performed in Linux on 21 October 2026:

- Filter tests first failed against an empty-result implementation, then passed after implementing filtering (5/5).
- TypeScript: passed.
- ESLint: passed.
- Expo dependency compatibility check: reported dependencies up to date.
- iOS JavaScript export: passed (628 bundled modules).
- Local pinned agent-device CLI: reported 0.21.29.

The native iOS build, visual layout, runtime defect reproduction, and agent before/after verdicts have NOT been verified here. No recorded result is included. Run those on the Mac and preserve the actual evidence. Source-check CI is supplied but must be checked on GitHub after the push.

Tooling note: Expo's automatic ESLint setup hit a proxy timeout; direct npm installation and an explicit Expo flat ESLint configuration were used instead. React Native Directory metadata was unavailable during module installation; Expo's dependency compatibility check subsequently passed. npm reported a deprecation warning for the ESLint 9 release selected with Expo's lint config.
