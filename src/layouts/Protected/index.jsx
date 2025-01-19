import { Navigate, Outlet } from "react-router-dom";
import * as React from "react";
import { useSelector } from "react-redux";

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  console.log(isLoggedIn);
  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
