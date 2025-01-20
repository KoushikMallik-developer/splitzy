import React from "react";

const GroupCard = ({ group }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div
              className={`${group.type === "home" ? "bg-blue-100" : "bg-green-100"} p-3 rounded-full`}
            >
              <svg
                className={`w-6 h-6 ${group.type === "home" ? "text-blue-600" : "text-green-600"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {group.name}
              </h3>
              <p className="text-sm text-gray-500">{group.members} members</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Spent</span>
            <span className="text-sm font-medium text-gray-800">
              ₹{group.totalSpent.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Your Share</span>
            <span
              className={`text-sm font-medium ${group.yourShare > group.totalSpent / group.members ? "text-red-600" : "text-green-600"}`}
            >
              ₹{group.yourShare.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex -space-x-2">
            {group.memberAvatars.map((avatar, index) => (
              <img
                key={index}
                src={`https://avatar.iran.liara.run/public/${avatar}`}
                alt="Member"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
            {group.remainingMembers && (
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-600">
                  +{group.remainingMembers}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <button className="w-full text-indigo-600 hover:text-indigo-700 text-sm font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
