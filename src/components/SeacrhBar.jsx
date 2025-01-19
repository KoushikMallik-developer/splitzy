import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/friend-search?fs=${encodeURIComponent(searchQuery)}`);
    }
  };

  const searchHandler = (e) => {
    navigate(`/friend-search?fs=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-4 pr-12 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        placeholder="Search..."
        // value={value}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 hover:bg-gray-100"
        onClick={searchHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
