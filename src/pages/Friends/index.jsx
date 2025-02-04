import React, { useState, useEffect } from "react";
import FriendCard from "../../components/Friends/FriendsCard";
import InviteModal from "../../components/Friends/InviteModal";
import { useDispatch } from "react-redux";
import {
  acceptFirendRequest,
  getAllFriendRequests,
  getAllFriends,
  removeFriendRequest,
} from "../../store/friendsSlice";
import Loader from "../../components/Loader";

const Friends = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("friends");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleRequest = async (id, actionType) => {
    setLoading(true);
    const action =
      actionType === "remove" ? removeFriendRequest : acceptFirendRequest;
    await dispatch(action(id));
    dispatch(getAllFriendRequests()).then((response) => {
      setFriendRequests(response.payload.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    if (activeTab === "requests") {
      dispatch(getAllFriendRequests()).then((response) => {
        setFriendRequests(response.payload.data);
        setLoading(false);
      });
    } else if (activeTab === "friends") {
      dispatch(getAllFriends()).then((response) => {
        setFriends(response.payload.data);
        setLoading(false);
      });
    }
  }, [dispatch, activeTab]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
            All Friends {friends.length == 0 ? "" : `(${friends.length})`}
          </button>{" "}
          <button
            onClick={() => setActiveTab("requests")}
            className={`px-6 py-3 whitespace-nowrap ${
              activeTab === "requests"
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            Friend Requests
            {friendRequests.length == 0 ? "" : `(${friendRequests.length})`}
          </button>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          {activeTab === "requests" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {friendRequests.length == 0
                ? "No Pending Requests"
                : friendRequests.map((user) => (
                    <FriendCard
                      key={user.id}
                      friend={user.user}
                      type="requests"
                      handleRequest={handleRequest}
                    />
                  ))}
            </div>
          )}
          {activeTab === "friends" && (
            <div className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {friends.length == 0
                  ? "You have no friends to display"
                  : friends.map((user) => (
                      <FriendCard
                        key={user.id}
                        friend={user}
                        type="friends"
                        handleRequest={handleRequest}
                      />
                    ))}
              </div>
            </div>
          )}
        </>
      )}
      {isModalOpen ? (
        <InviteModal isOpen={handleOpenModal} onClose={handleCloseModal} />
      ) : null}
    </section>
  );
};

export default Friends;
