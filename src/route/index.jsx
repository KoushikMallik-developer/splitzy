import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/index.jsx";
import LoginPage from "../pages/Login/index.jsx";
import RegisterPage from "../pages/Register/index.jsx";
import DefaultLayout from "../layouts/Dashboard/index.jsx";
import AuthLayout from "../layouts/Auth";
import Login from "../pages/Login/index.jsx";
import VerifyOTP from "../pages/VerifyOTP/index.jsx";

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
            path: "/login",
            element: <Login />,
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
            element: <>Hiinooobiesss</>,
          },
        ],
      },
    ],
  },
]);

export default router;
