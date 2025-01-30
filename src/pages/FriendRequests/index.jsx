import React, { useState } from "react";
import FriendRequestList from "../../components/Friends/FriendRequestList";

const FriendRequests = () => {
  const [friends] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      avatar: "https://avatar.iran.liara.run/public/1",
    },
    {
      id: 2,
      name: "Mike Smith",
      email: "mike.smith@email.com",
      avatar: "https://avatar.iran.liara.run/public/2",
    },
    {
      id: 3,
      name: "Emily Chen",
      email: "emily.c@email.com",
      avatar: "https://avatar.iran.liara.run/public/3",
    },
  ]);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Friends</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search friends...WIP"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Friends List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            All Friends ({friends.length})
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {friends.map((friend) => (
            <FriendRequestList key={friend.id} friend={friend} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Showing</span>
            <select
              className="px-2 py-1 border border-gray-200 rounded-lg text-sm"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <span className="text-sm text-gray-500">
              of {friends.length} friends
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <button
              className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm">
              {currentPage}
            </button>
            <button
              className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendRequests;
