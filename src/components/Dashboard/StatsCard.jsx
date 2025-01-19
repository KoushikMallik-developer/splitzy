import React from "react";

const StatsCard = () => {
  const statsCards = [
    {
      title: "Total Balance",
      amount: "₹24,500",
      icon: (
        <svg
          className="w-6 h-6 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: "bg-green-100",
    },
    {
      title: "Money Sent",
      amount: "₹8,750",
      icon: (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      bgColor: "bg-red-100",
    },
    {
      title: "Money Received",
      amount: "₹12,300",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        </svg>
      ),
      bgColor: "bg-blue-100",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {statsCards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">{card.title}</p>
              <h2 className="text-2xl font-bold text-gray-800">
                {card.amount}
              </h2>
            </div>
            <div className={`p-3 ${card.bgColor} rounded-full`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
