import React, { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../../store/userSlice";
import profilepic from "../../assets/logo.png";

const VerifyOTP = () => {
  const { message, isLoading, user_email, isLoggedIn, statusCode } =
    useSelector((state) => state.user);
  const [otp, setOTP] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVerify = () => {
    dispatch(verifyOtp({ user_email, otp }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <img
              className="absolute w-full h-full object-contain"
              src={profilepic}
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome to Splitzy
        </h1>
        <ErrorMessage message={message} statusCode={statusCode} />
        <form className="space-y-6">
          <div>
            <input
              type="otp"
              placeholder="Enter OTP"
              label="otp"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={isLoading}
            onClick={handleVerify}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
