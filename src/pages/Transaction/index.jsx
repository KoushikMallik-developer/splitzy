import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TransactionTable from "../../components/Transaction/TransactionTable";

const Transaction = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [transactionType, setTransactionType] = useState("all");
  const [dateRange, setDateRange] = useState("30");
  const [group, setGroup] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section id="transactions" className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Transactions</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
        <div className="flex flex-wrap gap-4">
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Types</option>
            <option value="sent">Sent</option>
            <option value="received">Received</option>
          </select>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="30">Last 30 Days</option>
            <option value="7">Last 7 Days</option>
            <option value="90">Last 3 Months</option>
            <option value="custom">Custom Range</option>
          </select>
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Groups</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="roommates">Roommates</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
        <TransactionTable />
        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-3 border-t border-gray-200">
          <div className="flex items-center mb-4 sm:mb-0">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={10}>10 per page</option>
              <option value={25}>25 per page</option>
              <option value={50}>50 per page</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === page
                    ? "bg-indigo-600 text-white"
                    : "border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === 3}
              className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transaction;
