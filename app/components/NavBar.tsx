// app/components/NavBar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="PictureBooks.ai Logo"
            width={100}
            height={50}
          />
        </Link>
      </div>
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {menuActive ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in ${
          menuActive ? "top-16" : "top-[-490px]"
        }`}
      >
        <li className="mx-2 my-2 md:my-0">
          <Link
            href="#features"
            className="text-gray-700 hover:text-orange-500"
          >
            Features
          </Link>
        </li>
        <li className="mx-2 my-2 md:my-0">
          <Link
            href="#testimonials"
            className="text-gray-700 hover:text-orange-500"
          >
            Testimonials
          </Link>
        </li>
        <li className="mx-2 my-2 md:my-0">
          <Link
            href="#resources"
            className="text-gray-700 hover:text-orange-500"
          >
            Resources
          </Link>
        </li>
        <li className="mx-2 my-2 md:my-0">
          <Link href="#footer" className="text-gray-700 hover:text-orange-500">
            Contact
          </Link>
        </li>
        <li className="mx-2 my-2 md:my-0">
          <Link
            href="https://picturebooks.ai"
            className="btn-secondary inline-block px-4 py-2 rounded"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
