"use client";
import ArticleItem from "../ArticleItem";
import CustomMessage from "../CustomMessage";
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
  const renderLoadingSkeleton = (key: string): React.ReactNode => (
    <LoadingSkeleton
      key={key}
      quantity={6}
      repeat={2}
      containerClassName="container grid lg:grid-cols-2 h-screen my-12"
      containerChildName="lg:mr-4"
      skeletonClassName="h-16 mb-4"
    />
  );

  return (
    <>
      {loading && renderLoadingSkeleton("loading1")}
      <section className="container grid gap-8 lg:grid-cols-2 my-12">
        {articles?.map((article) => (
          <ArticleItem key={article.story_id} {...article} />
        ))}
      </section>
      {loading && articles.length > 0 && renderLoadingSkeleton("loading2")}
      {error && <CustomMessage text="Oops there was an error" />}
    </>
  );
}
