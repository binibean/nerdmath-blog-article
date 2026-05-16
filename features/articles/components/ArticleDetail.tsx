import Link from "next/link";
import type { Article } from "@/shared/types/article";
import { ArticleBody } from "./ArticleBody";
import {
  detailWrapper,
  backLink,
  detailCategory,
  detailTitle,
  detailSummary,
  detailMeta,
  detailTagList,
  tag,
} from "@/features/articles/article.css";

interface Props {
  article: Article;
}

export function ArticleDetail({ article }: Props) {
  return (
    <main className={detailWrapper}>
      <Link href="/articles" className={backLink}>
        ← 아티클 목록으로
      </Link>

      <span className={detailCategory}>{article.categoryLabel}</span>
      <h1 className={detailTitle}>{article.title}</h1>
      <p className={detailSummary}>{article.summary}</p>

      <div className={detailMeta}>
        <span>{article.publishedAt}</span>
      </div>

      <ul className={detailTagList}>
        {article.tags.map((t) => (
          <li key={t} className={tag}>
            #{t}
          </li>
        ))}
      </ul>

      <ArticleBody body={article.body} />
    </main>
  );
}
