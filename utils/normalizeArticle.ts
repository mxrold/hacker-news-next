import {
  ArticleDTO,
  ArticlesInterface,
  ArticleNormalized,
} from "@/components/Articles/articles.interface";
import { generateId } from "./generateId";
import { getDate } from "./getDate";

export const normalizeArticle = (
  data: ArticlesInterface[],
): ArticleNormalized[] | [] => {
  if (!data) return [];
  const filteredArticles: ArticleNormalized[] = [];

  data.forEach((articles: ArticlesInterface) => {
    articles.hits?.forEach((article: ArticleDTO) => {
      const { author, story_title, story_url, created_at, story_id } = article;
      const id = generateId(`${story_id}-${author}`);
      const articleDate = getDate(created_at);

      if (author && story_title && story_url && created_at && story_id) {
        filteredArticles.push({
          author,
          story_title,
          story_url,
          created_at: articleDate,
          story_id: id,
        });
      }
    });
  });

  return filteredArticles;
};
