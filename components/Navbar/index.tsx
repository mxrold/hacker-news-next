"use client";
import { generateId } from "@/utils/generateId";
import { NavbarInterface } from "./navbar.interface";
import NavbarLink from "../NavbarLink";

export default function Navbar(): JSX.Element {
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

  return (
    <nav className="my-16">
      <ul className="flex justify-center text-center">
        {navbarItems?.map((item: NavbarInterface) => (
          <NavbarLink key={generateId()} {...item} />
        ))}
      </ul>
    </nav>
  );
}
