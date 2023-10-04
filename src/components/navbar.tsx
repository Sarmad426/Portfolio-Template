import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Navbar = () => {
  const links = [
    {
      label: "Projects",
      url: "#projects",
    },
    {
      label: "Skills",
      url: "#skills",
    },
    {
      label: "Contact",
      url: "#contact",
    },
    {
      label: "Social Links",
      url: "#links",
    },
    {
      label: "Education",
      url: "#education",
    },
  ];
  return (
    <nav className="lg:flex lg:w-2/3 lg:mx-auto md:flex hidden items-center justify-center space-x-16 bg-gray-100 py-3 text-lg font-bold pt-6">
      {links.map((link) => {
        return (
          <a
            key={link.label}
            href={link.url}
            className={`${inter.className} hover:underline`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
