import Image from "next/image";
import { CategoriesInterface } from "../Categories/categories.interface";

export default function CategoryItem(props: CategoriesInterface): JSX.Element {
  const { src, width = 22, height = 22, alt, title } = props;

  return (
    <li className="hover:bg-gray-100">
      <button className="flex items-center w-full h-11 py-1 px-3">
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
