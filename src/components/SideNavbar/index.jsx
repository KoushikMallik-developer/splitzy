import React, { useState } from "react";
import NavigationContent from "./NavigationContent";

const SidebarNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <div id="root" className="bg-gray-200">
    //   <div className="flex h-screen overflow-hidden">
    <>
      <nav className="hidden lg:flex lg:w-64 bg-white flex-col fixed h-full">
        <NavigationContent />
      </nav>
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="fixed top-4 right-4 z-20 p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50"
              onClick={() => setIsOpen(false)}
            />

            <div className="fixed top-0 left-0 bottom-0 w-64 bg-white z-10 transform transition-transform duration-300 ease-in-out">
              <NavigationContent />
            </div>
          </>
        )}
      </div>
    </>

    //   </div>
    // </div>
  );
};

export default SidebarNavigation;
