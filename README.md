# AI Mobile Testing Demo

A small Expo + TypeScript app for Dustin Builds: a coding agent tests a running iOS app, captures evidence, investigates, and retests.

**This is a deliberately faulty teaching fixture.** The initial revision contains a planted search/Clear wiring defect. The filter unit tests pass because they test data filtering, not the UI interaction. No device verdict or recording is supplied: those must come from your real run. Component/integration tests could also catch this defect; device automation is complementary, not the only way to find it.

## Run on your Mac

Install Xcode, open it once to complete setup, and install an iOS Simulator runtime in Xcode settings. Use Node 24 LTS (`nvm use` if you have nvm).

```bash
git clone https://github.com/DustinDoan315/ai-mobile-testing-demo.git
cd ai-mobile-testing-demo
npm ci
npm run check
npm run ios
```

`npm run ios` builds and launches the native simulator app. It generates ignored `ios/` files and may install CocoaPods dependencies. No EAS account, paid Apple developer membership, backend, or API keys are needed for this simulator demo. Keep Metro running. Subsequent sessions can use `npm start` with the installed build.

The app is **Field Notes**, bundle ID `com.dustinbuilds.aimobiletestingdemo`. It has six local notes. Search `expo`: one note should remain. Clear should empty the input and restore **6 of 6 notes**. On this initial revision the latter intentionally fails.

## Agent setup

agent-device is pinned as a **development CLI dependency**, not imported by the app. npm scripts resolve its local binary. In a terminal launched from this directory, agents can run it with `npx --no-install agent-device`.

```bash
npm run agent:version
npm run agent:doctor
npm run agent:workflow
```

Run doctor yourself, resolve its findings, then give Codex [the runtime-only prompt](prompts/01-verify.md). It must inspect the installed app before reporting a verdict. After capturing the first report, use [the investigation prompt](prompts/02-fix-and-retest.md). Do not fix the fixture before recording the baseline.

## Recording and handoff

Follow [docs/RECORDING.md](docs/RECORDING.md). Save recordings and actual reports under ignored `artifacts/`. Send the recordings, screenshots, reports, logs, and diff for editing. Do not commit raw video or credentials.

## Checks

- `npm test`: five tests for the pure filter; deliberately does **not** establish UI correctness.
- `npm run typecheck`: TypeScript.
- `npm run lint`: ESLint.
- `npm run check`: all of the above.
- `npx expo export --platform ios`: JavaScript bundle check; not a native build or simulator run.

[Sources and verification boundaries](docs/SOURCES.md). [Implementation scope](docs/DESIGN.md).
