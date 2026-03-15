import { DiaryEntry } from './types';
import * as entry20260315 from './2026-03-15';
import * as entry20260316 from './2026-03-16';
import * as entry20260317 from './2026-03-17';

export type { DiaryEntry };

// Add new imports at the top, newest first
const allEntries: Record<string, DiaryEntry>[] = [
  entry20260315,
  entry20260316,
  entry20260317,
];

export const diaryEntries: Record<string, DiaryEntry[]> = {
  vi: allEntries.map((e) => e.vi),
  en: allEntries.map((e) => e.en),
};
