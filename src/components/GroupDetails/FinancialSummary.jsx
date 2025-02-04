import React from "react";

const FinancialSummary = () => {
  const stats = [
    {
      label: "Total Group Spending",
      amount: "$1,250.00",
      textColor: "text-gray-900",
    },
    {
      label: "You Spent",
      amount: "$450.00",
      textColor: "text-blue-600",
    },
    {
      label: "Your Balance",
      amount: "-$125.00",
      textColor: "text-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200"
        >
          <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
            {stat.label}
          </h3>
          <p className={`text-xl sm:text-3xl font-bold ${stat.textColor}`}>
            {stat.amount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FinancialSummary;
