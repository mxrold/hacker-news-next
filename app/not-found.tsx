import NavbarLink from "@/components/NavbarLink";

export default function NotFound() {
  const homeLink = {
    href: "/",
    title: "Return Home",
  };

  return (
    <div className="container flex flex-col justify-center items-center text-gray-600">
      <h2 className="mb-3 text-base font-medium">Not Found</h2>
      <p className="mb-6 text-sm">Could not find requested resource</p>
      <NavbarLink {...homeLink} />
    </div>
  );
}
