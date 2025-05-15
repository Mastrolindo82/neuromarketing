import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-black">
              NeuroScelte
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#about" className="text-gray-800 hover:text-orange-500">
              Cos'è il Neuromarketing
            </a>
            <a href="#tools" className="text-gray-800 hover:text-orange-500">
              Strumenti
            </a>
            <a href="#contact" className="text-gray-800 hover:text-orange-500">
              Contatti
            </a>
          </div>
          <div className="text-black flex items-center md:hidden">
            <button
              type="button"
              className="text-black-800 hover:text-orange-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
    </nav>
  );
}