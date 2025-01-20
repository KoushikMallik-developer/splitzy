import React, { useState } from "react";

const Friends = () => {
  const [friends] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      avatar: "https://avatar.iran.liara.run/public/1",
      amount: 1250,
      type: "owe", // 'owe', 'owed', 'settled'
    },
    {
      id: 2,
      name: "Mike Smith",
      email: "mike.smith@email.com",
      avatar: "https://avatar.iran.liara.run/public/2",
      amount: 2800,
      type: "owed",
    },
    {
      id: 3,
      name: "Emily Chen",
      email: "emily.c@email.com",
      avatar: "https://avatar.iran.liara.run/public/3",
      amount: 0,
      type: "settled",
    },
  ]);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Friend Item Component
  const FriendItem = ({ friend }) => {
    const getStatusDisplay = () => {
      switch (friend.type) {
        case "owe":
          return {
            text: "You owe",
            textColor: "text-red-600",
            buttonText: "Settle Up",
          };
        case "owed":
          return {
            text: "Owes you",
            textColor: "text-green-600",
            buttonText: "Remind",
          };
        default:
          return {
            text: "All settled up",
            textColor: "text-gray-600",
            buttonText: "Split Bill",
          };
      }
    };

    const status = getStatusDisplay();

    return (
      <div className="p-4 hover:bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={friend.avatar}
              alt={friend.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-sm font-medium text-gray-800">
                {friend.name}
              </h3>
              <p className="text-sm text-gray-500">{friend.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className={`text-sm font-medium ${status.textColor}`}>
                {status.text}
              </p>
              <p className="text-sm font-bold text-gray-800">
                {friend.type !== "settled"
                  ? `₹${friend.amount.toLocaleString()}`
                  : "No pending amounts"}
              </p>
            </div>
            <button
              className="px-4 py-2 text-sm rounded-lg transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              {status.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Friends</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search friends..."
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
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Add Friend
          </button>
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
            <FriendItem key={friend.id} friend={friend} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
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
          <div className="flex items-center space-x-2">
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

      {/* Add Friend Floating Button */}
      <button className="fixed bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </section>
  );
};

export default Friends;
