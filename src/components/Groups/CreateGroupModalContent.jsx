import React from "react";

const CreateGroupModalContent = ({
  newGroupName,
  setNewGroupName,
  selectedUsers,
  setSelectedUsers,
  onCreateGroup,
  onClose,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Create New Group</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Group Name
        </label>
        <input
          type="text"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Add Users
        </label>
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          // Add logic to search and select users
        />
        <div className="mt-2">
          {selectedUsers.map((user, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2"
            >
              {user.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          onClick={onCreateGroup}
        >
          Create Group
        </button>
      </div>
    </div>
  );
};

export default CreateGroupModalContent;
