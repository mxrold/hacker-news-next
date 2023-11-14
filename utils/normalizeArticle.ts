import {
  ArticleDTO,
  ArticlesInterface,
  ArticleNormalized,
} from "@/components/Articles/articles.interface";
import { generateId } from "./generateId";
import { getDate } from "./getDate";

export const normalizeArticle = (
  data: ArticlesInterface,
): ArticleNormalized[] | [] => {
  if (!data.hits) return [];

  const { hits: articles } = data;

  const filteredArticles: ArticleNormalized[] = [];

  articles?.forEach((article: ArticleDTO) => {
    const { author, story_title, story_url, created_at } = article;
    const story_id = generateId();
    const articleDate = getDate(created_at);

    if (author && story_title && story_url && created_at && story_id) {
      filteredArticles.push({
        author,
        story_title,
        story_url,
        created_at: articleDate,
        story_id,
      });
    }
  });

  return filteredArticles;
};
