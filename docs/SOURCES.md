# Sources and validation

Checked 21 October 2026:

- https://docs.expo.dev/more/create-expo/ — official blank-typescript template, used to generate the dependency set.
- https://docs.expo.dev/versions/v58.0.0/ — SDK documentation matching this scaffold.
- https://docs.expo.dev/agents/agent-device/ — local iOS requires macOS + Xcode; agent-device can operate the installed app, uses accessibility snapshots, captures runtime evidence, and provides doctor and version-matched help. The official skill/MCP integration is optional.
- https://oss.callstack.com/agent-device/docs/installation — agent CLI installation guidance.
- https://developer.apple.com/documentation/xcode/recording-videos-and-taking-screenshots — simulator capture reference. Check installed `xcrun simctl io help` for exact supported flags.

Pinned versions are recorded in package-lock.json. The agent CLI is a local development tool, not an app runtime library. No Expo MCP, agent skill, cloud service, or globally installed CLI is required by this repo.

Native build, simulator interaction, screenshots, agent verdict, and native visual layout must be verified on macOS. The initial source intentionally retains the planted defect. Do not claim this experiment succeeded until the recorded runtime evidence exists.
