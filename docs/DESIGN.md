# Demo scope and implementation

Purpose: record an honest mobile-agent experiment for Dustin Builds. The approved storyboard uses a search/Clear regression, passing filter unit tests, a runtime-only verification, and a subsequent investigation and retest.

Implementation: one Expo TypeScript screen, six static notes, live input plus committed filtering query, pure data filter tested using Node's built-in runner. Accessible labels and stable test IDs support device interaction. Clear intentionally resets only the visible input in the initial fixture. No special failure toggle, simulated agent output, networking, or hidden success mode.

Plan: scaffold from the official blank TypeScript template; prove filter assertions fail before implementing filtering; add the recording UI and intentional wiring omission; provide version-pinned agent CLI and runtime prompts; check tests, types, lint, dependency compatibility, and iOS JS export; publish the source. Native build and runtime verdict remain for the user's Mac.

Acceptance: six notes at baseline, one match for expo, empty input plus stale one-note result after Clear in the initial revision. After the recorded investigation, the corrected action must restore six notes. Never represent a bundle check as a native run.
