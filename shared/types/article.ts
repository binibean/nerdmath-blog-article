export type ArticleCategory =
  | "problem-recognition"
  | "vocabulary"
  | "parent-guide"
  | "study-tips";

export interface Article {
  slug: string;
  title: string;
  summary: string;
  body: string;
  category: ArticleCategory;
  categoryLabel: string;
  tags: string[];
  publishedAt: string;
  readingMinutes: number;
}
