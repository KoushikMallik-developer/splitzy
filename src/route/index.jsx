import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/Register/index.jsx";
import DefaultLayout from "../layouts/Default/index.jsx";
import AuthLayout from "../layouts/Auth";
import ProtectedRoute from "../layouts/Protected/index.jsx";
import HomePage from "../pages/Home/index.jsx";
import LoginPage from "../pages/Login/index.jsx"; // Ensure correct import
import VerifyOTP from "../pages/VerifyOTP/index.jsx";
import DashboardPage from "../pages/Dashboard";

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
        path: "user",
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
        ],
      },
    ],
  },
]);

export default router;
