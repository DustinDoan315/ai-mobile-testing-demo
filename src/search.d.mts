export type Note = {
  id: string;
  title: string;
  category: string;
  summary?: string;
};
export function filterNotes<T extends Note>(
  notes: readonly T[],
  query: string,
): T[];
