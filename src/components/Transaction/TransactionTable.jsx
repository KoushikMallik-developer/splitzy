import React, { useState } from "react";

const TransactionTable = () => {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      date: "2024-02-20",
      description: "Dinner Split",
      details: "Restaurant bill",
      group: "Friends",
      amount: "+₹450",
      type: "credit",
      status: "Completed",
      groupColor: "blue",
    },
    {
      id: 2,
      date: "2024-02-19",
      description: "Movie Night",
      details: "Theater tickets",
      group: "Roommates",
      amount: "-₹300",
      type: "debit",
      status: "Pending",
      groupColor: "purple",
    },
    {
      id: 3,
      date: "2024-02-18",
      description: "Grocery Shopping",
      details: "Monthly groceries",
      group: "Family",
      amount: "+₹850",
      type: "credit",
      status: "Completed",
      groupColor: "green",
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-600";
      case "pending":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getAmountColor = (type) => {
    return type === "credit" ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Group/Friend
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {transaction.description}
                  </div>
                  <div className="text-sm text-gray-500">
                    {transaction.details}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs font-medium bg-${transaction.groupColor}-100 text-${transaction.groupColor}-600 rounded-full`}
                  >
                    {transaction.group}
                  </span>
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getAmountColor(transaction.type)}`}
                >
                  {transaction.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs font-medium ${getStatusColor(transaction.status)} rounded-full`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
