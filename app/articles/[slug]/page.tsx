import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticles, getArticle } from "@/features/articles/articleService";
import { ArticleDetail } from "@/features/articles/components/ArticleDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | 너드수학`,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  return <ArticleDetail article={article} />;
}
