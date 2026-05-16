import type { Article } from "@/shared/types/article";
import { ArticleCard } from "./ArticleCard";
import { articleGrid, articleGridItem } from "@/features/articles/article.css";

interface Props {
  articles: Article[];
}

export function ArticleList({ articles }: Props) {
  return (
    <ul className={articleGrid}>
      {articles.map((article) => (
        <li key={article.slug} className={articleGridItem}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}
