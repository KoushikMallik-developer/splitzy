import React from "react";
import StatsCard from "../../components/Analytics/StatsCard";
import MonthlyTransactionChart from "../../components/Analytics/MonthlyTransactionChart";

const Analytics = () => {
  return (
    <section id="overview" className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex items-center space-x-4">   
        </div>
      </div>
      <StatsCard />
      <MonthlyTransactionChart />
    </section>
  );
};

export default Analytics;
