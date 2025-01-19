import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye, FaGoogle } from "react-icons/fa";
import profilepic from "../../assets/logo.png";
import { registerUser } from "../../store/userSlice";
import toast from "react-hot-toast";
import CustomMessage from "../../components/CustomMessage";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message, isLoading, user_email, statusCode } = useSelector(
    (state) => state.user
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    try {
      // if (password !== confirmPassword) {
      //   toast.error("Password Mismatch");
      // } else {
        dispatch(registerUser({ name, email, password }));
      // }
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    if (message && user_email) {
      const timer = setTimeout(() => {
        navigate("/verify-otp");
      }, 200);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [message, user_email]);

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
        <CustomMessage message={message} statusCode={statusCode} />
        <form className="space-y-6">
          <div>
            <input
              type="name"
              placeholder="Full Name"
              label="Full Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              label="Email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <div className="relative w-full lg:w-1/2">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <FaRegEyeSlash className="h-5 w-5" />
                ) : (
                  <FaRegEye className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="relative w-full lg:w-1/2 mt-4 lg:mt-0">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                label="Confirm Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <FaRegEyeSlash className="h-5 w-5" />
                ) : (
                  <FaRegEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={isLoading}
            onClick={handleRegister}
          >
            Register
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2 mb-1.5">
            <FaGoogle size={20} />
            <span>Sign in with Google </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
