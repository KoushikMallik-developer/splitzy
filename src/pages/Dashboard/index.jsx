import React from "react";
import RecentTransactions from "../../components/Transaction/RecentTransaction";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();
  return (
    <section id="profile" class="p-6">
      <div class="bg-white rounded-lg border border-gray-200 mb-6">
        <div class="p-6">
          <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src="https://avatar.iran.liara.run/public/1"
              alt="Profile"
              class="w-24 h-24 rounded-full"
            />
            <div class="flex-1">
              <h1 class="text-2xl font-bold text-gray-800 mb-1">John Doe</h1>
              <p class="text-gray-500 mb-2">john@example.com</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full">
                  12 Groups
                </span>
                <span class="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                  25 Friends
                </span>
                <span class="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full">
                  Member since 2023
                </span>
              </div>
            </div>
            <button
              class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              onClick={() => navigate("/user-profile")}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="bg-white p-6 rounded-lg border border-gray-200">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">Total Balance</h3>
            <svg
              class="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <p class="text-3xl font-bold text-gray-800">₹24,500</p>
          <p class="text-sm text-gray-500 mt-2">Updated 2 hours ago</p>
        </div>

        <div class="bg-white p-6 rounded-lg border border-gray-200">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">You Owe</h3>
            <svg
              class="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
              ></path>
            </svg>
          </div>
          <p class="text-3xl font-bold text-red-600">₹3,250</p>
          <p class="text-sm text-gray-500 mt-2">Across 3 groups</p>
        </div>

        <div class="bg-white p-6 rounded-lg border border-gray-200">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800">You're Owed</h3>
            <svg
              class="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
              ></path>
            </svg>
          </div>
          <p class="text-3xl font-bold text-green-600">₹5,800</p>
          <p class="text-sm text-gray-500 mt-2">From 5 friends</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg border border-gray-200">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800">Recent Activity</h3>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="p-4 hover:bg-gray-50">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="p-2 bg-blue-100 rounded-full">
                    <svg
                      class="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-800">
                      Added to Movie Night group
                    </p>
                    <p class="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 hover:bg-gray-50">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="p-2 bg-green-100 rounded-full">
                    <svg
                      class="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-800">
                      Received ₹1,200 from Sarah
                    </p>
                    <p class="text-xs text-gray-500">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-gray-200">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800">Your Statistics</h3>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm text-gray-600">
                    Groups Participation
                  </span>
                  <span class="text-sm font-medium text-gray-800">12/15</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-indigo-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm text-gray-600">Settlement Rate</span>
                  <span class="text-sm font-medium text-gray-800">95%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-green-600 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm text-gray-600">Active Friends</span>
                  <span class="text-sm font-medium text-gray-800">25/30</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-blue-600 h-2 rounded-full"
                    style={{ width: "83%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RecentTransactions />
    </section>
  );
};

export default Analytics;
