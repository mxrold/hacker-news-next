import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="flex items-center mx-auto h-28 shadow-md">
      <Link className="container" href="/">
        <span className="text-3xl font-medium font-serif text-stone-700">
          HACKER NEWS
        </span>
      </Link>
    </header>
  );
}
