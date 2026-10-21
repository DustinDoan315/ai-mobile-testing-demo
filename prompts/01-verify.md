Use agent-device to verify the running Field Notes app on my iOS Simulator.
This phase is runtime-only. Do not read app implementation, tests, README, or other project docs to infer a result. Do not modify code or deploy. You may read installed CLI help and toolchain diagnostics.

1. Run `npx --no-install agent-device --version`, then read `help workflow`. Select the correct simulator and installed app (bundle ID com.dustinbuilds.aimobiletestingdemo).
2. Inspect the UI and capture a baseline screenshot and accessibility snapshot. Baseline must show an empty search and 6 of 6 notes. If needed, relaunch the app using supported CLI commands; if baseline cannot be established, report INCONCLUSIVE.
3. Enter `expo` into Search notes. Verify 1 of 6 notes and the title Expo simulator checklist.
4. Tap Clear search. Expected: empty search input, 6 of 6 notes, and the original collection restored. Inspect the list as needed; do not rely on the counter alone.
5. Capture before/after screenshots, snapshots, command transcript, and a focused log window if supported. Read the installed help for capture commands. Use fresh element refs.
6. Save actual evidence under artifacts/before/. Report PASS, FAIL, or INCONCLUSIVE per expectation, citing evidence and commands. State any retries or missing evidence. Do not claim success from code or unit tests. Stop after reporting; do not fix anything.
