import Link from "next/link";
import type { Article } from "@/shared/types/article";
import {
  articleCard,
  cardCategory,
  cardTitle,
  cardSummary,
  cardMeta,
  tagList,
  tag,
} from "@/features/articles/article.css";

interface Props {
  article: Article;
}

export function ArticleCard({ article }: Props) {
  return (
    <Link href={`/articles/${article.slug}`} className={articleCard}>
      <span className={cardCategory}>{article.categoryLabel}</span>
      <h2 className={cardTitle}>{article.title}</h2>
      <p className={cardSummary}>{article.summary}</p>
      <ul className={tagList}>
        {article.tags.map((t) => (
          <li key={t} className={tag}>
            #{t}
          </li>
        ))}
      </ul>
      <div className={cardMeta}>
        <span>{article.publishedAt}</span>
      </div>
    </Link>
  );
}
