"use client";
import ArticleItem from "../ArticleItem";
import LoadingSkeleton from "../LoadingSkeleton";
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
      {loading && <LoadingSkeleton />}
      <section className="container grid gap-8 lg:grid-cols-2 my-12">
        {articles?.map((article) => (
          <ArticleItem key={article.story_id} {...article} />
        ))}
      </section>
      {loading && articles.length && <LoadingSkeleton />}
      {error && <h2>Error</h2>}
    </>
  );
}
