import React, { useMemo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import NameToAvatar from "../NameToAvatar";
import { useNavigate } from "react-router-dom";
import { searchFriend } from "../../store/friendsSlice";

const SearchInput = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
    placeholder="Search for users..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

const CreateGroupModalContent = ({
  newGroupName,
  setNewGroupName,
  selectedUsers,
  setSelectedUsers,
  onCreateGroup,
  onClose,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedFetch = useMemo(
    () =>
      debounce(async (term) => {
        const { payload } = await dispatch(searchFriend(term));
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

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Create New Group</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Group Name
        </label>
        <input
          type="text"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Add Users
        </label>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="mt-2">
          {selectedUsers.map((user, index) => {
            return (
              <span
                key={index}
                className="inline-flex items-center bg-gray-200 text-xs text-gray-700 px-3 py-1 rounded-full mr-1 mb-1"
              >
                <NameToAvatar size={16} name={user.fname + " " + user.lname} />
                <span className="ml-1">{user.fname + " " + user.lname}</span>
                <button
                  className="ml-2 text-gray-500"
                  onClick={() => {
                    setSelectedUsers(
                      selectedUsers.filter((u) => u.id !== user.id)
                    );
                  }}
                >
                  &times;
                </button>
              </span>
            );
          })}
        </div>
        <ul>
          {searchResults &&
            searchResults.map((user) => (
              <li key={user.id} className="grid grid-cols-12 gap-4 mb-2">
                <div
                  className="col-span-8 flex space-x-3 items-center cursor-pointer"
                  onClick={() => navigate(`/user/${user.id}`)}
                >
                  <NameToAvatar name={user.fname + " " + user.lname} />
                  <span>{user.fname + " " + user.lname}</span>
                </div>
                <div className="col-span-4 flex justify-center">
                  <button
                    className="px-2 py-1 text-xs rounded-lg transition-colors bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => {
                      if (!selectedUsers.some((u) => u.id === user.id)) {
                        setSelectedUsers([...selectedUsers, user]);
                      }
                    }}
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    Add
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          onClick={onCreateGroup}
        >
          Create Group
        </button>
      </div>
    </div>
  );
};

export default CreateGroupModalContent;
