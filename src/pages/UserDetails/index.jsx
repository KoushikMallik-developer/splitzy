import React from "react";

const UserDetails = () => {
  return (
    <section id="profile" className="p-6">
      <div className="bg-white rounded-lg border border-gray-200 mb-6 text-center">
        <div className="p-6">
          <img
            src={""}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-1">John Doe</h1>
          <p className="text-gray-500 mb-2">john@example.com</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
        {[
          { value: "246", label: "Friends" },
          { value: "15", label: "Groups" },
          { value: "128", label: "Transactions" },
          { value: "12th Jan,2024", label: "Member Since" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm text-center"
          >
            <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Full Name
            </label>
            <p className="text-gray-900">John Doe</p>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Date of Birth
            </label>
            <p className="text-gray-900">January 1, 1990</p>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Bio
            </label>
            <p className="text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
