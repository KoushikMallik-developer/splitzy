import React from "react";

const RecentTransactions = () => {
  const recentTransactions = [
    {
      title: "Dinner Split",
      description: "With John and Sarah",
      amount: "+₹450",
      time: "Today",
      type: "credit",
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
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
      ),
      bgColor: "bg-blue-100",
    },
    {
      title: "Movie Tickets",
      description: "With Mike",
      amount: "-₹300",
      time: "Yesterday",
      type: "debit",
      icon: (
        <svg
          className="w-5 h-5 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12H4"
          />
        </svg>
      ),
      bgColor: "bg-red-100",
    },
    {
      title: "Groceries",
      description: "With Roommates",
      amount: "+₹850",
      time: "2 days ago",
      type: "credit",
      icon: (
        <svg
          className="w-5 h-5 text-green-600"
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
      ),
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 mt-6">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Transactions
        </h3>
        <div className="space-y-4">
          {recentTransactions.map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 ${transaction.bgColor} rounded-full`}>
                  {transaction.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {transaction.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {transaction.description}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}
                >
                  {transaction.amount}
                </p>
                <p className="text-xs text-gray-500">{transaction.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
