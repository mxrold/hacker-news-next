import ArticleItem from "../ArticleItem";
import { generateId } from "@/utils/generateId";

export default function Articles(): JSX.Element {
  return (
    <section className="container grid gap-8 lg:grid-cols-2 my-12">
      {[0, 1, 2, 3].map(() => (
        <ArticleItem key={generateId()} />
      ))}
    </section>
  );
}
