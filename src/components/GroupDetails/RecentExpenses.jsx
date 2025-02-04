import React from "react";
import { FaUsers } from "react-icons/fa";

const RecentExpenses = () => {
  const expenses = [
    {
      title: "Monthly Rent",
      amount: "$800.00",
      addedBy: "John Doe",
      date: "Feb 1, 2024",
    },
    {
      title: "Groceries",
      amount: "$250.00",
      addedBy: "Jane Smith",
      date: "Jan 28, 2024",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-medium">Recent Expenses</h3>
        <button className="text-blue-600 text-sm font-medium">View All</button>
      </div>
      <div className="divide-y divide-gray-200">
        {expenses.map((expense, index) => (
          <div key={index} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-sm font-medium">{expense.title}</h4>
                <p className="text-xs text-gray-500">
                  Added by {expense.addedBy} • {expense.date}
                </p>
              </div>
              <span className="text-lg font-semibold">{expense.amount}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <FaUsers className="w-4 h-4 mr-1" />
              Split equally between 4 people
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentExpenses;
