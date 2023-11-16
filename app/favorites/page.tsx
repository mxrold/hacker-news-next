"use client";
import Articles from "@/components/Articles";
import CustomMessage from "@/components/CustomMessage";
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
          <CustomMessage text="Go save your favorite news!" />
        </div>
      )}
    </>
  );
}
