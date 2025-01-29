import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { searchUsers } from "../store/userSlice";
import NameToAvatar from "./NameToAvatar";
import RequestButton from "./RequestButton";

const SearchInput = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
    placeholder="Search for users..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

const InviteModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);

  const debouncedFetch = useMemo(
    () =>
      debounce(async (term) => {
        const { payload } = await dispatch(searchUsers(term));
        setSearchResults(payload.data);
      }, 300),
    [dispatch]
  );

  useEffect(() => {
    if (searchTerm) {
      debouncedFetch(searchTerm);
    }
    return () => {
      debouncedFetch.cancel();
    };
  }, [searchTerm, debouncedFetch]);

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
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ul>
          {searchResults &&
            searchResults.map((user) => (
              <li
                key={user.id}
                className="flex justify-between items-center mb-2"
              >
                <div className="flex space-x-3 items-center">
                  <NameToAvatar name={user.fname + " " + user.lname} />
                  <span>{user.fname + " " + user.lname}</span>
                </div>
                <RequestButton user={user} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default InviteModal;
