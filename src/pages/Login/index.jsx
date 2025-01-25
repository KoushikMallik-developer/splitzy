import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEyeSlash, FaRegEye, FaGoogle, FaFacebook } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/userSlice";
import ErrorMessage from "../../components/ErrorMessage";

const Login = () => {
  const { message, isLoading, statusCode, isLoggedIn } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      dispatch(loginUser({ email, password }));
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 200);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isLoggedIn]);

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <img
              className="absolute w-full h-full object-contain"
              src={Logo}
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-8 text-center">
          Welcome to Splitzy
        </h1>
        <ErrorMessage message={message} statusCode={statusCode} />
        {/* {children} */}
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              label="Email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <div className="relative">
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
          </div>

          <div className="text-right">
            <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleLogin}
            disabled={isLoading}
          >
            Login
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
          <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2 mb-3">
            <FaGoogle size={20} />
            <span>Sign in with Google </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
