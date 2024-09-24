"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react"; // Import the useSession hook

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  // Function to handle link click and close the mobile menu
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu after link click
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/breweries">
              <h1 className="text-2xl font-bold">Brew🍺</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/breweries"
              className={`${
                pathname === "/breweries"
                  ? "bg-orange-500 text-white"
                  : "text-orange-500 hover:bg-orange-500 hover:text-white"
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              Breweries
            </Link>

            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "bg-orange-500 text-white"
                  : "text-orange-500 hover:bg-orange-500 hover:text-white"
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              About Brew
            </Link>
            {session && (
              <Link
                href="/admin"
                className={`${
                  pathname === "/admin"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Admin
              </Link>

            )}
            {session && (
                   <Link
                   href="/breweries/add-brewery"
                   className={`${
                     pathname === "/breweries/add-brewery"
                       ? "bg-gray-900 text-white"
                       : "text-gray-300 hover:bg-gray-700 hover:text-white"
                   } px-3 py-2 rounded-md text-sm font-medium`}
                 >
                   Add Brewery
                 </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-orange-400 hover:text-orange-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/breweries"
              onClick={handleLinkClick} // Close mobile menu on click
              className="text-orange-500 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Breweries
            </Link>
            <Link
              href="/about"
              onClick={handleLinkClick} // Close mobile menu on click
              className="text-orange-500 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              About Brew
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;