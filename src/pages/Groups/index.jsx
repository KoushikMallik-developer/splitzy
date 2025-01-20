import React, { useState } from "react";
import Loader from "../../components/Loader";
import GroupCard from "../../components/Groups/GroupCard";

const GroupsDashboard = () => {
  const initialGroups = [
    {
      id: 1,
      name: "Roommates",
      members: 4,
      totalSpent: 12450,
      yourShare: 3112,
      memberAvatars: [1, 2, 3, 4],
      type: "home",
    },
    {
      id: 2,
      name: "Weekend Trip",
      members: 6,
      totalSpent: 24800,
      yourShare: 4133,
      memberAvatars: [5, 6, 7],
      remainingMembers: 3,
      type: "travel",
    },
  ];

  // State
  const [groups] = useState(initialGroups);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading state
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Groups</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search groups..."
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
          <div className="flex gap-3">
            <button
              className="px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              onClick={handleRefresh}
            >
              Refresh
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Create New Group
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}

          <div className="bg-gray-50 rounded-lg border border-gray-200 border-dashed flex items-center justify-center p-6 cursor-pointer hover:bg-gray-100 transition-colors">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-gray-400"
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
              </div>
              <h3 className="text-sm font-medium text-gray-600">
                Create New Group
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Split expenses with friends
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GroupsDashboard;
