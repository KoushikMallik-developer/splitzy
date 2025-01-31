import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BsXCircle } from "react-icons/bs";
import { resetMessages } from "../store/userSlice";

const ErrorMessage = ({ message, statusCode }) => {
  const dispatch = useDispatch();

  const success_status_code_list = [200, 201];
  const severity = success_status_code_list.includes(statusCode)
    ? "success"
    : "error";
  const variant = {
    containerClass: "border-red-500 bg-red-50",
    textClass: "text-red-800",
    iconColor: "text-red-500",
    Icon: BsXCircle,
  };

  const { containerClass, textClass, iconColor, Icon } = variant;

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(resetMessages());
      }, 4000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [message, dispatch]);

  return (
    <>
      {statusCode && severity == "error" && (
        <div
          className={`flex items-center p-4 mb-4 border rounded-lg ${containerClass} `}
          role="alert"
        >
          <Icon className={`w-5 h-5 mr-2 ${iconColor}`} />
          <div className={`flex-1 text-sm font-medium ${textClass}`}>
            {message}
          </div>
        </div>
      )}
    </>
  );
};
export default ErrorMessage;
