"use client";
import Articles from "@/components/Articles";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Favorites(): JSX.Element {
  const { items, loading, error } = useLocalStorage(
    process.env.NEXT_PUBLIC_HACKER_NEWS_KEY_STORAGE,
    [],
  );

  return (
    <>
      {items?.length ? (
        <Articles loading={loading} error={error} articles={items} />
      ) : (
        <div className="container text-center">
          <h2 className="text-lg font-medium text-gray-600">
            Go save your favorite news!
          </h2>
        </div>
      )}
    </>
  );
}
