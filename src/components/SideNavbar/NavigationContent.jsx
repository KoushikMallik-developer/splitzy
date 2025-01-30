import React, { useState, useEffect } from "react";
import { FaUserFriends } from "react-icons/fa";
import {
  MdDashboard,
  MdAnalytics,
  MdCurrencyExchange,
  MdGroups,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NavigationContent = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname.split("/").pop();
    setActiveItem(currentPath);
  }, []);

  const navigationItems = [
    {
      url: "dashboard",
      icon: <MdDashboard />,
      text: "Dashboard",
    },
    {
      url: "analytics",
      icon: <MdAnalytics />,
      text: "Analytics",
    },
    {
      url: "transactions",
      icon: <MdCurrencyExchange />,
      text: "Transactions",
    },
    {
      url: "groups",
      icon: <MdGroups />,
      text: "Groups",
    },
    {
      url: "friends",
      icon: <FaUserFriends />,
      text: "Friends",
    },
  ];

  return (
    <>
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">SplitMoney</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="space-y-2">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all ${
                  activeItem === item.url
                    ? "text-gray-800 bg-gray-200"
                    : "text-gray-600"
                }`}
                onClick={() => navigate(`/${item.url}`)}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationContent;
