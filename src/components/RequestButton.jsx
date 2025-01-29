import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendFirendRequest, removeFriendRequest } from '../store/userSlice';

const RequestButton = ({ user }) => {
  const dispatch = useDispatch();
  const [isRequested, setIsRequested] = useState(user.is_requested);

  const handleRequest = async () => {
    const action = isRequested ? removeFriendRequest : sendFirendRequest;
    const result = await dispatch(action(user.id));
    if (result.meta.requestStatus === "fulfilled") {
      setIsRequested(!isRequested);
    }
  };

  return (
    <button
      className={`px-2 py-1 text-sm rounded-lg transition-colors ${
        isRequested ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
      onClick={handleRequest}
    >
      {isRequested ? 'Cancel Request' : 'Send Request'}
    </button>
  );
};

export default RequestButton;
