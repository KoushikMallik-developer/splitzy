import React from "react";

const FriendRequestList = ({ friend }) => {
  return (
      <div className="p-4 hover:bg-gray-50">
        <div className="flex flex-col sm:flex-row items-center justify-between">
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
          <div className="flex flex-col sm:flex-row items-center space-x-4 mt-4 sm:mt-0">
            <button className="px-4 py-2 text-sm rounded-lg transition-colors bg-green-100 text-green-600 hover:bg-green-200">
              Add Friend
            </button>
            <button className="px-4 py-2 text-sm rounded-lg transition-colors bg-red-100 text-red-600 hover:bg-red-200">
              Remove
            </button>
          </div>
        </div>
      </div>
  );
};

export default FriendRequestList;
