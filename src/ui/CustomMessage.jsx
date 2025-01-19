import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BsXCircle } from "react-icons/bs";
import { MdOutlineCheckCircle } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { resetMessages } from "../store/userSlice";

const variants = {
  success: {
    containerClass: "border-green-500 bg-green-50",
    textClass: "text-green-800",
    iconColor: "text-green-500",
    Icon: MdOutlineCheckCircle,
  },
  error: {
    containerClass: "border-red-500 bg-red-50",
    textClass: "text-red-800",
    iconColor: "text-red-500",
    Icon: BsXCircle,
  },
  info: {
    containerClass: "border-blue-500 bg-blue-50",
    textClass: "text-blue-800",
    iconColor: "text-blue-500",
    Icon: IoInformationCircleOutline,
  },
};

const CustomMessage = ({ message, statusCode }) => {
  const dispatch = useDispatch();
  const success_status_code_list = [200, 201];
  const severity = success_status_code_list.includes(statusCode)
    ? "success"
    : "error";

  const variant = variants[severity] || variants.info;
  const { containerClass, textClass, iconColor, Icon } = variant;

  if (!message) return null;

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(resetMessages());
      }, 10000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [message, dispatch]);

  return (
    <div
      className={`flex items-center p-4 mb-4 border rounded-lg ${containerClass} `}
      role="alert"
    >
      <Icon className={`w-5 h-5 mr-2 ${iconColor}`} />
      <div className={`flex-1 text-sm font-medium ${textClass}`}>{message}</div>
    </div>
  );
};
export default CustomMessage;
