"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarInterface } from "./navbar.interface";
import { generateId } from "@/utils/generateId";

export default function Navbar(): JSX.Element {
  const currentRoute = usePathname();
  const navbarItems: NavbarInterface[] = [
    {
      href: "/",
      title: "All",
    },
    {
      href: "/favorites",
      title: "My faves",
    },
  ];

  const activeLink = (path: string): string => {
    return currentRoute === path
      ? "text-cyan-500 border-2 border-cyan-500"
      : "text-gray-600 border-gray-300";
  };

  return (
    <nav className="my-16">
      <ul className="flex justify-center text-center">
        {navbarItems?.map((item: NavbarInterface) => (
          <Link
            key={generateId()}
            className="text-base font-medium"
            href={item.href}
            title={item.href}
          >
            <li
              className={`${activeLink(
                item.href,
              )} w-28 min-w-max h-9 px-4 py-1 border cursor-pointer first:rounded-l-sm last:rounded-r-sm`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
