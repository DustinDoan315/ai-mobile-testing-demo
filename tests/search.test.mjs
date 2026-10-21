import { test } from "node:test";
import assert from "node:assert/strict";
import { filterNotes } from "../src/search.mjs";
const notes = [
  { id: "1", title: "Expo simulator", category: "Mobile" },
  { id: "2", title: "Agent evidence", category: "AI" },
  { id: "3", title: "Native modules", category: "Mobile" },
];
test("empty search returns every note", () =>
  assert.deepEqual(filterNotes(notes, ""), notes));
test("search matches titles without case sensitivity", () =>
  assert.deepEqual(filterNotes(notes, "EXPO"), [notes[0]]));
test("search trims whitespace", () =>
  assert.deepEqual(filterNotes(notes, "  expo  "), [notes[0]]));
test("search includes categories", () =>
  assert.deepEqual(filterNotes(notes, "mobile"), [notes[0], notes[2]]));
test("unknown query returns no notes", () =>
  assert.deepEqual(filterNotes(notes, "missing"), []));
