import React from "react";

const AddExpenseModal = ({
  expenseForm,
  handleInputChange,
  handleAddExpense,
  setIsModalOpen,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md mx-4 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Add New Expense
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={expenseForm.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={expenseForm.amount}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Split Type
            </label>
            <select
              name="splitType"
              value={expenseForm.splitType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Equal Split</option>
              <option>Percentage Split</option>
              <option>Custom Split</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Paid By
            </label>
            <select
              name="paidBy"
              value={expenseForm.paidBy}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>You</option>
              <option>Jane Smith</option>
              <option>Mike Wilson</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAddExpense}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
