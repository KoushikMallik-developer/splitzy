import React, { useState, useRef } from "react";
import ClickOutside from "../ClickOutside";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const GroupCard = ({ group, onDelete }) => {
  const navigate = useNavigate();
  const { userDetails } = useSelector((state) => state.user);
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  const getCreatorBalances = (group) => {
    return group.balances[userDetails.id]
      ? group.balances[userDetails.id].balance
      : 0;
  };

  const renderGroupMembers = (members) => {
    const maxVisibleMembers = 2;
    const visibleMembers = members.slice(0, maxVisibleMembers);
    const remainingMembersCount = members.length - maxVisibleMembers;
    return (
      <div className="flex -space-x-2">
        {visibleMembers.map((member, index) => (
          <img
            key={index}
            src={member.image}
            alt={member.name}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        ))}
        {remainingMembersCount > 0 && (
          <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
            +{remainingMembersCount}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={"bg-blue-100 p-3 rounded-full"}>
              <svg
                className={"w-6 h-6 text-green-600"}
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
              <p className="text-sm text-gray-500">
                {group.members.length} members
              </p>
            </div>
          </div>
          <div className="relative" ref={optionsRef}>
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={() => setShowOptions(!showOptions)}
            >
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
            <ClickOutside
              onClick={() => setShowOptions(false)}
              className="relative"
            >
              {showOptions && (
                <div className="absolute right-0 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    onClick={() => onDelete(group.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </ClickOutside>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Spent</span>
            <span className="text-sm font-medium text-gray-800">
              ₹{group.total_spent}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Your Balance</span>
            <span className={"text-sm font-medium text-green-600"}>
              ₹{getCreatorBalances(group) || 0}
            </span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          {renderGroupMembers(group.members)}
        </div>
      </div>
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <button
          className="w-full text-indigo-600 hover:text-indigo-700 text-sm font-medium"
          onClick={() => navigate(`/group/${group.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
