import { ReactNode } from 'react';

export type DiaryEntry = {
  date: string; // YYYY-MM-DD
  title: string;
  content: ReactNode;
};
