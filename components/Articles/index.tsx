"use client";
import ArticleItem from "../ArticleItem";
import { ArticleNormalized } from "./articles.interface";

export default function Articles({
  loading,
  error,
  articles,
}: {
  loading: boolean;
  error: boolean;
  articles: ArticleNormalized[];
}): JSX.Element {
  return (
    <>
      {loading && <h1>...Loading</h1>}
      {error && <h1>Error</h1>}
      <section className="container grid gap-8 lg:grid-cols-2 my-12">
        {articles?.map((article) => (
          <ArticleItem key={article.story_id} {...article} />
        ))}
      </section>
    </>
  );
}
