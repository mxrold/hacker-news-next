"use client";
import Articles from "@/components/Articles";
import {
  ArticleNormalized,
  ArticlesInterface,
} from "@/components/Articles/articles.interface";
import FilterCategories from "@/components/Categories";
import { useFetch } from "@/hooks/useFetch";
import { normalizeArticle } from "@/utils/normalizeArticle";

export default function Home(): JSX.Element {
  const { loading, error, data } = useFetch<ArticlesInterface>(
    process.env.NEXT_PUBLIC_HACKER_NEWS_API,
  );
  let articles: ArticleNormalized[] = [];
  if (data) {
    articles = normalizeArticle(data);
  }

  return (
    <main>
      <FilterCategories />
      <Articles loading={loading} error={error} articles={articles} />
    </main>
  );
}
