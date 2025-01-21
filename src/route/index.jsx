import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React, { lazy } from "react";
import DefaultLayout from "../layouts/Default/index.jsx";
import AuthLayout from "../layouts/Auth";
import ProtectedRoute from "../layouts/Protected/index.jsx";
const HomePage = lazy(() => withMinDelay(import("../pages/Home")));
const LoginPage = lazy(() => withMinDelay(import("../pages/Login")));
const RegisterPage = lazy(() =>
  withMinDelay(import("../pages/Register/index.jsx"))
);
const VerifyOTP = lazy(() => withMinDelay(import("../pages/VerifyOTP")));
const DashboardPage = lazy(() => withMinDelay(import("../pages/Dashboard")));
const Transaction = lazy(() => withMinDelay(import("../pages/Transaction")));
const Groups = lazy(() => withMinDelay(import("../pages/Groups")));
const Friends = lazy(() => withMinDelay(import("../pages/Friends")));

const withMinDelay = async (importPromise) => {
  return Promise.all([
    importPromise,
    new Promise((resolve) => setTimeout(resolve, 330)),
  ]).then(([module]) => module);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />, // Use correct component
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
          {
            path: "verify-otp",
            element: <VerifyOTP />,
          },
        ],
      },
      // {
      //     path: "forgot-password",
      //     element: <ForgotPassword />
      // },
      // {
      //     path : "reset-password",
      //     element : <ResetPassword/>
      // },
      {
        path: "",
        element: <DefaultLayout />,
        children: [
          {
            path: "dashboard",
            element: (
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            ),
          },
          {
            path: "transactions",
            element: (
              <ProtectedRoute>
                <Transaction />
              </ProtectedRoute>
            ),
          },
          {
            path: "groups",
            element: (
              <ProtectedRoute>
                <Groups />
              </ProtectedRoute>
            ),
          },
          {
            path: "friends",
            element: (
              <ProtectedRoute>
                <Friends />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
