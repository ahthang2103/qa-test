import { DiaryEntry } from './types';
import * as entry20260315 from './2026-03-15';

export type { DiaryEntry };

// Add new imports at the top, newest first
const allEntries: Record<string, DiaryEntry>[] = [entry20260315];

export const diaryEntries: Record<string, DiaryEntry[]> = {
  vi: allEntries.map((e) => e.vi),
  en: allEntries.map((e) => e.en),
};
