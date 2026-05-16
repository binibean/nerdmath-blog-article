import { marked } from "marked";
import { detailBody } from "@/features/articles/article.css";

interface Props {
  body: string;
}

export function ArticleBody({ body }: Props) {
  const html = marked.parse(body) as string;
  return (
    <div
      className={detailBody}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
