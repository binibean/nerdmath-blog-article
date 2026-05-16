import { mockArticles, getArticleBySlug } from "@/features/articles/mockArticles";
import type { Article } from "@/shared/types/article";

export async function getArticles(): Promise<Article[]> {
  return mockArticles;
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  return getArticleBySlug(slug);
}
