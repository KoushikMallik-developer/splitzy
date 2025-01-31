import React, { useEffect, useState } from "react";
import NameToAvatar from "../../components/NameToAvatar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeFriend,
  sendFriendRequest,
  userDetailsByID,
} from "../../store/friendsSlice";
import Loader from "../../components/Loader";
import { convertDateString } from "../../utils/dateFormatter";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { id: friendId } = useParams();
  const [friend, setFriend] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchFriendData = async () => {
    setLoading(true);
    await dispatch(userDetailsByID(friendId)).then((response) => {
      setFriend(response.payload.data);
      console.log(response.payload.data);
      setLoading(false);
    });
  };

  const handleFriendAction = async () => {
    if (friend.is_friend) {
      const result = await dispatch(removeFriend(friend.id));
      if (result.meta.requestStatus === "fulfilled") {
        setFriend({ ...friend, is_friend: !friend.is_friend });
      }
    } else {
      const result = await dispatch(sendFriendRequest(friend.id));
      if (result.meta.requestStatus === "fulfilled") {
        setFriend({ ...friend, is_friend: !friend.is_friend });
      }
    }
  };

  useEffect(() => {
    fetchFriendData();
    console.log(friend);
  }, [friendId]);

  return loading ? (
    <Loader />
  ) : (
    <section id="profile" className="p-6">
      <div className="bg-white rounded-lg border border-gray-200 mb-6 text-center">
        <div className="p-6">
          <div className="w-24 h-24 rounded-full mx-auto mb-4">
            <NameToAvatar size={100} name={friend.fname + " " + friend.lname} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {friend.fname + " " + friend.lname}
          </h1>
          <p className="text-gray-500 mb-2">{friend.email}</p>
          <div className="flex justify-center">
            <button
              className={`px-4 py-2 text-sm rounded flex items-center ${
                friend.is_friend ? "bg-red-500" : "bg-blue-500"
              } text-white mb-4`}
              onClick={handleFriendAction}
            >
              {friend.is_friend ? (
                <>
                  <AiOutlineUserDelete className="mr-2" /> Remove Friend
                </>
              ) : (
                <>
                  <AiOutlineUserAdd className="mr-2" /> Add Friend
                </>
              )}
            </button>
          </div>
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
            <p className="text-gray-900">{friend.fname + " " + friend.lname}</p>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Date of Birth
            </label>
            <p className="text-gray-900">{convertDateString(friend.dob)}</p>
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
