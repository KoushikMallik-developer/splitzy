import React from "react";

const ActionButtons = ({ onCreate }) => {
  return (
    <div className="flex gap-3">
      <button
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        onClick={onCreate}
      >
        Create New Group
      </button>
    </div>
  );
};

export default ActionButtons;
