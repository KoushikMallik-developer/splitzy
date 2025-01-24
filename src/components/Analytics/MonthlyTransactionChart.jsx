import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MonthlyTransactionChart = () => {
  const chartData = [
    { month: "Jan", sent: 4000, received: 6000 },
    { month: "Feb", sent: 3000, received: 5500 },
    { month: "Mar", sent: 5000, received: 7000 },
    { month: "Apr", sent: 2780, received: 4890 },
    { month: "May", sent: 4890, received: 6800 },
    { month: "Jun", sent: 3780, received: 5900 },
  ];
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Monthly Transaction Overview
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sent" stroke="#EF4444" />
            <Line type="monotone" dataKey="received" stroke="#3B82F6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyTransactionChart;
