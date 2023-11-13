import Articles from "@/components/Articles";
import FilterCategories from "@/components/Categories";

export default function Home(): JSX.Element {
  return (
    <main>
      <FilterCategories />
      <Articles />
    </main>
  );
}
