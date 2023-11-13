import Image from "next/image";

export default function ArticleItem(): JSX.Element {
  return (
    <article className="flex justify-between border border-gray-300 rounded-md hover:opacity-60">
      <a
        href="/"
        target="_blank"
        className="flex flex-col w-10/12 py-4 pl-4 pr-6"
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
            <time>5 min ago </time>
            by Lorem ipsum
          </p>
        </span>
        <h3 className="mt-3 text-normal font-medium text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          maxime consequatur aliquam consequuntur voluptatem
        </h3>
      </a>
      <div className="flex justify-center items-center w-2/12 p-4 bg-gray-200">
        <button>
          <Image
            src="/heart-fill.svg"
            width={26}
            height={26}
            alt="Heart icon"
          />
        </button>
      </div>
    </article>
  );
}
