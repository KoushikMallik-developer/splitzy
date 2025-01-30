import React, { useState } from "react";

const FriendCard = ({friend}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition duration-200">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
          <svg
            className="w-10 h-10 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
        </div>
        <h4 className="font-semibold text-gray-900 text-center">
          {friend.name}
        </h4>
        <p className="text-sm text-gray-500 mb-4">
          {friend.mutualFriends} mutual friends
        </p>
        <button className="w-full px-4 py-2 mb-2 bg-gray-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200">
          Add Friend
        </button>
        <button className="w-full px-4 py-2 bg-gray-100 text-blue-600 rounded-lg hover:bg-red-600 hover:text-white transition duration-200">
          Remove
        </button>
      </div>
    </div>
  );
};

export default FriendCard;
