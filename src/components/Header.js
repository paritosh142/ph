"use client";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const header = document.querySelector("header");
    if (latest > 100) {
      header.classList.add("shadow-lg", "backdrop-blur-sm");
    } else {
      header.classList.remove("shadow-lg", "backdrop-blur-sm");
    }
  });

  return (
    <header className="bg-white/80 top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-6 py-1">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-[15px] font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Image src="/Logo.png" width={80} height={80} alt="Logo" />
            Talent Wave
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden mt-2 space-y-2 transition-all duration-300 ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          } flex flex-col items-center`}
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors font-medium group"
  >
    {children}
    <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </Link>
);

export default Header;
