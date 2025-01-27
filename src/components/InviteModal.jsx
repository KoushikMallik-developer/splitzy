import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import {
  searchUsers,
  sendFirendRequest,
  removeFriendRequest,
} from "../store/userSlice";
import NameToAvatar from "./NameToAvatar";

const InviteModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [friendRequests, setFriendRequests] = useState({});

  useEffect(() => {
    if (searchTerm) {
      const debouncedFetch = debounce(async () => {
        const { payload } = await dispatch(searchUsers(searchTerm));
        setSearchResults(payload.data);
      }, 300);
      debouncedFetch();
      return () => {
        debouncedFetch.cancel();
      };
    }
  }, [searchTerm, dispatch]);

  const handleSendRequest = async (userId) => {
    // Dispatch action to send friend request
    const result = await dispatch(sendFirendRequest(userId));
    if (result.meta.requestStatus === "fulfilled") {
      setFriendRequests((prev) => ({ ...prev, [userId]: true }));
    }
  };

  const handleCancelRequest = async (userId) => {
    // Dispatch action to remove friend request
    const result = await dispatch(removeFriendRequest(userId));
    if (result.meta.requestStatus === "fulfilled") {
      setFriendRequests((prev) => ({ ...prev, [userId]: false }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative m-4">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Invite Friends</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Search for users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {searchResults.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center mb-2"
            >
              <div className="flex space-x-3 items-center">
                <NameToAvatar name={user.fname + " " + user.lname} />
                <span>{user.fname + " " + user.lname}</span>
              </div>
              {friendRequests[user.id] ? (
                <button
                  className="px-2 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  onClick={() => handleCancelRequest(user.id)}
                >
                  Cancel Request
                </button>
              ) : (
                <button
                  className="px-2 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => handleSendRequest(user.id)}
                >
                  Send Request
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InviteModal;
