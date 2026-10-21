Investigate the runtime failure from the previous Field Notes run. You may now read and edit code.

1. Preserve artifacts/before/ and describe observed versus expected behavior.
2. Find the cause. Make the smallest fix; do not change the collection, expected results, or hide the counter.
3. Add a meaningful regression test at the UI/state-wiring boundary where practical; explain its coverage. Keep the existing filter tests.
4. Run npm run check and preserve the actual output and diff under artifacts/after/.
5. Reload/relaunch as needed. Use agent-device to rerun the SAME baseline, expo search, and Clear flow. Save screenshots, snapshots, command transcript, and a report under artifacts/after/.
6. Report PASS, FAIL, or INCONCLUSIVE based on runtime evidence, independently of the test result. Include retries and limitations. Do not commit, push, deploy, or fabricate any result.
