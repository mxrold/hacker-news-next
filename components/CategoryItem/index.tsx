import Image from "next/image";
import { useGlobalContext } from "@/context/useContext";
import { CategoriesInterface } from "../Categories/categories.interface";

export default function CategoryItem(props: CategoriesInterface): JSX.Element {
  const { src, width = 22, height = 22, alt, title, id, actionTitle } = props;
  const { categorySelected, setCategorySelected } = useGlobalContext();

  const saveCategoryContext = (): void => {
    setCategorySelected(id);
  };

  return (
    <li
      className={`hover:bg-gray-100 ${
        categorySelected === id && "bg-gray-200"
      }`}
      title={actionTitle}
    >
      <button
        className="flex items-center w-full h-11 py-1 px-3"
        onClick={saveCategoryContext}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="mr-3"
        />
        {title}
      </button>
    </li>
  );
}
