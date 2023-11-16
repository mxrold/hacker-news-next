"use client";
import Articles from "@/components/Articles";
import {
  ArticleNormalized,
  ArticlesInterface,
} from "@/components/Articles/articles.interface";
import Categories from "@/components/Categories";
import { useGlobalContext } from "@/context/useContext";
import { useFetch } from "@/hooks/useFetch";
import { useInfinityScroll } from "@/hooks/useInfinityScroll";
import { normalizeArticle } from "@/utils/normalizeArticle";

export default function Home(): JSX.Element {
  const { categorySelected } = useGlobalContext();
  const { countPages, ref } = useInfinityScroll();
  const { loading, error, data } = useFetch<ArticlesInterface>(
    process.env.NEXT_PUBLIC_HACKER_NEWS_API,
    categorySelected,
    countPages,
  );

  let articles: ArticleNormalized[] = [];
  if (data) {
    articles = normalizeArticle(data);
  }

  return (
    <main>
      <Categories />
      <Articles loading={loading} error={error} articles={articles} />
      <div className="w-full h-1" ref={ref} />
    </main>
  );
}
