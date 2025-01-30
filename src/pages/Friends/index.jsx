import React, { useState } from "react";
import FriendCard from "../../components/Friends/FriendsCard";
import InviteModal from "../../components/InviteModal";

const Friends = () => {
  const [activeTab, setActiveTab] = useState("requests");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const friendRequests = [
    { id: 1, name: "Sarah Wilson", mutualFriends: 12 },
    { id: 2, name: "Michael Brown", mutualFriends: 8 },
    { id: 3, name: "Emily Davis", mutualFriends: 15 },
  ];

  const friends = [
    { id: 1, name: "Alex Johnson", mutualFriends: 5 },
    { id: 2, name: "Lisa Thompson", mutualFriends: 3 },
  ];

  return (
    <section id="friendsSection" className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Friends & Requests</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              onClick={handleOpenModal}
            >
              Invite Friends
            </button>
          </div>
        </div>
      </div>

      <div id="tabs" className="mb-8">
        <div className="flex flex-wrap space-x-4 border-b">
          <button
            onClick={() => setActiveTab("friends")}
            className={`px-6 py-3 whitespace-nowrap ${
              activeTab === "friends"
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            All Friends (67)
          </button>{" "}
          <button
            onClick={() => setActiveTab("requests")}
            className={`px-6 py-3 whitespace-nowrap ${
              activeTab === "requests"
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            Friend Requests (4)
          </button>
        </div>
      </div>

      {activeTab === "requests" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {friendRequests.map((user) => (
            <FriendCard key={user.id} friend={user} type="requests" />
          ))}
        </div>
      )}
      {activeTab === "friends" && (
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {friends.map((user) => (
              <FriendCard key={user.id} friend={user} type="friends" />
            ))}
          </div>
        </div>
      )}
      {isModalOpen ? (
        <InviteModal isOpen={handleOpenModal} onClose={handleCloseModal} />
      ) : null}
    </section>
  );
};

export default Friends;
