import React from "react";

const FreindsList = ({ friend }) => {
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
            <button className="px-4 py-2 text-sm rounded-lg transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200">
              {status.buttonText}
            </button>
          </div>
        </div>
      </div>
  );
};

export default FreindsList;
