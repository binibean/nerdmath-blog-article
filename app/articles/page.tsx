import { getArticles } from "@/features/articles/articleService";
import { ArticleList } from "@/features/articles/components/ArticleList";
import { pageWrapper, pageTitle, pageTitleAccent, pageSubtitle } from "@/features/articles/article.css";

export const metadata = {
  title: "너드수학",
  description:
    "영어 수학 문제에서 막히는 이유, 핵심 용어, 학습 방법을 다루는 너드수학 아티클.",
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className={pageWrapper}>
      <h1 className={pageTitle}>
        Nerd<span className={pageTitleAccent}>Math</span>
      </h1>
      <p className={pageSubtitle}>
        영어 수학 문제 해석, 핵심 용어, 학부모 가이드까지 — 너드수학의 관점을 담은 글들입니다.
      </p>
      <ArticleList articles={articles} />
    </main>
  );
}
