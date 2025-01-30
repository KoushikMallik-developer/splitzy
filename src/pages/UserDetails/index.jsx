import React from "react";

const UserDetails = () => {
  return (
    <section id="profile" class="p-6">
      <div class="bg-white rounded-lg border border-gray-200 mb-6">
        <div class="p-6">
          <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={""}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
