# Project rules

- npm + package-lock.json; Node 24. Use npm ci.
- Single-screen Expo application. No backend, API keys, routing, or EAS project required.
- Use SDK-matched Expo documentation before changing Expo APIs. Inspect package.json for the installed version. Use npx expo install for native dependencies.
- Native ios/ and android/ directories are generated and ignored. Configure them in app.json.
- Follow the current user prompt's scope. For a runtime-only verification request, do not inspect implementation or modify files; operate the app and collect evidence first.
- Run npm run check after code edits. Those checks are not evidence that a user flow works.
- Use npx --no-install agent-device help workflow and doctor. Read version-matched help before choosing device commands. Select the intended simulator explicitly if multiple devices exist. Never reuse example element refs; obtain fresh snapshots.
- Keep UI actions sequential. Save evidence under artifacts/<run-name>/. Report PASS, FAIL, or INCONCLUSIVE with observed versus expected state and actual evidence paths. Do not invent logs, recordings, output, or results. Tool/setup failure is INCONCLUSIVE, not a product failure.
- Never publish/deploy, edit unrelated apps, or change device-wide settings without task authorization.
