"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { generateId } from "@/utils/generateId";
import { NavbarInterface } from "../Navbar/navbar.interface";

export default function NavbarLink(props: NavbarInterface): JSX.Element {
  const { href, title } = props;
  const currentRoute = usePathname();

  const activeLink = (path: string): string => {
    return currentRoute === path
      ? "text-cyan-500 border-2 border-cyan-500"
      : "text-gray-600 border-gray-300";
  };

  return (
    <Link
      key={generateId()}
      className="text-base font-medium list-none"
      href={href}
      title={title}
    >
      <li
        className={`${activeLink(
          href,
        )} w-28 min-w-max h-9 px-4 py-1 border cursor-pointer first:rounded-l-sm last:rounded-r-sm`}
      >
        {title}
      </li>
    </Link>
  );
}
