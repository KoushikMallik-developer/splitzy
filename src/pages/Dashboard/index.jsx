import React from "react";
import StatsCard from "../../components/Dashboard/StatsCard";
import MonthlyTransactionChart from "../../components/Dashboard/MonthlyTransactionChart";
import RecentTransactions from "../../components/Dashboard/RecentTransaction";
import AddModal from "../../components/AddModal";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <section id="overview" className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            Add Money
          </button>
        </div>
      </div>
      <StatsCard />
      <MonthlyTransactionChart />
      <RecentTransactions />
      <AddModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default DashboardPage;
