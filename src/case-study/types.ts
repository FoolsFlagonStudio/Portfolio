import type { ReactNode } from 'react';

export type View = 'design' | 'engineering';

/** Colors for a design-side chapter card (the "face" of the card). */
export interface ChapterTheme {
  bg: string;
  fg: string;
  muted: string;
  eyebrow: string;
}

export interface ChapterSide {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  media: ReactNode;
  /** Put the media first on wide screens. */
  reverse?: boolean;
}

/** One chapter, told twice: a design face and an engineering back. */
export interface Chapter {
  id: string;
  design: ChapterSide & { theme: ChapterTheme };
  engineering: ChapterSide;
}

export interface CaseStudy {
  slug: string;
  name: string;
  /** Short line used on cards and in the page title. */
  summary: string;
  kicker: string;
  logo: ReactNode;
  pitch: ReactNode;
  meta: { label: string; value: ReactNode }[];
  heroMedia: ReactNode;
  problem?: { label: string; text: ReactNode }[];
  chapters: Chapter[];
  stats: { value: ReactNode; label: string }[];
  statsTitle?: string;
  statsNote?: ReactNode;
  cta: { title: ReactNode; text: ReactNode; actions: ReactNode };
}
