import { Link } from "react-router-dom";
import { useState } from "react";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { FaReceipt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeNav = () => {
    setIsMenuOpen(false);
  };

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/"); // Redirect if user is logged out
  //   }
  // }, [token, navigate]);

  const logged_in_pages = [
    { url: "dashboard", name: "Dashboard" },
    { url: "friends", name: "Friends" },
    { url: "groups", name: "Groups" },
  ];

  const logged_out_pages = [
    { url: "features", name: "Features" },
    { url: "pricing", name: "Pricing" },
    { url: "faq", name: "FAQ" },
  ];

  const pages = isLoggedIn ? logged_in_pages : logged_out_pages;

  return (
    // <header className="sticky top-0 z-50 w-full bg-gray-100 shadow-md dark:bg-gray-800">
    <header className="sticky top-0 z-50 w-full bg-white shadow-md dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-500"
            >
              <svg
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <Link to="/" className="flex items-center mr-2">
              <FaReceipt
                className="h-8 w-8 text-blue-500"
                sx={{ fontSize: "1rem" }}
              />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                {import.meta.env.VITE_APP_TITLE || "Splitzy"}
              </span>
            </Link>
          </div>
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.url}
                className="text-gray-600 text-lg hover:text-blue-500 px-3 py-2 font-medium dark:text-white"
              >
                {page.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          {isLoggedIn ? (
            <div className="flex items-center gap-3 2xsm:gap-4">
              <ul className="flex items-center gap-2 2xsm:gap-3">
                <DarkModeSwitcher />
                <DropdownNotification />
                <DropdownMessage />
              </ul>
              <DropdownUser />
            </div>
          ) : (
            <div className="flex items-center gap-3 2xsm:gap-7">
              <ul className="flex items-center gap-2 2xsm:gap-4">
                <DarkModeSwitcher />
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-blue-500 px-1 sm:px-4 py-2 text-sm font-medium dark:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-1 sm:px-4 py-2 rounded-md text-sm"
                >
                  Register
                </Link>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Navigation - Only visible when menu is open */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} absolute top-full left-0 right-0 bg-gray-100 shadow-lg dark:bg-gray-800 md:hidden`}
        >
          {pages.map((page) => (
            <div
              key={page.url}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <Link
                to={page.url}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                onClick={closeNav}
              >
                {page.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
