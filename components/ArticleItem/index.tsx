"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ArticleNormalized } from "../Articles/articles.interface";

export default function ArticleItem(props: ArticleNormalized): JSX.Element {
  const { author, story_title, story_url, created_at, story_id } = props;
  const [favorite, setFavorite] = useState(false);

  const { items, saveItem } = useLocalStorage(
    process.env.NEXT_PUBLIC_HACKER_NEWS_KEY_STORAGE,
    [],
  );

  useEffect(() => {
    const isFavorite =
      items?.some((item: ArticleNormalized) => item.story_id === story_id) ||
      false;
    setFavorite(isFavorite);
  }, [items.length]);

  const handleFavorite = (): void => {
    setFavorite(!favorite);

    if (favorite) {
      const updatedItems =
        items?.filter(
          (item: ArticleNormalized) => item.story_id !== story_id,
        ) || [];
      saveItem(updatedItems);
    } else {
      const clonedObj = { ...props, favorite: true } as ArticleNormalized;
      saveItem([...items, clonedObj]);
    }
  };

  return (
    <article className="flex justify-between border border-gray-300 rounded-md hover:opacity-60">
      <a
        href={story_url}
        target="_blank"
        className="flex flex-col w-10/12 py-4 pl-4 pr-6"
        title={story_title}
      >
        <span className="inline-flex">
          <Image
            src="/clock.svg"
            width={12}
            height={12}
            alt="Clock icon"
            className="mr-2"
          />
          <p className="text-xs font-normal text-gray-500">
            <time>{created_at} ago </time>
            by {author}
          </p>
        </span>
        <h3 className="mt-3 text-normal font-medium text-gray-600">
          {story_title}
        </h3>
      </a>
      <div className="flex justify-center items-center w-2/12 p-4 bg-gray-200">
        <button onClick={handleFavorite}>
          <Image
            src={favorite ? `/heart-fill.svg` : `/outline-heart.svg`}
            width={26}
            height={26}
            alt="Heart icon"
          />
        </button>
      </div>
    </article>
  );
}
