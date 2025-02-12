"use client";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const header = document.querySelector("header");
    if (latest > 100) {
      header.classList.add("shadow-lg", "backdrop-blur-sm");
    } else {
      header.classList.remove("shadow-lg", "backdrop-blur-sm");
    }
  });

  return (
    <header className="bg-white/80 sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Talent Hunters
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
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
