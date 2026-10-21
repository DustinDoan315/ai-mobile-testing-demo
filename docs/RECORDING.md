# Mac run and recording checklist

## Prepare

1. Follow README setup. Let the first native build finish before filming.
2. Run `npm run agent:doctor` yourself. Resolve actual toolchain/permission findings. Read `npm run agent:workflow`. Do not fabricate a clean doctor output.
3. Disable notifications, hide secrets, enlarge terminal text, and position Codex beside Simulator. Record the desktop in landscape at 1080p or higher. macOS Shift-Command-5 can capture a selected region; choose no microphone.
4. Keep normal-speed originals. Leave 3–5 seconds around actions. No voiceover needed yet.

## Capture in this order

- 01-tests: actual `npm test` output. Describe these as filter tests, not proof the app works.
- 02-bug: baseline 6/6, type expo (1/6), tap Clear (input empty but 1/6 remains). Hold each state. Clearly disclose in the video that the bug was planted.
- 03-setup: installed CLI version, doctor, workflow help, build command. First-time install/build can be lengthy; keep footage for editing.
- 04-agent-before: full real Codex run with prompts/01-verify.md, simulator visible, actual report and artifacts. Save INCONCLUSIVE runs too.
- 05-fix: use prompts/02-fix-and-retest.md only after preserving the first report; capture investigation and actual diff.
- 06-agent-after: same flow, actual result, screenshots. Do not force a PASS if the run fails.

## Optional clean simulator feed

Desktop recording captures the terminal and pointer. A separate simulator recording provides a clean app image for cropping. With exactly one simulator booted:

```bash
mkdir -p artifacts/raw
xcrun simctl list devices booted
xcrun simctl io booted recordVideo --codec=h264 artifacts/raw/simulator-before.mov
```

Leave that command running, perform the flow, then press Control-C to finish the video. Use a different filename for the after run. If several simulators are booted, replace `booted` with the intended device UDID. Verify available options with `xcrun simctl io help`.

Screenshot:

```bash
xcrun simctl io booted screenshot artifacts/raw/simulator-before.png
```

For full-desktop footage, stop recording from the macOS menu bar; keep its original MOV. No conversion or editing is necessary before handing it over.

## Export evidence

Keep all real screenshots, reports, logs and recordings under artifacts/. After the agent has fixed the code:

```bash
git diff > artifacts/fix.diff
npm test > artifacts/filter-tests-after.txt 2>&1
```

Send originals plus evidence as attachments or a ZIP. artifacts/ is ignored by git. Do not upload raw footage to the source repository. Keep the initial pushed revision available so you can recreate the starting state without overwriting the fixed working directory.
