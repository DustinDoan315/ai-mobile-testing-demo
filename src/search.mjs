/** Filter data only; this does not verify screen wiring. */
export function filterNotes(notes, query) {
  const normalized = query.trim().toLowerCase();
  return notes.filter((note) =>
    `${note.title} ${note.category}`.toLowerCase().includes(normalized),
  );
}
