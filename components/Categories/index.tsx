"use client";
import { useState } from "react";
import Image from "next/image";
import CategoryItem from "../CategoryItem";
import { CategoriesInterface } from "./categories.interface";
import { generateId } from "@/utils/generateId";

export default function FilterCategories(): JSX.Element {
  const [openCategories, setOpenCategories] = useState<boolean>(false);

  const categoryItems: CategoriesInterface[] = [
    {
      src: "/angular-icon.png",
      alt: "Angular icon",
      title: "Angular",
    },
    {
      src: "/react-icon.png",
      alt: "React icon",
      title: "React",
    },
    {
      src: "/vue-icon.png",
      alt: "Vue icon",
      title: "Vue",
    },
  ];

  return (
    <section className="container relative w-screen ml-auto mr-auto my-6 text-sm font-normal text-gray-600">
      <button
        className="flex justify-between items-center w-full min-w-max md:w-60 h-9 py-1 px-3 border border-gray-600 rounded cursor-pointer"
        onClick={() => setOpenCategories(!openCategories)}
      >
        Select your news
        <Image
          src="/arrow.svg"
          width={20}
          height={20}
          alt="Arrow"
          className={`${
            !openCategories ? "rotate-0" : "rotate-180"
          } transition-all`}
        />
      </button>
      <div
        className={`${
          !openCategories && "hidden"
        } absolute mt-3 w-full min-w-max md:w-60 z-10`}
      >
        <ul className="bg-gray-50 rounded shadow-md">
          {categoryItems?.map((category: CategoriesInterface) => (
            <CategoryItem key={generateId()} {...category} />
          ))}
        </ul>
      </div>
    </section>
  );
}
