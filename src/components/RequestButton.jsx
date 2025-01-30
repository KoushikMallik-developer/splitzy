import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  sendFirendRequest,
  removeFriendRequest,
  acceptFirendRequest,
} from "../store/friendsSlice";
import ClickOutside from "./ClickOutside";

const RequestButton = ({ user }) => {
  const dispatch = useDispatch();
  const [isRequested, setIsRequested] = useState(user.is_requested);
  const [isReceived, setIsReceived] = useState(user.is_request_received);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleRequest = async () => {
    const action = isRequested ? removeFriendRequest : sendFirendRequest;
    const result = await dispatch(action(user.id));
    if (result.meta.requestStatus === "fulfilled") {
      setIsRequested(!isRequested);
    }
  };

  const handleAddFriend = async () => {
    const result = await dispatch(acceptFirendRequest(user.id));
    if (result.meta.requestStatus === "fulfilled") {
      setIsReceived(false);
      setIsRequested(true);
    }
  };

  const handleRemove = async () => {
    const result = await dispatch(removeFriendRequest(user.id));
    if (result.meta.requestStatus === "fulfilled") {
      setIsReceived(false);
    }
  };

  return (
    <div className="relative">
      {isReceived ? (
        <ClickOutside
          exceptionRef={dropdownRef}
          onClick={() => setShowDropdown(false)}
        >
          <div>
            <button
              className="px-2 py-1 text-sm rounded-lg transition-colors bg-yellow-600 text-white hover:bg-yellow-700"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Request Pending
            </button>
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg z-30"
              >
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-green-600 hover:bg-green-100"
                  onClick={handleAddFriend}
                >
                  Add Friend
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-100"
                  onClick={handleRemove}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </ClickOutside>
      ) : (
        <button
          className={`px-2 py-1 text-xs rounded-lg transition-colors ${
            isRequested
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          onClick={handleRequest}
        >
          {isRequested ? "Cancel Request" : "Send Request"}
        </button>
      )}
    </div>
  );
};

export default RequestButton;
