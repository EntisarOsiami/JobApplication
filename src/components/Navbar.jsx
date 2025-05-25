import React, { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-blue-600 hover:text-blue-700"
            >
              Job Application
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/application"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Application
            </Link>
            <Link
              to="/about"
              className="text-gray-500 hover:text-blue-600 font-medium"
            >
              About
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-50"
            >
              <span className="sr-only">Menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 py-2 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/application"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            >
              Application
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
